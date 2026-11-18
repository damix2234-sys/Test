import sys; sys.path.insert(0, '/tmp/claude-0/-home-user-Test/f99a113e-eb26-5643-ae8a-066cde7aded7/scratchpad/bl')
from common import *
from PIL import Image
bpy.ops.wm.open_mainfile(filepath=OUT+'hero_anim.blend')
arm=bpy.data.objects['Hero']
spec=[a.split(':') for a in sys.argv[sys.argv.index('--')+1:]]
setup_render(360,480,8)
bpy.ops.mesh.primitive_plane_add(size=8)
import os
CP=[float(v) for v in os.environ.get('CAM','2.2,-2.6,1.5').split(',')]
cam=camera(CP,(0,-0.2,0.9),35)
tiles=[]
for name,frames in spec:
    act=bpy.data.actions[name]
    arm.animation_data_create(); arm.animation_data.action=act
    try: arm.animation_data.action_slot=act.slots[0]
    except Exception: pass
    for f in frames.split(','):
        bpy.context.scene.frame_set(int(f))
        p=OUT+f'tile_{name}_{f}.png'; render(p); tiles.append(p)
ims=[Image.open(t) for t in tiles]
cols=min(6,len(ims)); rows=(len(ims)+cols-1)//cols
sheet=Image.new('RGB',(cols*360,rows*480))
for i,im in enumerate(ims): sheet.paste(im,((i%cols)*360,(i//cols)*480))
sheet.save(OUT+os.environ.get('SHEET','sheet.png'))
