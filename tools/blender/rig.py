# shared: sword + weapon bone + IK control rig for authoring HEMA clips
import sys; sys.path.insert(0, '/tmp/claude-0/-home-user-Test/f99a113e-eb26-5643-ae8a-066cde7aded7/scratchpad/bl')
from common import *

GRIP_R = Vector((-0.80, 0.045, 1.428))   # centre of the right fist in rest (T) pose
B_REST = Vector((0,-1,0))                # blade direction in rest pose
E_REST = Vector((0,0,-1))                # true-edge direction in rest pose
LH_OFF = 0.10                            # left hand sits 10 cm toward the pommel

def mat(name, col, metal=0.0, rough=0.5):
    m=bpy.data.materials.new(name); m.use_nodes=True
    p=m.node_tree.nodes['Principled BSDF']; p.inputs['Base Color'].default_value=(*col,1)
    p.inputs['Metallic'].default_value=metal; p.inputs['Roughness'].default_value=rough
    return m

def build_sword(arm):
    """Historical two-handed longsword (~1.22 m) in rest pose at the right fist, blade along -Y."""
    steel=mat('M_Steel',(0.72,0.74,0.78),1.0,0.22); dark=mat('M_SteelDark',(0.25,0.25,0.27),1.0,0.4)
    grip=mat('M_Grip',(0.12,0.06,0.03),0.0,0.7); brass=mat('M_Brass',(0.55,0.42,0.18),1.0,0.35)
    bm=bmesh.new()
    def add(verts, faces, mi):
        vs=[bm.verts.new(v) for v in verts]
        for f in faces:
            try: bm.faces.new([vs[i] for i in f]).material_index=mi
            except: pass
    G=GRIP_R; b=B_REST; side=Vector((1,0,0)); e=E_REST
    # blade: diamond cross-section, tapering, with a central ridge
    L=0.92; base=G+b*0.065
    rings=[]
    N=10
    for i in range(N+1):
        t=i/N; c=base+b*(L*t)
        w=0.026*(1-t)+0.0105*t if t<0.92 else 0.0105*(1-(t-0.92)/0.08)+0.0005
        th=0.0045*(1-t*0.5)
        rings.append([c+e*w, c+side*th, c-e*w, c-side*th])
    verts=[v for r in rings for v in r]; faces=[]
    for i in range(N):
        for j in range(4): faces.append((i*4+j, i*4+(j+1)%4, (i+1)*4+(j+1)%4, (i+1)*4+j))
    tip=len(verts); verts.append(base+b*(L+0.005))
    for j in range(4): faces.append((N*4+j,N*4+(j+1)%4,tip))
    add(verts,faces,0)
    # cross guard (quillons) along the edge axis
    def box(c, ax, ay, az, mi):
        vs=[]; 
        for sx in(-1,1):
            for sy in(-1,1):
                for sz in(-1,1): vs.append(c+ax*sx+ay*sy+az*sz)
        fs=[(0,1,3,2),(4,6,7,5),(0,4,5,1),(2,3,7,6),(0,2,6,4),(1,5,7,3)]
        add(vs,fs,mi)
    box(G+b*0.058, e*0.13, side*0.011, b*0.011, 1)
    box(G+b*0.058+e*0.13, e*0.012, side*0.014, b*0.014, 1)
    box(G+b*0.058-e*0.13, e*0.012, side*0.014, b*0.014, 1)
    # grip (octagonal), leather wrapped, 22 cm for two hands
    seg=8; r0=0.016; g0=G+b*0.05; g1=G-b*(LH_OFF+0.07)
    for k in range(2):
        pass
    vs=[];fs=[]
    for k,c in enumerate([g0,g1]):
        for s in range(seg):
            a=s/seg*2*math.pi; vs.append(c+(side*math.cos(a)+e*math.sin(a))*r0*(1.0 if k==0 else 1.1))
    for s in range(seg): fs.append((s,(s+1)%seg,seg+(s+1)%seg,seg+s))
    add(vs,fs,2)
    # pommel (faceted sphere)
    pc=G-b*(LH_OFF+0.10)
    sb=bmesh.new(); bmesh.ops.create_icosphere(sb,subdivisions=1,radius=0.032)
    add([pc+Vector((v.co.x,v.co.y*0.8,v.co.z)) for v in sb.verts],[[v.index for v in f.verts] for f in sb.faces],3)
    sb.free()
    me=bpy.data.meshes.new('Sword'); bm.to_mesh(me); bm.free()
    for m in (steel,dark,grip,brass): me.materials.append(m)
    for p in me.polygons: p.use_smooth=False
    o=bpy.data.objects.new('Sword',me); bpy.context.scene.collection.objects.link(o)
    # weapon bone
    bpy.context.view_layer.objects.active=arm; arm.select_set(True)
    bpy.ops.object.mode_set(mode='EDIT')
    eb=arm.data.edit_bones.new('weapon_r'); eb.head=G; eb.tail=G+b*0.25
    eb.align_roll(e)
    eb.parent=arm.data.edit_bones['hand_r']; eb.use_deform=True
    bpy.ops.object.mode_set(mode='OBJECT')
    o.parent=arm; vg=o.vertex_groups.new(name='weapon_r'); vg.add(list(range(len(me.vertices))),1.0,'REPLACE')
    o.modifiers.new('Armature','ARMATURE').object=arm
    return o

def frame_from(b, e):
    """rotation matrix mapping rest blade/edge to the given world blade/edge directions"""
    b=Vector(b).normalized(); e=Vector(e); e=(e-b*e.dot(b)).normalized(); s=e.cross(b)
    R_world=Matrix((s,b,e)).transposed()          # columns: s,b,e
    br=B_REST; er=E_REST; sr=er.cross(br)
    R_rest=Matrix((sr,br,er)).transposed()
    return R_world@R_rest.inverted()

class Ctl:
    def __init__(self, arm):
        self.arm=arm; sc=bpy.context.scene
        def empty(n):
            o=bpy.data.objects.new(n,None); sc.collection.objects.link(o); o.empty_display_size=0.05; o.rotation_mode='QUATERNION'; return o
        A=arm.matrix_world; db=arm.data.bones
        self.SW=empty('C_Sword'); self.SW.matrix_world=Matrix.Translation(GRIP_R)
        hr=A@db['hand_r'].matrix_local; hl=A@db['hand_l'].matrix_local
        self.TR=empty('C_HandR'); self.TR.matrix_world=hr
        Rz=Matrix.Rotation(math.pi,4,'Z')
        lrot=(Rz@hl).to_3x3()
        lpos=hr.to_translation()-B_REST*LH_OFF
        self.TL=empty('C_HandL'); self.TL.matrix_world=Matrix.Translation(lpos)@lrot.to_4x4()
        for t in (self.TR,self.TL):
            mw=t.matrix_world.copy(); t.parent=self.SW; t.matrix_parent_inverse=self.SW.matrix_world.inverted(); t.matrix_world=mw
        self.PR=empty('C_PoleR'); self.PL=empty('C_PoleL')
        self.FR=empty('C_FootR'); self.FL=empty('C_FootL'); self.KR=empty('C_KneeR'); self.KL=empty('C_KneeL')
        self.fr0=A@db['foot_r'].matrix_local; self.fl0=A@db['foot_l'].matrix_local
        self.FR.matrix_world=self.fr0; self.FL.matrix_world=self.fl0
        pb=arm.pose.bones
        def ik(bone,target,pole,pa):
            c=pb[bone].constraints.new('IK'); c.target=target; c.chain_count=2; c.pole_target=pole; c.pole_angle=pa; c.use_stretch=False; return c
        self.c=[]
        self.c.append(ik('lowerarm_r',self.TR,self.PR,math.radians(self.POLE_ARM_R)))
        self.c.append(ik('lowerarm_l',self.TL,self.PL,math.radians(self.POLE_ARM_L)))
        for h,t in (('hand_r',self.TR),('hand_l',self.TL),('foot_r',self.FR),('foot_l',self.FL)):
            c=pb[h].constraints.new('COPY_ROTATION'); c.target=t; self.c.append(c)
        self.c.append(ik('calf_r',self.FR,self.KR,math.radians(self.POLE_LEG)))
        self.c.append(ik('calf_l',self.FL,self.KL,math.radians(self.POLE_LEG)))
    POLE_ARM_R=0; POLE_ARM_L=0; POLE_LEG=-90

    def set_sword(self, pos, b, e):
        self.SW.matrix_world=Matrix.Translation(Vector(pos))@frame_from(b,e).to_4x4()
    def set_foot(self, which, pos, yaw_deg=0):
        f0=self.fr0 if which=='r' else self.fl0
        R=Matrix.Rotation(math.radians(yaw_deg),4,'Z')
        M=R@f0; M.translation=Vector(pos)
        (self.FR if which=='r' else self.FL).matrix_world=M
    def key(self, f):
        for o in (self.SW,self.FR,self.FL,self.PR,self.PL,self.KR,self.KL):
            o.keyframe_insert('location',frame=f); o.keyframe_insert('rotation_quaternion',frame=f)
