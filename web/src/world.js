import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { fbm, mulberry32 } from './noise.js';

export const WORLD_HALF = 210;
export const LOC = {
  village: { x: 0, z: 0 },
  herbalist: { x: -48, z: -30 },
  camp: { x: -80, z: -112 },
  ruins: { x: 118, z: -100 },
  lake: { x: -95, z: 72 },
  house: { x: 44, z: 62 },
  crossroad: { x: 54, z: -50 },
};
const PATHS = [
  [[0, 0], [-30, -40], [-80, -112]],
  [[0, 0], [52, -52], [118, -100]],
  [[0, 0], [44, 62]],
  [[0, 0], [-48, -30]],
  [[0, 0], [-55, 45], [-75, 52]],
];

const sstep = (e0, e1, x) => { const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };
function segDist(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  let t = ((px - ax) * dx + (pz - az) * dz) / (dx * dx + dz * dz);
  t = Math.max(0, Math.min(1, t));
  const qx = ax + dx * t - px, qz = az + dz * t - pz;
  return Math.sqrt(qx * qx + qz * qz);
}
export function pathDist(x, z) {
  let m = 1e9;
  for (const p of PATHS) for (let i = 0; i < p.length - 1; i++) {
    const d = segDist(x, z, p[i][0], p[i][1], p[i + 1][0], p[i + 1][1]);
    if (d < m) m = d;
  }
  return m;
}
function rawHeight(x, z) {
  let h = (fbm(x * 0.011 + 50, z * 0.011 + 50, 4, 1) - 0.5) * 26 + (fbm(x * 0.06, z * 0.06, 2, 9) - 0.5) * 2.5 + 2.5;
  const e = Math.max(Math.abs(x), Math.abs(z));
  if (e > 150) h += Math.pow((e - 150) / 40, 2) * 45;
  h += 8 * Math.exp(-((x - LOC.house.x) ** 2 + (z - LOC.house.z) ** 2) / (2 * 16 * 16));
  return h;
}
function flat(h, x, z, c, r0, r1, target) {
  const d = Math.hypot(x - c.x, z - c.z);
  if (d >= r1) return h;
  return target + (h - target) * sstep(r0, r1, d);
}
const T = {};
function targets() {
  if (T.ok) return T;
  T.camp = Math.max(2, rawHeight(LOC.camp.x, LOC.camp.z));
  T.ruins = Math.max(3, rawHeight(LOC.ruins.x, LOC.ruins.z)) + 1.5;
  T.herb = Math.max(2, rawHeight(LOC.herbalist.x, LOC.herbalist.z));
  T.house = rawHeight(LOC.house.x, LOC.house.z);
  T.cross = Math.max(1.5, rawHeight(LOC.crossroad.x, LOC.crossroad.z));
  T.ok = true; return T;
}
export function heightAt(x, z) {
  const t = targets();
  let h = rawHeight(x, z);
  h = flat(h, x, z, LOC.lake, 16, 46, -4);
  h = flat(h, x, z, LOC.village, 30, 48, 2.5);
  h = flat(h, x, z, LOC.camp, 14, 26, t.camp);
  h = flat(h, x, z, LOC.ruins, 18, 32, t.ruins);
  h = flat(h, x, z, LOC.herbalist, 6, 13, t.herb);
  h = flat(h, x, z, LOC.house, 7, 12, t.house);
  h = flat(h, x, z, LOC.crossroad, 5, 10, t.cross);
  if (h < 0.8) {
    const pd = pathDist(x, z);
    if (pd < 7) h = h + (0.8 - h) * (1 - sstep(3, 7, pd));
  }
  return h;
}
export function forestness(x, z) {
  let f = fbm(x * 0.018 + 11, z * 0.018 - 7, 3, 21);
  f += 0.28 * Math.max(0, Math.min(1, -(x + z) / 120));
  return f;
}

// ---------- colliders ----------
export class Colliders {
  constructor() { this.grid = new Map(); this.cell = 10; }
  _ins(o, r) {
    const cs = this.cell;
    for (let i = Math.floor((o.x - r) / cs); i <= Math.floor((o.x + r) / cs); i++)
      for (let j = Math.floor((o.z - r) / cs); j <= Math.floor((o.z + r) / cs); j++) {
        const k = i * 1000 + j; let l = this.grid.get(k);
        if (!l) { l = []; this.grid.set(k, l); } l.push(o);
      }
  }
  addCircle(x, z, r) { this._ins({ x, z, r }, r); }
  addBox(x, z, hw, hd, rot = 0) {
    this._ins({ x, z, hw, hd, c: Math.cos(rot), s: Math.sin(rot), box: true }, Math.hypot(hw, hd));
  }
  blocked(x, z) {
    const l = this.grid.get(Math.floor(x / this.cell) * 1000 + Math.floor(z / this.cell));
    if (!l) return false;
    for (const o of l) {
      if (o.box) {
        const dx = x - o.x, dz = z - o.z;
        const lx = dx * o.c - dz * o.s, lz = dx * o.s + dz * o.c;
        if (Math.abs(lx) < o.hw + 0.3 && Math.abs(lz) < o.hd + 0.3) return true;
      } else if (o.r > 1.5 && Math.hypot(x - o.x, z - o.z) < o.r) return true;
    }
    return false;
  }
  resolve(p, r) {
    const cs = this.cell; const i0 = Math.floor(p.x / cs), j0 = Math.floor(p.z / cs);
    let hit = false;
    for (let di = -1; di <= 1; di++) for (let dj = -1; dj <= 1; dj++) {
      const l = this.grid.get((i0 + di) * 1000 + (j0 + dj)); if (!l) continue;
      for (const o of l) {
        if (o.box) {
          const dx = p.x - o.x, dz = p.z - o.z;
          const lx = dx * o.c - dz * o.s, lz = dx * o.s + dz * o.c;
          const cx = Math.max(-o.hw, Math.min(lx, o.hw)), cz = Math.max(-o.hd, Math.min(lz, o.hd));
          let ex = lx - cx, ez = lz - cz; const d2 = ex * ex + ez * ez;
          if (d2 < r * r) {
            let nlx, nlz;
            if (d2 > 1e-8) { const d = Math.sqrt(d2); nlx = cx + ex / d * r; nlz = cz + ez / d * r; }
            else {
              const m = Math.min(o.hw - lx, lx + o.hw, o.hd - lz, lz + o.hd);
              nlx = lx; nlz = lz;
              if (m === o.hw - lx) nlx = o.hw + r; else if (m === lx + o.hw) nlx = -o.hw - r;
              else if (m === o.hd - lz) nlz = o.hd + r; else nlz = -o.hd - r;
            }
            p.x = o.x + nlx * o.c + nlz * o.s;
            p.z = o.z - nlx * o.s + nlz * o.c;
            hit = true;
          }
        } else {
          const dx = p.x - o.x, dz = p.z - o.z, rr = r + o.r, d2 = dx * dx + dz * dz;
          if (d2 < rr * rr && d2 > 1e-8) { const d = Math.sqrt(d2); p.x = o.x + dx / d * rr; p.z = o.z + dz / d * rr; hit = true; }
        }
      }
    }
    return hit;
  }
}

// ---------- helpers ----------
const matCache = new Map();
export function lam(c, extra) {
  const k = c + (extra ? JSON.stringify(extra) : '');
  let m = matCache.get(k);
  if (!m) { m = new THREE.MeshLambertMaterial({ color: c, ...(extra || {}) }); matCache.set(k, m); }
  return m;
}
function colorize(geo, c) {
  geo = geo.index ? geo.toNonIndexed() : geo;
  const col = new THREE.Color(c); const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = col.r; arr[i * 3 + 1] = col.g; arr[i * 3 + 2] = col.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  if (geo.attributes.uv) geo.deleteAttribute('uv');
  return geo;
}
function gableRoof(w, d, h, ov = 0.4) {
  const x = w / 2 + ov, z = d / 2 + ov;
  const A = [-x, 0, -z], B = [x, 0, -z], C = [x, 0, z], D = [-x, 0, z], E = [-x, h, 0], F = [x, h, 0];
  const tris = [D, C, F, D, F, E, B, A, E, B, E, F, A, D, E, C, B, F];
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(tris.flat(), 3));
  g.computeVertexNormals();
  return g;
}
function mesh(geo, mat, x = 0, y = 0, z = 0, parent) {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z);
  m.castShadow = true; m.receiveShadow = true;
  if (parent) parent.add(m);
  return m;
}

export const PREFAB_SCALE = 1.12;
export const PREFABS = {
  P_SmallA: { w: 4, d: 4 }, P_SmallB: { w: 4, d: 4 }, P_Long: { w: 4, d: 6 }, P_Medium: { w: 6, d: 6 },
  P_Tavern: { w: 6, d: 8 }, P_Manor: { w: 6, d: 6 }, P_Hut: { w: 4, d: 4 },
};
export const windowMat = new THREE.MeshLambertMaterial({ color: 0x3a2f1f, emissive: 0xffb347, emissiveIntensity: 0 });
export const glowMats = [];

function makeHouse(o, colliders) {
  const g = new THREE.Group();
  const w = o.w, d = o.d, h = o.h ?? 3;
  mesh(new THREE.BoxGeometry(w, 0.5, d), lam(0x7d7468), 0, 0.0, 0, g);
  mesh(new THREE.BoxGeometry(w, h, d), lam(o.wall ?? 0xe8dcc0), 0, h / 2 + 0.25, 0, g);
  const beam = lam(0x5a3d24);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) mesh(new THREE.BoxGeometry(0.25, h, 0.25), beam, sx * w / 2, h / 2 + 0.25, sz * d / 2, g);
  mesh(new THREE.BoxGeometry(w + 0.1, 0.22, 0.12), beam, 0, h * 0.55 + 0.25, d / 2 + 0.02, g);
  const roof = mesh(gableRoof(w, d, o.roofH ?? 2.2), lam(o.roof ?? 0x8b3a2a, { flatShading: true }), 0, h + 0.25, 0, g);
  if (o.rotRoof) roof.rotation.y = Math.PI / 2;
  mesh(new THREE.BoxGeometry(1.0, 1.8, 0.1), lam(0x4a2f1a), 0, 1.15, d / 2 + 0.05, g);
  for (const sx of [-1, 1]) mesh(new THREE.BoxGeometry(0.7, 0.7, 0.08), windowMat, sx * w * 0.3, 1.9, d / 2 + 0.05, g);
  for (const sx of [-1, 1]) { const wm = mesh(new THREE.BoxGeometry(0.08, 0.7, 0.7), windowMat, sx * (w / 2 + 0.04), 1.9, 0, g); wm.castShadow = false; }
  if (o.chimney) mesh(new THREE.BoxGeometry(0.6, 1.6, 0.6), lam(0x6d6258), w * 0.25, h + 1.6, -d * 0.15, g);
  g.position.set(o.x, o.y, o.z); g.rotation.y = o.rot ?? 0;
  colliders.addBox(o.x, o.z, w / 2 + 0.1, d / 2 + 0.1, o.rot ?? 0);
  return g;
}

export function buildWorld(scene, quality) {
  const rng = mulberry32(1337);
  const colliders = new Colliders();
  const out = { colliders, spots: {}, herbs: [], chests: [], villageHomes: [], houses: [], props: [] };
  function prefabHouse(kind, x, y, z, rot, parent, extra = {}) {
    const P = PREFABS[kind], k = PREFAB_SCALE;
    const o = Object.assign({ x, y, z, rot, w: P.w * k + 0.25, d: P.d * k + 0.25, h: 3, roofH: 2.2 }, extra);
    const g = makeHouse(o, colliders); parent.add(g);
    out.houses.push({ kind, x, y, z, rot, group: g, parent });
    return o;
  }
  // procedural stand-in that main.js swaps for a kit prefab once village.glb has loaded
  const kitProp = (kind, group, parent, s = 1) => out.props.push({ kind, group, parent, s });

  // ----- terrain -----
  const SIZE = WORLD_HALF * 2, SEG = quality === 'low' ? 120 : 168;
  const tg = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG);
  tg.rotateX(-Math.PI / 2);
  const pos = tg.attributes.position;
  const cols = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  const grassA = new THREE.Color(0x5c9a3c), grassB = new THREE.Color(0x7fae46), forestC = new THREE.Color(0x3e6e2c);
  const sand = new THREE.Color(0xcdbb84), rock = new THREE.Color(0x857d70), snow = new THREE.Color(0xf2f4f6), dirt = new THREE.Color(0x9a7b52), heath = new THREE.Color(0x8a5a8a);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const h = heightAt(x, z); pos.setY(i, h);
    const n = fbm(x * 0.08, z * 0.08, 2, 5);
    c.copy(grassA).lerp(grassB, n);
    const f = forestness(x, z);
    if (f > 0.55) c.lerp(forestC, Math.min(1, (f - 0.55) * 4));
    const hz = fbm(x * 0.03 + 3, z * 0.03, 2, 77);
    if (hz > 0.66 && h > 3) c.lerp(heath, Math.min(0.6, (hz - 0.66) * 4));
    const pd = pathDist(x, z);
    if (pd < 3.2) c.lerp(dirt, 1 - sstep(1.6, 3.2, pd));
    if (Math.hypot(x, z) < 14) c.lerp(dirt, 0.6 * (1 - Math.hypot(x, z) / 14));
    if (Math.hypot(x - LOC.ruins.x, z - LOC.ruins.z) < 22) c.lerp(rock, 0.45);
    if (h < 1.2) c.lerp(sand, Math.min(1, (1.2 - h) / 0.8));
    if (h > 16) c.lerp(rock, Math.min(1, (h - 16) / 8));
    if (h > 34) c.lerp(snow, Math.min(1, (h - 34) / 6));
    cols[i * 3] = c.r; cols[i * 3 + 1] = c.g; cols[i * 3 + 2] = c.b;
  }
  tg.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  tg.computeVertexNormals();
  const terrain = new THREE.Mesh(tg, new THREE.MeshLambertMaterial({ vertexColors: true }));
  terrain.receiveShadow = true;
  scene.add(terrain);

  // ----- water -----
  const water = new THREE.Mesh(new THREE.PlaneGeometry(SIZE, SIZE), new THREE.MeshPhongMaterial({ color: 0x2f74a8, transparent: true, opacity: 0.78, shininess: 90, specular: 0x88aacc }));
  water.rotation.x = -Math.PI / 2; water.position.y = 0;
  scene.add(water); out.water = water;

  const excluded = (x, z, extra = 0) => {
    if (Math.hypot(x, z) < 50 + extra) return true;
    if (Math.hypot(x - LOC.camp.x, z - LOC.camp.z) < 20 + extra) return true;
    if (Math.hypot(x - LOC.ruins.x, z - LOC.ruins.z) < 30 + extra) return true;
    if (Math.hypot(x - LOC.house.x, z - LOC.house.z) < 14 + extra) return true;
    if (Math.hypot(x - LOC.herbalist.x, z - LOC.herbalist.z) < 11 + extra) return true;
    if (Math.hypot(x - LOC.crossroad.x, z - LOC.crossroad.z) < 10 + extra) return true;
    return false;
  };

  // ----- trees (instanced, vertex coloured) -----
  const pineGeo = mergeGeometries([
    colorize(new THREE.CylinderGeometry(0.16, 0.24, 1.6, 5).translate(0, 0.8, 0), 0x5a3d24),
    colorize(new THREE.ConeGeometry(1.5, 2.8, 7).translate(0, 2.6, 0), 0x2f5e34),
    colorize(new THREE.ConeGeometry(1.1, 2.2, 7).translate(0, 3.9, 0), 0x3a6e3c),
  ]);
  const leafGeo = mergeGeometries([
    colorize(new THREE.CylinderGeometry(0.2, 0.3, 2.2, 5).translate(0, 1.1, 0), 0x6a4a2c),
    colorize(new THREE.IcosahedronGeometry(1.7, 0).translate(0, 3.2, 0), 0x4f8a35),
    colorize(new THREE.IcosahedronGeometry(1.1, 0).translate(0.9, 3.9, 0.3), 0x5f9a3e),
  ]);
  const bushGeo = colorize(new THREE.IcosahedronGeometry(0.8, 0).scale(1, 0.7, 1).translate(0, 0.4, 0), 0x4a7f30);
  const vcMat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const pines = [], leafs = [], bushes = [];
  for (let i = 0; i < 9000 && pines.length + leafs.length < (quality === 'low' ? 650 : 1000); i++) {
    const x = (rng() * 2 - 1) * 175, z = (rng() * 2 - 1) * 175;
    const f = forestness(x, z);
    const lone = rng() < 0.012;
    if (!(f > 0.56 + rng() * 0.12) && !lone) continue;
    if (excluded(x, z)) continue;
    if (pathDist(x, z) < 4.5) continue;
    const h = heightAt(x, z);
    if (h < 0.9 || h > 26) continue;
    const s = 0.8 + rng() * 0.7;
    const isPine = (f > 0.68 || h > 12) ? rng() < 0.75 : rng() < 0.3;
    (isPine ? pines : leafs).push({ x, z, y: h - 0.1, s, r: rng() * 6.28 });
    colliders.addCircle(x, z, 0.45 * s);
  }
  for (let i = 0; i < 2500 && bushes.length < 350; i++) {
    const x = (rng() * 2 - 1) * 170, z = (rng() * 2 - 1) * 170;
    if (excluded(x, z, -10) || pathDist(x, z) < 3) continue;
    const h = heightAt(x, z); if (h < 1 || h > 24) continue;
    if (forestness(x, z) < 0.45 && rng() < 0.6) continue;
    bushes.push({ x, z, y: h, s: 0.7 + rng() * 0.8, r: rng() * 6.28 });
  }
  const dummy = new THREE.Object3D();
  const tint = new THREE.Color();
  function inst(geo, list, mat, shadow = true) {
    const im = new THREE.InstancedMesh(geo, mat, Math.max(1, list.length));
    list.forEach((t, i) => {
      dummy.position.set(t.x, t.y, t.z); dummy.rotation.set(0, t.r, 0);
      dummy.scale.set(t.s * (t.sx ?? 1), t.s * (t.sy ?? 1), t.s * (t.sz ?? 1)); dummy.updateMatrix();
      im.setMatrixAt(i, dummy.matrix);
      const v = 0.82 + rng() * 0.3; tint.setRGB(v * (t.cr ?? 1), v * (t.cg ?? 1), v * (t.cb ?? 1));
      im.setColorAt(i, tint);
    });
    im.count = list.length;
    im.castShadow = shadow; im.receiveShadow = true;
    scene.add(im); return im;
  }
  inst(pineGeo, pines, vcMat);
  inst(leafGeo, leafs, vcMat);
  inst(bushGeo, bushes, vcMat, false);

  // rocks
  const rocks = [];
  for (let i = 0; i < 3000 && rocks.length < 220; i++) {
    const x = (rng() * 2 - 1) * 185, z = (rng() * 2 - 1) * 185;
    if (excluded(x, z, -15) || pathDist(x, z) < 3.5) continue;
    const h = heightAt(x, z); if (h < -1) continue;
    const s = 0.4 + rng() * rng() * 2.2;
    rocks.push({ x, z, y: h - 0.2 * s, s, sy: 0.6 + rng() * 0.4, r: rng() * 6.28 });
    if (s > 0.9) colliders.addCircle(x, z, s * 0.85);
  }
  inst(colorize(new THREE.DodecahedronGeometry(1, 0), 0x8f8a80), rocks, vcMat);

  // grass tufts & flowers
  const grassGeo = mergeGeometries([
    colorize(new THREE.ConeGeometry(0.07, 0.55, 3).translate(0, 0.27, 0), 0x6fa040),
    colorize(new THREE.ConeGeometry(0.07, 0.45, 3).translate(0.12, 0.22, 0.05), 0x82b44a),
    colorize(new THREE.ConeGeometry(0.07, 0.5, 3).translate(-0.1, 0.25, -0.06), 0x5f9038),
  ]);
  const grass = [], flowers = [];
  const NG = quality === 'low' ? 1500 : 4000;
  for (let i = 0; i < NG * 3 && grass.length < NG; i++) {
    const x = (rng() * 2 - 1) * 160, z = (rng() * 2 - 1) * 160;
    const h = heightAt(x, z); if (h < 1.2 || h > 15) continue;
    if (pathDist(x, z) < 2.5 || Math.hypot(x, z) < 12) continue;
    grass.push({ x, z, y: h, s: 0.8 + rng() * 0.9, r: rng() * 6.28 });
    if (rng() < 0.18) {
      const col = [[1, 1, 1], [1, 0.9, 0.2], [0.8, 0.4, 1], [1, 0.3, 0.3], [0.5, 0.7, 1]][Math.floor(rng() * 5)];
      flowers.push({ x: x + 0.4, z: z + 0.3, y: h, s: 0.8 + rng() * 0.6, r: rng() * 6.28, cr: col[0], cg: col[1], cb: col[2] });
    }
  }
  inst(grassGeo, grass, vcMat, false);
  const flowerGeo = mergeGeometries([
    colorize(new THREE.CylinderGeometry(0.02, 0.02, 0.4, 3).translate(0, 0.2, 0), 0x4a8a30),
    colorize(new THREE.IcosahedronGeometry(0.09, 0).translate(0, 0.42, 0), 0xffffff),
  ]);
  inst(flowerGeo, flowers, new THREE.MeshLambertMaterial({ vertexColors: true }), false);

  // ----- village -----
  const village = new THREE.Group(); scene.add(village);
  const pathAngles = PATHS.map(p => Math.atan2(p[1][0], p[1][1]));
  const angDiff = (a, b) => { let d = Math.abs(a - b) % (Math.PI * 2); return d > Math.PI ? Math.PI * 2 - d : d; };
  const spots = [];
  for (let a = 0; a < 360; a += 26) {
    const ang = a * Math.PI / 180 + 0.2;
    if (pathAngles.some(pa => angDiff(ang, pa) < 0.36)) continue;
    const r = spots.length % 2 ? 25 : 18;
    spots.push({ x: Math.sin(ang) * r, z: Math.cos(ang) * r, ang });
  }
  const roofs = [0x8b3a2a, 0x6e4a2a, 0x9a5a30, 0x7a3030, 0x5a4a3a];
  const KINDS = ['P_Long', 'P_SmallB', 'P_Medium', 'P_SmallA', 'P_Long', 'P_Medium', 'P_SmallB', 'P_Long'];
  spots.forEach((s, i) => {
    const tavern = i === 0, widow = i === 2;
    const kind = tavern ? 'P_Tavern' : widow ? 'P_SmallA' : KINDS[i % KINDS.length];
    const o = prefabHouse(kind, s.x, 2.5, s.z, s.ang + Math.PI, village, { h: tavern ? 4 : 3, roof: roofs[i % roofs.length], chimney: i % 2 === 0, roofH: tavern ? 2.8 : 2.2, wall: i % 3 === 1 ? 0xd8c8a8 : 0xe8dcc0 });
    const door = { x: s.x - Math.sin(s.ang) * (o.d / 2 + 1.8), z: s.z - Math.cos(s.ang) * (o.d / 2 + 1.8) };
    out.villageHomes.push(door);
    if (tavern) {
      out.spots.tavern = door;
      const sign = new THREE.Group();
      mesh(new THREE.BoxGeometry(0.15, 3, 0.15), lam(0x5a3d24), 0, 1.5, 0, sign);
      mesh(new THREE.BoxGeometry(1.2, 0.7, 0.1), lam(0xb08040), 0.6, 2.6, 0, sign);
      mesh(new THREE.BoxGeometry(0.4, 0.4, 0.12), lam(0xd4a020), 0.6, 2.6, 0, sign);
      sign.position.set(door.x + 2.5, 2.5, door.z); sign.rotation.y = Math.atan2(-door.x - 2.5, -door.z); village.add(sign);
      kitProp('P_Sign', sign, village);
    }
    if (widow) out.spots.widow = door;
  });
  out.spots.lender = { x: out.spots.tavern.x * 0.85 + 1.5, z: out.spots.tavern.z * 0.85 };

  // well
  const well = new THREE.Group();
  mesh(new THREE.CylinderGeometry(1.2, 1.3, 1.0, 10), lam(0x8a8378), 0, 0.5, 0, well);
  mesh(new THREE.CylinderGeometry(0.95, 0.95, 0.05, 10), lam(0x1f3a55), 0, 0.95, 0, well);
  for (const sx of [-1, 1]) mesh(new THREE.BoxGeometry(0.15, 2.2, 0.15), lam(0x5a3d24), sx * 1.0, 1.6, 0, well);
  mesh(gableRoof(2.2, 1.6, 0.8, 0.2), lam(0x7a3a2a, { flatShading: true }), 0, 2.6, 0, well).rotation.y = Math.PI / 2;
  well.position.set(0, 2.5, 0); village.add(well);
  kitProp('P_Well', well, village);
  colliders.addCircle(0, 0, 1.4);

  // market stall
  const stall = new THREE.Group();
  mesh(new THREE.BoxGeometry(3, 1, 1.4), lam(0x8a6a40), 0, 0.5, 0, stall);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) mesh(new THREE.BoxGeometry(0.12, 2.6, 0.12), lam(0x5a3d24), sx * 1.4, 1.3, sz * 0.65, stall);
  const awn = mesh(new THREE.BoxGeometry(3.4, 0.1, 1.9), lam(0xb83a3a), 0, 2.6, 0, stall); awn.rotation.x = 0.15;
  for (let i = 0; i < 5; i++) mesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), lam([0xd4a020, 0x8a2a8a, 0x2a8a3a, 0xc04020, 0x3060c0][i]), -1.1 + i * 0.55, 1.15, 0, stall);
  stall.position.set(-7, 2.5, 6); stall.rotation.y = 0.6; village.add(stall);
  kitProp('P_Stall', stall, village);
  colliders.addBox(-7, 6, 1.6, 0.8, 0.6);
  out.spots.merchant = { x: -7 - Math.sin(0.6) * 1.4, z: 6 - Math.cos(0.6) * 1.4 };
  out.spots.elder = { x: 3, z: 3 };

  // lantern posts
  const lanternMat = new THREE.MeshLambertMaterial({ color: 0x332211, emissive: 0xffaa44, emissiveIntensity: 0 });
  glowMats.push(lanternMat);
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2 + 0.4, r = 11;
    const lp = new THREE.Group();
    mesh(new THREE.BoxGeometry(0.15, 2.6, 0.15), lam(0x3a2a1a), 0, 1.3, 0, lp);
    mesh(new THREE.BoxGeometry(0.35, 0.45, 0.35), lanternMat, 0, 2.7, 0, lp);
    lp.position.set(Math.sin(a) * r, 2.5, Math.cos(a) * r); lp.rotation.y = a + Math.PI / 2; village.add(lp);
    kitProp('P_Lantern', lp, village);
    out.lanterns = out.lanterns || []; out.lanterns.push(lp.position.clone());
    colliders.addCircle(lp.position.x, lp.position.z, 0.2);
  }

  // ----- herbalist hut -----
  prefabHouse('P_Hut', LOC.herbalist.x, heightAt(LOC.herbalist.x, LOC.herbalist.z), LOC.herbalist.z, Math.atan2(-LOC.herbalist.x, -LOC.herbalist.z), scene, { h: 2.6, roof: 0x4a6a2a, wall: 0xc8b890, chimney: true });
  const ha = Math.atan2(-LOC.herbalist.x, -LOC.herbalist.z);
  out.spots.herbalist = { x: LOC.herbalist.x + Math.sin(ha) * 4.5, z: LOC.herbalist.z + Math.cos(ha) * 4.5 };
  for (let i = 0; i < 6; i++) {
    const pot = mesh(new THREE.CylinderGeometry(0.25, 0.2, 0.4, 6), lam(0xa0603a), 0, 0, 0);
    pot.position.set(LOC.herbalist.x + Math.sin(ha + 0.6 + i * 0.12) * 4, heightAt(LOC.herbalist.x, LOC.herbalist.z) + 0.2, LOC.herbalist.z + Math.cos(ha + 0.6 + i * 0.12) * 4);
    scene.add(pot);
  }

  // ----- crossroad alchemist wagon -----
  {
    const cx = LOC.crossroad.x + 4, cz = LOC.crossroad.z + 3, cy = heightAt(cx, cz);
    const wag = new THREE.Group();
    mesh(new THREE.BoxGeometry(2.2, 1.6, 3.4), lam(0x4a2a5a), 0, 1.4, 0, wag);
    mesh(gableRoof(2.2, 3.4, 0.9, 0.2), lam(0x2a1a3a, { flatShading: true }), 0, 2.2, 0, wag).rotation.y = Math.PI / 2;
    const wheelG = new THREE.CylinderGeometry(0.55, 0.55, 0.15, 10);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const w = mesh(wheelG, lam(0x3a2a1a), sx * 1.15, 0.55, sz * 1.1, wag); w.rotation.z = Math.PI / 2; }
    const lamp = new THREE.MeshLambertMaterial({ color: 0x224422, emissive: 0x66ff88, emissiveIntensity: 0.6 });
    glowMats.push(lamp);
    mesh(new THREE.BoxGeometry(0.3, 0.4, 0.3), lamp, 1.2, 2.0, 1.5, wag);
    wag.position.set(cx, cy, cz); wag.rotation.y = 0.4; scene.add(wag);
    colliders.addBox(cx, cz, 1.2, 1.8, 0.4);
    out.spots.alchemist = { x: LOC.crossroad.x, z: LOC.crossroad.z };
    const post = new THREE.Group();
    mesh(new THREE.BoxGeometry(0.15, 2.4, 0.15), lam(0x5a3d24), 0, 1.2, 0, post);
    for (let i = 0; i < 3; i++) { const b = mesh(new THREE.BoxGeometry(1.2, 0.25, 0.06), lam(0xa07a4a), 0.4, 2.0 - i * 0.35, 0, post); b.rotation.y = i * 1.3; }
    post.position.set(LOC.crossroad.x - 2.5, heightAt(LOC.crossroad.x - 2.5, LOC.crossroad.z - 2), LOC.crossroad.z - 2); scene.add(post);
  }

  // ----- player house on the hill -----
  {
    const hx = LOC.house.x, hz = LOC.house.z, hy = heightAt(hx, hz);
    const rot = Math.atan2(-hx, -hz);
    prefabHouse('P_Manor', hx, hy, hz, rot, scene, { h: 3.6, roof: 0x2a4a7a, wall: 0xf0e6d0, chimney: true, roofH: 2.6 });
    const sx = hx + Math.sin(rot) * 6.2 + Math.cos(rot) * 2.5, sz = hz + Math.cos(rot) * 6.2 - Math.sin(rot) * 2.5;
    const sign = new THREE.Group();
    mesh(new THREE.BoxGeometry(0.15, 1.6, 0.15), lam(0x5a3d24), 0, 0.8, 0, sign);
    mesh(new THREE.BoxGeometry(1.1, 0.6, 0.08), lam(0xc8a060), 0, 1.5, 0, sign);
    sign.position.set(sx, heightAt(sx, sz), sz); sign.rotation.y = rot; scene.add(sign);
    kitProp('P_Sign', sign, scene, 0.55);
    out.spots.house = { x: hx + Math.sin(rot) * 5.2, z: hz + Math.cos(rot) * 5.2 };
  }

  // ----- bandit camp -----
  {
    const C = LOC.camp, cy = targets().camp;
    const tentM = lam(0x8a7350, { flatShading: true });
    for (let i = 0; i < 5; i++) {
      const a = i / 5 * Math.PI * 2 + 0.3;
      const x = C.x + Math.sin(a) * 9, z = C.z + Math.cos(a) * 9;
      const t = mesh(new THREE.ConeGeometry(2.2, 2.8, 6), tentM, x, cy + 1.4, z);
      scene.add(t); colliders.addCircle(x, z, 1.9);
    }
    const logM = lam(0x5a3d24);
    for (let i = 0; i < 4; i++) {
      const l = mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.2, 5), logM, C.x, cy + 0.15, C.z);
      l.rotation.set(Math.PI / 2, 0, i * Math.PI / 4); scene.add(l);
    }
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xff8a2a });
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.45, 1.2, 6), flameMat); flame.position.set(C.x, cy + 0.7, C.z); scene.add(flame);
    const flame2 = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.8, 5), new THREE.MeshBasicMaterial({ color: 0xffe066 })); flame2.position.set(C.x, cy + 0.6, C.z); scene.add(flame2);
    colliders.addCircle(C.x, C.z, 0.9);
    const light = new THREE.PointLight(0xff8a3a, 0, 22, 1.6); light.position.set(C.x, cy + 2, C.z); scene.add(light);
    out.fire = { flame, flame2, light };
    // palisade
    for (let i = 0; i < 26; i++) {
      const a = i / 34 * Math.PI * 2 + 2.2;
      const x = C.x + Math.sin(a) * 17, z = C.z + Math.cos(a) * 17;
      const p = mesh(new THREE.CylinderGeometry(0.22, 0.25, 2.6 + (i % 3) * 0.3, 5), logM, x, heightAt(x, z) + 1.2, z);
      scene.add(p); colliders.addCircle(x, z, 0.3);
      const tip = mesh(new THREE.ConeGeometry(0.22, 0.5, 5), logM, x, heightAt(x, z) + 2.8 + (i % 3) * 0.3, z); scene.add(tip);
    }
    for (let i = 0; i < 4; i++) {
      const cr = mesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), lam(0x7a5a30), C.x + 4 + i * 0.4, cy + 0.45 + (i === 3 ? 0.9 : 0), C.z - 3 + (i % 3) * 0.95);
      scene.add(cr);
    }
  }

  // ----- ruins of the old watchtower -----
  {
    const R = LOC.ruins, ry = targets().ruins;
    const stone = lam(0x8d8a84, { flatShading: true }), moss = lam(0x5f7a4a, { flatShading: true }), dark = lam(0x55524e, { flatShading: true });
    for (let i = 0; i < 12; i++) {
      const a = i / 12 * Math.PI * 2;
      const x = R.x + Math.sin(a) * 15, z = R.z + Math.cos(a) * 15;
      const hgt = i % 3 === 0 ? 1.2 + rng() * 1.5 : 4 + rng() * 4;
      const p = mesh(new THREE.CylinderGeometry(0.75, 0.9, hgt, 7), i % 4 === 0 ? moss : stone, x, ry + hgt / 2, z);
      scene.add(p); colliders.addCircle(x, z, 0.9);
      if (i % 2 === 0 && hgt > 4) { const cap = mesh(new THREE.BoxGeometry(2, 0.5, 2), dark, x, ry + hgt + 0.25, z); cap.rotation.y = rng(); scene.add(cap); }
    }
    for (let i = 0; i < 5; i++) {
      const a = i / 5 * Math.PI * 2 + 0.5;
      const x = R.x + Math.sin(a) * 22, z = R.z + Math.cos(a) * 22;
      const wl = 6 + rng() * 4, wh = 1.5 + rng() * 3;
      const w = mesh(new THREE.BoxGeometry(wl, wh, 1.0), stone, x, heightAt(x, z) + wh / 2 - 0.2, z);
      w.rotation.y = a + Math.PI / 2; scene.add(w);
      colliders.addBox(x, z, wl / 2, 0.55, a + Math.PI / 2);
    }
    const dais = mesh(new THREE.CylinderGeometry(5, 5.6, 0.6, 12), dark, R.x, ry + 0.3, R.z); scene.add(dais);
    const tower = mesh(new THREE.CylinderGeometry(3, 3.6, 9, 9, 1, true), stone, R.x + 25, heightAt(R.x + 25, R.z - 14) + 4.5, R.z - 14);
    tower.material = lam(0x8d8a84, { flatShading: true, side: THREE.DoubleSide }); scene.add(tower);
    colliders.addCircle(R.x + 25, R.z - 14, 3.6);
    const runeMat = new THREE.MeshLambertMaterial({ color: 0x331a0a, emissive: 0xff5a1a, emissiveIntensity: 0.4 });
    glowMats.push(runeMat); out.runeMat = runeMat;
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * Math.PI * 2;
      const r = mesh(new THREE.BoxGeometry(0.6, 0.05, 1.4), runeMat, R.x + Math.sin(a) * 3.8, ry + 0.62, R.z + Math.cos(a) * 3.8);
      r.rotation.y = a; scene.add(r);
    }
    out.spots.ruins = { x: R.x, z: R.z };
  }

  // ----- chests -----
  const chestSpots = [[-70, 98], [92, 30], [-118, -40], [140, -132], [-22, 118], [128, 82], [-140, 20], [20, -140]];
  const chestBody = lam(0x6b4422), chestTrim = lam(0xc9a030);
  chestSpots.forEach(([x, z], i) => {
    let tries = 0;
    while (heightAt(x, z) < 0.6 && tries++ < 40) { x *= 0.96; z *= 0.96; }
    const y = heightAt(x, z);
    const g = new THREE.Group();
    mesh(new THREE.BoxGeometry(1.1, 0.6, 0.7), chestBody, 0, 0.3, 0, g);
    const lid = new THREE.Group(); lid.position.set(0, 0.6, -0.35); g.add(lid);
    mesh(new THREE.BoxGeometry(1.12, 0.3, 0.72), chestBody, 0, 0.15, 0.35, lid);
    mesh(new THREE.BoxGeometry(1.14, 0.08, 0.1), chestTrim, 0, 0.15, 0.72, lid);
    mesh(new THREE.BoxGeometry(0.16, 0.2, 0.06), chestTrim, 0, 0.55, 0.37, g);
    g.position.set(x, y, z); g.rotation.y = rng() * 6; scene.add(g);
    colliders.addCircle(x, z, 0.6);
    out.chests.push({ x, z, group: g, lid, i });
  });

  // ----- moon herbs -----
  const herbMat = new THREE.MeshLambertMaterial({ color: 0x88ffee, emissive: 0x44ddcc, emissiveIntensity: 0.6 });
  glowMats.push(herbMat); out.herbMat = herbMat;
  const stemM = lam(0x2a6a3a);
  const herbRng = mulberry32(99);
  for (let i = 0; i < 4000 && out.herbs.length < 11; i++) {
    const x = (herbRng() * 2 - 1) * 150, z = (herbRng() * 2 - 1) * 150;
    if (forestness(x, z) < 0.6 || excluded(x, z, 8) || pathDist(x, z) < 6) continue;
    const h = heightAt(x, z); if (h < 1 || h > 18) continue;
    if (out.herbs.some(hb => Math.hypot(hb.x - x, hb.z - z) < 18)) continue;
    const g = new THREE.Group();
    for (let k = 0; k < 3; k++) {
      const st = mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.6, 3), stemM, Math.cos(k * 2.1) * 0.15, 0.3, Math.sin(k * 2.1) * 0.15, g);
      st.castShadow = false;
      const fl = mesh(new THREE.OctahedronGeometry(0.14, 0), herbMat, Math.cos(k * 2.1) * 0.15, 0.65, Math.sin(k * 2.1) * 0.15, g);
      fl.castShadow = false;
    }
    g.position.set(x, h, z); scene.add(g);
    out.herbs.push({ x, z, group: g, i: out.herbs.length });
  }

  // ----- sky decorations -----
  const starGeo = new THREE.BufferGeometry(); const sp = [];
  const srng = mulberry32(7);
  for (let i = 0; i < 900; i++) {
    const u = srng() * Math.PI * 2, v = srng() * 0.9 + 0.08;
    const r = 330;
    sp.push(Math.cos(u) * Math.cos(v * Math.PI / 2) * r, Math.sin(v * Math.PI / 2) * r, Math.sin(u) * Math.cos(v * Math.PI / 2) * r);
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
  const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false });
  const stars = new THREE.Points(starGeo, starMat); scene.add(stars);
  out.stars = stars; out.starMat = starMat;
  const moon = new THREE.Mesh(new THREE.SphereGeometry(9, 12, 8), new THREE.MeshBasicMaterial({ color: 0xeef2ff, fog: false, transparent: true }));
  scene.add(moon); out.moon = moon;
  const sunDisc = new THREE.Mesh(new THREE.SphereGeometry(12, 12, 8), new THREE.MeshBasicMaterial({ color: 0xfff2c0, fog: false, transparent: true }));
  scene.add(sunDisc); out.sunDisc = sunDisc;

  const cloudMat = new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true, transparent: true, opacity: 0.9 });
  out.cloudMat = cloudMat;
  const clouds = new THREE.Group();
  for (let i = 0; i < 18; i++) {
    const cg = new THREE.Group();
    for (let k = 0; k < 4; k++) {
      const m = new THREE.Mesh(new THREE.IcosahedronGeometry(4 + rng() * 4, 0), cloudMat);
      m.position.set(k * 5 - 8, rng() * 2, rng() * 4); m.scale.y = 0.5; cg.add(m);
    }
    cg.position.set((rng() * 2 - 1) * 220, 55 + rng() * 20, (rng() * 2 - 1) * 220);
    clouds.add(cg);
  }
  scene.add(clouds); out.clouds = clouds;

  // ----- minimap base image -----
  const MM = 210;
  const mc = document.createElement('canvas'); mc.width = MM; mc.height = MM;
  const mctx = mc.getContext('2d');
  const img = mctx.createImageData(MM, MM);
  for (let j = 0; j < MM; j++) for (let i = 0; i < MM; i++) {
    const x = -WORLD_HALF + i * 2 + 1, z = -WORLD_HALF + j * 2 + 1;
    const h = heightAt(x, z);
    let r, g, b;
    if (h < 0) { r = 50; g = 110; b = 160; }
    else if (h < 1.2) { r = 205; g = 187; b = 132; }
    else if (h > 34) { r = 235; g = 235; b = 240; }
    else if (h > 16) { r = 133; g = 125; b = 112; }
    else {
      const f = forestness(x, z);
      r = 92; g = 154; b = 60;
      if (f > 0.58) { r = 52; g = 100; b = 42; }
      const sh = (h - 2) * 3; r += sh; g += sh; b += sh;
    }
    if (pathDist(x, z) < 2.2) { r = 160; g = 128; b = 84; }
    const k = (j * MM + i) * 4;
    img.data[k] = r; img.data[k + 1] = g; img.data[k + 2] = b; img.data[k + 3] = 255;
  }
  mctx.putImageData(img, 0, 0);
  mctx.fillStyle = '#6a3a2a';
  for (const s of spots) mctx.fillRect((s.x + WORLD_HALF) / 2 - 2, (s.z + WORLD_HALF) / 2 - 2, 4, 4);
  out.minimap = mc;

  return out;
}
