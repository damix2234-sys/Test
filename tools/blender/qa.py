# automated QA: sword/body interpenetration and feet below ground, every frame of every clip
import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import *
from mathutils.bvhtree import BVHTree
bpy.ops.wm.open_mainfile(filepath=OUT + 'hero_hema.blend')
arm = bpy.data.objects['Hero']; sc = bpy.context.scene
body_objs = [bpy.data.objects[n] for n in ('Body', 'Pants', 'Boots') if n in bpy.data.objects]
pbw = arm.pose.bones['weapon_r']
only = [a for a in sys.argv if a.startswith('Hema_') or a in ('Guard_Walk', 'Run_Carry', 'Sprint_Carry', 'Death')]
report = []
for act in sorted(bpy.data.actions, key=lambda a: a.name):
    if only and act.name not in only: continue
    if act.name in ('Idle', 'Walk', 'Jog', 'Hit', 'Talk', 'Sit'): continue
    arm.animation_data_create(); arm.animation_data.action = act
    try: arm.animation_data.action_slot = act.slots[0]
    except Exception: pass
    f0, f1 = [int(x) for x in act.frame_range]
    worst = (0, None, ''); low = (0, None)
    for f in range(f0, f1 + 1):
        sc.frame_set(f)
        dg = bpy.context.evaluated_depsgraph_get()
        # blade samples from the weapon bone (bone Y = blade direction)
        Mw = arm.matrix_world @ pbw.matrix
        G = Mw.translation; b = (Mw.to_3x3() @ Vector((0, 1, 0))).normalized()
        pts = [G + b * (0.075 + 0.93 * t) for t in [i / 14 for i in range(15)]] + [G - b * (0.088 + 0.046), G - b * (0.088 + 0.066)]
        for o in body_objs:
            oe = o.evaluated_get(dg)
            bvh = BVHTree.FromObject(oe, dg)
            inv = oe.matrix_world.inverted()
            for i, p in enumerate(pts):
                loc, nrm, idx, dist = bvh.find_nearest(inv @ p)
                if loc is None: continue
                d = (inv @ p - loc).dot(nrm)
                if d < -0.006 and dist < 0.2:
                    depth = -d
                    if depth > worst[0]: worst = (depth, f, f'{o.name} pt{i}')
        # feet / boots below ground
        be = bpy.data.objects['Boots'].evaluated_get(dg)
        zmin = min((be.matrix_world @ v.co).z for v in be.data.vertices)
        if zmin < low[0]: low = (zmin, f)
    msg = f'{act.name:22s} frames {f0}-{f1}  sword-penetration max {worst[0]*100:.1f}cm @f{worst[1]} {worst[2]}   boots min z {low[0]*100:.1f}cm @f{low[1]}'
    flag = '!!' if worst[0] > 0.015 or low[0] < -0.025 else '  '
    print(flag, msg)
