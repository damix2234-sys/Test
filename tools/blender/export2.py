import sys; sys.path.insert(0, '/tmp/claude-0/-home-user-Test/f99a113e-eb26-5643-ae8a-066cde7aded7/scratchpad/bl')
from common import *
import os
bpy.ops.wm.open_mainfile(filepath=OUT + 'hero_hema.blend')
arm = bpy.data.objects['Hero']
arm.animation_data_create()
for t in list(arm.animation_data.nla_tracks): arm.animation_data.nla_tracks.remove(t)
acts = sorted(bpy.data.actions, key=lambda a: a.name)
for a in acts:
    tr = arm.animation_data.nla_tracks.new(); tr.name = a.name
    st = tr.strips.new(a.name, 0, a)
    try: st.action_slot = a.slots[0]
    except Exception: pass
    tr.mute = True
arm.animation_data.action = None
print('ACTIONS', len(acts), [a.name for a in acts])
# textures: opaque -> JPEG (smaller), alpha (hair cards) stays PNG; sizes tuned per role
from PIL import Image
os.makedirs(OUT + 'tex', exist_ok=True)
for im in list(bpy.data.images):
    if im.source != 'FILE': continue
    if im.size[0] == 0:
        print('skip image without data', im.name); continue
    nm = im.name
    keep_png = 'Hero_Hair' in nm
    if 'Hero_Skin' in nm: tgt = 2048
    elif any(k in nm for k in ('Ranger_Normal', 'Ranger_ORM', 'Peasant_Normal', 'Peasant_ORM')): tgt = 512
    else: tgt = 1024
    src = bpy.path.abspath(im.filepath)
    tmp = OUT + 'tex/_src_' + bpy.path.clean_name(nm) + '.png'
    if not os.path.exists(src) or im.packed_file:
        im.filepath_raw = tmp; im.file_format = 'PNG'; im.save(); src = tmp
    pim = Image.open(src)
    if pim.size[0] > tgt: pim = pim.resize((tgt, tgt), Image.LANCZOS)
    if keep_png:
        dst = OUT + 'tex/' + bpy.path.clean_name(nm) + '.png'; pim.save(dst)
    else:
        dst = OUT + 'tex/' + bpy.path.clean_name(nm) + '.jpg'
        pim = pim.convert('L') if pim.mode in ('L', 'I', 'I;16') else pim.convert('RGB')
        pim.save(dst, quality=88)
    if im.packed_file: im.unpack(method='REMOVE')
    im.filepath = dst; im.source = 'FILE'; im.reload()
for o in bpy.data.objects:
    if o.type == 'MESH':
        while len(o.data.uv_layers) > 1: o.data.uv_layers.remove(o.data.uv_layers[1])
print('tris', {o.name: len(o.data.polygons) for o in bpy.data.objects if o.type == 'MESH'})
bpy.ops.object.select_all(action='DESELECT')
bpy.ops.export_scene.gltf(filepath=OUT + 'hero.glb', export_format='GLB', export_animation_mode='NLA_TRACKS',
    export_image_format='JPEG', export_jpeg_quality=88, export_yup=True, export_animations=True,
    export_force_sampling=True, export_frame_step=1, export_def_bones=True, export_optimize_animation_size=True)
print('GLB MB', round(os.path.getsize(OUT + 'hero.glb') / 1e6, 2))
