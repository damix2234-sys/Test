# Anatomical QA of arm poses + skin deformation on baked clips.
#   wrist: flexion(+)/extension(-), radial(+)/ulnar(-) deviation; forearm pronation(+)/supination(-) from mid-position
#   elbow: flexion, off-hinge bend, lowerarm-bone twist vs hinge frame (skin twist at the elbow), swivel (0=elbow down, 90=out, 180=up)
#   shoulder: humerus elevation / azimuth in the chest frame
#   skin: arm vertices inside the torso / the other arm, edge compression/stretch and face collapse around shoulders, elbows, wrists
import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import *
import json
from mathutils.bvhtree import BVHTree
args = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
blend = args[0] if args else OUT + 'hero_hema.blend'
only = args[1].split(',') if len(args) > 1 and args[1] != 'all' else None
step = int(args[2]) if len(args) > 2 else 2
bpy.ops.wm.open_mainfile(filepath=blend)
arm = [o for o in bpy.data.objects if o.type == 'ARMATURE'][0]
body = bpy.data.objects['Body']
pb = arm.pose.bones
for b in pb:
    for c in b.constraints: c.mute = True
R = {b.name: b.matrix_local.copy() for b in arm.data.bones}
deg = math.degrees
def cl(v, a, b): return max(a, min(b, v))
FWD = Vector((0, -1, 0))
H_LOC, T_LOC, PN_LOC, X_LOC = {}, {}, {}, {}
for s in 'rl':
    u = (R[f'lowerarm_{s}'].translation - R[f'upperarm_{s}'].translation).normalized()
    h = u.cross(FWD).normalized()
    H_LOC[s] = R[f'upperarm_{s}'].to_3x3().inverted() @ h
    Hm = R[f'hand_{s}'].to_3x3(); d = (Hm @ Vector((0, 1, 0))).normalized()
    pn = Vector((0, 0, -1)); pn = (pn - d * pn.dot(d)).normalized()
    t = pn.cross(d).normalized()
    if t.dot(FWD) < 0: t = -t
    T_LOC[s] = Hm.inverted() @ t; PN_LOC[s] = Hm.inverted() @ pn
    X_LOC[s] = R[f'lowerarm_{s}'].to_3x3().inverted() @ h      # lowerarm axis that equals the hinge axis at rest
PS = {'r': -1, 'l': 1}
def sang(a, b, axis):
    return deg(math.atan2(axis.dot(a.cross(b)), a.dot(b)))
def arm_metrics(s):
    S = pb[f'upperarm_{s}'].matrix; E = pb[f'lowerarm_{s}'].matrix; Hh = pb[f'hand_{s}'].matrix
    sh, el, wr = S.translation, E.translation, Hh.translation
    u = (el - sh).normalized(); f = (wr - el).normalized()
    h = (S.to_3x3() @ H_LOC[s]).normalized()
    m = {}
    m['eflex'] = deg(u.angle(f))
    m['offh'] = deg(math.asin(cl(f.dot(h), -1, 1)))
    d = (Hh.to_3x3() @ Vector((0, 1, 0))).normalized(); t = (Hh.to_3x3() @ T_LOC[s]).normalized(); pn = (Hh.to_3x3() @ PN_LOC[s]).normalized()
    n0 = h.cross(f).normalized()
    tp = t - f * t.dot(f)
    m['pron'] = sang(n0, tp.normalized(), f) * PS[s] if tp.length > 1e-6 else 0
    m['wflex'] = deg(math.atan2(-f.dot(pn), f.dot(d)))
    m['wdev'] = deg(math.atan2(-f.dot(t), f.dot(d)))
    xl = (E.to_3x3() @ X_LOC[s]); xl = (xl - f * xl.dot(f)); hp = (h - f * h.dot(f))
    m['etw'] = sang(hp.normalized(), xl.normalized(), f) if xl.length > 1e-6 and hp.length > 1e-6 else 0
    C = pb['spine_03'].matrix.to_3x3() @ R['spine_03'].to_3x3().inverted()
    up = C @ Vector((0, 0, 1)); fw = C @ FWD; lat = C @ Vector((-1 if s == 'r' else 1, 0, 0))
    m['elev'] = deg(u.angle(-up))
    m['azim'] = deg(math.atan2(u.dot(fw), u.dot(lat)))
    a = (wr - sh); a.normalize()
    v = el - (sh + a * (el - sh).dot(a))
    dn = -up - a * (-up).dot(a); lt = lat - a * lat.dot(a)
    m['swiv'] = deg(math.atan2(v.dot(lt.normalized()), v.dot(dn.normalized()))) if v.length > 0.01 and dn.length > 1e-3 else 0
    m['elz'] = (el.z - sh.z) * 100
    return m
# ---- skin groups ----
gi = {g.index: g.name for g in body.vertex_groups}
dom = []
for v in body.data.vertices:
    best = max(v.groups, key=lambda g: g.weight) if v.groups else None
    dom.append((gi[best.group], best.weight) if best else (None, 0))
TORSO = {'pelvis', 'spine_01', 'spine_02', 'spine_03', 'neck_01'}
def side_of(n): return n[-1] if n and n[-2:] in ('_r', '_l') else None
ARMG = lambda n: n and (n.startswith(('upperarm', 'lowerarm', 'hand', 'index', 'middle', 'ring', 'pinky', 'thumb')))
rest_co = [v.co.copy() for v in body.data.vertices]
sh_rest = {s: R[f'upperarm_{s}'].translation for s in 'rl'}
arm_test = {s: [] for s in 'rl'}
for i, (n, w) in enumerate(dom):
    if not ARMG(n) or w < 0.7: continue
    s = side_of(n)
    if n.startswith('upperarm') and (rest_co[i] - sh_rest[s]).length < 0.09: continue
    arm_test[s].append(i)
polys = [list(p.vertices) for p in body.data.polygons]
torso_f = [k for k, p in enumerate(polys) if all(dom[i][0] in TORSO for i in p)]
armf = {s: [k for k, p in enumerate(polys) if all(ARMG(dom[i][0]) and side_of(dom[i][0]) == s for i in p)] for s in 'rl'}
REG = {'clavicle_r', 'clavicle_l', 'upperarm_r', 'upperarm_l', 'lowerarm_r', 'lowerarm_l', 'hand_r', 'hand_l', 'spine_03'}
reg_v = {i for i, (n, w) in enumerate(dom) if n in REG}
edges = [(e.vertices[0], e.vertices[1]) for e in body.data.edges if e.vertices[0] in reg_v and e.vertices[1] in reg_v]
rest_len = [(rest_co[a] - rest_co[b]).length for a, b in edges]
reg_f = [k for k, p in enumerate(polys) if all(i in reg_v for i in p)]
def area(co, p):
    a = 0.0
    for j in range(1, len(p) - 1): a += (co[p[j]] - co[p[0]]).cross(co[p[j + 1]] - co[p[0]]).length * 0.5
    return a
rest_area = [area(rest_co, polys[k]) for k in reg_f]
dg = bpy.context.evaluated_depsgraph_get()
def skin_metrics():
    be = body.evaluated_get(dg); me = be.to_mesh()
    co = [v.co.copy() for v in me.vertices]
    be.to_mesh_clear()
    out = {}
    tb = BVHTree.FromPolygons(co, [polys[k] for k in torso_f])
    for s in 'rl':
        worst = 0.0; cnt = 0
        for i in arm_test[s]:
            r = tb.find_nearest(co[i], 0.08)
            if r[0] is None: continue
            if (co[i] - r[0]).dot(r[1]) < 0: cnt += 1; worst = max(worst, r[3])
        out[f'pen_{s}'] = worst * 100; out[f'penn_{s}'] = cnt
    for s, o in (('r', 'l'), ('l', 'r')):
        ab = BVHTree.FromPolygons(co, [polys[k] for k in armf[o]])
        worst = 0.0
        for i in arm_test[s]:
            r = ab.find_nearest(co[i], 0.06)
            if r[0] is None: continue
            if (co[i] - r[0]).dot(r[1]) < 0: worst = max(worst, r[3])
        out[f'aa_{s}'] = worst * 100
    rmin, rmax, where = 9, 0, ''
    for (a, b), L in zip(edges, rest_len):
        if L < 1e-5: continue
        q = (co[a] - co[b]).length / L
        if q < rmin: rmin = q; where = dom[a][0]
        rmax = max(rmax, q)
    out['emin'] = rmin; out['emax'] = rmax; out['ewhere'] = where
    amin = min(area(co, polys[k]) / ra for k, ra in zip(reg_f, rest_area) if ra > 1e-7)
    out['amin'] = amin
    return out
LIM = dict(wflex=(-60, 70), wdev=(-38, 22), pron=(-88, 88), etw=(-25, 25), offh=(-12, 12), eflex=(0, 150))
for b_ in pb: b_.rotation_quaternion = (1, 0, 0, 0); b_.location = (0, 0, 0)
bpy.context.view_layer.update()
print('REST', {k: round(v, 1) for s_ in 'rl' for k, v in ((kk + '_' + s_, vv) for kk, vv in arm_metrics(s_).items())})
names = sorted(a.name for a in bpy.data.actions)
if only: names = [n for n in names if n in only]
report = {}
ad = arm.animation_data or arm.animation_data_create()
for an in names:
    act = bpy.data.actions[an]; ad.action = act
    try:
        if getattr(act, 'slots', None) and len(act.slots) and ad.action_slot is None: ad.action_slot = act.slots[0]
        elif getattr(act, 'slots', None) and len(act.slots): ad.action_slot = act.slots[0]
    except Exception as ex: print('slot', an, ex)
    f0, f1 = [int(round(x)) for x in act.frame_range]
    rows = []
    for fr in range(f0, f1 + 1, step):
        bpy.context.scene.frame_set(fr)
        row = {'f': fr}
        for s in 'rl':
            for k, v in arm_metrics(s).items(): row[f'{k}_{s}'] = v
        row.update(skin_metrics())
        rows.append(row)
    report[an] = rows
    # summary
    bad = []
    for s in 'rl':
        for k, (lo, hi) in LIM.items():
            vals = [(r[f'{k}_{s}'], r['f']) for r in rows]
            mn = min(vals); mx = max(vals)
            if mn[0] < lo: bad.append(f'{k}_{s} {mn[0]:.0f}@{mn[1]}')
            if mx[0] > hi: bad.append(f'{k}_{s} +{mx[0]:.0f}@{mx[1]}')
        sw = max((abs(r[f'swiv_{s}']), r['f']) for r in rows)
        if sw[0] > 75: bad.append(f'swiv_{s} {sw[0]:.0f}@{sw[1]}')
        pen = max((r[f'pen_{s}'], r['f']) for r in rows)
        if pen[0] > 0.8: bad.append(f'pen_{s} {pen[0]:.1f}cm@{pen[1]}')
        aa = max((r[f'aa_{s}'], r['f']) for r in rows)
        if aa[0] > 0.8: bad.append(f'armarm_{s} {aa[0]:.1f}cm@{aa[1]}')
    em = min((r['emin'], r['f'], r['ewhere']) for r in rows); ex = max((r['emax'], r['f']) for r in rows); am = min((r['amin'], r['f']) for r in rows)
    if em[0] < 0.55: bad.append(f'edge-compress {em[0]:.2f}@{em[1]}({em[2]})')
    if ex[0] > 1.6: bad.append(f'edge-stretch {ex[0]:.2f}@{ex[1]}')
    if am[0] < 0.25: bad.append(f'face-collapse {am[0]:.2f}@{am[1]}')
    print(f'{"OK " if not bad else "BAD"} {an:22s} ' + ('; '.join(bad) if bad else ''))
json.dump(report, open(OUT + 'qa_arms.json', 'w'))
