# Arm-into-torso check on the deformed skin: arm vertices tested against the elliptic torso volume
# (rest cross-sections mapped through the posed spine bones), per frame of every baked clip.
import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import *
import numpy as np
from arms import ArmSolver
a = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
bpy.ops.wm.open_mainfile(filepath=a[0] if a else OUT + 'hero_hema.blend')
step = int(a[1]) if len(a) > 1 else 2
arm = [o for o in bpy.data.objects if o.type == 'ARMATURE'][0]; body = bpy.data.objects['Body']
for b in arm.pose.bones:
    for c in b.constraints: c.mute = True
AS = ArmSolver(arm, body)
R = AS.R
gi = {g.index: g.name for g in body.vertex_groups}
ARMN = ('upperarm', 'lowerarm', 'hand', 'index', 'middle', 'ring', 'pinky', 'thumb')
sel = {'r': [], 'l': []}; grp = {}
for v in body.data.vertices:
    if not v.groups: continue
    g = max(v.groups, key=lambda g: g.weight); n = gi[g.group]
    if not n.startswith(ARMN) or g.weight < 0.6: continue
    s = n[-1]
    if n.startswith('upperarm'):
        A = R[f'upperarm_{s}'].translation; B = R[f'lowerarm_{s}'].translation
        if (v.co - A).dot(B - A) / (B - A).length_squared < 0.4: continue
    sel[s].append(v.index); grp[v.index] = n.split('_')[0]
print('arm verts', {k: len(v) for k, v in sel.items()})
ad = arm.animation_data or arm.animation_data_create()
dg = bpy.context.evaluated_depsgraph_get()
pb = arm.pose.bones
worst_all = []
for act in sorted(bpy.data.actions, key=lambda x: x.name):
    ad.action = act
    try: ad.action_slot = act.slots[0]
    except Exception: pass
    f0, f1 = [int(round(x)) for x in act.frame_range]
    worst = (0, 0, '')
    for fr in range(f0, f1 + 1, step):
        bpy.context.scene.frame_set(fr); bpy.context.view_layer.update()
        Minv = []
        for name, z0, z1 in AS.bands:
            Md = pb[name].matrix @ R[name].inverted()
            Minv.append((name, z0, z1, np.array(Md.inverted())))
        be = body.evaluated_get(dg); me = be.to_mesh()
        co = np.array([tuple(v.co) for v in me.vertices]); be.to_mesh_clear()
        for s in 'rl':
            d = AS.torso_pen(co[sel[s]], 0.0, Minv)
            m = float(d.max()) if len(d) else 0.0
            if m > worst[0]:
                byg = {}
                for idx, dd in zip(sel[s], d):
                    g_ = grp[idx]; byg[g_] = max(byg.get(g_, 0), dd)
                worst = (m, fr, s + ' ' + ' '.join(f'{k}:{v*100:.1f}' for k, v in sorted(byg.items(), key=lambda x: -x[1]) if v > 0.002))
    worst_all.append((act.name, worst))
    flag = 'BAD' if worst[0] > 0.015 else ('ok ' if worst[0] > 0.006 else 'OK ')
    print(f'{flag} {act.name:22s} arm-into-torso max {worst[0]*100:4.1f} cm @f{worst[1]} {worst[2]}')
