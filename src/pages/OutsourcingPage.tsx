import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, TrendingUp, Clock, Shield, Users, BarChart3, Zap, Sparkles, Code, Globe, Phone, Repeat, HeartHandshake } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';

const OutsourcingPage: React.FC = () => {
  const reasons = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: 'Hurtigere skalering',
      description: 'Skaler din salgsindsats hurtigt op eller ned uden ansættelses- og oplæringsomkostninger.'
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: 'Frigør dit team',
      description: 'Lad dine egne sælgere fokusere på lukning og kundepleji – vi tager den tidskrævende prospektering.'
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Lav risiko',
      description: 'Med No Cure No Pay modellen betaler du kun for leverede resultater. Ingen faste lønomkostninger.'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Erfaren salgsstyrke',
      description: 'Få adgang til et erfarent team af salgsprofessionelle med dokumenterede resultater fra dag ét.'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: 'Fuld transparens',
      description: 'Løbende rapportering og data-indsigt giver dig fuld overblik over indsatsen og dens resultater.'
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: 'Hurtigt i gang',
      description: 'Magnora Marketing kan typisk starte aktiv salg og mødebooking inden for 1-2 uger efter aftaleindgåelse.'
    }
  ];

  return (
    <>
      <SEO
        title="Hvorfor Os? | Din Langsigtede Vækstpartner – Telesalg, Webudvikling & AI"
        description="Magnora Marketing er din langsigtede vækstpartner – uanset om samarbejdet er inden for telemarketing, webudvikling eller AI. Vi er skarpe på hjemmesider, AI-udvikling og telesalg, og vi er med hele vejen, hvis du ønsker det."
        canonical="/hvorfor-os"
        keywords="hvorfor Magnora Marketing, langsigtet samarbejde, vækstpartner, telesalg, webudvikling, AI-udvikling, AI-løsninger, hjemmesider, mødebooking, B2B salgspartner"
      />

      <HeroSection
        title="Vi Bygger Langvarige Samarbejder – ikke Enkeltopgaver"
        subtitle="Uanset om det er inden for telemarketing, webudvikling eller AI, vægter vi et længerevarende samarbejde. Vi er skarpe på hjemmesider, AI-udvikling og telesalg – og vi er med hele vejen, hvis du ønsker det."
        ctaText="Start et samarbejde"
        ctaLink="/kontakt"
        secondaryCtaText="Se priser"
        secondaryCtaLink="/priser"
        backgroundImage="/heroes/hero-partner.jpg"
      />

      {/* Langsigtet samarbejde – kernebudskab */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Et partnerskab, ikke en leverance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Vi vægter det længerevarende samarbejde
            </h2>
            <p className="text-lg text-white/70">
              Hos Magnora Marketing tænker vi ikke i enkeltstående opgaver, men i partnerskaber der vokser over tid. Vi lærer din forretning at kende, og jo længere vi arbejder sammen, jo bedre resultater skaber vi – uanset om det starter med en telesalgskampagne, en ny hjemmeside eller en AI-løsning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Repeat size={28} className="text-blue-300" />,
                title: 'Langsigtet frem for kortsigtet',
                desc: 'Vi investerer i at forstå din virksomhed, så samarbejdet bliver stærkere måned for måned – ikke bare en opgave der leveres og glemmes.'
              },
              {
                icon: <HeartHandshake size={28} className="text-blue-300" />,
                title: 'Én partner på tværs af discipliner',
                desc: 'Telemarketing, webudvikling og AI samlet ét sted. Du slipper for at koordinere mellem flere leverandører – vi binder det hele sammen.'
              },
              {
                icon: <Users size={28} className="text-blue-300" />,
                title: 'Vi er med hele vejen',
                desc: 'Fra første idé til drift, optimering og videreudvikling. Ønsker du det, følger vi projektet hele vejen og er der, når du har brug for os.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vores kompetencer */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">Vores kompetencer</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skarpe på det, der driver din vækst</h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              Vi kombinerer stærke salgskompetencer med moderne digital udvikling – så du får en partner, der kan hjælpe med både at bygge løsningen og sælge den.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Globe size={28} className="text-blue-600" />,
                title: 'Hjemmesider',
                desc: 'Flotte, professionelle og konverteringsstærke hjemmesider – bygget unikt og til en god pris, så din virksomhed står stærkt online.',
                link: '/digital/hjemmesider'
              },
              {
                icon: <Sparkles size={28} className="text-blue-600" />,
                title: 'AI-udvikling & løsninger',
                desc: 'Vi er skarpe på at bygge og integrere AI – fra chatbots og automatisering til skræddersyet AI-udvikling, der giver dig et forspring.',
                link: '/digital/ai-integration'
              },
              {
                icon: <Phone size={28} className="text-blue-600" />,
                title: 'Telesalg & mødebooking',
                desc: 'Erfarne salgskonsulenter der åbner døre, kvalificerer emner og booker møder – så din pipeline aldrig løber tør.',
                link: '/ydelser'
              },
              {
                icon: <Code size={28} className="text-blue-600" />,
                title: 'Kompleks webudvikling',
                desc: 'Webapplikationer, kundeportaler og SaaS-platforme bygget fra bunden med moderne teknologi og bygget til at skalere.',
                link: '/digital/webudvikling'
              },
              {
                icon: <TrendingUp size={28} className="text-blue-600" />,
                title: 'Leadgenerering',
                desc: 'Datadrevet og flerkanalbaseret leadgenerering der skaber en konstant strøm af varme, salgsklare emner.',
                link: '/ydelser'
              },
              {
                icon: <HeartHandshake size={28} className="text-blue-600" />,
                title: 'Vi sælger også løsningen',
                desc: 'Har vi bygget din nye løsning, kan vi endda hjælpe med at booke møder og sælge den – vi kender allerede produktet og projektet.',
                link: '/kontakt'
              }
            ].map((item, i) => (
              <Link key={i} to={item.link} className="card p-7 flex flex-col group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 flex-grow">{item.desc}</p>
                <span className="mt-4 inline-flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                  Læs mere <ArrowRight size={15} className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">6 grunde til at vælge Magnora Marketing som langsigtet partner</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Uanset om samarbejdet handler om salg, hjemmesider eller AI, giver Magnora Marketing dig professionel udførelse, fuld fleksibilitet og en partner der bliver hos dig.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-lg">
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Intern sælger vs. Magnora Marketing som salgspartner</h2>
              <p className="text-lg text-gray-600 mb-6">
                At ansætte en dedikeret sælger koster typisk 400.000-600.000 kr. om året inkl. løn, bonus, pension, arbejdsplads og oplæring. Og det tager 3-6 måneder at rekruttere og onboarde.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Med Magnora Marketing betaler du kun for den faktiske indsats – og du kan starte inden for uger. Du slipper for rekrutteringsrisikoen, sygedage og opsigelsesomkostninger.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Ingen rekrutteringsomkostninger',
                  'Ingen oplæringsperiode på 3-6 måneder',
                  'Ingen sygefravær eller opsigelsesrisiko',
                  'Ingen faste lønomkostninger ved No Cure No Pay',
                  'Fleksibel skalering op og ned',
                  'Erfaret team fra dag ét'
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/kontakt" className="btn btn-primary inline-flex items-center">
                Tal med Magnora Marketing <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Indsend dit samarbejdsønske</h3>
                <ContactForm presetTopic="Pris på Mødebooking / Telesalg" sourceLabel="Hvorfor Magnora-siden" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klar til at prøve Magnora Marketing?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book en gratis samtale og hør, hvordan Magnora Marketing kan accelerere din salgsindsats fra næste måned.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Book gratis samtale <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Outsourcing af B2B Salg til Magnora Marketing – Professionel Salgskraft uden Ansættelsesbyrden</h2>
            <p className="text-gray-600 mb-4">
              Outsourcing af B2B salg og telemarketing til Magnora Marketing giver din virksomhed adgang til et erfarent og professionelt salgsteam fra dag ét – uden de store faste omkostninger forbundet med rekruttering, oplæring, ledelse og fastholdelse af interne sælgere. Magnora Marketing fungerer som din forlængede salgsstyrke og repræsenterer din virksomhed professionelt og engageret over for potentielle kunder, med fuld respekt for dine brand guidelines og din tone of voice. Alle genererede leads og bookede møder tilhører dig og leveres direkte ind i dit CRM-system.
            </p>
            <p className="text-gray-600 mb-6">
              Magnora Marketing's outsourcingmodel er designet til maksimal fleksibilitet og skalerbarhed. Du kan hurtigt justere aktivitetsniveauet baseret på dine aktuelle behov, kampagnemål og budget – og du betaler kun for aktiv salgstid og dokumenterede resultater. Vores kunder beholder fuld kontrol og indsigt via løbende rapportering og ugentlige statusmøder, og kan til enhver tid se hvad der sker i pipeline og hvilke resultater indsatsen giver.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Skalerbar salgsindsats uden faste ansættelsesbyrder</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Fuld kontrol og transparens via løbende rapportering</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Alle leads og møder leveres direkte til dit CRM</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Professionel repræsentation af dit brand</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Én Langsigtet Vækstpartner til Telesalg, Webudvikling og AI</h2>
            <p className="text-gray-600 mb-4">
              Det, der adskiller Magnora Marketing, er, at vi vægter det længerevarende samarbejde højere end den enkelte opgave. Vi tror på, at de bedste resultater opstår, når vi lærer din virksomhed, dine kunder og dit marked at kende over tid – og det gælder uanset om samarbejdet starter inden for telemarketing, webudvikling eller AI. Vi er skarpe på at bygge flotte, professionelle hjemmesider til en god pris, på kompleks webudvikling og på AI-udvikling og AI-løsninger, og vi kombinerer det med stærke kompetencer inden for telesalg, mødebooking og leadgenerering. Som én samlet partner binder vi det digitale og det salgsmæssige sammen, så du slipper for at koordinere mellem flere leverandører.
            </p>
            <p className="text-gray-600 mb-4">
              Fordelen ved at samle det hos os er, at vi kender både produktet og projektet. Har vi bygget din nye hjemmeside eller AI-løsning, kan vi endda hjælpe dig med at booke møder og sælge den – for vi er allerede inde i materien, og det er en rigtig god start på et salgsforløb. Og ønsker du det, er vi med hele vejen: fra første idé og udvikling til lancering, drift, optimering og videreudvikling. Du bestemmer selv omfanget – vi tilpasser os din virksomhed og dine mål.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Langsigtet samarbejde frem for enkeltstående opgaver</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Skarpe på hjemmesider, AI-udvikling og telesalg</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Vi bygger løsningen – og kan sælge den for dig</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Vi er med hele vejen, hvis du ønsker det</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Kontakt Magnora Marketing på mail@magnoramarketing.dk for en uforpligtende snak om, hvordan vi kan blive din langsigtede vækstpartner inden for salg, web og AI.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Kan Magnora Marketing hjælpe med både salg og webudvikling?', answer: 'Ja – vi er én samlet partner inden for telesalg, mødebooking, leadgenerering, hjemmesider, kompleks webudvikling og AI-løsninger. Du slipper for at koordinere mellem flere leverandører.' },
        { question: 'Hvorfor vægter I langsigtede samarbejder?', answer: 'Fordi de bedste resultater opstår over tid. Jo bedre vi kender din virksomhed, dine kunder og dit marked, jo skarpere kan vi eksekvere – uanset om det er salg, web eller AI.' },
        { question: 'Er I med hele vejen i projektet?', answer: 'Ja, hvis du ønsker det. Vi kan følge projektet fra første idé og udvikling til lancering, drift, optimering og videreudvikling. Du bestemmer selv omfanget.' },
        { question: 'Kan I sælge den løsning, I bygger for os?', answer: 'Ja – har vi bygget din hjemmeside eller AI-løsning, kan vi endda hjælpe med at booke møder og sælge den. Vi kender allerede produktet og projektet, hvilket er en god start på et salgsforløb.' },
        { question: 'Hvad er fordelene ved at outsource sit salg?', answer: 'Outsourcing af salg giver adgang til erfarne salgsprofessionelle uden fast ansættelse, reducerer faste lønomkostninger og giver fleksibilitet til at skalere op eller ned.' },
        { question: 'Mister vi kontrollen over salgsprocessen?', answer: 'Nej – Magnora Marketing arbejder tæt sammen med jer, følger jeres guidelines og rapporterer løbende. I beholder fuld kontrol og indsigt.' },
        { question: 'Hvem ejer de leads der genereres?', answer: 'Alle leads og møder tilhører jer som kunde – de leveres direkte ind i jeres CRM-system.' },
        { question: 'Kan Magnora Marketing repræsentere vores brand professionelt?', answer: 'Ja – vores sælgere præsenterer sig som en del af jeres team og følger jeres brand guidelines og tone of voice.' },
        { question: 'Hvad er forskellen på Magnora Marketing og at ansætte en intern sælger?', answer: 'Med Magnora Marketing betaler du kun for aktiv salgstid og resultater. En intern sælger koster fast løn, rekruttering, oplæring og ledelse – uanset performance.' },
        { question: "Hvad er forskellen på outsourcing og interim salg?", answer: "Outsourcing er løbende ekstern salgsstøtte. Interim salg er typisk en midlertidig sælger der arbejder in-house. Magnora Marketing tilbyder eksternt outsourcet salg." },
        { question: "Kan vi outsource kun én del af salgsfunktionen?", answer: "Ja – du kan outsource prospektering og leadgenerering, mens dit interne team håndterer forhandling og lukning." },
        { question: "Hvad er de typiske resultater i de første 3 måneder?", answer: "De første 6-8 uger bruges typisk på opbygning og optimering. Fra måned 2-3 begynder resultaterne at accelerere." },
        { question: "Hvad sker der, hvis vores branche er meget niche?", answer: "Vi elsker nichemarkeder – vi researcher grundigt og tilpasser tilgangen, så vi taler det rigtige sprog til de rigtige personer." },
        { question: "Kan Magnora Marketing hjælpe med salg på nye markeder?", answer: "Ja – vi kan understøtte ekspansion til nye geografier og segmenter med målrettet opsøgende salg." },
        { question: "Hvad kræver det af os som kunde?", answer: "En kort briefing, adgang til jeres CRM og et godkendt script. Vi tager os af resten." },
        { question: "Kan vi bruge Magnora Marketing til en enkeltstående kampagne?", answer: "Ja – vi tilbyder kampagnebaserede samarbejder ved produktlanceringer, sæsonkampagner og andre engangsbehov." },
        { question: "Hvad er risikoen ved at outsource salget?", answer: "Den primære risiko er manglende alignment på tone og budskab – det afhjælper vi med grundig onboarding og løbende justeringer." },
        { question: "Hvad er et godt tidspunkt at starte outsourcing?", answer: "Når du har et klart produkt/service og en defineret målgruppe. Jo mere defineret, jo hurtigere resultater." },
        { question: "Kan vi stoppe og starte samarbejdet igen?", answer: "Ja – vi har kunder der bruger Magnora Marketing sæsonbaseret eller ved specifikke kampagnebehov." },
      ]} />
      <CTASection
        title="Find din langsigtede vækstpartner i Magnora Marketing"
        subtitle="Telesalg, webudvikling og AI samlet ét sted – et længerevarende samarbejde, hvor vi er med hele vejen, hvis du ønsker det."
        primaryText="Start et samarbejde"
        primaryLink="/kontakt"
        secondaryText="Se priser"
        secondaryLink="/priser"
      />
    </>
  );
};

export default OutsourcingPage;
