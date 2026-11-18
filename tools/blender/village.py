# Assemble medieval buildings from the CC0 Quaternius Medieval Village MegaKit modules and export them as prefabs.
# Blender: Z up, building front faces -Y (becomes +Z in glTF / three.js).
import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import *
import os
from PIL import Image
V = SC + 'xv/Medieval Village MegaKit[Standard]/glTF/'
bpy.ops.wm.read_factory_settings(use_empty=True)
sc = bpy.context.scene
TPL = {}

def template(name):
    if name in TPL: return TPL[name]
    objs = imp(V + name + '.gltf')
    meshes = [o for o in objs if o.type == 'MESH']
    for o in meshes:
        mw = o.matrix_world.copy(); o.parent = None; o.matrix_world = mw
    bpy.ops.object.select_all(action='DESELECT')
    for o in meshes: o.select_set(True)
    bpy.context.view_layer.objects.active = meshes[0]
    if len(meshes) > 1: bpy.ops.object.join()
    t = bpy.context.view_layer.objects.active
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    for o in objs:
        if o.name in bpy.data.objects and o != t and o.type != 'MESH': bpy.data.objects.remove(o)
    t.name = 'TPL_' + name; t.hide_render = True; t.hide_set(True)
    TPL[name] = t
    return t

def place(parts, name, x=0, y=0, z=0, rot=0, sx=1.0):
    """instance a kit module"""
    t = template(name)
    o = t.copy(); sc.collection.objects.link(o)
    o.hide_render = False; o.hide_set(False)
    o.matrix_world = Matrix.Translation((x, y, z)) @ Matrix.Rotation(math.radians(rot), 4, 'Z') @ Matrix.Diagonal((sx, 1, 1, 1))
    parts.append(o)
    return o

FLOOR_H = 3.0
def house(pname, W, D, floors=1, ground='plaster', upper='woodgrid', door_side='front', balcony=False, vines=0, chimney=True, shutters=True):
    parts = []
    nx, ny = W // 2, D // 2
    def wall_kind(floor, side, i, n):
        style = ground if floor == 0 else upper
        base = {'plaster': 'Wall_Plaster', 'brick': 'Wall_UnevenBrick', 'woodgrid': 'Wall_Plaster'}[style]
        if floor == 0 and side == 'front' and i == (n // 2 if n > 1 else 0):
            return base + '_Door_Round', 'door'
        window = (side in ('front', 'back') and (i + floor) % 2 == 0) or (side in ('left', 'right') and (i + floor) % 2 == 1)
        if window: return base + '_Window_Wide_Round', 'window'
        if style == 'woodgrid': return 'Wall_Plaster_WoodGrid', None
        return base + '_Straight', None
    for f in range(floors):
        z = f * FLOOR_H
        sides = [('front', nx, lambda i: (-W / 2 + 1 + 2 * i, -D / 2), 0),
                 ('back', nx, lambda i: (W / 2 - 1 - 2 * i, D / 2), 180),
                 ('left', ny, lambda i: (-W / 2, D / 2 - 1 - 2 * i), -90),
                 ('right', ny, lambda i: (W / 2, -D / 2 + 1 + 2 * i), 90)]
        for side, n, pos, rot in sides:
            for i in range(n):
                x, y = pos(i)
                kind, extra = wall_kind(f, side, i, n)
                place(parts, kind, x, y, z, rot)
                if extra == 'window':
                    place(parts, 'Window_Wide_Round1', x, y, z, rot)
                    if shutters: place(parts, 'WindowShutters_Wide_Round_Open', x, y, z, rot)
                if extra == 'door':
                    c, s_ = math.cos(math.radians(rot)), math.sin(math.radians(rot))
                    ox = -0.51
                    place(parts, 'Door_1_Round', x + ox * c, y + ox * s_, z, rot)
        for cx in (-W / 2, W / 2):
            for cy in (-D / 2, D / 2):
                place(parts, 'Corner_Exterior_Wood', cx, cy, z, 0)
        if f > 0:
            for i in range(nx):
                for j in range(ny):
                    place(parts, 'Floor_WoodDark', -W / 2 + 1 + 2 * i, -D / 2 + 1 + 2 * j, z, 0)
        if balcony and f == 1:
            for i in range(nx):
                place(parts, 'Balcony_Simple_Straight', -W / 2 + 1 + 2 * i, -D / 2, z, 0)
    top = floors * FLOOR_H
    place(parts, f'Roof_RoundTiles_{W}x{D}', 0, 0, top, 0)
    place(parts, f'Roof_Front_Brick{W}', 0, -D / 2, top, 0)
    place(parts, f'Roof_Front_Brick{W}', 0, D / 2, top, 180)
    if chimney: place(parts, 'Prop_Chimney', W * 0.12, D * 0.22, top + 0.35, 0)
    for k in range(vines):
        side = k % 2
        place(parts, ['Prop_Vine1', 'Prop_Vine2', 'Prop_Vine4'][k % 3], (-W / 2 + 0.9 + 1.7 * k) % W - W / 2 + 0.4, -D / 2 - 0.1, 2.9, 0)
    bpy.ops.object.select_all(action='DESELECT')
    for o in parts: o.select_set(True)
    bpy.context.view_layer.objects.active = parts[0]
    bpy.ops.object.make_single_user(object=True, obdata=True)
    bpy.ops.object.join()
    o = bpy.context.view_layer.objects.active; o.name = pname; o.data.name = pname
    print('prefab', pname, 'tris', len(o.data.polygons), 'size', W, D, 'floors', floors)
    return o

prefabs = [
    house('P_SmallA', 4, 4, 1, 'plaster', vines=1),
    house('P_SmallB', 4, 4, 1, 'brick'),
    house('P_Long', 4, 6, 2, 'brick', 'woodgrid'),
    house('P_Medium', 6, 6, 1, 'woodgrid'),
    house('P_Tavern', 6, 8, 2, 'brick', 'woodgrid', balcony=True),
    house('P_Manor', 6, 6, 2, 'brick', 'plaster', vines=2),
    house('P_Hut', 4, 4, 1, 'plaster', shutters=False, vines=2),
]
# ---------- small props built from kit materials/modules ----------
# The kit's wood/rock materials are trim sheets (horizontal strips), so primitives get UVs laid into one strip:
#   WoodTrim  v 0.70-0.99 light boards | 0.43-0.68 dark planks | 0.21-0.41 end grain | 0.05-0.21 iron band
#   RockTrim  v 0.68-1.00 rough stones | 0.43-0.66 smooth slab | 0.00-0.41 stone bricks
LIGHT, DARK = (0.705, 0.985), (0.435, 0.675)
def matby(name):
    for m in bpy.data.materials:
        if m.name.split('.')[0] == name: return m
    return None
def pbr(name, col, rough=0.6, metal=0.0, emit=None):
    m = bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*col, 1); b.inputs['Roughness'].default_value = rough; b.inputs['Metallic'].default_value = metal
    if emit:
        b.inputs['Emission Color'].default_value = (*emit, 1); b.inputs['Emission Strength'].default_value = 1.0
    return m
AX = {'X': Vector((1, 0, 0)), 'Y': Vector((0, 1, 0)), 'Z': Vector((0, 0, 1))}
def trim_uv(o, strip, grain='Z', dens=0.6, off=0.0):
    """lay every face into one horizontal strip of a trim sheet, wood grain along `grain`"""
    me = o.data; uvl = me.uv_layers.active or me.uv_layers.new()
    v0, v1 = strip[0] + 0.008, strip[1] - 0.008; h = v1 - v0
    g = AX[grain]
    for poly in me.polygons:
        n = poly.normal
        gu = g
        if abs(n.dot(g)) > 0.7:
            alts = [a for k, a in AX.items() if k != grain and abs(n.dot(a)) < 0.7]
            gu = alts[0] if alts else Vector((1, 0, 0))
        gu = (gu - n * n.dot(gu)).normalized(); gw = n.cross(gu).normalized()
        pts = [me.vertices[me.loops[li].vertex_index].co for li in poly.loop_indices]
        ws = [p.dot(gw) for p in pts]; wmin = min(ws); span = max(max(ws) - wmin, 1e-6)
        k = dens if span * dens <= h else h / span
        for li, p in zip(poly.loop_indices, pts):
            uvl.data[li].uv = (p.dot(gu) * dens + off, v0 + (p.dot(gw) - wmin) * k)
def prim(parts, kind, mat, loc=(0, 0, 0), scale=(1, 1, 1), rot=(0, 0, 0), strip=None, grain='Z', v=16, dens=0.6, minor=0.25):
    if kind == 'box': bpy.ops.mesh.primitive_cube_add(size=1)
    elif kind == 'cyl': bpy.ops.mesh.primitive_cylinder_add(vertices=v, radius=1, depth=1)
    elif kind == 'cone': bpy.ops.mesh.primitive_cone_add(vertices=v, radius1=1, radius2=0, depth=1)
    elif kind == 'torus': bpy.ops.mesh.primitive_torus_add(major_radius=1, minor_radius=minor, major_segments=v, minor_segments=6)
    o = bpy.context.active_object
    o.scale = scale; o.rotation_euler = [math.radians(r) for r in rot]; o.location = loc
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    if not o.data.uv_layers: o.data.uv_layers.new()
    if strip: trim_uv(o, strip, grain, dens, off=(len(parts) * 0.137) % 1.0)
    o.data.materials.clear(); o.data.materials.append(mat)
    parts.append(o); return o
def tube(parts, mat, r_out, r_in, h, v=28, Uo=3, Ui=2):
    """round stone wall: bricks outside, rough stones inside, smooth slab on the rim (RockTrim strips)"""
    bm = bmesh.new(); uv = bm.loops.layers.uv.new('UVMap')
    ang = [i / v * 2 * math.pi for i in range(v + 1)]
    def vt(r, a, z): return bm.verts.new((math.cos(a) * r, math.sin(a) * r, z))
    ob = [vt(r_out, a, 0) for a in ang]; ot = [vt(r_out, a, h) for a in ang]
    ib = [vt(r_in, a, 0) for a in ang]; it = [vt(r_in, a, h) for a in ang]
    def face(vs, uvs):
        f = bm.faces.new(vs)
        for l, c in zip(f.loops, uvs): l[uv].uv = c
    for i in range(v):
        u0, u1 = i / v * Uo, (i + 1) / v * Uo; w0, w1 = i / v * Ui, (i + 1) / v * Ui
        face((ob[i], ob[i + 1], ot[i + 1], ot[i]), ((u0, 0.01), (u1, 0.01), (u1, 0.40), (u0, 0.40)))
        face((it[i], it[i + 1], ib[i + 1], ib[i]), ((w0, 0.98), (w1, 0.98), (w1, 0.69), (w0, 0.69)))
        face((ot[i], ot[i + 1], it[i + 1], it[i]), ((u0, 0.44), (u1, 0.44), (u1, 0.65), (u0, 0.65)))
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=1e-5)
    me = bpy.data.meshes.new('tube'); bm.to_mesh(me); bm.free()
    o = bpy.data.objects.new('tube', me); sc.collection.objects.link(o)
    me.materials.append(mat); parts.append(o); return o
def joined(parts, name):
    bpy.ops.object.select_all(action='DESELECT')
    for o in parts: o.select_set(True)
    bpy.context.view_layer.objects.active = parts[0]
    bpy.ops.object.make_single_user(object=True, obdata=True)
    bpy.ops.object.join()
    o = bpy.context.view_layer.objects.active; o.name = name; o.data.name = name
    print('prefab', name, 'tris', len(o.data.polygons)); return o
ROCK, WOOD, TILES = matby('MI_RockTrim'), matby('MI_WoodTrim'), matby('MI_RoundTiles')
water = pbr('M_WellWater', (0.03, 0.07, 0.09), rough=0.04)
iron = pbr('M_LampIron', (0.07, 0.07, 0.075), rough=0.45, metal=0.85)
rope = pbr('M_Rope', (0.42, 0.33, 0.2), rough=0.95)
gold = pbr('M_SignGilt', (0.78, 0.56, 0.18), rough=0.38, metal=0.75)
foam = pbr('M_SignFoam', (0.88, 0.84, 0.72), rough=0.8)
lglass = pbr('M_LanternGlass', (0.95, 0.72, 0.38), rough=0.3, emit=(1.0, 0.62, 0.25))
# striped market awning cloth (generated texture)
os.makedirs(OUT + 'vtex', exist_ok=True)
import random
random.seed(7)
cl = Image.new('RGB', (256, 128))
for x in range(256):
    for y in range(128):
        red = (x // 64) % 2 == 0
        base = (150, 32, 26) if red else (214, 198, 160)
        n = random.randint(-9, 9) + int(6 * math.sin(y * 1.7) * math.sin(x * 2.3))
        hem = 0.72 if y > 112 else (0.86 if y > 106 else 1.0)
        cl.putpixel((x, y), tuple(max(0, min(255, int((c + n) * hem))) for c in base))
cl.save(OUT + 'vtex/T_StallCloth.png')
cloth = bpy.data.materials.new('M_StallCloth'); cloth.use_nodes = True
nt = cloth.node_tree; bsdf = nt.nodes['Principled BSDF']; bsdf.inputs['Roughness'].default_value = 0.92
tx = nt.nodes.new('ShaderNodeTexImage'); tx.image = bpy.data.images.load(OUT + 'vtex/T_StallCloth.png')
nt.links.new(tx.outputs['Color'], bsdf.inputs['Base Color'])

# ---- well ----
parts = []
tube(parts, ROCK, 1.15, 0.86, 0.9)
prim(parts, 'cyl', water, (0, 0, 0.6), (0.87, 0.87, 0.04), v=28)
for sx in (-1, 1): prim(parts, 'box', WOOD, (sx * 0.98, 0, 1.35), (0.16, 0.16, 2.7), strip=LIGHT, grain='Z')
prim(parts, 'cyl', WOOD, (0, 0, 1.75), (0.075, 0.075, 2.3), (0, 90, 0), strip=LIGHT, grain='X', v=12)
prim(parts, 'box', WOOD, (1.19, 0, 1.62), (0.05, 0.05, 0.32), strip=DARK, grain='Z')
prim(parts, 'box', WOOD, (1.19, -0.12, 1.48), (0.04, 0.24, 0.04), strip=DARK, grain='Y')
prim(parts, 'cyl', rope, (0, 0, 1.75), (0.1, 0.1, 0.22), (0, 90, 0), v=12)
prim(parts, 'cyl', rope, (0, 0, 1.52), (0.01, 0.01, 0.27), v=6)
prim(parts, 'cyl', WOOD, (0, 0, 1.12), (0.15, 0.15, 0.24), strip=DARK, grain='Z', v=12)
prim(parts, 'cyl', iron, (0, 0, 1.17), (0.155, 0.155, 0.025), v=12)
prim(parts, 'torus', iron, (0, 0, 1.24), (0.15, 0.15, 0.15), (90, 0, 0), v=12, minor=0.07)
place(parts, 'Roof_2x4_RoundTile', 0, 0, 2.42, 90)
parts[-1].scale = (0.55, 0.62, 0.42)
prefabs.append(joined(parts, 'P_Well'))

# ---- market stall ----
parts = []
prim(parts, 'box', WOOD, (0, 0, 0.45), (3.0, 1.2, 0.9), strip=DARK, grain='X')
prim(parts, 'box', WOOD, (0, -0.02, 0.93), (3.12, 1.3, 0.06), strip=LIGHT, grain='X')
for sx in (-1, 1):
    for sy, hh in ((-1, 2.3), (1, 2.95)): prim(parts, 'box', WOOD, (sx * 1.42, sy * 0.62, hh / 2), (0.12, 0.12, hh), strip=LIGHT, grain='Z')
place(parts, 'Roof_Wooden_2x1', 0, 0.72, 2.32, 0)
parts[-1].scale = (1.45, 1.1, 0.72)
aw = prim(parts, 'box', cloth, (0, -0.98, 2.02), (3.25, 0.03, 0.36))
me = aw.data; uvl = me.uv_layers.active
for poly in me.polygons:
    for li in poly.loop_indices:
        co = me.vertices[me.loops[li].vertex_index].co
        uvl.data[li].uv = ((co.x + 1.625) / 0.52, (co.z - 1.84) / 0.36)
for i, (x, y) in enumerate([(-0.9, 0.1), (0.0, -0.1), (0.9, 0.15)]):
    place(parts, 'Prop_Crate', x, y, 0.96, i * 25)
    parts[-1].scale = (0.42, 0.42, 0.42)
prefabs.append(joined(parts, 'P_Stall'))

# ---- lantern post (the glass glows at night) ----
parts = []
prim(parts, 'box', WOOD, (0, 0, 1.4), (0.16, 0.16, 2.8), strip=LIGHT, grain='Z')
prim(parts, 'box', WOOD, (0, 0, 2.83), (0.2, 0.2, 0.06), strip=DARK, grain='X')
prim(parts, 'box', iron, (0.33, 0, 2.62), (0.56, 0.035, 0.035))
prim(parts, 'box', iron, (0.27, 0, 2.47), (0.46, 0.025, 0.025), (0, -40, 0))
prim(parts, 'box', iron, (0.56, 0, 2.55), (0.012, 0.012, 0.12))
prim(parts, 'cone', iron, (0.56, 0, 2.43), (0.17, 0.17, 0.13), (0, 0, 45), v=4)
prim(parts, 'box', iron, (0.56, 0, 2.355), (0.25, 0.25, 0.03))
prim(parts, 'box', iron, (0.56, 0, 2.03), (0.25, 0.25, 0.03))
prim(parts, 'box', lglass, (0.56, 0, 2.19), (0.2, 0.2, 0.3))
for sx in (-1, 1):
    for sy in (-1, 1): prim(parts, 'box', iron, (0.56 + sx * 0.11, sy * 0.11, 2.19), (0.025, 0.025, 0.34))
prim(parts, 'torus', iron, (0.56, 0, 2.6), (0.035, 0.035, 0.035), (90, 0, 0), v=8, minor=0.25)
prefabs.append(joined(parts, 'P_Lantern'))

# ---- tavern sign: plank board with a gilt tankard on both faces ----
parts = []
prim(parts, 'box', WOOD, (0, 0, 1.6), (0.16, 0.16, 3.2), strip=LIGHT, grain='Z')
prim(parts, 'box', iron, (0.55, 0, 3.0), (1.1, 0.04, 0.04))
prim(parts, 'box', iron, (0.3, 0, 2.82), (0.55, 0.025, 0.025), (0, -35, 0))
for x in (0.2, 0.9): prim(parts, 'box', iron, (x, 0, 2.86), (0.015, 0.015, 0.28))
prim(parts, 'box', WOOD, (0.55, 0, 2.38), (0.95, 0.06, 0.62), strip=DARK, grain='X')
prim(parts, 'box', WOOD, (0.55, 0, 2.38), (1.0, 0.04, 0.67), strip=LIGHT, grain='X')
for sy in (-1, 1):
    y = sy * 0.045
    prim(parts, 'cyl', gold, (0.53, y, 2.35), (0.1, 0.03, 0.2), v=12)
    prim(parts, 'cyl', foam, (0.53, y, 2.47), (0.115, 0.032, 0.05), v=12)
    prim(parts, 'torus', gold, (0.66, y, 2.35), (0.07, 0.07, 0.07), (90, 0, 0), v=10)
prefabs.append(joined(parts, 'P_Sign'))

props = []
for n in ('Prop_Wagon', 'Prop_Crate', 'Prop_WoodenFence_Single'):
    t = template(n); o = t.copy(); o.data = t.data.copy(); sc.collection.objects.link(o)
    o.hide_render = False; o.hide_set(False); o.name = n.replace('Prop_', 'P_'); o.matrix_world = Matrix.Identity(4)
    props.append(o)
for t in TPL.values(): bpy.data.objects.remove(t)
# share materials across modules (each glTF import created its own copies)
for m in list(bpy.data.materials):
    base = m.name.split('.')[0]
    if base != m.name and base in bpy.data.materials:
        m.user_remap(bpy.data.materials[base])
for o in bpy.data.objects:
    if o.type == 'MESH':
        o.data.materials.foreach_set if False else None
for m in list(bpy.data.materials):
    if m.users == 0: bpy.data.materials.remove(m)
# merge duplicate material slots inside each prefab
for o in bpy.data.objects:
    if o.type != 'MESH': continue
    bpy.context.view_layer.objects.active = o
    for oo in bpy.context.selected_objects: oo.select_set(False)
    o.select_set(True)
    bpy.ops.object.material_slot_remove_unused()
print('materials', sorted(m.name for m in bpy.data.materials))
# mobile textures
os.makedirs(OUT + 'vtex', exist_ok=True)
for im in list(bpy.data.images):
    if im.source != 'FILE' or im.size[0] == 0: continue
    src = bpy.path.abspath(im.filepath)
    if not os.path.exists(src):
        tmp = OUT + 'vtex/_src_' + bpy.path.clean_name(im.name) + '.png'; im.filepath_raw = tmp; im.file_format = 'PNG'; im.save(); src = tmp
    pim = Image.open(src)
    nm = im.name
    tgt = 1024 if 'BaseColor' in nm else 512
    if 'Vine' in nm: tgt = 512
    if pim.size[0] > tgt: pim = pim.resize((tgt, tgt), Image.LANCZOS)
    has_alpha = pim.mode == 'RGBA' and ('Vine' in nm)
    dst = OUT + 'vtex/' + bpy.path.clean_name(nm) + ('.png' if has_alpha else '.jpg')
    if has_alpha: pim.save(dst)
    else: pim.convert('RGB').save(dst, quality=86)
    if im.packed_file: im.unpack(method='REMOVE')
    im.filepath = dst; im.source = 'FILE'; im.reload()
for i, o in enumerate(prefabs + props):
    o.location = (i * 12.0, 0, 0)
bpy.ops.wm.save_as_mainfile(filepath=OUT + 'village.blend')
for o in prefabs + props: o.location = (0, 0, 0)
bpy.ops.object.select_all(action='DESELECT')
bpy.ops.export_scene.gltf(filepath=OUT + 'village.glb', export_format='GLB', export_image_format='JPEG', export_jpeg_quality=86,
                          export_yup=True, export_animations=False)
print('GLB MB', round(os.path.getsize(OUT + 'village.glb') / 1e6, 2))
if '--render' in sys.argv:
    for i, o in enumerate(prefabs + props): o.location = (i * 12.0, 0, 0)
    setup_render(1600, 600, 12)
    bpy.ops.mesh.primitive_plane_add(size=200, location=(40, 0, 0))
    camera((40, -46, 18), (40, 0, 3), 40)
    render(OUT + 'village_prev.png')
    camera((-6, -13, 6), (0, 0, 3), 45)
    render(OUT + 'village_house.png')
    for k, n in enumerate(('P_Well', 'P_Stall', 'P_Lantern', 'P_Sign')):
        o = bpy.data.objects[n]; x = o.location.x
        camera((x - 3.2, -5.2, 2.6), (x, 0, 1.5), 50)
        sc.render.resolution_x, sc.render.resolution_y = 700, 600
        render(OUT + f'village_{n}.png')
