import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Zap, Shield,
  Sparkles, Bot, Rocket, Layers, Search, Cpu,
  Clock, Target, PenTool, Server, TrendingUp, MessageSquare
} from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';
import ContactForm from '../../components/ContactForm';

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: <Sparkles size={36} className="text-blue-600" />,
      title: 'Unik webudvikling – ingen skabeloner',
      description: 'Vi bygger fra bunden med kode, der er skræddersyet til din forretning. Ingen generiske templates, ingen tunge WordPress-temaer – kun en løsning der er 100% din og skiller sig ud fra konkurrenterne.'
    },
    {
      icon: <Bot size={36} className="text-blue-600" />,
      title: 'AI indbygget fra grunden',
      description: 'Chatbots, intelligent søgning, AI-drevet indholdsgenerering og automatiserede kundeflows bygges direkte ind i din løsning – så din hjemmeside arbejder og sælger for dig, døgnet rundt.'
    },
    {
      icon: <Zap size={36} className="text-blue-600" />,
      title: 'Ekstrem performance',
      description: 'Lynhurtige indlæsningstider, perfekte Core Web Vitals og optimeret kode der sikrer topplaceringer i Google og en brugeroplevelse dine kunder husker.'
    },
    {
      icon: <Shield size={36} className="text-blue-600" />,
      title: 'Sikkerhed & GDPR som standard',
      description: 'HTTPS, datakryptering, sikkerhedsopdateringer og fuld GDPR-compliance er indbygget i alle løsninger fra dag ét – ikke en eftertanke.'
    }
  ];

  const techStack = [
    'React & Next.js', 'TypeScript', 'Node.js & Express', 'REST API & GraphQL',
    'PostgreSQL & MongoDB', 'Tailwind CSS', 'OpenAI & LLM-integration', 'Vercel & AWS', 'CI/CD pipelines'
  ];

  const deliverables = [
    'Kravspecifikation og teknisk arkitektur',
    'UI/UX design og interaktive prototyper',
    'Fuldt responsiv, unik frontend-udvikling',
    'Backend, database og API-integration',
    'AI-funktioner: chatbot, automatisering, søgning',
    'Teknisk SEO og performance-optimering',
    'Testning, kvalitetssikring og lancering',
    'Dokumentation, kildekode og vidensoverdragelse',
    'Løbende vedligeholdelse, support og videreudvikling'
  ];

  // "Uanset omfang" – vi hjælper med alt fra små justeringer til store platforme
  const scopeTiers = [
    {
      icon: <PenTool size={32} className="text-blue-600" />,
      tag: 'Mindre projekter',
      title: 'Landingssider & optimering',
      description: 'En konverteringsstærk landingsside, en redesignet forside eller optimering af en eksisterende løsning. Intet projekt er for lille – vi rykker hurtigt.',
      points: ['Landingssider der konverterer', 'Redesign & facelift', 'Performance & SEO-boost']
    },
    {
      icon: <Layers size={32} className="text-blue-600" />,
      tag: 'Mellemstore projekter',
      title: 'Hjemmesider & webshops',
      description: 'Komplette, unikke hjemmesider og webshops bygget til at tiltrække trafik, generere leads og repræsentere din virksomhed professionelt.',
      points: ['Skræddersyede hjemmesider', 'Webshop & e-handel', 'CMS du selv kan styre']
    },
    {
      icon: <Server size={32} className="text-blue-600" />,
      tag: 'Store projekter',
      title: 'Webapps & SaaS-platforme',
      description: 'Avancerede webapplikationer, kundeportaler, dashboards og SaaS-platforme med brugerlogin, betalinger og AI – bygget til at skalere.',
      points: ['SaaS & platforme', 'Kundeportaler & dashboards', 'AI & systemintegrationer']
    }
  ];

  const aiCapabilities = [
    {
      icon: <MessageSquare size={28} className="text-blue-600" />,
      title: 'AI-chatbot & kundeservice',
      desc: 'Besvar kunder øjeblikkeligt på dansk, kvalificér leads og book møder automatisk – direkte på din hjemmeside, 24/7.'
    },
    {
      icon: <Search size={28} className="text-blue-600" />,
      title: 'Intelligent søgning',
      desc: 'AI-drevet søgning der forstår hensigt frem for blot søgeord, så brugerne finder præcis det, de leder efter.'
    },
    {
      icon: <PenTool size={28} className="text-blue-600" />,
      title: 'AI-indholdsgenerering',
      desc: 'Automatisk generering af SEO-tekster, produktbeskrivelser og blogindhold – integreret direkte i dit CMS.'
    },
    {
      icon: <Cpu size={28} className="text-blue-600" />,
      title: 'Automatiserede workflows',
      desc: 'Leadopfølgning, e-mailflows, dataudtræk og rapportering der kører automatisk, mens du fokuserer på forretningen.'
    }
  ];

  const process = [
    { step: '1', label: 'Idé & strategi', desc: 'Vi kortlægger dine mål, målgruppe og krav – og oversætter dem til en klar teknisk plan.' },
    { step: '2', label: 'Design & prototype', desc: 'Du godkender wireframes og et unikt design, inden en eneste linje produktionskode skrives.' },
    { step: '3', label: 'Udvikling & AI', desc: 'Vi bygger frontend, backend og AI-funktioner med moderne, skalerbar kode – med løbende status.' },
    { step: '4', label: 'Test & lancering', desc: 'Grundig test, performance-optimering og teknisk SEO inden vi sætter løsningen live.' },
    { step: '5', label: 'Vækst & support', desc: 'Efter lancering optimerer, vedligeholder og videreudvikler vi løsningen sammen med dig.' }
  ];

  const whyNow = [
    {
      icon: <TrendingUp size={28} className="text-blue-600" />,
      title: 'Dine konkurrenter rykker allerede',
      desc: 'Virksomheder der integrerer AI og moderne web nu, vinder markedsandele. De der venter, taber terræn hver måned.'
    },
    {
      icon: <Target size={28} className="text-blue-600" />,
      title: 'Google belønner moderne sider',
      desc: 'Hastighed, Core Web Vitals og struktureret data afgør din placering. En forældet side koster dig synlighed og salg.'
    },
    {
      icon: <Clock size={28} className="text-blue-600" />,
      title: 'Jo før, jo billigere',
      desc: 'At bygge rigtigt fra start er langt billigere end at lappe på en løsning, der aldrig var bygget til vækst.'
    }
  ];

  return (
    <>
      <SEO
        title="Unik Webudvikling & AI | Magnora Marketing – Skræddersyede Webløsninger til Vækst"
        description="Magnora Marketing bygger unikke, AI-drevne webapplikationer og hjemmesider til danske virksomheder – uanset omfang. Fra landingsside til SaaS-platform. Moderne teknologi, ekstrem performance og indbygget AI. Start dit projekt i dag."
        canonical="/digital/webudvikling"
        keywords="webudvikling, unik webudvikling, AI webudvikling, skræddersyet hjemmeside, webapplikation, React, Next.js, TypeScript, AI integration hjemmeside, webshop, SaaS udvikling, Magnora Marketing digital"
      />

      <HeroSection
        title="Unik Webudvikling & AI der Sætter din Forretning Foran"
        subtitle="Vi bygger skræddersyede, AI-drevne webløsninger fra bunden – uanset om det er en landingsside eller en fuld SaaS-platform. Ingen skabeloner. Kun kode bygget til din vækst."
        ctaText="Start dit projekt"
        ctaLink="/kontakt"
        secondaryCtaText="Se hvad vi bygger"
        secondaryCtaLink="#loesninger"
        backgroundImage="/heroes/hero-webdev.jpg"
      />

      {/* Hvorfor tage stilling nu – "det er noget man skal være klar til" */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Er du klar til fremtidens web?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Unik webudvikling og AI er ikke et &quot;måske&quot; – det er noget du skal tage stilling til nu
            </h2>
            <p className="text-lg text-white/70">
              Nettet har ændret sig. En generisk skabelon-hjemmeside er ikke længere nok til at skille sig ud, ranke i Google eller konvertere besøgende til kunder. De virksomheder, der tør bygge unikt og integrere AI, er dem der vinder de næste år. Spørgsmålet er ikke <em>om</em> du skal – men <em>hvornår</em>.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyNow.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  {React.cloneElement(item.icon, { className: 'text-blue-300' })}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#kontakt-form" className="btn btn-primary text-base px-8 py-4">
              Tag stilling – book en uforpligtende snak <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Hvad vi tilbyder */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">Hvad vi leverer</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Webudvikling bygget til at skille sig ud</h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              Fra idé til lancering leverer Magnora Marketing komplette, unikke webløsninger med AI indbygget – bygget til at vokse med din virksomhed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="card flex gap-5 p-6">
                <div className="flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{f.title}</h3>
                  <p className="text-slate-600">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uanset omfang – scope tiers */}
      <section id="loesninger" className="section bg-sky-50 scroll-mt-20">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">Uanset omfang</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vi hjælper med dit nuværende – og dit kommende – projekt</h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              Intet projekt er for lille, og intet er for ambitiøst. Uanset om du skal have justeret en eksisterende side eller bygget en helt ny platform fra bunden, står Magnora Marketing klar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {scopeTiers.map((tier, i) => (
              <div key={i} className="card p-8 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                  {tier.icon}
                </div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">{tier.tag}</span>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{tier.title}</h3>
                <p className="text-slate-600 mb-5 flex-grow">{tier.description}</p>
                <ul className="space-y-2">
                  {tier.points.map((p, pi) => (
                    <li key={pi} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-500 mb-5">Har du et projekt i tankerne – uanset hvor det er i processen?</p>
            <a href="#kontakt-form" className="btn btn-primary text-base px-8 py-4">
              Fortæl os om dit projekt <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* AI-fokus sektion */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">AI i centrum</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Din hjemmeside skal ikke bare være smuk – den skal arbejde for dig</h2>
              <p className="text-lg text-slate-600 mb-6">
                Vi bygger AI direkte ind i dine webløsninger, så de gør mere end at se godt ud. Din side besvarer kunder, kvalificerer leads, genererer indhold og automatiserer opgaver – helt af sig selv, døgnet rundt. Det er forskellen på en digital brochure og en digital medarbejder.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {aiCapabilities.map((c, i) => (
                  <div key={i} className="p-5 bg-sky-50 rounded-2xl border border-blue-100/60">
                    <div className="mb-3">{c.icon}</div>
                    <h3 className="font-semibold text-slate-900 mb-1.5 text-base">{c.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/digital/ai-integration" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Se hvordan vi integrerer AI <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl blur-2xl opacity-60" />
              <div className="relative bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Bot size={24} className="text-blue-300" />
                  </div>
                  <div>
                    <p className="font-semibold">AI-assistent</p>
                    <p className="text-xs text-white/50">Online · svarer på sekunder</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 text-sm max-w-[85%]">
                    Hej! Jeg kan se, du kigger på webudvikling. Skal jeg hjælpe dig i gang? 👋
                  </div>
                  <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-[85%] ml-auto">
                    Ja, vi overvejer en ny platform med AI.
                  </div>
                  <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 text-sm max-w-[85%]">
                    Perfekt – jeg booker et uforpligtende møde med et af Magnoras webteam. Hvornår passer det dig? 📅
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs text-white/40">
                  <Sparkles size={14} /> Denne type assistent bygger vi ind i din løsning
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proces */}
      <section className="section bg-sky-50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">Sådan arbejder vi</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fra idé til lanceret løsning</h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              En gennemsigtig, tryg proces hvor du er med hele vejen – og altid ved præcis, hvad der sker.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <div key={i} className="relative bg-white rounded-2xl border border-blue-100/60 p-6 text-center shadow-sm">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-500/25">
                  {p.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-base">{p.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hvad du modtager + tech */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Nøglefærdig levering</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Hvad du modtager fra Magnora Marketing</h2>
              <p className="text-lg text-slate-600 mb-8">
                Vi håndterer hele processen – fra kravspecifikation og design til udvikling, AI-integration, test og lancering. Du får en nøglefærdig løsning med fuld dokumentation, kildekode og support.
              </p>
              <ul className="space-y-3">
                {deliverables.map((d, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span className="text-slate-700">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#kontakt-form" className="btn btn-primary inline-flex items-center">
                  Start dit projekt <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
            <div className="bg-sky-50 rounded-3xl border border-blue-100/60 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Layers size={28} className="text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">Vores teknologistack</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Vi bygger med moderne, afprøvede teknologier der sikrer stabilitet, skalering, sikkerhed og nem vedligeholdelse – de samme værktøjer som verdens førende tech-virksomheder.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech, i) => (
                  <span key={i} className="bg-white text-blue-700 px-4 py-2 rounded-full font-medium text-sm border border-blue-100 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktformular – catchy */}
      <section id="kontakt-form" className="relative overflow-hidden py-24 scroll-mt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Lad os bygge noget unikt
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Har du et projekt – nu eller på vej? Lad os tage snakken.
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Fortæl os om din idé eller dit behov, uanset hvor stort eller småt. Vi vender tilbage inden for én hverdag med konkrete input og et uforpligtende bud på næste skridt.
              </p>
              <ul className="space-y-3">
                {[
                  'Uforpligtende og gratis – ingen binding',
                  'Svar inden for én hverdag',
                  'Konkret rådgivning om AI og webudvikling',
                  'Hjælp uanset projektets omfang'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white/80">
                    <CheckCircle className="text-blue-300 mr-3 flex-shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-3 text-white/50 text-sm">
                <Rocket size={18} className="text-blue-300" />
                Fra første besked til lanceret løsning – vi står klar.
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">Start dit webprojekt</h3>
                <p className="text-sm text-slate-500">Udfyld formularen – så tager vi den derfra.</p>
              </div>
              <ContactForm presetTopic="Webudvikling" sourceLabel="Webudvikling-siden" />
            </div>
          </div>
        </div>
      </section>

      {/* SEO tekst-sektioner */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Unik Webudvikling til Ambitiøse Virksomheder – Skræddersyet Kode, AI og Vækst</h2>
            <p className="text-slate-600 mb-4">
              Magnora Marketings webudviklingsteam bygger moderne, skalerbare og konverteringsoptimerede webapplikationer, der understøtter din forretning og vækst. Vi tror ikke på skabeloner eller tunge, generiske systemer – vi bygger unikt fra bunden med de bedste og mest afprøvede teknologier som React, Next.js, TypeScript, Node.js og PostgreSQL. Det betyder en løsning, der er 100% din, skiller sig ud fra konkurrenterne og er bygget præcist til dine forretningsprocesser og brugerbehov. Fra enkle præsentationssider og landingssider til avancerede SaaS-platforme, kundeportaler og systemintegrationer håndterer Magnora Marketing hele udviklingsprocessen fra kravspecifikation og UI/UX-design til testning, lancering og løbende vedligeholdelse.
            </p>
            <p className="text-slate-600 mb-6">
              Det, der virkelig adskiller vores webudvikling, er integrationen af kunstig intelligens direkte i din løsning. Vi bygger AI-chatbots, intelligent søgning, automatiseret indholdsgenerering og selvkørende workflows ind i dine websider, så de arbejder og sælger for dig døgnet rundt. Alle Magnora Marketings webløsninger er fuldt responsive og mobilvenlige, SEO-optimerede fra grunden og bygget med sikkerhed og GDPR-compliance som grundpillerne. Vi leverer nøglefærdige løsninger med fuld dokumentation, kildekodeoverdragelse og et struktureret onboarding-forløb, der sikrer, at du og dit team kan administrere og videreudvikle løsningen selv. Hurtige indlæsningstider, perfekte Core Web Vitals og optimeret kode er standard i alle projekter.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-slate-700"><span className="text-blue-600 font-bold mt-1">✓</span> Unik, skræddersyet kode – ingen skabeloner eller generiske temaer</li>
              <li className="flex items-start gap-2 text-slate-700"><span className="text-blue-600 font-bold mt-1">✓</span> AI indbygget: chatbot, søgning, automatisering og indholdsgenerering</li>
              <li className="flex items-start gap-2 text-slate-700"><span className="text-blue-600 font-bold mt-1">✓</span> Moderne teknologistack: React, Next.js, TypeScript, Node.js</li>
              <li className="flex items-start gap-2 text-slate-700"><span className="text-blue-600 font-bold mt-1">✓</span> Fuldt responsivt design og teknisk SEO til alle enheder</li>
              <li className="flex items-start gap-2 text-slate-700"><span className="text-blue-600 font-bold mt-1">✓</span> GDPR-compliant med fuld dokumentation og kildekode</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Webudvikling der Genererer Leads og Konverterer Besøgende til Kunder</h2>
            <p className="text-slate-600 mb-4">
              En professionel og unik hjemmeside eller webapplikation fra Magnora Marketing er mere end blot en digital tilstedeværelse – det er din mest effektive sælger, der arbejder for dig døgnet rundt. Vi designer med konvertering for øje og bygger klare call-to-actions, brugervenlig navigation og overbevisende landingssider, der omdanner besøgende til leads og leads til kunder. Med AI-drevne funktioner som automatisk leadkvalificering, intelligente chatbots og personaliserede kundeflows løfter vi konverteringsraten markant i forhold til en traditionel, statisk hjemmeside. Kombineret med solid teknisk SEO sikrer vi, at din hjemmeside ranker godt i søgemaskinerne og tiltrækker den rigtige trafik.
            </p>
            <p className="text-slate-600 mb-4">
              At investere i unik webudvikling og AI er ikke længere en luksus – det er en beslutning, du skal tage stilling til for at være klar til fremtiden. De virksomheder, der handler nu, står langt stærkere om et år end dem, der venter. Uanset om du står med et konkret projekt, der skal i gang med det samme, eller blot overvejer et kommende projekt, hjælper Magnora Marketing dig med at træffe det rigtige valg – uden binding og uden pres.
            </p>
            <p className="text-slate-600 mb-4">
              Kontakt Magnora Marketing på mail@magnoramarketing.dk eller udfyld formularen ovenfor for en uforpligtende snak om dit webudviklingsprojekt. Vi vender tilbage inden for én hverdag.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Hvad koster en hjemmeside eller webapp hos Magnora Marketing?', answer: 'Prisen afhænger af scope og kompleksitet. Vi tilbyder løsninger fra enkle landingssider til avancerede AI-drevne webapplikationer og SaaS-platforme. Kontakt os for et uforpligtende tilbud tilpasset dit projekt.' },
        { question: 'Hjælper I med både små og store projekter?', answer: 'Ja – uanset omfang. Vi hjælper med alt fra en enkelt landingsside eller optimering af en eksisterende side til store, komplekse platforme. Intet projekt er for lille, og intet er for ambitiøst.' },
        { question: 'Hvordan integrerer I AI i webudvikling?', answer: 'Vi bygger AI direkte ind i din løsning – f.eks. chatbots der besvarer kunder og booker møder, intelligent søgning, automatisk indholdsgenerering og selvkørende workflows. Din hjemmeside bliver en aktiv medarbejder, ikke bare en digital brochure.' },
        { question: 'Bruger I skabeloner eller bygger I unikt?', answer: 'Vi bygger unikt fra bunden med skræddersyet kode – ingen generiske templates eller tunge temaer. Det giver en løsning der er 100% din, skiller sig ud og er bygget præcist til din forretning.' },
        { question: 'Hvem ejer løsningen, når den er færdig?', answer: 'Du ejer 100% af koden og indholdet. Magnora Marketing leverer en nøglefærdig løsning med fuld dokumentation og kildekode, som du selv kan administrere og videreudvikle.' },
        { question: 'Kan I overtage og videreudvikle et eksisterende projekt?', answer: 'Ja – vi kan gennemgå, optimere og videreudvikle eksisterende løsninger uanset teknologi, med minimal afbrydelse af din drift.' },
        { question: 'Laver I mobilvenlige hjemmesider?', answer: 'Alle Magnora Marketings webløsninger er fuldt responsive og optimeret til mobile enheder, tablets og desktop.' },
        { question: 'Inkluderer I SEO-optimering?', answer: 'Ja – vi bygger alle løsninger med solid teknisk SEO som fundament, inkl. hurtig loadtid, strukturerede data, metadata og perfekte Core Web Vitals.' },
        { question: 'Hvad er en webapp?', answer: 'En webapp er en avanceret hjemmeside med interaktive funktioner – f.eks. brugerlogin, dashboards, bookingsystemer, AI-funktioner eller interne værktøjer.' },
        { question: 'Hvad er forskellen på en hjemmeside og en webapp?', answer: 'En hjemmeside præsenterer information. En webapp tilbyder interaktive funktioner og bruges som et digitalt arbejdsredskab. Vi bygger begge dele – og kombinerer dem ofte med AI.' },
        { question: 'Hvorfor skal jeg tage stilling til AI og webudvikling nu?', answer: 'Fordi dine konkurrenter allerede rykker, Google belønner moderne sider, og det er langt billigere at bygge rigtigt fra start end at lappe på en forældet løsning senere. Jo før du handler, jo stærkere står du.' },
        { question: 'Kan jeg se en prototype, inden projektet godkendes?', answer: 'Ja – vi præsenterer altid wireframes og designprototyper til godkendelse, inden vi begynder den egentlige udvikling.' },
        { question: 'Hvad er vedligeholdelse, og hvad koster det?', answer: 'Vedligeholdelse inkluderer sikkerhedsopdateringer, performance-tjek og indholdsændringer. Vi tilbyder fleksible månedlige vedligeholdelsespakker.' },
        { question: 'Kan I hjælpe med domæne, hosting og analytics?', answer: 'Ja – vi hjælper med valg, registrering og opsætning af domæne og hosting, og opsætter Google Analytics, heatmaps og konverteringstracking som standard.' },
        { question: 'Hvad er næste skridt, hvis jeg vil i gang?', answer: 'Udfyld kontaktformularen på siden eller skriv til mail@magnoramarketing.dk. Vi vender tilbage inden for én hverdag med konkrete input og et uforpligtende bud på næste skridt.' },
      ]} />

      <CTASection
        title="Klar til at bygge noget unikt?"
        subtitle="Uanset om dit projekt er stort eller lille, nu eller på vej – Magnora Marketing bygger moderne, AI-drevne webløsninger der sætter din forretning foran."
        primaryText="Start dit projekt"
        primaryLink="/kontakt"
        secondaryText="Se digital portfolio"
        secondaryLink="/digital/hjemmesider"
      />
    </>
  );
}
