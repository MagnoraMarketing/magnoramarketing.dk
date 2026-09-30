import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const domain = 'https://magnoramarketing.dk';

// Get current date (fallback lastmod when git history is unavailable)
const currentDate = new Date().toISOString();

// Real <lastmod> per page: the last git commit touching the page's component
// (resolved via the route -> element -> import mapping in src/App.tsx). A lastmod
// that changes on every build is ignored by Google, so we avoid that.
const appSrc = fs.readFileSync(path.join(__dirname, 'src', 'App.tsx'), 'utf-8');
const importPaths = Object.fromEntries(
  [...appSrc.matchAll(/import (\w+) from '\.\/([^']+)';/g)].map(([, name, rel]) => [name, rel])
);
const routeComponents = Object.fromEntries(
  [...appSrc.matchAll(/<Route (?:path="([^"]+)"|index) element={<(\w+) \/>}/g)].map(([, p, name]) => [p || '/', name])
);
function gitLastmod(routePath) {
  const rel = importPaths[routeComponents[routePath]];
  if (!rel) return null;
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', `src/${rel}.tsx`], {
      cwd: __dirname,
      stdio: ['ignore', 'pipe', 'ignore'],
    }).toString().trim();
    return out ? new Date(out).toISOString() : null;
  } catch {
    return null;
  }
}

// Blog posts come from the central registry (src/data/blogPosts.json), which also
// drives the article pages and the pre-render list, so a new post only needs a
// route in src/App.tsx plus one registry entry to be pre-rendered and listed here.
const blogPosts = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'data', 'blogPosts.json'), 'utf-8'));

// Fail the build if the registry and the routes drift apart: a post in the sitemap
// without a route would be a 404, a routed post outside the registry an orphan.
{
  const routedSlugs = new Set([...appSrc.matchAll(/<Route path="\/blog\/([^"]+)" element=/g)].map(m => m[1]));
  const registrySlugs = new Set(blogPosts.map(p => p.slug));
  const missingRoute = [...registrySlugs].filter(s => !routedSlugs.has(s));
  const missingEntry = [...routedSlugs].filter(s => !registrySlugs.has(s));
  const badRelated = blogPosts.flatMap(p => p.related.filter(r => !registrySlugs.has(r)).map(r => `${p.slug} -> ${r}`));
  if (missingRoute.length || missingEntry.length || badRelated.length) {
    console.error('✗ Blog registry out of sync with src/App.tsx', { missingRoute, missingEntry, badRelated });
    process.exit(1);
  }
}

// Content pages with metadata. `group` and `title`/`desc` power llms.txt;
// `priority`/`changefreq` power sitemap.xml. Paths must stay in sync with the
// content routes in src/App.tsx and the pre-render list in prerender.mjs
// (redirects, admin and the dynamic /blog/:slug route are excluded).
const contentPages = [
  // Main pages
  { path: '/', priority: '1.0', changefreq: 'daily', group: 'Hovedsider', title: 'Forside', desc: 'Magnora Marketing – vækstpartner inden for telesalg, mødebooking, leadgenerering, webudvikling og AI.' },
  { path: '/ydelser', priority: '0.9', changefreq: 'weekly', group: 'Ydelser & priser', title: 'Ydelser', desc: 'Overblik over vores B2B-ydelser: telesalg, mødebooking, leadgenerering og digitale løsninger.' },
  { path: '/priser', priority: '0.9', changefreq: 'weekly', group: 'Ydelser & priser', title: 'Priser', desc: 'Priser og pakker for telesalg, mødebooking og leadgenerering.' },
  { path: '/modebooking-priser', priority: '0.9', changefreq: 'weekly', group: 'Ydelser & priser', title: 'Mødebooking – priser', desc: 'Priser og modeller for professionel B2B-mødebooking.' },
  { path: '/leadgenerering', priority: '0.9', changefreq: 'weekly', group: 'Ydelser & priser', title: 'Leadgenerering', desc: 'Kvalificerede B2B-leads via outbound, SEO, LinkedIn og ABM.' },
  { path: '/samarbejdspartner', priority: '0.9', changefreq: 'weekly', group: 'Ydelser & priser', title: 'Samarbejdspartner', desc: 'Bliv samarbejdspartner og få en dedikeret vækstpartner til salg og digitale løsninger.' },
  { path: '/hvorfor-os', priority: '0.9', changefreq: 'weekly', group: 'Hovedsider', title: 'Hvorfor Magnora', desc: 'Din langsigtede vækstpartner inden for telesalg, mødebooking, webudvikling og AI-løsninger – vi er med hele vejen.' },
  { path: '/om-os', priority: '0.8', changefreq: 'monthly', group: 'Hovedsider', title: 'Om os', desc: 'Om Magnora Marketing – team, tilgang og værdier.' },
  { path: '/kontakt', priority: '0.8', changefreq: 'monthly', group: 'Hovedsider', title: 'Kontakt', desc: 'Kom i kontakt med Magnora Marketing for en uforpligtende snak.' },
  { path: '/blog', priority: '0.8', changefreq: 'daily', group: 'Hovedsider', title: 'Blog', desc: 'Artikler og guides om telesalg, mødebooking, leadgenerering, SaaS og AI.' },

  // Digital services
  { path: '/digital/webudvikling', priority: '0.8', changefreq: 'weekly', group: 'Digitale løsninger', title: 'Webudvikling', desc: 'Skræddersyet webudvikling der kombinerer teknik og kommerciel indsigt.' },
  { path: '/digital/hjemmesider', priority: '0.8', changefreq: 'weekly', group: 'Digitale løsninger', title: 'Hjemmesider', desc: 'Prisvenlige, konverteringsstærke hjemmesider til danske virksomheder.' },
  { path: '/digital/api-saas', priority: '0.8', changefreq: 'weekly', group: 'Digitale løsninger', title: 'API & SaaS', desc: 'Udvikling af API- og SaaS-løsninger til B2B.' },
  { path: '/digital/ai-integration', priority: '0.8', changefreq: 'weekly', group: 'Digitale løsninger', title: 'AI-integration', desc: 'AI-integration der skaber målbare resultater i salg og drift.' },
  { path: '/digital/ai-widget', priority: '0.7', changefreq: 'weekly', group: 'Digitale løsninger', title: 'AI-widget', desc: 'AI-chatwidget til din hjemmeside – svarer kunder døgnet rundt.' },
  { path: '/digital/ai-reception', priority: '0.7', changefreq: 'weekly', group: 'Digitale løsninger', title: 'AI-reception', desc: 'AI-reception der håndterer opkald og henvendelser automatisk.' },

  // Job / career landing pages
  { path: '/freelance-telemarketing', priority: '0.9', changefreq: 'weekly', group: 'Job & karriere', title: 'Freelance telemarketing', desc: 'Freelanceopgaver inden for telemarketing og mødebooking.' },
  { path: '/jobs/arbejd-hjemmefra', priority: '0.8', changefreq: 'weekly', group: 'Job & karriere', title: 'Arbejd hjemmefra', desc: 'Fleksible hjemmearbejdspladser som freelance mødebooker.' },
  { path: '/jobs/forsikring-hjemmefra', priority: '0.8', changefreq: 'weekly', group: 'Job & karriere', title: 'Mødebooker – forsikring (hjemmefra)', desc: 'Arbejd 100% hjemmefra for Danmarks bedste forsikringsmæglere – attraktiv løn, provision uden loft og fuld frihed.' },
  { path: '/jobs/ai-konsulent', priority: '0.8', changefreq: 'weekly', group: 'Job & karriere', title: 'AI-konsulent (hjemmefra)', desc: 'Bliv AI-konsulent og kontakt virksomheder om AI-løsninger, der sparer tid. Fremtidssikret job 100% hjemmefra med attraktiv løn og henvendelsesformular.' },
  { path: '/jobs/webudvikling-salg', priority: '0.8', changefreq: 'weekly', group: 'Job & karriere', title: 'Webudvikling & salg', desc: 'Salgsopgaver inden for hjemmesider, SEO og marketing.' },
  { path: '/jobs/led-belysning', priority: '0.8', changefreq: 'weekly', group: 'Job & karriere', title: 'LED-belysning', desc: 'Mødebooking- og salgsopgaver inden for LED-belysning.' },
  { path: '/jobs/energi-salg', priority: '0.8', changefreq: 'weekly', group: 'Job & karriere', title: 'Energi-salg', desc: 'Salgsopgaver inden for privat strøm og energi.' },
  { path: '/jobs/kaffe-service', priority: '0.8', changefreq: 'weekly', group: 'Job & karriere', title: 'Kaffe-service', desc: 'Mødebooking- og salgsopgaver inden for kaffeservice.' },
  { path: '/jobs/solenergi', priority: '0.8', changefreq: 'weekly', group: 'Job & karriere', title: 'Solenergi', desc: 'Mødebooking inden for solceller og vedvarende energi.' },
  { path: '/jobs/matte-service', priority: '0.8', changefreq: 'weekly', group: 'Job & karriere', title: 'Måtte-service', desc: 'Mødebooking- og salgsopgaver inden for måtteservice.' },
  { path: '/jobs/pensionsordning', priority: '0.8', changefreq: 'weekly', group: 'Job & karriere', title: 'Pensionsordning', desc: 'Freelance mødebooking inden for pension.' },
  { path: '/jobs/inkasso', priority: '0.8', changefreq: 'weekly', group: 'Job & karriere', title: 'Inkasso', desc: 'Freelanceopgaver inden for inkasso.' },
];

// Full sitemap page list (content pages + blog posts)
const pages = [
  ...contentPages.map(p => ({ path: p.path, priority: p.priority, changefreq: p.changefreq, lastmod: gitLastmod(p.path) || currentDate })),
  ...blogPosts.map(post => ({
    path: `/blog/${post.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: post.modified || post.date
  })),
];

// Generate sitemap.xml with proper formatting
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages.map(page => `<url>
    <loc>${domain}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n  ')}
</urlset>`;

// Generate robots.txt — spec-compliant, one record group per user-agent.
// Note: Googlebot/Bingbot ignore Crawl-delay, and duplicate query-string URLs are
// handled by the canonical tag on every page, so query strings are NOT blocked
// (blocking them would stop Google from seeing the canonical, e.g. on ?utm_ links).
const robots = `# Robots.txt for Magnora Marketing
# Updated: ${new Date().toISOString().split('T')[0]}

# Default rules for all crawlers
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

# Search engines
User-agent: Googlebot
User-agent: Googlebot-Image
User-agent: Bingbot
Allow: /
Disallow: /admin/
Disallow: /api/

# AI / LLM crawlers — explicitly welcomed for AI search & chat visibility
# (ChatGPT, Perplexity, Claude, Google AI, Apple Intelligence, Common Crawl)
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: Google-Extended
User-agent: Applebot
User-agent: Applebot-Extended
User-agent: CCBot
Allow: /
Disallow: /admin/
Disallow: /api/

# Aggressive SEO/backlink scrapers — throttle to protect the server
User-agent: SemrushBot
User-agent: AhrefsBot
Crawl-delay: 5
Disallow: /admin/

User-agent: MJ12bot
Crawl-delay: 10
Disallow: /admin/

# Unwanted crawlers
User-agent: Baiduspider
Disallow: /

Sitemap: ${domain}/sitemap.xml
`;

// Generate llms.txt — a structured content guide for LLM / AI assistants
// (ChatGPT, Claude, Perplexity, Google AI). Follows the emerging llmstxt.org
// convention so AI answer engines can discover and cite the most relevant pages.
const groupOrder = ['Hovedsider', 'Ydelser & priser', 'Digitale løsninger', 'Job & karriere'];
const llmsSections = groupOrder.map(group => {
  const items = contentPages
    .filter(p => p.group === group)
    .map(p => `- [${p.title}](${domain}${p.path}): ${p.desc}`)
    .join('\n');
  return `## ${group}\n${items}`;
}).join('\n\n');

const llmsBlog = blogPosts
  .map(post => `- [${post.title}](${domain}/blog/${post.slug}): ${post.description}`)
  .join('\n');

const llms = `# Magnora Marketing

> Magnora Marketing er en dansk B2B-vækstpartner, der hjælper virksomheder med at vokse gennem telesalg, mødebooking, leadgenerering, webudvikling og AI-integration. Vi kombinerer erfarne salgskonsulenter med moderne digitale løsninger og leverer målbare resultater for danske virksomheder.

- Sprog: Dansk (primær), engelsk, spansk
- Markedsområde: Danmark
- Kontakt: ${domain}/kontakt

${llmsSections}

## Blog
${llmsBlog}

## Yderligere ressourcer
- [Sitemap](${domain}/sitemap.xml): Fuld oversigt over alle sider
- [Kontakt](${domain}/kontakt): Book en uforpligtende snak
`;

// Ensure dist directory exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Write files
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);
fs.writeFileSync(path.join(distDir, 'llms.txt'), llms);

console.log('\n✓ Generated sitemap.xml, robots.txt and llms.txt with enhanced SEO configurations');
console.log(`✓ Total URLs in sitemap: ${pages.length} (${contentPages.length} pages + ${blogPosts.length} blog posts)`);
console.log('\nSEO Enhancements:');
console.log('  ✓ Sitemap URLs in sync with App.tsx routes & prerender list');
console.log('  ✓ Spec-compliant robots.txt (one group per user-agent)');
console.log('  ✓ AI/LLM crawlers explicitly welcomed (GPTBot, ClaudeBot, PerplexityBot, …)');
console.log('  ✓ llms.txt content guide for AI answer engines');
console.log('  ✓ Duplicate query-string URLs handled via canonical tags\n');
