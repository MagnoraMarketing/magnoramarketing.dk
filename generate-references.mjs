// Generates anonymised "website reference" mockup images for the /digital/hjemmesider
// references section. Each image is a realistic homepage design for a specific
// branche (industry) rendered inside a browser frame — no real client names or logos.
//
// Run: node generate-references.mjs  (requires playwright-core + the preinstalled
// Chromium at /opt/pw-browsers/chromium). Output: public/references/ref-<slug>.jpg
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { chromium } from 'playwright-core';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, 'public', 'references');

const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

// ---- small SVG icon set used for the site logos (stroke based) -----------------
const LOGO = {
  leaf: '<path d="M4 20c8 2 15-2 16-16C10 6 3 12 4 20zM4 20c2-6 6-9 10-11" fill="none"/>',
  hammer: '<path d="M14 6l4 4-3 3-4-4zM12 9L4 17l3 3 8-8" fill="none"/><path d="M14 6l3-1 2 2-1 3" fill="none"/>',
  store: '<path d="M4 9l1-4h14l1 4M4 9v10h16V9M4 9h16M9 19v-6h6v6" fill="none"/>',
  bag: '<path d="M6 8h12l-1 12H7L6 8zM9 8V6a3 3 0 016 0v2" fill="none"/>',
  crane: '<path d="M4 20h16M6 20V4h1l12 3M7 7l6 1.5M7 11l4 1M11 20v-6h4v6" fill="none"/>',
  chart: '<path d="M4 20V4M4 20h16M8 16l3-4 3 2 4-7" fill="none"/>',
};

// ---- hero "photo" scenes (rich gradient panels, industry themed) ---------------
const scene = {
  garden: (c) => `
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#bbf7d0"/><stop offset="1" stop-color="#dcfce7"/>
      </linearGradient>
    </defs>
    <rect width="600" height="420" fill="url(#g)"/>
    <circle cx="470" cy="90" r="46" fill="#fde68a" opacity=".85"/>
    <path d="M0 300 Q150 250 320 290 T600 270 V420 H0Z" fill="#4ade80"/>
    <path d="M0 340 Q180 300 360 335 T600 320 V420 H0Z" fill="#16a34a"/>
    <path d="M0 380 Q160 360 340 378 T600 366 V420 H0Z" fill="#15803d"/>
    <g fill="#166534"><ellipse cx="120" cy="360" rx="16" ry="34"/><ellipse cx="150" cy="366" rx="12" ry="26"/></g>
    <g fill="#166534"><ellipse cx="500" cy="352" rx="18" ry="38"/></g>`,
  craft: (c) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1e293b"/><stop offset="1" stop-color="#334155"/></linearGradient></defs>
    <rect width="600" height="420" fill="url(#g)"/>
    <g stroke="#f59e0b" stroke-width="3" fill="none" opacity=".9">
      <rect x="80" y="90" width="440" height="240" rx="10"/>
      <path d="M80 170h440M240 90v240"/>
    </g>
    <g fill="#f59e0b" opacity=".18"><rect x="110" y="120" width="100" height="30" rx="5"/>
      <rect x="110" y="200" width="90" height="18" rx="4"/><rect x="110" y="230" width="70" height="18" rx="4"/>
      <rect x="280" y="120" width="200" height="180" rx="8"/></g>
    <circle cx="300" cy="60" r="180" fill="#f59e0b" opacity=".07"/>`,
  retail: (c) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fce7f3"/><stop offset="1" stop-color="#fbcfe8"/></linearGradient></defs>
    <rect width="600" height="420" fill="url(#g)"/>
    <g><rect x="70" y="120" width="140" height="180" rx="12" fill="#fff"/><rect x="230" y="120" width="140" height="180" rx="12" fill="#fff"/><rect x="390" y="120" width="140" height="180" rx="12" fill="#fff"/></g>
    <g fill="#db2777" opacity=".9"><rect x="90" y="140" width="100" height="70" rx="8"/><rect x="250" y="140" width="100" height="70" rx="8"/><rect x="410" y="140" width="100" height="70" rx="8"/></g>
    <g fill="#f9a8d4"><rect x="90" y="222" width="70" height="10" rx="5"/><rect x="250" y="222" width="70" height="10" rx="5"/><rect x="410" y="222" width="70" height="10" rx="5"/></g>
    <g fill="#be185d"><rect x="90" y="244" width="44" height="12" rx="6"/><rect x="250" y="244" width="44" height="12" rx="6"/><rect x="410" y="244" width="44" height="12" rx="6"/></g>`,
  shop: (c) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#e0e7ff"/><stop offset="1" stop-color="#eef2ff"/></linearGradient></defs>
    <rect width="600" height="420" fill="url(#g)"/>
    <g><rect x="90" y="90" width="180" height="240" rx="16" fill="#fff"/><rect x="330" y="130" width="180" height="200" rx="16" fill="#fff"/></g>
    <rect x="110" y="110" width="140" height="120" rx="10" fill="#4f46e5" opacity=".9"/>
    <rect x="350" y="150" width="140" height="100" rx="10" fill="#6366f1" opacity=".9"/>
    <g fill="#c7d2fe"><rect x="110" y="244" width="110" height="10" rx="5"/><rect x="350" y="264" width="110" height="10" rx="5"/></g>
    <g fill="#4f46e5"><rect x="110" y="268" width="70" height="26" rx="13"/><rect x="350" y="288" width="70" height="26" rx="13"/></g>`,
  build: (c) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f172a"/><stop offset="1" stop-color="#1e293b"/></linearGradient></defs>
    <rect width="600" height="420" fill="url(#g)"/>
    <g fill="#facc15" opacity=".92">
      <rect x="90" y="220" width="90" height="130"/><rect x="200" y="160" width="90" height="190"/><rect x="310" y="250" width="90" height="100"/></g>
    <g fill="#eab308" opacity=".5"><rect x="90" y="220" width="90" height="20"/><rect x="200" y="160" width="90" height="20"/><rect x="310" y="250" width="90" height="20"/></g>
    <path d="M430 120l70 20v40l-70-20z" fill="#facc15" opacity=".9"/>
    <path d="M430 120v130M500 140v40" stroke="#facc15" stroke-width="4"/>
    <circle cx="150" cy="90" r="70" fill="#facc15" opacity=".08"/>`,
  consult: (c) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#eff6ff"/><stop offset="1" stop-color="#dbeafe"/></linearGradient></defs>
    <rect width="600" height="420" fill="url(#g)"/>
    <rect x="90" y="90" width="420" height="240" rx="16" fill="#fff"/>
    <path d="M120 270 L200 210 L270 240 L350 160 L440 130" fill="none" stroke="#1d4ed8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <g fill="#1d4ed8"><circle cx="200" cy="210" r="7"/><circle cx="270" cy="240" r="7"/><circle cx="350" cy="160" r="7"/><circle cx="440" cy="130" r="7"/></g>
    <g fill="#93c5fd"><rect x="120" y="300" width="60" height="12" rx="6"/><rect x="200" y="300" width="90" height="12" rx="6"/><rect x="310" y="300" width="70" height="12" rx="6"/></g>
    <rect x="120" y="120" width="120" height="14" rx="7" fill="#1e3a8a"/>`,
};

// ---- per-industry configuration ------------------------------------------------
const SITES = [
  {
    slug: 'have-anlaeg', host: 'www.have-anlaeg.dk', logo: 'leaf', wordmark: 'Have &amp; Anlæg',
    accent: '#16a34a', accentDark: '#166534', ink: '#14532d', tint: '#f0fdf4', btn: '#16a34a',
    nav: ['Forside', 'Anlæg', 'Beplantning', 'Vedligehold', 'Kontakt'],
    eyebrow: 'ANLÆGSGARTNER', h1: 'Grønne uderum<br>der holder', scene: 'garden',
    sub: 'Design, anlæg og pleje af haver, terrasser og indkørsler i topkvalitet.',
    band: 'cards', bandTitle: 'Vores ydelser',
    items: [['Havedesign', 'Fra idé til færdig plan'], ['Belægning', 'Fliser, terrasse & indkørsel'], ['Vedligehold', 'Årsaftaler & pleje']],
  },
  {
    slug: 'haandvaerker', host: 'www.haandvaerk-pro.dk', logo: 'hammer', wordmark: 'Håndværk',
    accent: '#ea580c', accentDark: '#c2410c', ink: '#1e293b', tint: '#fff7ed', btn: '#ea580c',
    nav: ['Forside', 'Ydelser', 'Projekter', 'Om os', 'Kontakt'],
    eyebrow: 'TØMRER &amp; SNEDKER', h1: 'Solidt håndværk<br>fra start til slut', scene: 'craft',
    sub: 'Tilbygninger, renovering og køkkener udført af erfarne håndværkere.',
    band: 'cards', bandTitle: 'Det laver vi',
    items: [['Tilbygning', 'Mere plads til familien'], ['Renovering', 'Bad, køkken & tag'], ['Snedkeri', 'Møbler efter mål']],
  },
  {
    slug: 'detail', host: 'www.butik-online.dk', logo: 'store', wordmark: 'Detail',
    accent: '#db2777', accentDark: '#be185d', ink: '#500724', tint: '#fdf2f8', btn: '#db2777',
    nav: ['Forside', 'Nyheder', 'Kategorier', 'Butikken', 'Kontakt'],
    eyebrow: 'DIN LOKALE BUTIK', h1: 'Din butik<br>– nu også online', scene: 'retail',
    sub: 'Håndplukkede varer, personlig service og click &amp; collect i byen.',
    band: 'stats', bandTitle: '',
    items: [['4.9★', 'Kundetilfredshed'], ['2.500+', 'Produkter'], ['Same-day', 'Afhentning']],
  },
  {
    slug: 'webshop', host: 'www.webshop-dk.dk', logo: 'bag', wordmark: 'Webshop',
    accent: '#4f46e5', accentDark: '#4338ca', ink: '#1e1b4b', tint: '#eef2ff', btn: '#4f46e5',
    nav: ['Forside', 'Produkter', 'Tilbud', 'Om os', 'Kurv'],
    eyebrow: 'E-HANDEL', h1: 'Handl trygt<br>– hurtig levering', scene: 'shop',
    sub: 'Fuldt betalingsflow, 1-2 dages levering og enkel returnering.',
    band: 'products', bandTitle: 'Populære varer',
    items: [['Produkt A', '299 kr'], ['Produkt B', '449 kr'], ['Produkt C', '199 kr']],
  },
  {
    slug: 'entreprenoer', host: 'www.entreprenoer-byg.dk', logo: 'crane', wordmark: 'Entreprenør',
    accent: '#facc15', accentDark: '#eab308', ink: '#0f172a', tint: '#f8fafc', btn: '#0f172a',
    nav: ['Forside', 'Referencer', 'Byggeri', 'Karriere', 'Kontakt'],
    eyebrow: 'TOTALENTREPRISE', h1: 'Vi bygger<br>fremtidens byggerier', scene: 'build',
    sub: 'Erhverv, bolig og infrastruktur – styret sikkert fra spadestik til nøgle.',
    band: 'stats', bandTitle: '',
    items: [['180+', 'Afsluttede projekter'], ['35 år', 'I branchen'], ['ISO', 'Certificeret']],
  },
  {
    slug: 'konsulent', host: 'www.konsulenthuset.dk', logo: 'chart', wordmark: 'Konsulent',
    accent: '#1d4ed8', accentDark: '#1e40af', ink: '#1e3a8a', tint: '#eff6ff', btn: '#1d4ed8',
    nav: ['Forside', 'Ydelser', 'Cases', 'Team', 'Kontakt'],
    eyebrow: 'RÅDGIVNING', h1: 'Strategisk rådgivning<br>der flytter forretning', scene: 'consult',
    sub: 'Vi hjælper virksomheder med vækst, strategi og digital transformation.',
    band: 'cards', bandTitle: 'Kompetencer',
    items: [['Strategi', 'Vækst & positionering'], ['Analyse', 'Data & indsigt'], ['Eksekvering', 'Fra plan til resultat']],
  },
];

// ---- content band builders -----------------------------------------------------
function band(s) {
  if (s.band === 'products') {
    return `<div class="band">
      <h2 style="color:${s.ink}">${s.bandTitle}</h2>
      <div class="row">${s.items.map(([n, p]) => `
        <div class="pcard">
          <div class="pimg" style="background:linear-gradient(135deg,${s.accent},${s.accentDark})"></div>
          <div class="pname" style="color:${s.ink}">${n}</div>
          <div class="prow"><span class="price" style="color:${s.accentDark}">${p}</span>
          <span class="add" style="background:${s.btn}">+ Kurv</span></div>
        </div>`).join('')}</div></div>`;
  }
  if (s.band === 'stats') {
    return `<div class="band">
      <div class="row stats">${s.items.map(([n, l]) => `
        <div class="scard"><div class="snum" style="color:${s.accentDark}">${n}</div>
        <div class="slabel">${l}</div></div>`).join('')}</div></div>`;
  }
  // cards (default)
  return `<div class="band">
    <h2 style="color:${s.ink}">${s.bandTitle}</h2>
    <div class="row">${s.items.map(([t, d]) => `
      <div class="ccard">
        <div class="cdot" style="background:${s.accent}"></div>
        <div class="ctitle" style="color:${s.ink}">${t}</div>
        <div class="cdesc">${d}</div>
      </div>`).join('')}</div></div>`;
}

const pageHTML = (s) => `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box;font-family:${FONT}}
  html,body{width:1280px;height:940px;background:#e2e8f0}
  .browser{width:1280px;height:940px;background:#e2e8f0;padding:22px}
  .win{width:100%;height:100%;background:#fff;border-radius:16px;overflow:hidden;
    box-shadow:0 30px 60px rgba(15,23,42,.18);display:flex;flex-direction:column}
  .bar{height:46px;background:#f1f5f9;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;padding:0 18px;gap:8px;flex-shrink:0}
  .dot{width:12px;height:12px;border-radius:50%}
  .url{flex:1;margin-left:14px;height:26px;background:#fff;border:1px solid #e2e8f0;border-radius:13px;display:flex;align-items:center;padding:0 14px;color:#64748b;font-size:13px;gap:8px}
  .page{flex:1;overflow:hidden;background:#fff}
  header{height:66px;display:flex;align-items:center;justify-content:space-between;padding:0 44px;border-bottom:1px solid #eef2f7}
  .logo{display:flex;align-items:center;gap:10px;font-weight:800;font-size:20px;letter-spacing:-.3px}
  .logo .badge{width:34px;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center}
  nav{display:flex;gap:26px;font-size:15px;color:#475569;font-weight:500}
  .navcta{padding:9px 18px;border-radius:9px;color:#fff;font-size:14px;font-weight:600}
  .hero{display:flex;padding:52px 44px 34px;gap:40px;align-items:center}
  .hcol{flex:1}
  .eyebrow{font-size:13px;font-weight:700;letter-spacing:1.5px}
  h1{font-size:46px;line-height:1.06;font-weight:800;letter-spacing:-1px;margin:16px 0 18px}
  .sub{font-size:18px;line-height:1.5;color:#64748b;max-width:440px}
  .btns{display:flex;gap:14px;margin-top:26px}
  .b1{padding:14px 26px;border-radius:11px;color:#fff;font-weight:700;font-size:16px}
  .b2{padding:14px 26px;border-radius:11px;font-weight:700;font-size:16px;border:1.5px solid #e2e8f0;color:#334155}
  .hvis{flex:1}
  .hvis svg{width:100%;border-radius:18px;box-shadow:0 20px 40px rgba(15,23,42,.14);display:block}
  .band{padding:8px 44px 40px}
  .band h2{font-size:26px;font-weight:800;letter-spacing:-.5px;margin-bottom:22px}
  .row{display:flex;gap:22px}
  .ccard{flex:1;border:1px solid #eef2f7;border-radius:14px;padding:22px}
  .cdot{width:38px;height:38px;border-radius:10px;margin-bottom:16px}
  .ctitle{font-size:18px;font-weight:700;margin-bottom:6px}
  .cdesc{font-size:14px;color:#64748b;line-height:1.4}
  .stats{gap:22px}
  .scard{flex:1;border:1px solid #eef2f7;border-radius:14px;padding:26px;text-align:center}
  .snum{font-size:40px;font-weight:800;letter-spacing:-1px}
  .slabel{font-size:14px;color:#64748b;margin-top:6px}
  .pcard{flex:1;border:1px solid #eef2f7;border-radius:14px;overflow:hidden}
  .pimg{height:120px}
  .pname{font-size:16px;font-weight:700;padding:14px 16px 0}
  .prow{display:flex;align-items:center;justify-content:space-between;padding:8px 16px 16px}
  .price{font-size:18px;font-weight:800}
  .add{color:#fff;font-size:13px;font-weight:700;padding:7px 14px;border-radius:9px}
</style></head><body>
  <div class="browser"><div class="win">
    <div class="bar">
      <span class="dot" style="background:#f87171"></span>
      <span class="dot" style="background:#fbbf24"></span>
      <span class="dot" style="background:#34d399"></span>
      <span class="url">🔒 ${s.host}</span>
    </div>
    <div class="page" style="background:${s.tint}">
      <header style="background:#fff">
        <div class="logo" style="color:${s.ink}">
          <span class="badge" style="background:${s.tint}">
            <svg width="22" height="22" viewBox="0 0 24 24" stroke="${s.accent}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${LOGO[s.logo]}</svg>
          </span>${s.wordmark}</div>
        <nav>${s.nav.map((n, i) => `<span${i === 0 ? ` style="color:${s.ink};font-weight:700"` : ''}>${n}</span>`).join('')}</nav>
        <span class="navcta" style="background:${s.btn}">Få tilbud</span>
      </header>
      <div class="hero">
        <div class="hcol">
          <div class="eyebrow" style="color:${s.accentDark}">${s.eyebrow}</div>
          <h1 style="color:${s.ink}">${s.h1}</h1>
          <div class="sub">${s.sub}</div>
          <div class="btns">
            <span class="b1" style="background:${s.btn}">Kom i gang</span>
            <span class="b2">Se mere</span>
          </div>
        </div>
        <div class="hvis"><svg viewBox="0 0 600 420">${scene[s.scene](s)}</svg></div>
      </div>
      ${band(s)}
    </div>
  </div></div>
</body></html>`;

fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 940 }, deviceScaleFactor: 2 });

for (const s of SITES) {
  await page.setContent(pageHTML(s), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(outDir, `ref-${s.slug}.jpg`), type: 'jpeg', quality: 88 });
  console.log(`✓ ref-${s.slug}.jpg`);
}

await browser.close();
console.log(`\nDone → ${outDir}`);
