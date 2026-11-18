import sys; sys.path.insert(0, '/tmp/claude-0/-home-user-Test/f99a113e-eb26-5643-ae8a-066cde7aded7/scratchpad/bl')
from common import *
from PIL import Image, ImageDraw, ImageFilter
import numpy as np, os
os.makedirs(OUT, exist_ok=True)
random.seed(7)
bpy.ops.wm.read_factory_settings(use_empty=True)
objs=imp(BASE+'Superhero_Male_FullBody.gltf')
arm=bpy.data.objects['Armature']; arm.name='Hero'
body=bpy.data.objects['SuperHero_Male']; body.name='Body'
for o in list(bpy.data.objects):
    if o.name.startswith('Icosphere'): bpy.data.objects.remove(o)

def attach(path):
    new=imp(path); meshes=[]
    for o in new:
        if o.type=='ARMATURE': continue
        if o.name.startswith('Icosphere'): continue
        meshes.append(o)
    for m in meshes:
        mw=m.matrix_world.copy(); m.parent=arm; m.matrix_world=mw
        for md in m.modifiers:
            if md.type=='ARMATURE': md.object=arm
    for o in new:
        if o.type=='ARMATURE' or o.name.startswith('Icosphere'): bpy.data.objects.remove(o)
    return meshes
pants=attach(OUTF+'Modular Parts/Male_Peasant_Legs.gltf')[0]
boots=attach(OUTF+'Modular Parts/Male_Ranger_Feet_Boots.gltf')[0]
pants.name='Pants'; boots.name='Boots'

# remove hidden body parts under the trousers/boots
bm=bmesh.new(); bm.from_mesh(body.data)
kill=[v for v in bm.verts if v.co.z < 0.86]
bmesh.ops.delete(bm, geom=kill, context='VERTS'); bm.to_mesh(body.data); bm.free()

# ---------- skin texture: remove stubble, add scars ----------
TX=X+'Universal Base Characters[Standard]/Base Characters/Textures/'
skin=Image.open(TX+'T_Superhero_Male_Ligh.png').convert('RGB')
S=skin.size[0]
a=np.asarray(skin).astype(np.float32)
blur=np.asarray(skin.filter(ImageFilter.GaussianBlur(28))).astype(np.float32)
# face region occupies top-left ~ (0..0.36, 0..0.38) of the atlas
fx0,fx1,fy0,fy1=0,int(0.37*S),int(0.15*S),int(0.40*S)
reg=a[fy0:fy1,fx0:fx1]
big=np.asarray(skin.filter(ImageFilter.GaussianBlur(14))).astype(np.float32)[fy0:fy1,fx0:fx1]
lum=reg.mean(2,keepdims=True)+1; blum=big.mean(2,keepdims=True)+1
yy,xx=np.mgrid[fy0:fy1,fx0:fx1]
keep=np.ones(lum.shape[:2],np.float32)
for (ex,ey,r) in [(0.135,0.18,0.035),(0.235,0.18,0.035),(0.185,0.268,0.03)]:
    d=np.hypot(xx-ex*S,yy-ey*S)/(r*S); keep*=np.clip(d-0.6,0,1)
gain=np.clip(blum/lum,1.0,1.6)
fixed=reg*gain
# warm the result slightly toward clean skin tone
fixed=fixed*0.8+np.array([222,168,128],np.float32)*0.2
k=keep[...,None]*0.9
reg[:]=reg*(1-k)+fixed*k
# recolour the grey underwear area of the atlas into dark trouser cloth
sat=(a.max(2)-a.min(2))/(a.max(2)+1)
uw=(sat<0.12)&(a.mean(2)>120)
a[uw]=np.array([52,36,28],np.float32)*(a[uw].mean(1,keepdims=True)/200.0)
# overall: slightly cooler/paler skin like the reference
a=a*np.array([0.97,0.95,0.95])
skin=Image.fromarray(np.clip(a,0,255).astype(np.uint8))

def uv_at(obj, loc, face_index):
    me=obj.data; f=me.polygons[face_index]
    from mathutils.interpolate import poly_3d_calc
    co=[obj.matrix_world@me.vertices[v].co for v in f.vertices]
    w=poly_3d_calc(co, loc)
    uvl=me.uv_layers[0].data
    u=sum(w[i]*uvl[li].uv.x for i,li in enumerate(f.loop_indices)); v=sum(w[i]*uvl[li].uv.y for i,li in enumerate(f.loop_indices))
    return u, v
bpy.context.view_layer.update()
dg=bpy.context.evaluated_depsgraph_get()
def proj(p, d):
    # ray cast onto the body from direction d
    o=Vector(p)-Vector(d)*0.6
    inv=body.matrix_world.inverted()
    ok,loc,n,fi=body.ray_cast(inv@o, (inv.to_3x3()@Vector(d)).normalized())
    if not ok: return None
    return uv_at(body, body.matrix_world@loc, fi)
overlay=Image.new('RGBA',(S,S),(0,0,0,0)); od=ImageDraw.Draw(overlay)
def scar(p0,p1,d=(0,1,0),w=1.0,n=16):
    pts=[]
    for i in range(n+1):
        t=i/n; p=Vector(p0).lerp(Vector(p1),t)
        r=proj(p,d)
        pts.append(r)
    for i in range(n):
        A,B=pts[i],pts[i+1]
        if not A or not B: continue
        if abs(A[0]-B[0])+abs(A[1]-B[1])>0.04: continue
        taper=math.sin(math.pi*(i+0.5)/n)**0.6
        xa,ya=A[0]*S,(1-A[1])*S; xb,yb=B[0]*S,(1-B[1])*S
        od.line([(xa,ya),(xb,yb)],fill=(178,110,100,110),width=max(2,int(13*w*taper)))
        od.line([(xa,ya),(xb,yb)],fill=(92,38,40,235),width=max(1,int(5*w*taper)))
def xmark(cx,cz,s,d=(0,1,0),y=0):
    scar((cx-s,y,cz+s),(cx+s,y,cz-s),d); scar((cx-s*0.8,y,cz-s*0.9),(cx+s*0.9,y,cz+s*0.8),d)
F=(0,1,0)
# long diagonal slashes across chest and abs
scar((0.17,0,1.43),(-0.12,0,1.09),F,1.2,24)
scar((-0.19,0,1.38),(0.05,0,1.18),F,1.0)
scar((0.12,0,1.22),(-0.02,0,1.09),F,0.9)
scar((-0.05,0,1.48),(0.18,0,1.30),F,0.8)
scar((-0.17,0,1.12),(-0.05,0,1.24),F,0.7)
xmark(0.09,1.1,0.03); xmark(-0.11,1.12,0.028); xmark(-0.13,1.33,0.03); xmark(0.14,1.25,0.025)
# neck and face
scar((0.04,0,1.57),(-0.03,0,1.50),F,0.6,8)
scar((0.075,0,1.70),(0.05,0,1.65),F,0.45,6)
# arms (T-pose: arms along X, cast from front and from above)
for sgn in (-1,1):
    for i in range(5):
        x=sgn*random.uniform(0.25,0.62); z=1.456+random.uniform(-0.03,0.03)
        s=random.uniform(0.03,0.05)
        if random.random()<0.5: xmark(x,z,s)
        else: scar((x-s,0,z+0.05),(x+s,0,z-0.05),F,0.8,8)
    for i in range(4):
        x=sgn*random.uniform(0.2,0.6); y=random.uniform(-0.03,0.05)
        scar((x-0.04,y-0.04,1.6),(x+0.04,y+0.04,1.6),(0,0,-1),0.8,8)
# shoulders from above
scar((-0.25,-0.05,1.7),(-0.15,0.06,1.7),(0,0,-1),1.0,10)
scar((0.15,-0.06,1.7),(0.26,0.05,1.7),(0,0,-1),1.0,10)
# back
B=(0,-1,0)
for i in range(6):
    x=random.uniform(-0.15,0.15); z=random.uniform(1.0,1.45)
    scar((x-0.07,0,z+0.06),(x+0.07,0,z-0.06),B,1.0,12)
skin=Image.alpha_composite(skin.convert('RGBA'),overlay).convert('RGB')
skin.save(OUT+'T_Hero_Skin.png')

# eyes -> amber
eye=Image.open(TX+'T_Eye_Brown.png').convert('RGB')
import colorsys
ea=np.asarray(eye).astype(np.float32)/255
r,g,b=ea[...,0],ea[...,1],ea[...,2]
mx=ea.max(2); mn=ea.min(2); sat=(mx-mn)/(mx+1e-6)
iris=(sat>0.45)&(r>g)&(g>b)&(mx<0.8)
hsv=np.zeros_like(ea)
out=ea.copy()
gold=np.array([0.95,0.68,0.18])
lumi=ea.mean(2,keepdims=True)
out[iris]=np.clip(gold*(lumi[iris]*2.4)+0.05,0,1)
Image.fromarray((out*255).astype(np.uint8)).save(OUT+'T_Hero_Eye.png')

def img_tex(mat, path):
    for n in mat.node_tree.nodes:
        if n.type=='TEX_IMAGE' and ('BaseColor' in n.image.name or n.image.name.endswith('Dark') or n.image.name.endswith('Ligh') or 'Eye_Brown' in n.image.name):
            n.image=bpy.data.images.load(path); return True
    return False
skin_mat=body.data.materials[0]; skin_mat.name='M_HeroSkin'
print('skin tex replaced', img_tex(skin_mat, OUT+'T_Hero_Skin.png'))
eyes=bpy.data.objects['Eyes']; print('eye tex replaced', img_tex(eyes.data.materials[0], OUT+'T_Hero_Eye.png'))

# ---------- hair ----------
hair_mat=bpy.data.materials.new('M_HeroHair'); hair_mat.use_nodes=True
pb=hair_mat.node_tree.nodes['Principled BSDF']
pb.inputs['Base Color'].default_value=(0.06,0.018,0.013,1); pb.inputs['Roughness'].default_value=0.5
bpy.data.objects['Eyebrows'].data.materials[0]=hair_mat
headw=body.vertex_groups['Head'].index
mwb=body.matrix_world
bm=bmesh.new()
def headweight(v):
    for g in v.groups:
        if g.group==headw: return g.weight
    return 0
def in_hair(p):
    if abs(p.x)>0.075 and p.z<1.715 and p.y<0.03: return False   # ears / temples
    return p.z>1.752 or (p.z>1.70 and p.y>-0.02) or (p.z>1.60 and p.y>0.045)
# --- hair mass: offset shell of the scalp ---
sbm=bmesh.new(); sbm.from_mesh(body.data)
vmap={}
for f in sbm.faces:
    ps=[mwb@v.co for v in f.verts]
    if not all(in_hair(p) and headweight(body.data.vertices[v.index])>0.5 for p,v in zip(ps,f.verts)): continue
    vs=[]
    for v in f.verts:
        if v.index not in vmap:
            p=mwb@v.co; n=(mwb.to_3x3()@v.normal).normalized()
            off=0.016 if p.z>1.74 else 0.01
            vmap[v.index]=bm.verts.new(p+n*off)
        vs.append(vmap[v.index])
    try: bm.faces.new(vs)
    except: pass
sbm.free()
def strand(p,n,dirv,L,w0,t0,seg=6,curl=0.0,droop=0.25):
    side=n.cross(dirv)
    if side.length<1e-4: side=Vector((1,0,0))
    side.normalize(); up=dirv.cross(side).normalized()
    g=Vector((0,0,-1)); rings=[]
    for i in range(seg+1):
        t=i/seg
        c=p-n*0.01+dirv*L*t+g*(t*t)*L*droop+side*curl*t*t*L
        k=(1-t)**0.9
        w=w0*k+0.0012; th=t0*k+0.0008
        rings.append([bm.verts.new(c+side*w), bm.verts.new(c+up*th), bm.verts.new(c-side*w), bm.verts.new(c-up*th)])
    for i in range(seg):
        A,B=rings[i],rings[i+1]
        for j in range(4):
            try: bm.faces.new((A[j],A[(j+1)%4],B[(j+1)%4],B[j]))
            except: pass
    tip=bm.verts.new(p-n*0.01+dirv*L*1.06+g*L*droop+side*curl*L)
    for j in range(4):
        try: bm.faces.new((rings[-1][j],rings[-1][(j+1)%4],tip))
        except: pass
inv=body.matrix_world.inverted()
def surf(o,d):
    ok,loc,n,fi=body.ray_cast(inv@Vector(o),(inv.to_3x3()@Vector(d)).normalized())
    if not ok: return None
    return body.matrix_world@loc,(body.matrix_world.to_3x3()@n).normalized()
# scalp roots via rays from many directions around the skull
HC=Vector((0,0.02,1.70))
roots=[]
for i in range(900):
    u=random.random()*2*math.pi; v=random.uniform(-0.35,1.0)
    d=Vector((math.cos(u)*math.sqrt(1-v*v),math.sin(u)*math.sqrt(1-v*v),v))
    r=surf(HC+d*0.4,-d)
    if not r: continue
    p,n=r
    if not in_hair(p) or p.z<1.62: continue
    if all((p-q).length>0.022 for q,_ in roots): roots.append((p,n))
print('roots',len(roots))
for (p,n) in roots:
    jit=Vector((random.uniform(-1,1),random.uniform(-1,1),random.uniform(-1,1)))*0.25
    if p.y<-0.02 and p.z>1.76:                 # front top: spikes forward-up
        d=(n*0.7+Vector((0,-0.2,0.6))+jit).normalized(); L=random.uniform(0.07,0.1); w=random.uniform(0.024,0.034); dr=0.6
    elif n.z>0.6:                               # crown
        d=(n*0.8+Vector((0,0.7,0.25))+jit).normalized(); L=random.uniform(0.08,0.12); w=random.uniform(0.026,0.038); dr=0.3
    elif p.y>0.03:                              # back: down and out
        d=(n*0.55+Vector((0,0.35,-0.8))+jit).normalized(); L=random.uniform(0.08,0.12); w=random.uniform(0.024,0.034); dr=0.2
    else:                                       # sides over the ears
        d=(n*0.4+Vector((0,0.1,-1.0))+jit*0.7).normalized(); L=random.uniform(0.07,0.1); w=random.uniform(0.022,0.03); dr=0.1
    strand(p,n,d,L,w,w*0.38,6,random.uniform(-0.3,0.3),dr)
# fringe: wide clumps from the hairline, falling over the forehead and the right eye
for row,(zz,cnt,Lr) in enumerate([(1.80,15,(0.11,0.15)),(1.775,13,(0.09,0.12))]):
    for i in range(cnt):
        x=-0.08+i*(0.16/(cnt-1))+random.uniform(-0.004,0.004)
        r=surf((x,-0.4,zz+random.uniform(-0.006,0.006)),(0,1,0))
        if not r: continue
        p,n=r
        side=-0.45+0.25*(x/0.08)*(-1 if x<0 else 0.4)
        d=(Vector((side,-0.42 - row*0.1,-1.0))+Vector((random.uniform(-0.12,0.12),0,0))).normalized()
        L=random.uniform(*Lr)*(1.0 if x<0.03 else 0.8)
        strand(p+n*(0.022+row*0.008),n,d,L,random.uniform(0.022,0.03),0.009,7,random.uniform(-0.15,0.15),0.1)
hm=bpy.data.meshes.new('Hair'); bm.to_mesh(hm); bm.free()
hair=bpy.data.objects.new('Hair',hm); bpy.context.scene.collection.objects.link(hair)
hm.materials.append(hair_mat)
for p in hm.polygons: p.use_smooth=True
hair.parent=arm
vg=hair.vertex_groups.new(name='Head'); vg.add(list(range(len(hm.vertices))),1.0,'REPLACE')
md=hair.modifiers.new('Armature','ARMATURE'); md.object=arm
print('hair polys',len(hm.polygons))


# ---------- leather belt with iron buckle ----------
leather=bpy.data.materials.new('M_Belt'); leather.use_nodes=True
lp=leather.node_tree.nodes['Principled BSDF']; lp.inputs['Base Color'].default_value=(0.02,0.015,0.012,1); lp.inputs['Roughness'].default_value=0.45
iron=bpy.data.materials.new('M_Iron'); iron.use_nodes=True
ip=iron.node_tree.nodes['Principled BSDF']; ip.inputs['Base Color'].default_value=(0.35,0.35,0.36,1); ip.inputs['Metallic'].default_value=1.0; ip.inputs['Roughness'].default_value=0.35
bm=bmesh.new(); N=40; ZB=0.975; H=0.05
ringA=[];ringB=[]
cen=Vector((0,0.01,ZB))
for i in range(N):
    a=i/N*2*math.pi; d=Vector((math.sin(a),-math.cos(a),0))
    rr=None
    for obj in (pants,body):
        r=obj.ray_cast(obj.matrix_world.inverted()@(cen+d*0.5),obj.matrix_world.inverted().to_3x3()@(-d))
        if r[0]:
            dist=((obj.matrix_world@r[1])-cen).length
            rr=dist if rr is None else max(rr,dist)
    rr=(rr or 0.16)+0.01
    ringA.append(bm.verts.new(cen+d*rr+Vector((0,0,-H/2)))); ringB.append(bm.verts.new(cen+d*rr+Vector((0,0,H/2))))
for i in range(N):
    j=(i+1)%N; bm.faces.new((ringA[i],ringA[j],ringB[j],ringB[i]))
bmesh.ops.solidify(bm,geom=bm.faces[:],thickness=0.008)
bme=bpy.data.meshes.new('Belt'); bm.to_mesh(bme); bm.free()
beltO=bpy.data.objects.new('Belt',bme); bpy.context.scene.collection.objects.link(beltO); bme.materials.append(leather)
# buckle
front=ringB[0].co if False else None
bm=bmesh.new()
bmesh.ops.create_cube(bm,size=1.0)
for v in bm.verts: v.co=Vector((v.co.x*0.07,v.co.y*0.012,v.co.z*0.062))
bmesh.ops.translate(bm,verts=bm.verts,vec=Vector((0.0,-0.175,ZB)))
bkm=bpy.data.meshes.new('Buckle'); bm.to_mesh(bkm); bm.free()
bk=bpy.data.objects.new('Buckle',bkm); bpy.context.scene.collection.objects.link(bk); bkm.materials.append(iron)
for o in (beltO,bk):
    # snap buckle onto the belt front
    o.parent=arm; vg=o.vertex_groups.new(name='pelvis'); vg.add(list(range(len(o.data.vertices))),1.0,'REPLACE')
    o.modifiers.new('Armature','ARMATURE').object=arm
fy=min(v.co.y for v in beltO.data.vertices)
for v in bk.data.vertices: v.co.y+= (fy-0.004) - (-0.175)

bpy.ops.wm.save_as_mainfile(filepath=OUT+'hero_stage1.blend')
import sys
if '--norender' in sys.argv: raise SystemExit
setup_render(700,1000,20)
camera((1.1,-2.6,1.55),(0,0,1.25),50)
render(OUT+'prev_full.png')
bpy.data.objects['Cam'].location=(0.25,-0.75,1.68)
c=bpy.data.objects['Cam']; d=Vector((0,0,1.68))-c.location; c.rotation_euler=d.to_track_quat('-Z','Y').to_euler(); c.data.lens=50
render(OUT+'prev_head.png')
