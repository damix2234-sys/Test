# Anatomical two-bone arm solver.
#  - elbow is a pure hinge; the elbow "swivel" around the shoulder-wrist axis and the left hand's roll around the
#    grip are chosen per frame by minimising an anatomical cost (wrist flexion/deviation and forearm pronation inside
#    human ranges, elbows low, no arm in the torso / other arm / sword), with a Viterbi pass for temporal smoothness
#  - forearm pronation is carried by a twist bone (lowerarm_twist_01) and the hand, never by the elbow
#  - humeral twist is partly cancelled near the shoulder by upperarm_twist_01
import bpy, math
import rig2
import numpy as np
from mathutils import Vector, Matrix, Quaternion

FWD = Vector((0, -1, 0))
NPHI = 72                       # swivel samples (5 deg)
# hand-on-grip slack: roll around the grip axis, and the grip's diagonal angle across the palm (about the palm normal)
# (the handle pivots further along the forearm when the arms extend: negative angle for the right hand, positive for the left)
VAR = {'r': [(math.radians(r), math.radians(a)) for r in (-10, 0, 10) for a in (-24, -16, -8, 0, 8)],
       'l': [(math.radians(r), math.radians(a)) for r in range(-60, 61, 15) for a in (-8, 0, 8, 16, 24)]}
VAR_W = {'r': (10.0, 16.0), 'l': (28.0, 16.0)}      # prior widths (deg) for roll / grip angle
K_FORE = 0.62                   # share of the forearm twist given to lowerarm_twist_01
K_UP = 0.5                      # upperarm_twist_01 = shoulder half-joint (half of the upper arm rotation)
TW_FORE = {s: f'lowerarm_twist_01_{s}' for s in 'rl'}
TW_UP = {s: f'upperarm_twist_01_{s}' for s in 'rl'}
# anatomical limits (deg): (soft comfort range, hard limit)
LIM = {'pron': (60, 85), 'wflex_pos': (45, 68), 'wflex_neg': (40, 58), 'rad': (12, 20), 'uln': (30, 42)}


def frame_xy(x, y):
    """3x3 with columns X, Y, Z=X x Y from an approximate X and exact Y"""
    y = y.normalized(); x = (x - y * x.dot(y)).normalized(); z = x.cross(y)
    return Matrix((x, y, z)).transposed()


def swing_twist_y(q):
    """twist angle of quaternion q about local Y"""
    tw = Quaternion((q.w, 0, q.y, 0))
    if tw.magnitude < 1e-9: return 0.0
    tw.normalize()
    a = 2 * math.atan2(tw.y, tw.w)
    return (a + math.pi) % (2 * math.pi) - math.pi


class ArmSolver:
    def __init__(self, arm, body):
        self.arm = arm; self.body = body
        R = {b.name: b.matrix_local.copy() for b in arm.data.bones}
        self.R = R
        self.L1 = {s: (R[f'lowerarm_{s}'].translation - R[f'upperarm_{s}'].translation).length for s in 'rl'}
        self.L2 = {s: (R[f'hand_{s}'].translation - R[f'lowerarm_{s}'].translation).length for s in 'rl'}
        self.Hloc, self.Tloc, self.PNloc, self.Qup, self.Qlo = {}, {}, {}, {}, {}
        for s in 'rl':
            u = (R[f'lowerarm_{s}'].translation - R[f'upperarm_{s}'].translation).normalized()
            f = (R[f'hand_{s}'].translation - R[f'lowerarm_{s}'].translation).normalized()
            h = u.cross(FWD).normalized()                      # flexion brings the forearm forward
            self.Qup[s] = frame_xy(h, u).inverted() @ R[f'upperarm_{s}'].to_3x3()
            self.Qlo[s] = frame_xy(h, f).inverted() @ R[f'lowerarm_{s}'].to_3x3()
            Hm = R[f'hand_{s}'].to_3x3(); d = (Hm @ Vector((0, 1, 0))).normalized()
            pn = Vector((0, 0, -1)); pn = (pn - d * pn.dot(d)).normalized()
            t = pn.cross(d).normalized()
            if t.dot(FWD) < 0: t = -t
            self.Tloc[s] = Hm.inverted() @ t; self.PNloc[s] = Hm.inverted() @ pn
        self.PS = {'r': -1, 'l': 1}
        self._torso_model()

    # ---------------- torso volume (rest elliptic slices, mapped through the spine bones) ----------------
    def _torso_model(self):
        body = self.body; R = self.R
        gi = {g.index: g.name for g in body.vertex_groups}
        TORSO = {'pelvis', 'spine_01', 'spine_02', 'spine_03'}
        pts = []
        lim = {s: [] for s in 'rl'}; fa = {s: [] for s in 'rl'}
        for v in body.data.vertices:
            if not v.groups: continue
            g = max(v.groups, key=lambda g: g.weight); n = gi[g.group]
            if (n in TORSO and g.weight > 0.5) or (n.startswith('clavicle') and abs(v.co.x) < 0.15) or (n == 'neck_01' and v.co.z < 1.60):
                pts.append(tuple(v.co))
            for s in 'rl':
                if n == f'upperarm_{s}' and g.weight > 0.7:
                    a = R[f'upperarm_{s}'].translation; b = R[f'lowerarm_{s}'].translation
                    t = (v.co - a).dot(b - a) / (b - a).length_squared
                    if 0.3 < t < 0.9: lim[s].append((v.co - (a + (b - a) * t)).length)
                if n == f'lowerarm_{s}' and g.weight > 0.7:
                    a = R[f'lowerarm_{s}'].translation; b = R[f'hand_{s}'].translation
                    t = (v.co - a).dot(b - a) / (b - a).length_squared
                    if 0.15 < t < 0.85: fa[s].append((v.co - (a + (b - a) * t)).length)
        P = np.array(pts)
        zs = np.arange(0.90, 1.60, 0.02)
        sl = []
        for z in zs:
            m = np.abs(P[:, 2] - z) < 0.015
            if m.sum() < 8: sl.append(None); continue
            Q = P[m]
            xc = 0.0; ax = np.percentile(np.abs(Q[:, 0]), 97)
            y0, y1 = np.percentile(Q[:, 1], 2), np.percentile(Q[:, 1], 98)
            sl.append((xc, (y0 + y1) / 2, ax, (y1 - y0) / 2))
        # fill gaps
        last = None
        for i in range(len(sl)):
            if sl[i] is None: sl[i] = last
            else: last = sl[i]
        for i in range(len(sl) - 1, -1, -1):
            if sl[i] is None: sl[i] = sl[i + 1]
        self.tz = zs; self.tsl = np.array(sl)
        self.r_up = {s: float(np.percentile(lim[s], 75)) for s in 'rl'}
        self.r_fa = {s: float(np.percentile(fa[s], 75)) for s in 'rl'}
        self.bands = []
        names = ['pelvis', 'spine_01', 'spine_02', 'spine_03']
        heads = [R[n].translation.z for n in names] + [R['neck_01'].translation.z]
        for i, n in enumerate(names):
            z0 = -1 if i == 0 else heads[i]; z1 = heads[i + 1] if i < 3 else 9
            self.bands.append((n, z0, z1))
        print('torso slices', len(sl), 'r_up', {k: round(v, 3) for k, v in self.r_up.items()}, 'r_fa', {k: round(v, 3) for k, v in self.r_fa.items()})

    def torso_pen(self, P, rl, Minv):
        """P: (n,3) world points; rl: limb radius; Minv: list of (name, z0, z1, 4x4 inverse deformation as np)
        returns penetration depth (m) per point"""
        n = P.shape[0]
        Ph = np.c_[P, np.ones(n)]
        best = np.full(n, 0.0); chosen = np.zeros(n, bool)
        for name, z0, z1, Mi in Minv:
            Q = Ph @ Mi.T
            inb = (Q[:, 2] >= z0) & (Q[:, 2] < z1) & ~chosen
            if not inb.any(): continue
            z = np.clip(Q[inb, 2], self.tz[0], self.tz[-1])
            k = np.clip(((z - self.tz[0]) / 0.02).astype(int), 0, len(self.tz) - 2)
            fr = (z - self.tz[k]) / 0.02
            S = self.tsl[k] * (1 - fr)[:, None] + self.tsl[k + 1] * fr[:, None]
            ax = S[:, 2] + rl; ay = S[:, 3] + rl
            rho = np.sqrt(((Q[inb, 0] - S[:, 0]) / ax) ** 2 + ((Q[inb, 1] - S[:, 1]) / ay) ** 2)
            d = np.clip(1 - rho, 0, None) * np.minimum(ax, ay)
            best[inb] = d; chosen |= inb
        return best

    # ---------------- per-frame problem ----------------
    def problem(self, pb, HR, HL, W, active=('r', 'l'), lfree=0.0):
        """capture everything the cost needs for one frame (call after spine/clavicles are posed)"""
        C = pb['spine_03'].matrix.to_3x3() @ self.R['spine_03'].to_3x3().inverted()
        pr = dict(active=active, HR=HR.copy(), HL=HL.copy(), W=W.copy(), lfree=lfree,
                  up=C @ Vector((0, 0, 1)), fwd=C @ FWD, S={s: pb[f'upperarm_{s}'].matrix.translation.copy() for s in 'rl'})
        Minv = []
        for name, z0, z1 in self.bands:
            Md = pb[name].matrix @ self.R[name].inverted()
            Minv.append((name, z0, z1, np.array(Md.inverted())))
        pr['Minv'] = Minv
        return pr

    def hand_target(self, pr, s, var=(0.0, 0.0)):
        """hand 4x4 target with grip slack var=(roll about the grip axis, grip angle about the palm normal), pivot = grip centre"""
        H = pr['HR'] if s == 'r' else pr['HL']
        roll, ang = var
        if (roll == 0.0 and ang == 0.0) or (s == 'l' and pr['lfree'] > 0.5): return H
        W = pr['W']; b = (W.to_3x3() @ rig2.B_REST).normalized()
        G = W.translation if s == 'r' else W.translation - b * rig2.LH_OFF
        pn = (H.to_3x3() @ self.PNloc[s]).normalized()
        Rr = Matrix.Rotation(ang, 4, pn) @ Matrix.Rotation(roll, 4, b)
        return Matrix.Translation(G) @ Rr @ Matrix.Translation(-G) @ H

    def geometry(self, pr, s, H, phis):
        """elbow candidates for swivel angles phis (deg array). returns dict of numpy arrays"""
        S = pr['S'][s]; Wp = H.translation
        L1, L2 = self.L1[s], self.L2[s]
        a = Wp - S; D = a.length; a = a / max(D, 1e-6)
        Dc = min(D, (L1 + L2) * 0.9995)
        x = (L1 * L1 - L2 * L2 + Dc * Dc) / (2 * Dc); r = math.sqrt(max(L1 * L1 - x * x, 0.0))
        up, fwd = pr['up'], pr['fwd']
        lat = up.cross(fwd).normalized() * (-1 if s == 'r' else 1)   # up x fwd = +X = character's left
        ref = (-up - fwd * 0.25); dn = (ref - a * ref.dot(a)).normalized()
        lt = lat - a * lat.dot(a) - dn * lat.dot(dn); lt.normalize()
        ph = np.radians(phis)
        A = np.array(a); DN = np.array(dn); LT = np.array(lt)
        edir = np.cos(ph)[:, None] * DN[None] + np.sin(ph)[:, None] * LT[None]
        Sv = np.array(S)
        E = Sv[None] + A[None] * x + edir * r
        return dict(S=Sv, E=E, Wp=np.array(Wp), a=A, edir=edir, reach=D - (L1 + L2) * 0.9995, D=D)

    def angles(self, pr, s, H, g):
        """anatomical angles for every swivel candidate"""
        Rh = H.to_3x3()
        d = np.array((Rh @ Vector((0, 1, 0))).normalized()); t = np.array((Rh @ self.Tloc[s]).normalized()); pn = np.array((Rh @ self.PNloc[s]).normalized())
        E = g['E']; S = g['S']; Wp = g['Wp']
        u = E - S; u /= np.linalg.norm(u, axis=1)[:, None]
        f = Wp[None] - E; f /= np.linalg.norm(f, axis=1)[:, None]
        h = np.cross(g['edir'], g['a'][None]); h /= np.linalg.norm(h, axis=1)[:, None]
        n0 = np.cross(h, f); n0 /= np.linalg.norm(n0, axis=1)[:, None]
        tp = t[None] - f * (f @ t)[:, None]; tp /= np.maximum(np.linalg.norm(tp, axis=1)[:, None], 1e-9)
        pron = np.degrees(np.arctan2(np.einsum('ij,ij->i', f, np.cross(n0, tp)), np.einsum('ij,ij->i', n0, tp))) * self.PS[s]
        wflex = np.degrees(np.arctan2(-(f @ pn), f @ d))
        wdev = np.degrees(np.arctan2(-(f @ t), f @ d))
        return dict(u=u, f=f, h=h, pron=pron, wflex=wflex, wdev=wdev)

    def cost(self, pr, s, H, phis, other=None, pref=None):
        g = self.geometry(pr, s, H, phis); an = self.angles(pr, s, H, g)
        up, fwd = pr['up'], pr['fwd']; lat = up.cross(fwd).normalized() * (-1 if s == 'r' else 1)
        def soft(v, lo_soft, lo_hard, hi_soft, hi_hard):
            c = np.zeros_like(v)
            for sgn, so, ha in ((1, hi_soft, hi_hard), (-1, lo_soft, lo_hard)):
                x = np.maximum(sgn * v - so, 0)
                c += (x / 10.0) ** 2 * 2.0 + (np.maximum(sgn * v - ha, 0) / 5.0) ** 2 * 40.0
            return c
        c = soft(an['pron'], LIM['pron'][0], LIM['pron'][1], LIM['pron'][0], LIM['pron'][1])
        c += soft(an['wflex'], LIM['wflex_neg'][0], LIM['wflex_neg'][1], LIM['wflex_pos'][0], LIM['wflex_pos'][1])
        c += soft(an['wdev'], LIM['uln'][0], LIM['uln'][1], LIM['rad'][0], LIM['rad'][1])
        c += (an['pron'] / 45) ** 2 * 1.0 + (an['wflex'] / 55) ** 2 * 0.6 + (an['wdev'] / 30) ** 2 * 0.6
        # elbow orientation: low and slightly outward; higher hands allow the elbow to rise outward/forward
        hz = g['Wp'][2] - g['S'][2]
        hi = float(np.clip((hz + 0.05) / 0.35, 0, 1))
        p0 = 10 + 50 * hi if pref is None else pref
        ph = np.radians(phis)
        c += (1 - np.cos(ph - math.radians(p0))) * (8.0 - 3.0 * hi)
        c += (np.maximum(np.abs(phis) - (95 + 20 * hi), 0) / 10) ** 2 * 3.0      # elbow up / inside
        # the elbow should not rise above the shoulder unless the hands are high
        ez = g['E'][:, 2] - g['S'][2]
        c += (np.maximum(ez - (0.02 + 0.25 * hi), 0) / 0.03) ** 2 * 1.5
        # extreme horizontal adduction (upper arm pressed across the chest at shoulder height) crushes the skin of the
        # inner arm into the pectoral: discourage it
        uu = an['u']; latv = np.array(lat); fwv = np.array(fwd); upv = np.array(up)
        az = np.degrees(np.arctan2(uu @ fwv, uu @ latv)); elv = np.degrees(np.arccos(np.clip(-(uu @ upv), -1, 1)))
        c += (np.maximum(az - 105, 0) / 10) ** 2 * 3.0 * np.clip((elv - 45) / 25, 0, 1)
        # collisions: upper arm (distal 2/3) and forearm vs torso
        n = len(phis)
        ts_u = np.array([0.42, 0.56, 0.7, 0.85, 1.0]); ts_f = np.array([0.0, 0.2, 0.4, 0.6, 0.8, 0.95])
        Pu = g['S'][None, None] + (g['E'] - g['S'][None])[:, None] * ts_u[None, :, None]
        Pf = g['E'][:, None] + (g['Wp'][None] - g['E'])[:, None] * ts_f[None, :, None]
        du = self.torso_pen(Pu.reshape(-1, 3), self.r_up[s], pr['Minv']).reshape(n, -1).max(1)
        dfo = np.zeros(n)
        for j, tf in enumerate(ts_f):
            dfo = np.maximum(dfo, self.torso_pen(Pf[:, j], self.r_fa[s] * (1 - 0.25 * tf), pr['Minv']))
        c += (np.maximum(np.maximum(du, dfo) - 0.004, 0) / 0.01) ** 2 * 8.0
        # the fist itself (around the handle) must stay off the body
        Wm = pr['W']; bb = (Wm.to_3x3() @ rig2.B_REST).normalized()
        fist = Wm.translation if s == 'r' else Wm.translation - bb * rig2.LH_OFF
        dh = float(self.torso_pen(np.array([tuple(fist)]), 0.045, pr['Minv'])[0]) if not (s == 'l' and pr['lfree'] > 0.5) else 0.0
        c += (max(dh - 0.003, 0) / 0.01) ** 2 * 8.0
        # sword (pommel / grip / blade) vs forearm and upper arm
        W = pr['W']; G = np.array(W.translation); b = np.array((W.to_3x3() @ rig2.B_REST).normalized())
        sp = [(G - b * 0.154, 0.031), (G - b * 0.134, 0.017)] + [(G + b * dd, 0.01) for dd in (0.10, 0.16, 0.22, 0.30, 0.40, 0.55)]
        segs = [(g['E'], g['Wp'][None].repeat(n, 0), self.r_fa[s], 0.85), (g['S'][None].repeat(n, 0) + (g['E'] - g['S'][None]) * 0.3, g['E'], self.r_up[s], 1.0)]
        worst = np.zeros(n)
        for A0, A1, rl, tmax in segs:
            sv = A1 - A0; L2_ = np.einsum('ij,ij->i', sv, sv)
            for p, rp in sp:
                tt = np.clip(np.einsum('ij,ij->i', p[None] - A0, sv) / np.maximum(L2_, 1e-9), 0, tmax)
                q = A0 + sv * tt[:, None]
                dist = np.linalg.norm(p[None] - q, axis=1)
                worst = np.maximum(worst, (rl * 0.92 + rp) - dist)
        c += (np.maximum(worst, 0) / 0.01) ** 2 * 3.0
        # other arm (already solved): capsule distances
        if other is not None:
            worst = np.zeros(n)
            for (B0, B1, rb) in other:
                for A0, A1, ra in ((g['S'][None].repeat(n, 0) + (g['E'] - g['S'][None]) * 0.35, g['E'], self.r_up[s]), (g['E'], g['Wp'][None].repeat(n, 0) - (g['Wp'][None] - g['E']) * 0.25, self.r_fa[s])):
                    dd = seg_seg_dist(A0, A1, B0, B1)
                    worst = np.maximum(worst, (ra + rb) * 0.95 - dd)
            c += (np.maximum(worst, 0) / 0.01) ** 2 * 3.0
        if g['reach'] > -0.01: c += ((g['reach'] + 0.01) / 0.01) ** 2 * 40.0      # keep 1 cm of slack: no locked or stretched arms
        return c, an, g

    def segments(self, pr, s, H, phi):
        g = self.geometry(pr, s, H, np.array([phi]))
        S = g['S']; E = g['E'][0]; Wp = g['Wp']
        return [(S + (E - S) * 0.35, E, self.r_up[s]), (E, Wp - (Wp - E) * 0.25, self.r_fa[s])]

    # ---------------- temporal optimisation ----------------
    def solve_track(self, probs, s, others=None, return_cost=False):
        """joint Viterbi over (elbow swivel, hand-on-grip slack) with separable smoothness; returns per-frame (phi, (roll, angle))"""
        phis = np.arange(NPHI) * (360.0 / NPHI) - 180.0
        T = len(probs)
        V = VAR[s]; wr, wa = VAR_W[s]; NV = len(V)
        vr = np.degrees(np.array([v[0] for v in V])); va = np.degrees(np.array([v[1] for v in V]))
        C = np.full((T, NPHI, NV), 1e6)
        for i, pr in enumerate(probs):
            if s not in pr['active']: C[i] = 0.0; continue
            for k, var in enumerate(V):
                if s == 'l' and pr['lfree'] > 0.5 and var != (0.0, 0.0): continue
                H = self.hand_target(pr, s, var)
                c, _, _ = self.cost(pr, s, H, phis, other=None if others is None else others[i])
                C[i, :, k] = c + (vr[k] / wr) ** 2 + (va[k] / wa) ** 2
        dphi = (phis[None, :] - phis[:, None] + 180) % 360 - 180
        Tp = (dphi / 6.0) ** 2                                   # [phi_prev, phi]
        Tv = ((vr[:, None] - vr[None, :]) / 7.0) ** 2 + ((va[:, None] - va[None, :]) / 5.0) ** 2   # [v_prev, v]
        acc = C[0].copy()
        bv = np.zeros((T, NPHI, NV), int); bp = np.zeros((T, NPHI, NV), int)
        for i in range(1, T):
            M1 = acc[:, :, None] + Tv[None, :, :]                # [phi_prev, v_prev, v]
            bv_i = M1.argmin(1); m1 = M1.min(1)                  # [phi_prev, v]
            M2 = m1[:, None, :] + Tp[:, :, None]                 # [phi_prev, phi, v]
            bp_i = M2.argmin(0); acc = M2.min(0) + C[i]          # [phi, v]
            bp[i] = bp_i
            bv[i] = bv_i[bp_i, np.arange(NV)[None, :]]
        ip, iv = np.unravel_index(acc.argmin(), acc.shape)
        path = [(ip, iv)]
        for i in range(T - 1, 0, -1):
            pp = bp[i][ip, iv]; vv = bv[i][ip, iv]
            ip, iv = pp, vv; path.append((ip, iv))
        path.reverse()
        out = []; costs = []
        for i, pr in enumerate(probs):
            ip, iv = path[i]
            if s not in pr['active']: out.append((0.0, (0.0, 0.0))); costs.append(0.0); continue
            var = V[iv]
            H = self.hand_target(pr, s, var)
            loc = phis[ip] + np.arange(-3, 3.01, 1.0)
            c, _, _ = self.cost(pr, s, H, loc, other=None if others is None else others[i])
            if i > 0: c = c + ((loc - out[-1][0] + 180) % 360 - 180) ** 2 / 36.0 * 0.5
            j = int(c.argmin())
            out.append((float(loc[j]), var)); costs.append(float(C[i, ip, iv]))
        # gentle smoothing of the slack (keeps the hand from snapping between grid steps), only where it does not hurt
        if T > 2:
            rr = np.array([o[1][0] for o in out]); aa = np.array([o[1][1] for o in out])
            k3 = np.array([0.25, 0.5, 0.25])
            rs = np.convolve(np.r_[rr[0], rr, rr[-1]], k3, 'valid'); as_ = np.convolve(np.r_[aa[0], aa, aa[-1]], k3, 'valid')
            for i, pr in enumerate(probs):
                if s not in pr['active'] or (s == 'l' and pr['lfree'] > 0.5): continue
                cand = (float(rs[i]), float(as_[i]))
                c0 = self.cost(pr, s, self.hand_target(pr, s, out[i][1]), np.array([out[i][0]]), other=None if others is None else others[i])[0][0]
                c1 = self.cost(pr, s, self.hand_target(pr, s, cand), np.array([out[i][0]]), other=None if others is None else others[i])[0][0]
                if c1 <= c0 * 1.15 + 0.5: out[i] = (out[i][0], cand)
        return (out, costs) if return_cost else out

    def report(self, pr, s, phi, var):
        H = self.hand_target(pr, s, var)
        c, an, g = self.cost(pr, s, H, np.array([phi]))
        return dict(cost=float(c[0]), pron=float(an['pron'][0]), wflex=float(an['wflex'][0]), wdev=float(an['wdev'][0]), reach=g['reach'])

    # ---------------- final pose ----------------
    def pose(self, pb, pr, s, phi, var):
        """write armature-space matrices for upperarm, lowerarm, hand (call per level with view_layer updates)"""
        H = self.hand_target(pr, s, var)
        g = self.geometry(pr, s, H, np.array([phi]))
        E = Vector(g['E'][0]); S = Vector(g['S']); Wp = Vector(g['Wp'])
        u = (E - S).normalized(); f = (Wp - E).normalized()
        h = Vector(np.cross(g['edir'][0], g['a'])).normalized()
        Mup = (frame_xy(h, u) @ self.Qup[s]).to_4x4(); Mup.translation = S
        Mlo = (frame_xy(h, f) @ self.Qlo[s]).to_4x4(); Mlo.translation = E
        if g['reach'] > 0:                      # never stretch the wrist: keep the hand on the forearm tip
            H = H.copy(); H.translation = E + f * self.L2[s]
        return Mup, Mlo, H


def seg_seg_dist(A0, A1, B0, B1):
    """vectorised closest distance between segments A (n,3) and B (3,)"""
    B0 = np.asarray(B0); B1 = np.asarray(B1)
    d1 = A1 - A0; d2 = (B1 - B0)[None]
    r = A0 - B0[None]
    a = np.einsum('ij,ij->i', d1, d1); e = float((B1 - B0) @ (B1 - B0)); f = r @ (B1 - B0)
    c = np.einsum('ij,ij->i', d1, r); b = d1 @ (B1 - B0)
    den = a * e - b * b
    s = np.where(den > 1e-12, np.clip((b * f - c * e) / np.maximum(den, 1e-12), 0, 1), 0)
    t = (b * s + f) / max(e, 1e-12)
    t = np.clip(t, 0, 1)
    s = np.clip((b * t - c) / np.maximum(a, 1e-12), 0, 1)
    P = A0 + d1 * s[:, None]; Q = B0[None] + d2 * t[:, None]
    return np.linalg.norm(P - Q, axis=1)


def twist_records(R, rec, s, solved=True):
    """armature-space matrices for the twist bones from recorded upperarm/lowerarm/hand matrices"""
    Mlo, Mh, Mup = rec[f'lowerarm_{s}'], rec[f'hand_{s}'], rec[f'upperarm_{s}']
    q = ((R[f'lowerarm_{s}'].to_3x3().inverted() @ R[f'hand_{s}'].to_3x3()).inverted() @ (Mlo.to_3x3().inverted() @ Mh.to_3x3())).to_quaternion()
    tau = swing_twist_y(q)
    tw_rest = R[f'lowerarm_{s}'].inverted() @ R[TW_FORE[s]]
    Mtw = Mlo @ tw_rest @ Matrix.Rotation(K_FORE * tau, 4, 'Y')
    Mtw.translation = (Mlo @ tw_rest).translation
    # shoulder half-joint: the helper at the shoulder takes half of the upper arm's rotation relative to the clavicle
    # (swing and twist), so the deltoid / armpit vertices blend two half rotations instead of one large one
    par = rec[f'clavicle_{s}'] @ (R[f'clavicle_{s}'].inverted() @ R[f'upperarm_{s}'])
    qu = (par.to_3x3().inverted() @ Mup.to_3x3()).to_quaternion()
    tau_u = swing_twist_y(qu)
    qh = Quaternion((1, 0, 0, 0)).slerp(qu, K_UP)
    up_rest = R[f'upperarm_{s}'].inverted() @ R[TW_UP[s]]
    Mutw = Matrix.Translation(Mup.translation) @ (par.to_3x3() @ qh.to_matrix()).to_4x4() @ up_rest.to_3x3().to_4x4()
    return {TW_FORE[s]: Mtw, TW_UP[s]: Mutw}, math.degrees(tau), math.degrees(tau_u)
