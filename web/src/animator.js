import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as skClone } from 'three/examples/jsm/utils/SkeletonUtils.js';

// ---------- loading embedded GLB data (works from file:// inside the Android WebView) ----------
function b64ToBuf(b64) {
  const bin = atob(b64); const u = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
  return u.buffer;
}
const cache = {};
export function loadGLB(key) {
  if (cache[key]) return cache[key];
  cache[key] = new Promise((res, rej) => {
    const b = window.__GLB && window.__GLB[key];
    if (!b) { rej(new Error('missing model ' + key)); return; }
    new GLTFLoader().parse(b64ToBuf(b), '', res, rej);
  });
  return cache[key];
}
export function cloneModel(gltf) { return skClone(gltf.scene); }

// fix PBR materials for a scene without HDR environment, enable shadows
export function prepareModel(root, opts = {}) {
  root.traverse(o => {
    if (o.isMesh || o.isSkinnedMesh) {
      o.castShadow = true; o.receiveShadow = false; o.frustumCulled = false;
      const ms = Array.isArray(o.material) ? o.material : [o.material];
      for (const m of ms) {
        if (!m) continue;
        if (m.metalness > 0.5) { m.metalness = 0.55; m.roughness = Math.max(0.3, m.roughness); }
        else { m.metalness = 0; }
        if (m.map) m.map.anisotropy = 4;
      }
    }
  });
  if (opts.scale) root.scale.setScalar(opts.scale);
  return root;
}
export function findBone(root, name) { let b = null; root.traverse(o => { if (!b && o.isBone && o.name === name) b = o; }); return b; }

// attach an object to a bone so that it keeps a given offset in the model's bind pose (model space)
export function attachToBone(root, boneName, obj, modelPos, modelQuat = new THREE.Quaternion()) {
  const bone = findBone(root, boneName); if (!bone) return null;
  root.updateMatrixWorld(true);
  const wp = root.localToWorld(modelPos.clone());
  const rq = new THREE.Quaternion(); root.getWorldQuaternion(rq);
  const bq = new THREE.Quaternion(); bone.getWorldQuaternion(bq);
  const ws = new THREE.Vector3(); bone.getWorldScale(ws);
  bone.add(obj);
  obj.position.copy(bone.worldToLocal(wp));
  obj.quaternion.copy(bq.invert().multiply(rq).multiply(modelQuat));
  obj.scale.divide(ws);
  return bone;
}

const LEG_BONES = /^(root|pelvis|thigh_|calf_|foot_|ball_)/;
function split(clip, legs, name) {
  return new THREE.AnimationClip(name, clip.duration, clip.tracks.filter(t => LEG_BONES.test(t.name.split('.')[0]) === legs));
}

// ---------- layered animator: locomotion blend (legs/upper split) + one-shot actions ----------
export class Animator {
  constructor(root, clips, cfg = {}) {
    this.mixer = new THREE.AnimationMixer(root);
    this.C = {}; for (const c of clips) this.C[c.name] = c;
    const C = this.C;
    const idle = cfg.idle || 'Hema_Guard';
    C._walkLegs = split(C.Walk, true, '_walkLegs');
    C._idleUpper = split(C[idle], false, '_idleUpper');
    this.L = {
      idle: this.mixer.clipAction(C[idle]),
      walkL: this.mixer.clipAction(C._walkLegs),
      walkU: this.mixer.clipAction(C._idleUpper),
      jog: this.mixer.clipAction(C[cfg.run || 'Jog']),
    };
    for (const a of Object.values(this.L)) { a.play(); a.setEffectiveWeight(0); }
    this.w = { idle: 1, walk: 0, jog: 0 };
    this.walkSpeed = cfg.walkSpeed || 1.6; this.jogSpeed = cfg.jogSpeed || 4.2;
    this.one = null; this.prev = [];
  }
  has(name) { return !!this.C[name]; }
  play(name, o = {}) {
    const clip = this.C[name]; if (!clip) return null;
    if (this.one) { this.one.fadeOutT = o.fadeIn ?? 0.1; this.prev.push(this.one); }
    const a = this.mixer.clipAction(clip);
    // a clip may still be fading out from a previous play: use a fresh clone in that case
    let act = a;
    if (this.prev.some(p => p.action === a)) act = this.mixer.clipAction(clip.clone());
    act.reset(); act.setLoop(o.loop ? THREE.LoopRepeat : THREE.LoopOnce, Infinity); act.clampWhenFinished = true;
    act.timeScale = o.speed || 1; act.setEffectiveWeight(0); act.play();
    if (o.start) act.time = o.start * clip.duration;
    this.one = { action: act, w: 0, fadeIn: o.fadeIn ?? 0.1, fadeOut: o.fadeOut ?? 0.25, hold: !!o.hold, releasing: false, auto: o.auto !== false };
    return act;
  }
  release(fade) { if (this.one && !this.one.hold) { this.one.releasing = true; if (fade) this.one.fadeOut = fade; } }
  stopAll() {
    for (const p of [this.one, ...this.prev]) if (p) { p.action.stop(); }
    this.one = null; this.prev = [];
  }
  isPlaying(name) { return this.one && this.one.action.getClip().name.startsWith(name) && !this.one.releasing; }
  update(dt, speed) {
    // locomotion targets
    const jogK = THREE.MathUtils.clamp((speed - 3.2) / 1.8, 0, 1);
    const walkK = THREE.MathUtils.clamp(speed / 1.2, 0, 1) * (1 - jogK);
    const t = { idle: 1 - walkK - jogK, walk: walkK, jog: jogK };
    const k = Math.min(1, dt * 10);
    for (const key in t) this.w[key] += (t[key] - this.w[key]) * k;
    this.L.walkL.timeScale = THREE.MathUtils.clamp(speed / this.walkSpeed, 0.6, 2.2);
    this.L.jog.timeScale = THREE.MathUtils.clamp(speed / this.jogSpeed, 0.7, 1.8);
    // one-shots
    let oneW = 0;
    for (let i = this.prev.length - 1; i >= 0; i--) {
      const p = this.prev[i];
      p.w -= dt / Math.max(0.01, p.fadeOutT);
      if (p.w <= 0) { p.action.stop(); this.prev.splice(i, 1); continue; }
      p.action.setEffectiveWeight(p.w); oneW += p.w;
    }
    if (this.one) {
      const o = this.one, a = o.action, clip = a.getClip();
      if (o.auto && !o.hold && a.loop === THREE.LoopOnce && a.time >= clip.duration - 0.001 - o.fadeOut * a.timeScale) o.releasing = true;
      if (o.releasing) o.w -= dt / Math.max(0.01, o.fadeOut); else o.w += dt / Math.max(0.01, o.fadeIn);
      o.w = THREE.MathUtils.clamp(o.w, 0, 1);
      if (o.releasing && o.w <= 0) { a.stop(); this.one = null; }
      else { const ww = Math.min(o.w, 1 - Math.min(1, oneW)); a.setEffectiveWeight(ww); oneW += ww; }
    }
    oneW = Math.min(1, oneW);
    const s = 1 - oneW;
    this.L.idle.setEffectiveWeight(this.w.idle * s);
    this.L.walkL.setEffectiveWeight(this.w.walk * s);
    this.L.walkU.setEffectiveWeight(this.w.walk * s);
    this.L.jog.setEffectiveWeight(this.w.jog * s);
    this.mixer.update(dt);
  }
}

// keep only rotations (+ root/pelvis translation) so clips retarget cleanly onto other bodies (e.g. female skeleton)
export function cleanClips(anims) {
  return anims.map(c => new THREE.AnimationClip(c.name, c.duration, c.tracks.filter(t => {
    const i = t.name.lastIndexOf('.'); const b = t.name.slice(0, i), p = t.name.slice(i + 1);
    if (p === 'scale' || b === 'weapon_r') return false;
    if (p === 'position') return b === 'root' || b === 'pelvis';
    return true;
  })));
}

function ancestorName(o, stop) { const n = []; while (o && o !== stop) { n.push(o.name); o = o.parent; } return n.join('|'); }

// build an independent animated character from a template GLB
// opts: { scale, idle, hair:[names to show], tint:{outfit,hair,skin}, eyeGlow, swordGlow, hideSword }
export function makeRig(gltf, clips, opts = {}) {
  const root = skClone(gltf.scene);
  const scale = opts.scale || 1.12;
  prepareModel(root, { scale });
  const mats = []; let eyes = null, steel = null;
  root.traverse(o => {
    if (!o.isMesh) return;
    const path = ancestorName(o, root);
    if (/Hair_/.test(path)) {
      const hn = (path.match(/Hair_[A-Za-z]+/) || [''])[0];
      o.visible = (opts.hair || []).includes(hn);
    }
    if (/Sword/.test(path) && opts.hideSword) o.visible = false;
    const m = o.material.clone(); o.material = m; mats.push(m);
    const n = m.name || '';
    const t = opts.tint || {};
    if (/Hair/.test(n) && t.hair !== undefined) m.color.set(t.hair);
    else if (/(Ranger|Peasant)/.test(n) && t.outfit !== undefined) m.color.set(t.outfit);
    else if (/(Superhero|Regular)/.test(n) && t.skin !== undefined) m.color.set(t.skin);
    if (/Eye/.test(n)) eyes = m;
    if (/M_Steel$/.test(n)) steel = m;
  });
  if (eyes && opts.eyeGlow) { eyes.emissive.set(opts.eyeGlow); eyes.emissiveIntensity = 1.5; }
  if (steel && opts.swordGlow) { steel.emissive.set(opts.swordGlow); steel.color.set(0x4a3030); }
  const anim = new Animator(root, clips, { idle: opts.idle || 'Idle', walkSpeed: 1.5 * scale, jogSpeed: 4.0 * scale });
  for (const m of mats) m.userData.baseE = m.emissive ? m.emissive.getHex() : 0;
  return { kind: 'rig', group: root, anim, mats, scale };
}

// four-legged animal (CC-BY glTF sample fox): blends Survey / Walk / Run by speed, procedural lunge for bites
export function makeQuadRig(gltf, opts = {}) {
  const root = new THREE.Group();
  const model = skClone(gltf.scene); root.add(model);
  const box = new THREE.Box3().setFromObject(model); const size = new THREE.Vector3(); box.getSize(size);
  const s = (opts.length || 1.1) / Math.max(size.x, size.z);
  model.scale.setScalar(s); model.position.y = -box.min.y * s;
  const mats = [];
  model.traverse(o => {
    if (o.isMesh) {
      o.castShadow = true; o.frustumCulled = false;
      const m = o.material.clone(); o.material = m; m.metalness = 0; mats.push(m);
      if (opts.color !== undefined) { m.map = null; m.color.set(opts.color); m.needsUpdate = true; }
      if (opts.tint !== undefined) m.color.multiply(new THREE.Color(opts.tint));
    }
  });
  for (const m of mats) m.userData.baseE = m.emissive.getHex();
  const mixer = new THREE.AnimationMixer(model);
  const get = n => gltf.animations.find(a => a.name === n);
  const A = { idle: mixer.clipAction(get('Survey')), walk: mixer.clipAction(get('Walk')), run: mixer.clipAction(get('Run')) };
  for (const a of Object.values(A)) { a.play(); a.setEffectiveWeight(0); }
  const w = { idle: 1, walk: 0, run: 0 };
  const rig = {
    kind: 'qrig', group: root, mats, scale: s,
    update(dt, spd, attackT = -1) {
      const runK = THREE.MathUtils.clamp((spd - 3) / 2.5, 0, 1), walkK = THREE.MathUtils.clamp(spd / 1.2, 0, 1) * (1 - runK);
      const t = { idle: 1 - walkK - runK, walk: walkK, run: runK }, k = Math.min(1, dt * 8);
      for (const key in t) { w[key] += (t[key] - w[key]) * k; A[key].setEffectiveWeight(w[key]); }
      A.walk.timeScale = THREE.MathUtils.clamp(spd / 1.6, 0.6, 2); A.run.timeScale = THREE.MathUtils.clamp(spd / 5, 0.7, 1.6);
      mixer.update(dt);
      if (attackT >= 0) { const a = attackT < 0.5 ? attackT / 0.5 : 1 - (attackT - 0.5) / 0.5; model.rotation.x = -0.3 * a; model.position.z = 0.45 * a; }
      else { model.rotation.x = 0; model.position.z = 0; }
    },
  };
  return rig;
}
