import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

// Routes to pre-render to static HTML. Keep in sync with the content routes in
// src/App.tsx (redirects and admin are excluded). Blog posts are appended from the
// central registry, src/data/blogPosts.json.
const blogPosts = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'data', 'blogPosts.json'), 'utf-8'));
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
  // Blog posts: every entry in the blog registry (see below)
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
  ...blogPosts.map(post => `/blog/${post.slug}`),
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

// Static 404 page. Vercel serves dist/404.html with a real 404 status for any
// URL that has no pre-rendered file (see vercel.json), so unknown URLs are never
// indexed as soft-404 copies of the homepage.
{
  const { appHtml, head } = render('/404');
  const html = template
    .replace(/<title>[\s\S]*?<\/title>\s*/, '')
    .replace('<!--app-head-->', () => head)
    .replace('<!--app-html-->', () => appHtml);
  fs.writeFileSync(path.join(distDir, '404.html'), html);
}

console.log(
  `\n✓ Pre-rendered ${ok} routes to static HTML` +
    (failed ? ` (${failed} skipped — served via client rendering fallback)` : '')
);
