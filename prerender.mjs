import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

// Routes to pre-render to static HTML. Keep in sync with the content routes in
// src/App.tsx (redirects, admin and the dynamic /blog/:slug route are excluded).
const routes = [
  '/',
  '/ydelser',
  '/freelance-telemarketing',
  '/samarbejdspartner',
  '/priser',
  '/hvorfor-os',
  '/om-os',
  '/kontakt',
  '/blog',
  // Blog posts
  '/blog/saas-loesninger-2026',
  '/blog/ai-automation-2026',
  '/blog/modebooking-2026',
  '/blog/telesalg-2026',
  '/blog/outbound-sales-2026',
  '/blog/hvorfor-saas-2026',
  '/blog/saas-vs-on-premise',
  '/blog/bedste-saas-tools-2026',
  '/blog/saas-integration-2026',
  '/blog/saas-security-gdpr',
  '/blog/hvorfor-magnora-webudvikling',
  '/blog/hvorfor-magnora-ai-integration',
  '/blog/hjemmeside-til-vaekst-2026',
  '/blog/ai-integration-roi-2026',
  '/blog/websitekonvertering-tips',
  '/blog/hvorfor-magnora-telesalg',
  '/blog/hvorfor-magnora-moedebooking',
  '/blog/outsourcing-telesalg-2026',
  '/blog/b2b-salg-strategi-2026',
  '/blog/moedebooking-scripts-2026',
  '/blog/leadgenerering-strategier-2026',
  '/blog/hvad-er-bant-2026',
  '/blog/vaekst-partner-guide',
  '/blog/startup-til-vaekst-2026',
  '/blog/cold-calling-vs-inbound',
  '/blog/hvorfor-samarbejde-magnora',
  '/blog/ideudvikling-med-magnora',
  '/blog/fra-ide-til-salg',
  '/blog/moedebooking-partner-magnora',
  '/blog/outsource-moedebooking-fordele',
  '/blog/telesalg-partner-magnora',
  '/blog/b2b-telesalg-samarbejde',
  '/blog/vaekstpartner-ide-moedebooking-telesalg',
  '/blog/saadan-foregaar-samarbejdet',
  '/blog/hvorfor-outsource-salg-og-moedebooking',
  // AI blog posts
  '/blog/fremtidens-ai-loesninger-2026',
  '/blog/ai-agenter-automatisering-2026',
  '/blog/ai-sparer-tid-virksomhed',
  '/blog/ai-kundeservice-doegnet-rundt',
  '/blog/generativ-ai-forretningsvaerdi',
  '/blog/ai-reception-telefonassistent',
  '/blog/hvorfor-ai-nu-2026',
  '/blog/ai-salg-moedebooking-fremtid',
  '/blog/bedste-ai-loesninger-smv',
  '/blog/bliv-ai-konsulent-karriere',
  '/blog/100-bud-ai-opgaveloesning',
  // Job landing pages
  '/jobs/arbejd-hjemmefra',
  '/jobs/webudvikling-salg',
  '/jobs/led-belysning',
  '/jobs/energi-salg',
  '/jobs/kaffe-service',
  '/jobs/solenergi',
  '/jobs/matte-service',
  '/jobs/pensionsordning',
  '/jobs/inkasso',
  '/jobs/forsikring-hjemmefra',
  '/jobs/ai-konsulent',
  // Digital project pages
  '/digital/webudvikling',
  '/digital/api-saas',
  '/digital/hjemmesider',
  '/digital/ai-integration',
  '/digital/ai-widget',
  '/digital/ai-reception',
  // Standalone pages
  '/modebooking-priser',
  '/leadgenerering',
];

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const { render } = await import(path.join(distDir, 'server', 'entry-server.js'));

let ok = 0;
let failed = 0;

for (const route of routes) {
  try {
    const { appHtml, head } = render(route);

    // Drop the fallback <title> from the template so the per-page Helmet title
    // (included in `head`) is the only one. Use function replacers so `$` in the
    // rendered markup is never interpreted as a replacement pattern.
    const html = template
      .replace(/<title>[\s\S]*?<\/title>\s*/, '')
      .replace('<!--app-head-->', () => head)
      .replace('<!--app-html-->', () => appHtml);

    const outPath =
      route === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, route, 'index.html');

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html);
    ok++;
  } catch (err) {
    failed++;
    console.warn(`  ✗ Pre-render skipped for ${route}: ${err.message}`);
  }
}

console.log(
  `\n✓ Pre-rendered ${ok} routes to static HTML` +
    (failed ? ` (${failed} skipped — served via client rendering fallback)` : '')
);
