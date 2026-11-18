# Locomotion bakes: mocap-style legs/spine from the CC0 Universal Animation Library,
# upper body re-targeted with IK: two-hand Pflug guard (walk) or one-hand shoulder carry (run/sprint).
import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from clips import *
import rig2

def iter_fcurves(act):
    try:
        for fc in act.fcurves: yield fc
    except AttributeError:
        for layer in act.layers:
            for strip in layer.strips:
                for cb in strip.channelbags:
                    for fc in cb.fcurves: yield fc

def load_ual():
    before_o = set(bpy.data.objects); before_a = set(bpy.data.actions)
    for f in ['Universal Animation Library[Standard]/Unreal-Godot/UAL1_Standard.glb',
              'Universal Animation Library 2[Standard]/Unreal-Godot/UAL2_Standard.glb']:
        bpy.ops.import_scene.gltf(filepath=X + f)
    for o in list(bpy.data.objects):
        if o not in before_o: bpy.data.objects.remove(o)
    out = {}
    for a in bpy.data.actions:
        if a in before_a: continue
        base = a.name.split('.')[0]
        if base not in out: out[base] = a; a.use_fake_user = True
    return out

class Sampler:
    def __init__(self, act):
        self.act = act; self.ch = {}
        for fc in iter_fcurves(act):
            dp = fc.data_path
            if not dp.startswith('pose.bones['): continue
            bone = dp.split('"')[1]; prop = dp.split('.')[-1]
            self.ch.setdefault(bone, {}).setdefault(prop, {})[fc.array_index] = fc
        self.f0, self.f1 = act.frame_range
    def apply(self, pb, fu, skip=()):
        for bone, props in self.ch.items():
            if bone in skip or bone not in pb: continue
            p = pb[bone]
            if 'rotation_quaternion' in props:
                q = Quaternion([props['rotation_quaternion'][i].evaluate(fu) if i in props['rotation_quaternion'] else (1 if i == 0 else 0) for i in range(4)])
                q.normalize(); p.rotation_quaternion = q
            if 'location' in props:
                p.location = [props['location'][i].evaluate(fu) if i in props['location'] else 0 for i in range(3)]

FINGERS_R = {f'{k}_r' for k in FIST}; FINGERS_L = {f'{k}_l' for k in FIST}

def guard_relation(au):
    """sword transform relative to the chest (spine_03) in the Pflug guard pose"""
    name, keys, steps, length, rm = clip_guard_idle()
    ch, feet = au.build_channels(keys); au._steps = steps
    st = au.evaluate(0, ch, feet, steps)
    au.mute('legs', False); au.mute('look', False); au.mute('larm', False)
    au.apply(st, 0)
    S3 = au.pb['spine_03'].matrix.copy()
    return S3.inverted() @ au.cur['W']

def carry_relation(au):
    G = Vector((-0.31, -0.10, 1.31)); b = Vector((-0.38, 0.40, 0.83)); e = Vector((0.2, -1, 0))
    W = Matrix.Translation(G) @ frame_from(b, e).to_4x4()
    return au.REST['spine_03'].inverted() @ W

def bake_loco(au, name, act, mode, fps_src=None):
    fps_src = fps_src or bpy.context.scene.render.fps
    smp = Sampler(act)
    dur = (smp.f1 - smp.f0) / fps_src
    n = int(round(dur * 30))
    W_rel = guard_relation(au) if mode == 'guard' else carry_relation(au)
    pb = au.pb; A = au.arm.matrix_world
    au.mute('legs', True); au.mute('look', True)
    au.mute('larm', mode != 'guard'); au.mute('rarm', False)
    def cb(i):
        t = (i / n) * dur
        fu = smp.f0 + t * fps_src
        for b in pb:
            b.location = (0, 0, 0); b.rotation_quaternion = (1, 0, 0, 0)
        skip = FINGERS_R | (FINGERS_L if mode == 'guard' else set())
        smp.apply(pb, fu, skip=skip | {'root'})
        au.set_fingers('r', 1.0)
        if mode == 'guard': au.set_fingers('l', 1.0)
        bpy.context.view_layer.update()
        S3 = pb['spine_03'].matrix.copy()
        W = S3 @ W_rel
        HR = W @ au.W_REST.inverted() @ au.HR_REST
        G = W.translation; R3 = W.to_3x3()
        b = (R3 @ B_REST).normalized(); e = (R3 @ rig2.E_REST).normalized()
        s_n = b.cross(e).normalized()
        Ref = Matrix.Identity(3) - 2 * Matrix((s_n * s_n.x, s_n * s_n.y, s_n * s_n.z))
        HLrot = Ref @ HR.to_3x3() @ au.K
        HL = HLrot.to_4x4(); HL.translation = G + Ref @ (HR.translation - G) - b * LH_OFF
        # elbow poles in the chest frame
        chest = S3.to_3x3()
        fwd = (chest @ Vector((0, 0, 1))).normalized(); fwd.z = 0; fwd.normalize()
        for s_, Ht, PT in (('r', HR, au.PR), ('l', HL, au.PL)):
            S0 = (A @ pb[f'upperarm_{s_}'].matrix).to_translation(); wr = Ht.translation
            out = Vector((-fwd.y, fwd.x, 0)) * (1 if s_ == 'r' else -1) * -1
            hint = out * 0.5 + Vector((0, 0, -1)) * 0.85 + fwd * 0.1
            PT.location = (S0 + wr) * 0.5 + hint.normalized() * 0.45
        au.TR.matrix_world = HR; au.TL.matrix_world = HL
        bpy.context.view_layer.update()
        au.declash(W)
        au.cur = dict(HR=HR, HL=HL, W=W)
    res = au.bake_cb(name, n + 1, cb, root_motion=False, check_left=(mode == 'guard'))
    au.mute('legs', False); au.mute('look', False); au.mute('larm', False)
    return res
