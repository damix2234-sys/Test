import sys; sys.path.insert(0, '/tmp/claude-0/-home-user-Test/f99a113e-eb26-5643-ae8a-066cde7aded7/scratchpad/bl')
from common import *
bpy.ops.wm.open_mainfile(filepath=OUT+'hero_anim.blend')
arm=bpy.data.objects['Hero']
UAL={'Idle_Loop':'Idle','Walk_Loop':'Walk','Jog_Fwd_Loop':'Jog','Sprint_Loop':'Sprint','Roll':'Roll','Hit_Chest':'Hit',
     'Death01':'Death','Spell_Simple_Shoot':'Cast','Consume':'Drink','Interact':'Interact','Idle_Talking_Loop':'Talk','Sitting_Idle_Loop':'Sit'}
before=set(bpy.data.objects); acts_before=set(bpy.data.actions)
for f in ['Universal Animation Library[Standard]/Unreal-Godot/UAL1_Standard.glb','Universal Animation Library 2[Standard]/Unreal-Godot/UAL2_Standard.glb']:
    bpy.ops.import_scene.gltf(filepath=X+f)
for o in list(bpy.data.objects):
    if o not in before: bpy.data.objects.remove(o)
def iter_fcurves(act):
    try:
        for fc in act.fcurves: yield fc
    except AttributeError:
        for layer in act.layers:
            for strip in layer.strips:
                for cb in strip.channelbags:
                    for fc in cb.fcurves: yield fc
FIST={}
for fn in ['index','middle','ring','pinky']:
    for k,a in zip((1,2,3),(75,85,60)): FIST[f'{fn}_0{k}_r']=Euler((math.radians(a),0,0)).to_quaternion()
FIST['thumb_01_r']=Euler((math.radians(20),0,math.radians(-30))).to_quaternion()
FIST['thumb_02_r']=Euler((math.radians(30),0,0)).to_quaternion()
keep=[]
for a in list(bpy.data.actions):
    if a in acts_before: 
        if a.name.startswith('Hema_'): keep.append(a)
        continue
    base=a.name.split('.')[0]
    if base in UAL and not any(k.name==UAL[base] for k in keep):
        a.name=UAL[base]; keep.append(a)
        for fc in iter_fcurves(a):
            for bn,q in FIST.items():
                if fc.data_path==f'pose.bones["{bn}"].rotation_quaternion':
                    for kp in fc.keyframe_points:
                        kp.co.y=q[fc.array_index]; kp.handle_left.y=q[fc.array_index]; kp.handle_right.y=q[fc.array_index]
for a in list(bpy.data.actions):
    if a not in keep: bpy.data.actions.remove(a)
print('ACTIONS', sorted(a.name for a in keep))
arm.animation_data_create()
for a in keep:
    tr=arm.animation_data.nla_tracks.new(); tr.name=a.name
    st=tr.strips.new(a.name,0,a)
    try: st.action_slot=a.slots[0]
    except Exception as ex: pass
    tr.mute=True
arm.animation_data.action=None
decimate_heavy(4000,0.45,skip=('Sword','Hair','Body'))
# downscale textures for mobile
for im in bpy.data.images:
    if im.size[0]>1024: im.scale(1024,1024)
# drop the unused second UV map & helper objects
for o in bpy.data.objects:
    if o.type=='MESH':
        while len(o.data.uv_layers)>1: o.data.uv_layers.remove(o.data.uv_layers[1])
bpy.ops.object.select_all(action='DESELECT')
bpy.ops.export_scene.gltf(filepath=OUT+'hero.glb', export_format='GLB', export_animation_mode='NLA_TRACKS',
    export_image_format='JPEG', export_jpeg_quality=82, export_apply=False, export_yup=True,
    export_animations=True, export_force_sampling=True, export_frame_step=1, export_def_bones=True, export_optimize_animation_size=True)
import os; print('GLB MB', os.path.getsize(OUT+'hero.glb')/1e6)
