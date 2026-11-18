import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import *
import json
from PIL import Image
J=json.load(open(OUT+'grip.json'))
if len(sys.argv)>1 and sys.argv[-1].startswith('{'): J.update(json.loads(sys.argv[-1]))
bpy.ops.wm.open_mainfile(filepath=OUT+'hero_stage1.blend')
arm=bpy.data.objects['Hero']; pb=arm.pose.bones
for b in pb: b.rotation_mode='XYZ'
for f,(a1,a2,a3) in J['fingers'].items():
    for k,a in zip((1,2,3),(a1,a2,a3)): pb[f'{f}_0{k}_r'].rotation_euler=(math.radians(a),0,0)
ax,ay,az,b2,b3=J['thumb']
pb['thumb_01_r'].rotation_euler=(math.radians(ax),math.radians(ay),math.radians(az))
pb['thumb_02_r'].rotation_euler=(math.radians(b2),0,0); pb['thumb_03_r'].rotation_euler=(math.radians(b3),0,0)
bpy.ops.mesh.primitive_cylinder_add(radius=J['R'],depth=0.24,location=(J['gx'],J['gy'],J['gz']),rotation=(math.radians(90),0,0),vertices=24)
cyl=bpy.context.active_object
m=bpy.data.materials.new('G'); m.use_nodes=True; m.node_tree.nodes['Principled BSDF'].inputs['Base Color'].default_value=(0.15,0.08,0.04,1); cyl.data.materials.append(m)
bpy.context.view_layer.update()
setup_render(420,420,12)
H=Vector((J['gx'],J['gy'],J['gz']))
views=[('front',(0,-0.32,0.03)),('below',(0.02,-0.08,-0.3)),('out',(-0.3,-0.05,0.02)),('back',(0.06,0.32,0.0))]
tiles=[]
for n,off in views:
    cam=camera(tuple(H+Vector(off)),tuple(H),50)
    cam.data.clip_start=0.01
    p=OUT+f'grip_{n}.png'; render(p); tiles.append(p)
    bpy.data.objects.remove(cam)
c=Image.new('RGB',(840,840))
for i,t in enumerate(tiles): c.paste(Image.open(t),((i%2)*420,(i//2)*420))
c.save(OUT+'grip_sheet.png')
