// QA contact sheet of a character model in the real three.js runtime.
// build: npx esbuild tools/inspect/inspect.js --bundle --format=iife --outfile=tools/inspect/inspect.bundle.js  (after npm run build)
// usage: node tools/inspect/shots.js hero "Hema_Guard:0,Hema_Zornhau:0.5" "0,-55" out.png [dist] [targetY]
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const [model, list, yaws, out, dist = '2.3', ty = '1.2'] = process.argv.slice(2);
  const W = 360, H = 450, ys = yaws.split(',');
  const b = await chromium.launch({ args: ['--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: W, height: H } });
  await p.goto('file://' + path.join(__dirname, 'inspect.html'));
  await p.waitForFunction(() => window.ready);
  await p.evaluate(m => setup(m), model);
  const shots = [];
  for (const it of list.split(',')) {
    const [c, t] = it.split(':');
    for (const yw of ys) {
      await p.evaluate(([c, t, yw, d, ty]) => { pose(c, +t); view(+yw, 8, +d, +ty); }, [c, t, yw, dist, ty]);
      shots.push(await p.screenshot());
    }
  }
  // tile the screenshots in the page itself (no image library needed)
  const cols = ys.length * 2, rows = Math.ceil(shots.length / cols);
  await p.setViewportSize({ width: W * cols, height: H * rows });
  await p.setContent('<body style="margin:0;background:#000;line-height:0">' + shots.map(s => `<img src="data:image/png;base64,${s.toString('base64')}" width=${W} height=${H}>`).join('') + '</body>');
  await p.screenshot({ path: out });
  await b.close();
})();
