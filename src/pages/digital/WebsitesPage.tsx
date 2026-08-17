import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, CheckCircle, ArrowRight, Search, TrendingUp, PenTool, Gauge, Leaf, Hammer, Store, ShoppingBag, HardHat, Briefcase, Tag, Image as ImageIcon, ExternalLink } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';

export default function WebsitesPage() {
  const features = [
    {
      icon: <PenTool size={36} className="text-blue-600" />,
      title: 'Professionelt design',
      description: 'Hjemmesider der ser godt ud og giver det rigtige førstehåndsindtryk – tilpasset din branche, målgruppe og brand.'
    },
    {
      icon: <Search size={36} className="text-blue-600" />,
      title: 'SEO-optimeret fra start',
      description: 'Vi bygger med søgemaskineoptimering som en kernekomponent – teknisk SEO, hurtige loadtider og korrekt struktureret indhold.'
    },
    {
      icon: <Gauge size={36} className="text-blue-600" />,
      title: 'Lynhurtig performance',
      description: 'Optimerede billeder, minimal kode og CDN-hosting sikrer at din hjemmeside loader hurtigt – på alle enheder og forbindelser.'
    },
    {
      icon: <TrendingUp size={36} className="text-blue-600" />,
      title: 'Konverteringsoptimeret',
      description: "Vi designer med mål for øje – klare CTA'er, brugervenlig navigation og landingssider der omdanner besøgende til kunder."
    }
  ];

  const included = [
    'Strategisk design og UX-planlægning',
    'Responsivt design til alle skærmstørrelser',
    'CMS-integration (WordPress, Webflow, headless)',
    'Teknisk SEO-opsætning og metadata',
    'Google Analytics og tracking-opsætning',
    'Kontaktformularer og lead capture',
    'Cookie-banner og GDPR-compliance',
    'Domæne- og hostingopsætning',
    'Testning og quality assurance',
    '3 måneders gratis support efter lancering'
  ];

  const siteTypes = [
    { title: 'Virksomhedshjemmeside', desc: 'Præsentationssider der viser jer professionelt og genererer leads' },
    { title: 'Landingssider', desc: 'Kampagnesider optimeret til konvertering og annoncetrafik' },
    { title: 'Webshops', desc: 'E-handelsløsninger med fuldt betalingsflow og produktstyring' },
    { title: 'Porteføljesider', desc: 'Visuelle sider der fremviser jeres arbejde og referencer' },
    { title: 'Booking og reservationer', desc: 'Integrerede bookingsystemer til møder, events og ydelser' },
    { title: 'Multisprogshjemmesider', desc: 'Lokaliserede sider til det danske og internationale marked' }
  ];

  const budgetTemplates = [
    {
      image: '/references/ref-have-anlaeg.jpg',
      branche: 'Have og anlæg',
      desc: 'Grønt, indbydende design med plads til projektgalleri og tilbudsformular.',
      icon: <Leaf size={18} />,
      color: 'text-green-600 bg-green-50'
    },
    {
      image: '/references/ref-haandvaerker.jpg',
      branche: 'Håndværker',
      desc: 'Tillidsvækkende layout med ydelser, referencer og hurtig kontakt.',
      icon: <Hammer size={18} />,
      color: 'text-orange-600 bg-orange-50'
    },
    {
      image: '/references/ref-detail.jpg',
      branche: 'Detail',
      desc: 'Levende butiksunivers med nyheder, click & collect og åbningstider.',
      icon: <Store size={18} />,
      color: 'text-pink-600 bg-pink-50'
    },
    {
      image: '/references/ref-webshop.jpg',
      branche: 'Webshop',
      desc: 'Enkel e-handelsløsning med produktvisning, kurv og betalingsflow.',
      icon: <ShoppingBag size={18} />,
      color: 'text-indigo-600 bg-indigo-50'
    },
    {
      image: '/references/ref-entreprenoer.jpg',
      branche: 'Entreprenør',
      desc: 'Solidt, professionelt design med referencer og nøgletal i fokus.',
      icon: <HardHat size={18} />,
      color: 'text-yellow-600 bg-yellow-50'
    },
    {
      image: '/references/ref-konsulent.jpg',
      branche: 'Konsulentfirma',
      desc: 'Rent, corporate udtryk der signalerer ekspertise og troværdighed.',
      icon: <Briefcase size={18} />,
      color: 'text-blue-600 bg-blue-50'
    }
  ];

  const showcaseSites = [
    {
      image: '/references/showcase-mtvagt.jpg',
      name: 'MT Vagt',
      url: 'https://mtvagt.dk/',
      domain: 'mtvagt.dk',
      desc: 'Hjemmeside til vagt- og sikkerhedsvirksomhed.'
    },
    {
      image: '/references/showcase-aibooking.jpg',
      name: 'AI Booking',
      url: 'https://aibooking.dk/',
      domain: 'aibooking.dk',
      desc: 'Platform for AI voice widget & automatisk mødebooking.'
    },
    {
      image: '/references/showcase-nexusmarketing.jpg',
      name: 'Nexus Marketing',
      url: 'https://nexusmarketing.dk/',
      domain: 'nexusmarketing.dk',
      desc: 'Hjemmeside for B2B telemarketing & mødebooking.'
    },
    {
      image: '/references/showcase-somevideopost.jpg',
      name: 'Some Video Post',
      url: 'https://www.somevideopost.com/',
      domain: 'somevideopost.com',
      desc: 'AI-platform der laver præsentationsvideoer til udlejning.'
    }
  ];

  return (
    <>
      <SEO
        title="Hjemmesider | Magnora Marketing – Professionelle Webløsninger der Konverterer"
        description="Magnora Marketing designer og udvikler professionelle hjemmesider der er SEO-optimerede, hurtige og konverteringsvenlige. Skræddersyet til din virksomhed og dine mål."
        canonical="/digital/hjemmesider"
        keywords="hjemmeside, webdesign, SEO hjemmeside, konverteringsoptimering, Magnora Marketing digital, professionel hjemmeside"
      />

      <HeroSection
        title="Hjemmesider der Skaber Resultater"
        subtitle="Magnora Marketing bygger professionelle, SEO-optimerede hjemmesider der tiltrækker de rigtige besøgende og omdanner dem til kunder."
        ctaText="Få et tilbud"
        ctaLink="/kontakt"
        backgroundImage="/heroes/hero-webdev.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvad gør en Magnora Marketing-hjemmeside anderledes?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi bygger ikke bare smukke hjemmesider – vi bygger digitale salgsmaskiner der arbejder for dig døgnet rundt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="flex gap-5 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-gray-600">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Alt er inkluderet</h2>
              <p className="text-lg text-gray-600 mb-8">
                Hos Magnora Marketing får du en komplet løsning – fra første design-skitse til lancering og efterfølgende support. Ingen skjulte omkostninger.
              </p>
              <ul className="space-y-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Bestil din hjemmeside <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/heroes/hero-webdev.jpg"
                alt="Webdesign og udvikling hos Magnora Marketing"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Monitor size={48} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Hjemmesidetyper vi specialiserer os i</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Uanset hvilken type hjemmeside du har brug for, har vi ekspertisen til at levere den.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteTypes.map((type, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                <h3 className="text-lg font-semibold mb-2 text-blue-600">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Prisvenlige hjemmesider</span>
            <h2 className="text-3xl font-bold mb-4">Færdige branche-designs – fra kun 1.500 kr</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Har du et mindre budget? Vælg et professionelt, færdigt design der passer til din branche – og gør det til dit med dine egne billeder, tekster og farver. Hurtigt online, uden det store budget.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                <Tag size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700"><span className="font-semibold text-gray-900">Fra kun 1.500 kr</span> pr. hjemmeside</p>
              </div>
              <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                <ImageIcon size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700"><span className="font-semibold text-gray-900">Tilpas med egne billeder</span> og tekst</p>
              </div>
              <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                <Gauge size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700"><span className="font-semibold text-gray-900">Hurtigt online</span> – klar på få dage</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {budgetTemplates.map((ref, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={ref.image}
                    alt={`Prisvenligt hjemmeside-design til branchen ${ref.branche}`}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-xs font-bold text-white bg-blue-600 px-3 py-1 rounded-full shadow-sm">
                    Fra 1.500 kr
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`w-9 h-9 rounded-lg flex items-center justify-center ${ref.color}`}>
                      {ref.icon}
                    </span>
                    <h3 className="text-lg font-semibold">{ref.branche}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{ref.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <ImageIcon size={15} className="text-blue-500" />
                    <span>Tilpas med dine egne billeder</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-5">Kan du ikke se din branche? Vi laver et prisvenligt design til enhver branche.</p>
            <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Bestil din hjemmeside fra 1.500 kr <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Referencer</span>
            <h2 className="text-3xl font-bold mb-4">Hjemmesider vi har bygget</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Se et udvalg af live hjemmesider vi har lavet. Klik på et kort for at besøge den rigtige side.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {showcaseSites.map((site, i) => (
              <a
                key={i}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={site.image}
                    alt={`Hjemmeside vi har bygget: ${site.name}`}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Besøg side <ExternalLink size={13} />
                  </span>
                </div>
                <div className="p-6 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{site.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{site.desc}</p>
                  </div>
                  <span className="flex-shrink-0 flex items-center gap-1.5 text-sm font-medium text-blue-600 group-hover:gap-2.5 transition-all">
                    {site.domain} <ExternalLink size={15} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klar til en ny hjemmeside?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Fortæl os om din virksomhed og dine mål – vi sender et konkret tilbud inden for 24 timer.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kontakt Magnora Marketing nu <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professionelle Hjemmesider der Konverterer – SEO-Optimeret og Mobilvenlig Design</h2>
            <p className="text-gray-600 mb-4">
              En professionel hjemmeside fra Magnora Marketing er din vigtigste digitale investering – den arbejder for dig 24 timer i døgnet, 7 dage om ugen, og er ofte det første møde potentielle kunder har med din virksomhed. Magnora Marketing designer og bygger hjemmesider med et klart formål: at konvertere besøgende til leads og kunder. Vi kombinerer professionelt visuelt design, stærk UX-planlægning og teknisk SEO-optimering for at sikre at din hjemmeside both ser flot ud og ranker godt i Google.
            </p>
            <p className="text-gray-600 mb-6">
              Alle Magnora Marketing's hjemmesider er fuldt responsive og mobilvenlige, og er bygget med hurtig indlæsningstid som en kerneprioritering. Vi opsætter Google Analytics og konverteringstracking som standard, integrerer GDPR-compliance og cookie-banner fra starten, og giver 3 måneders gratis support efter lancering. Du ejer 100% af koden og indholdet, og kan selv administrere hjemmesiden via det CMS vi implementerer.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> SEO-optimeret fra grunden med korrekt metadata og struktur</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Responsivt design til mobile, tablet og desktop</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> CMS-integration for nem selvadministration</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> 3 måneders gratis support efter lancering</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Hjemmeside Priser og Typer – Fra Enkle Landingssider til Komplette Webshops</h2>
            <p className="text-gray-600 mb-4">
              Magnora Marketing leverer hjemmesider i alle størrelser og kompleksiteter – fra målrettede landingssider til kampagner og annoncetrafik, over professionelle virksomhedshjemmesider, til komplette webshops med fuldt betalingsflow og produktstyring. Vi tilbyder også porteføljesider, bookingplatforme og branche-specifikke løsninger tilpasset din forretning. Prisen afhænger af scope og kompleksitet, og vi sender altid et detaljeret og transparent tilbud inden projektet startes.
            </p>
            <p className="text-gray-600 mb-4">
              Kontakt Magnora Marketing på mail@magnoramarketing.dk for at høre mere om, hvilken hjemmesideløsning der passer bedst til din virksomhed og dit budget. Vi sender et uforpligtende tilbud inden for 24 timer.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Hvad er en landingsside?', answer: 'En landingsside er en målrettet webside designet til at konvertere besøgende til leads eller kunder – typisk brugt i kampagner og annoncering.' },
        { question: 'Kan jeg selv opdatere indholdet på min hjemmeside?', answer: 'Ja – vi bygger med brugervenlige CMS-løsninger så du nemt kan opdatere tekst, billeder og indhold uden teknisk baggrund.' },
        { question: 'Hvor lang tid tager det at bygge en hjemmeside?', answer: 'En simpel hjemmeside tager typisk 2-4 uger. Større løsninger aftales individuelt baseret på scope.' },
        { question: 'Inkluderer I hosting og domæne?', answer: 'Vi kan hjælpe med opsætning af hosting og domæne, eller integrere med din eksisterende løsning.' },
        { question: "Hvad er forskellen på en hjemmeside og en webshop?", answer: "En hjemmeside præsenterer din virksomhed og genererer leads. En webshop giver kunder mulighed for direkte online køb." },
        { question: "Kan I lave en hjemmeside på 1 uge?", answer: "En simpel landingsside kan vi levere på 1-2 uger. En fuld hjemmeside tager typisk 3-6 uger afhængigt af scope." },
        { question: "Hvad er en 'one-pager'?", answer: "En one-pager er en hjemmeside med alt indhold på én lang side, opdelt i sektioner. Perfekt til produktlanceringer og kampagner." },
        { question: "Kan I redesigne vores eksisterende hjemmeside?", answer: "Ja – vi tilbyder fulde redesigns med bevaret indhold og forbedret design, brugeroplevelse og konverteringsrate." },
        { question: "Hvad er en conversion rate?", answer: "Conversion rate er procentdelen af besøgende der udfører en ønsket handling – f.eks. udfylder en formular eller køber et produkt." },
        { question: "Kan vi selv redigere hjemmesiden?", answer: "Ja – vi bygger med brugervenlige CMS-løsninger som WordPress, Webflow eller lignende, så du nemt kan opdatere indhold." },
        { question: "Hvad er en 'SSL-certifikat'?", answer: "Et SSL-certifikat krypterer forbindelsen mellem brugerens browser og din hjemmeside. Det er nødvendigt for sikkerhed og Google-rangering." },
        { question: "Kan I lave flersprogede hjemmesider?", answer: "Ja – vi bygger flersprogede løsninger til virksomheder der opererer på internationale markeder." },
        { question: "Hvad er retargeting?", answer: "Retargeting viser annoncer til besøgende der allerede har besøgt din hjemmeside. Vi kan integrere tracking til dette formål." },
        { question: "Kan I hjælpe med billeder og tekst?", answer: "Ja – vi samarbejder med tekstforfattere og fotografer og kan levere en komplet løsning inkl. professionelt indhold." },
      ]} />
      <CTASection
        title="Få en professionel hjemmeside der konverterer"
        subtitle="Magnora Marketing bygger moderne, hurtige hjemmesider der tiltrækker kunder og genererer leads."
        primaryText="Kontakt os"
        primaryLink="/kontakt"
        secondaryText="Se priser"
        secondaryLink="/priser"
      />
    </>
  );
}
