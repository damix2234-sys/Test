import sys; sys.path.insert(0, '/tmp/claude-0/-home-user-Test/f99a113e-eb26-5643-ae8a-066cde7aded7/scratchpad/bl')
from rig2 import *
import rig2
import os
HAIR=X+'Universal Base Characters[Standard]/Hairstyles/Rigged to Head Bone/glTF (Godot -Unreal)/'

def attach(arm, path, keep=None):
    new=imp(path); out=[]
    for o in new:
        if o.type=='MESH' and not o.name.startswith('Icosphere') and (keep is None or any(k in o.name for k in keep)):
            mw=o.matrix_world.copy(); o.parent=arm; o.matrix_world=mw
            for md in o.modifiers:
                if md.type=='ARMATURE': md.object=arm
            out.append(o)
    for o in new:
        if o not in out: bpy.data.objects.remove(o)
    return out

def head_only(body, zcut):
    bm=bmesh.new(); bm.from_mesh(body.data)
    kill=[v for v in bm.verts if (body.matrix_world@v.co).z < zcut]
    bmesh.ops.delete(bm, geom=kill, context='VERTS'); bm.to_mesh(body.data); bm.free()

def build(name, base, bodyname, zcut, outfit_files, hair_files, sword=False):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    new=imp(BASE+base)
    arm=[o for o in new if o.type=='ARMATURE'][0]; arm.name='NPC'
    for o in new:
        if o.name.startswith('Icosphere'): bpy.data.objects.remove(o)
    body=bpy.data.objects[bodyname]; head_only(body, zcut); body.name='Head'
    for f,keep in outfit_files: attach(arm, OUTF+f, keep)
    for h in hair_files:
        for o in attach(arm, HAIR+h+'.gltf'): o.name=h
    if sword:
        compute_edge(arm)
        build_sword(arm, steel_col=(0.55, 0.55, 0.57))
    decimate_heavy(2200,0.4,skip=('Sword',))
    for im in bpy.data.images:
        if im.size[0]>1024: im.scale(1024,1024)
    for o in bpy.data.objects:
        if o.type=='MESH':
            while len(o.data.uv_layers)>1: o.data.uv_layers.remove(o.data.uv_layers[1])
    print(name, 'tris', sum(len(o.data.polygons) for o in bpy.data.objects if o.type=='MESH'))
    bpy.ops.export_scene.gltf(filepath=OUT+name+'.glb', export_format='GLB', export_animations=False,
        export_image_format='JPEG', export_jpeg_quality=82, export_yup=True, export_def_bones=True)
    print(name,'MB',os.path.getsize(OUT+name+'.glb')/1e6)
    if '--render' in sys.argv:
        setup_render(400,600,8); camera((1.0,-2.6,1.4),(0,0,1.0),40); render(OUT+'npc_'+name+'.png')

build('npc_bandit','Superhero_Male_FullBody.gltf','SuperHero_Male',1.50,[('Outfits/Male_Ranger.gltf',None)],[],sword=True)
build('npc_man','Superhero_Male_FullBody.gltf','SuperHero_Male',1.50,[('Outfits/Male_Peasant.gltf',None)],['Hair_SimpleParted','Hair_Buzzed','Hair_Beard'])
build('npc_woman','Superhero_Female_FullBody.gltf','Superhero_Female',1.42,[('Outfits/Female_Peasant.gltf',None)],['Hair_Long','Hair_Buns'])
