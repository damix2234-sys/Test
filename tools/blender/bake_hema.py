import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from loco import *
import clips, time
bpy.ops.wm.open_mainfile(filepath=OUT+'hero_stage1.blend')
bpy.context.scene.render.fps = 30
arm = bpy.data.objects['Hero']
for o in list(bpy.data.objects):
    if o.name in ('Sword',): bpy.data.objects.remove(o)
print('E_REST', compute_edge(arm))
build_sword(arm); build_flask(arm)
import rigtwist
rigtwist.add_twist_bones(arm)
rigtwist.reweight(arm, [o for o in bpy.data.objects if o.type == 'MESH' and o.parent == arm])
au = Author(arm)
import fixkeys
if '--nofix' not in sys.argv: fixkeys.fix_shared(au, clips)
only = [a for a in sys.argv if a.startswith('Hema_')]
t0 = time.time()
for fn in clips.ALL:
    name, keys, steps, length, rm = fn()
    if only and name not in only: continue
    if '--nofix' not in sys.argv: keys = fixkeys.fix_clip(au, name, keys, steps, length); fixkeys.save_cache()
    au.run(name, keys, steps, length, root_motion=rm)
print('bake time', round(time.time() - t0, 1))
if not only or 'loco' in sys.argv:
    ual = load_ual()
    bake_loco(au, 'Guard_Walk', ual['Walk_Loop'], 'guard')
    bake_loco(au, 'Run_Carry', ual['Jog_Fwd_Loop'], 'carry')
    bake_loco(au, 'Sprint_Carry', ual['Sprint_Loop'], 'carry')
    KEEP = {'Idle_Loop': 'Idle', 'Walk_Loop': 'Walk', 'Jog_Fwd_Loop': 'Jog', 'Death01': 'Death', 'Hit_Chest': 'Hit',
            'Idle_Talking_Loop': 'Talk', 'Sitting_Idle_Loop': 'Sit'}
    for base, a in ual.items():
        if base in KEEP: a.name = KEEP[base]
        else: bpy.data.actions.remove(a)
    for a in list(bpy.data.actions):
        if a.users == 0 and not a.use_fake_user: bpy.data.actions.remove(a)
    print('ACTIONS', sorted(a.name for a in bpy.data.actions))
for o in (au.TR, au.TL, au.PR, au.PL, au.FR, au.FL, au.KR, au.KL, au.LOOK): bpy.data.objects.remove(o)
for b in arm.pose.bones:
    for c in list(b.constraints): b.constraints.remove(c)
    b.location = (0, 0, 0); b.rotation_quaternion = (1, 0, 0, 0)
bpy.ops.wm.save_as_mainfile(filepath=OUT + ('hero_hema_test.blend' if only else 'hero_hema.blend'))
