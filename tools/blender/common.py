import bpy, bmesh, math, random
from mathutils import Vector, Matrix, Euler, Quaternion
import os
# working folder with x/ (extracted CC0 asset packs) and out/ (results); override with KRONIKI_WORK
SC=os.environ.get('KRONIKI_WORK', os.path.join(os.path.dirname(os.path.abspath(__file__)), 'work')).rstrip('/')+'/'
X=SC+'x/'
OUT=SC+'out/'
BASE=X+'Universal Base Characters[Standard]/Base Characters/Godot - UE/'
OUTF=X+'Modular Character Outfits - Fantasy[Standard]/Exports/glTF (Godot-Unreal)/'

def imp(path):
    before=set(bpy.data.objects)
    bpy.ops.import_scene.gltf(filepath=path)
    return [o for o in bpy.data.objects if o not in before]

def setup_render(w=700,h=1000,samples=24):
    sc=bpy.context.scene
    sc.render.engine='CYCLES'; sc.cycles.device='CPU'; sc.cycles.samples=samples
    try: sc.cycles.use_denoising=True
    except: pass
    sc.render.resolution_x=w; sc.render.resolution_y=h; sc.render.film_transparent=False
    wd=bpy.data.worlds.new('W'); sc.world=wd; wd.use_nodes=True
    bg=wd.node_tree.nodes['Background']; bg.inputs[0].default_value=(0.55,0.55,0.58,1); bg.inputs[1].default_value=0.6
    for name,rot,en in [('Key',(50,0,-35),3.5),('Rim',(60,0,150),2.0),('Fill',(70,0,40),0.8)]:
        l=bpy.data.lights.new(name,'SUN'); l.energy=en
        o=bpy.data.objects.new(name,l); o.rotation_euler=[math.radians(a) for a in rot]; sc.collection.objects.link(o)

def camera(loc,target,lens=50):
    sc=bpy.context.scene
    c=bpy.data.cameras.new('Cam'); c.lens=lens
    o=bpy.data.objects.new('Cam',c); sc.collection.objects.link(o); o.location=loc
    d=Vector(target)-Vector(loc); o.rotation_euler=d.to_track_quat('-Z','Y').to_euler()
    sc.camera=o; return o

def render(path):
    bpy.context.scene.render.filepath=path
    bpy.ops.render.render(write_still=True)

def decimate_heavy(limit=2500, ratio=0.45, skip=()):
    for o in list(bpy.data.objects):
        if o.type!='MESH' or o.name in skip: continue
        n=len(o.data.polygons)
        if n<=limit: continue
        bpy.context.view_layer.objects.active=o
        for oo in bpy.context.selected_objects: oo.select_set(False)
        o.select_set(True)
        md=o.modifiers.new('Dec','DECIMATE'); md.ratio=max(ratio, limit/n*0.9) if n<limit*2 else ratio
        while o.modifiers[0].name!='Dec': bpy.ops.object.modifier_move_up(modifier='Dec')
        bpy.ops.object.modifier_apply(modifier='Dec')
        print('decimated',o.name,n,'->',len(o.data.polygons))
