import * as THREE from 'three';

const geoCache = new Map();
function box(w, h, d) {
  const k = w + '_' + h + '_' + d;
  let g = geoCache.get(k);
  if (!g) { g = new THREE.BoxGeometry(w, h, d); geoCache.set(k, g); }
  return g;
}

export function makeHumanoid(o = {}) {
  const mats = [];
  const M = (c, extra = {}) => { const m = new THREE.MeshLambertMaterial({ color: c, ...extra }); mats.push(m); return m; };
  const skin = M(o.skin ?? 0xe0b089);
  const shirt = M(o.shirt ?? 0x3a6ea5);
  const pants = M(o.pants ?? 0x4a3b2a);
  const hair = M(o.hair ?? 0x3b2412);
  const boots = M(o.boots ?? 0x2a1d14);
  const thin = o.thin ? 0.8 : 1;

  const g = new THREE.Group();
  const body = new THREE.Group();
  g.add(body);

  const torso = new THREE.Mesh(box(0.66 * thin, 0.78, 0.38 * thin), shirt);
  torso.position.y = 1.28; body.add(torso);
  const belt = new THREE.Mesh(box(0.68 * thin, 0.1, 0.4 * thin), boots);
  belt.position.y = 0.92; body.add(belt);

  const headG = new THREE.Group(); headG.position.y = 1.68; body.add(headG);
  const head = new THREE.Mesh(box(0.42, 0.44, 0.42), skin); head.position.y = 0.24; headG.add(head);
  if (o.helmet) {
    const hm = M(o.helmet);
    const helm = new THREE.Mesh(box(0.5, 0.36, 0.5), hm); helm.position.y = 0.38; headG.add(helm);
    const crest = new THREE.Mesh(box(0.08, 0.2, 0.46), M(0x7a1010)); crest.position.y = 0.62; headG.add(crest);
  } else if (o.hood) {
    const hm = M(o.hood);
    const hood = new THREE.Mesh(box(0.5, 0.52, 0.5), hm); hood.position.set(0, 0.3, -0.04); headG.add(hood);
  } else {
    const hairTop = new THREE.Mesh(box(0.46, 0.14, 0.46), hair); hairTop.position.y = 0.5; headG.add(hairTop);
    const hairBack = new THREE.Mesh(box(0.46, o.longHair ? 0.6 : 0.3, 0.1), hair);
    hairBack.position.set(0, o.longHair ? 0.2 : 0.34, -0.2); headG.add(hairBack);
  }
  if (o.beard) {
    const b = new THREE.Mesh(box(0.38, 0.22, 0.1), M(o.beard)); b.position.set(0, 0.08, 0.2); headG.add(b);
  }
  const eyeMat = o.eyeGlow ? M(o.eyeGlow, { emissive: o.eyeGlow }) : M(0x1a1a1a);
  const eL = new THREE.Mesh(box(0.08, 0.07, 0.02), eyeMat); eL.position.set(-0.1, 0.28, 0.215); headG.add(eL);
  const eR = eL.clone(); eR.position.x = 0.1; headG.add(eR);

  function limb(x, y, w, h, m, m2) {
    const p = new THREE.Group(); p.position.set(x, y, 0);
    const u = new THREE.Mesh(box(w, h, w), m); u.position.y = -h / 2; p.add(u);
    if (m2) { const f = new THREE.Mesh(box(w * 1.05, 0.16, w * 1.15), m2); f.position.set(0, -h + 0.06, 0.02); p.add(f); }
    body.add(p); return p;
  }
  const armL = limb(-0.45 * thin, 1.62, 0.2 * thin, 0.72, shirt, skin);
  const armR = limb(0.45 * thin, 1.62, 0.2 * thin, 0.72, shirt, skin);
  const legL = limb(-0.17 * thin, 0.9, 0.24 * thin, 0.88, pants, boots);
  const legR = limb(0.17 * thin, 0.9, 0.24 * thin, 0.88, pants, boots);

  if (o.dress) {
    const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.56, 0.8, 8), M(o.dress));
    skirt.position.y = 0.55; body.add(skirt);
  }

  let weapon = null;
  if (o.weapon) {
    weapon = new THREE.Group();
    weapon.position.set(0, -0.68, 0.05);
    weapon.rotation.x = Math.PI / 2;
    const metal = M(o.blade ?? 0xc9d1d9, o.bladeGlow ? { emissive: o.bladeGlow, emissiveIntensity: 0.6 } : {});
    const handle = new THREE.Mesh(box(0.06, 0.22, 0.06), M(0x4a2f1a)); weapon.add(handle);
    const guard = new THREE.Mesh(box(0.3, 0.05, 0.08), M(0x9c7a2a)); guard.position.y = 0.12; weapon.add(guard);
    const blade = new THREE.Mesh(box(0.08, 0.85, 0.03), metal); blade.position.y = 0.56; weapon.add(blade);
    weapon.userData.metal = metal;
    armR.add(weapon);
  }
  if (o.staff) {
    const st = new THREE.Mesh(box(0.06, 1.7, 0.06), M(0x5a3a1f)); st.position.set(0, -0.6, 0.05); armR.add(st);
    const orb = new THREE.Mesh(box(0.16, 0.16, 0.16), M(o.staff, { emissive: o.staff })); orb.position.set(0, 0.25, 0.05); armR.add(orb);
  }

  let cape = null;
  if (o.cape) {
    cape = new THREE.Group(); cape.position.set(0, 1.62, -0.21); body.add(cape);
    const cm = new THREE.Mesh(box(0.62, 1.05, 0.04), M(o.cape)); cm.position.y = -0.52; cape.add(cm);
  }

  const s = o.scale ?? 1;
  g.scale.setScalar(s);
  g.traverse(m => { if (m.isMesh) { m.castShadow = true; } });
  return { kind: 'hum', group: g, body, headG, armL, armR, legL, legR, mats, weapon, cape, phase: Math.random() * 6 };
}

export function animHumanoid(h, dt, spd, attackT = -1, opts = {}) {
  h.phase += dt * (3 + spd * 1.7);
  const k = Math.min(1, spd / 4);
  const s = Math.sin(h.phase);
  h.legL.rotation.x = s * 0.8 * k;
  h.legR.rotation.x = -s * 0.8 * k;
  h.armL.rotation.x = opts.cast ? -1.5 : -s * 0.6 * k;
  h.armL.rotation.z = 0;
  h.body.position.y = Math.abs(Math.cos(h.phase)) * 0.08 * k;
  h.body.rotation.y = 0;
  h.body.rotation.x = 0;
  if (attackT >= 0) {
    let a;
    if (attackT < 0.35) a = -0.3 - (attackT / 0.35) * 2.4;
    else if (attackT < 0.6) a = -2.7 + ((attackT - 0.35) / 0.25) * 2.5;
    else a = -0.2 - (1 - (attackT - 0.6) / 0.4) * 0.0;
    h.armR.rotation.x = a;
    h.body.rotation.y = attackT < 0.35 ? -0.3 * (attackT / 0.35) : -0.3 + Math.min(1, (attackT - 0.35) / 0.25) * 0.6;
    h.body.rotation.x = attackT > 0.35 && attackT < 0.7 ? 0.15 : 0;
  } else {
    h.armR.rotation.x = (h.weapon ? -0.35 : 0) + s * 0.6 * k;
  }
  if (h.cape) h.cape.rotation.x = 0.1 + k * 0.5 + Math.sin(h.phase * 0.5) * 0.08;
  if (opts.kneel) {
    h.legL.rotation.x = -1.4; h.legR.rotation.x = 0.2;
    h.body.position.y = -0.4; h.armR.rotation.x = -0.2; h.armL.rotation.x = -0.2;
    h.headG.rotation.x = 0.4;
  } else h.headG.rotation.x = 0;
}

export function makeQuad(o = {}) {
  const mats = [];
  const M = (c, extra = {}) => { const m = new THREE.MeshLambertMaterial({ color: c, ...extra }); mats.push(m); return m; };
  const fur = M(o.color ?? 0x777777);
  const belly = M(o.belly ?? 0xdddddd);
  const dark = M(o.dark ?? 0x222222);
  const g = new THREE.Group();
  const body = new THREE.Group(); g.add(body);
  const torso = new THREE.Mesh(box(0.46, 0.42, 1.0), fur); torso.position.y = 0.62; body.add(torso);
  const chest = new THREE.Mesh(box(0.4, 0.2, 0.5), belly); chest.position.set(0, 0.46, 0.2); body.add(chest);
  const headG = new THREE.Group(); headG.position.set(0, 0.82, 0.55); body.add(headG);
  const head = new THREE.Mesh(box(0.36, 0.32, 0.36), fur); headG.add(head);
  const snout = new THREE.Mesh(box(0.18, 0.14, 0.26), belly); snout.position.set(0, -0.06, 0.28); headG.add(snout);
  const nose = new THREE.Mesh(box(0.08, 0.06, 0.04), dark); nose.position.set(0, -0.02, 0.42); headG.add(nose);
  const earGeo = new THREE.ConeGeometry(0.07, 0.18, 4);
  const earL = new THREE.Mesh(earGeo, fur); earL.position.set(-0.11, 0.23, -0.04); headG.add(earL);
  const earR = earL.clone(); earR.position.x = 0.11; headG.add(earR);
  const eyeMat = o.eye ? M(o.eye, { emissive: o.eye }) : dark;
  const eL = new THREE.Mesh(box(0.06, 0.05, 0.02), eyeMat); eL.position.set(-0.09, 0.05, 0.18); headG.add(eL);
  const eR = eL.clone(); eR.position.x = 0.09; headG.add(eR);
  const legs = [];
  for (const [x, z] of [[-0.16, 0.36], [0.16, 0.36], [-0.16, -0.36], [0.16, -0.36]]) {
    const p = new THREE.Group(); p.position.set(x, 0.45, z);
    const l = new THREE.Mesh(box(0.12, 0.45, 0.12), fur); l.position.y = -0.22; p.add(l);
    const paw = new THREE.Mesh(box(0.13, 0.08, 0.15), o.paws ? M(o.paws) : fur); paw.position.set(0, -0.42, 0.02); p.add(paw);
    body.add(p); legs.push(p);
  }
  const tail = new THREE.Group(); tail.position.set(0, 0.72, -0.5); body.add(tail);
  const t1 = new THREE.Mesh(box(0.14, 0.14, 0.5), fur); t1.position.z = -0.25; tail.add(t1);
  if (o.tailTip) { const t2 = new THREE.Mesh(box(0.15, 0.15, 0.16), M(o.tailTip)); t2.position.z = -0.52; tail.add(t2); }
  tail.rotation.x = 0.5;
  g.scale.setScalar(o.scale ?? 1);
  g.traverse(m => { if (m.isMesh) m.castShadow = true; });
  return { kind: 'quad', group: g, body, headG, legs, tail, mats, phase: Math.random() * 6 };
}

export function animQuad(q, dt, spd, attackT = -1) {
  q.phase += dt * (4 + spd * 2.2);
  const k = Math.min(1, spd / 4);
  const s = Math.sin(q.phase);
  q.legs[0].rotation.x = s * 0.9 * k; q.legs[3].rotation.x = s * 0.9 * k;
  q.legs[1].rotation.x = -s * 0.9 * k; q.legs[2].rotation.x = -s * 0.9 * k;
  q.body.position.y = Math.abs(Math.cos(q.phase)) * 0.06 * k;
  q.tail.rotation.y = Math.sin(q.phase * (spd < 0.5 ? 0.6 : 1.5)) * 0.5;
  if (attackT >= 0) {
    const a = attackT < 0.5 ? attackT / 0.5 : 1 - (attackT - 0.5) / 0.5;
    q.body.rotation.x = -0.35 * a;
    q.headG.rotation.x = 0.4 * a;
    q.body.position.z = 0.4 * a;
  } else { q.body.rotation.x = 0; q.headG.rotation.x = 0; q.body.position.z = 0; }
}
