import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
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

# ---------- reshape toward the reference: younger, narrower face; leaner upper body (mesh only, rig untouched) ----------
def sstep(e0, e1, x):
    t = max(0.0, min(1.0, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t)
gidx = {g.name: g.index for g in body.vertex_groups}
def wget(v, name):
    gi = gidx.get(name)
    for g in v.groups:
        if g.group == gi: return g.weight
    return 0.0
mw = body.matrix_world; mwi = mw.inverted()
A_ = arm.matrix_world
bones_ = arm.data.bones
def bone_seg(n):
    b = bones_[n]; return A_ @ b.head_local, A_ @ b.tail_local
SLIM = {'spine_03': 0.075, 'spine_02': 0.05, 'clavicle_l': 0.10, 'clavicle_r': 0.10, 'upperarm_l': 0.10, 'upperarm_r': 0.10,
        'lowerarm_l': 0.07, 'lowerarm_r': 0.07, 'neck_01': 0.06}
segs = {n: bone_seg(n) for n in SLIM}
for v in body.data.vertices:
    p = mw @ v.co
    # jaw & chin narrowing (front lower face)
    wh = wget(v, 'Head')
    if wh > 0.3:
        tz = sstep(1.678, 1.612, p.z); ty = sstep(0.035, -0.02, p.y)
        k = 0.085 * tz * ty * min(1.0, wh / 0.8)
        p.x *= (1 - k)
        # chin a touch narrower and slightly more pointed
        if p.z < 1.625 and p.y < -0.04: p.y -= 0.0025 * sstep(1.625, 1.59, p.z) * sstep(0.04, 0.0, abs(p.x))
    # leaner chest/shoulders/arms: contract toward the bone axes
    move = Vector((0, 0, 0)); wsum = 0.0
    for n, amt in SLIM.items():
        w = wget(v, n)
        if w <= 0.01: continue
        h, t = segs[n]; d = t - h; u = max(0.0, min(1.0, (p - h).dot(d) / d.length_squared)); q = h + d * u
        move += (q - p) * amt * w; wsum += w
    if wsum > 0 and p.z > 1.12: p += move
    # flatter trapezius (the heavy slope between neck and shoulders)
    ax = abs(p.x)
    if 0.04 < ax < 0.21 and 1.47 < p.z < 1.62 and p.y > -0.06:
        p.z -= 0.02 * sstep(0.04, 0.09, ax) * sstep(0.21, 0.15, ax) * sstep(1.47, 1.52, p.z) * sstep(1.62, 1.57, p.z)
    v.co = mwi @ p
body.data.update()

# remove hidden body parts under the trousers/boots
bm=bmesh.new(); bm.from_mesh(body.data)
kill=[v for v in bm.verts if v.co.z < 0.985]
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
SS2=2
overlay=Image.new('RGBA',(S*SS2,S*SS2),(0,0,0,0)); od=ImageDraw.Draw(overlay)
ridge=Image.new('L',(S*SS2,S*SS2),0); rd=ImageDraw.Draw(ridge)
groove=Image.new('L',(S*SS2,S*SS2),0); gd=ImageDraw.Draw(groove)
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
        K2=S*SS2
        xa,ya=A[0]*K2,(1-A[1])*K2; xb,yb=B[0]*K2,(1-B[1])*K2
        od.line([(xa,ya),(xb,yb)],fill=(176,112,100,95),width=max(2,int(12*w*taper*SS2)))
        od.line([(xa,ya),(xb,yb)],fill=(120,52,50,170),width=max(1,int(6*w*taper*SS2)))
        od.line([(xa,ya),(xb,yb)],fill=(86,32,34,235),width=max(1,int(3*w*taper*SS2)))
        rd.line([(xa,ya),(xb,yb)],fill=255,width=max(2,int(10*w*taper*SS2)))
        gd.line([(xa,ya),(xb,yb)],fill=255,width=max(1,int(2.5*w*taper*SS2)))
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
overlay=overlay.resize((S,S),Image.LANCZOS)
skin=Image.alpha_composite(skin.convert('RGBA'),overlay).convert('RGB')
skin.save(OUT+'T_Hero_Skin.png')
# scar relief -> normal map (raised ridges with a thin central groove), whiteout-blended into the base normal map
rh=np.asarray(ridge.resize((S,S),Image.LANCZOS).filter(ImageFilter.GaussianBlur(3.0))).astype(np.float32)/255
gh=np.asarray(groove.resize((S,S),Image.LANCZOS).filter(ImageFilter.GaussianBlur(1.2))).astype(np.float32)/255
hgt=rh*1.0-gh*0.55
dy,dx=np.gradient(hgt)
k=7.0
nd=np.dstack([-dx*k, dy*k, np.ones_like(hgt)])
nb=np.asarray(Image.open(TX+'T_Superhero_Male_Normal.png').convert('RGB')).astype(np.float32)/127.5-1
nn=np.dstack([nb[...,0]+nd[...,0], nb[...,1]+nd[...,1], nb[...,2]*nd[...,2]])
nn/=np.linalg.norm(nn,axis=2,keepdims=True)
Image.fromarray(np.clip((nn+1)*127.5,0,255).astype(np.uint8)).save(OUT+'T_Hero_Normal.png')

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
for n in skin_mat.node_tree.nodes:
    if n.type=='TEX_IMAGE' and 'Normal' in n.image.name:
        n.image=bpy.data.images.load(OUT+'T_Hero_Normal.png'); n.image.colorspace_settings.name='Non-Color'; print('normal map replaced')
eyes=bpy.data.objects['Eyes']; print('eye tex replaced', img_tex(eyes.data.materials[0], OUT+'T_Hero_Eye.png'))

# ---------- hair ----------
HAIR_RGB=np.array([62,24,17],np.float32)
def make_strand_texture(path, W=1024, H=1024, seed=5):
    rnd=random.Random(seed); SS=2; w,h=W*SS,H*SS
    col=Image.new('RGB',(w,h),tuple(int(c*0.7) for c in HAIR_RGB)); cd=ImageDraw.Draw(col)
    alpha=Image.new('L',(w,h),0); ad=ImageDraw.Draw(alpha)
    for i in range(520):
        x0=rnd.uniform(0.02,0.98)*w; L=h*rnd.uniform(0.6,1.0)
        wid=rnd.uniform(1.6,4.2)*SS; shade=rnd.uniform(0.55,1.45)
        c=tuple(int(v) for v in np.clip(HAIR_RGB*shade,0,255))
        amp=rnd.uniform(3,14)*SS; ph=rnd.uniform(0,6.28); fr=rnd.uniform(0.8,2.4); drift=rnd.uniform(-30,30)*SS
        pts=[(x0+amp*math.sin(ph+t*fr*math.pi)+drift*t*t, t*L) for t in [k/24 for k in range(25)]]
        for k in range(24):
            t=k/24
            a=int(255*(1.0 if t<0.55 else max(0.0,1-(t-0.55)/0.45)**1.3))
            ww=max(1,int(wid*(1-0.55*t)))
            cd.line([pts[k],pts[k+1]],fill=c,width=ww)
            ad.line([pts[k],pts[k+1]],fill=a,width=ww)
    col=col.resize((W,H),Image.LANCZOS); alpha=alpha.resize((W,H),Image.LANCZOS)
    arr=np.asarray(col).astype(np.float32)
    yy=np.linspace(0,1,H)[:,None,None]
    arr*= (1+0.30*np.exp(-((yy-0.30)/0.07)**2))       # soft specular band
    arr*= (0.78+0.22*np.clip(yy*3,0,1))                 # darker roots
    im=Image.fromarray(np.clip(arr,0,255).astype(np.uint8)); im.putalpha(alpha)
    im.save(path)
make_strand_texture(OUT+'T_Hero_Hair.png')
def hair_material(name, alpha_clip):
    m=bpy.data.materials.new(name); m.use_nodes=True; nt=m.node_tree
    pbsdf=nt.nodes['Principled BSDF']
    tx=nt.nodes.new('ShaderNodeTexImage'); tx.image=bpy.data.images.load(OUT+'T_Hero_Hair.png', check_existing=True)
    nt.links.new(tx.outputs['Color'], pbsdf.inputs['Base Color'])
    pbsdf.inputs['Roughness'].default_value=0.55
    for nm in ('Specular IOR Level','Specular'):
        if nm in pbsdf.inputs: pbsdf.inputs[nm].default_value=0.18
    if alpha_clip:
        rnd=nt.nodes.new('ShaderNodeMath'); rnd.operation='ROUND'
        nt.links.new(tx.outputs['Alpha'], rnd.inputs[0]); nt.links.new(rnd.outputs[0], pbsdf.inputs['Alpha'])
        try: m.surface_render_method='DITHERED'
        except Exception: pass
    return m
hair_mat=hair_material('M_HeroHair', True)
hair_base=hair_material('M_HeroHairBase', False)
# eyebrows: keep the sculpted brow shading, tint it to the hair colour
brow=bpy.data.objects['Eyebrows']; bm_=brow.data.materials[0]
for n in bm_.node_tree.nodes:
    if n.type=='TEX_IMAGE' and 'BaseColor' in n.image.name:
        src=np.asarray(Image.open(TX+'T_Hair_1_BaseColor.png').convert('RGB')).astype(np.float32)
        lum=src.mean(2,keepdims=True)/150.0
        Image.fromarray(np.clip(HAIR_RGB*0.75*lum,0,255).astype(np.uint8)).save(OUT+'T_Hero_Brow.png')
        n.image=bpy.data.images.load(OUT+'T_Hero_Brow.png'); bm_.name='M_HeroBrow'; print('brow tinted')
headw=body.vertex_groups['Head'].index
mwb=body.matrix_world
def headweight(v):
    for g in v.groups:
        if g.group==headw: return g.weight
    return 0
def in_hair(p):
    if abs(p.x)>0.075 and p.z<1.715 and p.y<0.03: return False   # ears / temples
    return p.z>1.752 or (p.z>1.70 and p.y>-0.02) or (p.z>1.60 and p.y>0.045)
# --- shell (opaque hair mass on the scalp) ---
bm=bmesh.new(); uvl=bm.loops.layers.uv.new('UVMap')
sbm=bmesh.new(); sbm.from_mesh(body.data)
vmap={}
for f in sbm.faces:
    ps=[mwb@v.co for v in f.verts]
    if not all(in_hair(p) and headweight(body.data.vertices[v.index])>0.5 for p,v in zip(ps,f.verts)): continue
    vs=[]
    for v in f.verts:
        if v.index not in vmap:
            p=mwb@v.co; n=(mwb.to_3x3()@v.normal).normalized()
            vmap[v.index]=bm.verts.new(p+n*(0.009 if p.z>1.74 else 0.006))
        vs.append(vmap[v.index])
    try:
        nf=bm.faces.new(vs); nf.material_index=1
        for lp in nf.loops:
            q=lp.vert.co
            lp[uvl].uv=((math.atan2(q.x,q.y-0.02)/(2*math.pi)+0.5)*3.0, 1.0-(1.87-q.z)/0.32)
    except Exception: pass
sbm.free()
inv=body.matrix_world.inverted()
def surf(o,d):
    ok,loc,n,fi=body.ray_cast(inv@Vector(o),(inv.to_3x3()@Vector(d)).normalized())
    if not ok: return None
    return body.matrix_world@loc,(body.matrix_world.to_3x3()@n).normalized()
def card(p,n,dirv,L,w,seg=7,curl=0.0,droop=0.25,lift=0.006,uoff=None):
    side=n.cross(dirv)
    if side.length<1e-4: side=Vector((1,0,0))
    side.normalize(); g=Vector((0,0,-1))
    uo=random.uniform(0,0.6) if uoff is None else uoff; uw=0.4
    rows=[]
    for i in range(seg+1):
        t=i/seg
        c=p+n*lift+dirv*L*t+g*(t*t)*L*droop+side*curl*t*t*L
        ww=w*(1-0.5*t)
        rows.append((bm.verts.new(c-side*ww), bm.verts.new(c+n*ww*0.22), bm.verts.new(c+side*ww)))
    for i in range(seg):
        A,B=rows[i],rows[i+1]
        for j in range(2):
            f=bm.faces.new((A[j],A[j+1],B[j+1],B[j])); f.material_index=0; f.smooth=True
            u0,u1=uo+uw*j*0.5,uo+uw*(j+1)*0.5; v0,v1=1-i/seg,1-(i+1)/seg
            for lp,(u,v) in zip(f.loops,((u0,v0),(u1,v0),(u1,v1),(u0,v1))): lp[uvl].uv=(u,v)
HC=Vector((0,0.02,1.70))
def roots(spacing, tries=1600):
    out=[]
    for i in range(tries):
        u=random.random()*2*math.pi; v=random.uniform(-0.35,1.0)
        d=Vector((math.cos(u)*math.sqrt(1-v*v),math.sin(u)*math.sqrt(1-v*v),v))
        r=surf(HC+d*0.4,-d)
        if not r: continue
        p,n=r
        if not in_hair(p) or p.z<1.62: continue
        if all((p-q).length>spacing for q,_ in out): out.append((p,n))
    return out
def flow(p,n,jit):
    if p.y<-0.02 and p.z>1.76:  return (n*0.55+Vector((0,-0.15,0.55))+jit).normalized(), 0.55
    if n.z>0.6:                 return (n*0.55+Vector((0,0.8,0.15))+jit).normalized(), 0.32
    if p.y>0.03:                return (n*0.35+Vector((0,0.35,-0.85))+jit).normalized(), 0.2
    return (n*0.25+Vector((0,0.12,-1.0))+jit*0.7).normalized(), 0.12
random.seed(11)
# inner layer: lies close to the scalp, gives volume
for (p,n) in roots(0.022):
    jit=Vector((random.uniform(-1,1),random.uniform(-1,1),random.uniform(-1,1)))*0.15
    d,dr=flow(p,n,jit); d=(d*0.7+(d-n*d.dot(n)).normalized()*0.3).normalized()
    card(p,n,d,random.uniform(0.06,0.09),random.uniform(0.032,0.042),6,random.uniform(-0.2,0.2),dr+0.15,0.004)
# outer layer: messy, slightly spiky clumps
for (p,n) in roots(0.026):
    jit=Vector((random.uniform(-1,1),random.uniform(-1,1),random.uniform(-1,1)))*0.25
    d,dr=flow(p,n,jit)
    card(p,n,d,random.uniform(0.08,0.125),random.uniform(0.026,0.04),7,random.uniform(-0.35,0.35),dr,0.010)
# fringe: two rows of cards falling over the forehead, swept over the right eye
for row,(zz,cnt,Lr) in enumerate([(1.80,14,(0.11,0.15)),(1.778,12,(0.09,0.12))]):
    for i in range(cnt):
        x=-0.08+i*(0.16/(cnt-1))+random.uniform(-0.004,0.004)
        r=surf((x,-0.4,zz+random.uniform(-0.006,0.006)),(0,1,0))
        if not r: continue
        p,n=r
        side=-0.45+0.25*(x/0.08)*(-1 if x<0 else 0.4)
        d=(Vector((side,-0.42-row*0.1,-1.0))+Vector((random.uniform(-0.12,0.12),0,0))).normalized()
        L=random.uniform(*Lr)*(1.0 if x<0.03 else 0.8)
        card(p+n*(0.016+row*0.006),n,d,L,random.uniform(0.022,0.03),7,random.uniform(-0.15,0.15),0.1,0.004)
hm=bpy.data.meshes.new('Hair'); bm.to_mesh(hm); bm.free()
hair=bpy.data.objects.new('Hair',hm); bpy.context.scene.collection.objects.link(hair)
hm.materials.append(hair_mat); hm.materials.append(hair_base)
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
c.location=(-0.45,0.6,1.85); d=Vector((0,0,1.7))-c.location; c.rotation_euler=d.to_track_quat('-Z','Y').to_euler()
render(OUT+'prev_head_back.png')
c.location=(0.7,-0.1,1.72); d=Vector((0,0,1.7))-c.location; c.rotation_euler=d.to_track_quat('-Z','Y').to_euler()
render(OUT+'prev_head_side.png')
