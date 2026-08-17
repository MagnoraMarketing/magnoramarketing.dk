import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const domain = 'https://magnoramarketing.dk';

// Get current date for pages that update frequently
const currentDate = new Date().toISOString();

// Blog posts [slug, publish date, title] — keep in sync with src/pages/BlogPage.tsx
const blogPosts = [
  ['saas-loesninger-2026', '2026-01-15', 'SaaS-løsninger i 2026: Hvad B2B virksomheder bør vide'],
  ['ai-automation-2026', '2026-02-01', 'AI Automation i Salg: Sådan bruger du det rigtigt i 2026'],
  ['modebooking-2026', '2026-02-20', 'Effektiv Mødebooking i 2026: Strategier der virker'],
  ['telesalg-2026', '2026-03-05', 'Telesalg i 2026: Teknikker og strategier for moderne sælgere'],
  ['outbound-sales-2026', '2026-03-20', 'Outbound Sales 2026: Byg en salgsmaskine der skalerer'],
  ['hvorfor-saas-2026', '2026-04-01', 'Hvorfor SaaS i 2026? Fordele for B2B virksomheder'],
  ['saas-vs-on-premise', '2026-04-05', 'SaaS vs. On-Premise: Hvad passer til din virksomhed i 2026?'],
  ['bedste-saas-tools-2026', '2026-04-10', 'De 10 bedste SaaS-tools til B2B virksomheder i 2026'],
  ['saas-integration-2026', '2026-04-15', 'SaaS Integration i 2026: Sådan forbinder du dine platforme'],
  ['saas-security-gdpr', '2026-04-20', 'SaaS Sikkerhed & GDPR: Hvad du skal vide i 2026'],
  ['hvorfor-magnora-webudvikling', '2026-04-25', 'Hvorfor vælge Magnora Marketing til webudvikling?'],
  ['hjemmeside-til-vaekst-2026', '2026-05-05', 'Hjemmeside til Vækst i 2026: Hvad B2B-kunder forventer'],
  ['websitekonvertering-tips', '2026-05-15', '10 tips til bedre websitekonvertering for B2B virksomheder'],
  ['hvorfor-magnora-ai-integration', '2026-05-01', 'Hvorfor vælge Magnora Marketing til AI-integration?'],
  ['ai-integration-roi-2026', '2026-05-10', 'AI Integration ROI i 2026: Hvornår betaler det sig?'],
  ['hvorfor-magnora-telesalg', '2026-05-20', 'Hvorfor vælge Magnora Marketing til telesalg?'],
  ['hvorfor-magnora-moedebooking', '2026-05-25', 'Hvorfor vælge Magnora Marketing til mødebooking?'],
  ['outsourcing-telesalg-2026', '2026-06-01', 'Outsourcing af Telesalg i 2026: Fordele, faldgruber og krav'],
  ['b2b-salg-strategi-2026', '2026-06-05', 'B2B Salgsstrategi i 2026: 5 fundamenter der skaber vækst'],
  ['moedebooking-scripts-2026', '2026-06-10', 'Mødebooking Scripts 2026: Konkrete eksempler der virker'],
  ['leadgenerering-strategier-2026', '2026-06-15', 'Leadgenerering Strategier 2026: 5 metoder der virker'],
  ['hvad-er-bant-2026', '2026-06-20', 'Hvad er BANT? Framework til kvalificering af B2B leads i 2026'],
  ['vaekst-partner-guide', '2026-06-23', 'Vækstpartner Guide: Hvornår skal du hyre en ekstern partner?'],
  ['startup-til-vaekst-2026', '2026-06-26', 'Fra Startup til Vækst i 2026: 3 skaleringsmodeller'],
  ['cold-calling-vs-inbound', '2026-06-29', 'Cold Calling vs. Inbound: Hvad virker bedst i 2026?'],
  ['hvorfor-samarbejde-magnora', '2026-07-01', 'Hvorfor samarbejde med Magnora Marketing? 8 grunde til at vælge os'],
  ['ideudvikling-med-magnora', '2026-07-02', 'Idéudvikling med Magnora Marketing: Fra koncept til markedsklar løsning'],
  ['fra-ide-til-salg', '2026-07-03', 'Fra idé til salg: Sådan tager Magnora din forretningsidé til markedet'],
  ['moedebooking-partner-magnora', '2026-07-04', 'Mødebooking-partner: Derfor skal du samarbejde med Magnora Marketing'],
  ['outsource-moedebooking-fordele', '2026-07-05', 'Outsource din mødebooking: 7 fordele ved at samarbejde med Magnora'],
  ['telesalg-partner-magnora', '2026-07-06', 'Telesalg-partner: Hvorfor Magnora Marketing skaber resultater'],
  ['b2b-telesalg-samarbejde', '2026-07-07', 'B2B telesalg-samarbejde: Sådan booster Magnora din pipeline'],
  ['vaekstpartner-ide-moedebooking-telesalg', '2026-07-08', 'Én vækstpartner til idéudvikling, mødebooking og telesalg'],
  ['saadan-foregaar-samarbejdet', '2026-07-09', 'Sådan foregår et samarbejde med Magnora Marketing – trin for trin'],
  ['hvorfor-outsource-salg-og-moedebooking', '2026-07-10', 'Hvorfor outsource dit salg og din mødebooking til Magnora?'],
  ['fremtidens-ai-loesninger-2026', '2026-07-12', 'Fremtidens AI-løsninger: Sådan forandrer kunstig intelligens danske virksomheder'],
  ['ai-agenter-automatisering-2026', '2026-07-13', 'AI-agenter: Den næste bølge af automatisering for virksomheder'],
  ['ai-sparer-tid-virksomhed', '2026-07-14', 'Sådan sparer AI din virksomhed for hundredvis af timer om året'],
  ['ai-kundeservice-doegnet-rundt', '2026-07-15', 'AI-kundeservice døgnet rundt: Fremtidens support er allerede her'],
  ['generativ-ai-forretningsvaerdi', '2026-07-16', 'Fra ChatGPT til forretningsværdi: Sådan bruger virksomheder generativ AI'],
  ['ai-reception-telefonassistent', '2026-07-18', 'AI-reception og AI-telefonassistenter: Aldrig gå glip af et opkald igen'],
  ['hvorfor-ai-nu-2026', '2026-07-20', 'Derfor skal din virksomhed tage stilling til AI nu – ikke om to år'],
  ['ai-salg-moedebooking-fremtid', '2026-07-22', 'AI i salg og mødebooking: Fremtidens vækstmotor'],
  ['bedste-ai-loesninger-smv', '2026-07-24', 'De 7 mest værdifulde AI-løsninger for små og mellemstore virksomheder'],
  ['bliv-ai-konsulent-karriere', '2026-07-25', 'Bliv AI-konsulent: Karrieren i front af fremtidens teknologi'],
  ['100-bud-ai-opgaveloesning', '2026-07-26', '100 bud: Sådan kan AI hjælpe jer i opgaveløsningen'],
];

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
  ...contentPages.map(p => ({ path: p.path, priority: p.priority, changefreq: p.changefreq, lastmod: currentDate })),
  ...blogPosts.map(([slug, date]) => ({
    path: `/blog/${slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: new Date(date).toISOString()
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
const robots = `# Robots.txt for Magnora Marketing
# Updated: ${new Date().toISOString().split('T')[0]}

# Default rules for all crawlers
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /system/
Disallow: /temp/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
# Avoid indexing of query-parameter / tracking URLs (duplicate content)
Disallow: /*?
Crawl-delay: 1

# Search engines (explicit full access)
User-agent: Googlebot
Allow: /
Disallow: /admin/
Disallow: /api/

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
User-agent: Claude-Web
User-agent: anthropic-ai
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: CCBot
Allow: /
Disallow: /admin/

# Aggressive SEO/backlink scrapers — throttle to protect the server
User-agent: SemrushBot
User-agent: AhrefsBot
Crawl-delay: 5

User-agent: MJ12bot
Crawl-delay: 10

# Unwanted crawlers
User-agent: baiduspider
Disallow: /

# Sitemap & AI content guide
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
  .map(([slug, , title]) => `- [${title}](${domain}/blog/${slug})`)
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
console.log('  ✓ Query-parameter / duplicate-content blocking\n');
