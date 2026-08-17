import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Users, Code, ArrowRight, Briefcase, BarChart3, CheckCircle, TrendingUp, HeartHandshake, MessageSquare, Target, Zap, Bot, Cpu, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';
import HeroVisual from '../components/HeroVisual';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <Phone size={40} className="text-blue-600" />,
      title: 'Telemarketing',
      description: 'Skarpt målrettet B2B telemarketing der åbner døre, skaber dialog og driver reelle forretningsresultater for din virksomhed.',
      features: [
        'Direkte kontakt til relevante beslutningstagere',
        'Kvalificering og prioritering af kundeemner',
        'Løbende opdatering af prospektdatabaser',
        'Opfølgning på markedsføringskampagner',
        'Kundetilfredshedsundersøgelser og feedback',
        'Detaljeret resultatrapportering'
      ]
    },
    {
      icon: <Users size={40} className="text-blue-600" />,
      title: 'Mødebooking',
      description: 'Vi fylder din kalender med kvalificerede salgsmøder hos de rette beslutningstagere – så dit team kan lukke flere aftaler.',
      features: [
        'Identifikation og screening af nøglepersoner',
        'Grundig forhåndskvalificering af emner',
        'Booking af fysiske møder og digitale demos',
        'Effektiv kalender- og tidsstyring',
        'Automatiske mødebekræftelser og påmindelser',
        'Struktureret opfølgning og feedbackloop'
      ]
    },
    {
      icon: <Code size={40} className="text-blue-600" />,
      title: 'Webudvikling',
      description: 'Moderne og konverteringsoptimerede webløsninger der repræsenterer din virksomhed professionelt og genererer leads døgnet rundt.',
      features: [
        'Skræddersyede webapplikationer',
        'Mobilvenligt responsivt design',
        'Webshops og e-handelsplatforme',
        'API-integrationer og systemkoblinger',
        'Brugervenlige CMS-løsninger',
        'Løbende support og vedligeholdelse'
      ]
    },
    {
      icon: <BarChart3 size={40} className="text-blue-600" />,
      title: 'Leadgenerering',
      description: 'Struktureret og datadrevet leadgenerering der leverer varme, salgsklar emner direkte til dit CRM-system.',
      features: [
        'Flerkanalsstrategi for leadgenerering',
        'Lead scoring og kvalitetssikring',
        'Segmentering efter branche og købspotentiale',
        'Dybdegående lead-profilering',
        'Løbende performanceanalyse og optimering',
        'Sømløs CRM-integration'
      ]
    }
  ];

  const businessBenefits = [
    'Telemarketing og struktureret leadgenerering',
    'Kvalificerede salgsmøder med beslutningstagere',
    'Proaktiv kundepleje og systematisk opfølgning',
    'Markedsanalyser og konkurrentkortlægning',
    'Opdatering og berigelse af salgsdatabaser',
    'Strategisk rådgivning om salgsoptimering'
  ];

  const freelanceBenefits = [
    'Selvbestemte arbejdstider og hjemmekontor',
    'Konkurrencedygtig grundløn og resultatbonus',
    'Solid oplæring og løbende faglig sparring',
    'Tæt support fra erfarne salgsledere',
    'Moderne digitale arbejdsværktøjer',
    'Varierede og engagerende projekter'
  ];

  const industries = [
    { name: 'SaaS & Cloud-løsninger', description: 'Salgsmøder med tech-beslutningstagere og IT-chefer' },
    { name: 'IT-konsulenter', description: 'Kvalificerede møder med virksomhedsledere' },
    { name: 'Forretningsudvikling', description: 'B2B-møder med C-level og direktionsniveau' },
    { name: 'Marketing & Kommunikation', description: 'Møder med CMO\'er og marketingdirektører' },
    { name: 'Digitale bureauer', description: 'Møder med virksomheder der vil vækste online' },
    { name: 'Finans & Revision', description: 'Professionelle møder med CFO\'er og regnskabschefer' },
    { name: 'HR & Rekruttering', description: 'Møder med personalechefer og HR-direktører' },
    { name: 'Transport & Logistik', description: 'Salgsmøder med indkøbs- og driftschefer' },
    { name: 'LED & Energieffektivisering', description: 'Møder om energibesparende løsninger til erhverv' },
    { name: 'Strøm & Energioptimering', description: 'B2B og B2C møder om lavere energiomkostninger' },
    { name: 'Kaffeservice til erhverv', description: 'Møder med facility managers og indkøbsansvarlige' },
    { name: 'Solenergi & Vedvarende energi', description: 'Møder om grøn omstilling og bæredygtig drift' },
    { name: 'Måtte- og rengøringsservice', description: 'Møder om arbejdsmiljø og hygiejneløsninger' },
    { name: 'Pensionsrådgivning', description: 'Møder med private og erhvervskunder om pensionsplanlægning' },
    { name: 'Inkasso & Kreditorstyring', description: 'Møder om effektiv og professionel gældinddrivelse' },
    { name: 'Servicevirksomheder generelt', description: 'B2B møder på tværs af serviceerhverv' }
  ];

  return (
    <>
      <SEO
        title="Magnora Marketing | Vækstpartner inden for Telesalg, Mødebooking, Webudvikling og AI"
        description="Magnora Marketing er din vækstpartner inden for telesalg, mødebooking, webudvikling, leadgenerering og AI-udviklingsopgaver. Vi leverer dokumenterede resultater med fleksible modeller."
        canonical="/"
        keywords="Magnora Marketing, vækstpartner, telesalg, mødebooking, webudvikling, leadgenerering, AI, AI-udvikling, salgspartner Danmark"
      />

      <HeroSection
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        ctaText="Bliv samarbejdspartner"
        ctaLink="/samarbejdspartner"
        secondaryCtaText="Start din karriere"
        secondaryCtaLink="/freelance-telemarketing"
        visual={<HeroVisual />}
      />

      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-4">
            <span className="section-label">Sådan arbejder vi</span>
            <h2 className="text-3xl font-bold mb-4">{t('home.process.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
              {t('home.process.subtitle')}
            </p>
          </div>

          {/* Process simulation */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100 hidden md:block" />

              {[
                {
                  step: '01',
                  icon: <MessageSquare size={22} className="text-white" />,
                  title: 'Indledende snak – helt uforpligtende',
                  desc: 'Vi starter altid med en kort samtale om dit projekt. Hvad er idéen? Hvad er målet? Er det TM, webudvikling eller AI? Der er ingen faste pakker – kun en ærlig dialog om hvad der giver mening for dig.',
                  tag: 'Startup · Veletableret · Alle brancher',
                  color: 'bg-blue-600',
                },
                {
                  step: '02',
                  icon: <Target size={22} className="text-white" />,
                  title: 'Vi kortlægger behovet og lægger en plan',
                  desc: 'Uanset om du er i idefasen eller klar til at skalere, skræddersyr vi en konkret handlingsplan. Vi definerer målgruppe, budskab, kanal og tidshorisont – og præsenterer et tilbud inden for 24 timer.',
                  tag: 'Idéfase · Vækstfase · Skalering',
                  color: 'bg-indigo-600',
                },
                {
                  step: '03',
                  icon: <Zap size={22} className="text-white" />,
                  title: 'Vi eksekverer – du følger med live',
                  desc: 'Vores team går i gang: telemarketing-kampagner, webudvikling eller AI-løsninger. Du får løbende opdateringer, rapporter og adgang til live data. Ingen overraskelser.',
                  tag: 'Telemarketing · Webudvikling · AI',
                  color: 'bg-blue-700',
                },
                {
                  step: '04',
                  icon: <TrendingUp size={22} className="text-white" />,
                  title: 'Fra idé til afsluttet salg',
                  desc: 'Vi hjælper hele vejen – fra udvikling af produktet til de første kundemøder er booket og salget er lukket. Magnora Marketing er din partner fra start til slut.',
                  tag: 'Leadgenerering · Mødebooking · Salgsafslutning',
                  color: 'bg-green-600',
                },
              ].map((s, i) => (
                <div key={i} className="relative flex gap-6 mb-8 last:mb-0">
                  <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center flex-shrink-0 shadow-lg z-10`}>
                    {s.icon}
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-bold text-slate-800 text-lg">{s.title}</h3>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">{s.step}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
                    <div className="text-xs text-slate-400 font-medium">{s.tag}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
              <p className="text-lg font-semibold mb-1">Klar til at tage den første snak?</p>
              <p className="text-white/80 text-sm mb-6">Vi hjælper startup, SMV og enterprise – alle starter med en gratis og uforpligtende samtale.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/kontakt" className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  Book en gratis snak <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/ydelser" className="inline-flex items-center justify-center bg-white/10 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                  Se vores ydelser
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Magnora Marketing er Specialister i B2B Salg, Mødebooking, Webudvikling, Leadgenerering og AI</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Med et stærkt team af erfarne salgsprofessionelle og digitale specialister hjælper Magnora Marketing virksomheder med at nå deres vækstmål gennem effektive og målbare indsatser – nu også med skarpe AI-integrationer og AI-løsninger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-6 flex flex-col items-center text-center fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-integrationer & AI-løsninger – fremhævet fokus */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              AI-integrationer & AI-løsninger
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Vi er skarpe på AI – og vi ved, hvorfor det betaler sig
            </h2>
            <p className="text-lg text-white/70">
              AI er ikke længere fremtiden – det er konkurrencefordelen lige nu. Vi bygger og integrerer AI-løsninger, der automatiserer opgaver, besvarer kunder og skaber vækst. Her er hvorfor danske virksomheder vælger at komme i gang med det samme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {[
              {
                icon: <Bot size={28} className="text-blue-300" />,
                title: 'Automatisér det gentagne',
                desc: 'AI-chatbots og workflows overtager de tidskrævende opgaver – leadopfølgning, kundeservice og booking – døgnet rundt.'
              },
              {
                icon: <Clock size={28} className="text-blue-300" />,
                title: 'Op til 70% tidsbesparelse',
                desc: 'Dine medarbejdere frigøres fra manuelt arbejde og kan fokusere på det, der reelt skaber værdi og vækst.'
              },
              {
                icon: <TrendingUp size={28} className="text-blue-300" />,
                title: 'Højere konvertering',
                desc: 'AI-kvalificerede leads og personaliserede kundeflows løfter konverteringen markant sammenlignet med manuelle processer.'
              },
              {
                icon: <Cpu size={28} className="text-blue-300" />,
                title: 'Skræddersyet til dig',
                desc: 'Fra simpel chatbot til avanceret AI-udvikling – vi bygger løsningen der passer præcist til din forretning og dine systemer.'
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

          <div className="text-center flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/digital/ai-integration" className="btn btn-primary text-base px-8 py-4">
              Se vores AI-løsninger <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link to="/kontakt" className="btn text-base px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white backdrop-blur-sm">
              Book en AI-snak
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Accelerér din virksomheds vækst med Magnora Marketing</h2>
              <p className="text-lg text-gray-600 mb-8">
                Overlad dit salgsarbejde til erfarne specialister. Magnora Marketing hjælper B2B virksomheder med at generere
                varme leads og booke kvalificerede møder – så din salgsstyrke kan fokusere på det, de er bedst til.
              </p>
              <div className="space-y-4">
                {businessBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/kontakt" className="btn btn-primary inline-flex items-center">
                  Få et uforpligtende tilbud <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/heroes/hero-home.jpg"
                alt="Vækst og succes for B2B virksomheder med Magnora Marketing"
                className="rounded-lg shadow-lg object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-xl font-semibold mb-2">Hjulpet +200 virksomheder med konkret vækst</p>
                <p>I Danmark og internationalt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Magnora Marketing's Brancheerfaring inden for B2B Salg og Mødebooking</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi har dybdegående erfaring med B2B mødebooking og telemarketing på tværs af brancher og målgrupper.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-semibold mb-2 text-blue-600">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-8 border-b md:border-b-0 md:border-r border-gray-700">
              <Briefcase size={48} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">For Virksomheder</h3>
              <p className="mb-6">
                Din vækstpartner inden for telesalg, mødebooking, webudvikling, leadgenerering og AI. Magnora Marketing leverer resultater – drevet af menneskelig ekspertise og moderne teknologi.
              </p>
              <Link to="/samarbejdspartner" className="btn bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center">
                Start samarbejde <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="text-center p-8">
              <BarChart3 size={48} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">For Sælgere</h3>
              <p className="mb-6">
                Tag styringen over din karriere. Bliv freelance sælger hos Magnora Marketing og tjene godt med fleksible arbejdstider og spændende projekter.
              </p>
              <Link to="/freelance-telemarketing" className="btn bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center">
                Se muligheder <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professionelt B2B Telesalg og Mødebooking i Danmark</h2>
            <p className="text-gray-600 mb-4">
              Magnora Marketing er Danmarks foretrukne vækstpartner for B2B virksomheder der ønsker at skalere deres salg uden at ansætte et stort internt salgsteam. Vi specialiserer os i professionelt telesalg, kvalificeret mødebooking og datadrevet leadgenerering – og leverer dokumenterede resultater på tværs af over 16 brancher. Vores erfarne salgskonsulenter arbejder målrettet med at identificere relevante beslutningstagere, kvalificere kundeemner og booke møder direkte i din kalender, så din salgsstyrke kan fokusere på det der skaber omsætning.
            </p>
            <p className="text-gray-600 mb-6">
              Magnora Marketing kombinerer menneskelig salgskraft med moderne digitale løsninger – herunder AI-integration, webudvikling og automatiseret leadgenerering. Vi tilbyder to fleksible prismodeller: No Cure No Pay, hvor du kun betaler for dokumenterede resultater, eller en fast pakkeløsning med garanteret minimumsantal salgsmøder. Uanset om du er en startup eller en etableret B2B virksomhed, skræddersyr Magnora Marketing en løsning der passer til dit budget og dine vækstmål.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Direkte adgang til relevante beslutningstagere i din målgruppe</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Kvalificerede salgsmøder med reel forretningspotentiale</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Flerkanalsstrategi: telefon, email, LinkedIn og AI-automatisering</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Løbende ROI-rapportering og transparent performanceopfølgning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Magnora Marketing – Din Salgspartner fra Første Opkald til Underskrevet Kontrakt</h2>
            <p className="text-gray-600 mb-4">
              Hos Magnora Marketing tror vi på, at den bedste vej til vækst går gennem ægte relationer og præcis kommunikation. Vores tilgang til B2B salg og mødebooking er altid skræddersyet til din specifikke branche, målgruppe og salgsproces. Vi dykker ned i din virksomhed, forstår dine produkter og services og udvikler præcise salgsscripts og kommunikationsstrategier der resonerer med dine potentielle kunder – fra SaaS og IT-konsulenter til energi, finans og facility management.
            </p>
            <p className="text-gray-600 mb-6">
              Med base i Valencia og et stærkt netværk af erfarne freelance sælgere kan Magnora Marketing hurtigt skalere indsatsen og tilpasse sig din virksomheds behov. Kontakt os på mail@magnoramarketing.dk for en uforpligtende samtale om, hvordan Magnora Marketing kan hjælpe din virksomhed med at generere flere kvalificerede leads og booke flere salgsmøder.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Hvad gør Magnora Marketing?', answer: 'Magnora Marketing er en dansk vækstpartner specialiseret i B2B telemarketing, mødebooking, leadgenerering, webudvikling og AI-integration. Vi hjælper virksomheder med at fylde salgspipelinen med kvalificerede møder og leads.' },
        { question: 'Hvilke brancher arbejder Magnora Marketing med?', answer: 'Vi har erfaring på tværs af over 16 brancher, herunder SaaS, IT-konsulenter, finans, energi, HR, transport, solenergi og servicevirksomheder.' },
        { question: 'Hvad koster det at bruge Magnora Marketing?', answer: 'Vi tilbyder fleksible prismodeller tilpasset din virksomheds størrelse og behov. Kontakt os for et uforpligtende tilbud.' },
        { question: 'Kan Magnora Marketing hjælpe med både telemarketing og digital markedsføring?', answer: 'Ja – Magnora Marketing kombinerer menneskelig salgskraft med digitale løsninger, herunder webudvikling, AI-integration og leadgenerering via flere kanaler.' },
        { question: 'Hvor hurtigt kan vi komme i gang?', answer: 'Typisk kan vi opstart et samarbejde inden for 1-2 uger efter den første samtale.' },
        { question: "Arbejder Magnora Marketing med hele Danmark?", answer: "Ja – Magnora Marketing servicerer virksomheder i hele Danmark samt internationalt, primært i Skandinavien og Sydeuropa." },
        { question: "Kan jeg kombinere flere af Magnora Marketing's services?", answer: "Absolut. Mange kunder bruger en kombination af telemarketing, mødebooking og webudvikling for at skabe en helhedsorienteret vækststrategi." },
        { question: "Hvad er No Cure No Pay?", answer: "No Cure No Pay betyder at du kun betaler for dokumenterede resultater – f.eks. gennemførte møder eller kvalificerede leads. Det minimerer din risiko som kunde." },
        { question: "Tilbyder Magnora Marketing gratis rådgivning?", answer: "Ja – vi tilbyder en uforpligtende indledende samtale, hvor vi vurderer dine behov og anbefaler den bedste løsning." },
        { question: "Hvad er en typisk kampagneperiode?", answer: "En typisk kampagneperiode er 3-6 måneder, men vi tilpasser varigheden til dine mål og dit budget." },
        { question: "Kan Magnora Marketing hjælpe startups?", answer: "Ja – vi hjælper både etablerede virksomheder og startups med at skabe vækst fra dag ét." },
        { question: "Hvad er ROI på Magnora Marketing's services?", answer: "ROI afhænger af branche og ydelse, men mange kunder ser positiv ROI allerede i første kvartal af samarbejdet." },
        { question: "Kan jeg pause et samarbejde?", answer: "Ja – vores fleksible aftaler giver mulighed for at sætte samarbejdet på pause ved behov, f.eks. i feriesæsoner." },
        { question: "Hvad sker der med mine data?", answer: "Alle kundedata behandles fortroligt og i overensstemmelse med GDPR og dansk lovgivning." },
        { question: "Hvem kontakter jeg ved spørgsmål?", answer: "Du har altid en dedikeret kontaktperson hos Magnora Marketing som kender dit projekt og kan besvare spørgsmål hurtigt." },
      ]} />
      <CTASection
        title="Klar til at accelerere din vækst?"
        subtitle="Magnora Marketing hjælper B2B virksomheder med at generere leads, booke møder og drive salg – med dokumenterede resultater."
        primaryText="Bliv samarbejdspartner"
        primaryLink="/samarbejdspartner"
        secondaryText="Se priser"
        secondaryLink="/priser"
      />
    </>
  );
};

export default HomePage;
