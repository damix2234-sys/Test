# numerically fit the fist around a cylindrical sword grip (radius R) running along the world Y axis in rest pose
import sys; sys.path.insert(0, '/tmp/claude-0/-home-user-Test/f99a113e-eb26-5643-ae8a-066cde7aded7/scratchpad/bl')
from common import *
import json, itertools
bpy.ops.wm.open_mainfile(filepath=OUT+'hero_stage1.blend')
arm=bpy.data.objects['Hero']; bones=arm.data.bones
R=float(sys.argv[-2]) if len(sys.argv)>2 and sys.argv[-1].endswith('.json') else 0.0155
FT=0.0085       # finger half thickness
def rest(n): return bones[n].matrix_local.copy()
def fk(chain, rots):
    """chain: bone names from hand child to tip; rots: list of Matrix (local basis rotations); returns joint points incl. tip of last"""
    M=rest('hand_r'); pts=[]
    parent='hand_r'
    for n,rq in zip(chain,rots):
        M=M@(rest(parent).inverted()@rest(n))@rq
        pts.append(M.to_translation()); parent=n
        last=M
    pts.append((last@Matrix.Translation((0,bones[chain[-1]].length,0))).to_translation())
    return pts
def rx(a): return Matrix.Rotation(math.radians(a),4,'X')
def dist_axis(p,g): return math.hypot(p.x-g[0], p.z-g[1])
def seg_cost(pts,g,target):
    c=0
    for i in range(len(pts)-1):
        for t in (0.0,0.33,0.66):
            p=pts[i].lerp(pts[i+1],t); d=dist_axis(p,g)
            if d<target-0.002: c+= (target-d)**2*400
            c+=(d-target)**2
    return c
FING=['index','middle','ring','pinky']
def solve_finger(f,g):
    chain=[f'{f}_01_r',f'{f}_02_r',f'{f}_03_r',f'{f}_04_leaf_r']
    best=None
    for a1 in range(30,101,5):
        for a2 in range(40,111,5):
            for a3 in (0.5,0.7,0.9):
                pts=fk(chain,[rx(a1),rx(a2),rx(a2*a3),rx(0)])
                c=seg_cost(pts[1:],g,R+FT)
                if best is None or c<best[0]: best=(c,(a1,a2,a2*a3))
    return best
best=None
for gx in [x/1000 for x in range(-815,-780,5)]:
    for gz in [z/1000 for z in range(1390,1425,5)]:
        tot=0; sol={}
        for f in FING:
            c,a=solve_finger(f,(gx,gz)); tot+=c; sol[f]=a
        # palm contact: grip surface should touch the palm underside (z ~1.425 at the distal palm)
        tot+=((1.424-(gz+R))**2)*30
        if best is None or tot<best[0]: best=(tot,gx,gz,sol)
print('BEST', best)
tot,gx,gz,sol=best
# thumb: wrap around the +X side and under the grip, tip resting on the index finger
tchain=['thumb_01_r','thumb_02_r','thumb_03_r','thumb_04_leaf_r']
gy_center=0.062
tgt=Vector((gx-0.004, 0.028, gz-R-0.012))
tb=None
for ax in range(-60,61,10):
    for az in range(-60,61,10):
        for ay in (-30,0,30):
            for b2 in (0,15,30,45):
                for b3 in (0,15,30,45):
                    r1=Euler((math.radians(ax),math.radians(ay),math.radians(az))).to_matrix().to_4x4()
                    pts=fk(tchain,[r1,rx(b2),rx(b3),rx(0)])
                    c=(pts[-1]-tgt).length**2*10
                    for p in pts[1:]:
                        d=dist_axis(p,(gx,gz))
                        if d<R+0.008: c+=(R+0.008-d)**2*400
                    if tb is None or c<tb[0]: tb=(c,(ax,ay,az,b2,b3),pts[-1])
print('THUMB', tb)
json.dump({'gx':gx,'gz':gz,'gy':gy_center,'R':R,'fingers':sol,'thumb':tb[1]}, open(OUT+(sys.argv[-1] if sys.argv[-1].endswith('.json') else 'grip.json'),'w'), indent=1)
