# Rig v2: anatomically calibrated sword grip, mirrored two-hand grip, detailed longsword, potion flask
import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import *
import json

GJ = json.load(open(OUT + 'grip.json'))
FJ = json.load(open(OUT + 'flask.json'))
GRIP_R = Vector((GJ['gx'], GJ['gy'], GJ['gz']))   # centre of the right fist (rest/T pose), grip axis along world Y
TILT = math.radians(GJ.get('tilt', 0.0))            # grip runs diagonally across the palm (natural power grip)
B_REST = Vector((-math.sin(TILT), -math.cos(TILT), 0))   # blade leaves the fist on the thumb/index side, leaning to the fingertips
LH_OFF = 0.088                                     # left hand centre sits this far toward the pommel
E_REST = None                                      # true edge: in line with the middle knuckles (computed from the fist)

def finger_rots(J, scale=1.0):
    """local XYZ euler (radians) per finger bone for the right hand (left hand uses identical values: mirrored rig)"""
    d = {}
    for f, (a1, a2, a3) in J['fingers'].items():
        for k, a in zip((1, 2, 3), (a1, a2, a3)):
            d[f'{f}_0{k}'] = (math.radians(a * scale), 0, 0)
    ax, ay, az, b2, b3 = J['thumb']
    d['thumb_01'] = (math.radians(ax * scale), math.radians(ay * scale), math.radians(az * scale))
    d['thumb_02'] = (math.radians(b2 * scale), 0, 0)
    d['thumb_03'] = (math.radians(b3 * scale), 0, 0)
    return d
FIST = finger_rots(GJ)
FLASKF = finger_rots(FJ)
OPEN = {k: (v[0] * 0.12, v[1] * 0.12, v[2] * 0.12) for k, v in FIST.items()}
OPEN['thumb_01'] = (math.radians(-10), 0, math.radians(15))
RELAX = {k: (v[0] * 0.35, v[1] * 0.3, v[2] * 0.3) for k, v in FIST.items()}

def compute_edge(arm):
    """true edge direction = from the grip axis toward the curled middle knuckles (PIP joints)"""
    global E_REST
    bones = arm.data.bones
    def rest(n): return bones[n].matrix_local.copy()
    acc = Vector((0, 0, 0))
    for f in ('index', 'middle', 'ring', 'pinky'):
        M = rest('hand_r') @ (rest('hand_r').inverted() @ rest(f'{f}_01_r')) @ Euler(FIST[f'{f}_01']).to_matrix().to_4x4()
        pip = (M @ Matrix.Translation((0, bones[f'{f}_01_r'].length, 0))).to_translation()
        acc += pip
    acc /= 4
    d = acc - GRIP_R; d = d - B_REST * d.dot(B_REST)
    E_REST = d.normalized()
    return E_REST

def mat(name, col, metal=0.0, rough=0.5):
    m = bpy.data.materials.new(name); m.use_nodes = True
    p = m.node_tree.nodes['Principled BSDF']; p.inputs['Base Color'].default_value = (*col, 1)
    p.inputs['Metallic'].default_value = metal; p.inputs['Roughness'].default_value = rough
    return m

def _ring_section(w, t, fuller):
    """blade cross-section in (edge, flat) coordinates; fuller in [0,1] = groove depth"""
    fd = t * (1 - 0.45 * fuller)
    top = [(w, 0.0), (0.55 * w, 0.82 * t), (0.16 * w, t), (0.0, fd), (-0.16 * w, t), (-0.55 * w, 0.82 * t), (-w, 0.0)]
    return top

def build_sword(arm, name='Sword', steel_col=(0.74, 0.76, 0.8)):
    """historical two-handed longsword (Oakeshott XVIIIa-like): 93 cm blade with fuller, straight cross,
    20 cm leather grip with risers, wheel pommel. Built in rest pose in the right fist, skinned to bone weapon_r."""
    E = E_REST; Bd = B_REST; S = Bd.cross(E).normalized()    # S = flat normal
    steel = mat('M_Steel', steel_col, 1.0, 0.24)
    dark = mat('M_SteelDark', (0.30, 0.30, 0.32), 1.0, 0.38)
    leather = mat('M_Grip', (0.11, 0.06, 0.035), 0.0, 0.72)
    bm = bmesh.new()
    def V(e, s, b, origin): return origin + E * e + S * s + Bd * b
    G = GRIP_R
    # ---- blade (top & bottom surfaces built separately -> crisp cutting edges) ----
    base = G + Bd * 0.066
    L = 0.93; N = 24
    for side in (1, -1):
        rings = []
        for i in range(N + 1):
            t = i / N
            w = 0.0255 * (1 - t) + 0.0115 * t
            if t > 0.9: w = 0.0115 * (1 - (t - 0.9) / 0.1) ** 0.85 + 0.0004
            th = 0.0036 * (1 - 0.55 * t)
            if t > 0.9: th *= (1 - (t - 0.9) / 0.1) ** 0.8 + 0.05
            fuller = 1.0 if t < 0.55 else max(0.0, 1 - (t - 0.55) / 0.08)
            sec = _ring_section(w, th, fuller)
            rings.append([bm.verts.new(V(e, side * s, L * t, base)) for e, s in sec])
        for i in range(N):
            A, B = rings[i], rings[i + 1]
            for j in range(len(A) - 1):
                q = (A[j], A[j + 1], B[j + 1], B[j]) if side > 0 else (A[j + 1], A[j], B[j], B[j + 1])
                f = bm.faces.new(q); f.material_index = 0; f.smooth = True
        tip = bm.verts.new(base + Bd * (L + 0.004))
        last = rings[-1]
        for j in range(len(last) - 1):
            f = bm.faces.new((last[j], last[j + 1], tip) if side > 0 else (last[j + 1], last[j], tip)); f.material_index = 0; f.smooth = True
        # base cap
        f = bm.faces.new(rings[0][::-1] if side > 0 else rings[0]); f.material_index = 0
    # ---- cross guard: tapered square-section quillons with a centre block and slight drop toward the blade ----
    def box(c, ax, ay, az, mi, smooth=False):
        vs = []
        for sx in (-1, 1):
            for sy in (-1, 1):
                for sz in (-1, 1): vs.append(bm.verts.new(c + ax * sx + ay * sy + az * sz))
        for q in [(0, 1, 3, 2), (4, 6, 7, 5), (0, 4, 5, 1), (2, 3, 7, 6), (0, 2, 6, 4), (1, 5, 7, 3)]:
            f = bm.faces.new([vs[i] for i in q]); f.material_index = mi; f.smooth = smooth
    gc = G + Bd * 0.056
    box(gc, E * 0.020, S * 0.0115, Bd * 0.010, 1)                      # centre block (ecusson)
    segs = 6
    for sgn in (1, -1):
        prev = None
        for k in range(segs + 1):
            u = k / segs
            pos = gc + E * sgn * (0.018 + 0.105 * u) + Bd * (0.006 * u * u)
            hw = 0.0068 * (1 - 0.35 * u)
            ring = [bm.verts.new(pos + S * hw * a + Bd * hw * b) for a, b in ((1, 1), (-1, 1), (-1, -1), (1, -1))]
            if prev:
                for j in range(4):
                    f = bm.faces.new((prev[j], prev[(j + 1) % 4], ring[(j + 1) % 4], ring[j]) if sgn > 0 else (prev[(j + 1) % 4], prev[j], ring[j], ring[(j + 1) % 4]))
                    f.material_index = 1
            prev = ring
        f = bm.faces.new(prev if sgn > 0 else prev[::-1]); f.material_index = 1
        # terminal knob
        kc = gc + E * sgn * 0.128 + Bd * 0.006
        sb = bmesh.ops.create_icosphere(bm, subdivisions=1, radius=0.0085)
        for v in sb['verts']: v.co = kc + (v.co.x * E + v.co.y * S + v.co.z * Bd)
        for f in {f for v in sb['verts'] for f in v.link_faces}: f.material_index = 1; f.smooth = True
    # ---- grip: leather, slightly waisted, with three risers ----
    g0 = G + Bd * 0.048; g1 = G - Bd * (LH_OFF + 0.046)
    seg = 16; rings = []; NR = 14
    for k in range(NR + 1):
        u = k / NR
        c = g0.lerp(g1, u)
        r = 0.0152 + 0.0010 * math.sin(u * math.pi) - 0.0006 * math.cos(u * math.pi * 4)
        if abs(u - 0.33) < 0.03 or abs(u - 0.66) < 0.03: r += 0.0012
        rings.append([bm.verts.new(c + (E * math.cos(a) + S * math.sin(a)) * r) for a in [s / seg * 2 * math.pi for s in range(seg)]])
    for k in range(NR):
        A, B = rings[k], rings[k + 1]
        for s in range(seg):
            f = bm.faces.new((A[s], A[(s + 1) % seg], B[(s + 1) % seg], B[s])); f.material_index = 2; f.smooth = True
    # ---- wheel pommel with peen block ----
    pc = G - Bd * (LH_OFF + 0.066)
    seg = 20; rw = 0.031; th = 0.012
    rim = []
    for side in (1, -1):
        ringo = [bm.verts.new(pc + (E * math.cos(a) + Bd * math.sin(a)) * rw + S * side * th * 0.55) for a in [s / seg * 2 * math.pi for s in range(seg)]]
        ringi = [bm.verts.new(pc + (E * math.cos(a) + Bd * math.sin(a)) * rw * 0.62 + S * side * th) for a in [s / seg * 2 * math.pi for s in range(seg)]]
        cen = bm.verts.new(pc + S * side * th * 1.08)
        rim.append(ringo)
        for s in range(seg):
            q = (ringo[s], ringo[(s + 1) % seg], ringi[(s + 1) % seg], ringi[s])
            f = bm.faces.new(q if side > 0 else q[::-1]); f.material_index = 1; f.smooth = True
            t3 = (ringi[s], ringi[(s + 1) % seg], cen)
            f = bm.faces.new(t3 if side > 0 else t3[::-1]); f.material_index = 1; f.smooth = True
    for s in range(seg):
        A, B = rim[0], rim[1]
        f = bm.faces.new((A[(s + 1) % seg], A[s], B[s], B[(s + 1) % seg])); f.material_index = 1; f.smooth = True
    box(pc - Bd * 0.033, E * 0.006, S * 0.006, Bd * 0.004, 1)
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    me = bpy.data.meshes.new(name); bm.to_mesh(me); bm.free()
    for m in (steel, dark, leather): me.materials.append(m)
    o = bpy.data.objects.new(name, me); bpy.context.scene.collection.objects.link(o)
    add_bone(arm, 'weapon_r', G, G + Bd * 0.25, E, 'hand_r')
    o.parent = arm; vg = o.vertex_groups.new(name='weapon_r'); vg.add(list(range(len(me.vertices))), 1.0, 'REPLACE')
    o.modifiers.new('Armature', 'ARMATURE').object = arm
    return o

def add_bone(arm, name, head, tail, roll_axis, parent):
    bpy.context.view_layer.objects.active = arm
    for oo in bpy.context.selected_objects: oo.select_set(False)
    arm.select_set(True)
    bpy.ops.object.mode_set(mode='EDIT')
    eb = arm.data.edit_bones.new(name); eb.head = head; eb.tail = tail
    eb.align_roll(roll_axis); eb.parent = arm.data.edit_bones[parent]; eb.use_deform = True
    bpy.ops.object.mode_set(mode='OBJECT')

def build_flask(arm):
    """small glass healing flask held in the left fist (rest pose), neck toward the thumb side"""
    gc = Vector((-FJ['gx'], FJ['gy'], FJ['gz']))      # mirror of the right-hand flask fit
    ax = Vector((0, -1, 0))
    glass = bpy.data.materials.new('M_Glass'); glass.use_nodes = True
    p = glass.node_tree.nodes['Principled BSDF']; p.inputs['Base Color'].default_value = (0.75, 0.85, 0.9, 1)
    p.inputs['Roughness'].default_value = 0.05; p.inputs['Alpha'].default_value = 0.28
    liquid = mat('M_Potion', (0.85, 0.02, 0.04), 0.0, 0.15)
    cork = mat('M_Cork', (0.45, 0.3, 0.18), 0.0, 0.9)
    bm = bmesh.new()
    def lathe(profile, mi, seg=16):
        rings = []
        for (h, r) in profile:
            c = gc + ax * h
            rings.append([bm.verts.new(c + (Vector((1, 0, 0)) * math.cos(a) + Vector((0, 0, 1)) * math.sin(a)) * r) for a in [s / seg * 2 * math.pi for s in range(seg)]])
        for k in range(len(rings) - 1):
            A, B = rings[k], rings[k + 1]
            for s in range(seg):
                f = bm.faces.new((A[s], A[(s + 1) % seg], B[(s + 1) % seg], B[s])); f.material_index = mi; f.smooth = True
        f = bm.faces.new(rings[0][::-1]); f.material_index = mi
        f = bm.faces.new(rings[-1]); f.material_index = mi
    lathe([(-0.055, 0.005), (-0.052, 0.026), (-0.04, 0.033), (0.0, 0.034), (0.03, 0.029), (0.045, 0.014), (0.07, 0.0105), (0.077, 0.012)], 0)
    lathe([(-0.049, 0.005), (-0.047, 0.024), (-0.036, 0.0305), (0.0, 0.0315), (0.024, 0.027), (0.034, 0.012)], 1)
    lathe([(0.075, 0.0092), (0.095, 0.0098)], 2, 10)
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    me = bpy.data.meshes.new('Flask'); bm.to_mesh(me); bm.free()
    for m in (glass, liquid, cork): me.materials.append(m)
    o = bpy.data.objects.new('Flask', me); bpy.context.scene.collection.objects.link(o)
    add_bone(arm, 'flask_l', gc, gc + ax * 0.1, Vector((0, 0, 1)), 'hand_l')
    o.parent = arm; vg = o.vertex_groups.new(name='flask_l'); vg.add(list(range(len(me.vertices))), 1.0, 'REPLACE')
    o.modifiers.new('Armature', 'ARMATURE').object = arm
    return o

def frame_from(b, e):
    """rotation (3x3) mapping the rest sword frame onto world blade/edge directions"""
    b = Vector(b).normalized(); e = Vector(e); e = (e - b * e.dot(b)).normalized(); s = b.cross(e)
    Rw = Matrix((s, b, e)).transposed()
    sr = B_REST.cross(E_REST)
    Rr = Matrix((sr, B_REST, E_REST)).transposed()
    return Rw @ Rr.inverted()
