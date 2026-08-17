// Generates branded hero background images (1600x900 JPEG) for page headers.
// Run: node generate-heroes.mjs  (requires playwright-core + the preinstalled
// Chromium at /opt/pw-browsers/chromium). Output: public/heroes/hero-<theme>.jpg
//
// The images sit behind HeroSection's blue gradient overlay with white text on
// the left, so each design keeps the left side calm and puts a large, low-
// opacity thematic illustration on the right.
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { chromium } from 'playwright-core';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, 'public', 'heroes');

// Large decorative line-icons (stroke-based, drawn at low opacity).
const ICONS = {
  headset: '<path d="M20 60 v-15 a30 30 0 0 1 60 0 v15 M14 60 h10 v20 h-10 z M76 60 h10 v20 h-10 z M86 72 a24 18 0 0 1 -24 16 h-8" fill="none"/>',
  calendar: '<rect x="12" y="20" width="76" height="68" rx="8" fill="none"/><path d="M12 40 h76 M30 12 v16 M70 12 v16" fill="none"/><path d="M28 54 h12 M46 54 h12 M64 54 h12 M28 70 h12 M46 70 h12" fill="none"/>',
  chart: '<path d="M14 86 h72 M14 86 v-72" fill="none"/><path d="M24 74 l16 -18 l14 8 l24 -30" fill="none"/><circle cx="78" cy="34" r="4" fill="none"/>',
  code: '<path d="M34 26 L12 50 l22 24 M66 26 l22 24 -22 24 M56 20 l-12 60" fill="none"/>',
  nodes: '<circle cx="50" cy="24" r="9" fill="none"/><circle cx="22" cy="66" r="9" fill="none"/><circle cx="78" cy="66" r="9" fill="none"/><circle cx="50" cy="84" r="7" fill="none"/><path d="M45 32 L27 58 M55 32 L73 58 M30 70 L43 81 M70 70 L57 81 M31 66 h38" fill="none"/>',
  funnel: '<path d="M14 18 h72 l-26 34 v26 l-20 10 v-36 z" fill="none"/><path d="M30 30 h40" fill="none"/>',
  link: '<path d="M40 60 a14 14 0 0 1 0 -20 l14 -14 a14 14 0 0 1 20 20 l-8 8 M60 40 a14 14 0 0 1 0 20 l-14 14 a14 14 0 0 1 -20 -20 l8 -8" fill="none"/>',
  sun: '<circle cx="50" cy="42" r="16" fill="none"/><path d="M50 14 v8 M50 62 v8 M22 42 h8 M70 42 h8 M30 22 l6 6 M64 56 l6 6 M70 22 l-6 6 M36 56 l-6 6" fill="none"/><path d="M14 84 l18 -12 18 12 18 -12 18 12" fill="none"/>',
  coffee: '<path d="M24 34 h44 v28 a22 22 0 0 1 -44 0 z M68 40 h8 a10 10 0 0 1 0 20 h-8" fill="none"/><path d="M34 24 c0 -6 6 -6 6 -12 M50 24 c0 -6 6 -6 6 -12" fill="none"/><path d="M18 88 h56" fill="none"/>',
  laptop: '<rect x="22" y="24" width="56" height="38" rx="4" fill="none"/><path d="M14 74 h72 l-8 -12 h-56 z" fill="none"/><path d="M40 42 l-8 8 8 8 M60 42 l8 8 -8 8" fill="none"/>',
  sparkle: '<path d="M50 14 l7 22 22 7 -22 7 -7 22 -7 -22 -22 -7 22 -7 z" fill="none"/><path d="M80 20 l3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 9 -3 z" fill="none"/><path d="M22 66 l2.5 8 8 2.5 -8 2.5 -2.5 8 -2.5 -8 -8 -2.5 8 -2.5 z" fill="none"/>',
  mic: '<rect x="40" y="12" width="20" height="40" rx="10" fill="none"/><path d="M28 44 a22 22 0 0 0 44 0 M50 66 v14 M36 88 h28" fill="none"/><path d="M20 30 a40 40 0 0 0 0 28 M80 30 a40 40 0 0 1 0 28" fill="none"/>',
};

// theme -> { accent glow color, icons [main, small, small] }
const THEMES = {
  home:         { accent: '79,70,229',  icons: ['chart', 'nodes', 'sparkle'] },
  telesalg:     { accent: '37,99,235',  icons: ['headset', 'chart', 'nodes'] },
  moedebooking: { accent: '37,99,235',  icons: ['calendar', 'headset', 'chart'] },
  leadgen:      { accent: '79,70,229',  icons: ['funnel', 'chart', 'nodes'] },
  partner:      { accent: '37,99,235',  icons: ['link', 'chart', 'sparkle'] },
  webdev:       { accent: '79,70,229',  icons: ['code', 'laptop', 'sparkle'] },
  ai:           { accent: '99,102,241', icons: ['nodes', 'sparkle', 'code'] },
  jobs:         { accent: '37,99,235',  icons: ['laptop', 'headset', 'coffee'] },
  energi:       { accent: '16,185,129', icons: ['sun', 'chart', 'sparkle'] },
  kaffe:        { accent: '217,119,6',  icons: ['coffee', 'sparkle', 'calendar'] },
  service:      { accent: '37,99,235',  icons: ['sparkle', 'calendar', 'link'] },
  voice:        { accent: '99,102,241', icons: ['mic', 'nodes', 'sparkle'] },
};

const html = (accent, [main, s1, s2]) => `<!doctype html><html><head><meta charset="utf-8"><style>
  html,body{margin:0;width:1600px;height:900px;overflow:hidden}
  .stage{position:relative;width:1600px;height:900px;
    background:
      radial-gradient(1000px 700px at 78% 22%, rgba(${accent},.38), transparent 62%),
      radial-gradient(900px 650px at 15% 110%, rgba(37,99,235,.25), transparent 60%),
      linear-gradient(140deg,#0b1224 0%,#101c36 48%,#0c1530 100%);}
  .grid{position:absolute;inset:0;opacity:.5;
    background-image:linear-gradient(rgba(148,178,255,.05) 1px,transparent 1px),
      linear-gradient(90deg,rgba(148,178,255,.05) 1px,transparent 1px);
    background-size:72px 72px;}
  .beam{position:absolute;top:-140px;right:220px;width:520px;height:1200px;
    background:linear-gradient(rgba(${accent},.14),transparent 70%);
    transform:rotate(24deg);filter:blur(6px);}
  svg.ic{position:absolute;overflow:visible}
  svg.ic *{stroke:#9db8f5;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}
  .main{right:130px;top:170px;width:560px;height:560px;opacity:.16}
  .main *{stroke:#b7cbff}
  .s1{right:640px;top:96px;width:220px;height:220px;opacity:.10}
  .s2{right:70px;bottom:-40px;width:300px;height:300px;opacity:.08}
  .ring{position:absolute;border:1.5px solid rgba(157,184,245,.10);border-radius:50%}
  .r1{width:760px;height:760px;right:20px;top:60px}
  .r2{width:980px;height:980px;right:-90px;top:-50px}
  .dot{position:absolute;border-radius:50%;background:rgba(${accent},.55);filter:blur(1px)}
</style></head><body><div class="stage">
  <div class="grid"></div><div class="beam"></div>
  <div class="ring r1"></div><div class="ring r2"></div>
  <svg class="ic main" viewBox="0 0 100 100">${ICONS[main]}</svg>
  <svg class="ic s1" viewBox="0 0 100 100">${ICONS[s1]}</svg>
  <svg class="ic s2" viewBox="0 0 100 100">${ICONS[s2]}</svg>
  <div class="dot" style="width:10px;height:10px;right:420px;top:150px"></div>
  <div class="dot" style="width:6px;height:6px;right:250px;top:520px;opacity:.7"></div>
  <div class="dot" style="width:8px;height:8px;right:720px;top:640px;opacity:.5"></div>
</div></body></html>`;

fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });

for (const [name, cfg] of Object.entries(THEMES)) {
  await page.setContent(html(cfg.accent, cfg.icons), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(outDir, `hero-${name}.jpg`), type: 'jpeg', quality: 84 });
  console.log(`✓ hero-${name}.jpg`);
}

await browser.close();
console.log(`\nDone → ${outDir}`);
