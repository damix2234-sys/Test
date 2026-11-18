import sys; sys.path.insert(0, '/tmp/claude-0/-home-user-Test/f99a113e-eb26-5643-ae8a-066cde7aded7/scratchpad/bl')
from rig import *
bpy.ops.wm.open_mainfile(filepath=OUT+'hero_stage1.blend')
sc=bpy.context.scene; sc.render.fps=30
arm=bpy.data.objects['Hero']
sword=build_sword(arm)
pb=arm.pose.bones
for b in pb: b.rotation_mode='QUATERNION'
C=Ctl(arm)
# pelvis controller
PEL=bpy.data.objects.new('C_Pelvis',None); sc.collection.objects.link(PEL); PEL.rotation_mode='XYZ'
pel_rest=arm.matrix_world@arm.data.bones['pelvis'].matrix_local
PEL.location=pel_rest.to_translation()
cl=pb['pelvis'].constraints.new('COPY_LOCATION'); cl.target=PEL
# yaw/lean applied as rotation of the pelvis bone basis relative to rest -> use transform from an empty holding the delta
cr=pb['pelvis'].constraints.new('CHILD_OF'); cr.target=PEL; cr.use_location_x=cr.use_location_y=cr.use_location_z=False
cr.inverse_matrix=Matrix.Translation(pel_rest.to_translation()).inverted() if False else PEL.matrix_world.inverted()
bpy.context.view_layer.update()

FIST={}
for side in 'rl':
    for fn in ['index','middle','ring','pinky']:
        for k,a in zip((1,2,3),(75,85,60)): FIST[f'{fn}_0{k}_{side}']=Euler((math.radians(a),0,0)).to_quaternion()
    FIST[f'thumb_01_{side}']=Euler((math.radians(20),0,math.radians(-30))).to_quaternion()
    FIST[f'thumb_02_{side}']=Euler((math.radians(30),0,0)).to_quaternion()

def pose(f, G, b, e, pel=(0,0.043,0.895), yaw=20, lean=0, fr=(-0.18,0.25,0.086), fry=40, fl=(0.13,-0.23,0.086), fly=-15,
         twist=0, pr=(-0.7,0.5,0.75), pl=(0.65,0.4,0.75), head=0):
    C.set_sword(G,b,e)
    C.set_foot('r',fr,fry); C.set_foot('l',fl,fly)
    C.PR.location=pr; C.PL.location=pl
    C.KR.location=(fr[0]-0.15,fr[1]-0.9,0.5); C.KL.location=(fl[0]+0.15,fl[1]-0.9,0.5)
    PEL.location=pel; PEL.rotation_euler=(math.radians(lean),0,math.radians(yaw))
    C.key(f); PEL.keyframe_insert('location',frame=f); PEL.keyframe_insert('rotation_euler',frame=f)
    # counter-rotate the spine so the chest faces the opponent, head looks forward
    for bn,k in (('spine_02',0.4),('spine_03',0.4)):
        pb[bn].rotation_quaternion=Euler((0,math.radians(-yaw*k+twist*0.5),0)).to_quaternion(); pb[bn].keyframe_insert('rotation_quaternion',frame=f)
    pb['neck_01'].rotation_quaternion=Euler((math.radians(head),math.radians(-yaw*0.2),0)).to_quaternion(); pb['neck_01'].keyframe_insert('rotation_quaternion',frame=f)

PFLUG=dict(G=(-0.10,-0.30,1.00), b=(0.10,-0.85,0.52), e=(0,0,-1))

def clear_anim():
    for o in [C.SW,C.FR,C.FL,C.PR,C.PL,C.KR,C.KL,PEL]:
        o.animation_data_clear()
    arm.animation_data_clear()
    for b in pb: b.location=(0,0,0); b.rotation_quaternion=(1,0,0,0); b.scale=(1,1,1)

def bake(name, f0, f1, loop=False):
    rec=[]
    for f in range(f0,f1+1):
        sc.frame_set(f)
        rec.append({b.name: b.matrix.copy() for b in pb})
    act=bpy.data.actions.new(name)
    arm.animation_data_create()
    # disable constraints while writing keys
    for b in pb:
        for c in b.constraints: c.mute=True
    arm.animation_data.action=act
    bones=arm.data.bones
    for i,f in enumerate(range(f0,f1+1)):
        R=rec[i]
        for b in pb:
            bone=bones[b.name]
            if bone.parent:
                P=bone.parent
                basis=(P.matrix_local.inverted()@bone.matrix_local).inverted()@R[P.name].inverted()@R[b.name]
            else:
                basis=bone.matrix_local.inverted()@R[b.name]
            if b.name in FIST: q=FIST[b.name]; loc=Vector((0,0,0))
            else: loc,q,_=basis.decompose()
            b.location=loc; b.rotation_quaternion=q
            b.keyframe_insert('location',frame=f-f0); b.keyframe_insert('rotation_quaternion',frame=f-f0)
    for b in pb:
        for c in b.constraints: c.mute=False
    act.use_fake_user=True
    arm.animation_data.action=None
    print('baked',name,f1-f0+1,'frames')
    return act

def author(name, keys, length):
    clear_anim()
    for f,kw in keys:
        k=dict(PFLUG); k.update(kw); pose(f, **k)
    # smooth interpolation
    for o in [C.SW,C.FR,C.FL,C.PR,C.PL,C.KR,C.KL,PEL,arm]:
        ad=o.animation_data
        if ad and ad.action:
            for fc in iter_fcurves(ad.action):
                for kp in fc.keyframe_points: kp.interpolation='BEZIER'; kp.easing='AUTO'
    return bake(name,0,length)

def iter_fcurves(act):
    try:
        for fc in act.fcurves: yield fc
    except AttributeError:
        for layer in act.layers:
            for strip in layer.strips:
                for cb in strip.channelbags:
                    for fc in cb.fcurves: yield fc

STEP=0.06
# 1) guard idle in Pflug (breathing loop)
author('Hema_Guard',[(0,{}),(30,dict(G=(-0.10,-0.30,0.985),pel=(0,0.043,0.888))),(60,{})],60)
# 2) Zornhau - wrath strike: from vom Tag, diagonal descending cut from the right shoulder, passing step with the right foot
author('Hema_Zornhau',[
 (0,{}),
 (7,dict(G=(-0.22,-0.04,1.50),b=(0.18,0.45,0.87),e=(0,-1,0),yaw=32,pel=(0,0.06,0.91))),          # vom Tag over right shoulder
 (10,dict(G=(-0.06,-0.40,1.38),b=(0.55,-0.62,0.56),e=(0.7,0,-0.7),yaw=5,pel=(0,-0.08,0.89),
          fr=(-0.10,-0.12,0.16),fry=20)),                                                          # blade cutting through, right foot passing
 (13,dict(G=(0.12,-0.46,0.98),b=(0.55,-0.70,-0.45),e=(0.6,0.3,-0.75),yaw=-25,pel=(-0.02,-0.18,0.86),
          fr=(-0.14,-0.42,0.086),fry=10,fly=25,lean=6,pl=(0.7,0.2,0.6))),                          # end of cut (low left), right foot planted forward
 (18,dict(G=(0.15,-0.40,0.93),b=(0.6,-0.6,-0.5),e=(0.6,0.3,-0.75),yaw=-25,pel=(-0.02,-0.17,0.86),
          fr=(-0.14,-0.42,0.086),fry=10,fly=25,lean=5,pl=(0.7,0.2,0.6))),
 (27,dict(G=(-0.02,-0.33,1.0),b=(0.2,-0.85,0.45),yaw=5,pel=(0,-0.04,0.89),fr=(-0.16,-0.02,0.15),fry=30)),
 (36,{})],36)
# 3) Zwerchhau - thwart cut: horizontal strike from the right at head height, hands high, crossguard protecting the head, step out of line
author('Hema_Zwerchhau',[
 (0,{}),
 (7,dict(G=(-0.24,-0.10,1.56),b=(0.2,0.6,0.77),e=(0,-1,0),yaw=32,pel=(0,0.06,0.91))),
 (10,dict(G=(-0.20,-0.26,1.66),b=(-0.92,-0.32,0.18),e=(0,-1,0),yaw=15,pel=(-0.04,-0.05,0.89),fr=(-0.24,-0.12,0.16),fry=30)),
 (13,dict(G=(-0.08,-0.42,1.66),b=(0.12,-0.98,0.08),e=(1,0,0),yaw=-10,pel=(-0.08,-0.14,0.87),fr=(-0.32,-0.34,0.086),fry=20,fly=10,head=-5)),
 (16,dict(G=(0.03,-0.38,1.62),b=(0.86,-0.48,0.05),e=(0.48,0.86,0),yaw=-22,pel=(-0.08,-0.14,0.87),fr=(-0.32,-0.34,0.086),fry=20,fly=15)),
 (26,dict(G=(-0.04,-0.32,1.08),b=(0.2,-0.85,0.45),yaw=5,pel=(-0.03,-0.04,0.89),fr=(-0.2,0.0,0.15),fry=30)),
 (36,{})],36)
# 4) Scheitelhau - scalp cut: vertical cut from above ending in Langort (long point), big passing step
author('Hema_Scheitelhau',[
 (0,{}),
 (10,dict(G=(-0.06,-0.06,1.82),b=(0.05,0.72,0.69),e=(0,-0.3,1),yaw=12,pel=(0,0.07,0.92),lean=-4,head=-6)),
 (13,dict(G=(-0.02,-0.34,1.84),b=(0.02,-0.25,0.97),e=(0,-1,0),yaw=8,pel=(0,-0.06,0.9),fr=(-0.12,-0.10,0.17),fry=20)),
 (16,dict(G=(0.0,-0.56,1.42),b=(0.0,-0.95,0.28),e=(0,0.3,-1),yaw=0,pel=(0,-0.24,0.84),lean=10,fr=(-0.11,-0.50,0.086),fry=5,fly=-5,
          pr=(-0.7,0.0,0.6),pl=(0.7,0.0,0.6))),
 (21,dict(G=(0.0,-0.62,1.30),b=(0.0,-0.98,0.08),e=(0,0.1,-1),yaw=0,pel=(0,-0.26,0.84),lean=10,fr=(-0.11,-0.50,0.086),fry=5,fly=-5,
          pr=(-0.7,0.0,0.6),pl=(0.7,0.0,0.6))),
 (32,dict(G=(-0.06,-0.36,1.05),b=(0.12,-0.85,0.5),yaw=10,pel=(0,-0.06,0.89),fr=(-0.16,-0.04,0.15),fry=30)),
 (42,{})],42)
# 5) Stich - thrust from Pflug with a lunge (used by enemies)
author('Hema_Stich',[
 (0,{}),
 (6,dict(G=(-0.12,-0.22,1.02),b=(0.12,-0.88,0.45),pel=(0,0.07,0.91))),
 (11,dict(G=(-0.02,-0.72,1.32),b=(0.02,-0.98,0.15),yaw=0,pel=(0,-0.22,0.85),lean=12,fr=(-0.15,0.32,0.086),fl=(0.12,-0.48,0.086),fly=-5,
          pr=(-0.7,0.0,0.6),pl=(0.7,0.0,0.6))),
 (16,dict(G=(-0.02,-0.70,1.30),b=(0.02,-0.98,0.15),yaw=0,pel=(0,-0.21,0.85),lean=12,fr=(-0.15,0.32,0.086),fl=(0.12,-0.48,0.086),fly=-5,
          pr=(-0.7,0.0,0.6),pl=(0.7,0.0,0.6))),
 (30,{})],30)
# 6) Krone - parry: hilt raised overhead, blade across to catch a descending blow
author('Hema_Krone',[
 (0,{}),
 (5,dict(G=(-0.12,-0.30,1.78),b=(0.95,-0.25,0.15),e=(0,0,1),yaw=10,pel=(0,0.06,0.88),head=-4)),
 (14,dict(G=(-0.12,-0.30,1.78),b=(0.95,-0.25,0.15),e=(0,0,1),yaw=10,pel=(0,0.06,0.88),head=-4)),
 (22,{})],22)

clear_anim()
for o in [C.SW,C.TR,C.TL,C.FR,C.FL,C.PR,C.PL,C.KR,C.KL,PEL]: bpy.data.objects.remove(o)
for b in pb:
    for c in list(b.constraints): b.constraints.remove(c)
bpy.ops.wm.save_as_mainfile(filepath=OUT+'hero_anim.blend')
