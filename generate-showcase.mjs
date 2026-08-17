// Generates browser-framed preview images for the "reference websites" showcase
// row on /digital/hjemmesider. Each card links out to a real live site; these
// images are stylised brand previews (the live sites block automated access, so
// they are not literal screenshots). Output: public/references/showcase-<slug>.jpg
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { chromium } from 'playwright-core';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, 'public', 'references');
const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

// hero visual scenes (SVG), themed per site
const scenes = {
  shield: (a) => `<svg viewBox="0 0 320 320" width="240"><path d="M160 30 L270 70 V150 C270 220 220 270 160 295 C100 270 50 220 50 150 V70 Z" fill="${a}" opacity=".95"/><path d="M120 155 l28 28 l55 -62" fill="none" stroke="#fff" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  booking: (a) => `<svg viewBox="0 0 340 300" width="260"><rect x="40" y="50" width="260" height="210" rx="18" fill="#fff" stroke="${a}" stroke-width="4"/><path d="M40 100 h260 M110 40 v30 M230 40 v30" stroke="${a}" stroke-width="6" stroke-linecap="round"/><g fill="${a}" opacity=".22"><rect x="70" y="125" width="46" height="38" rx="6"/><rect x="132" y="125" width="46" height="38" rx="6"/><rect x="194" y="125" width="46" height="38" rx="6"/><rect x="70" y="180" width="46" height="38" rx="6"/></g><rect x="194" y="180" width="46" height="38" rx="6" fill="${a}"/><path d="M285 40 l7 20 20 7 -20 7 -7 20 -7 -20 -20 -7 20 -7 z" fill="${a}"/></svg>`,
  growth: (a) => `<svg viewBox="0 0 340 300" width="260"><rect x="40" y="40" width="260" height="220" rx="18" fill="#fff"/><path d="M70 210 L130 150 L175 185 L240 100 L290 70" fill="none" stroke="${a}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><g fill="${a}"><circle cx="130" cy="150" r="10"/><circle cx="175" cy="185" r="10"/><circle cx="240" cy="100" r="10"/><circle cx="290" cy="70" r="10"/></g><g fill="${a}" opacity=".18"><rect x="70" y="230" width="40" height="14" rx="7"/><rect x="130" y="230" width="70" height="14" rx="7"/><rect x="220" y="230" width="55" height="14" rx="7"/></g></svg>`,
  video: (a) => `<svg viewBox="0 0 340 300" width="260"><rect x="40" y="55" width="260" height="170" rx="18" fill="#111827"/><path d="M150 110 v60 l55 -30 z" fill="#fff"/><g fill="${a}"><rect x="40" y="238" width="70" height="12" rx="6"/><rect x="122" y="238" width="110" height="12" rx="6" opacity=".5"/></g><circle cx="300" cy="70" r="26" fill="${a}"/></svg>`,
};

const SITES = [
  {
    slug: 'mtvagt', host: 'mtvagt.dk', brand: 'MT&nbsp;Vagt',
    accent: '#1d4ed8', bg1: '#0b1220', bg2: '#111c33', ink: '#e2e8f0', dark: true,
    nav: ['Forside', 'Ydelser', 'Vagtservice', 'Om os', 'Kontakt'],
    eyebrow: 'SIKKERHED &amp; VAGT', h1: 'Tryghed døgnet<br>rundt', scene: 'shield',
    sub: 'Professionel vagt- og sikkerhedsservice til erhverv og private.',
  },
  {
    slug: 'aibooking', host: 'aibooking.dk', brand: 'AI&nbsp;Booking',
    accent: '#7c3aed', bg1: '#faf5ff', bg2: '#f3e8ff', ink: '#3b0764', dark: false,
    nav: ['Forside', 'Sådan virker det', 'Priser', 'Cases', 'Kontakt'],
    eyebrow: 'AI MØDEBOOKING', h1: 'Book flere møder<br>med AI', scene: 'booking',
    sub: 'Automatisk booking og opfølgning der fylder din kalender.',
  },
  {
    slug: 'nexusmarketing', host: 'nexusmarketing.dk', brand: 'Nexus&nbsp;Marketing',
    accent: '#2563eb', bg1: '#eff6ff', bg2: '#dbeafe', ink: '#1e3a8a', dark: false,
    nav: ['Forside', 'Ydelser', 'Digital', 'Om os', 'Kontakt'],
    eyebrow: 'MARKETING &amp; VÆKST', h1: 'Vækst gennem<br>marketing &amp; salg', scene: 'growth',
    sub: 'Din vækstpartner inden for leads, salg og digitale løsninger.',
  },
  {
    slug: 'somevideopost', host: 'somevideopost.com', brand: 'Some&nbsp;Video&nbsp;Post',
    accent: '#db2777', bg1: '#1a0b1e', bg2: '#2a0f2e', ink: '#fce7f3', dark: true,
    nav: ['Forside', 'Portfolio', 'Ydelser', 'Priser', 'Kontakt'],
    eyebrow: 'VIDEO &amp; SOME', h1: 'Video content<br>der konverterer', scene: 'video',
    sub: 'Vi producerer scroll-stoppende video til sociale medier.',
  },
];

const pageHTML = (s) => `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box;font-family:${FONT}}
  html,body{width:1280px;height:820px;background:#e2e8f0}
  .browser{width:1280px;height:820px;background:#e2e8f0;padding:22px}
  .win{width:100%;height:100%;background:#fff;border-radius:16px;overflow:hidden;
    box-shadow:0 30px 60px rgba(15,23,42,.18);display:flex;flex-direction:column}
  .bar{height:48px;background:#f1f5f9;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;padding:0 18px;gap:8px;flex-shrink:0}
  .dot{width:12px;height:12px;border-radius:50%}
  .urlwrap{flex:1;margin-left:14px;height:28px;background:#fff;border:1px solid #e2e8f0;border-radius:14px;display:flex;align-items:center;padding:0 16px;color:#475569;font-size:14px;gap:8px}
  .page{flex:1;overflow:hidden}
  header{height:74px;display:flex;align-items:center;justify-content:space-between;padding:0 48px}
  .logo{display:flex;align-items:center;gap:11px;font-weight:800;font-size:22px;letter-spacing:-.3px}
  .logo .badge{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800}
  nav{display:flex;gap:28px;font-size:15px;font-weight:500}
  .navcta{padding:10px 20px;border-radius:10px;color:#fff;font-size:15px;font-weight:700}
  .hero{display:flex;padding:44px 48px;gap:44px;align-items:center}
  .hcol{flex:1.05}
  .eyebrow{font-size:14px;font-weight:800;letter-spacing:1.6px}
  h1{font-size:52px;line-height:1.05;font-weight:800;letter-spacing:-1.2px;margin:18px 0 20px}
  .sub{font-size:19px;line-height:1.5;max-width:440px;opacity:.82}
  .btns{display:flex;gap:14px;margin-top:30px}
  .b1{padding:15px 30px;border-radius:12px;color:#fff;font-weight:700;font-size:17px}
  .b2{padding:15px 30px;border-radius:12px;font-weight:700;font-size:17px;border:1.5px solid currentColor;opacity:.6}
  .hvis{flex:1;display:flex;justify-content:center;align-items:center}
</style></head><body>
  <div class="browser"><div class="win">
    <div class="bar">
      <span class="dot" style="background:#f87171"></span>
      <span class="dot" style="background:#fbbf24"></span>
      <span class="dot" style="background:#34d399"></span>
      <span class="urlwrap">🔒 ${s.host}</span>
    </div>
    <div class="page" style="background:linear-gradient(160deg,${s.bg1},${s.bg2});color:${s.ink}">
      <header>
        <div class="logo">
          <span class="badge" style="background:${s.accent}">${s.brand.replace(/&nbsp;/g, ' ').split(' ').map(w => w[0]).join('').slice(0, 2)}</span>${s.brand}</div>
        <nav style="color:${s.dark ? 'rgba(226,232,240,.85)' : '#475569'}">${s.nav.map((n, i) => `<span${i === 0 ? ` style="color:${s.ink};font-weight:700"` : ''}>${n}</span>`).join('')}</nav>
        <span class="navcta" style="background:${s.accent}">Kontakt</span>
      </header>
      <div class="hero">
        <div class="hcol">
          <div class="eyebrow" style="color:${s.accent}">${s.eyebrow}</div>
          <h1>${s.h1}</h1>
          <div class="sub">${s.sub}</div>
          <div class="btns">
            <span class="b1" style="background:${s.accent}">Kom i gang</span>
            <span class="b2">Læs mere</span>
          </div>
        </div>
        <div class="hvis">${scenes[s.scene](s.accent)}</div>
      </div>
    </div>
  </div></div>
</body></html>`;

fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 820 }, deviceScaleFactor: 2 });

for (const s of SITES) {
  await page.setContent(pageHTML(s), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(outDir, `showcase-${s.slug}.jpg`), type: 'jpeg', quality: 90 });
  console.log(`✓ showcase-${s.slug}.jpg`);
}

await browser.close();
console.log(`\nDone → ${outDir}`);
