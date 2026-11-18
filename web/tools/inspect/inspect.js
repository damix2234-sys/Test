// QA viewer: renders a character GLB at an exact clip time from any angle (driven from Playwright).
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { loadGLB, cloneModel, prepareModel, cleanClips, findBone } from '../../src/animator.js';

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setSize(window.innerWidth, window.innerHeight); renderer.setPixelRatio(1);
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene(); scene.background = new THREE.Color(0x9aa4ad);
const pm = new THREE.PMREMGenerator(renderer); scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
scene.add(new THREE.HemisphereLight(0xdde6ff, 0x554433, 1.1));
const sun = new THREE.DirectionalLight(0xfff2e0, 2.0); sun.position.set(3, 6, 4); scene.add(sun);
const ground = new THREE.Mesh(new THREE.CircleGeometry(4, 48), new THREE.MeshStandardMaterial({ color: 0x6b6f55, roughness: 1 }));
ground.rotation.x = -Math.PI / 2; scene.add(ground);
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.05, 50);
let model = null, mixer = null, clips = {}, gltfRef = null;
window.setup = async (key) => {
  const g = await loadGLB(key); gltfRef = g;
  if (model) scene.remove(model);
  model = prepareModel(cloneModel(g)); scene.add(model);
  model.traverse(o => { if (/Flask|Glass|Potion|Cork/.test(o.name) || (o.material && /Glass|Potion|Cork/.test(o.material.name))) o.visible = false; });
  mixer = new THREE.AnimationMixer(model);
  const src = key === 'hero' ? g.animations : (await loadGLB('hero')).animations;
  clips = {}; for (const c of cleanClips(src)) clips[c.name] = c;
  return Object.keys(clips);
};
window.pose = (name, t) => {
  mixer.stopAllAction();
  const c = clips[name]; if (!c) return false;
  const a = mixer.clipAction(c); a.reset(); a.play(); a.time = Math.min(t, c.duration - 1e-4); a.setEffectiveWeight(1);
  mixer.update(0);
  const r = findBone(model, 'root'); if (r) { r.position.x = 0; r.position.y = 0; }
  model.updateMatrixWorld(true);
  return c.duration;
};
window.view = (yawDeg, pitchDeg = 8, dist = 2.2, ty = 1.25, fov = 35) => {
  const y = yawDeg * Math.PI / 180, p = pitchDeg * Math.PI / 180;
  camera.fov = fov; camera.updateProjectionMatrix();
  // centre on the chest of the posed model
  const sp = findBone(model, 'spine_03'); const c = new THREE.Vector3(0, ty, 0);
  if (sp) { sp.getWorldPosition(c); c.y = ty; }
  camera.position.set(c.x + Math.sin(y) * Math.cos(p) * dist, c.y + Math.sin(p) * dist, c.z + Math.cos(y) * Math.cos(p) * dist);
  camera.lookAt(c); renderer.render(scene, camera);
  return true;
};
window.ready = true;
