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

// ---------- PBR materials: environment lighting (scaled with day/night) ----------
const ENV = { mats: new Set(), k: 1 };
export function setEnvIntensity(v) {
  if (Math.abs(v - ENV.k) < 0.02) return;
  ENV.k = v; for (const m of ENV.mats) m.envMapIntensity = v * (m.userData.envBase ?? 1);
}
function regEnv(m, base = 1) { m.userData.envBase = base; m.envMapIntensity = ENV.k * base; ENV.mats.add(m); }

export function prepareModel(root, opts = {}) {
  root.traverse(o => {
    if (!(o.isMesh || o.isSkinnedMesh)) return;
    o.castShadow = true; o.receiveShadow = false; o.frustumCulled = false;
    const ms = Array.isArray(o.material) ? o.material : [o.material];
    for (const m of ms) {
      if (!m) continue;
      const n = m.name || '';
      if (/Steel|Iron|Brass/.test(n)) { m.metalness = Math.min(0.95, m.metalness); m.roughness = Math.max(0.22, m.roughness); regEnv(m, 1.2); }
      else { if (m.metalness < 0.5) m.metalness = 0; regEnv(m, /Skin|Superhero|Regular/.test(n) ? 0.55 : 0.7); }
      if (/Eye/.test(n)) m.roughness = 0.12;
      if (/HeroHair$/.test(n)) { m.alphaTest = 0.5; m.transparent = false; m.side = THREE.DoubleSide; m.roughness = 0.6; }
      if (/Glass/.test(n)) { m.transparent = true; m.depthWrite = false; m.roughness = 0.05; }
      if (m.map) m.map.anisotropy = 4;
    }
  });
  if (opts.scale) root.scale.setScalar(opts.scale);
  return root;
}
export function findBone(root, name) { let b = null; root.traverse(o => { if (!b && o.isBone && o.name === name) b = o; }); return b; }
export function findNode(root, name) { let b = null; root.traverse(o => { if (!b && o.name === name) b = o; }); return b; }

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

// keep rotations; translations only for root (root motion) and pelvis; drop scale and the flask bone
export function cleanClips(anims) {
  return anims.map(c => new THREE.AnimationClip(c.name, c.duration, c.tracks.filter(t => {
    const i = t.name.lastIndexOf('.'); const b = t.name.slice(0, i), p = t.name.slice(i + 1);
    if (p === 'scale' || b === 'flask_l') return false;   // weapon_r rotation is kept: the sword pivots in the hand
    if (p === 'position') return b === 'root' || b === 'pelvis';
    return true;
  })));
}

/**
 * Animator: phase-synchronised locomotion (idle / walk / run / sprint, no foot sliding) blended under
 * one-shot actions with cross-fades; root motion extracted from the clips' root bone track.
 */
export class Animator {
  constructor(root, clips, cfg = {}) {
    this.root = root;
    this.mixer = new THREE.AnimationMixer(root);
    this.C = {}; this.RT = {};
    // drop tracks for nodes this model does not have (e.g. the sword bone on unarmed villagers)
    const names = new Set(); root.traverse(o => names.add(o.name));
    clips = clips.map(c => {
      const tr = c.tracks.filter(t => names.has(t.name.slice(0, t.name.lastIndexOf('.'))));
      return tr.length === c.tracks.length ? c : new THREE.AnimationClip(c.name, c.duration, tr);
    });
    for (const c of clips) {
      const rt = c.tracks.find(t => t.name === 'root.position');
      if (rt) this.RT[c.name] = rt;
      this.C[c.name] = rt ? new THREE.AnimationClip(c.name, c.duration, c.tracks.filter(t => t !== rt)) : c;
    }
    const L = Object.assign({ idle: 'Hema_Guard', walk: 'Guard_Walk', run: 'Run_Carry', sprint: 'Sprint_Carry' }, cfg.loco || {});
    this.loco = {};
    for (const k of ['idle', 'walk', 'run', 'sprint']) {
      const name = L[k]; if (!name || !this.C[name]) continue;
      const a = this.mixer.clipAction(this.C[name]); a.play(); a.setEffectiveWeight(k === 'idle' ? 1 : 0);
      if (k !== 'idle') a.timeScale = 0;
      this.loco[k] = a;
    }
    this.dist = Object.assign({ walk: 1.30, run: 4.91, sprint: 5.5 }, cfg.dist || {});
    this.off = Object.assign({ walk: 0, run: 0.964, sprint: 0.85 }, cfg.off || {});
    this.w = { idle: 1, walk: 0, run: 0, sprint: 0 };
    this.phase = Math.random();
    this.one = null; this.prev = [];
    this.rm = new THREE.Vector3();
    this.timeScale = 1;
  }
  has(n) { return !!this.C[n]; }
  duration(n) { return this.C[n] ? this.C[n].duration : 0; }
  play(name, o = {}) {
    const clip = this.C[name]; if (!clip) return null;
    if (this.one) { this.one.fadeOutT = o.fadeIn ?? 0.1; this.prev.push(this.one); }
    let act = this.mixer.clipAction(clip);
    if (this.prev.some(p => p.action === act)) act = this.mixer.clipAction(clip.clone());
    act.reset(); act.setLoop(o.loop ? THREE.LoopRepeat : THREE.LoopOnce, Infinity); act.clampWhenFinished = true;
    act.timeScale = o.speed || 1; act.play();
    if (o.start) act.time = o.start * clip.duration;
    const rt = this.RT[name];
    const interp = rt ? rt.createInterpolant() : null;
    const last = interp ? Array.from(interp.evaluate(act.time)) : null;
    const instant = (o.fadeIn ?? 0.1) <= 0;
    act.setEffectiveWeight(instant ? 1 : 0);
    this.one = { name, action: act, w: instant ? 1 : 0, fadeIn: o.fadeIn ?? 0.1, fadeOut: o.fadeOut ?? 0.25,
      hold: !!o.hold, releasing: false, auto: o.auto !== false, interp, last };
    return this.one;
  }
  release(fade) { if (this.one && !this.one.hold) { this.one.releasing = true; if (fade !== undefined) this.one.fadeOut = fade; } }
  stopAll() { for (const p of [this.one, ...this.prev]) if (p) p.action.stop(); this.one = null; this.prev = []; }
  current() { return this.one && !this.one.releasing ? this.one.name : null; }
  time() { return this.one ? this.one.action.time : 0; }
  progress() { if (!this.one) return 1; const a = this.one.action; return a.time / a.getClip().duration; }
  isPlaying(name) { return !!(this.one && this.one.name === name && !this.one.releasing); }
  update(dt, speed) {
    const ss = THREE.MathUtils.smoothstep, s = speed;
    const hasS = !!this.loco.sprint;
    const wWalk = ss(s, 0.12, 0.8) * (1 - ss(s, 1.5, 3.4));
    const wRun = ss(s, 1.5, 3.4) * (hasS ? 1 - ss(s, 5.9, 7.6) : 1);
    const wSpr = hasS ? ss(s, 5.9, 7.6) : 0;
    const t = { idle: Math.max(0, 1 - wWalk - wRun - wSpr), walk: wWalk, run: wRun, sprint: wSpr };
    const k = Math.min(1, dt * 9);
    for (const key in t) this.w[key] += (t[key] - this.w[key]) * k;
    const mw = this.w.walk + this.w.run + this.w.sprint;
    if (mw > 0.001 && s > 0.01) {
      const dist = (this.w.walk * this.dist.walk + this.w.run * this.dist.run + this.w.sprint * this.dist.sprint) / mw;
      this.phase = (this.phase + s * dt * this.timeScale / dist) % 1;
    }
    for (const key of ['walk', 'run', 'sprint']) {
      const a = this.loco[key]; if (a) a.time = ((this.phase + this.off[key]) % 1) * a.getClip().duration;
    }
    // one-shot actions with cross-fades
    let oneW = 0;
    for (let i = this.prev.length - 1; i >= 0; i--) {
      const p = this.prev[i];
      p.w -= dt / Math.max(0.01, p.fadeOutT);
      if (p.w <= 0) { p.action.stop(); this.mixer.uncacheAction(p.action.getClip()); this.prev.splice(i, 1); continue; }
      p.action.setEffectiveWeight(p.w); oneW += p.w;
    }
    if (this.one) {
      const o = this.one, a = o.action, clip = a.getClip();
      if (o.auto && !o.hold && a.time >= clip.duration - 0.001 - o.fadeOut * a.timeScale) o.releasing = true;
      if (o.releasing) o.w -= dt / Math.max(0.01, o.fadeOut); else o.w += dt / Math.max(0.01, o.fadeIn);
      o.w = THREE.MathUtils.clamp(o.w, 0, 1);
      if (o.releasing && o.w <= 0) { a.stop(); this.one = null; }
      else { const ww = Math.min(o.w, 1 - Math.min(1, oneW)); a.setEffectiveWeight(ww); oneW += ww; }
    }
    oneW = Math.min(1, oneW);
    const sc = 1 - oneW;
    for (const key in this.loco) this.loco[key].setEffectiveWeight(this.w[key] * sc);
    this.mixer.update(dt * this.timeScale);
    // root motion (model space): weighted sum of the one-shots' root travel this frame
    this.rm.set(0, 0, 0);
    for (const p of [this.one, ...this.prev]) {
      if (!p || !p.interp) continue;
      const v = p.interp.evaluate(p.action.time), wgt = p.action.getEffectiveWeight();
      this.rm.x += (v[0] - p.last[0]) * wgt; this.rm.z += (v[2] - p.last[2]) * wgt;
      p.last[0] = v[0]; p.last[1] = v[1]; p.last[2] = v[2];
    }
    return this.rm;
  }
}

/** releases the sword from the hand: falls, tumbles and comes to rest flat on the ground */
export class PropDrop {
  constructor(root, boneName) { this.root = root; this.bone = findBone(root, boneName); this.active = false; }
  start() {
    if (!this.bone) return;
    this.root.updateMatrixWorld(true);
    this.m = this.bone.matrixWorld.clone();
    this.p = new THREE.Vector3(); this.q = new THREE.Quaternion(); this.s = new THREE.Vector3();
    this.m.decompose(this.p, this.q, this.s);
    const blade = new THREE.Vector3(0, 1, 0).applyQuaternion(this.q); blade.y = 0;
    if (blade.lengthSq() < 1e-4) blade.set(0, 0, 1);
    blade.normalize();
    const X = new THREE.Vector3(0, 1, 0), Y = blade, Z = new THREE.Vector3().crossVectors(X, Y);
    this.qEnd = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(X, Y, Z));
    this.q0 = this.q.clone();
    this.v = new THREE.Vector3((Math.random() - 0.5) * 0.6, 0.6, (Math.random() - 0.5) * 0.6);
    this.t = 0; this.active = true; this.rest = false;
  }
  stop() { this.active = false; }
  update(dt, groundY) {
    if (!this.active || !this.bone) return;
    this.t += dt;
    if (!this.rest) {
      this.v.y -= 9.8 * dt; this.p.addScaledVector(this.v, dt);
      const floor = groundY + 0.035 * this.s.y;
      if (this.p.y <= floor) { this.p.y = floor; this.v.multiplyScalar(0.25); this.v.y = Math.abs(this.v.y) * 0.2; if (this.t > 0.35) this.rest = true; }
    }
    const k = Math.min(1, this.t / 0.55);
    this.q.copy(this.q0).slerp(this.qEnd, k * k * (3 - 2 * k));
    const world = new THREE.Matrix4().compose(this.p, this.q, this.s);
    this.root.updateMatrixWorld(true);
    const parent = this.bone.parent;
    const local = new THREE.Matrix4().copy(parent.matrixWorld).invert().multiply(world);
    local.decompose(this.bone.position, this.bone.quaternion, this.bone.scale);
  }
}

function ancestorName(o, stop) { const n = []; while (o && o !== stop) { n.push(o.name); o = o.parent; } return n.join('|'); }

// build an independent animated character from a template GLB
// opts: { scale, armed, hair:[names to show], tint:{outfit,hair,skin}, eyeGlow, swordGlow, hideSword }
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
    if (/Flask/.test(path)) o.visible = false;
    const m = o.material.clone(); o.material = m; mats.push(m);
    regEnv(m, m.userData.envBase ?? 0.7);
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
  const armed = opts.armed !== undefined ? opts.armed : !opts.hideSword && !!findBone(root, 'weapon_r');
  const loco = armed ? {} : { idle: 'Idle', walk: 'Walk', run: 'Jog', sprint: null };
  const anim = new Animator(root, clips, { loco, dist: armed ? {} : { run: 4.91 }, off: armed ? {} : { run: 0.964 } });
  for (const m of mats) m.userData.baseE = m.emissive ? m.emissive.getHex() : 0;
  const drop = armed ? new PropDrop(root, 'weapon_r') : null;
  return { kind: 'rig', group: root, anim, mats, scale, armed, drop };
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
