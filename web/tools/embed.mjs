// embeds the GLB models as base64 so they load from file:// inside the Android WebView
import fs from 'fs';
const out = ['window.__GLB=window.__GLB||{};'];
for (const f of fs.readdirSync('models').filter(f => f.endsWith('.glb'))) {
  out.push(`window.__GLB[${JSON.stringify(f.replace('.glb', ''))}]="${fs.readFileSync('models/' + f).toString('base64')}";`);
}
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/models.js', out.join('\n'));
console.log('models.js', (fs.statSync('dist/models.js').size / 1e6).toFixed(2), 'MB');
