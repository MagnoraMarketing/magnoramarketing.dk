<div align="center">

<img src="./public/og-image.png" alt="Magnora Marketing" width="100%" />

# Magnora Marketing

### Din langsigtede vækstpartner inden for B2B-salg, webudvikling og AI

[![Website](https://img.shields.io/badge/web-magnoramarketing.dk-2563eb?style=flat-square)](https://magnoramarketing.dk)
[![Deployed on Vercel](https://img.shields.io/badge/deploy-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)

</div>

---

## Om Magnora Marketing

Magnora Marketing er en dansk B2B-vækstpartner, der hjælper virksomheder med at vokse gennem
en kombination af erfarne salgskonsulenter og moderne digitale løsninger. Vi vægter det
længerevarende samarbejde højere end den enkelte opgave – jo bedre vi kender din forretning,
dine kunder og dit marked, jo skarpere kan vi eksekvere.

Som én samlet partner binder vi det salgsmæssige og det digitale sammen, så du slipper for at
koordinere mellem flere leverandører. Og vi er med hele vejen, hvis du ønsker det – fra første
idé og udvikling til lancering, drift og optimering.

## Hvad vi tilbyder

| Ydelse | Beskrivelse |
|---|---|
| 📞 **Telemarketing & telesalg** | Skarpt målrettet B2B-telesalg der åbner døre og skaber reelle forretningsresultater. |
| 📅 **Mødebooking** | Kvalificerede salgsmøder med de rette beslutningstagere – klar til dit salgsteam. |
| 🎯 **Leadgenerering** | Datadrevet og flerkanalbaseret leadgenerering direkte i dit CRM. |
| 🌐 **Hjemmesider** | Flotte, professionelle og konverteringsstærke hjemmesider til en god pris. |
| 💻 **Kompleks webudvikling** | Skræddersyede webapplikationer, kundeportaler og SaaS-platforme bygget til at skalere. |
| ✨ **AI-integration & AI-løsninger** | Chatbots, automatisering og skræddersyet AI-udvikling der giver forspring. |

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** – build tool med SSR-prerendering af statiske sider
- **Tailwind CSS** – styling
- **React Router v6** – routing
- **react-helmet-async** – SEO-metadata og struktureret data (schema.org)
- **Lucide React** – ikoner
- **i18next** – internationalisering (dansk, engelsk, spansk)
- **Vercel** – hosting med automatisk deployment

## Kom i gang

```bash
npm install
npm run dev
```

Åbn [http://localhost:5173](http://localhost:5173) i din browser.

## Scripts

| Kommando | Beskrivelse |
|---|---|
| `npm run dev` | Start udviklingsserver |
| `npm run build` | Byg til produktion (inkl. SSR-prerender, sitemap, robots.txt & llms.txt) |
| `npm run preview` | Forhåndsvis produktionsbuild |
| `npm run lint` | Kør ESLint |

## Projektstruktur

```
src/
├── components/   → Genbrugelige UI-komponenter (Hero, SEO, FAQ, ContactForm m.m.)
├── pages/        → Sider
│   ├── digital/  → Webudvikling, hjemmesider, AI-integration, API & SaaS
│   ├── jobs/     → Freelance job-landingssider
│   └── blog/     → Blogindlæg
├── i18n/         → Oversættelser (da / en / es)
└── data/         → Statisk data (bl.a. jobopslag)
```

### Udvalgte ruter

```
/                        → Forside
/ydelser                 → Ydelser (telesalg, mødebooking, web & AI)
/hvorfor-os              → Hvorfor Magnora – langsigtet vækstpartner
/priser                  → Priser & pakker
/samarbejdspartner       → Bliv samarbejdspartner
/om-os                   → Om Magnora Marketing
/kontakt                 → Kontakt

/digital/webudvikling    → Unik webudvikling & AI
/digital/hjemmesider     → Hjemmesider
/digital/ai-integration  → AI-integration & løsninger
/digital/api-saas        → API & SaaS

/blog                    → Blog oversigt
/blog/:slug              → Individuelle blogindlæg
```

## SEO

Sitet er bygget med SEO som en grundpille:

- **SSR-prerendering** af alle ruter til statisk HTML for hurtig indeksering
- **Struktureret data** (Organization, FAQ, Breadcrumbs) via schema.org
- Automatisk genereret **`sitemap.xml`**, **`robots.txt`** og **`llms.txt`** (guide til AI-svarmaskiner)
- 301-redirects vedligeholdt i `vercel.json` og `public/_redirects`

## Deployment

Sitet hostes på **Vercel** med automatisk deployment fra `main`-branchen. Hver pull request får
et preview-deployment, så ændringer kan gennemgås live inden merge.

## Kontakt

- **Email:** [mail@magnoramarketing.dk](mailto:mail@magnoramarketing.dk)
- **Web:** [magnoramarketing.dk](https://magnoramarketing.dk)

---

<div align="center">
<sub>© Magnora Marketing · Bygget med React, TypeScript & Tailwind CSS</sub>
</div>
