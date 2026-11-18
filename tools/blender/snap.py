# quick Workbench contact sheet: python3 snap.py -- blend "Clip:frame,Clip:frame" "yaw,yaw" out.png
import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import *
from PIL import Image, ImageDraw
a = sys.argv[sys.argv.index('--') + 1:]
blend, items, yaws, outp = a[0], a[1].split(','), [float(y) for y in a[2].split(',')], a[3]
WW, HH, DIST, TY = (int(a[4]), int(a[5]), float(a[6]), float(a[7])) if len(a) > 7 else (300, 380, 2.6, 1.22)
bpy.ops.wm.open_mainfile(filepath=blend)
arm = [o for o in bpy.data.objects if o.type == 'ARMATURE'][0]
for b in arm.pose.bones:
    for c in b.constraints: c.mute = True
for o in bpy.data.objects:
    if o.name in ('Flask',): o.hide_render = True
sc = bpy.context.scene
setup_render(WW, HH, 6)
cam = bpy.data.objects.new('Cam', bpy.data.cameras.new('Cam')); sc.collection.objects.link(cam); sc.camera = cam
cam.data.lens = 50
ad = arm.animation_data or arm.animation_data_create()
tiles = []
for it in items:
    cn, fr = it.split(':'); fr = int(fr)
    act = bpy.data.actions[cn]; ad.action = act
    try: ad.action_slot = act.slots[0]
    except Exception: pass
    sc.frame_set(fr); bpy.context.view_layer.update(); bpy.context.evaluated_depsgraph_get().update()
    sc.frame_set(fr); bpy.context.view_layer.update()
    sp = arm.pose.bones['spine_03'].matrix.translation
    for yw in yaws:
        y = math.radians(yw); d = DIST
        tgt = Vector((sp.x, sp.y, TY))
        cam.location = tgt + Vector((-math.sin(y) * d, -math.cos(y) * d, 0.1 * d))
        cam.rotation_euler = (tgt - cam.location).to_track_quat('-Z', 'Y').to_euler()
        p = OUT + f'_snap_{len(tiles)}.png'; sc.render.filepath = p
        bpy.ops.render.render(write_still=True)
        tiles.append((p, f'{cn} f{fr} y{int(yw)}'))
cols = len(yaws) * (2 if len(yaws) <= 3 else 1)
rows = (len(tiles) + cols - 1) // cols
S = Image.new('RGB', (WW * cols, HH * rows), (40, 40, 40)); dr = ImageDraw.Draw(S)
for k, (p, lab) in enumerate(tiles):
    x, y = (k % cols) * WW, (k // cols) * HH
    S.paste(Image.open(p).convert('RGB'), (x, y)); dr.text((x + 4, y + 4), lab, fill=(255, 255, 0))
S.save(outp)
