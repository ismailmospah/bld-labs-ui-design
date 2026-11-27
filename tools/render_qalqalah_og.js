// Render the Qalqalah share images (1200x630 JPG) and the apple-touch icon.
//
//   python3 tools/build_qalqalah_blog.py --og-json | node tools/render_qalqalah_og.js
//
// Needs Playwright (Chromium). Writes qalqalah/assets/og/<name>.jpg and
// qalqalah/assets/img/apple-touch-icon.png.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const A = p => path.join(ROOT, 'qalqalah', 'assets', p);
const b64 = p => fs.readFileSync(p).toString('base64');

const fontCss = `
@font-face{font-family:T;src:url(data:font/otf;base64,${b64(A('fonts/thmanyahsans-Black.otf'))}) format('opentype');font-weight:900}
@font-face{font-family:T;src:url(data:font/otf;base64,${b64(A('fonts/thmanyahsans-Medium.otf'))}) format('opentype');font-weight:500}`;
const logo = `<svg viewBox="0 0 100 100" width="56" height="56"><circle cx="34" cy="15" r="7" fill="#F2F5F4"/><circle cx="58" cy="15" r="7" fill="#F2F5F4"/><circle cx="45" cy="54" r="24" fill="none" stroke="#F2F5F4" stroke-width="12"/><path d="M60 72c8 9 15 14 28 12" fill="none" stroke="#F2F5F4" stroke-width="12" stroke-linecap="round"/></svg>`;

const card = ({ tag, title, screen, lang }) => `<!doctype html><html dir="${lang === 'en' ? 'ltr' : 'rtl'}" lang="${lang || 'ar'}"><head><meta charset="utf-8"><style>${fontCss}
*{margin:0;padding:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;font-family:T,sans-serif;color:#F2F5F4;
 background:radial-gradient(60% 80% at 15% 100%,rgba(62,194,207,.32),transparent 70%),radial-gradient(40% 50% at 10% 90%,rgba(226,177,87,.14),transparent 70%),#0A1414;position:relative}
.pat{position:absolute;inset:0;opacity:.05;color:#fff}
.brand{position:absolute;top:56px;inset-inline-start:72px;display:flex;align-items:center;gap:14px;font-weight:900;font-size:40px}
.copy{position:absolute;inset-inline-start:72px;top:170px;width:640px}
.tag{display:inline-block;font-weight:500;font-size:24px;color:#3EC2CF;margin-bottom:18px}
h1{font-weight:900;font-size:${title.length > 40 ? 54 : 64}px;line-height:1.28}
.url{position:absolute;inset-inline-start:72px;bottom:52px;font-weight:500;font-size:22px;color:rgba(242,245,244,.6);direction:ltr}
.phone{position:absolute;inset-inline-end:96px;top:120px;width:300px;aspect-ratio:390/844;padding:9px;border-radius:44px;background:#16201F;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12),0 40px 80px -20px rgba(0,0,0,.7);transform:rotate(-6deg)}
.phone div{width:100%;height:100%;border-radius:36px;overflow:hidden;background:#F1F2F4}
.phone img{width:100%;display:block}
</style></head><body>
<svg class="pat" width="100%" height="100%"><defs><pattern id="k" width="64" height="64" patternUnits="userSpaceOnUse"><g fill="none" stroke="currentColor" stroke-width=".8"><rect x="19" y="19" width="26" height="26"/><rect x="19" y="19" width="26" height="26" transform="rotate(45 32 32)"/></g></pattern></defs><rect width="100%" height="100%" fill="url(#k)"/></svg>
<div class="brand">${logo}<span>${lang === 'en' ? 'Qalqalah' : 'قلقلة'}</span></div>
<div class="copy"><span class="tag">${tag}</span><h1>${title}</h1></div>
<div class="url">qalqalahapp.bld-labs.com</div>
<div class="phone"><div><img src="data:image/webp;base64,${b64(A('img/' + screen))}"></div></div>
</body></html>`;

const icon = `<!doctype html><html><head><style>*{margin:0}body{width:180px;height:180px;background:#0A1414;display:grid;place-items:center}</style></head><body>${logo.replace('width="56" height="56"', 'width="118" height="118"')}</body></html>`;

(async () => {
  const items = JSON.parse(fs.readFileSync(0, 'utf8'));
  fs.mkdirSync(A('og'), { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  for (const it of items) {
    await p.setContent(card(it), { waitUntil: 'load' });
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: A(`og/${it.name}.jpg`), type: 'jpeg', quality: 86 });
    console.log('og', it.name);
  }
  await p.setViewportSize({ width: 180, height: 180 });
  await p.setContent(icon);
  await p.screenshot({ path: A('img/apple-touch-icon.png') });
  console.log('apple-touch-icon');
  await b.close();
})();
