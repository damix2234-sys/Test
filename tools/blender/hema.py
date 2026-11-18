# Animation authoring framework: per-frame pose solve (Hermite channels, procedural footwork, IK, look-at),
# baked to bone keys with forearm-twist distribution and root-motion extraction.
import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rig2 import *
from arms import ArmSolver, twist_records
import rig2

def Rz(d): return Matrix.Rotation(math.radians(d), 3, 'Z')
def Rx(d): return Matrix.Rotation(math.radians(d), 3, 'X')
def Ry(d): return Matrix.Rotation(math.radians(d), 3, 'Y')
def V3(v): return Vector(v) if not isinstance(v, Vector) else v.copy()
def clamp(v, a, b): return max(a, min(b, v))
def smooth(t): t = clamp(t, 0, 1); return t * t * (3 - 2 * t)
def smoother(t): t = clamp(t, 0, 1); return t * t * t * (t * (t * 6 - 15) + 10)

class Chan:
    """Hermite spline through (frame, value) keys; 'hold' keys and end keys have zero tangent."""
    def __init__(self):
        self.k = []
    def add(self, f, v, hold=False):
        self.k = [x for x in self.k if x[0] != f]
        self.k.append((f, v, hold)); self.k.sort(key=lambda x: x[0])
    def empty(self): return not self.k
    def _tan(self, i):
        f, v, hold = self.k[i]
        if hold or i == 0 or i == len(self.k) - 1: return v * 0
        f0, v0, _ = self.k[i - 1]; f1, v1, _ = self.k[i + 1]
        return ((v1 - v) / (f1 - f) + (v - v0) / (f - f0)) * 0.5
    def at(self, f):
        k = self.k
        if f <= k[0][0]: return k[0][1]
        if f >= k[-1][0]: return k[-1][1]
        for i in range(len(k) - 1):
            if k[i][0] <= f <= k[i + 1][0]: break
        f0, v0, _ = k[i]; f1, v1, _ = k[i + 1]
        d = f1 - f0; t = (f - f0) / d
        m0 = self._tan(i) * d; m1 = self._tan(i + 1) * d
        t2 = t * t; t3 = t2 * t
        return v0 * (2 * t3 - 3 * t2 + 1) + m0 * (t3 - 2 * t2 + t) + v1 * (-2 * t3 + 3 * t2) + m1 * (t3 - t2)

SPINE = [('spine_01', 0.25, 0.40, 0.33), ('spine_02', 0.35, 0.35, 0.33), ('spine_03', 0.40, 0.25, 0.34)]  # yaw, pitch, roll weights
CHANNELS_V = ['G', 'b', 'e', 'pel', 'pxy', 'look', 'lhp', 'lhf', 'lhn', 'eR', 'eL', 'lookoff']
CHANNELS_S = ['pz', 'yaw', 'pitch', 'roll', 'cyaw', 'cpitch', 'croll', 'lhw', 'lfo', 'lfl', 'rfo', 'Ly', 'Ry', 'neck', 'clR', 'clL', 'lookw']

class Author:
    def __init__(self, arm):
        self.arm = arm; self.pb = arm.pose.bones; self.bones = arm.data.bones
        self.REST = {b.name: b.matrix_local.copy() for b in self.bones}
        R = self.REST
        self.HR_REST = R['hand_r'].copy(); self.HL_REST = R['hand_l'].copy()
        self.W_REST = Matrix.Translation(GRIP_R)
        self.K = Matrix.Diagonal((-1, 1, 1))
        # sanity: left rest hand == X-mirror of right rest hand with local X flipped
        RefX = Matrix.Diagonal((-1, 1, 1))
        err = (RefX @ self.HR_REST.to_3x3() @ self.K) - self.HL_REST.to_3x3()
        print('mirror check', round(sum(abs(err[i][j]) for i in range(3) for j in range(3)), 4))
        for b in self.pb: b.rotation_mode = 'QUATERNION'
        sc = bpy.context.scene
        def empty(n):
            o = bpy.data.objects.new(n, None); sc.collection.objects.link(o); o.empty_display_size = 0.05; return o
        self.TR, self.TL, self.PR, self.PL = empty('C_HandR'), empty('C_HandL'), empty('C_PoleR'), empty('C_PoleL')
        self.FR, self.FL, self.KR, self.KL, self.LOOK = empty('C_FootR'), empty('C_FootL'), empty('C_KneeR'), empty('C_KneeL'), empty('C_Look')
        pb = self.pb
        def ik(bone, t, pole, pa):
            c = pb[bone].constraints.new('IK'); c.target = t; c.chain_count = 2; c.pole_target = pole
            c.pole_angle = math.radians(pa); c.use_stretch = False; c.iterations = 800; return c
        self.cg = {'rarm': [ik('lowerarm_r', self.TR, self.PR, 0)], 'larm': [ik('lowerarm_l', self.TL, self.PL, 0)],
                   'legs': [ik('calf_r', self.FR, self.KR, -90), ik('calf_l', self.FL, self.KL, -90)], 'look': []}
        for h, t, g in (('hand_r', self.TR, 'rarm'), ('hand_l', self.TL, 'larm'), ('foot_r', self.FR, 'legs'), ('foot_l', self.FL, 'legs')):
            c = pb[h].constraints.new('COPY_ROTATION'); c.target = t; self.cg[g].append(c)
        # arms are solved analytically (arms.ArmSolver): the IK/copy-rotation arm constraints stay muted
        for g_ in ('rarm', 'larm'):
            for c_ in self.cg[g_]: c_.mute = True
            self.cg[g_] = []
        self.AS = ArmSolver(arm, bpy.data.objects['Body'])
        self.active_arms = ('r', 'l')
        for bn, inf in (('neck_01', 0.35), ('Head', 1.0)):
            c = pb[bn].constraints.new('DAMPED_TRACK'); c.target = self.LOOK; c.track_axis = 'TRACK_Z'; c.influence = inf
            self.__dict__['look_' + bn] = c; self.cg['look'].append(c)
        # local axis helpers
        self.ax_clav_up = {s: self.axis_for(f'clavicle_{s}', Vector((0, 0, 1))) for s in 'rl'}
        self.ax_clav_fwd = {s: self.axis_for(f'clavicle_{s}', Vector((0, -1, 0))) for s in 'rl'}
        self.ax_toe_up = {s: self.axis_for(f'ball_{s}', Vector((0, 0, 1))) for s in 'rl'}
        print('clav up', self.ax_clav_up, 'fwd', self.ax_clav_fwd, 'toe', self.ax_toe_up)
        # foot geometry (rest): ankle, ball pivot, heel contact
        self.ankle0 = {s: R[f'foot_{s}'].to_translation() for s in 'rl'}
        self.ball0 = {s: Vector((R[f'ball_{s}'].to_translation().x, R[f'ball_{s}'].to_translation().y, 0.0)) for s in 'rl'}
        self.heel0 = {s: Vector((self.ankle0[s].x, self.ankle0[s].y + 0.06, 0.0)) for s in 'rl'}
        self.footrot0 = {s: R[f'foot_{s}'].to_3x3() for s in 'rl'}
        self.pel0 = R['pelvis'].to_translation()
        self.ROOT_REF = Vector((0.0, 0.03))        # pelvis xy in the reference guard stance

    def axis_for(self, bone, wdir):
        M = self.REST[bone]; L = self.bones[bone].length
        tail = (M @ Matrix.Translation((0, L, 0))).to_translation()
        best = None
        for i, ax in enumerate('XYZ'):
            Mr = M @ Matrix.Rotation(math.radians(5), 4, ax)
            d = (Mr @ Matrix.Translation((0, L, 0))).to_translation() - tail
            sc = d.dot(wdir)
            if best is None or abs(sc) > abs(best[1]): best = (ax, sc)
        return (best[0], 1 if best[1] > 0 else -1)

    def local_rot(self, ax_sign, deg):
        ax, sg = ax_sign
        return Matrix.Rotation(math.radians(deg * sg), 3, ax)

    # ---------- feet ----------
    def foot_matrix(self, s, ball, yaw, pitch, pivot='ball', lift=0.0):
        """ball: world xy of the (flat-foot) ball contact point; pitch>0 heel up (pivot ball), pitch<0 toes up (pivot heel)"""
        Ryaw = Rz(yaw)
        b0, a0, h0 = self.ball0[s], self.ankle0[s], self.heel0[s]
        ballw = Vector((ball[0], ball[1], 0.0))
        def place(piv0):
            pivw = ballw + Ryaw @ (piv0 - b0)
            rot = Ryaw @ Rx(pitch)
            ank = pivw + rot @ (a0 - piv0)
            return ank
        if not isinstance(pivot, str):
            ank = place(b0).lerp(place(h0), pivot)
        else:
            ank = place(b0 if pivot == 'ball' else h0)
        ank.z += lift
        M = (Ryaw @ Rx(pitch) @ self.footrot0[s]).to_4x4(); M.translation = ank
        return M

    # ---------- evaluation of a clip spec ----------
    def build_channels(self, keys):
        ch = {n: Chan() for n in CHANNELS_V + CHANNELS_S}
        feet = {'L': [], 'R': []}
        for (f, d, opt) in keys:
            hold = opt.get('hold', False) if opt else False
            for n, v in d.items():
                if n in ('Lb', 'Rb'): feet[n[0]].append((f, Vector((v[0], v[1], 0.0))))
                elif n == 'pxy': ch[n].add(f, Vector((v[0], v[1], 0.0)), hold)
                elif n in ch:
                    ch[n].add(f, V3(v) if n in CHANNELS_V else float(v), hold)
        for side in 'LR': feet[side].sort(key=lambda x: x[0])
        return ch, feet

    def foot_state(self, side, f, feet, steps, ch):
        """returns (ball_xy, yaw, pitch, pivot, lift, toe_bend)"""
        yawc = ch['Ly' if side == 'L' else 'Ry']
        kl = feet[side]
        # position: last key <= f (planted) unless inside a step window
        for (sd, f0, f1, h) in steps:
            if sd != side or not (f0 <= f <= f1): continue
            frm = self._planted(side, f0, feet); to = self._planted(side, f1, feet, after=True)
            y0 = yawc.at(f0); y1 = yawc.at(f1)
            s = (f - f0) / max(1e-6, (f1 - f0))
            pitch_up, pitch_dn = 20.0, -12.0
            if s < 0.2:
                u = smooth(s / 0.2)
                return (frm, y0, pitch_up * u, 'ball', 0.0, pitch_up * u)
            if s > 0.82:
                u = smooth((s - 0.82) / 0.18)
                return (to, y1, pitch_dn * (1 - u), 'heel', 0.0, 0.0)
            u = smoother((s - 0.2) / 0.62)
            pos = frm.lerp(to, u)
            pitch = pitch_up + (pitch_dn - pitch_up) * u
            lift = h * math.sin(math.pi * u) ** 0.8
            toe = pitch_up * max(0.0, 1 - u / 0.3)
            return (pos, y0 + (y1 - y0) * u, pitch, u, lift, toe)
        return (self._planted(side, f, feet), yawc.at(f), 0.0, 'ball', 0.0, 0.0)

    def _planted(self, side, f, feet, after=False, steps=None):
        kl = feet[side]
        if after:
            for (kf, p) in kl:
                if kf >= f: return p
            return kl[-1][1]
        ev = list(kl)
        for (sd, f0, f1, h) in (steps if steps is not None else self._steps):
            if sd == side: ev.append((f1, self._planted(side, f1, feet, after=True)))
        ev.sort(key=lambda x: x[0])
        cur = ev[0][1]
        for (kf, p) in ev:
            if kf <= f + 1e-6: cur = p
        return cur

    def check_feet(self, feet, steps, name):
        for side in 'LR':
            kl = feet[side]
            for i in range(1, len(kl)):
                (fa, pa), (fb, pb_) = kl[i - 1], kl[i]
                if (pa - pb_).length > 0.005:
                    if not any(sd == side and f0 >= fa - 0.01 and f1 <= fb + 0.01 for (sd, f0, f1, h) in steps):
                        print(f'  !! {name}: foot {side} moves {pa[:]}->{pb_[:]} between {fa}-{fb} without a step')

    def evaluate(self, f, ch, feet, steps, base=None):
        self._steps = steps
        """compute the controller state for frame f -> dict"""
        st = {}
        for n, c in ch.items():
            if not c.empty(): st[n] = c.at(f)
        st['footL'] = self.foot_state('L', f, feet, steps, ch)
        st['footR'] = self.foot_state('R', f, feet, steps, ch)
        return st

    def set_fingers(self, side, fist_w=1.0, open_w=0.0, flask_w=0.0, relax=False):
        pb = self.pb
        for k in FIST:
            a = Vector(FIST[k]) * fist_w
            if open_w: a = a.lerp(Vector(OPEN[k]), open_w)
            if flask_w: a = a.lerp(Vector(FLASKF[k]), flask_w)
            pb[f'{k}_{side}'].rotation_quaternion = Euler(a).to_quaternion()

    LEG = 0.888 * 0.975
    def solve_reach(self, pel, st):
        """keep both grounded feet reachable: lift the heel of a stretched planted foot (pivot on the ball), then lower the pelvis"""
        R = self.REST
        yaw, pitch, roll = st.get('yaw', 0), st.get('pitch', 0), st.get('roll', 0)
        Rp = Rz(yaw) @ Rx(pitch) @ Ry(roll)
        st = dict(st)
        def hip(side, pz):
            Mp = (Rp @ R['pelvis'].to_3x3()).to_4x4(); Mp.translation = Vector((pel.x, pel.y, pz))
            return Mp @ (R['pelvis'].inverted() @ R[f'thigh_{side}'].translation)
        def need(side, pz, fs):
            ball, fy, fp, piv, lift, toe = fs
            if lift > 0.002: return 0.0                  # foot in the air: let it dangle
            ank = self.foot_matrix(side, ball, fy, fp, piv, lift).translation
            h = hip(side, pz); dh = Vector((h.x - ank.x, h.y - ank.y)).length
            if dh >= self.LEG: return h.z - ank.z
            vmax = math.sqrt(self.LEG ** 2 - dh * dh)
            return max(0.0, (h.z - ank.z) - vmax)
        pz = pel.z
        for side, key in (('r', 'footR'), ('l', 'footL')):
            fs = st[key]
            if fs[3] == 'ball' and fs[2] == 0.0 and need(side, pz, fs) > 0.004:
                for hl in (6, 12, 18, 24, 30):            # heel lift (pivot on the ball, toes stay down)
                    cand = (fs[0], fs[1], float(hl), 'ball', 0.0, float(hl))
                    st[key] = cand
                    if need(side, pz, cand) <= 0.004: break
        drop = max(need('r', pz, st['footR']), need('l', pz, st['footL']))
        if drop > 0: pz -= drop + 0.002
        return Vector((pel.x, pel.y, pz)), st

    def apply(self, st, f):
        pb = self.pb; R = self.REST
        for b in pb:
            if b.name not in ('root',): b.location = (0, 0, 0)
        pb['root'].location = (0, 0, 0); pb['root'].rotation_quaternion = (1, 0, 0, 0)
        for n in ('upperarm_r', 'lowerarm_r', 'upperarm_l', 'lowerarm_l', 'thigh_r', 'calf_r', 'thigh_l', 'calf_l', 'hand_r', 'hand_l', 'foot_r', 'foot_l'):
            pb[n].rotation_quaternion = (1, 0, 0, 0)
        # pelvis
        if 'pxy' in st: pel = Vector((st['pxy'].x, st['pxy'].y + 0.03, st.get('pz', 0.905)))
        else: pel = st.get('pel', Vector((0, 0.03, 0.905)))
        pel, st = self.solve_reach(pel, st)
        self.cur_pel = pel
        yaw, pitch, roll = st.get('yaw', 0), st.get('pitch', 0), st.get('roll', 0)
        Rp = Rz(yaw) @ Rx(pitch) @ Ry(roll)
        Mp = (Rp @ R['pelvis'].to_3x3()).to_4x4(); Mp.translation = pel
        basis = R['pelvis'].inverted() @ Mp
        pb['pelvis'].location = basis.to_translation(); pb['pelvis'].rotation_quaternion = basis.to_quaternion()
        # spine distribution (local Y = twist/yaw, X = forward bend, -Z = lean left)
        cy, cp, cr = st.get('cyaw', 0), st.get('cpitch', 0), st.get('croll', 0)
        for bn, wy, wp, wr in SPINE:
            pb[bn].rotation_quaternion = (Matrix.Rotation(math.radians(cy * wy), 3, 'Y') @ Matrix.Rotation(math.radians(cp * wp), 3, 'X') @ Matrix.Rotation(math.radians(-cr * wr), 3, 'Z')).to_quaternion()
        pb['neck_01'].rotation_quaternion = Matrix.Rotation(math.radians(st.get('neck', 0)), 3, 'X').to_quaternion()
        # fingers
        self.set_fingers('r', 1.0, st.get('rfo', 0.0))
        self.set_fingers('l', 1.0, st.get('lfo', 0.0), st.get('lfl', 0.0))
        # feet
        for side, s, FT in (('L', 'l', self.FL), ('R', 'r', self.FR)):
            ball, fy, fp, piv, lift, toe = st['foot' + side]
            M = self.foot_matrix(s, ball, fy, fp, piv, lift)
            self.cur_foot = getattr(self, 'cur_foot', {}); self.cur_foot[s] = M
            FT.matrix_world = M
            pb[f'ball_{s}'].rotation_quaternion = self.local_rot(self.ax_toe_up[s], toe).to_quaternion()
        # look target
        look = st.get('look', Vector((pel.x, pel.y - 2.6, 1.62)) + st.get('lookoff', Vector((0, 0, 0))))
        self.LOOK.location = look
        self.look_Head.influence = st.get('lookw', 1.0); self.look_neck_01.influence = 0.35 * st.get('lookw', 1.0)
        # sword / hand targets
        G = st['G']; b = st['b'].normalized(); e = st['e']; e = (e - b * e.dot(b)).normalized()
        W = Matrix.Translation(G) @ frame_from(b, e).to_4x4()
        HR = W @ self.W_REST.inverted() @ self.HR_REST
        s_n = b.cross(e).normalized()
        Ref = Matrix.Identity(3) - 2 * Matrix((s_n * s_n.x, s_n * s_n.y, s_n * s_n.z)).transposed()
        HLrot = Ref @ HR.to_3x3() @ self.K
        HLpos = G + Ref @ (HR.translation - G) - b * LH_OFF
        lhw = clamp(st.get('lhw', 0.0), 0, 1)
        if lhw > 0 and 'lhp' in st:
            fdir = st['lhf'].normalized(); pn = st['lhn']; pn = (pn - fdir * pn.dot(fdir)).normalized()
            # left hand bone: local Y = finger direction, local X = palm normal
            zc = pn.cross(fdir)
            Rfree = Matrix((pn, fdir, zc)).transposed()
            q = HLrot.to_quaternion().slerp(Rfree.to_quaternion(), smooth(lhw))
            HLrot = q.to_matrix(); HLpos = HLpos.lerp(st['lhp'], smooth(lhw))
        HL = HLrot.to_4x4(); HL.translation = HLpos
        self.cur = dict(HR=HR, HL=HL, W=W, lfree=lhw)
        # pass 1: body without arms -> shoulders
        bpy.context.view_layer.update()
        A = self.arm.matrix_world
        for side, s, Ht in (('R', 'r', HR), ('L', 'l', HL)):
            S0 = (A @ pb[f'upperarm_{s}'].matrix).to_translation()
            wr = Ht.translation
            up = clamp((wr.z - S0.z + 0.05) / 0.40, -0.4, 1.0)
            fwd_dir = (Rz(yaw + cy) @ Vector((0, -1, 0)))
            reach = clamp(((wr - S0).dot(fwd_dir) - 0.22) / 0.30, 0, 1)
            el = 20 * max(0, up) - 4 * max(0, -up) + st.get('clR' if s == 'r' else 'clL', 0)
            pr = 12 * reach
            pb[f'clavicle_{s}'].rotation_quaternion = (self.local_rot(self.ax_clav_up[s], el) @ self.local_rot(self.ax_clav_fwd[s], pr)).to_quaternion()
        bpy.context.view_layer.update()
        # knee poles (the arms are solved in bake_cb by the anatomical arm solver)
        for side, s, KT in (('L', 'l', self.KL), ('R', 'r', self.KR)):
            ball, fy, fp, piv, lift, toe = st['foot' + side]
            hip = (A @ pb[f'thigh_{s}'].matrix).to_translation()
            ank = (self.FL if s == 'l' else self.FR).matrix_world.translation
            fdir = Rz(fy) @ Vector((0, -1, 0))
            KT.location = (hip + ank) * 0.5 + fdir * 0.6 + Vector((0.04 if s == 'l' else -0.04, 0, 0))
        bpy.context.view_layer.update()

    def sword_points(self, W):
        G = W.translation; b = (W.to_3x3() @ B_REST).normalized()
        pts = [(G - b * (LH_OFF + 0.066), 0.031), (G - b * (LH_OFF + 0.046), 0.017)]
        pts += [(G + b * d, 0.008) for d in (0.10, 0.16, 0.22, 0.30, 0.40)]
        return pts

    def forearm_clash(self, s_, W):
        A = self.arm.matrix_world; pb = self.pb
        M = A @ pb[f'lowerarm_{s_}'].matrix
        e0 = M.translation; e1 = (M @ Matrix.Translation((0, self.bones[f'lowerarm_{s_}'].length * 0.9, 0))).translation
        worst = 0.0; away = Vector((0, 0, 0))
        seg = e1 - e0; L2 = seg.length_squared
        for p, r in self.sword_points(W):
            t = clamp((p - e0).dot(seg) / L2, 0, 1); q = e0 + seg * t
            d = (p - q).length; pen = (0.056 + r) - d
            if pen > worst: worst = pen; away = (q - p).normalized() if d > 1e-6 else Vector((0, 0, 1))
        return worst, away

    def declash(self, W):
        A = self.arm.matrix_world; pb = self.pb
        for it in range(12):
            moved = False
            for s_, PT, Ht in (('r', self.PR, self.TR), ('l', self.PL, self.TL)):
                pen, away = self.forearm_clash(s_, W)
                if pen <= 0.002: continue
                S0 = (A @ pb[f'upperarm_{s_}'].matrix).to_translation(); wr = Ht.matrix_world.translation
                axis = (wr - S0).normalized(); mid = (S0 + wr) * 0.5
                cur = (PT.location - mid); cur = (cur - axis * cur.dot(axis)).normalized()
                aw = (away - axis * away.dot(axis))
                if aw.length < 1e-4: continue
                new = (cur + aw.normalized() * 0.6).normalized()
                PT.location = mid + new * 0.45; moved = True
            if not moved: break
            bpy.context.view_layer.update()

    def record(self):
        return {b.name: b.matrix.copy() for b in self.pb}

    def mute(self, group, m):
        for c in self.cg[group]: c.mute = m

    def bake(self, name, frames_state, root_motion=True, twist=0.5, report=True):
        def cb(i):
            self.apply(frames_state[i][1], i)
        return self.bake_cb(name, len(frames_state), cb, root_motion, twist, report)

    def pose_arms(self, pr, sol):
        """sol: {side: (phi, psi)}. Writes upperarm / lowerarm / hand matrices level by level; returns hand targets."""
        mats = {s: self.AS.pose(self.pb, pr, s, *sol[s]) for s in sol}
        for lvl, nm in enumerate(('upperarm', 'lowerarm', 'hand')):
            for s, M in mats.items(): self.pb[f'{nm}_{s}'].matrix = M[lvl]
            bpy.context.view_layer.update()
        return {s: M[2] for s, M in mats.items()}

    def bake_cb(self, name, count, cb, root_motion=True, twist=0.5, report=True, check_left=True):
        """cb(i) poses frame i (body, clavicles, fingers, legs; sets self.cur HR/HL/W). Pass A collects the arm problems,
        the arm solver picks elbow swivel / left-hand roll for the whole clip, pass B poses, records and keys."""
        active = tuple(self.active_arms)
        probs = []
        for i in range(count):
            cb(i); bpy.context.view_layer.update()
            c = self.cur
            probs.append(self.AS.problem(self.pb, c['HR'], c['HL'], c['W'], active, c.get('lfree', 0.0)))
        trk = {}
        if 'r' in active: trk['r'] = self.AS.solve_track(probs, 'r')
        others = [self.AS.segments(pr, 'r', self.AS.hand_target(pr, 'r', trk['r'][i][1]), trk['r'][i][0]) for i, pr in enumerate(probs)] if 'r' in trk else None
        if 'l' in active: trk['l'] = self.AS.solve_track(probs, 'l', others)
        recs = []; errs = []; legerr = []; worst = {}
        self.arm_stats = []
        for i in range(count):
            cb(i)
            sol = {s: trk[s][i] for s in trk}
            tg = self.pose_arms(probs[i], sol)
            # the sword stays on its authored path; the hand's grip slack is a pivot of the hand around the handle
            if 'r' in sol:
                self.pb['weapon_r'].matrix = probs[i]['W'] @ self.W_REST.inverted() @ self.AS.R['weapon_r']
                bpy.context.view_layer.update()
            r = self.record()
            A = self.arm.matrix_world
            eR = ((A @ r['hand_r']).translation - tg['r'].translation).length if 'r' in tg else 0.0
            eL = ((A @ r['hand_l']).translation - tg['l'].translation).length if ('l' in tg and check_left) else 0.0
            if not self.cg['legs'][0].mute:
                for s_, FT in (('r', self.FR), ('l', self.FL)):
                    el = ((A @ r[f'foot_{s_}']).translation - FT.matrix_world.translation).length
                    if el > 0.01: legerr.append((i, s_, round(el * 100, 1)))
            st_ = {}
            for s_ in trk:
                rp = self.AS.report(probs[i], s_, *sol[s_]); st_[s_] = rp
                if rp['cost'] > worst.get(s_, (-1,))[0]: worst[s_] = (rp['cost'], i, rp, sol[s_])
            for s_ in 'rl':
                tw, tau, tau_u = twist_records(self.AS.R, r, s_)
                r.update(tw)
            self.arm_stats.append(st_)
            errs.append((i, eR, eL))
            recs.append(r)
        if report:
            mR = max(errs, key=lambda x: x[1]); mL = max(errs, key=lambda x: x[2])
            flag = '  !!' if mR[1] > 0.012 or mL[2] > 0.012 else ''
            print(f'{flag} {name}: frames={len(recs)} hand err R max {mR[1]*100:.1f}cm @{mR[0]}  L max {mL[2]*100:.1f}cm @{mL[0]}')
            bad = [(i, round(a*100,1), round(b*100,1)) for i, a, b in errs if a > 0.012 or b > 0.012]
            if bad: print('     bad frames (f, R cm, L cm):', bad)
            if legerr: print('  !! leg IK misses (f, side, cm):', legerr)
            for s_, (cst, fi, rp, so) in worst.items():
                print(f'     arm {s_}: worst cost {cst:.1f} @{fi} pron {rp["pron"]:.0f} wflex {rp["wflex"]:.0f} wdev {rp["wdev"]:.0f} reach {rp["reach"]*100:.1f}cm swivel {so[0]:.0f} roll {math.degrees(so[1][0]):.0f} gripang {math.degrees(so[1][1]):.0f}')
        bones = self.bones
        # root motion: root follows the pelvis on the ground plane
        for r in recs:
            p = r['pelvis'].to_translation()
            if root_motion:
                r['root'] = Matrix.Translation((p.x - self.ROOT_REF.x, p.y - self.ROOT_REF.y, 0.0))
            else:
                r['root'] = Matrix.Identity(4)
        act = bpy.data.actions.new(name); act.use_fake_user = True
        ad = self.arm.animation_data or self.arm.animation_data_create()
        saved = {(b.name, i): c.mute for b in self.pb for i, c in enumerate(b.constraints)}
        for b in self.pb:
            for c in b.constraints: c.mute = True
        ad.action = act
        prevq = {}
        for fi, r in enumerate(recs):
            for b in self.pb:
                bone = bones[b.name]
                if bone.parent:
                    P = bone.parent
                    basis = (P.matrix_local.inverted() @ bone.matrix_local).inverted() @ r[P.name].inverted() @ r[b.name]
                else:
                    basis = bone.matrix_local.inverted() @ r[b.name]
                loc, q, _ = basis.decompose()
                if b.name in prevq and prevq[b.name].dot(q) < 0: q = -q
                prevq[b.name] = q
                b.location = loc; b.rotation_quaternion = q
                b.keyframe_insert('location', frame=fi); b.keyframe_insert('rotation_quaternion', frame=fi)
        for b in self.pb:
            for i, c in enumerate(b.constraints): c.mute = saved[(b.name, i)]
        ad.action = None
        return act, recs

    def run(self, name, keys, steps, length, root_motion=True, extra=None):
        ch, feet = self.build_channels(keys)
        self._steps = steps
        self.check_feet(feet, steps, name)
        frames = []
        for f in range(length + 1):
            st = self.evaluate(f, ch, feet, steps)
            if extra: extra(f, st)
            frames.append((f, st))
        return self.bake(name, frames, root_motion)
