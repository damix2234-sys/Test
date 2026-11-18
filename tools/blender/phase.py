import sys; sys.path.insert(0, '/tmp/claude-0/-home-user-Test/f99a113e-eb26-5643-ae8a-066cde7aded7/scratchpad/bl')
from common import *
bpy.ops.wm.open_mainfile(filepath=OUT + 'hero_hema.blend')
arm = bpy.data.objects['Hero']; sc = bpy.context.scene
for name in ('Guard_Walk', 'Run_Carry', 'Sprint_Carry', 'Walk', 'Jog'):
    act = bpy.data.actions[name]
    arm.animation_data_create(); arm.animation_data.action = act
    try: arm.animation_data.action_slot = act.slots[0]
    except Exception: pass
    f0, f1 = [int(x) for x in act.frame_range]
    zs = []
    for f in range(f0, f1):
        sc.frame_set(f)
        zl = (arm.matrix_world @ arm.pose.bones['foot_l'].matrix).translation
        zr = (arm.matrix_world @ arm.pose.bones['foot_r'].matrix).translation
        zs.append((f, zl.z, zr.z, zl.y, zr.y))
    # left foot contact = frame where the left foot is most forward (min y) - heel strike
    fl = min(zs, key=lambda x: x[3]); fr = min(zs, key=lambda x: x[4])
    n = f1 - f0
    print(f'PHASE {name:13s} len {n} leftFwd@{fl[0]} ({(fl[0]-f0)/n:.3f})  rightFwd@{fr[0]} ({(fr[0]-f0)/n:.3f})')
