import * as THREE from 'three';
import { buildWorld, heightAt, LOC, forestness, windowMat, glowMats, WORLD_HALF } from './world.js';
import { makeHumanoid, makeQuad, animHumanoid, animQuad } from './characters.js';
import { SFX, initAudio, musicTick, setMusic } from './audio.js';

// ================= utilities =================
const $ = id => document.getElementById(id);
const rand = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
function angDiff(a, b) { let d = (a - b) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return d; }
function turnTo(cur, target, maxStep) { const d = angDiff(target, cur); return cur + clamp(d, -maxStep, maxStep); }
const dist2 = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);

const DAY_LEN = 480;
const SAVE_KEY = 'kroniki_wrzosu_v1';
const SWORDS = [{ name: 'Zardzewiały miecz', dmg: 11 }, { name: 'Stalowy miecz', dmg: 19, price: 250 }, { name: 'Runiczny miecz', dmg: 32, price: 900 }];
const ARMORS = [{ name: 'Skórzana kurta', mul: 1 }, { name: 'Kolczuga', mul: 0.72, price: 320 }, { name: 'Zbroja płytowa', mul: 0.5, price: 1100 }];
const STAT_COST = [100, 250, 450, 750, 1100];
const STAT_INFO = {
  sila: { n: 'Siła', d: 'Mocniejsze ciosy mieczem (+5) i więcej zdrowia (+20).' },
  magia: { n: 'Magia', d: 'Silniejsze błyskawice (+12) i więcej many (+25).' },
  zrecznosc: { n: 'Zręczność', d: 'Szybszy ruch i unik, większa szansa na cios krytyczny.' },
};

// ================= state =================
function freshState() {
  return {
    gold: 40, xp: 0, stats: { sila: 0, magia: 0, zrecznosc: 0 }, morality: 0, renown: 0,
    potions: 2, sword: 0, armor: 0, houseOwned: false, scars: 0,
    quests: { bandits: 0, herbs: 0, ruins: 0, debt: 0 },
    flags: { leaderFate: null, debtChoice: null, campCleared: false, bossDead: false, widowGift: false, foxPets: 0 },
    campKills: 0, herbsHave: 0, herbTaken: [], chestOpened: [],
    time: 0.3, day: 1, pos: { x: 0, z: 9 }, hp: 100, mana: 60, tracked: 'bandits', kills: 0,
  };
}
let S = freshState();
let quality = 'medium';
try { quality = localStorage.getItem('kw_quality') || 'medium'; } catch (e) { }
let musicPref = true;
try { musicPref = localStorage.getItem('kw_music') !== '0'; } catch (e) { }
setMusic(musicPref);

// ================= renderer =================
const canvas = $('c');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: quality !== 'low', powerPreference: 'high-performance' });
} catch (e) {
  $('err').style.display = 'block'; $('errMsg').textContent = String(e); throw e;
}
function applyQuality() {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality === 'high' ? 2 : quality === 'medium' ? 1.4 : 1));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
}
applyQuality();
renderer.shadowMap.enabled = quality !== 'low';
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87bfe8);
scene.fog = new THREE.Fog(0x87bfe8, 50, quality === 'low' ? 150 : 200);
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 420);

const hemi = new THREE.HemisphereLight(0xcfe6ff, 0x5a6a3a, 1.0);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff0d8, 2.0);
sun.castShadow = quality !== 'low';
sun.shadow.mapSize.set(quality === 'high' ? 2048 : 1024, quality === 'high' ? 2048 : 1024);
const SC = sun.shadow.camera; SC.left = -32; SC.right = 32; SC.top = 32; SC.bottom = -32; SC.near = 1; SC.far = 220;
sun.shadow.bias = -0.0008; sun.shadow.normalBias = 0.03;
scene.add(sun); scene.add(sun.target);

const W = buildWorld(scene, quality);
const colliders = W.colliders;

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); applyQuality();
});

// ================= movement helpers =================
function walkable(x, z) {
  if (Math.abs(x) > 188 || Math.abs(z) > 188) return false;
  const h = heightAt(x, z);
  return h > -1.0 && h < 24;
}
function moveEntity(p, dx, dz, r) {
  const nx = p.x + dx, nz = p.z + dz;
  if (walkable(nx, nz)) { p.x = nx; p.z = nz; }
  else if (walkable(nx, p.z)) p.x = nx;
  else if (walkable(p.x, nz)) p.z = nz;
  colliders.resolve(p, r);
  p.y = heightAt(p.x, p.z);
}

// ================= particles =================
const partGeo = new THREE.BoxGeometry(0.14, 0.14, 0.14);
const partMats = {};
const pmat = c => partMats[c] || (partMats[c] = new THREE.MeshBasicMaterial({ color: c }));
const particles = [];
function burst(x, y, z, color, n = 8, speed = 4, up = 3, life = 0.6, size = 1) {
  for (let i = 0; i < n; i++) {
    let p = particles.find(q => !q.alive);
    if (!p) { if (particles.length > 140) return; p = { m: new THREE.Mesh(partGeo, pmat(color)) }; scene.add(p.m); particles.push(p); }
    p.m.material = pmat(color);
    p.alive = true; p.t = 0; p.life = life * rand(0.7, 1.2); p.size = size;
    p.m.visible = true; p.m.position.set(x, y, z);
    const a = Math.random() * Math.PI * 2, s = speed * rand(0.4, 1);
    p.vx = Math.cos(a) * s; p.vz = Math.sin(a) * s; p.vy = up * rand(0.5, 1.3);
  }
}
function updateParticles(dt) {
  for (const p of particles) {
    if (!p.alive) continue;
    p.t += dt;
    if (p.t >= p.life) { p.alive = false; p.m.visible = false; continue; }
    p.vy -= 9 * dt;
    p.m.position.x += p.vx * dt; p.m.position.y += p.vy * dt; p.m.position.z += p.vz * dt;
    const k = (1 - p.t / p.life) * p.size; p.m.scale.setScalar(k);
    p.m.rotation.x += dt * 5; p.m.rotation.y += dt * 4;
  }
}

// ================= floating text =================
const floats = [];
const floatsEl = $('floats');
const tmpV = new THREE.Vector3();
function floatText(text, x, y, z, cls = 'dmg', life = 1.0, rise = 1.2) {
  let f = floats.find(q => !q.alive);
  if (!f) { const el = document.createElement('div'); floatsEl.appendChild(el); f = { el }; floats.push(f); }
  f.alive = true; f.el.className = 'ft ' + cls; f.el.textContent = text; f.el.style.display = 'block';
  f.x = x + rand(-0.3, 0.3); f.y = y; f.z = z; f.t = 0; f.life = life; f.rise = rise;
  return f;
}
function updateFloats(dt) {
  const w = window.innerWidth, h = window.innerHeight;
  for (const f of floats) {
    if (!f.alive) continue;
    f.t += dt;
    if (f.t >= f.life) { f.alive = false; f.el.style.display = 'none'; continue; }
    tmpV.set(f.x, f.y + f.t * f.rise, f.z).project(camera);
    if (tmpV.z > 1) { f.el.style.display = 'none'; continue; }
    f.el.style.display = 'block';
    const sx = (tmpV.x * 0.5 + 0.5) * w, sy = (-tmpV.y * 0.5 + 0.5) * h;
    f.el.style.transform = `translate(${sx.toFixed(1)}px,${sy.toFixed(1)}px) translate(-50%,-50%)`;
    f.el.style.opacity = f.t > f.life * 0.7 ? (1 - (f.t - f.life * 0.7) / (f.life * 0.3)).toFixed(2) : '1';
  }
}

// ================= toast =================
function toast(msg, cls = '', time = 3.2) {
  const t0 = $('toast');
  for (const c of t0.children) if (c.textContent === msg) return;
  const el = document.createElement('div'); el.textContent = msg; if (cls) el.className = cls;
  const t = $('toast'); t.appendChild(el);
  while (t.children.length > 4) t.removeChild(t.firstChild);
  setTimeout(() => el.remove(), time * 1000);
}

// ================= player =================
const hero = makeHumanoid({ shirt: 0x2f5d8a, pants: 0x3b3024, hair: 0x6a4420, weapon: true, cape: 0x8a1f1f, boots: 0x3a2616 });
scene.add(hero.group);
const haloMat = new THREE.MeshLambertMaterial({ color: 0xffe680, emissive: 0xffd040, emissiveIntensity: 0.9 });
const halo = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.035, 6, 18), haloMat);
halo.rotation.x = Math.PI / 2; halo.position.y = 0.78; hero.headG.add(halo);
const hornMat = new THREE.MeshLambertMaterial({ color: 0x3a0a0a });
const horns = new THREE.Group(); hero.headG.add(horns);
for (const s of [-1, 1]) { const h = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.32, 5), hornMat); h.position.set(s * 0.17, 0.55, 0.05); h.rotation.z = -s * 0.5; horns.add(h); }
const scarMat = new THREE.MeshLambertMaterial({ color: 0x9a3a2a });
const scars = new THREE.Group(); hero.headG.add(scars);
const auraMat = new THREE.MeshBasicMaterial({ color: 0xffe080, transparent: true, opacity: 0.0, depthWrite: false });
const aura = new THREE.Mesh(new THREE.RingGeometry(0.6, 0.95, 24), auraMat); aura.rotation.x = -Math.PI / 2; aura.position.y = 0.05; hero.group.add(aura);

const P = {
  pos: new THREE.Vector3(0, 2.5, 9), yaw: Math.PI, hp: 100, mana: 60,
  attackT: -1, combo: 0, comboQ: false, comboTimer: 0, atkHit: false,
  rollT: 0, rollCd: 0, rollDir: { x: 0, z: 1 }, invuln: 0, castT: 0,
  dead: false, deadT: 0, lastHurt: -99, speed: 0, kvx: 0, kvz: 0,
};
const maxHp = () => 100 + 20 * S.stats.sila;
const maxMana = () => 60 + 25 * S.stats.magia;
function refreshHeroLook() {
  halo.visible = S.morality >= 40;
  horns.visible = S.morality <= -40;
  const m = S.morality;
  auraMat.color.set(m >= 0 ? 0xffe080 : 0xff3020);
  auraMat.opacity = Math.abs(m) > 60 ? 0.35 : 0;
  hero.mats[0].color.set(m <= -70 ? 0xc8a8a0 : 0xe0b089);
  const s = 1 + S.stats.sila * 0.035;
  hero.group.scale.set(s, 1 + S.stats.sila * 0.02, s);
  hero.armL.scale.set(1 + S.stats.sila * 0.08, 1, 1 + S.stats.sila * 0.08);
  hero.armR.scale.copy(hero.armL.scale);
  const mg = S.stats.magia;
  hero.mats[1].emissive.setRGB(0.05 * mg, 0.1 * mg, 0.25 * mg);
  if (hero.weapon) {
    const metal = hero.weapon.userData.metal;
    metal.color.set([0x9a8a7a, 0xd8e0e8, 0x9ad0ff][S.sword]);
    metal.emissive.set(S.sword === 2 ? 0x2a6aff : 0x000000);
  }
  hero.mats[1].color.set([0x2f5d8a, 0x5a6470, 0x9aa4b0][S.armor]);
  while (scars.children.length < Math.min(S.scars, 3)) {
    const i = scars.children.length;
    const sc = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.16, 0.02), scarMat);
    sc.position.set(i === 0 ? 0.12 : i === 1 ? -0.13 : 0.02, 0.18 + i * 0.03, 0.216); sc.rotation.z = 0.5 - i * 0.6;
    scars.add(sc);
  }
}

// ================= fox companion =================
const fox = { mesh: makeQuad({ color: 0xd8692a, belly: 0xf4e8d8, dark: 0x2a1a10, tailTip: 0xffffff, paws: 0x2a1a10, scale: 0.85 }), pos: new THREE.Vector3(2, 2.5, 11), yaw: 0, atkT: -1, cd: 0, target: null, speed: 0, barkCd: 0 };
scene.add(fox.mesh.group);
fox.pos.y = heightAt(fox.pos.x, fox.pos.z); fox.mesh.group.position.copy(fox.pos);

// ================= enemies =================
const EDEF = {
  bandit: { name: 'Bandyta', hp: 45, dmg: 9, speed: 4.0, range: 1.7, aggro: 15, windup: 0.5, cd: 1.5, xp: 30, gold: [4, 14], radius: 0.45, renown: 1, make: () => makeHumanoid({ shirt: [0x6b2a1f, 0x4a4a2a, 0x5a3a2a][Math.floor(Math.random() * 3)], pants: 0x2e2a22, hair: 0x1c140c, hood: Math.random() < 0.5 ? 0x3a2a1a : null, weapon: true, blade: 0x8a8a8a }) },
  wolf: { name: 'Wilk', hp: 30, dmg: 7, speed: 6.0, range: 1.4, aggro: 17, windup: 0.35, cd: 1.3, xp: 20, gold: [0, 0], radius: 0.5, quad: true, renown: 1, make: () => makeQuad({ color: 0x6e6e72, belly: 0xb0b0b0, scale: 1.15, eye: 0xffcc33 }) },
  ghoul: { name: 'Upiór', hp: 60, dmg: 12, speed: 3.5, range: 1.7, aggro: 20, windup: 0.6, cd: 1.6, xp: 45, gold: [2, 10], radius: 0.45, renown: 2, make: () => makeHumanoid({ skin: 0xb8c4b0, shirt: 0x4b5a4a, pants: 0x3a4038, hair: 0x2a2f2a, eyeGlow: 0x66ff99, weapon: true, blade: 0x6a7a6a, scale: 1.05, thin: true }) },
  leader: { name: 'Herszt Wronisław', hp: 190, dmg: 14, speed: 4.2, range: 1.9, aggro: 22, windup: 0.5, cd: 1.2, xp: 150, gold: [0, 0], radius: 0.55, renown: 5, make: () => makeHumanoid({ shirt: 0x1f1f1f, pants: 0x3d1010, hair: 0x111111, beard: 0x111111, weapon: true, blade: 0xb0b0b0, scale: 1.2, cape: 0x111111 }) },
  boss: { name: 'Rycerz Popiołu', hp: 750, dmg: 24, speed: 3.3, range: 3.4, aggro: 34, windup: 0.8, cd: 1.6, xp: 800, gold: [300, 300], radius: 1.0, renown: 30, make: () => makeHumanoid({ skin: 0x4a4038, shirt: 0x6a6a74, pants: 0x4a4a52, boots: 0x2a2a2a, helmet: 0x7a7a84, eyeGlow: 0xff6a00, weapon: true, blade: 0x3a2a2a, bladeGlow: 0xff4a00, scale: 2.1, cape: 0x2a1010 }) },
};
const enemies = [];
let targetEnemy = null, targetT = 0;

class Enemy {
  constructor(type, x, z, tag = 'wild', home = null) {
    this.type = type; this.def = EDEF[type]; this.tag = tag;
    this.mesh = this.def.make(); scene.add(this.mesh.group);
    this.pos = new THREE.Vector3(x, heightAt(x, z), z);
    this.home = home || { x, z };
    this.yaw = Math.random() * 6.28; this.hp = this.def.hp; this.maxHp = this.def.hp;
    this.state = 'idle'; this.t = 0; this.atkCd = rand(0.3, 1); this.flash = 0; this.wind = 0;
    this.kx = 0; this.kz = 0; this.wander = null; this.wanderT = rand(1, 4); this.dead = false; this.deadT = 0; this.speed = 0;
    this.slamPhase = false; this.summoned = false; this.atkCount = 0;
    this.mesh.group.position.copy(this.pos);
  }
  setFlash() {
    const w = this.flash, r = this.wind;
    for (const m of this.mesh.mats) {
      if (m.userData.baseE === undefined) m.userData.baseE = m.emissive.getHex();
      if (w > 0) m.emissive.setRGB(w, w, w);
      else if (r > 0) m.emissive.setRGB(r * 0.6, 0, 0);
      else m.emissive.setHex(m.userData.baseE);
    }
  }
  update(dt) {
    const def = this.def, g = this.mesh.group;
    if (this.dead) {
      this.deadT += dt;
      const k = Math.min(1, this.deadT * 2.5);
      if (this.mesh.kind === 'quad') g.rotation.z = k * Math.PI / 2; else g.rotation.x = -k * Math.PI / 2;
      if (this.deadT > 1.8) g.position.y -= dt * 0.7;
      if (this.deadT > 3.2) this.remove = true;
      return;
    }
    if (this.flash > 0 || this.wind > 0 || this._fl) { this.setFlash(); this._fl = this.flash > 0 || this.wind > 0; }
    this.flash = Math.max(0, this.flash - dt * 4);
    if (Math.abs(this.kx) + Math.abs(this.kz) > 0.05) {
      moveEntity(this.pos, this.kx * dt, this.kz * dt, def.radius);
      const dec = Math.exp(-7 * dt); this.kx *= dec; this.kz *= dec;
    }
    const dx = P.pos.x - this.pos.x, dz = P.pos.z - this.pos.z, d = Math.hypot(dx, dz);
    const toP = Math.atan2(dx, dz);
    let moveSpd = 0, moveDir = 0;
    if (this.state === 'surrender') {
      this.yaw = turnTo(this.yaw, toP, dt * 3);
      g.position.copy(this.pos); g.rotation.y = this.yaw;
      animHumanoid(this.mesh, dt, 0, -1, { kneel: true });
      return;
    }
    if (this.state === 'leaving') {
      moveSpd = 3; moveDir = Math.atan2(this.pos.x - LOC.camp.x + 30, this.pos.z - LOC.camp.z + 30);
      this.t += dt;
      if (this.t > 6) { this.remove = true; }
      this.yaw = turnTo(this.yaw, moveDir, dt * 6);
      moveEntity(this.pos, Math.sin(moveDir) * moveSpd * dt, Math.cos(moveDir) * moveSpd * dt, def.radius);
      g.position.copy(this.pos); g.rotation.y = this.yaw;
      animHumanoid(this.mesh, dt, moveSpd);
      return;
    }
    const pv = Math.hypot(P.pos.x - LOC.village.x, P.pos.z - LOC.village.z);
    const targetable = !P.dead && (pv > 36 || this.type === 'boss');
    this.atkCd -= dt;
    const distHome = Math.hypot(this.pos.x - this.home.x, this.pos.z - this.home.z);
    let atkAnim = -1;
    switch (this.state) {
      case 'idle':
        this.wanderT -= dt;
        if (this.wanderT <= 0) { this.wanderT = rand(2, 6); this.wander = Math.random() < 0.6 ? { x: this.home.x + rand(-8, 8), z: this.home.z + rand(-8, 8) } : null; }
        if (this.wander) {
          const wx = this.wander.x - this.pos.x, wz = this.wander.z - this.pos.z;
          if (Math.hypot(wx, wz) > 0.8) { moveSpd = def.speed * 0.3; moveDir = Math.atan2(wx, wz); } else this.wander = null;
        }
        if (targetable && d < def.aggro) { this.state = 'chase'; if (this.type === 'boss') bossIntro(this); }
        break;
      case 'chase':
        if (!targetable || d > def.aggro * 2.2 || distHome > 55) { this.state = 'return'; break; }
        if (d > def.range * 0.85) { moveSpd = def.speed; moveDir = toP; }
        if (d < def.range + 0.4 && this.atkCd <= 0) {
          this.state = 'windup'; this.t = 0;
          this.slamPhase = this.type === 'boss' && (this.atkCount % 3 === 2);
          if (this.slamPhase) showSlamRing(this);
        }
        this.yaw = turnTo(this.yaw, toP, dt * 8);
        break;
      case 'windup': {
        this.t += dt;
        const wu = this.slamPhase ? 1.1 : def.windup;
        this.wind = Math.min(1, this.t / wu) * 0.6;
        if (!this.slamPhase) this.yaw = turnTo(this.yaw, toP, dt * 3);
        atkAnim = (this.t / wu) * 0.35;
        if (this.t >= wu) { this.strike(d, toP); this.state = 'recover'; this.t = 0; this.wind = 0; this.atkCount++; }
        break;
      }
      case 'recover':
        this.t += dt; atkAnim = 0.35 + Math.min(1, this.t / 0.45) * 0.65;
        if (this.t > 0.45) { this.state = 'chase'; this.atkCd = def.cd * rand(0.8, 1.3); }
        break;
      case 'return': {
        const hx = this.home.x - this.pos.x, hz = this.home.z - this.pos.z;
        moveSpd = def.speed * 0.7; moveDir = Math.atan2(hx, hz);
        if (Math.hypot(hx, hz) < 3) this.state = 'idle';
        if (targetable && d < def.aggro * 0.6 && distHome < 40) this.state = 'chase';
        if (this.hp < this.maxHp) this.hp = Math.min(this.maxHp, this.hp + dt * 8);
        break;
      }
    }
    if (moveSpd > 0) {
      if (this.state !== 'chase') this.yaw = turnTo(this.yaw, moveDir, dt * 5);
      let mx = Math.sin(moveDir) * moveSpd * dt, mz = Math.cos(moveDir) * moveSpd * dt;
      // keep monsters out of the village
      const nvx = this.pos.x + mx, nvz = this.pos.z + mz;
      if (this.type !== 'boss' && Math.hypot(nvx, nvz) < 38) { mx = 0; mz = 0; moveSpd = 0; }
      moveEntity(this.pos, mx, mz, def.radius);
    }
    // separation
    for (const o of enemies) {
      if (o === this || o.dead) continue;
      const sx = this.pos.x - o.pos.x, sz = this.pos.z - o.pos.z, sd = Math.hypot(sx, sz), rr = def.radius + o.def.radius + 0.2;
      if (sd < rr && sd > 0.001) { const push = (rr - sd) * 0.5; this.pos.x += sx / sd * push; this.pos.z += sz / sd * push; }
    }
    if (!P.dead) {
      const sx = this.pos.x - P.pos.x, sz = this.pos.z - P.pos.z, sd = Math.hypot(sx, sz), rr = def.radius + 0.45;
      if (sd < rr && sd > 0.001) { this.pos.x = P.pos.x + sx / sd * rr; this.pos.z = P.pos.z + sz / sd * rr; }
    }
    this.pos.y = heightAt(this.pos.x, this.pos.z);
    this.speed = lerp(this.speed, moveSpd, Math.min(1, dt * 8));
    g.position.copy(this.pos); g.rotation.y = this.yaw;
    if (this.mesh.kind === 'quad') animQuad(this.mesh, dt, this.speed, atkAnim);
    else animHumanoid(this.mesh, dt, this.speed, atkAnim);
    // ghouls burn at daylight
    if (this.type === 'ghoul' && dayK > 0.75 && this.tag === 'wild') {
      this.hp -= dt * 15; if (Math.random() < dt * 8) burst(this.pos.x, this.pos.y + 1.2, this.pos.z, 0xff8a2a, 2, 1, 2);
      if (this.hp <= 0) killEnemy(this, true);
    }
  }
  strike(d, toP) {
    const def = this.def;
    if (this.type === 'boss' && this.slamPhase) {
      SFX.slam(); shake(0.6); hideSlamRing();
      burst(this.pos.x, this.pos.y + 0.3, this.pos.z, 0x6a5a4a, 24, 9, 4, 0.8, 1.6);
      burst(this.pos.x, this.pos.y + 0.3, this.pos.z, 0xff6a1a, 12, 7, 5, 0.6, 1.2);
      if (d < 5.8) hurtPlayer(def.dmg * 1.3, this, 14);
      if (!this.summoned && this.hp < this.maxHp * 0.5) {
        this.summoned = true;
        for (let i = 0; i < 3; i++) { const a = i * 2.1; spawnEnemy('ghoul', this.pos.x + Math.sin(a) * 6, this.pos.z + Math.cos(a) * 6, 'boss', { x: LOC.ruins.x, z: LOC.ruins.z }).state = 'chase'; }
        toast('Rycerz Popiołu przyzywa upiory!', 'e');
      }
      return;
    }
    if (this.mesh.kind === 'quad') SFX.bark(); else SFX.swing();
    const arc = this.type === 'boss' ? 1.4 : 1.0;
    if (d < def.range + 0.6 && Math.abs(angDiff(toP, this.yaw)) < arc) hurtPlayer(def.dmg, this, this.type === 'boss' ? 9 : 4);
  }
}
function spawnEnemy(type, x, z, tag, home) { const e = new Enemy(type, x, z, tag, home); enemies.push(e); return e; }

// boss slam telegraph ring
const ringMat = new THREE.MeshBasicMaterial({ color: 0xff3a1a, transparent: true, opacity: 0.5, depthWrite: false, side: THREE.DoubleSide });
const slamRing = new THREE.Mesh(new THREE.RingGeometry(5.0, 5.8, 40), ringMat);
slamRing.rotation.x = -Math.PI / 2; slamRing.visible = false; scene.add(slamRing);
let slamRingOwner = null;
function showSlamRing(e) { slamRingOwner = e; slamRing.visible = true; slamRing.position.set(e.pos.x, e.pos.y + 0.15, e.pos.z); }
function hideSlamRing() { slamRing.visible = false; slamRingOwner = null; }

function bossIntro(e) {
  if (e.introDone) return; e.introDone = true;
  toast('Rycerz Popiołu powstaje z prochów!', 'e', 4); SFX.evil(); shake(0.5);
  burst(e.pos.x, e.pos.y + 2, e.pos.z, 0xff6a1a, 30, 6, 6, 1.0, 1.5);
}

function damageEnemy(e, dmg, crit, nx, nz, kb) {
  if (e.dead || e.state === 'surrender' || e.state === 'leaving') return;
  dmg = Math.round(dmg);
  e.hp -= dmg; e.flash = 1;
  const kbm = e.type === 'boss' ? 0.08 : e.type === 'leader' ? 0.5 : 1;
  e.kx += nx * kb * kbm; e.kz += nz * kb * kbm;
  floatText((crit ? '' : '') + dmg, e.pos.x, e.pos.y + 2.2 * (e.type === 'boss' ? 2 : 1), e.pos.z, crit ? 'crit' : 'dmg', 0.9);
  burst(e.pos.x, e.pos.y + 1.2, e.pos.z, e.type === 'ghoul' ? 0x88ffaa : e.type === 'boss' ? 0xff6a1a : 0xaa1a1a, crit ? 10 : 5, 3, 2.5, 0.45);
  if (e.state === 'idle' || e.state === 'return') e.state = 'chase';
  targetEnemy = e; targetT = 5;
  if (e.type === 'leader' && !S.flags.leaderFate && e.hp < e.maxHp * 0.25) {
    e.hp = Math.ceil(e.maxHp * 0.25); e.state = 'surrender'; e.wind = 0; e.flash = 0; e.setFlash();
    toast('Wronisław rzuca miecz i błaga o litość! Podejdź, by zdecydować o jego losie.', 'q', 5);
    SFX.quest();
    return;
  }
  if (e.hp <= 0) killEnemy(e);
}
function killEnemy(e, silent = false) {
  if (e.dead) return;
  e.dead = true; e.deadT = 0; e.hp = 0; e.flash = 0; e.wind = 0; e.setFlash();
  if (slamRingOwner === e) hideSlamRing();
  if (silent) { e.remove = true; return; }
  S.kills++;
  const def = e.def;
  const nOrbs = Math.min(8, Math.max(2, Math.round(def.xp / 12)));
  for (let i = 0; i < nOrbs; i++) spawnPickup('xp', e.pos.x, e.pos.y + 1, e.pos.z, def.xp / nOrbs);
  const gold = Math.round(rand(def.gold[0], def.gold[1]));
  if (gold > 0) { const nc = Math.min(8, Math.max(1, Math.round(gold / 8))); for (let i = 0; i < nc; i++) spawnPickup('gold', e.pos.x, e.pos.y + 1, e.pos.z, gold / nc); }
  addRenown(def.renown, true);
  if (e.tag === 'camp') {
    S.campKills++;
    if (S.campKills < 4) toast(`Bandyci w obozie: ${S.campKills}/4`, '');
    checkCamp();
  }
  if (e.type === 'boss') {
    S.flags.bossDead = true; S.quests.ruins = 2; S.tracked = 'ruins';
    SFX.victory(); shake(0.8);
    burst(e.pos.x, e.pos.y + 2, e.pos.z, 0xffd040, 40, 8, 8, 1.4, 1.5);
    if (W.runeMat) W.runeMat.emissive.set(0x40a0ff);
    for (const o of enemies) if (o.tag === 'boss' && !o.dead) killEnemy(o);
    setTimeout(showVictory, 2500);
    saveGame();
  }
}
function checkCamp() {
  if (!S.flags.campCleared && S.campKills >= 4 && S.flags.leaderFate) {
    S.flags.campCleared = true;
    if (S.quests.bandits < 1) S.quests.bandits = 1;
    S.tracked = 'bandits';
    toast('Obóz bandytów rozbity! Wróć do Sołtysa Bogumiła.', 'q', 4); SFX.quest();
    saveGame();
  }
}

// ================= player damage / death =================
let shakeAmt = 0;
hero.group.position.copy(P.pos); hero.group.rotation.y = P.yaw;
function shake(a) { shakeAmt = Math.max(shakeAmt, a); }
let hurtFlash = 0;
function hurtPlayer(dmg, src, kb = 4) {
  if (P.dead || P.invuln > 0 || P.rollT > 0 || paused) return;
  dmg = Math.round(dmg * ARMORS[S.armor].mul * rand(0.9, 1.1));
  P.hp -= dmg; P.invuln = 0.3; P.lastHurt = clock.elapsedTime;
  hurtFlash = 1; SFX.hurt(); shake(0.25);
  floatText('-' + dmg, P.pos.x, P.pos.y + 2.2, P.pos.z, 'hurt', 0.9);
  if (src) { const dx = P.pos.x - src.pos.x, dz = P.pos.z - src.pos.z, d = Math.hypot(dx, dz) || 1; P.kvx = dx / d * kb; P.kvz = dz / d * kb; }
  if (P.attackT >= 0 && Math.random() < 0.5) { P.attackT = -1; }
  if (P.hp <= 0) { P.hp = 0; P.dead = true; P.deadT = 0; SFX.death(); }
}
function respawn() {
  $('death').style.display = 'none';
  const lost = Math.floor(S.xp * 0.25);
  S.xp -= lost; S.scars++;
  P.dead = false; P.hp = maxHp(); P.mana = maxMana();
  P.pos.set(0, 2.5, 9); hero.group.rotation.set(0, 0, 0);
  fox.pos.set(2, 2.5, 11);
  for (const e of enemies) if (!e.dead && e.state !== 'surrender') { e.state = 'return'; e.hp = e.maxHp; }
  refreshHeroLook();
  if (lost > 0) toast(`Utracono ${lost} doświadczenia.`, 'e');
  paused = false;
  saveGame();
}

// ================= pickups =================
const pickups = [];
const xpGeo = new THREE.OctahedronGeometry(0.16, 0), goldGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.05, 8);
const xpMat = new THREE.MeshBasicMaterial({ color: 0x8ef0ff }), goldMat = new THREE.MeshLambertMaterial({ color: 0xffcc33, emissive: 0x664400 });
function spawnPickup(kind, x, y, z, amount) {
  const m = new THREE.Mesh(kind === 'xp' ? xpGeo : goldGeo, kind === 'xp' ? xpMat : goldMat);
  m.position.set(x, y, z); scene.add(m);
  const a = Math.random() * 6.28, s = rand(1.5, 3.5);
  pickups.push({ m, kind, amount, vx: Math.cos(a) * s, vz: Math.sin(a) * s, vy: rand(3, 6), t: 0 });
}
function updatePickups(dt) {
  for (let i = pickups.length - 1; i >= 0; i--) {
    const p = pickups[i]; p.t += dt;
    const m = p.m;
    const dx = P.pos.x - m.position.x, dy = P.pos.y + 1 - m.position.y, dz = P.pos.z - m.position.z;
    const d = Math.hypot(dx, dy, dz);
    if (p.t > 0.7 && d < 9 && !P.dead) {
      const s = 14 / Math.max(0.5, d);
      p.vx = lerp(p.vx, dx / d * 12, Math.min(1, dt * s)); p.vy = lerp(p.vy, dy / d * 12, Math.min(1, dt * s)); p.vz = lerp(p.vz, dz / d * 12, Math.min(1, dt * s));
    } else {
      p.vy -= 12 * dt;
      p.vx *= Math.exp(-2 * dt); p.vz *= Math.exp(-2 * dt);
    }
    m.position.x += p.vx * dt; m.position.y += p.vy * dt; m.position.z += p.vz * dt;
    const gy = heightAt(m.position.x, m.position.z) + 0.2;
    if (m.position.y < gy) { m.position.y = gy; p.vy = Math.abs(p.vy) * 0.4; }
    m.rotation.y += dt * 4;
    if ((d < 1.1 && p.t > 0.5) || p.t > 25) {
      if (p.t <= 25) {
        if (p.kind === 'xp') { S.xp += Math.round(p.amount); SFX.pickup(); }
        else { S.gold += Math.round(p.amount); SFX.coin(); }
      }
      scene.remove(m); pickups.splice(i, 1);
    }
  }
}

// ================= projectiles (spells) =================
const projectiles = [];
const boltGeo = new THREE.IcosahedronGeometry(0.28, 0);
const boltMat = new THREE.MeshBasicMaterial({ color: 0x9ad8ff });
const boltCore = new THREE.MeshBasicMaterial({ color: 0xffffff });
function castSpell() {
  if (P.dead || paused) return;
  if (P.mana < 20) { toast('Za mało many!', 'g', 1.5); return; }
  P.mana -= 20; P.castT = 0.4;
  let best = null, bd = 1e9;
  for (const e of enemies) {
    if (e.dead || e.state === 'surrender' || e.state === 'leaving') continue;
    const d = dist2(e.pos, P.pos); if (d > 26) continue;
    const a = Math.abs(angDiff(Math.atan2(e.pos.x - P.pos.x, e.pos.z - P.pos.z), P.yaw));
    const score = d + a * 12;
    if (score < bd) { bd = score; best = e; }
  }
  if (best) P.yaw = Math.atan2(best.pos.x - P.pos.x, best.pos.z - P.pos.z);
  const m = new THREE.Mesh(boltGeo, boltMat);
  const core = new THREE.Mesh(boltGeo, boltCore); core.scale.setScalar(0.5); m.add(core);
  m.position.set(P.pos.x + Math.sin(P.yaw) * 0.8, P.pos.y + 1.5, P.pos.z + Math.cos(P.yaw) * 0.8);
  scene.add(m);
  projectiles.push({ m, vx: Math.sin(P.yaw) * 18, vy: 0, vz: Math.cos(P.yaw) * 18, target: best, life: 2.2, dmg: 18 + 12 * S.stats.magia });
  SFX.magic();
}
function updateProjectiles(dt) {
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const p = projectiles[i]; p.life -= dt;
    const m = p.m;
    if (p.target && !p.target.dead) {
      const t = p.target, tx = t.pos.x - m.position.x, ty = t.pos.y + 1.2 * (t.type === 'boss' ? 2 : 1) - m.position.y, tz = t.pos.z - m.position.z;
      const d = Math.hypot(tx, ty, tz) || 1;
      const k = Math.min(1, dt * 6);
      p.vx = lerp(p.vx, tx / d * 20, k); p.vy = lerp(p.vy, ty / d * 20, k); p.vz = lerp(p.vz, tz / d * 20, k);
    }
    m.position.x += p.vx * dt; m.position.y += p.vy * dt; m.position.z += p.vz * dt;
    m.rotation.x += dt * 10; m.rotation.y += dt * 8;
    if (Math.random() < 0.6) burst(m.position.x, m.position.y, m.position.z, 0x9ad8ff, 1, 0.5, 0.5, 0.3, 0.6);
    let hit = false;
    for (const e of enemies) {
      if (e.dead || e.state === 'surrender' || e.state === 'leaving') continue;
      const sc = e.type === 'boss' ? 2 : 1;
      if (Math.hypot(e.pos.x - m.position.x, e.pos.y + 1.1 * sc - m.position.y, e.pos.z - m.position.z) < e.def.radius + 0.6) {
        const d = Math.hypot(p.vx, p.vz) || 1;
        damageEnemy(e, p.dmg * rand(0.9, 1.1), false, p.vx / d, p.vz / d, 5);
        hit = true; break;
      }
    }
    if (m.position.y < heightAt(m.position.x, m.position.z)) hit = true;
    if (hit || p.life <= 0) {
      burst(m.position.x, m.position.y, m.position.z, 0x9ad8ff, 10, 4, 3, 0.5);
      if (hit) SFX.boom();
      scene.remove(m); projectiles.splice(i, 1);
    }
  }
}

// ================= input =================
const input = { jx: 0, jy: 0, keys: {} };
const joy = { id: null, ox: 0, oy: 0 };
const look = { id: null, x: 0, y: 0 };
let camYaw = 0, camPitch = 0.42, camDist = 8, camDistCur = 8;
const joyEl = $('joy'), knob = $('knob');
const touchEl = $('touch');
touchEl.addEventListener('pointerdown', e => {
  initAudio();
  if (paused) return;
  if (e.clientX < window.innerWidth * 0.42 && joy.id === null && e.pointerType !== 'mouse') {
    joy.id = e.pointerId; joy.ox = e.clientX; joy.oy = e.clientY;
    joyEl.style.left = e.clientX + 'px'; joyEl.style.top = e.clientY + 'px'; joyEl.style.opacity = 1;
  } else if (look.id === null) {
    look.id = e.pointerId; look.x = e.clientX; look.y = e.clientY;
  }
  try { touchEl.setPointerCapture(e.pointerId); } catch (err) { }
});
touchEl.addEventListener('pointermove', e => {
  if (e.pointerId === joy.id) {
    let dx = e.clientX - joy.ox, dy = e.clientY - joy.oy;
    const d = Math.hypot(dx, dy), max = 55;
    if (d > max) { dx = dx / d * max; dy = dy / d * max; }
    knob.style.transform = `translate(${dx}px,${dy}px)`;
    input.jx = dx / max; input.jy = -dy / max;
  } else if (e.pointerId === look.id) {
    const dx = e.clientX - look.x, dy = e.clientY - look.y;
    look.x = e.clientX; look.y = e.clientY;
    camYaw -= dx * 0.0065; camPitch = clamp(camPitch + dy * 0.0045, 0.08, 1.25);
  }
});
function endPointer(e) {
  if (e.pointerId === joy.id) {
    joy.id = null; input.jx = 0; input.jy = 0; knob.style.transform = '';
    joyEl.style.left = '110px'; joyEl.style.top = 'calc(100% - 110px)'; joyEl.style.opacity = 0.5;
  }
  if (e.pointerId === look.id) look.id = null;
}
touchEl.addEventListener('pointerup', endPointer);
touchEl.addEventListener('pointercancel', endPointer);
touchEl.addEventListener('wheel', e => { camDist = clamp(camDist + e.deltaY * 0.01, 4, 14); });

function bindBtn(id, fn, hold = false) {
  const el = $(id); let iv = null;
  el.addEventListener('pointerdown', e => {
    e.preventDefault(); e.stopPropagation(); initAudio();
    el.classList.add('on'); fn();
    if (hold) { clearInterval(iv); iv = setInterval(fn, 200); }
  });
  const up = () => { el.classList.remove('on'); clearInterval(iv); };
  el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('pointerleave', up);
}
bindBtn('bAtk', () => doAttack(), true);
bindBtn('bMag', () => castSpell());
bindBtn('bRoll', () => doRoll());
bindBtn('bPot', () => drinkPotion());
bindBtn('bUse', () => doInteract());

window.addEventListener('keydown', e => {
  input.keys[e.code] = true; initAudio();
  if (e.repeat) return;
  if (e.code === 'KeyJ') doAttack();
  if (e.code === 'KeyK') castSpell();
  if (e.code === 'Space') doRoll();
  if (e.code === 'KeyE') { if (dialogOpen) { const b = $('dOpts').querySelector('button'); if (b) b.click(); } else doInteract(); }
  if (e.code === 'KeyQ') drinkPotion();
  if (e.code === 'Escape' || e.code === 'KeyM') toggleMenu();
});
window.addEventListener('keyup', e => { input.keys[e.code] = false; });

// ================= player actions =================
function nearestEnemy(maxD) {
  let best = null, bd = maxD;
  for (const e of enemies) {
    if (e.dead || e.state === 'surrender' || e.state === 'leaving') continue;
    const d = dist2(e.pos, P.pos); if (d < bd) { bd = d; best = e; }
  }
  return best;
}
function doAttack() {
  if (P.dead || paused || P.rollT > 0) return;
  if (P.attackT >= 0) { if (P.attackT > 0.35) P.comboQ = true; return; }
  startAttack();
}
function startAttack() {
  P.combo = P.comboTimer > 0 ? (P.combo + 1) % 3 : 0;
  P.attackT = 0; P.atkHit = false; P.comboQ = false;
  const t = nearestEnemy(5.5);
  if (t) P.yaw = Math.atan2(t.pos.x - P.pos.x, t.pos.z - P.pos.z);
  SFX.swing();
}
function meleeHit() {
  const base = SWORDS[S.sword].dmg + 5 * S.stats.sila;
  let hitAny = false;
  for (const e of enemies) {
    if (e.dead || e.state === 'surrender' || e.state === 'leaving') continue;
    const dx = e.pos.x - P.pos.x, dz = e.pos.z - P.pos.z, d = Math.hypot(dx, dz);
    if (d > 2.4 + e.def.radius) continue;
    if (Math.abs(angDiff(Math.atan2(dx, dz), P.yaw)) > 1.25 && d > 1.2) continue;
    let dmg = base * (P.combo === 2 ? 1.6 : 1) * rand(0.9, 1.1);
    const crit = Math.random() < 0.06 + 0.05 * S.stats.zrecznosc;
    if (crit) dmg *= 2;
    damageEnemy(e, dmg, crit, dx / (d || 1), dz / (d || 1), P.combo === 2 ? 8 : 4);
    hitAny = true;
    if (crit) SFX.crit();
  }
  if (hitAny) { SFX.hit(); shake(P.combo === 2 ? 0.25 : 0.12); }
}
function doRoll() {
  if (P.dead || paused || P.rollCd > 0) return;
  let dx = 0, dz = 0;
  const mv = moveVector();
  if (mv.m > 0.1) { dx = mv.x; dz = mv.z; } else { dx = Math.sin(P.yaw); dz = Math.cos(P.yaw); }
  const d = Math.hypot(dx, dz) || 1;
  P.rollDir = { x: dx / d, z: dz / d }; P.yaw = Math.atan2(dx, dz);
  P.rollT = 0.42; P.rollCd = 0.75; P.attackT = -1;
  SFX.roll();
  burst(P.pos.x, P.pos.y + 0.2, P.pos.z, 0x9a8a6a, 5, 2, 1, 0.4);
}
function drinkPotion() {
  if (P.dead || paused) return;
  if (S.potions <= 0) { toast('Nie masz mikstur. Kup je u kupca Mirka.', '', 2); return; }
  if (P.hp >= maxHp()) { toast('Zdrowie jest pełne.', '', 1.5); return; }
  S.potions--; const h = 60 + 10 * S.stats.sila; P.hp = Math.min(maxHp(), P.hp + h);
  SFX.drink(); floatText('+' + h, P.pos.x, P.pos.y + 2.2, P.pos.z, 'heal');
  burst(P.pos.x, P.pos.y + 1, P.pos.z, 0xff5050, 10, 2, 3, 0.6);
}
function moveVector() {
  let mx = input.jx, my = input.jy;
  const k = input.keys;
  if (k.KeyW || k.ArrowUp) my += 1; if (k.KeyS || k.ArrowDown) my -= 1;
  if (k.KeyA || k.ArrowLeft) mx -= 1; if (k.KeyD || k.ArrowRight) mx += 1;
  const m = Math.min(1, Math.hypot(mx, my));
  const fx = -Math.sin(camYaw), fz = -Math.cos(camYaw);
  const rx = -fz, rz = fx;
  let x = fx * my + rx * mx, z = fz * my + rz * mx;
  const l = Math.hypot(x, z);
  if (l > 0) { x /= l; z /= l; }
  return { x, z, m };
}

function updatePlayer(dt) {
  if (P.dead) {
    P.deadT += dt;
    hero.group.rotation.x = -Math.min(1, P.deadT * 2) * Math.PI / 2;
    if (P.deadT > 2.2 && $('death').style.display !== 'flex') { $('death').style.display = 'flex'; paused = true; }
    return;
  }
  P.rollCd -= dt; P.invuln -= dt; P.comboTimer -= dt; P.castT -= dt;
  const mv = moveVector();
  const speed = 6.2 + 0.45 * S.stats.zrecznosc;
  let vx = 0, vz = 0;
  if (P.rollT > 0) {
    P.rollT -= dt;
    const rs = 12 + S.stats.zrecznosc;
    vx = P.rollDir.x * rs; vz = P.rollDir.z * rs;
  } else if (P.attackT >= 0) {
    P.attackT += dt / 0.42;
    if (!P.atkHit && P.attackT >= 0.45) { P.atkHit = true; meleeHit(); }
    if (mv.m > 0.1) { vx = mv.x * speed * 0.2; vz = mv.z * speed * 0.2; }
    const lunge = P.attackT > 0.3 && P.attackT < 0.55 ? 3 : 0;
    vx += Math.sin(P.yaw) * lunge; vz += Math.cos(P.yaw) * lunge;
    if (P.attackT >= 1) {
      P.attackT = -1; P.comboTimer = 0.45;
      if (P.comboQ) startAttack();
    }
  } else if (mv.m > 0.05) {
    vx = mv.x * speed * mv.m; vz = mv.z * speed * mv.m;
    P.yaw = turnTo(P.yaw, Math.atan2(mv.x, mv.z), dt * 12);
  }
  vx += P.kvx; vz += P.kvz;
  const kd = Math.exp(-8 * dt); P.kvx *= kd; P.kvz *= kd;
  moveEntity(P.pos, vx * dt, vz * dt, 0.45);
  P.speed = lerp(P.speed, Math.hypot(vx, vz), Math.min(1, dt * 10));
  // regen
  P.mana = Math.min(maxMana(), P.mana + dt * (5 + S.stats.magia));
  if (clock.elapsedTime - P.lastHurt > 6) P.hp = Math.min(maxHp(), P.hp + dt * 2.5);
  // visuals
  const g = hero.group;
  g.position.copy(P.pos);
  if (P.pos.y < 0) g.position.y = Math.max(P.pos.y, -0.6);
  g.rotation.y = P.yaw;
  if (P.rollT > 0) {
    const k = 1 - P.rollT / 0.42;
    hero.body.rotation.x = k * Math.PI * 2; hero.body.position.y = Math.sin(k * Math.PI) * 0.5 - 0.3;
    hero.legL.rotation.x = -1.2; hero.legR.rotation.x = -1.2; hero.armL.rotation.x = -1.5; hero.armR.rotation.x = -1.5;
  } else {
    animHumanoid(hero, dt, P.speed, P.attackT, { cast: P.castT > 0 });
  }
  g.visible = !(P.invuln > 0 && Math.floor(P.invuln * 30) % 2 === 0 && P.rollT <= 0);
  aura.rotation.z += dt;
}

// ================= fox =================
function updateFox(dt) {
  const f = fox; const g = f.mesh.group;
  f.cd -= dt; f.barkCd -= dt;
  const pd = dist2(f.pos, P.pos);
  if (pd > 45) { f.pos.set(P.pos.x - Math.sin(P.yaw) * 2, 0, P.pos.z - Math.cos(P.yaw) * 2); f.pos.y = heightAt(f.pos.x, f.pos.z); }
  if (!f.target || f.target.dead || f.target.state === 'surrender' || dist2(f.target.pos, P.pos) > 14) {
    f.target = null;
    const t = nearestEnemy(11);
    if (t && t.state !== 'idle') f.target = t;
  }
  let tx, tz, spd = 0, stop = 2.5;
  if (f.target && !P.dead) { tx = f.target.pos.x; tz = f.target.pos.z; stop = f.target.def.radius + 0.9; }
  else { tx = P.pos.x - Math.sin(P.yaw + 0.8) * 2.2; tz = P.pos.z - Math.cos(P.yaw + 0.8) * 2.2; stop = 0.8; }
  const dx = tx - f.pos.x, dz = tz - f.pos.z, d = Math.hypot(dx, dz);
  if (f.atkT >= 0) {
    f.atkT += dt / 0.4;
    if (f.atkT >= 0.5 && !f.hitDone && f.target) { f.hitDone = true; damageEnemy(f.target, 5 + S.renown * 0.05, false, dx / (d || 1), dz / (d || 1), 1.5); SFX.bark(); }
    if (f.atkT >= 1) f.atkT = -1;
  } else if (d > stop) {
    spd = Math.min(8.5, d * 2.5 + (f.target ? 4 : 0));
    f.yaw = turnTo(f.yaw, Math.atan2(dx, dz), dt * 10);
    moveEntity(f.pos, Math.sin(f.yaw) * spd * dt, Math.cos(f.yaw) * spd * dt, 0.3);
  } else if (f.target && f.cd <= 0) {
    f.atkT = 0; f.hitDone = false; f.cd = 1.3;
    f.yaw = Math.atan2(dx, dz);
  } else if (!f.target) {
    f.yaw = turnTo(f.yaw, Math.atan2(P.pos.x - f.pos.x, P.pos.z - f.pos.z), dt * 3);
  }
  f.speed = lerp(f.speed, spd, Math.min(1, dt * 8));
  f.pos.y = heightAt(f.pos.x, f.pos.z);
  g.position.copy(f.pos); if (f.pos.y < 0) g.position.y = Math.max(f.pos.y, -0.3);
  g.rotation.y = f.yaw;
  animQuad(f.mesh, dt, f.speed, f.atkT);
}

// ================= NPCs =================
const npcs = [];
function addNPC(id, name, spot, look, opts = {}) {
  const mesh = makeHumanoid(look);
  scene.add(mesh.group);
  const n = { id, name, mesh, pos: new THREE.Vector3(spot.x, heightAt(spot.x, spot.z), spot.z), home: { x: spot.x, z: spot.z }, yaw: Math.atan2(-spot.x, -spot.z), wander: opts.wander || 0, target: null, wt: rand(1, 5), speed: 0, bubbleCd: rand(2, 8), talk: opts.talk, flee: 0 };
  npcs.push(n); return n;
}
const NPC_ELDER = addNPC('elder', 'Sołtys Bogumił', W.spots.elder, { shirt: 0x6a4a2a, pants: 0x3a3a3a, hair: 0xdddddd, beard: 0xeeeeee, skin: 0xd8a880 }, { talk: talkElder });
const NPC_HERB = addNPC('herb', 'Zielarka Jagna', W.spots.herbalist, { shirt: 0x4a6a3a, pants: 0x3a2a1a, hair: 0x8a5a2a, dress: 0x3a5a2a, longHair: true }, { talk: talkHerbalist });
const NPC_MERCH = addNPC('merch', 'Kupiec Mirek', W.spots.merchant, { shirt: 0x8a6a2a, pants: 0x4a3a2a, hair: 0x2a1a0a, beard: 0x2a1a0a }, { talk: talkMerchant });
const NPC_LENDER = addNPC('lender', 'Lichwiarz Grzegorz', W.spots.lender, { shirt: 0x5a1a3a, pants: 0x2a2a2a, hair: 0x4a4a4a, skin: 0xe8c0a0 }, { talk: talkLender });
const NPC_WIDOW = addNPC('widow', 'Wdowa Halina', W.spots.widow, { shirt: 0x3a3a4a, pants: 0x2a2a2a, hair: 0x5a4a3a, dress: 0x2a2a3a, longHair: true }, { talk: talkWidow });
const NPC_ALCH = addNPC('alch', 'Alchemik Kruk', W.spots.alchemist, { shirt: 0x2a1a3a, pants: 0x1a1a2a, hood: 0x1a0a2a, staff: 0x66ff88 }, { talk: talkAlchemist });
const villagerLooks = [
  { shirt: 0xa05a3a, pants: 0x4a3a2a, hair: 0x3a2a1a }, { shirt: 0x5a7a9a, pants: 0x3a3a3a, hair: 0xc8a050, dress: 0x4a6a8a, longHair: true },
  { shirt: 0x7a7a3a, pants: 0x4a3a2a, hair: 0x1a1a1a }, { shirt: 0x9a4a6a, pants: 0x3a2a2a, hair: 0x6a3a1a, dress: 0x8a3a5a, longHair: true },
  { shirt: 0x4a6a4a, pants: 0x5a4a3a, hair: 0x8a8a8a, beard: 0x8a8a8a }, { shirt: 0xb08a5a, pants: 0x3a3a2a, hair: 0x4a2a1a, scale: 0.7 },
  { shirt: 0x6a5a8a, pants: 0x3a3a3a, hair: 0xa06a3a, dress: 0x5a4a7a, longHair: true }, { shirt: 0x3a5a6a, pants: 0x2a2a2a, hair: 0x2a1a0a, scale: 0.75 },
];
villagerLooks.forEach((lk, i) => {
  const a = i / villagerLooks.length * Math.PI * 2;
  addNPC('v' + i, 'Mieszkaniec', { x: Math.sin(a) * 9, z: Math.cos(a) * 9 }, lk, { wander: 1 });
});
const LINES = {
  hero: ['Nasz bohater!', 'Witaj, dobry rycerzu!', '❤', 'Niech cię bogowie strzegą!', 'Dzieci o tobie mówią!'],
  evil: ['Uciekajcie!', 'To ten okrutnik…', 'Nie patrz mu w oczy!', 'Proszę, nie krzywdź mnie!'],
  famous: ['To ten słynny rycerz!', 'Słyszałam o tobie!', 'Opowiesz, jak pokonałeś bandytów?'],
  neutral: ['Dzień dobry.', 'Hmm, obcy…', 'Ładna dziś pogoda.', 'Uważaj na drogach.', 'Słyszałeś o upiorach?'],
  night: ['Późno już…', 'Nie wychodź nocą za wieś.', 'Ziewam…'],
};
function updateNPCs(dt) {
  for (const n of npcs) {
    const g = n.mesh.group;
    const d = dist2(n.pos, P.pos);
    if (d > 110) { g.visible = false; continue; }
    g.visible = true;
    let spd = 0;
    n.bubbleCd -= dt;
    if (n.wander) {
      const evil = S.morality <= -40;
      if (evil && d < 7 && !P.dead) n.flee = 2.5;
      if (n.flee > 0) {
        n.flee -= dt;
        const fx = n.pos.x - P.pos.x, fz = n.pos.z - P.pos.z;
        n.yaw = turnTo(n.yaw, Math.atan2(fx, fz), dt * 8); spd = 4.5;
      } else {
        n.wt -= dt;
        if (n.wt <= 0) { n.wt = rand(3, 9); n.target = Math.random() < 0.7 ? (() => { const a = Math.random() * 6.28, r = rand(5, 22); return { x: Math.sin(a) * r, z: Math.cos(a) * r }; })() : null; }
        if (d < 4) { n.target = null; n.yaw = turnTo(n.yaw, Math.atan2(P.pos.x - n.pos.x, P.pos.z - n.pos.z), dt * 4); }
        if (n.target) {
          const tx = n.target.x - n.pos.x, tz = n.target.z - n.pos.z;
          if (Math.hypot(tx, tz) > 0.8) { n.yaw = turnTo(n.yaw, Math.atan2(tx, tz), dt * 4); spd = 1.5; } else n.target = null;
        }
      }
      if (spd > 0) {
        const nx = n.pos.x + Math.sin(n.yaw) * spd * dt, nz = n.pos.z + Math.cos(n.yaw) * spd * dt;
        if (Math.hypot(nx, nz) < 30) moveEntity(n.pos, nx - n.pos.x, nz - n.pos.z, 0.4); else { n.target = null; n.wt = 0; }
      }
      if (d < 6 && n.bubbleCd <= 0 && !P.dead) {
        n.bubbleCd = rand(9, 16);
        let pool = LINES.neutral;
        if (S.morality <= -40) pool = LINES.evil;
        else if (S.morality >= 35 && S.renown >= 15) pool = LINES.hero;
        else if (S.renown >= 30) pool = LINES.famous;
        else if (isNight) pool = LINES.night;
        floatText(pool[Math.floor(Math.random() * pool.length)], n.pos.x, n.pos.y + 2.5, n.pos.z, 'bubble', 2.6, 0.15);
      }
    } else {
      if (d < 6) n.yaw = turnTo(n.yaw, Math.atan2(P.pos.x - n.pos.x, P.pos.z - n.pos.z), dt * 4);
      else n.yaw = turnTo(n.yaw, Math.atan2(-n.home.x, -n.home.z), dt * 2);
    }
    n.speed = lerp(n.speed, spd, Math.min(1, dt * 6));
    g.position.copy(n.pos); g.rotation.y = n.yaw;
    animHumanoid(n.mesh, dt, n.speed);
  }
}

// ================= interaction =================
let currentInteract = null;
function interactables() {
  const list = [];
  for (const n of npcs) if (n.talk) list.push({ x: n.pos.x, z: n.pos.z, r: 3.2, label: 'Rozmawiaj', act: () => n.talk(n) });
  if (!enemies.some(e => !e.dead && e.state !== 'idle' && e.state !== 'surrender' && dist2(e.pos, P.pos) < 25)) list.push({ x: fox.pos.x, z: fox.pos.z, r: 1.6, label: 'Pogłaszcz Iskrę', act: petFox, low: true });
  const herbsActive = S.quests.herbs >= 0 && S.quests.herbs < 2;
  if (herbsActive) for (const h of W.herbs) if (!S.herbTaken[h.i]) list.push({ x: h.x, z: h.z, r: 2.4, label: 'Zbierz ziele', act: () => takeHerb(h) });
  for (const c of W.chests) if (!S.chestOpened[c.i]) list.push({ x: c.x, z: c.z, r: 2.4, label: 'Otwórz skrzynię', act: () => openChest(c) });
  list.push({ x: W.spots.house.x, z: W.spots.house.z, r: 3, label: S.houseOwned ? 'Odpocznij w domu' : 'Dom na sprzedaż', act: houseInteract });
  for (const e of enemies) if (e.state === 'surrender') list.push({ x: e.pos.x, z: e.pos.z, r: 3.2, label: 'Zdecyduj o losie', act: () => leaderChoice(e) });
  return list;
}
function updateInteract() {
  let best = null, bd = 1e9;
  if (!P.dead) for (const it of interactables()) {
    const d = Math.hypot(it.x - P.pos.x, it.z - P.pos.z) + (it.low ? 100 : 0);
    if (d < it.r + (it.low ? 100 : 0) && d < bd) { bd = d; best = it; }
  }
  currentInteract = best;
  const b = $('bUse');
  if (best && !paused) { b.style.display = 'flex'; if (b.textContent !== best.label) b.textContent = best.label; }
  else b.style.display = 'none';
}
function doInteract() { if (currentInteract && !paused && !P.dead) currentInteract.act(); }

function petFox() {
  SFX.bark(); S.flags.foxPets++;
  floatText('❤', fox.pos.x, fox.pos.y + 1.2, fox.pos.z, 'heal', 1.2);
  burst(fox.pos.x, fox.pos.y + 1, fox.pos.z, 0xff6a8a, 6, 1.5, 2.5, 0.7);
  if (S.flags.foxPets === 1) toast('Iskra merda ogonem. Będzie walczyć u twojego boku.', 'g');
}
function takeHerb(h) {
  S.herbTaken[h.i] = true; S.herbsHave++; h.group.visible = false;
  SFX.pickup(); burst(h.x, heightAt(h.x, h.z) + 0.6, h.z, 0x88ffee, 10, 2, 3, 0.7);
  toast(`Księżycowe Ziele: ${Math.min(S.herbsHave, 6)}/6`, S.herbsHave >= 6 ? 'q' : '');
  if (S.herbsHave === 6) { toast(S.quests.herbs === 1 ? 'Masz dość ziela. Wróć do Zielarki Jagny.' : 'Masz dość ziela — ktoś może go potrzebować…', 'q'); S.tracked = 'herbs'; }
}
function openChest(c) {
  S.chestOpened[c.i] = true; c.lid.rotation.x = -1.9;
  const g = Math.round(rand(40, 130)); S.gold += g;
  let txt = `Skrzynia: ${g} zł`;
  if (Math.random() < 0.6) { S.potions++; txt += ' i mikstura zdrowia'; }
  const xp = 40; S.xp += xp;
  SFX.coin(); burst(c.x, heightAt(c.x, c.z) + 0.8, c.z, 0xffcc33, 14, 3, 4, 0.8);
  toast(txt + ` (+${xp} dośw.)`, 'q');
  saveGame();
}
function houseInteract() {
  if (!S.houseOwned) {
    dialog('Dom na Wzgórzu', 'Przytulny dom z widokiem na Brzezinę. Właściciel wyjechał do miasta. Z domu będziesz mieć codzienny dochód z dzierżawy pola (40 zł dziennie) i miejsce na odpoczynek.', [
      { t: 'Kup dom (800 zł)', dis: S.gold < 800, f: () => { S.gold -= 800; S.houseOwned = true; addRenown(10); SFX.quest(); toast('Dom na Wzgórzu jest twój!', 'q'); saveGame(); } },
      { t: 'Odejdź' }]);
  } else {
    dialog('Twój dom', 'Ciepłe łóżko czeka. Odpocząć do rana? (pełne zdrowie i mana, zapis gry)', [
      { t: 'Śpij do rana', f: sleep }, { t: 'Nie teraz' }]);
  }
}
function sleep() {
  const fade = $('fade'); fade.style.opacity = 1; paused = true;
  setTimeout(() => {
    if (S.time > 0.27) { S.day++; dailyIncome(); }
    S.time = 0.27; P.hp = maxHp(); P.mana = maxMana();
    saveGame(); fade.style.opacity = 0; paused = false;
    toast(`Dzień ${S.day}. Wypoczęty ruszasz dalej.`, 'g');
  }, 1200);
}
function dailyIncome() { if (S.houseOwned) { S.gold += 40; toast('Dochód z domu: +40 zł', 'q'); } }

function leaderChoice(e) {
  dialog('Herszt Wronisław', '— Litości, rycerzu! Mam dzieci w Kamieńcu… Przysięgam na wszystkie świętości, że odejdę i nikt już nie usłyszy o moich ludziach. Weź moje złoto, tylko daruj życie!', [
    { t: 'Oszczędź go (Dobro)', c: 'good', f: () => {
      S.flags.leaderFate = 'spared'; changeMorality(25); S.gold += 60; toast('+60 zł', 'q');
      e.state = 'leaving'; e.t = 0; addRenown(5); checkCamp(); saveGame();
    } },
    { t: 'Wykonaj wyrok (Zło)', c: 'evil', f: () => {
      S.flags.leaderFate = 'killed'; changeMorality(-25);
      e.state = 'chase'; e.hp = 1; e.def = { ...e.def, gold: [150, 150] };
      killEnemy(e); burst(e.pos.x, e.pos.y + 1.2, e.pos.z, 0xaa1a1a, 18, 4, 3, 0.7); SFX.hit();
      checkCamp(); saveGame();
    } },
  ]);
}

// ================= morality / renown =================
function changeMorality(v) {
  S.morality = clamp(S.morality + v, -100, 100);
  if (v > 0) { SFX.good(); toast(`Dobro +${v}`, 'g'); burst(P.pos.x, P.pos.y + 1.5, P.pos.z, 0xffe080, 16, 2, 4, 1); }
  else { SFX.evil(); toast(`Zło ${v}`, 'e'); burst(P.pos.x, P.pos.y + 1.5, P.pos.z, 0xaa1010, 16, 2, 4, 1); }
  refreshHeroLook();
}
function addRenown(v, quiet = false) { S.renown += v; if (!quiet) toast(`Sława +${v}`, 'q'); }
function moralTitle() {
  const m = S.morality;
  if (m >= 70) return 'Świetlisty Obrońca'; if (m >= 30) return 'Prawy Rycerz'; if (m > -30) return 'Wędrowny Rycerz';
  if (m > -70) return 'Okrutny Najemnik'; return 'Mroczny Tyran';
}

// ================= dialog =================
let dialogOpen = false, paused = true;
function dialog(name, text, opts = []) {
  dialogOpen = true; paused = true;
  $('dName').textContent = name; $('dText').textContent = text;
  const box = $('dOpts'); box.innerHTML = '';
  if (!opts.length) opts = [{ t: 'Dalej' }];
  for (const o of opts) {
    const b = document.createElement('button'); b.className = 'btn' + (o.c ? ' ' + o.c : ''); b.textContent = o.t;
    if (o.dis) b.disabled = true;
    b.addEventListener('click', ev => {
      ev.stopPropagation(); if (o.dis) return; SFX.click();
      closeDialog(); if (o.f) o.f();
    });
    box.appendChild(b);
  }
  $('dialog').style.display = 'block';
}
function closeDialog() { dialogOpen = false; $('dialog').style.display = 'none'; if (!menuOpen) paused = false; }

function questStart(id, title) { S.quests[id] = 1; S.tracked = id; SFX.quest(); toast('Nowe zadanie: ' + title, 'q', 4); saveGame(); }
function questDone(title, xp) { SFX.level(); toast('Zadanie ukończone: ' + title, 'q', 4); if (xp) { S.xp += xp; toast(`+${xp} doświadczenia`, 'g'); } saveGame(); }

// --- Elder ---
function talkElder() {
  const q = S.quests, N = 'Sołtys Bogumił';
  if (q.bandits < 3 && S.flags.campCleared) {
    const fate = S.flags.leaderFate === 'spared'
      ? 'Darowałeś Wronisławowi życie? Masz dobre serce, rycerzu. Oby tego nie żałował… Ale drogi znów są bezpieczne.'
      : 'Wronisław nie żyje… Twarda z ciebie ręka. Ludzie będą o tym szeptać — jedni z ulgą, inni ze strachem.';
    dialog(N, fate + ' Przyjmij nagrodę od całej wioski.', [{ t: 'Przyjmij (+200 zł)', f: () => { S.gold += 200; addRenown(15); q.bandits = 3; questDone('Plaga Bandytów', 150); setTimeout(offerRuins, 300); } }]);
    return;
  }
  if (q.bandits === 0) {
    dialog(N, 'Witaj w Brzezinie, wędrowcze. Przychodzisz w złą godzinę… Bandyci Wronisława napadają na wozy kupców i palą nasze stodoły. Ich obóz leży w Starym Lesie, na południowym zachodzie. Wioska zapłaci 200 złotych temu, kto ich przegoni.', [
      { t: 'Zajmę się bandytami.', f: () => questStart('bandits', 'Plaga Bandytów') },
      { t: 'Może później.' }]);
    return;
  }
  if (q.bandits === 1) { dialog(N, 'Obóz Wronisława jest na południowym zachodzie. Idź ścieżką od studni, przez Stary Las. Uważaj na wilki — i nie daj się otoczyć!'); return; }
  if (q.ruins === 0) { offerRuins(); return; }
  if (q.ruins === 1) { dialog(N, 'Ruiny Starej Strażnicy leżą na wschodzie, za rozstajami. Rycerz Popiołu podobno budzi się, gdy ktoś stanie na kamiennym kręgu. Przygotuj się dobrze — kup mikstury u Mirka.'); return; }
  if (q.ruins === 2) {
    dialog(N, 'Na wszystkie gwiazdy! Rycerz Popiołu pokonany! Brzezina nigdy tego nie zapomni. Od dziś każdy kufel w karczmie jest dla ciebie za darmo. I przyjmij to — oszczędności całej wioski.', [
      { t: 'Przyjmij (+500 zł)', f: () => { S.gold += 500; addRenown(25); q.ruins = 3; questDone('Popioły Strażnicy', 300); } }]);
    return;
  }
  dialog(N, S.morality >= 0 ? 'Brzezina zawsze będzie twoim domem, bohaterze. Dzieci bawią się w „rycerza i Popielnego” — zgadnij, kto wygrywa.' : 'Jesteś… zawsze mile widziany. Tak. Oczywiście. Proszę, nie rób nikomu krzywdy.');
}
function offerRuins() {
  dialog('Sołtys Bogumił', 'Jest jeszcze jedno… Nocami z ruin Starej Strażnicy na wschodzie wypełzają upiory. Starzy ludzie mówią, że budzi je Rycerz Popiołu — dawny strażnik tej ziemi, który zdradził swój lud i został przeklęty. Jeśli ktoś może położyć temu kres, to ty.', [
    { t: 'Udam się do ruin.', f: () => questStart('ruins', 'Popioły Strażnicy') }, { t: 'Muszę się przygotować.' }]);
}
// --- Herbalist ---
function talkHerbalist() {
  const q = S.quests, N = 'Zielarka Jagna';
  if (q.herbs === -1) { dialog(N, 'Sprzedałeś Księżycowe Ziele temu sępowi Krukowi… Wiesz, ile trucizny z tego uwarzy? Odejdź. Nie mam ci nic do powiedzenia.'); return; }
  if (q.herbs === 2) { dialog(N, 'Dzięki tobie mam leki na całą zimę. Gorączka w wiosce już ustępuje. Niech las cię prowadzi, rycerzu.'); return; }
  if (q.herbs === 0) {
    dialog(N, 'Ach, gość! W wiosce szerzy się gorączka, a skończyło mi się Księżycowe Ziele. Rośnie w głębi lasu — świeci delikatnie, najlepiej widać je nocą. Potrzebuję sześciu łodyg. Pomożesz?', [
      { t: 'Przyniosę zioła.', f: () => questStart('herbs', 'Ziele dla Jagny') }, { t: 'Nie mam czasu.' }]);
    return;
  }
  if (S.herbsHave >= 6) {
    dialog(N, 'Sześć łodyg Księżycowego Ziela! Uratowałeś wielu ludzi. Przyjmij moje mikstury — sama je warzyłam.', [
      { t: 'Oddaj zioła (Dobro)', c: 'good', f: () => { q.herbs = 2; S.herbsHave -= 6; S.potions += 3; S.gold += 60; changeMorality(12); addRenown(8); questDone('Ziele dla Jagny', 150); toast('+3 mikstury, +60 zł', 'q'); } },
      { t: 'Jeszcze nie teraz' }]);
    return;
  }
  dialog(N, `Masz już ${S.herbsHave} z 6 łodyg. Szukaj w gęstym lesie — świecące kwiaty. Nocą łatwiej je wypatrzyć.`);
}
// --- Alchemist ---
function talkAlchemist() {
  const q = S.quests, N = 'Alchemik Kruk';
  if (q.herbs === 1 && S.herbsHave >= 6) {
    dialog(N, 'Czuję to… Księżycowe Ziele. Sześć łodyg? Zapłacę ci 350 złotych. Ta głupia zielarka da ci najwyżej parę mikstur. Do czego mi ono? Hm… powiedzmy, że niektórzy możni płacą krocie za truciznę bez smaku.', [
      { t: 'Sprzedaj ziele (350 zł, Zło)', c: 'evil', f: () => { q.herbs = -1; S.herbsHave -= 6; S.gold += 350; changeMorality(-20); toast('+350 zł', 'q'); questDone('Ziele dla Jagny (sprzedane)', 80); } },
      { t: 'Nie sprzedam.' }]);
    return;
  }
  dialog(N, 'Szukasz czegoś… specjalnego? Moje eliksiry nie są dla tchórzy. Mroczny eliksir daje wiedzę wojowników, którzy już nie żyją. Cena? Złoto… i kawałek duszy.', [
    { t: 'Mroczny eliksir (150 zł) — +250 dośw., Zło', c: 'evil', dis: S.gold < 150, f: () => { S.gold -= 150; S.xp += 250; changeMorality(-5); SFX.drink(); toast('+250 doświadczenia', 'g'); } },
    { t: 'Eliksir many (60 zł) — pełna mana', dis: S.gold < 60, f: () => { S.gold -= 60; P.mana = maxMana(); SFX.drink(); } },
    { t: 'Odejdź' }]);
}
// --- Merchant ---
function talkMerchant() {
  const N = 'Kupiec Mirek';
  const opts = [
    { t: `Mikstura zdrowia (30 zł) [masz ${S.potions}]`, dis: S.gold < 30, f: () => { S.gold -= 30; S.potions++; SFX.coin(); talkMerchant(); } },
  ];
  const ns = SWORDS[S.sword + 1];
  if (ns) opts.push({ t: `${ns.name} (${ns.price} zł)`, dis: S.gold < ns.price, f: () => { S.gold -= ns.price; S.sword++; refreshHeroLook(); SFX.level(); toast('Nowa broń: ' + ns.name, 'q'); saveGame(); talkMerchant(); } });
  const na = ARMORS[S.armor + 1];
  if (na) opts.push({ t: `${na.name} (${na.price} zł)`, dis: S.gold < na.price, f: () => { S.gold -= na.price; S.armor++; refreshHeroLook(); SFX.level(); toast('Nowy pancerz: ' + na.name, 'q'); saveGame(); talkMerchant(); } });
  opts.push({ t: 'Do widzenia' });
  const greet = S.morality <= -40 ? 'T-tak, panie? Cokolwiek zechcesz… po uczciwej cenie, oczywiście!' : S.renown > 30 ? 'Nasz bohater! Dla ciebie najlepszy towar z całego traktu!' : 'Witaj, podróżny! Mikstury, miecze, pancerze — wszystko, czego potrzebuje rycerz.';
  dialog(N, greet + `  (Twoje złoto: ${S.gold} zł)`, opts);
}
// --- Lender & widow ---
function talkLender() {
  const q = S.quests, N = 'Lichwiarz Grzegorz';
  if (q.debt === 0) {
    dialog(N, 'Rycerz, co? Mam robotę dla kogoś z mieczem. Wdowa Halina winna mi 100 złotych od pół roku. Mąż jej zginął, ale dług to dług. Odbierz go — dostaniesz 50 złotych za fatygę.', [
      { t: 'Odbiorę dług.', f: () => questStart('debt', 'Dług Wdowy') }, { t: 'Nie będę nękał wdowy.' }]);
    return;
  }
  if (q.debt === 1) { dialog(N, 'Na co czekasz? Dom Haliny jest po drugiej stronie placu. Tylko bez litości — łzy to jej ulubiona waluta.'); return; }
  if (q.debt === 2) {
    const paid = S.flags.debtChoice === 'paid';
    dialog(N, paid ? 'Sam zapłaciłeś za nią? Dziwak z ciebie… Ale złoto to złoto. Umowa to umowa — masz swoje 50.' : 'Ha! Wiedziałem, że się nadasz. Płakała? Na pewno płakała. Twoja działka.', [
      { t: 'Weź 50 zł', f: () => { S.gold += 50; q.debt = 3; questDone('Dług Wdowy', 80); } }]);
    return;
  }
  dialog(N, 'Interesy, interesy… Jeśli będziesz potrzebować pożyczki — wiesz, gdzie mnie szukać. Procent niewielki. Prawie.');
}
function talkWidow() {
  const q = S.quests, N = 'Wdowa Halina';
  if (q.debt === 1) {
    dialog(N, 'Przysłał cię Grzegorz, prawda? Ja… nie mam tych pieniędzy. Mąż zginął z rąk bandytów, a została mi tylko ta chałupa i dwoje dzieci. Wszystko, co mam, to te kilka monet na zimę.', [
      { t: 'Oddawaj pieniądze! (Zło)', c: 'evil', f: () => { S.flags.debtChoice = 'force'; q.debt = 2; changeMorality(-18); toast('Zabrałeś wdowie ostatnie oszczędności. Wróć do Grzegorza.', 'e'); saveGame(); } },
      { t: 'Spłacę twój dług (100 zł, Dobro)', c: 'good', dis: S.gold < 100, f: () => { S.gold -= 100; S.flags.debtChoice = 'paid'; q.debt = 2; changeMorality(20); addRenown(5); toast('Spłaciłeś dług wdowy. Wróć do Grzegorza.', 'q'); saveGame(); } },
      { t: 'Wrócę później.' }]);
    return;
  }
  if (S.flags.debtChoice === 'paid') {
    if (!S.flags.widowGift) {
      dialog(N, 'Niech cię bogowie błogosławią, rycerzu! Weź chociaż to — mąż trzymał tę miksturę na czarną godzinę. Tobie bardziej się przyda.', [{ t: 'Dziękuję', f: () => { S.flags.widowGift = true; S.potions += 2; toast('+2 mikstury', 'q'); } }]);
    } else dialog(N, 'Dzieci codziennie się za ciebie modlą.');
    return;
  }
  if (S.flags.debtChoice === 'force') { dialog(N, 'Odejdź… Zabrałeś nam wszystko. Mam nadzieję, że to złoto ciąży ci w sakwie.'); return; }
  dialog(N, 'Dzień dobry, rycerzu. Wybacz, nie mam czym poczęstować…');
}

// ================= quests: tracking =================
function questList() {
  const q = S.quests, L = [];
  if (q.bandits > 0 || S.flags.campCleared) L.push({ id: 'bandits', title: 'Plaga Bandytów', done: q.bandits === 3,
    text: q.bandits === 3 ? (S.flags.leaderFate === 'spared' ? 'Oszczędziłeś Wronisława. Bandyci odeszli.' : 'Wronisław nie żyje. Drogi są bezpieczne.')
      : S.flags.campCleared ? 'Wróć do Sołtysa Bogumiła po nagrodę.'
        : `Rozbij obóz bandytów w Starym Lesie (SW). Bandyci: ${S.campKills}/4. Rozpraw się z hersztem.`,
    target: q.bandits === 3 ? null : S.flags.campCleared ? NPC_ELDER.pos : LOC.camp });
  if (q.herbs !== 0) L.push({ id: 'herbs', title: 'Ziele dla Jagny', done: q.herbs === 2 || q.herbs === -1,
    text: q.herbs === 2 ? 'Jagna dostała zioła. Wioska zdrowieje.' : q.herbs === -1 ? 'Sprzedałeś ziele Alchemikowi Krukowi.' :
      S.herbsHave >= 6 ? 'Zanieś zioła Zielarce Jagnie (albo… komuś, kto zapłaci więcej).' : `Zbierz Księżycowe Ziele w lesie: ${S.herbsHave}/6.`,
    target: (q.herbs !== 1) ? null : S.herbsHave >= 6 ? NPC_HERB.pos : nearestHerb() });
  if (q.debt !== 0) L.push({ id: 'debt', title: 'Dług Wdowy', done: q.debt === 3,
    text: q.debt === 3 ? (S.flags.debtChoice === 'paid' ? 'Spłaciłeś dług wdowy z własnej kieszeni.' : 'Odebrałeś dług od wdowy.') : q.debt === 2 ? 'Wróć do Lichwiarza Grzegorza.' : 'Odwiedź Wdowę Halinę i odbierz dług.',
    target: q.debt === 1 ? NPC_WIDOW.pos : q.debt === 2 ? NPC_LENDER.pos : null });
  if (q.ruins !== 0) L.push({ id: 'ruins', title: 'Popioły Strażnicy', done: q.ruins === 3,
    text: q.ruins === 3 ? 'Rycerz Popiołu został pokonany. Jesteś legendą Brzeziny.' : q.ruins === 2 ? 'Wróć do Sołtysa Bogumiła z wieściami.' : 'Pokonaj Rycerza Popiołu w ruinach Starej Strażnicy (wschód).',
    target: q.ruins === 1 ? LOC.ruins : q.ruins === 2 ? NPC_ELDER.pos : null });
  if (!L.length || (q.bandits === 0)) L.unshift({ id: 'start', title: 'Witaj w Brzezinie', done: false, text: 'Porozmawiaj z Sołtysem Bogumiłem przy studni.', target: NPC_ELDER.pos });
  return L;
}
function nearestHerb() {
  let best = null, bd = 1e9;
  for (const h of W.herbs) if (!S.herbTaken[h.i]) { const d = Math.hypot(h.x - P.pos.x, h.z - P.pos.z); if (d < bd) { bd = d; best = h; } }
  return best;
}
function trackedQuest() {
  const L = questList().filter(q => !q.done);
  return L.find(q => q.id === S.tracked) || L[0] || null;
}

// ================= spawning =================
let spawnT = 0, campSpawned = false, bossSpawned = false;
function spawner(dt) {
  // camp
  if (!S.flags.campCleared && !campSpawned && dist2(P.pos, LOC.camp) < 75) {
    campSpawned = true;
    const n = 4 - S.campKills;
    for (let i = 0; i < n; i++) { const a = i / Math.max(1, n) * 6.28 + 0.5; spawnEnemy('bandit', LOC.camp.x + Math.sin(a) * 5, LOC.camp.z + Math.cos(a) * 5, 'camp', { x: LOC.camp.x + Math.sin(a) * 5, z: LOC.camp.z + Math.cos(a) * 5 }); }
    if (!S.flags.leaderFate) spawnEnemy('leader', LOC.camp.x, LOC.camp.z - 3, 'leader', { x: LOC.camp.x, z: LOC.camp.z - 3 });
  }
  // boss
  if (S.quests.ruins === 1 && !S.flags.bossDead && !bossSpawned && dist2(P.pos, LOC.ruins) < 60) {
    bossSpawned = true;
    spawnEnemy('boss', LOC.ruins.x, LOC.ruins.z, 'boss', { x: LOC.ruins.x, z: LOC.ruins.z });
  }
  spawnT -= dt; if (spawnT > 0) return; spawnT = 2.5;
  // despawn far wild enemies
  for (const e of enemies) if (e.tag === 'wild' && !e.dead && dist2(e.pos, P.pos) > 110) e.remove = true;
  const wild = enemies.filter(e => e.tag === 'wild' && !e.dead).length;
  const want = isNight ? 9 : 6;
  if (wild >= want || P.dead) return;
  for (let tries = 0; tries < 8; tries++) {
    const a = Math.random() * 6.28, r = rand(42, 75);
    const x = P.pos.x + Math.sin(a) * r, z = P.pos.z + Math.cos(a) * r;
    if (Math.abs(x) > 165 || Math.abs(z) > 165) continue;
    if (Math.hypot(x, z) < 60) continue;
    if (dist2({ x, z }, LOC.house) < 18 || dist2({ x, z }, LOC.herbalist) < 18 || dist2({ x, z }, LOC.crossroad) < 15) continue;
    if (!S.flags.campCleared && dist2({ x, z }, LOC.camp) < 30) continue;
    const h = heightAt(x, z); if (h < 0.5 || h > 20) continue;
    const f = forestness(x, z);
    let type;
    const nearRuins = dist2({ x, z }, LOC.ruins) < 60;
    if (isNight) type = (nearRuins || Math.random() < 0.45) ? 'ghoul' : Math.random() < 0.6 ? 'wolf' : 'bandit';
    else type = f > 0.55 ? (Math.random() < 0.75 ? 'wolf' : 'bandit') : (Math.random() < 0.55 ? 'bandit' : 'wolf');
    const pack = type === 'wolf' ? (Math.random() < 0.5 ? 2 : 3) : (Math.random() < 0.35 ? 2 : 1);
    for (let k = 0; k < pack; k++) spawnEnemy(type, x + rand(-3, 3), z + rand(-3, 3), 'wild', { x, z });
    break;
  }
}

// ================= day / night =================
let dayK = 1, isNight = false;
const cSkyDay = new THREE.Color(0x87bfe8), cSkyNight = new THREE.Color(0x0b1328), cSkyDusk = new THREE.Color(0xf08a50);
const cSunDay = new THREE.Color(0xfff0d8), cMoon = new THREE.Color(0x8aa0ff), cSunDusk = new THREE.Color(0xffa060);
const tmpC = new THREE.Color();
function updateDayNight(dt) {
  const ang = (S.time - 0.25) * Math.PI * 2;
  const elev = Math.sin(ang);
  dayK = clamp((elev + 0.08) / 0.3, 0, 1); dayK = dayK * dayK * (3 - 2 * dayK);
  isNight = dayK < 0.25;
  const dusk = clamp(1 - Math.abs(elev) / 0.25, 0, 1);
  tmpC.copy(cSkyNight).lerp(cSkyDay, dayK).lerp(cSkyDusk, dusk * 0.45);
  scene.background.copy(tmpC); scene.fog.color.copy(tmpC);
  const sx = Math.cos(ang), sy = Math.sin(ang);
  const up = elev > -0.05;
  const lx = up ? sx : -sx, ly = up ? Math.max(0.12, sy) : Math.max(0.25, -sy);
  sun.position.set(P.pos.x + lx * 80, P.pos.y + ly * 80, P.pos.z + 30);
  sun.target.position.copy(P.pos);
  sun.intensity = lerp(0.55, 2.1, dayK);
  sun.color.copy(cMoon).lerp(cSunDay, dayK).lerp(cSunDusk, dusk * 0.6);
  hemi.intensity = lerp(0.55, 1.05, dayK);
  hemi.color.setRGB(lerp(0.35, 0.81, dayK), lerp(0.42, 0.9, dayK), lerp(0.75, 1.0, dayK));
  windowMat.emissiveIntensity = (1 - dayK) * 1.2;
  for (const m of glowMats) m.emissiveIntensity = 0.4 + (1 - dayK) * 1.2;
  W.starMat.opacity = 1 - dayK;
  W.stars.position.copy(camera.position);
  W.moon.position.set(camera.position.x - sx * 300, camera.position.y - sy * 300, camera.position.z + 80);
  W.moon.material.opacity = 1 - dayK * 0.8;
  W.sunDisc.position.set(camera.position.x + sx * 300, camera.position.y + sy * 300, camera.position.z + 80);
  W.sunDisc.visible = elev > -0.1;
  W.cloudMat.color.setRGB(lerp(0.25, 1, dayK), lerp(0.28, 1, dayK), lerp(0.4, 1, dayK));
  for (const c of W.clouds.children) { c.position.x += dt * 1.5; if (c.position.x > 240) c.position.x = -240; }
  // campfire
  if (W.fire) {
    const fl = 1 + Math.sin(clock.elapsedTime * 13) * 0.12 + Math.sin(clock.elapsedTime * 7.3) * 0.1;
    W.fire.flame.scale.set(1, fl, 1); W.fire.flame2.scale.set(1, fl * 1.1, 1);
    W.fire.light.intensity = dist2(P.pos, LOC.camp) < 60 ? (1 - dayK * 0.7) * 30 * fl : 0;
  }
  W.water.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.04;
  if (W.herbMat) W.herbMat.emissiveIntensity = 0.5 + (1 - dayK) * 1.5 + Math.sin(clock.elapsedTime * 3) * 0.2;
}

// ================= camera =================
const camTarget = new THREE.Vector3();
let titleMode = true, titleAng = 0;
function updateCamera(dt) {
  if (titleMode) {
    titleAng += dt * 0.05;
    camera.position.set(Math.sin(titleAng) * 40, 22, Math.cos(titleAng) * 40);
    camera.lookAt(0, 4, 0);
    return;
  }
  const k = Math.min(1, dt * 10);
  camTarget.x = lerp(camTarget.x, P.pos.x, k); camTarget.z = lerp(camTarget.z, P.pos.z, k);
  camTarget.y = lerp(camTarget.y, Math.max(P.pos.y, -0.5) + 1.6, k);
  let cd = camDist;
  if (targetEnemy && targetEnemy.type === 'boss' && !targetEnemy.dead) cd = camDist * 1.35;
  for (let i = 1; i <= 8; i++) {
    const t = i / 8 * cd;
    const bx = camTarget.x + Math.sin(camYaw) * Math.cos(camPitch) * t, bz = camTarget.z + Math.cos(camYaw) * Math.cos(camPitch) * t;
    const by = camTarget.y + Math.sin(camPitch) * t;
    if (by < heightAt(bx, bz) + 6 && colliders.blocked(bx, bz)) { cd = Math.max(2.2, t - cd / 8); break; }
  }
  camDistCur = lerp(camDistCur, cd, Math.min(1, dt * (cd < camDistCur ? 12 : 3)));
  cd = camDistCur;
  let cx = camTarget.x + Math.sin(camYaw) * Math.cos(camPitch) * cd;
  let cz = camTarget.z + Math.cos(camYaw) * Math.cos(camPitch) * cd;
  let cy = camTarget.y + Math.sin(camPitch) * cd;
  // keep camera above terrain along the arm
  for (let i = 1; i <= 4; i++) {
    const t = i / 4;
    const px = lerp(camTarget.x, cx, t), pz = lerp(camTarget.z, cz, t);
    const minY = heightAt(px, pz) + 0.6;
    const py = lerp(camTarget.y, cy, t);
    if (py < minY) cy += (minY - py) / t;
  }
  if (shakeAmt > 0) { cx += rand(-1, 1) * shakeAmt * 0.3; cy += rand(-1, 1) * shakeAmt * 0.3; shakeAmt = Math.max(0, shakeAmt - dt * 2); }
  camera.position.set(cx, cy, cz);
  camera.lookAt(camTarget);
}

// ================= HUD =================
const hpBar = $('hpBar'), mpBar = $('mpBar');
const mini = $('mini'), mctx = mini.getContext('2d');
let hudT = 0;
function updateHUD(dt) {
  hpBar.firstChild.style.width = (P.hp / maxHp() * 100).toFixed(1) + '%';
  hpBar.lastChild.textContent = `${Math.ceil(P.hp)} / ${maxHp()}`;
  mpBar.firstChild.style.width = (P.mana / maxMana() * 100).toFixed(1) + '%';
  mpBar.lastChild.textContent = `${Math.floor(P.mana)} / ${maxMana()}`;
  $('mpCost').style.display = P.mana < 20 ? 'block' : 'none';
  hurtFlash = Math.max(0, hurtFlash - dt * 2.5);
  const low = P.hp / maxHp() < 0.25 && !P.dead ? 0.35 + Math.sin(clock.elapsedTime * 6) * 0.15 : 0;
  $('hurt').style.opacity = Math.max(hurtFlash * 0.8, low).toFixed(2);
  hudT -= dt; if (hudT > 0) return; hudT = 0.2;
  $('sGold').textContent = `💰 ${S.gold}`;
  $('sXp').textContent = `✨ ${S.xp}`;
  $('sRen').textContent = `⭐ ${S.renown}`;
  $('potN').textContent = S.potions;
  $('titleTxt').textContent = moralTitle();
  $('morality').firstChild.style.left = `calc(${(S.morality + 100) / 2}% - 2px)`;
  const hh = Math.floor(S.time * 24), mm = Math.floor((S.time * 24 - hh) * 60);
  $('clock').textContent = `${isNight ? '🌙' : '☀️'} Dzień ${S.day}, ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
  const tq = trackedQuest();
  const qt = $('questTrack');
  if (tq) { const html = `<b>${tq.title}</b>${tq.text}`; if (qt._h !== html) { qt.innerHTML = html; qt._h = html; } qt.style.display = 'block'; }
  else qt.style.display = 'none';
  // target bar
  targetT -= 0.2;
  const tg = $('target');
  let te = targetEnemy;
  const boss = enemies.find(e => e.type === 'boss' && !e.dead && e.state !== 'idle');
  if (boss) te = boss;
  if (te && (te === boss || targetT > 0) && !te.dead) {
    tg.style.display = 'block'; tg.className = 'hud' + (te.type === 'boss' ? ' boss' : '');
    tg.firstChild.textContent = te.def.name + (te.state === 'surrender' ? ' (poddaje się)' : '');
    tg.lastChild.firstChild.style.width = (te.hp / te.maxHp * 100) + '%';
  } else tg.style.display = 'none';
  drawMinimap(tq);
}
function drawMinimap(tq) {
  const Sz = mini.width, R = 55;
  mctx.save();
  mctx.clearRect(0, 0, Sz, Sz);
  mctx.beginPath(); mctx.arc(Sz / 2, Sz / 2, Sz / 2, 0, Math.PI * 2); mctx.clip();
  const sx = (P.pos.x - R + WORLD_HALF) / 2, sy = (P.pos.z - R + WORLD_HALF) / 2;
  mctx.drawImage(W.minimap, sx, sy, R, R, 0, 0, Sz, Sz);
  if (isNight) { mctx.fillStyle = 'rgba(10,20,50,0.35)'; mctx.fillRect(0, 0, Sz, Sz); }
  const toS = (x, z) => [((x - P.pos.x) / (R * 2) + 0.5) * Sz, ((z - P.pos.z) / (R * 2) + 0.5) * Sz];
  for (const n of npcs) { if (!n.talk) continue; const [x, y] = toS(n.pos.x, n.pos.z); mctx.fillStyle = '#ffe9a0'; mctx.beginPath(); mctx.arc(x, y, 4, 0, 7); mctx.fill(); }
  for (const e of enemies) { if (e.dead) continue; const [x, y] = toS(e.pos.x, e.pos.z); mctx.fillStyle = e.type === 'boss' ? '#ff6a00' : '#e33'; mctx.beginPath(); mctx.arc(x, y, e.type === 'boss' ? 7 : 4, 0, 7); mctx.fill(); }
  if (tq && tq.target) {
    let [x, y] = toS(tq.target.x, tq.target.z);
    const dx = x - Sz / 2, dy = y - Sz / 2, d = Math.hypot(dx, dy), maxR = Sz / 2 - 12;
    if (d > maxR) { x = Sz / 2 + dx / d * maxR; y = Sz / 2 + dy / d * maxR; }
    mctx.fillStyle = '#ffd030'; mctx.strokeStyle = '#000'; mctx.lineWidth = 2;
    mctx.beginPath();
    for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2 - Math.PI / 2, r = i % 2 ? 5 : 11; mctx.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r); }
    mctx.closePath(); mctx.fill(); mctx.stroke();
  }
  // player arrow
  mctx.translate(Sz / 2, Sz / 2); mctx.rotate(-P.yaw + Math.PI);
  mctx.fillStyle = '#fff'; mctx.strokeStyle = '#000'; mctx.lineWidth = 2;
  mctx.beginPath(); mctx.moveTo(0, -11); mctx.lineTo(8, 9); mctx.lineTo(0, 4); mctx.lineTo(-8, 9); mctx.closePath(); mctx.fill(); mctx.stroke();
  mctx.restore();
  mctx.fillStyle = '#f3e9d2'; mctx.font = 'bold 18px Georgia'; mctx.textAlign = 'center'; mctx.fillText('N', Sz / 2, 20);
}

// ================= menu =================
let menuOpen = false, menuTab = 'quests';
function toggleMenu(force) {
  menuOpen = force !== undefined ? force : !menuOpen;
  $('menu').style.display = menuOpen ? 'flex' : 'none';
  if (menuOpen) { paused = true; renderMenu(); } else if (!dialogOpen && $('death').style.display !== 'flex') paused = false;
}
$('menuBtn').addEventListener('click', e => { e.stopPropagation(); initAudio(); if (!titleMode) toggleMenu(); });
$('closeMenu').addEventListener('click', () => toggleMenu(false));
const TABS = [['quests', 'Zadania'], ['skills', 'Rozwój'], ['hero', 'Postać'], ['opts', 'Opcje']];
function renderMenu() {
  const tabs = $('mTabs'); tabs.innerHTML = '';
  for (const [id, n] of TABS) {
    const b = document.createElement('button'); b.className = 'btn' + (menuTab === id ? ' sel' : ''); b.textContent = n;
    b.onclick = () => { menuTab = id; SFX.click(); renderMenu(); }; tabs.appendChild(b);
  }
  const body = $('mBody'); body.innerHTML = '';
  if (menuTab === 'quests') {
    const L = questList();
    const tq = trackedQuest();
    for (const q of L) {
      const d = document.createElement('div'); d.className = 'qitem' + (q.done ? ' done' : '') + (tq && tq.id === q.id ? ' tr' : '');
      d.innerHTML = `<b style="color:#f0d060">${q.done ? '✔ ' : tq && tq.id === q.id ? '★ ' : ''}${q.title}</b><br>${q.text}`;
      if (!q.done) d.onclick = () => { S.tracked = q.id; SFX.click(); renderMenu(); };
      body.appendChild(d);
    }
    const tip = document.createElement('p'); tip.style.opacity = .7; tip.style.fontSize = '12px';
    tip.textContent = 'Dotknij zadania, aby je śledzić (gwiazdka na minimapie). Inni mieszkańcy też mogą mieć dla ciebie prośby — rozmawiaj ze wszystkimi.';
    body.appendChild(tip);
  } else if (menuTab === 'skills') {
    body.insertAdjacentHTML('beforeend', `<p>Doświadczenie do wydania: <b style="color:#9ef">✨ ${S.xp}</b></p>`);
    for (const k of ['sila', 'magia', 'zrecznosc']) {
      const lv = S.stats[k], cost = STAT_COST[lv];
      const d = document.createElement('div'); d.className = 'stat';
      d.innerHTML = `<div style="min-width:90px"><b>${STAT_INFO[k].n}</b><div class="pips">${'◆'.repeat(lv)}${'◇'.repeat(5 - lv)}</div></div><div class="d">${STAT_INFO[k].d}</div>`;
      const b = document.createElement('button'); b.className = 'btn';
      if (lv >= 5) { b.textContent = 'MAX'; b.disabled = true; }
      else { b.textContent = `Ulepsz (${cost} ✨)`; b.disabled = S.xp < cost; b.onclick = () => { if (S.xp < cost) return; S.xp -= cost; S.stats[k]++; SFX.level(); refreshHeroLook(); P.hp = maxHp(); burst(P.pos.x, P.pos.y + 1, P.pos.z, 0x8ef0ff, 20, 3, 5, 1); saveGame(); renderMenu(); }; }
      d.appendChild(b); body.appendChild(d);
    }
    body.insertAdjacentHTML('beforeend', '<p style="font-size:12px;opacity:.7">Twoje ciało zmienia się wraz z rozwojem: siła poszerza barki, magia rozświetla ubranie błękitem.</p>');
  } else if (menuTab === 'hero') {
    const m = S.morality;
    body.innerHTML = `<h3>${moralTitle()}</h3>
      <p>Moralność: <b>${m > 0 ? '+' : ''}${m}</b> ${m >= 40 ? '(nad głową lśni aureola)' : m <= -40 ? '(wyrosły ci rogi)' : ''}<br>
      Sława: <b>${S.renown}</b> · Pokonani wrogowie: <b>${S.kills}</b> · Blizny: <b>${S.scars}</b></p>
      <h3>Ekwipunek</h3>
      <p>⚔ ${SWORDS[S.sword].name} (obrażenia ${SWORDS[S.sword].dmg + 5 * S.stats.sila})<br>
      🛡 ${ARMORS[S.armor].name} (redukcja ${Math.round((1 - ARMORS[S.armor].mul) * 100)}%)<br>
      🧪 Mikstury zdrowia: ${S.potions}<br>🌿 Księżycowe Ziele: ${S.herbsHave}<br>
      🏠 ${S.houseOwned ? 'Dom na Wzgórzu (twój)' : 'Brak domu — Dom na Wzgórzu (NE od wioski) jest na sprzedaż'}<br>
      💰 ${S.gold} zł</p>
      <p style="font-size:12px;opacity:.7">Wybory moralne zmieniają wygląd postaci i to, jak reagują na ciebie mieszkańcy.</p>`;
  } else if (menuTab === 'opts') {
    body.innerHTML = `<h3>Grafika</h3><div id="qBtns" style="display:flex;gap:8px;flex-wrap:wrap"></div>
      <p style="font-size:12px;opacity:.7">Zmiana jakości przeładuje grę (postęp jest zapisywany).</p>
      <h3>Dźwięk</h3><div id="sBtns"></div><h3>Zapis</h3><div id="saveBtns" style="display:flex;gap:8px;flex-wrap:wrap"></div>`;
    for (const [q, n] of [['low', 'Niska (szybka)'], ['medium', 'Średnia'], ['high', 'Wysoka']]) {
      const b = document.createElement('button'); b.className = 'btn' + (quality === q ? ' sel' : ''); b.textContent = n;
      b.onclick = () => { saveGame(); try { localStorage.setItem('kw_quality', q); } catch (e) { } location.reload(); };
      $('qBtns').appendChild(b);
    }
    const mb = document.createElement('button'); mb.className = 'btn'; mb.textContent = musicPref ? 'Muzyka: WŁ' : 'Muzyka: WYŁ';
    mb.onclick = () => { musicPref = !musicPref; setMusic(musicPref); try { localStorage.setItem('kw_music', musicPref ? '1' : '0'); } catch (e) { } renderMenu(); };
    $('sBtns').appendChild(mb);
    const sb = document.createElement('button'); sb.className = 'btn'; sb.textContent = 'Zapisz grę';
    sb.onclick = () => { saveGame(); toast('Gra zapisana.', 'g'); };
    const nb = document.createElement('button'); nb.className = 'btn evil'; nb.textContent = 'Nowa gra (usuń zapis)';
    nb.onclick = () => { if (confirm('Na pewno usunąć zapis i zacząć od nowa?')) { try { localStorage.removeItem(SAVE_KEY); } catch (e) { } location.reload(); } };
    $('saveBtns').appendChild(sb); $('saveBtns').appendChild(nb);
  }
}
window.onAndroidBack = () => {
  if (titleMode) return;
  if (dialogOpen) { closeDialog(); return; }
  toggleMenu();
};

// ================= save / load =================
function saveGame() {
  if (titleMode) return;
  S.pos = { x: P.pos.x, z: P.pos.z }; S.hp = P.hp; S.mana = P.mana;
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch (e) { }
}
window.saveGame = saveGame;
function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY); if (!raw) return false;
    const d = JSON.parse(raw); const f = freshState();
    S = { ...f, ...d, stats: { ...f.stats, ...d.stats }, quests: { ...f.quests, ...d.quests }, flags: { ...f.flags, ...d.flags } };
    return true;
  } catch (e) { return false; }
}
function applyLoaded() {
  P.pos.set(S.pos.x, heightAt(S.pos.x, S.pos.z), S.pos.z);
  if (P.pos.y < -0.9) P.pos.set(0, 2.5, 9);
  P.hp = clamp(S.hp || maxHp(), 1, maxHp()); P.mana = clamp(S.mana ?? maxMana(), 0, maxMana());
  fox.pos.set(P.pos.x + 2, 0, P.pos.z + 2); fox.pos.y = heightAt(fox.pos.x, fox.pos.z);
  for (const h of W.herbs) if (S.herbTaken[h.i]) h.group.visible = false;
  for (const c of W.chests) if (S.chestOpened[c.i]) c.lid.rotation.x = -1.9;
  if (S.flags.bossDead && W.runeMat) W.runeMat.emissive.set(0x40a0ff);
  camYaw = 0; P.yaw = Math.PI;
  refreshHeroLook();
}
setInterval(() => { if (!titleMode && !P.dead) saveGame(); }, 30000);
document.addEventListener('visibilitychange', () => { if (document.hidden) saveGame(); });

// ================= victory =================
function showVictory() {
  const m = S.morality;
  const ending = m >= 30
    ? 'Rycerz Popiołu rozsypał się w pył, a nad ruinami po raz pierwszy od stu lat wzeszło czyste słońce. Ludzie Brzeziny wiwatują na twoją cześć, a dzieci przynoszą ci wianki z wrzosu. Twoja legenda będzie opowiadana przy ogniskach jako historia światła.'
    : m <= -30
      ? 'Rycerz Popiołu padł… ale gdy podnosisz jego płonący miecz, czujesz, jak ciemność rozpoznaje w tobie swojego. Ludzie Brzeziny kłaniają się nisko — bardziej ze strachu niż z wdzięczności. Nowy władca tych ziem właśnie się narodził.'
      : 'Rycerz Popiołu został pokonany. Ludzie Brzeziny dziękują ci — choć nie wiedzą jeszcze, czy jesteś bohaterem, czy tylko najemnikiem, który dobrze wykonał robotę. Twoja historia wciąż się pisze.';
  $('vText').innerHTML = `${ending}<br><br><b style="color:#f0d060">Tytuł: ${moralTitle()}</b><br>Sława: ${S.renown} · Pokonani wrogowie: ${S.kills} · Dzień ${S.day}<br><br><span style="font-size:13px;opacity:.8">Świat pozostaje otwarty — dokończ zadania, kup dom, zbierz skarby.</span>`;
  $('victory').style.display = 'flex'; paused = true;
}
$('bVic').addEventListener('click', () => { $('victory').style.display = 'none'; paused = false; toast('Wróć do Sołtysa Bogumiła po nagrodę.', 'q'); });
$('bRespawn').addEventListener('click', respawn);

// ================= start screen =================
const hasSave = (() => { try { return !!localStorage.getItem(SAVE_KEY); } catch (e) { return false; } })();
if (hasSave) $('bContinue').style.display = 'inline-block';
function hideControls(h) { for (const id of ['bAtk', 'bMag', 'bRoll', 'bPot', 'joy', 'menuBtn', 'hudTL', 'hudTR']) $(id).style.visibility = h ? 'hidden' : 'visible'; }
hideControls(true);
function beginGame() {
  titleMode = false; paused = false; hideControls(false);
  camYaw = P.yaw + Math.PI; camTarget.copy(P.pos);
  camYaw = 0;
  toast('Zapis automatyczny jest włączony.', '', 2.5);
}
$('bContinue').addEventListener('click', () => { initAudio(); if (loadGame()) applyLoaded(); $('start').style.display = 'none'; beginGame(); toast(`Witaj z powrotem, ${moralTitle().toLowerCase()}!`, 'g'); });
$('bNew').addEventListener('click', () => { initAudio(); S = freshState(); P.pos.set(0, 2.5, 9); P.hp = maxHp(); P.mana = maxMana(); refreshHeroLook(); $('start').style.display = 'none'; $('intro').style.display = 'flex'; });
$('bBegin').addEventListener('click', () => { $('intro').style.display = 'none'; P.yaw = Math.PI; beginGame(); camYaw = 0; P.yaw = Math.PI; saveGame(); toast('Porozmawiaj z Sołtysem przy studni.', 'q', 4); });
refreshHeroLook();

// ================= main loop =================
const clock = new THREE.Clock();
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(clock.getDelta(), 0.05);
  if (!titleMode && !paused) {
    const prevT = S.time;
    S.time += dt / DAY_LEN;
    if (S.time >= 1) { S.time -= 1; S.day++; dailyIncome(); }
    updatePlayer(dt);
    for (const e of enemies) e.update(dt);
    for (let i = enemies.length - 1; i >= 0; i--) if (enemies[i].remove) { scene.remove(enemies[i].mesh.group); if (targetEnemy === enemies[i]) targetEnemy = null; enemies.splice(i, 1); }
    updateFox(dt);
    updateProjectiles(dt);
    updatePickups(dt);
    spawner(dt);
    if (slamRing.visible && slamRingOwner) { ringMat.opacity = 0.35 + Math.sin(clock.elapsedTime * 20) * 0.2; }
  } else if (titleMode) {
    S.time = 0.36 + Math.sin(clock.elapsedTime * 0.02) * 0.01;
  }
  if (!paused || titleMode) updateNPCs(dt);
  updateParticles(dt);
  updateDayNight(dt);
  updateCamera(dt);
  updateFloats(dt);
  if (!titleMode) { updateHUD(dt); updateInteract(); }
  const inCombat = enemies.some(e => !e.dead && (e.state === 'chase' || e.state === 'windup' || e.state === 'recover'));
  musicTick(performance.now() / 1000, inCombat ? 'combat' : isNight ? 'night' : 'day');
  renderer.render(scene, camera);
}
frame();
window.__dbg = { P, S: () => S, enemies, npcs, W, LOC, spawnEnemy, setS: v => { S = v; } , talk: id => npcs.find(n => n.id === id).talk() };
