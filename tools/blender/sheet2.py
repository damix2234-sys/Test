import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import *
from PIL import Image, ImageDraw
import os
blend = os.environ.get('BLEND', OUT + 'hero_hema.blend')
bpy.ops.wm.open_mainfile(filepath=blend)
arm = bpy.data.objects['Hero']
args = sys.argv[sys.argv.index('--') + 1:]
cams = os.environ.get('CAMS', 'side,front34').split(',')
CP = {'side': ((3.4, -0.35, 1.05), (0, -0.35, 0.95)), 'front34': ((2.2, -3.0, 1.55), (0, -0.3, 1.0)),
      'front': ((0.25, -3.6, 1.3), (0, -0.3, 1.0)), 'back34': ((-2.2, 2.4, 1.6), (0, -0.2, 1.0)),
      'top': ((0.01, -0.3, 4.5), (0, -0.3, 0)), 'closeL': ((0.9, -1.35, 1.65), (0.02, -0.25, 1.35)), 'closeR': ((-0.9, -1.35, 1.6), (-0.1, -0.25, 1.25)), 'closeF': ((0.1, -1.5, 1.5), (0.0, -0.2, 1.3)), 'zornA': ((0.6, -1.6, 1.25), (0.0, -0.75, 1.0)), 'zornB': ((-0.9, -1.2, 1.5), (0.0, -0.75, 1.0)), 'rside': ((-3.4, -0.35, 1.05), (0, -0.35, 0.95))}
W, H = int(os.environ.get('TW', 300)), int(os.environ.get('TH', 400))
setup_render(W, H, int(os.environ.get('SAMPLES', 6)))
bpy.ops.mesh.primitive_plane_add(size=12)
pl = bpy.context.active_object
m = bpy.data.materials.new('Gr'); m.use_nodes = True; m.node_tree.nodes['Principled BSDF'].inputs['Base Color'].default_value = (0.35, 0.36, 0.33, 1); pl.data.materials.append(m)
# grid lines on the floor to judge foot sliding
for i in range(-6, 7):
    for axis in (0, 1):
        bpy.ops.mesh.primitive_cube_add(size=1)
        c = bpy.context.active_object; c.scale = (12, 0.004, 0.002) if axis == 0 else (0.004, 12, 0.002)
        c.location = (0, i * 0.25, 0.001) if axis == 0 else (i * 0.25, 0, 0.001)
        mm = bpy.data.materials.new('L'); mm.use_nodes = True; mm.node_tree.nodes['Principled BSDF'].inputs['Base Color'].default_value = (0.2, 0.2, 0.2, 1); c.data.materials.append(mm)
flask = bpy.data.objects.get('Flask')
rows = []
for spec in args:
    name, frames = spec.split(':'); frames = [int(x) for x in frames.split(',')]
    act = bpy.data.actions[name]
    arm.animation_data_create(); arm.animation_data.action = act
    try: arm.animation_data.action_slot = act.slots[0]
    except Exception: pass
    if flask: flask.hide_render = (name != 'Hema_Drink')
    for cam in cams:
        loc, tgt = CP[cam]
        c = camera(loc, tgt, 38 if not cam.startswith('close') else 45)
        tiles = []
        for f in frames:
            bpy.context.scene.frame_set(f)
            p = OUT + f'_t.png'; render(p)
            im = Image.open(p).convert('RGB'); ImageDraw.Draw(im).text((6, 6), f'{name} f{f} {cam}', fill=(255, 255, 0))
            tiles.append(im)
        bpy.data.objects.remove(c)
        row = Image.new('RGB', (W * len(tiles), H))
        for i, t in enumerate(tiles): row.paste(t, (i * W, 0))
        rows.append(row)
sheet = Image.new('RGB', (max(r.width for r in rows), H * len(rows)))
for i, r in enumerate(rows): sheet.paste(r, (0, i * H))
sheet.save(OUT + os.environ.get('SHEET', 'sheet2.png'))
print('sheet', sheet.size)
