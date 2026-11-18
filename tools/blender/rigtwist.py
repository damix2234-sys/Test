# Twist bones for the arms + smooth skin-weight gradients (forearm pronation spreads from wrist to elbow,
# humeral twist is partly cancelled over the deltoid), max 4 influences per vertex for glTF / three.js.
import bpy, math
from mathutils import Vector

def smoothstep(a, b, x):
    t = max(0.0, min(1.0, (x - a) / (b - a))); return t * t * (3 - 2 * t)

def add_twist_bones(arm):
    vl = bpy.context.view_layer
    for o in list(bpy.context.scene.objects):
        if o is not None: o.select_set(False)
    vl.objects.active = arm; arm.select_set(True)
    bpy.ops.object.mode_set(mode='EDIT')
    eb = arm.data.edit_bones
    for s in 'rl':
        lo = eb[f'lowerarm_{s}']; up = eb[f'upperarm_{s}']
        if f'lowerarm_twist_01_{s}' not in eb:
            t = eb.new(f'lowerarm_twist_01_{s}')
            t.head = lo.head.lerp(lo.tail, 0.5); t.tail = lo.tail.copy(); t.roll = lo.roll
            t.parent = lo; t.use_connect = False; t.use_deform = True
        if f'upperarm_twist_01_{s}' not in eb:
            t = eb.new(f'upperarm_twist_01_{s}')
            t.head = up.head.copy(); t.tail = up.head.lerp(up.tail, 0.5); t.roll = up.roll
            t.parent = up; t.use_connect = False; t.use_deform = True
    bpy.ops.object.mode_set(mode='OBJECT')
    for b in arm.pose.bones: b.rotation_mode = 'QUATERNION'

def reweight(arm, meshes, k_fore=(0.18, 0.92), k_up=(0.0, 0.40)):
    """move part of lowerarm_* weight to lowerarm_twist_01_* (more toward the wrist) and the upperarm_* weight around the
    shoulder joint to upperarm_twist_01_* (the shoulder half-joint helper)."""
    R = {b.name: b.matrix_local for b in arm.data.bones}
    Ainv = arm.matrix_world.inverted()
    for ob in meshes:
        vg = ob.vertex_groups
        if not any(g.name.startswith(('upperarm_', 'lowerarm_')) for g in vg): continue
        M = Ainv @ ob.matrix_world
        for s in 'rl':
            for src, dst, a_name, b_name, prof in (
                    (f'lowerarm_{s}', f'lowerarm_twist_01_{s}', f'lowerarm_{s}', f'hand_{s}', lambda t: smoothstep(k_fore[0], k_fore[1], t)),
                    (f'upperarm_{s}', f'upperarm_twist_01_{s}', f'upperarm_{s}', f'lowerarm_{s}', lambda t: 1 - smoothstep(k_up[0], k_up[1], t))):
                if src not in vg: continue
                gs = vg[src]; gd = vg.get(dst) or vg.new(name=dst)
                A = R[a_name].translation; B = R[b_name].translation; AB = B - A; L2 = AB.length_squared
                for v in ob.data.vertices:
                    w = None
                    for g in v.groups:
                        if g.group == gs.index: w = g.weight; break
                    if not w: continue
                    p = M @ v.co
                    t = (p - A).dot(AB) / L2
                    share = prof(t)
                    if share <= 1e-3: continue
                    gs.add([v.index], w * (1 - share), 'REPLACE')
                    gd.add([v.index], w * share, 'ADD')
        vl = bpy.context.view_layer
        for o in list(bpy.context.scene.objects):
            if o is not None: o.select_set(False)
        vl.objects.active = ob; ob.select_set(True)
        bpy.ops.object.vertex_group_limit_total(group_select_mode='BONE_DEFORM', limit=4)
        bpy.ops.object.vertex_group_normalize_all(group_select_mode='BONE_DEFORM', lock_active=False)
        mx = max((len([g for g in v.groups if g.weight > 1e-4]) for v in ob.data.vertices), default=0)
        print('reweighted', ob.name, 'max influences', mx)
