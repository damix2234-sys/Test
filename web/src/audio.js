let ctx = null, master = null, noiseBuf = null;
let musicOn = true, nextNote = 0, step = 0;

export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  try {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = 0.5; master.connect(ctx.destination);
  } catch (e) { ctx = null; }
}
export function setMusic(on) { musicOn = on; }

function tone(freq, dur, type = 'sine', vol = 0.3, slideTo = null, delay = 0) {
  if (!ctx) return;
  const t = ctx.currentTime + delay;
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, t);
  if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.05);
}
function noise(dur, vol = 0.3, f0 = 2000, f1 = 500, type = 'bandpass', delay = 0) {
  if (!ctx) return;
  if (!noiseBuf) {
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  const t = ctx.currentTime + delay;
  const s = ctx.createBufferSource(); s.buffer = noiseBuf;
  const f = ctx.createBiquadFilter(); f.type = type;
  f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(f1, t + dur);
  const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  s.connect(f); f.connect(g); g.connect(master); s.start(t); s.stop(t + dur + 0.02);
}

export const SFX = {
  swing: () => noise(0.18, 0.22, 3500, 700),
  hit: () => { noise(0.12, 0.4, 1400, 200, 'lowpass'); tone(130, 0.15, 'square', 0.12, 60); },
  crit: () => { noise(0.15, 0.5, 2400, 300, 'lowpass'); tone(880, 0.2, 'triangle', 0.12, 440); },
  hurt: () => { tone(240, 0.25, 'sawtooth', 0.14, 90); noise(0.1, 0.2, 900, 200, 'lowpass'); },
  coin: () => { tone(988, 0.08, 'square', 0.06); tone(1319, 0.15, 'square', 0.06, null, 0.07); },
  magic: () => { tone(300, 0.35, 'sawtooth', 0.1, 1200); noise(0.3, 0.12, 4000, 8000, 'highpass'); },
  boom: () => { noise(0.3, 0.3, 2000, 200, 'lowpass'); tone(200, 0.3, 'sine', 0.2, 60); },
  roll: () => noise(0.25, 0.15, 800, 300, 'lowpass'),
  level: () => { [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.3, 'triangle', 0.14, null, i * 0.1)); },
  quest: () => { [392, 523, 659, 784].forEach((f, i) => tone(f, 0.35, 'triangle', 0.13, null, i * 0.12)); },
  good: () => { tone(660, 0.5, 'sine', 0.14, 990); tone(990, 0.5, 'sine', 0.08, 1320, 0.15); },
  evil: () => { tone(220, 0.6, 'sawtooth', 0.1, 70); tone(233, 0.6, 'sawtooth', 0.08, 75); },
  slam: () => { noise(0.6, 0.6, 700, 50, 'lowpass'); tone(70, 0.6, 'sine', 0.4, 30); },
  pickup: () => tone(1200 + Math.random() * 300, 0.06, 'sine', 0.05, 1800),
  bark: () => { tone(520, 0.07, 'square', 0.07, 320); tone(540, 0.07, 'square', 0.07, 330, 0.13); },
  click: () => tone(700, 0.05, 'triangle', 0.08),
  drink: () => { for (let i = 0; i < 3; i++) tone(400 + i * 80, 0.08, 'sine', 0.08, 600, i * 0.09); },
  death: () => { tone(300, 1.2, 'triangle', 0.15, 80); },
  victory: () => { [523, 659, 784, 659, 784, 1047].forEach((f, i) => tone(f, 0.45, 'triangle', 0.15, null, i * 0.16)); },
};

const DAY_SCALE = [261.6, 293.7, 329.6, 392.0, 440.0, 523.3, 587.3, 659.3];
const NIGHT_SCALE = [220.0, 261.6, 293.7, 329.6, 392.0, 440.0, 523.3];
const COMBAT_SCALE = [146.8, 174.6, 196.0, 220.0, 233.1, 261.6];
export function musicTick(time, mood) {
  if (!ctx || !musicOn || ctx.state !== 'running') return;
  if (time < nextNote) return;
  const scale = mood === 'combat' ? COMBAT_SCALE : mood === 'night' ? NIGHT_SCALE : DAY_SCALE;
  const beat = mood === 'combat' ? 0.28 : 0.55;
  nextNote = time + beat;
  step++;
  if (mood !== 'combat' && Math.random() < 0.25) return;
  const idx = Math.floor((Math.sin(step * 0.7) * 0.5 + 0.5) * scale.length + Math.random() * 2) % scale.length;
  const vol = mood === 'combat' ? 0.05 : 0.045;
  tone(scale[idx], beat * 2.2, mood === 'combat' ? 'sawtooth' : 'triangle', vol);
  if (step % 4 === 0) tone(scale[0] / 2, beat * 4, 'sine', 0.05);
}
