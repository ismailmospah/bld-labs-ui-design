const { chromium } = require('playwright');
const fs = require('fs');
const out = process.argv[2];
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36', viewport:{width:1400,height:900} });
  await p.goto(process.argv[3], { waitUntil: 'domcontentloaded', timeout: 60000 });
  await p.waitForTimeout(6000);
  for (let i=0;i<60;i++){ await p.mouse.wheel(0,1500); await p.waitForTimeout(250); }
  await p.waitForTimeout(2000);
  const data = await p.evaluate(() => {
    const imgs = [...document.querySelectorAll('img')].map(i => ({src:i.currentSrc||i.src, srcset:i.srcset, alt:i.alt, w:i.naturalWidth, h:i.naturalHeight}));
    return { title: document.title, text: document.body.innerText, imgs };
  });
  fs.writeFileSync(out + '/data.json', JSON.stringify(data, null, 1));
  fs.writeFileSync(out + '/rendered.html', await p.content());
  await b.close();
})();
