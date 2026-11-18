# HEMA clip library (German longsword after Liechtenauer / Ringeck), authored at 30 fps.
# World: character faces -Y, character's right = -X, +yaw turns toward the character's left.
# Every clip starts at root (0,0); root motion = pelvis travel on the ground.
import sys; sys.path.insert(0, '/tmp/claude-0/-home-user-Test/f99a113e-eb26-5643-ae8a-066cde7aded7/scratchpad/bl')
from hema import *

def add2(a, b): return (a[0] + b[0], a[1] + b[1])

# ---------------- stances (feet relative to root) ----------------
ST_GUARD = dict(L=(0.11, -0.30), Ly=-6, R=(-0.12, 0.17), Ry=-55, z=0.905, yaw=-26, pitch=4, cyaw=16, cpitch=4)
ST_RFWD = dict(L=(0.15, 0.21), Ly=30, R=(-0.10, -0.21), Ry=-18, z=0.88, yaw=18, pitch=9, cyaw=12, cpitch=11)
ST_ZW = dict(L=(0.15, 0.24), Ly=25, R=(-0.17, -0.12), Ry=-30, z=0.885, yaw=22, pitch=6, cyaw=10, cpitch=5)
ST_SCH = dict(L=(0.10, -0.36), Ly=-6, R=(-0.16, 0.04), Ry=-50, z=0.87, yaw=-20, pitch=11, cyaw=26, cpitch=11)

# ---------------- sword positions (relative to root) ----------------
PFLUG = dict(G=(-0.13, -0.30, 1.03), b=(0.09, -0.94, 0.32), e=(0, 0, -1))
VOMTAG = dict(G=(-0.27, -0.06, 1.49), b=(0.05, 0.30, 0.95), e=(0, -0.95, 0.3))
ZORN_END = dict(G=(0.04, -0.38, 1.05), b=(0.49, -0.70, -0.52), e=(0.4, 0.45, -0.8))
ZW_END = dict(G=(0.01, -0.44, 1.52), b=(0.86, -0.48, 0.12), e=(-0.45, -0.85, 0.1))
LANGORT = dict(G=(-0.02, -0.52, 1.34), b=(0.0, -0.99, 0.08), e=(0, -0.08, -1))

def lerp2(a, b, t): return (a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t)

def K(f, root=None, stance=None, sword=None, feet=True, hold=False, **kw):
    """key: root (pelvis ground track) offset, optional stance (pelvis + feet) and sword pose relative to root"""
    d = {}
    if root is not None: d['pxy'] = (root[0], root[1])
    if stance:
        s = stance
        d.update(pz=s['z'], yaw=s['yaw'], pitch=s['pitch'], cyaw=s['cyaw'], cpitch=s['cpitch'])
        if feet:
            d.update(Lb=add2(root, s['L']), Ly=s['Ly'], Rb=add2(root, s['R']), Ry=s['Ry'])
    if sword:
        G = sword['G']; d.update(G=(G[0] + root[0], G[1] + root[1], G[2]), b=sword['b'], e=sword['e'])
    for k, v in kw.items():
        if k in ('G', 'lhp'):
            assert root is not None, k
            v = (v[0] + root[0], v[1] + root[1], v[2])
        d[k] = v
    return (f, d, {'hold': hold})

def base_defaults():
    return K(0, None, lhw=0, lfo=0, lfl=0, rfo=0, neck=0, clR=0, clL=0, lookw=1.0, lookoff=(0, 0, 0))

# =============================== clips ===============================
def clip_guard_idle():
    keys = [base_defaults(), K(0, (0, 0), ST_GUARD, PFLUG)]
    # breathing + small weight shift + living sword point; loop-closed (keys beyond the ends keep the seam smooth)
    for f in range(-15, 106, 15):
        a = f / 90 * 2 * math.pi
        br = math.sin(a * 2)
        keys.append(K(f, (0.006 * math.sin(a), 0.004 * math.cos(a) - 0.004), pz=ST_GUARD['z'] + 0.005 * br,
                      cpitch=ST_GUARD['cpitch'] + 1.2 * br, cyaw=ST_GUARD['cyaw'] + 1.5 * math.sin(a),
                      G=(PFLUG['G'][0] + 0.008 * math.sin(a + 1), PFLUG['G'][1], PFLUG['G'][2] + 0.01 * math.sin(a * 2 + 0.5)),
                      b=(PFLUG['b'][0] + 0.03 * math.sin(a), PFLUG['b'][1], PFLUG['b'][2] + 0.03 * math.cos(a)), e=PFLUG['e']))
    return 'Hema_Guard', keys, [], 90, False

def clip_zornhau():
    r_end = (-0.04, -0.51)
    R_to = add2(r_end, ST_RFWD['R'])
    keys = [base_defaults(),
        K(0, (0, 0), ST_GUARD, PFLUG),
        K(5, (0.005, 0.01), G=(-0.23, -0.18, 1.30), b=(0.10, -0.35, 0.93), e=(0, -0.9, -0.2)),
        K(9, (0.01, 0.02), sword=VOMTAG, yaw=-36, cyaw=10, pz=0.91),
        K(11, (0.01, 0.02), G=(-0.28, -0.03, 1.50), b=(0.06, 0.38, 0.92), e=(0, -1, 0.4), yaw=-38, cyaw=8, hold=True),
        K(13, (-0.005, -0.06), G=(-0.24, -0.22, 1.54), b=(0.10, -0.15, 0.98), e=(0.2, -0.98, -0.1)),
        K(14, (-0.02, -0.15), yaw=-14, cyaw=-2, pz=0.89),
        K(15, (-0.025, -0.24), G=(-0.12, -0.45, 1.45), b=(0.32, -0.72, 0.62), e=(0.5, -0.45, -0.75)),
        K(16, (-0.03, -0.32), G=(-0.06, -0.50, 1.34), b=(0.42, -0.84, 0.34), e=(0.6, -0.05, -0.8), cyaw=-10, cpitch=11),
        K(17, (-0.035, -0.40), pz=0.872, yaw=8, Rb=R_to, Ry=ST_RFWD['Ry']),
        K(18, (-0.04, -0.46), G=(0.03, -0.46, 1.17), b=(0.52, -0.78, -0.10), e=(0.45, 0.3, -0.84)),
        K(13, None, Ly=ST_GUARD['Ly']), K(20, None, Ly=ST_RFWD['Ly']),
        K(21, (-0.04, -0.50), G=(0.06, -0.40, 1.06), b=(0.50, -0.72, -0.48), e=(0.4, 0.45, -0.8)),
        K(24, r_end, ST_RFWD, ZORN_END, hold=True),
    ]
    return 'Hema_Zornhau', keys, [('R', 10, 17, 0.07)], 24, True

def clip_zornhau_rec():
    r1 = (ST_RFWD['L'][0] - ST_GUARD['L'][0], ST_RFWD['L'][1] - ST_GUARD['L'][1])
    keys = [base_defaults(),
        K(0, (0, 0), ST_RFWD, ZORN_END),
        K(5, (0.005, 0.06), G=(0.02, -0.40, 1.0), b=(0.35, -0.85, -0.1), e=(0.3, 0.2, -0.9)),
        K(12, lerp2((0, 0), r1, 0.6), G=(-0.08, -0.32, 1.02), b=(0.15, -0.93, 0.25), e=(0, 0, -1), yaw=-12, cyaw=8, pz=0.895),
        K(18, r1, ST_GUARD, PFLUG, hold=True),
        K(4, None, Ly=ST_RFWD['Ly']), K(14, None, Ly=ST_GUARD['Ly']),
    ]
    return 'Hema_Zornhau_Rec', keys, [('R', 5, 15, 0.06)], 18, True

def _zw_core(rs, yaw_start, re):
    return [
        K(6, add2(lerp2(rs, re, 0.08), (-0.01, -0.02)), G=(-0.22, -0.24, 1.58), b=(-0.25, 0.45, 0.86), e=(0, -0.9, 0.4), yaw=yaw_start - 18),
        K(9, lerp2(rs, re, 0.2), G=(-0.31, -0.18, 1.60), b=(-0.78, 0.55, 0.28), e=(0.4, 0.8, -0.1), yaw=-22, cyaw=-12, hold=True),
        K(11, lerp2(rs, re, 0.6), G=(-0.22, -0.40, 1.60), b=(-0.35, -0.94, 0.05), e=(-0.94, 0.35, 0.0), yaw=0, cyaw=0),
        K(13, lerp2(rs, re, 0.85), G=(-0.12, -0.46, 1.58), b=(0.25, -0.97, 0.0), e=(-1, -0.25, 0.0), yaw=15, cyaw=8, cpitch=6),
        K(16, re, G=(-0.02, -0.46, 1.54), b=(0.80, -0.58, 0.08), e=(-0.6, -0.8, 0.05)),
        K(20, re, ST_ZW, ZW_END, hold=True),
    ]

def clip_zwerchhau_combo():
    r_end = (-0.16, -0.36)
    keys = [base_defaults(), K(0, (0, 0), ST_RFWD, ZORN_END)] + _zw_core((0, 0), ST_RFWD['yaw'], r_end)
    return 'Hema_Zwerchhau', keys, [('R', 7, 13, 0.06), ('L', 9, 16, 0.05)], 20, True

def clip_zwerchhau_g():
    r_end = (ST_GUARD['L'][0] - ST_ZW['L'][0], ST_GUARD['L'][1] - ST_ZW['L'][1])
    keys = [base_defaults(), K(0, (0, 0), ST_GUARD, PFLUG),
            K(3, (0, 0.01), G=(-0.15, -0.24, 1.32), b=(0.0, -0.5, 0.87), e=(0, -0.87, -0.5))] + _zw_core((0, 0), ST_GUARD['yaw'], r_end)
    keys += [K(9, None, Ly=ST_GUARD['Ly']), K(16, None, Ly=ST_ZW['Ly'])]
    return 'Hema_Zwerchhau_G', keys, [('R', 6, 14, 0.07)], 20, True

def clip_zwerchhau_rec():
    r1 = (ST_ZW['L'][0] - ST_GUARD['L'][0], ST_ZW['L'][1] - ST_GUARD['L'][1])
    keys = [base_defaults(), K(0, (0, 0), ST_ZW, ZW_END),
        K(6, lerp2((0, 0), r1, 0.15), G=(-0.05, -0.36, 1.35), b=(0.35, -0.85, 0.40), e=(0.1, 0.4, -0.9), yaw=0, cyaw=6),
        K(13, lerp2((0, 0), r1, 0.7), G=(-0.10, -0.30, 1.08), b=(0.12, -0.93, 0.33), e=(0, 0, -1), yaw=-18, cyaw=12),
        K(20, r1, ST_GUARD, PFLUG, hold=True),
        K(5, None, Ly=ST_ZW['Ly']), K(16, None, Ly=ST_GUARD['Ly']),
    ]
    return 'Hema_Zwerchhau_Rec', keys, [('R', 5, 16, 0.06)], 20, True

def _sch_core(rs, re, yaw0):
    return [
        K(7, add2(rs, (0.0, 0.02)), G=(-0.06, -0.05, 1.85), b=(0.05, 0.75, 0.65), e=(0, -0.65, 0.75), yaw=yaw0 - 6, cyaw=6, cpitch=0, neck=-3),
        K(9, add2(rs, (0.0, 0.02)), G=(-0.06, -0.03, 1.86), b=(0.05, 0.80, 0.60), e=(0, -0.6, 0.8), cpitch=-2, hold=True),
        K(12, lerp2(rs, re, 0.45), G=(-0.03, -0.33, 1.80), b=(0.02, -0.30, 0.95), e=(0, -0.95, -0.3), cpitch=4, cyaw=14),
        K(14, lerp2(rs, re, 0.8), G=(-0.01, -0.50, 1.52), b=(0.0, -0.85, 0.52), e=(0, -0.52, -0.85), cpitch=9, neck=0),
        K(15, lerp2(rs, re, 0.92), G=(-0.02, -0.52, 1.42), b=(0.0, -0.94, 0.33), e=(0, -0.33, -0.94), cpitch=11),
        K(19, re, ST_SCH, LANGORT, hold=True),
    ]

def clip_scheitel_combo():
    r_end = (ST_ZW['R'][0] - ST_SCH['R'][0], ST_ZW['R'][1] - ST_SCH['R'][1])
    keys = [base_defaults(), K(0, (0, 0), ST_ZW, ZW_END)] + _sch_core((0, 0), r_end, ST_ZW['yaw'])
    return 'Hema_Scheitelhau', keys, [('L', 6, 15, 0.07)], 19, True

def clip_scheitel_g():
    r_end = (0.0, -0.25)
    keys = [base_defaults(), K(0, (0, 0), ST_GUARD, PFLUG)] + _sch_core((0, 0), r_end, ST_GUARD['yaw'])
    return 'Hema_Scheitelhau_G', keys, [('L', 6, 13, 0.06), ('R', 12, 18, 0.05)], 19, True

def clip_scheitel_rec():
    r1 = (ST_SCH['L'][0] - ST_GUARD['L'][0], ST_SCH['L'][1] - ST_GUARD['L'][1])
    keys = [base_defaults(), K(0, (0, 0), ST_SCH, LANGORT),
        K(7, lerp2((0, 0), r1, 0.5), G=(-0.07, -0.42, 1.20), b=(0.06, -0.96, 0.27), e=(0, -0.27, -0.96)),
        K(16, r1, ST_GUARD, PFLUG, hold=True)]
    return 'Hema_Scheitelhau_Rec', keys, [('R', 4, 12, 0.04)], 16, True

def clip_stich():
    keys = [base_defaults(), K(0, (0, 0), ST_GUARD, PFLUG),
        K(4, (0.0, 0.02), G=(-0.13, -0.22, 1.04), b=(0.11, -0.90, 0.42), e=(0, 0, -1), pz=0.91),
        K(10, (-0.01, -0.24), G=(-0.05, -0.56, 1.30), b=(0.02, -0.98, 0.16), e=(0, -0.16, -0.99), yaw=-10, cyaw=18, pitch=11, cpitch=12,
          Lb=(0.12, -0.70), Ly=-4),
        K(15, (-0.01, -0.25), G=(-0.05, -0.57, 1.30), b=(0.02, -0.98, 0.16), e=(0, -0.16, -0.99), hold=True),
        K(24, (0.0, 0.0), sword=PFLUG, yaw=ST_GUARD['yaw'], cyaw=ST_GUARD['cyaw'], pitch=4, cpitch=4, pz=0.905, Lb=ST_GUARD['L'], Ly=ST_GUARD['Ly']),
        K(28, (0.0, 0.0), ST_GUARD, PFLUG, hold=True),
    ]
    return 'Hema_Stich', keys, [('L', 3, 10, 0.05), ('L', 16, 23, 0.04)], 28, True

def clip_krone():
    keys = [base_defaults(), K(0, (0, 0), ST_GUARD, PFLUG),
        K(5, (0.0, 0.03), G=(-0.10, -0.24, 1.86), b=(-0.05, 0.10, 0.99), e=(0, -1, 0.1), yaw=-18, cyaw=12, neck=-4),
        K(13, (0.0, 0.03), G=(-0.10, -0.25, 1.86), b=(-0.05, 0.12, 0.99), e=(0, -1, 0.1), hold=True),
        K(22, (0, 0), ST_GUARD, PFLUG, neck=0, hold=True)]
    return 'Hema_Krone', keys, [], 22, True

def clip_hit():
    rb = (0.0, 0.12)
    keys = [base_defaults(), K(0, (0, 0), ST_GUARD, PFLUG),
        K(3, (0.0, 0.07), G=(-0.10, -0.20, 1.10), b=(0.15, -0.85, 0.50), e=(0, 0, -1), cpitch=-7, cyaw=24, neck=-6, pz=0.915,
          lookoff=(0.25, 0, 0.12)),
        K(7, (0.0, 0.11), cpitch=-2, cyaw=18, neck=-2, lookoff=(0.05, 0, 0.03)),
        K(16, rb, ST_GUARD, PFLUG, lookoff=(0, 0, 0), neck=0, hold=True),
    ]
    return 'Hema_Hit', keys, [('R', 2, 9, 0.03), ('L', 5, 12, 0.03)], 16, True

def _dodge(name, dv, first, n=20):
    rE = dv
    keys = [base_defaults(), K(0, (0, 0), ST_GUARD, PFLUG),
        K(3, (0.0, 0.0), sword=PFLUG, pz=0.86, cpitch=6),
        K(5, (dv[0] * 0.22, dv[1] * 0.22), sword=PFLUG, pz=0.91),
        K(8, (dv[0] * 0.68, dv[1] * 0.68), sword=PFLUG, pz=0.92),
        K(11, (dv[0] * 0.96, dv[1] * 0.96), sword=PFLUG, pz=0.85, cpitch=7),
        K(n, rE, ST_GUARD, PFLUG, hold=True),
    ]
    other = 'R' if first == 'L' else 'L'
    return name, keys, [(first, 2, 10, 0.08), (other, 3, 11, 0.08)], n, True

def clip_dodge_back(): return _dodge('Hema_Dodge_Back', (0.0, 1.05), 'R')
def clip_dodge_left(): return _dodge('Hema_Dodge_Left', (0.95, 0.0), 'L')
def clip_dodge_right(): return _dodge('Hema_Dodge_Right', (-0.95, 0.0), 'R')
def clip_dodge_fwd(): return _dodge('Hema_Dodge_Fwd', (0.0, -1.1), 'L')

def clip_cast():
    one = dict(G=(-0.30, -0.02, 1.42), b=(0.18, 0.28, 0.94), e=(0, -1, 0.3))
    keys = [base_defaults(), K(0, (0, 0), ST_GUARD, PFLUG),
        K(3, None, lhw=0.0, lfo=0.0),
        K(5, (0, 0), sword=one, yaw=-30, cyaw=6),
        K(7, (0, 0), lhw=1.0, lfo=1.0, lhp=(0.10, -0.30, 1.32), lhf=(-0.2, -0.3, 0.93), lhn=(0, -1, 0.3)),
        K(9, (0, -0.02), lhp=(0.06, -0.58, 1.40), lhf=(-0.05, -0.25, 0.97), lhn=(0.05, -0.97, 0.25), cyaw=-6, yaw=-20, pitch=7, hold=True),
        K(13, (0, -0.02), lhw=1.0, lhp=(0.07, -0.52, 1.38)),
        K(19, (0, 0), lhw=0.0, lfo=0.0, sword=one, lhp=(0.0, -0.35, 1.25)),
        K(24, (0, 0), ST_GUARD, PFLUG, hold=True),
    ]
    return 'Hema_Cast', keys, [], 24, False

def clip_drink():
    low = dict(G=(-0.25, -0.17, 1.03), b=(0.12, -0.55, -0.83), e=(0.0, -0.83, 0.55))
    mid = dict(G=(-0.16, -0.24, 1.10), b=(0.10, -0.80, 0.59), e=(0, 0, -1))
    belt = dict(lhp=(0.21, -0.07, 1.03), lhf=(-0.5, -0.75, -0.3), lhn=(0.45, -0.1, -0.88))
    mouth = dict(lhp=(0.089, -0.213, 1.592), lhf=(-0.989, 0.084, 0.125), lhn=(-0.0, 0.83, -0.557))
    keys = [base_defaults(), K(0, (0, 0), ST_GUARD, PFLUG),
        K(1, None, lhw=0.0, lfl=0.0),
        K(4, (0, 0), sword=mid, lhw=1.0, lfl=0.4, lhp=(0.06, -0.20, 1.06), lhf=(-0.6, -0.6, -0.3), lhn=(0.2, 0.2, -0.95)),
        K(9, (0, 0), sword=low, cyaw=8, yaw=-22, lfl=1.0, **belt),
        K(17, (0, 0), **mouth, neck=-4),
        K(22, (0, 0), lhp=(0.094, -0.186, 1.665), lhf=(-0.995, 0.087, 0.051), lhn=(0.0, 0.507, -0.862), neck=-14, lookoff=(0, 0, 0.9), cpitch=-3),
        K(31, (0, 0), lhp=(0.094, -0.186, 1.665), neck=-14, lookoff=(0, 0, 0.9), hold=True),
        K(37, (0, 0), **belt, neck=0, lookoff=(0, 0, 0), cpitch=4, lfl=1.0, sword=low),
        K(43, (0, 0), sword=mid, lhw=1.0, lfl=0.4, lhp=(0.06, -0.20, 1.06), lhf=(-0.6, -0.6, -0.3), lhn=(0.2, 0.2, -0.95)),
        K(46, (0, 0), lhw=0.0, lfl=0.0),
        K(52, (0, 0), ST_GUARD, PFLUG, hold=True),
    ]
    return 'Hema_Drink', keys, [], 52, False

def clip_interact():
    side = dict(G=(-0.36, 0.02, 0.95), b=(-0.08, 0.55, -0.83), e=(0, -0.83, -0.55))
    mid = dict(G=(-0.18, -0.20, 1.12), b=(0.10, -0.75, 0.65), e=(0, 0, -1))
    keys = [base_defaults(), K(0, (0, 0), ST_GUARD, PFLUG),
        K(1, None, lhw=0.0, lfo=0.0),
        K(4, (0, -0.02), sword=mid, lhw=1.0, lfo=0.3, lhp=(0.08, -0.25, 1.05), lhf=(0.0, -0.8, -0.6), lhn=(0, 0.6, -0.8)),
        K(8, (0, -0.06), sword=side, yaw=-10, cyaw=4),
        K(12, (0.0, -0.12), sword=side, pz=0.56, pitch=26, cpitch=16, lfo=0.6,
          lhp=(0.08, -0.44, 0.56), lhf=(0.0, -0.6, -0.8), lhn=(0, 0.8, -0.6), lookoff=(0, 1.7, -1.25)),
        K(15, (0.0, -0.12), lhp=(0.08, -0.45, 0.53), lfo=0.3, hold=True),
        K(21, (0.0, -0.10), sword=side, pz=0.66, lhp=(0.08, -0.44, 0.74), lhf=(0.0, -0.9, 0.3), lhn=(0, 0.3, -0.95), pitch=22, cpitch=14),
        K(27, (0, -0.03), pz=0.88, pitch=6, cpitch=6, lfo=0.2, lhp=(0.06, -0.28, 1.04), lhf=(0.0, -0.8, -0.6), lhn=(0, 0.6, -0.8), lookoff=(0, 0, 0), sword=mid),
        K(30, (0, -0.01), lhw=0.0, lfo=0.0),
        K(34, (0, 0), ST_GUARD, PFLUG, hold=True),
    ]
    return 'Hema_Interact', keys, [], 34, True

ALL = [clip_guard_idle, clip_zornhau, clip_zornhau_rec, clip_zwerchhau_combo, clip_zwerchhau_g, clip_zwerchhau_rec,
       clip_scheitel_combo, clip_scheitel_g, clip_scheitel_rec, clip_stich, clip_krone, clip_hit,
       clip_dodge_back, clip_dodge_left, clip_dodge_right, clip_dodge_fwd, clip_cast, clip_drink, clip_interact]
