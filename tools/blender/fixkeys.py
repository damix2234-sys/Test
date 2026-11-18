# Make authored sword keyposes anatomically feasible with the smallest change:
# search edge roll about the blade axis first (barely visible), then a small blade tilt and a small grip shift.
import json, os, math, hashlib
import numpy as np
from hema import *
import rig2

PH = np.arange(36) * 10.0 - 180.0
SV = {'r': [(0.0, math.radians(a)) for a in (-20, -8, 0, 8)] + [(math.radians(r), math.radians(-8)) for r in (-10, 10)],
      'l': [(math.radians(r), math.radians(a)) for r in (-60, -30, 0, 30, 60) for a in (-8, 4, 16)]}
CACHE_F = OUT + 'keyfix_cache.json'
CACHE = json.load(open(CACHE_F)) if os.path.exists(CACHE_F) else {}


def rot_to(a, b):
    a = a.normalized(); b = b.normalized(); ax = a.cross(b)
    if ax.length < 1e-9: return Matrix.Identity(3)
    return Matrix.Rotation(math.atan2(ax.length, a.dot(b)), 3, ax.normalized())


def hands_from(au, G, b, e):
    b = b.normalized(); e = (e - b * e.dot(b)).normalized()
    W = Matrix.Translation(G) @ frame_from(b, e).to_4x4()
    HR = W @ au.W_REST.inverted() @ au.HR_REST
    s_n = b.cross(e).normalized()
    Ref = Matrix.Identity(3) - 2 * Matrix((s_n * s_n.x, s_n * s_n.y, s_n * s_n.z)).transposed()
    HL = (Ref @ HR.to_3x3() @ au.K).to_4x4(); HL.translation = G + Ref @ (HR.translation - G) - b * LH_OFF
    return W, HR, HL


def arm_cost(au, pr0, G, b, e, sides, hint=None):
    W, HR, HL = hands_from(au, G, b, e)
    pr = dict(pr0); pr.update(HR=HR, HL=HL, W=W)
    tot = 0.0; det = {}
    for s in sides:
        best = 1e18
        for var in SV[s]:
            H = au.AS.hand_target(pr, s, var)
            c, _, _ = au.AS.cost(pr, s, H, PH)
            if hint and s in hint: c = c + (((PH - hint[s] + 180) % 360 - 180) / 22.0) ** 2 * 3.0
            best = min(best, float(c.min()) + (math.degrees(var[0]) / (10 if s == 'r' else 28)) ** 2 + (math.degrees(var[1]) / 16) ** 2)
        det[s] = best; tot += best
    return tot, det


def candidate(b0, e0, roll, tilt, tdir):
    """roll (deg) about the blade, then tilt the blade by `tilt` deg toward direction angle `tdir` around it"""
    e1 = Matrix.Rotation(math.radians(roll), 3, b0) @ e0
    s1 = b0.cross(e1)
    if tilt == 0: return b0.copy(), e1
    d = math.cos(math.radians(tdir)) * e1 + math.sin(math.radians(tdir)) * s1
    b2 = (math.cos(math.radians(tilt)) * b0 + math.sin(math.radians(tilt)) * d).normalized()
    e2 = rot_to(b0, b2) @ e1
    return b2, e2


def fix_state(au, st, f, label, w_roll=55.0, w_tilt=7.0, w_move=0.035, verbose=True, hint=None):
    """returns corrected (G, b, e) for the controller state st at frame f"""
    G0 = Vector(st['G']); b0 = Vector(st['b']).normalized(); e0 = Vector(st['e']); e0 = (e0 - b0 * e0.dot(b0)).normalized()
    key = hashlib.md5(json.dumps([label, [round(v, 4) for v in G0], [round(v, 4) for v in b0], [round(v, 4) for v in e0],
                                  round(st.get('lhw', 0.0), 3), round(st.get('yaw', 0), 2), round(st.get('cyaw', 0), 2), hint and {k: round(v) for k, v in hint.items()}]).encode()).hexdigest()
    if key in CACHE:
        c = CACHE[key]; return Vector(c['G']), Vector(c['b']), Vector(c['e']), c['info']
    au.apply(st, f); bpy.context.view_layer.update()
    lfree = au.cur['lfree']
    pr0 = au.AS.problem(au.pb, au.cur['HR'], au.cur['HL'], au.cur['W'], ('r', 'l'), lfree)
    sides = ('r',) if lfree > 0.5 else ('r', 'l')

    def J(roll, tilt, tdir, dG):
        b, e = candidate(b0, e0, roll, tilt, tdir)
        c, det = arm_cost(au, pr0, G0 + dG, b, e, sides, hint)
        prior = (roll / w_roll) ** 2 * 2 + (tilt / w_tilt) ** 2 * 2 + (dG.length / w_move) ** 2 * 2
        return c + prior, c, det
    c_orig = J(0, 0, 0, Vector())
    best = (c_orig[0], 0.0, 0.0, 0.0, Vector())
    for roll in range(-180, 180, 15):
        v = J(roll, 0, 0, Vector())
        if v[0] < best[0]: best = (v[0], float(roll), 0.0, 0.0, Vector())
    for _ in range(2):
        _, r0, t0, d0, g0 = best
        for tilt in (6, 12, 20, 30):
            for tdir in range(0, 360, 45):
                v = J(r0, tilt, tdir, g0)
                if v[0] < best[0]: best = (v[0], r0, float(tilt), float(tdir), g0.copy())
        _, r0, t0, d0, g0 = best
        for dv in ((0.03, 0, 0), (-0.03, 0, 0), (0, 0.03, 0), (0, -0.03, 0), (0, 0, 0.03), (0, 0, -0.03)):
            v = J(r0, t0, d0, g0 + Vector(dv))
            if v[0] < best[0]: best = (v[0], r0, t0, d0, g0 + Vector(dv))
        _, r0, t0, d0, g0 = best
        for dr in (-8, -4, 4, 8):
            v = J(r0 + dr, t0, d0, g0)
            if v[0] < best[0]: best = (v[0], r0 + dr, t0, d0, g0.copy())
    _, r0, t0, d0, g0 = best
    b, e = candidate(b0, e0, r0, t0, d0)
    fin = J(r0, t0, d0, g0)
    info = dict(orig=round(c_orig[1], 1), new=round(fin[1], 1), roll=r0, tilt=t0, tdir=d0, move_cm=round(g0.length * 100, 1),
                det={k: round(v, 1) for k, v in fin[2].items()})
    if verbose: print(f'   keyfix {label} f{f}: cost {info["orig"]} -> {info["new"]}  roll {r0:.0f} tilt {t0:.0f}@{d0:.0f} move {info["move_cm"]}cm  {info["det"]}')
    CACHE[key] = dict(G=list(G0 + g0), b=list(b), e=list(e), info=info)
    return G0 + g0, b, e, info


def save_cache():
    json.dump(CACHE, open(CACHE_F, 'w'))


def frame_cost(au, st, f):
    au.apply(st, f); bpy.context.view_layer.update()
    lfree = au.cur['lfree']
    pr0 = au.AS.problem(au.pb, au.cur['HR'], au.cur['HL'], au.cur['W'], ('r', 'l'), lfree)
    sides = ('r',) if lfree > 0.5 else ('r', 'l')
    c, det = arm_cost(au, pr0, Vector(st['G']), Vector(st['b']), Vector(st['e']), sides)
    if lfree > 0.5:
        best = 1e18
        for var in ((0.0, 0.0),):
            H = au.AS.hand_target(pr0, 'l', var)
            cc, _, _ = au.AS.cost(pr0, 'l', H, PH); best = min(best, float(cc.min()))
        det['lfree'] = best; c += best
    return c, det, pr0


def free_frame(fdir, pn):
    fdir = fdir.normalized(); pn = (pn - fdir * pn.dot(fdir)).normalized(); zc = pn.cross(fdir)
    return Matrix((pn, fdir, zc)).transposed()


def fix_free(au, st, f, label, hint=None):
    """rotate the free left hand (lhf / lhn) to the nearest comfortable orientation"""
    fd0 = Vector(st['lhf']).normalized(); pn0 = Vector(st['lhn'])
    key = hashlib.md5(json.dumps(['free', label, f, [round(v, 4) for v in fd0], [round(v, 4) for v in pn0], [round(v, 4) for v in st['lhp']], hint and round(hint)]).encode()).hexdigest()
    if key in CACHE:
        c = CACHE[key]; return Vector(c['lhf']), Vector(c['lhn']), c['info']
    au.apply(st, f); bpy.context.view_layer.update()
    pr0 = au.AS.problem(au.pb, au.cur['HR'], au.cur['HL'], au.cur['W'], ('r', 'l'), 1.0)
    R0 = free_frame(fd0, pn0); P = Vector(st['lhp'])
    def J(rx, ry, rz):
        R = R0 @ Euler((math.radians(rx), math.radians(ry), math.radians(rz))).to_matrix()
        H = R.to_4x4(); H.translation = P
        pr = dict(pr0); pr['HL'] = H
        c, _, _ = au.AS.cost(pr, 'l', H, PH)
        if hint is not None: c = c + (((PH - hint + 180) % 360 - 180) / 22.0) ** 2 * 3.0
        return float(c.min()) + ((rx / 25) ** 2 + (ry / 35) ** 2 + (rz / 25) ** 2) * 2, float(c.min())
    best = (J(0, 0, 0)[0], 0, 0, 0); orig = J(0, 0, 0)[1]
    for step in (30, 15, 7):
        improved = True
        while improved:
            improved = False
            _, a, b_, c_ = best
            for d in ((step, 0, 0), (-step, 0, 0), (0, step, 0), (0, -step, 0), (0, 0, step), (0, 0, -step)):
                v = J(a + d[0], b_ + d[1], c_ + d[2])
                if v[0] < best[0] - 1e-6: best = (v[0], a + d[0], b_ + d[1], c_ + d[2]); improved = True
    _, a, b_, c_ = best
    R = R0 @ Euler((math.radians(a), math.radians(b_), math.radians(c_))).to_matrix()
    fd = R @ Vector((0, 1, 0)); pn = R @ Vector((1, 0, 0))
    info = dict(orig=round(orig, 1), new=round(J(a, b_, c_)[1], 1), rot=(a, b_, c_))
    print(f'   freefix {label} f{f}: cost {info["orig"]} -> {info["new"]} rot {info["rot"]}')
    CACHE[key] = dict(lhf=list(fd), lhn=list(pn), info=info)
    return fd, pn, info


def clip_costs(au, keys, steps, length):
    """arm cost per frame along the solver's smooth path (both arms)"""
    ch, feet = au.build_channels(keys); au._steps = steps
    probs = []; states = []
    for f in range(length + 1):
        st = au.evaluate(f, ch, feet, steps); states.append(st)
        au.apply(st, f); bpy.context.view_layer.update()
        c = au.cur
        probs.append(au.AS.problem(au.pb, c['HR'], c['HL'], c['W'], ('r', 'l'), c.get('lfree', 0.0)))
    tr, cr = au.AS.solve_track(probs, 'r', return_cost=True)
    others = [au.AS.segments(pr, 'r', au.AS.hand_target(pr, 'r', tr[i][1]), tr[i][0]) for i, pr in enumerate(probs)]
    tl, cl = au.AS.solve_track(probs, 'l', others, return_cost=True)
    return [a + b for a, b in zip(cr, cl)], states, tr, tl, cr, cl


def fix_clip(au, name, keys, steps, length, thr=40.0, max_ins=10):
    """correct every key that sets G/b/e (shared stance poses are corrected once beforehand), free left-hand keys,
    then insert corrective keys where interpolated frames still leave the anatomical range"""
    ch, feet = au.build_channels(keys); au._steps = steps
    for (f, d, opt) in keys:
        if not all(k in d for k in ('G', 'b', 'e')) or d.get('_shared'): continue
        st = au.evaluate(f, ch, feet, steps)
        G, b, e, info = fix_state(au, st, f, f'{name}')
        d['G'] = (G.x, G.y, G.z); d['b'] = (b.x, b.y, b.z); d['e'] = (e.x, e.y, e.z)
    ch, feet = au.build_channels(keys)
    for (f, d, opt) in keys:
        if 'lhf' not in d or 'lhn' not in d: continue
        st = au.evaluate(f, ch, feet, steps)
        if st.get('lhw', 0) < 0.5: continue
        fd, pn, info = fix_free(au, st, f, name)
        d['lhf'] = (fd.x, fd.y, fd.z); d['lhn'] = (pn.x, pn.y, pn.z)
    gframes = {f for (f, d, o) in keys if 'G' in d}
    lframes = {f for (f, d, o) in keys if 'lhf' in d}
    refixed = set()
    for it in range(max_ins):
        costs, states, tr, tl, cr, cl = clip_costs(au, keys, steps, length)
        cand = [(c, f) for f, c in enumerate(costs) if (f not in gframes or (f not in refixed and states[f].get('lhw', 0) >= 0.5 and cl[f] > cr[f])) and 'G' in states[f]]
        if not cand: break
        c, f = max(cand)
        if c < thr: break
        st = states[f]
        if st.get('lhw', 0) >= 0.5 and cl[f] > cr[f] and 'lhp' in st and f not in refixed:
            a0 = tl[max(f - 1, 0)][0]; a1 = tl[min(f + 1, len(tl) - 1)][0]
            hl_ = a0 + (((a1 - a0) + 180) % 360 - 180) * 0.5
            fd, pn, info = fix_free(au, st, f, f'{name}_insfree', hint=hl_)
            lp = st['lhp']
            if f in lframes:
                for (kf, kd, ko) in keys:
                    if kf == f and 'lhf' in kd: kd['lhf'] = (fd.x, fd.y, fd.z); kd['lhn'] = (pn.x, pn.y, pn.z)
                refixed.add(f)
            else:
                keys.append((f, {'lhp': (lp.x, lp.y, lp.z), 'lhf': (fd.x, fd.y, fd.z), 'lhn': (pn.x, pn.y, pn.z)}, {'hold': False}))
                lframes.add(f)
            print(f'   insert-free {name} f{f}: path cost {c:.0f} (l {cl[f]:.0f}) -> {info["new"]}')
            continue
        if f in gframes: continue
        def nb(tk):
            a0 = tk[max(f - 1, 0)][0]; a1 = tk[min(f + 1, len(tk) - 1)][0]
            return a0 + (((a1 - a0) + 180) % 360 - 180) * 0.5
        hint = {'r': nb(tr)} if st.get('lhw', 0) > 0.5 else {'r': nb(tr), 'l': nb(tl)}
        G, b, e, info = fix_state(au, st, f, f'{name}_ins', verbose=False, hint=hint)
        print(f'   insert {name} f{f}: path cost {c:.0f} -> key cost {info["new"]}')
        keys.append((f, {'G': (G.x, G.y, G.z), 'b': (b.x, b.y, b.z), 'e': (e.x, e.y, e.z)}, {'hold': False}))
        gframes.add(f)
    return keys


def fix_shared(au, clips_mod):
    """correct the named stance sword poses in their canonical context and write them back into clips"""
    ctx = [('PFLUG', 'Hema_Guard', 0), ('VOMTAG', 'Hema_Zornhau', 9), ('ZORN_END', 'Hema_Zornhau', 24),
           ('ZW_END', 'Hema_Zwerchhau', 20), ('LANGORT', 'Hema_Scheitelhau', 19)]
    fns = {fn()[0]: fn for fn in clips_mod.ALL}
    for pose, clip, f in ctx:
        name, keys, steps, length, rm = fns[clip]()
        ch, feet = au.build_channels(keys); au._steps = steps
        st = au.evaluate(f, ch, feet, steps)
        root = st.get('pxy', Vector((0, 0, 0)))
        G, b, e, info = fix_state(au, st, f, 'shared_' + pose)
        P = getattr(clips_mod, pose)
        P['G'] = (G.x - root.x, G.y - root.y, G.z); P['b'] = (b.x, b.y, b.z); P['e'] = (e.x, e.y, e.z)
    save_cache()
