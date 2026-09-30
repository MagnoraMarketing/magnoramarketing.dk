# SEO- og indekseringsaudit – magnoramarketing.dk (30. sep. 2026)

Gennemgangen er baseret på kodebasen, den byggede/prerenderede HTML (`dist/`), Vercel-projektets
domæneopsætning og de URL'er, Google Search Console viser.

## 1. Hvorfor "Registreret – endnu ikke indekseret" (33 sider)

"Registreret – endnu ikke indekseret" med "Seneste crawl: Ikke relevant" betyder, at Google kender
URL'en (fra sitemap eller links), men **endnu ikke har crawlet den**. Det er altså ikke en teknisk
blokering på selve siden (ingen noindex, ingen robots-blokering, canonical er korrekt). Google har
nedprioriteret crawlingen. Årsagerne, vi fandt:

| # | Årsag | Dokumentation | Status |
|---|-------|---------------|--------|
| 1 | **Svag intern linkning.** Hver af de 46 artikler havde præcis ét internt link – fra `/blog`. Ingen artikel linkede til en anden, og ingen service- eller forside linkede til nogen artikel. For Google ligner det lavt prioriterede sider. | Link-optælling i prerenderet HTML: 1,0 indgående link pr. artikel i snit | **Rettet** – nu 5,3 i snit, minimum 2 |
| 2 | **Domæne-redirect frem til 29. sep.** Mange af de "rigtige" URL'er (fx `/om-os`, `/blog`, `/`) stod som "Side med omdirigering" med crawl-datoer før 29. sep., hvor Vercel-domæneopsætningen blev ændret. Sitemap-URL'erne har altså redirected – det får Google til at nedprioritere resten af sitemap'et. | Vercel: `www.magnoramarketing.dk` → 308 → `magnoramarketing.dk` (opdateret 29/9). Live-tjek: `/om-os` giver nu 200 | **Allerede rettet** (29/9) |
| 3 | **Meget indhold på kort tid med overlappende emner.** 25 artikler blev udgivet 1.–26. juli, og 14 af dem er variationer af "hvorfor vælge Magnora til X". Google vurderer kvaliteten af hele `/blog/`-sektionen, før den bruger crawl-budget på den. | Se afsnit 4 (overlap-rapport) | **Anbefaling** – kræver redaktionel beslutning |
| 4 | **Uensartede datoer.** Den dato, der blev vist i 17 af artiklerne, stemte ikke med datoen i sitemap og på `/blog` (fx "10. januar 2026" vs. `2026-02-01`). | Sammenligning af locale-filer og `BlogPage.tsx` | **Rettet** – én dato fra registret overalt |

## 2. Teknisk tjekliste

| Område | Resultat |
|--------|----------|
| robots.txt | OK. Googlebot og `/blog/` er tilladt, `/assets/` kan crawles, kun `/admin/` og `/api/` er blokeret, og filen peger på `https://magnoramarketing.dk/sitemap.xml`. |
| sitemap.xml | OK. 74 URL'er (28 sider + 46 artikler), kun https uden www, uden trailing slash og uden dubletter, redirects eller noindex. **Ændret:** blog-URL'erne genereres nu fra `src/data/blogPosts.json`, og buildet fejler, hvis registret og routes i `App.tsx` ikke stemmer overens. |
| Canonical | OK. Alle 74 sider har én self-referencing canonical (`https://magnoramarketing.dk/<sti>`), aldrig www, http eller forsiden. |
| Robots meta / X-Robots-Tag | OK. `index, follow` på alle artikler. `noindex` kun på 404 og `/admin/` (header). |
| HTTP-status | Alle artikler har en statisk prerenderet fil, så de giver 200. Ukendte URL'er giver en rigtig 404 (`404.html`), ikke en soft 404. |
| Rendering | Projektet er **Vite + React (ikke Next.js)** med prerendering ved build (`prerender.mjs` + `entry-server.tsx`). Title, description, H1, brødtekst, links og JSON-LD ligger i den HTML, Google modtager. JavaScript er ikke nødvendigt for at se indholdet. |
| Metadata | Alle 46 titles, H1'er og descriptions er unikke (125–158 tegn). Open Graph og Twitter er sat. **Ændret:** artikler får nu `og:type=article`, `article:published_time` og et emnebillede (1600×900) i stedet for det generiske og-billede. |
| Structured data | **Ændret:** alle 46 artikler har nu `BlogPosting` (headline, description, datePublished, dateModified, author, publisher, mainEntityOfPage, image, articleSection, isPartOf Blog) og `BreadcrumbList`. Før havde 25 af artiklerne hverken Article- eller Breadcrumb-schema. Organization og WebSite ligger på alle sider. |
| Breadcrumbs | **Ændret:** synlige breadcrumbs på alle artikler (Forside › Blog › Kategori › Artikel). |
| E-E-A-T | **Ændret:** byline linker til `/om-os` (`rel="author"`), og der er en forfatterboks med links til Om os og Kontakt. Forfatteren er organisationen ("Magnora Marketing-redaktionen"). Hvis I vil have navngivne forfattere med profil, skal I levere navne og bios. Jeg har ikke opfundet personer. |
| URL-struktur | OK. Korte, lowercase og stabile URL'er uden parametre. Ingen URL'er er ændret. |

## 3. Intern linkning og hub-struktur (implementeret)

Registret `src/data/blogPosts.json` giver hver artikel:

- **3 håndplukkede relaterede artikler** inden for samme emne, fx AI-automation → AI i salg og
  mødebooking, Generativ AI og AI-integrationspartner.
- **1–2 pillar- eller servicesider**, fx `/digital/ai-integration`, `/modebooking-priser`,
  `/leadgenerering`, `/digital/hjemmesider` og `/digital/api-saas`.

Linkene går begge veje:

- Hver serviceside (12 sider) viser nu "Artikler om emnet" med de artikler, der understøtter den.
- Forsiden viser "Seneste fra bloggen" med artikler fra alle fire kategorier.

Strukturen er dermed: Forside → service/pillar → artikel → relaterede artikler.

| Hub (kategori på /blog) | Pillar-/servicesider |
|---|---|
| AI & automatisering | /digital/ai-integration, /digital/ai-reception, /digital/ai-widget, /jobs/ai-konsulent |
| Telesalg, mødebooking & leads | /modebooking-priser, /leadgenerering, /ydelser, /priser |
| Web & SaaS | /digital/hjemmesider, /digital/webudvikling, /digital/api-saas |
| Samarbejde | /hvorfor-os, /ydelser, /priser |

## 4. Overlap-rapport (duplicate / samme søgeintention)

Målt med TF-IDF-cosinus og 4-ords-shingles på artiklernes brødtekst. **Ingen artikler er næsten
identiske som tekst** (maks. ~13 % delte 4-ords-sekvenser). Men flere dækker **samme søgeintention**:

| Klynge | Artikler | Lighed | Anbefaling |
|---|---|---|---|
| A. Telesalgspartner | `hvorfor-magnora-telesalg`, `telesalg-partner-magnora` | 0,54 (højest på sitet) | **Kombinér** til `hvorfor-magnora-telesalg`, og lav en 301 fra `telesalg-partner-magnora` |
| B. Outsourcing af mødebooking | `hvorfor-magnora-moedebooking`, `moedebooking-partner-magnora`, `outsource-moedebooking-fordele`, `hvorfor-outsource-salg-og-moedebooking` | 0,42 | Behold `outsource-moedebooking-fordele` (informativ) og `hvorfor-magnora-moedebooking` (kommerciel). Flet de to andre ind og lav 301'er |
| C. Idéudvikling | `ideudvikling-med-magnora`, `fra-ide-til-salg`, `vaekstpartner-ide-moedebooking-telesalg` | 0,25–0,28 | Kombinér til én stærk artikel |
| D. Samarbejde | `hvorfor-samarbejde-magnora`, `saadan-foregaar-samarbejdet`, `vaekst-partner-guide` | 0,19–0,28 | Behold `saadan-foregaar-samarbejdet` (proces) og `vaekst-partner-guide` (guide). `hvorfor-samarbejde-magnora` overlapper `/hvorfor-os` |
| E. AI-kundekontakt | `ai-kundeservice-doegnet-rundt`, `ai-reception-telefonassistent` | 0,34 | Behold begge, men skarpere vinkler: chat/skriftlig support vs. telefon |
| F. SaaS-basics | `hvorfor-saas-2026`, `saas-vs-on-premise`, `saas-loesninger-2026` | 0,36 | Behold. Omskriv `saas-loesninger-2026` til en ren begynderguide ("hvad er SaaS") |

**Der er ikke lavet redirects eller indholdsændringer.** Det er en redaktionel beslutning, og
sammenlægning kræver, at teksterne skrives om. Klynge A og B giver størst effekt.

Generelt om indholdskvalitet: artiklerne mangler konkrete danske cases, tal med kilder og
eksempler fra jeres egne kunder. Det er det, der adskiller "people-first" indhold fra generisk
tekst. Prioritér de artikler, GSC viser som ikke indekserede, og tilføj 1–2 konkrete eksempler i
hver.

## 5. Redirect-audit ("Side med omdirigering", 43 sider)

**Konklusion: redirect-strukturen er korrekt.** De resterende URL'er i rapporten er gamle
varianter, som *skal* omdirigere. De bliver stående i GSC-rapporten, og det skader ikke.

- **37 path-redirects i `vercel.json`**: alle permanente (308), alle går direkte til en endelig
  side med 200. Ingen peger på en anden redirect, og der er ingen loops. Alle 22 client-side
  `<Navigate>`-redirects i `App.tsx` findes også i `vercel.json`, så crawlere aldrig ser en
  JavaScript-redirect.
- **www → non-www**: Vercel-domænet `www.magnoramarketing.dk` giver 308 til `magnoramarketing.dk`.
  **http → https**: Vercel giver 308 automatisk.
- **Trailing slash**: `trailingSlash: false`, så `/sti/` giver 308 til `/sti`. Canonical,
  sitemap, interne links, navigation og `og:url` bruger alle formatet uden slash.
- **Kæder, der ikke kan fjernes i koden**: en gammel URL med www og/eller trailing slash, fx
  `https://www.magnoramarketing.dk/forside/`, går gennem 2–3 hop (www → slash → redirect). Vercel
  udfører domæne-redirect og trailing-slash-redirect *før* `vercel.json`-redirects. Google følger
  op til 10 hop, og det gælder kun gamle URL'er, der alligevel ikke skal indekseres. Hvis de skal
  ned på ét hop, skal www-domænet i Vercel sættes til at servere projektet (uden domæne-redirect),
  og www-redirects skal i stedet ligge i `vercel.json` med `has: host`. Jeg anbefaler ikke det,
  fordi gevinsten er minimal og risikoen for dublerede www-sider er reel.
- **Konkrete GSC-eksempler**: `/jobs/energi-salg`, `/jobs/arbejd-hjemmefra`, `/hvorfor-os`,
  `/om-os`, `/digital/api-saas`, `/jobs/led-belysning` og `/blog` er rigtige sider. De stod som
  redirects, fordi de blev crawlet før domæneændringen 29/9. `/om-os` er verificeret live med 200.
  Tryk "Valider rettelse" i GSC.

## 6. Performance

- Indholdet er prerenderet, så crawling og rendering afhænger ikke af JavaScript.
- **Problem:** al JavaScript ligger i ét bundle: `index-*.js` på 2,3 MB (574 KB gzip). Det
  indeholder alle sider og alle tre sprog, og det belaster INP/LCP på mobil. Anbefaling: route-baseret
  code splitting (`React.lazy`) sammen med prerendering, der understøtter Suspense
  (`renderToPipeableStream`), og at en/es-sprogfilerne først indlæses, når de skal bruges. Det er
  ikke gjort i denne omgang, fordi det ændrer build-/prerender-pipelinen.
- Billederne er små (hero-JPG'er på ~34 KB, 1600×900).

## 7. Næste skridt i Google Search Console

1. Send `https://magnoramarketing.dk/sitemap.xml` ind igen.
2. "Side med omdirigering" → **Valider rettelse**.
3. URL-inspektion → **Anmod om indeksering** for de 10 vigtigste artikler (maks. ~10 om dagen).
4. Tag stilling til overlap-klynge A og B (afsnit 4).
5. Forvent 2–6 uger, før "Registreret – endnu ikke indekseret" falder mærkbart.

## Vedligehold: sådan tilføjer du en ny artikel

1. Opret siden i `src/pages/blog/` (helst med `BlogArticle`-skabelonen).
2. Tilføj route i `src/App.tsx`.
3. Tilføj én post i `src/data/blogPosts.json` (slug, kategori, dato, titel, beskrivelse, 3 relaterede,
   services). Så kommer den automatisk med i sitemap, prerender, breadcrumbs, schema og links fra
   servicesiderne. Buildet fejler, hvis route og register ikke stemmer overens.
4. Tilføj kortet på `/blog` (`BlogPage.tsx` + `blogPage.categories` i locales).
