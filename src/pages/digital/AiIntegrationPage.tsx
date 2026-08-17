import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, CheckCircle, ArrowRight, Bot, Zap, BarChart3, MessageSquare, Users, Calendar, TrendingUp, Clock, Shield, Star } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';
import AiSolutionsSection from '../../components/AiSolutionsSection';

export default function AiIntegrationPage() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  const features = [
    {
      icon: <Bot size={36} className="text-blue-600" />,
      title: 'AI-chatbots og virtuelle assistenter',
      description: 'Intelligente chatbots der håndterer kundehenvendelser, kvalificerer leads og besvarer spørgsmål – automatisk og døgnet rundt, på dansk.'
    },
    {
      icon: <Zap size={36} className="text-blue-600" />,
      title: 'Automatisering af arbejdsprocesser',
      description: 'Magnora Marketing kortlægger og automatiserer manuelle processer med AI – fra dataindsamling og rapportering til e-mailflows og opgavedistribution.'
    },
    {
      icon: <BarChart3 size={36} className="text-blue-600" />,
      title: 'Datadrevet AI-analyse',
      description: 'AI-modeller der analyserer jeres salgsdata, forudsiger efterspørgsel og identificerer vækstmuligheder i realtid – tilpasset dansk erhvervsliv.'
    },
    {
      icon: <MessageSquare size={36} className="text-blue-600" />,
      title: 'Naturlig sprogbehandling (NLP)',
      description: 'Tekstanalyse, sentimentanalyse og AI-drevet indholdsgenerering der sparer tid og løfter kvaliteten i din kommunikation på dansk.'
    }
  ];

  const benefits = [
    {
      icon: <Clock size={32} className="text-blue-600" />,
      title: 'Op til 70% tidsbesparelse',
      description: 'Automatiser gentagne opgaver som leadopfølgning, booking og rapportering – og frigiv dine medarbejdere til arbejde der skaber reel værdi.'
    },
    {
      icon: <TrendingUp size={32} className="text-blue-600" />,
      title: 'Øget konverteringsrate',
      description: 'AI-kvalificerede leads og automatiserede nurturing-flows øger konverteringsraten markant sammenlignet med manuelle processer.'
    },
    {
      icon: <Users size={32} className="text-blue-600" />,
      title: 'Bedre kundeoplevelse',
      description: 'Svar kunder øjeblikkeligt – 24/7 – med AI-assistenter der taler flydende dansk og forstår konteksten i din branche.'
    },
    {
      icon: <Shield size={32} className="text-blue-600" />,
      title: 'GDPR-compliant fra start',
      description: 'Alle AI-løsninger bygges med dansk og europæisk lovgivning i centrum. Dine data forbliver sikre og under fuld kontrol.'
    },
    {
      icon: <BarChart3 size={32} className="text-blue-600" />,
      title: 'Målbar ROI fra dag ét',
      description: 'Vi sætter konkrete KPI\'er op fra starten og leverer løbende rapporter der viser præcist hvad AI-integrationen giver tilbage.'
    },
    {
      icon: <Zap size={32} className="text-blue-600" />,
      title: 'Hurtig implementering',
      description: 'Fra idé til live løsning på få uger. Vi integrerer med jeres eksisterende systemer – ingen dyr og langvarig migrering.'
    }
  ];

  const aiTools = [
    {
      name: 'AIbooking.dk',
      tag: 'Online booking med AI',
      description: 'AIbooking.dk er en dansk AI-drevet bookingplatform der automatiserer møde- og servicebooking for virksomheder. Magnora Marketing integrerer AIbooking direkte i jeres hjemmeside, CRM og kundeflows – så kunder kan booke møder, konsultationer eller servicebesøg automatisk, uden manuel koordinering.',
      features: [
        'Automatisk tidsstyring og kalendersynkronisering',
        'AI-baseret optimering af bookingflow',
        'Integration med eksisterende CRM og e-mail',
        'SMS- og e-mailbekræftelser på dansk',
        'Tilpasning til jeres branche og processer'
      ],
      color: 'blue',
      icon: <Calendar size={32} className="text-blue-600" />,
      example: 'En konsulentvirksomhed i København bruger AIbooking til at lade potentielle kunder booke et gratis 30-minutters afklaringsmøde direkte fra hjemmesiden – uden sekretær eller manuel håndtering. AI\'en sørger for bekræftelse, påmindelser og opfølgning.'
    },
    {
      name: 'Leadgenie.dk',
      tag: 'AI-drevet leadgenerering',
      description: 'Leadgenie.dk er en dansk AI-platform der automatiserer B2B leadgenerering og kundeemne-identifikation. Magnora Marketing integrerer Leadgenie i jeres salgsproces for at levere et konstant flow af varme, kvalificerede leads – screenet og scoret af AI inden de rammer dit salgsteam.',
      features: [
        'Automatisk identifikation af relevante virksomheder og kontakter',
        'AI-baseret lead scoring og prioritering',
        'Enrichment af eksisterende kontaktlister',
        'Integration med CRM (HubSpot, Pipedrive m.fl.)',
        'Løbende opdatering af leads baseret på adfærd'
      ],
      color: 'green',
      icon: <Users size={32} className="text-green-600" />,
      example: 'En SaaS-virksomhed bruger Leadgenie til automatisk at identificere danske virksomheder der matcher deres ICP (Ideal Customer Profile). Leadgenie scorer og prioriterer emnerne, og sælgerne kontakter kun de varmeste – hitrate steg 3x.'
    }
  ];

  const workflows = [
    {
      title: 'AI-drevet salgscyklus for B2B virksomheder',
      industry: 'AI-drevet salg og leads',
      steps: [
        { step: '1', label: 'Lead identificering', desc: 'Leadgenie.dk scanner automatisk markedet og finder virksomheder der matcher jeres ICP' },
        { step: '2', label: 'AI-kvalificering', desc: 'AI scorer og prioriterer leads baseret på branche, størrelse, adfærd og købssignaler' },
        { step: '3', label: 'Automatisk outreach', desc: 'Personaliserede e-mails og LinkedIn-beskeder sendes automatisk til de mest lovende emner' },
        { step: '4', label: 'Booking via AIbooking', desc: 'Interesserede emner booker selv et møde via AIbooking – ingen manuel koordinering' },
        { step: '5', label: 'CRM-opdatering', desc: 'Al aktivitet logges automatisk i CRM med AI-genereret møderesumé og næste skridt' }
      ]
    },
    {
      title: 'AI-kundeservice til e-handel og servicevirksomheder',
      industry: 'Automatisk kundeservice',
      steps: [
        { step: '1', label: 'Kundehenvendelse modtages', desc: 'Kunden skriver på chat, e-mail eller hjemmeside – AI\'en reagerer øjeblikkeligt på dansk' },
        { step: '2', label: 'Intent-analyse', desc: 'AI forstår kundens hensigt: spørgsmål, klage, bestilling eller booking – og ruter korrekt' },
        { step: '3', label: 'Automatisk svar eller eskalering', desc: 'Standardspørgsmål løses af AI, komplekse sager sendes til rette medarbejder med fuld kontekst' },
        { step: '4', label: 'Opfølgning og feedback', desc: 'AI sender automatisk opfølgning og tilfredshedsundersøgelse 24 timer efter løsning' },
        { step: '5', label: 'Løbende læring', desc: 'AI-modellen forbedres kontinuerligt baseret på nye interaktioner og feedback' }
      ]
    },
    {
      title: 'AI-workflow til rekruttering og HR',
      industry: 'Smart rekruttering med AI',
      steps: [
        { step: '1', label: 'Jobopslag genereres', desc: 'AI skriver SEO-optimerede jobopslag baseret på stillingsbeskrivelse og tone-of-voice' },
        { step: '2', label: 'CV-screening', desc: 'AI screener indkomne ansøgninger og scorer kandidater mod kravspecifikationen automatisk' },
        { step: '3', label: 'Automatisk booking', desc: 'Top-kandidater inviteres til screening via AIbooking – de vælger selv et tidspunkt' },
        { step: '4', label: 'Interview-forberedelse', desc: 'AI genererer personaliserede interviewspørgsmål baseret på CV og stillingskrav' },
        { step: '5', label: 'Feedback og opfølgning', desc: 'Automatiske statusopdateringer til alle kandidater – intet falder mellem to stole' }
      ]
    },
    {
      title: 'AI til ejendomsmæglere og boligmarkedet',
      industry: 'AI til ejendomsmæglere',
      steps: [
        { step: '1', label: 'Sælger-/køberhenvendelse', desc: 'AI-chatbot på hjemmesiden kvalificerer henvendelsen og indsamler relevante oplysninger' },
        { step: '2', label: 'Automatisk booking', desc: 'AIbooking sætter fremvisning eller vurderingsmøde op – synkroniseret med mæglernes kalendere' },
        { step: '3', label: 'Personaliseret kommunikation', desc: 'AI sender relevante boliger, prisestimater og nyheder baseret på købers søgeprofil' },
        { step: '4', label: 'Lead nurturing', desc: 'Automatiseret follow-up til emner der ikke er klar endnu – AI holder kontakten varm' },
        { step: '5', label: 'Rapportering til ledelse', desc: 'Ugentlig AI-genereret rapport med pipeline, aktivitet og prognose til ledelsen' }
      ]
    }
  ];

  const useCases = [
    'AI-drevet lead scoring og kvalificering',
    'Automatiske svarflows i kundeservice',
    'Intelligente e-mail- og SMS-kampagner',
    'Salgsforudsigelse og pipeline-analyse',
    'Dokumentbehandling og dataudtræk',
    'AI-baseret content-generering og optimering',
    'Talegenkendelse og transkribering',
    'Personaliserede anbefalingssystemer'
  ];

  return (
    <>
      <SEO
        title="AI Integration til Danske Virksomheder | Magnora Marketing – Automatisering og Kunstig Intelligens"
        description="Magnora Marketing integrerer AI i din forretning med løsninger som AIbooking.dk og Leadgenie.dk. Automatiser leadgenerering, booking og kundeservice – GDPR-compliant og skræddersyet til dansk erhvervsliv."
        canonical="/digital/ai-integration"
        keywords="AI integration Danmark, kunstig intelligens virksomhed, AIbooking, Leadgenie, automatisering, AI chatbot dansk, leadgenerering AI, Magnora Marketing digital"
      />

      <HeroSection
        title="AI Integration der Accelererer din Forretning"
        subtitle="Magnora Marketing implementerer skræddersyede AI-løsninger til danske virksomheder – automatiser leadgenerering, booking og kundeservice med dokumenteret ROI."
        ctaText="Book en gratis AI-konsultation"
        ctaLink="/kontakt"
        backgroundImage="/heroes/hero-ai.jpg"
      />

      {/* Vi bygger dit AI-projekt – klar til lancering */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Magnora Marketing bygger det – du lancerer det</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Vi tager dit AI-projekt fra idé til klar løsning
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Har du en idé til et AI-projekt, men mangler tekniske ressourcer eller tid til at bygge det? Magnora Marketing leverer en færdig, klar-til-lancering AI-løsning til en fast pris – og håndterer leads og møder mens du fokuserer på din kerneforretning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: <Cpu size={36} className="text-blue-300" />,
                  title: 'Vi bygger dit projekt',
                  desc: 'Giv os din idé – vi omsætter den til en fuldt fungerende AI-løsning. Fra prototype til produktion, leveret til aftalt pris og deadline.'
                },
                {
                  icon: <Star size={36} className="text-blue-300" />,
                  title: 'Klar til lancering',
                  desc: 'Du modtager en kørende løsning der er testet, GDPR-compliant og integreret med dine eksisterende systemer – klar til at sætte i drift.'
                },
                {
                  icon: <Calendar size={36} className="text-blue-300" />,
                  title: 'Vi håndterer leads og møder',
                  desc: 'Magnora Marketing styrer hele pipeline – AI-genererede leads screenes og kvalificerede salgsmøder bookes direkte i din kalender, så du lukker aftalerne.'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Hvad koster det – og hvad får du?</h3>
                <ul className="space-y-2 text-blue-100">
                  {[
                    'Fast pris – ingen overraskelser undervejs',
                    'Fuld dokumentation og kildekode overdrages til dig',
                    'Integration med dit CRM, booking og e-mail',
                    'Magnora Marketing håndterer leads og booker møder til din salgsstyrke',
                    'Løbende support og optimering efter lancering'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0 text-center">
                <p className="text-blue-200 text-sm mb-3">Klar til at komme i gang?</p>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Få et fast tilbud <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fordele ved AI integration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Fordele ved AI Integration for din virksomhed</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AI er ikke længere forbeholdt store koncerner. Magnora Marketing hjælper danske virksomheder af alle størrelser med at implementere AI der leverer målbare resultater fra dag ét.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="mb-4">{b.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-løsninger vi integrerer */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Danske AI-løsninger vi integrerer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Magnora Marketing arbejder med de bedste danske AI-platforme og integrerer dem sømlöst i jeres eksisterende forretningsprocesser.
            </p>
          </div>
          <div className="space-y-12 max-w-5xl mx-auto">
            {aiTools.map((tool, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`p-6 ${i === 0 ? 'bg-blue-600' : 'bg-emerald-600'} text-white`}>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 rounded-xl p-3">{tool.icon}</div>
                    <div>
                      <span className="text-sm font-medium opacity-80">{tool.tag}</span>
                      <h3 className="text-2xl font-bold">{tool.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 text-lg mb-6">{tool.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Hvad integrationen giver dig:</h4>
                      <ul className="space-y-2">
                        {tool.features.map((f, fi) => (
                          <li key={fi} className="flex items-start">
                            <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-gray-700 text-sm">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`rounded-xl p-5 ${i === 0 ? 'bg-blue-50 border border-blue-100' : 'bg-emerald-50 border border-emerald-100'}`}>
                      <div className="flex items-center gap-2 mb-3">
                        <Star size={16} className={i === 0 ? 'text-blue-600' : 'text-emerald-600'} />
                        <span className="font-semibold text-sm">Eksempel fra praksis</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{tool.example}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link to="/kontakt" className={`inline-flex items-center px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${i === 0 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}>
                      Integrer {tool.name} i din virksomhed <ArrowRight size={14} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Workflow eksempler */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Workflow-eksempler til danske virksomheder</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Se hvordan konkrete AI-workflows ser ud i praksis – fra første kontakt til afsluttet salg eller service.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Tab navigation */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {workflows.map((w, i) => (
                <button
                  key={i}
                  onClick={() => setActiveWorkflow(i)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${activeWorkflow === i ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {w.industry}
                </button>
              ))}
            </div>

            {/* Active workflow */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">{workflows[activeWorkflow].title}</h3>
              <div className="space-y-4">
                {workflows[activeWorkflow].steps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-1">{step.label}</h4>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                    {i < workflows[activeWorkflow].steps.length - 1 && (
                      <div className="absolute ml-4 mt-10 w-0.5 h-4 bg-blue-200 hidden" />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Få dette workflow implementeret <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kerneydelser */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvad Magnora Marketing leverer inden for AI</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fra enkle automatiseringer til avancerede AI-modeller – vi finder løsningen der giver størst værdi for netop din virksomhed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="flex gap-5 p-6 bg-white rounded-xl shadow-sm">
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

      {/* Use cases liste */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <img
                src="/heroes/hero-ai.jpg"
                alt="AI integration og automatisering hos Magnora Marketing"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Konkrete AI-anvendelser vi leverer</h2>
              <p className="text-lg text-gray-600 mb-8">
                Vi har implementeret AI-løsninger på tværs af brancher i Danmark og ved præcist hvad der virker – og hvad der ikke gør.
              </p>
              <ul className="space-y-3">
                {useCases.map((u, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Book en AI-konsultation <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hvorfor Magnora Marketing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <Cpu size={48} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Hvorfor vælge Magnora Marketing til din AI-integration?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi er ikke blot teknikere – vi forstår forretning. Vores AI-løsninger er designet til at skabe reel kommerciel værdi, ikke teknologi for teknologiens skyld.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Dansk forretningsforståelse', desc: 'Vi kender dansk erhvervsliv og lovgivning. Alle løsninger er GDPR-compliant og tilpasset lokale forhold.' },
              { title: 'End-to-end ansvar', desc: 'Fra strategi og implementering til drift og optimering – vi tager ansvaret hele vejen.' },
              { title: 'Dokumenteret ROI', desc: 'Vi sætter målbare KPI\'er fra dag ét og rapporterer løbende på hvad AI-integrationen giver tilbage.' }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-blue-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klar til at implementere AI i din virksomhed?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book en uforpligtende AI-konsultation – vi gennemgår dine processer og præsenterer konkrete løsninger med estimeret ROI. Gratis og uforpligtende.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kontakt Magnora Marketing nu <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">AI Integration til Danske Virksomheder – Automatiser Salg, Booking og Kundeservice</h2>
            <p className="text-gray-600 mb-4">
              Magnora Marketing implementerer skræddersyede AI-løsninger der er designet til at skabe reel kommerciel værdi for din virksomhed – ikke teknologi for teknologiens skyld. Vi arbejder med markedsledende danske AI-platforme som AIbooking.dk og Leadgenie.dk, og integrerer dem sømlöst i dine eksisterende forretningsprocesser. AI-drevet leadgenerering automatiserer identifikation og scoring af relevante B2B emner, mens AIbooking lader potentielle kunder booke møder direkte uden manuel koordinering – alt GDPR-compliant og tilpasset dansk erhvervsliv.
            </p>
            <p className="text-gray-600 mb-6">
              Magnora Marketing's AI-løsninger leverer dokumenterede resultater: op til 70% tidsbesparelse på gentagne administrative opgaver, markant højere konverteringsrate på AI-kvalificerede leads og 24/7 kundeservice med AI-chatbots på dansk. Vi sætter konkrete KPI'er op fra dag ét og leverer løbende rapporter der viser præcist hvad AI-integrationen giver din virksomhed. Fra simpel chatbot til avanceret automatiseringsplatform – Magnora Marketing finder den løsning der giver størst ROI for netop din situation.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> AI-chatbots og virtuelle assistenter på dansk</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Automatisering af leadgenerering med Leadgenie.dk</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Intelligent booking med AIbooking.dk</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> GDPR-compliant og integreret med dit eksisterende CRM</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Magnora Marketing Bygger dit AI-Projekt – Fra Idé til Klar Løsning til Fast Pris</h2>
            <p className="text-gray-600 mb-4">
              Har du en idé til et AI-projekt, men mangler tekniske ressourcer eller tid til at realisere den? Magnora Marketing omsætter din idé til en fuldt fungerende AI-løsning leveret til aftalt pris og deadline. Vi håndterer alt fra strategi og arkitektur til implementering, test og lancering – og overdrager fuld dokumentation og kildekode til dig ved projektafslutning. Magnora Marketing håndterer desuden leads og booker salgsmøder til din salgsstyrke, mens du fokuserer på din kerneforretning.
            </p>
            <p className="text-gray-600 mb-4">
              Book en uforpligtende AI-konsultation med Magnora Marketing på mail@magnoramarketing.dk – vi gennemgår dine processer og præsenterer konkrete AI-løsninger med estimeret ROI. Gratis og uden binding.
            </p>
          </div>
        </div>
      </section>

      <AiSolutionsSection variant="dark" />

      <FAQSection faqs={[
        { question: 'Hvad kan AI gøre for min virksomhed?', answer: 'AI kan automatisere gentagne opgaver, besvare kundehenvendelser døgnet rundt, kvalificere leads automatisk og give dybdegående indsigt i data – alt mens dine medarbejdere fokuserer på det der skaber mest værdi.' },
        { question: 'Hvad er en AI chatbot?', answer: 'En AI chatbot er et program der automatisk kan besvare kundespørgsmål, guide besøgende og indsamle leads – direkte på din hjemmeside, 24/7.' },
        { question: 'Er AI-løsninger dyre?', answer: 'Priserne varierer meget. Magnora Marketing tilbyder løsninger i alle størrelser – fra simple chatbots til avancerede automatiseringsplatforme. Vi finder den løsning der passer til dit budget.' },
        { question: 'Kræver AI-integration teknisk viden?', answer: 'Nej – Magnora Marketing håndterer hele implementeringen og oplæringen. Du behøver ingen teknisk baggrund for at bruge og drage fordel af AI.' },
        { question: 'Kan AI integreres med mine eksisterende systemer?', answer: 'Ja – Magnora Marketing\'s AI-løsninger kan integreres med de fleste CRM-, marketings- og kommunikationssystemer.' },
        { question: "Hvad er forskellen på AI og automation?", answer: "Automation udfører foruddefinerede opgaver. AI kan tilpasse sig og lære af data, og træffe selvstændige beslutninger baseret på mønstre." },
        { question: "Kan AI erstatte mine medarbejdere?", answer: "AI erstatter ikke mennesker, men frigiver dem fra gentagne opgaver så de kan fokusere på kreativt og relationsmæssigt arbejde." },
        { question: "Hvad er en LLM?", answer: "En Large Language Model (LLM) er en AI-model der kan forstå og generere tekst – som ChatGPT. Magnora Marketing kan integrere LLM-funktioner direkte på din platform." },
        { question: "Kan AI hjælpe med kundeservice?", answer: "Ja – AI chatbots kan besvare op til 80% af standard kundehenvendelser automatisk, døgnet rundt, og eskalere komplekse sager til mennesker." },
        { question: "Hvad er prompt engineering?", answer: "Prompt engineering er kunsten at formulere instrukser til en AI-model, så den giver de bedste og mest relevante svar." },
        { question: "Er AI-løsninger sikre?", answer: "Ja – vi sikrer at al AI-integration følger GDPR og databeskyttelseslovgivning. Data opbevares og behandles ansvarligt." },
        { question: "Hvad koster det at integrere AI?", answer: "Prisen varierer meget afhængigt af løsningens kompleksitet. En simpel chatbot kan koste fra få tusinde kr. En avanceret løsning kan koste mere. Kontakt os for et estimat." },
        { question: "Kan AI generere indhold til vores hjemmeside?", answer: "Ja – vi kan integrere AI-drevet indholdsgenerering til produktbeskrivelser, blogging og SEO-optimeret tekst." },
        { question: "Hvad er en AI-agent?", answer: "En AI-agent er et autonomt program der kan udføre opgaver, træffe beslutninger og interagere med systemer på vegne af brugeren." },
        { question: "Hvad er næste skridt, hvis jeg vil have AI integreret?", answer: "Kontakt os for en uforpligtende AI-konsultation, hvor vi kortlægger dine processer og identificerer de bedste muligheder for AI-integration." },
      ]} />
      <CTASection
        title="Få AI til at arbejde for din virksomhed"
        subtitle="Magnora Marketing hjælper dig med at implementere AI-løsninger der automatiserer opgaver, genererer leads og øger effektiviteten."
        primaryText="Book en AI-konsultation"
        primaryLink="/kontakt"
        secondaryText="Se eksempler"
        secondaryLink="/digital/ai-integration"
      />
    </>
  );
}
