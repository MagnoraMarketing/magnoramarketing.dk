import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Users, Target, BarChart3, CheckCircle, ArrowRight, MessageSquare, Building, Award, Sparkles, Code, Globe, CalendarCheck } from 'lucide-react';
import AiSolutionsSection from '../components/AiSolutionsSection';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Phone className="w-12 h-12 text-blue-600" />,
      title: 'Telemarketing',
      description: 'Målrettet B2B telemarketing der åbner nye dørе, skaber dialog og konverterer emner til reelle salgsmuligheder.',
      features: ['Opsøgende leadgenerering', 'Direkte salgskontakt', 'Kundeservice og rådgivning', 'Markedsundersøgelser']
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Mødebooking',
      description: 'Kvalificerede salgsmøder med de rette beslutningstagere – booket, bekræftet og klar til dit salgsteam.',
      features: ['Screenede og kvalificerede møder', 'Effektiv lead-vurdering', 'Mødebekræftelse og opfølgning', 'Kalenderkoordinering']
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: 'Leadgenerering',
      description: 'Datadrevet og flerkanalbaseret leadgenerering der skaber en konstant strøm af varme, salgsklar emner.',
      features: ['Lead scoring og prioritering', 'Salgsdatabase-opbygning', 'Kampagnestyring og optimering', 'ROI tracking og rapportering']
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
      title: 'Kundeservice',
      description: 'Professionel og empatisk kundeservice der styrker kundeloyalitet og skaber positive oplevelser ved hvert kontaktpunkt.',
      features: ['Support og problemløsning', 'Ordrebehandling og koordinering', 'Kundefeedback og analyse', 'Tilfredshedsmålinger']
    }
  ];

  const industries = [
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      title: 'Tech & SaaS',
      description: 'Dyb erfaring med salg af softwareløsninger, cloud-platforme og teknologiprodukter til erhvervsmarkedet.',
      successStory: 'Hjulpet 50+ tech-virksomheder med at øge salgspipelinen markant',
      expertise: ['SaaS og cloud-løsninger', 'Enterprise software', 'IT-sikkerhed', 'Digital transformation']
    },
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      title: 'Konsulentbranchen',
      description: 'Specialiseret erfaring med at booke kvalificerede møder for konsulentvirksomheder og rådgivere.',
      successStory: 'Over 200 kampagner gennemført for konsulentvirksomheder',
      expertise: ['Management consulting', 'Finansiel rådgivning', 'HR og rekruttering', 'Juridiske ydelser']
    },
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      title: 'Energi & Bæredygtighed',
      description: 'Stærk track record inden for grøn energi, solenergi og energieffektiviseringsløsninger til erhverv.',
      successStory: 'Hjulpet energivirksomheder med at nå nye kundesegmenter',
      expertise: ['Solenergi og vedvarende energi', 'LED og energioptimering', 'Grøn omstilling', 'Erhvervsenergirådgivning']
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: 'Facility & Service',
      description: 'Erfaren indsats inden for facility management, kaffeservice, måtteservice og relaterede erhvervsservices.',
      successStory: 'Succesfulde kampagner for servicevirksomheder i hele Danmark',
      expertise: ['Kaffeservice til erhverv', 'Måtteservice og hygiejne', 'Rengøring og facility', 'Kontorservices']
    }
  ];

  return (
    <>
      <SEO
        title="Ydelser | Magnora Marketing – Telesalg, Mødebooking, Webudvikling og AI"
        description="Magnora Marketing's ydelser: professionelt telesalg, mødebooking, leadgenerering, webudvikling og AI-udviklingsopgaver. Din vækstpartner med dokumenterede resultater."
        canonical="/ydelser"
        keywords="Magnora Marketing ydelser, telemarketing, mødebooking, leadgenerering, kundeservice, B2B salg, salgsoutsourcing"
      />

      <HeroSection
        title="Ydelser der Skaber Reel Vækst"
        subtitle="Magnora Marketing tilbyder skræddersyede salgs- og marketingløsninger der passer til din virksomhed – fra første kontakt til underskrevet kontrakt."
        ctaText="Kontakt os"
        ctaLink="/kontakt"
        secondaryCtaText="Se priser"
        secondaryCtaLink="/priser"
        backgroundImage="/heroes/hero-telesalg.jpg"
      />

      {/* Digital & AI – topsektion der fanger opmærksomheden */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Digital, AI & webudvikling
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Vi er skarpe på AI, unik webudvikling – og salget der følger med
            </h2>
            <p className="text-lg text-white/70">
              Fra intelligente AI-løsninger til flotte, professionelle hjemmesider og komplekse platforme. Og når løsningen er klar, kan vi endda hjælpe med at booke møder og sælge den – for vi kender allerede kunden og projektet. Det er en rigtig god start.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Sparkles size={28} className="text-blue-300" />,
                title: 'AI-integration & udvikling',
                desc: 'Vi er skarpe på at bygge og integrere AI – fra chatbots og automatisering til skræddersyet AI-udvikling, der giver din forretning et forspring.'
              },
              {
                icon: <Globe size={28} className="text-blue-300" />,
                title: 'Flotte hjemmesider til en god pris',
                desc: 'Professionelle, unikke og konverteringsstærke hjemmesider, der repræsenterer din virksomhed flot – uden at sprænge budgettet.'
              },
              {
                icon: <Code size={28} className="text-blue-300" />,
                title: 'Kompleks webudvikling',
                desc: 'Avancerede webapplikationer, kundeportaler og SaaS-platforme bygget fra bunden med moderne teknologi og bygget til at skalere.'
              },
              {
                icon: <CalendarCheck size={28} className="text-blue-300" />,
                title: 'Hjælp til møder & salg',
                desc: 'Vi kan endda booke møder og sælge den nye løsning for dig – og fordi vi kender kunden og projektet, er vi på forkant fra dag ét.'
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

          <div className="text-center mt-12 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/digital/webudvikling" className="btn btn-primary text-base px-8 py-4">
              Se webudvikling & AI <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link to="/kontakt" className="btn text-base px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white backdrop-blur-sm">
              Fortæl os om dit projekt
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vores Kerneydelser</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Magnora Marketing tilbyder et komplet sortiment af B2B salgsydelser der kan sammensættes og skaleres efter dine behov og vækstmål.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AiSolutionsSection />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Branchespecialiseret Ekspertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Magnora Marketing har dybdegående erfaring med B2B salg og mødebooking på tværs af en lang række brancher.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <p className="text-blue-600 font-medium mb-4">{industry.successStory}</p>
                <ul className="space-y-2">
                  {industry.expertise.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klar til at vækste med Magnora Marketing?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Kontakt os for en uforpligtende snak om, hvilke ydelser der passer bedst til din virksomheds mål og budget.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Få et gratis tilbud <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Outsourcing af Telemarketing og Mødebooking – Sådan Skaber Magnora Marketing Vækst</h2>
            <p className="text-gray-600 mb-4">
              Outsourcing af B2B telemarketing og mødebooking til Magnora Marketing er den effektive vej til at skalere salget uden at investere i dyre faste ansættelser. Magnora Marketing's professionelle salgsteam håndterer hele processen – fra identifikation og screening af relevante beslutningstagere til booking af kvalificerede salgsmøder og systematisk opfølgning. Vi bruger strukturerede og dokumenterede salgsmetoder kombineret med løbende coaching og kvalitetssikring, som sikrer en konsistent høj mødekvalitet uanset branche og målgruppe.
            </p>
            <p className="text-gray-600 mb-6">
              Magnora Marketing tilbyder ydelser inden for telemarketing, mødebooking, leadgenerering og kundeservice der samlet set dækker hele salgscyklusen fra første kontakt til lukket aftale. Vi arbejder med BANT-kvalificering (Budget, Authority, Need, Timing) og leverer detaljerede mødenoter og briefing-materiale til din salgsstyrke, så hvert møde starter på det rigtige fundament. Alle kampagner er underbygget af løbende performancedata og månedlige rapporter med klar ROI-beregning.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> B2B telemarketing med BANT-kvalificerede kundeemner</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Professionel mødebooking med dobbelt bekræftelse</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Datadrevet leadgenerering med CRM-integration</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Professionel kundeservice og opfølgning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Branchespecialiserede Salgsydelser til B2B Virksomheder i Danmark</h2>
            <p className="text-gray-600 mb-4">
              Magnora Marketing har dybdegående brancheerfaring inden for tech og SaaS, IT-konsulentbranchen, grøn energi og bæredygtighed samt facility og servicevirksomheder. Denne specialiserede viden betyder, at vores salgskonsulenter taler branchens sprog, forstår de specifikke udfordringer og kan kommunikere værdiskabelse præcist og troværdigt over for beslutningstagerne i din målgruppe. Resultatet er højere konverteringsrater, bedre mødekvalitet og kortere salgscyklusser.
            </p>
            <p className="text-gray-600 mb-4">
              Uanset om du sælger enterprise software, rådgivningsydelser, energioptimering eller servicekontrakter, tilpasser Magnora Marketing sin tilgang og sine scripts til din unikke salgssituation. Kontakt Magnora Marketing på mail@magnoramarketing.dk for at høre hvordan vi kan skræddersy en ydelsespakke der passer til din virksomhed, dine mål og dit budget.
            </p>
          </div>
        </div>
      </section>


      <FAQSection faqs={[
        { question: 'Hvad er B2B telemarketing?', answer: 'B2B telemarketing er direkte telefonsalg og kundekontakt rettet mod virksomheder. Magnora Marketing bruger målrettet telemarketing til at identificere beslutningstagere, kvalificere leads og booke salgsmøder.' },
        { question: 'Hvad er forskellen på telemarketing og mødebooking?', answer: 'Telemarketing dækker alle former for telefonisk B2B-salg og kundekontakt. Mødebooking er specifikt fokuseret på at booke kvalificerede salgsmøder hos beslutningstagere i din målgruppe.' },
        { question: 'Kan I integrere med vores CRM-system?', answer: 'Ja, Magnora Marketing arbejder med de fleste CRM-systemer og kan levere leads og møder direkte ind i jeres eksisterende salgsflow.' },
        { question: 'Tilbyder I rapportering og statistik?', answer: 'Ja – du modtager løbende rapporter med aktivitetsdata, mødestatistik og ROI-beregning.' },
        { question: 'Kan I hjælpe os i specifikke brancher?', answer: 'Vi har dybdegående erfaring med over 16 brancher og tilpasser altid vores tilgang til din specifikke branche og målgruppe.' },
        { question: "Kan Magnora Marketing hjælpe os med både B2B og B2C salg?", answer: "Primært fokuserer vi på B2B, men vi har også erfaring med B2C salg inden for energi, pension og lignende produkter." },
        { question: "Hvad er en typisk mødefrekvens med Magnora Marketing?", answer: "Vi holder typisk ugentlige statusmøder med kunden og sender løbende rapporter på aktivitet og resultater." },
        { question: "Tilbyder I optagelse af salgssamtaler?", answer: "Ja – vi kan tilbyde optagelse og gennemgang af salgssamtaler til træning og kvalitetssikring, hvis du ønsker det." },
        { question: "Kan vi definere vores egen salgspitch?", answer: "Ja – vi arbejder altid med din virksomheds egne budskaber og tone of voice. Vi tilpasser scripts og materialer til jer." },
        { question: "Hvad er jeres succesrate på mødebooking?", answer: "Vores mødebookingsrate varierer afhængigt af branche og målgruppe, men vi opnår typisk 10-20% møder ud af kvalificerede kontakter." },
        { question: "Kan I hjælpe med opfølgning efter møder?", answer: "Ja – vi kan håndtere opfølgning, tilbudsopfølgning og fastholde momentum i salgspipelinen efter møder." },
        { question: "Arbejder I med internationale markeder?", answer: "Vi fokuserer primært på det danske marked, men kan også understøtte salg i Skandinavien og udvalgte europæiske markeder." },
        { question: "Hvad er minimumskontraktlængde?", answer: "Vi anbefaler minimum 3 måneder for at opnå optimale resultater og et validt datagrundlag for optimering." },
        { question: "Kan vi se eksempler på jeres arbejde?", answer: "Ja – kontakt os for cases og referencer fra vores tidligere og nuværende samarbejdspartnere." },
        { question: "Hvad er fordelen ved at samle alle services hos Magnora Marketing?", answer: "Når telemarketing, mødebooking og digital tilstedeværelse er koordineret hos én partner, skabes et sammenhængende og mere effektivt salgssystem." },
      ]} />
      <CTASection
        title="Start dit salgssamarbejde med Magnora Marketing i dag"
        subtitle="Få adgang til professionelt telesalg, mødebooking og leadgenerering – alt samlet hos én partner."
        primaryText="Kontakt os nu"
        primaryLink="/kontakt"
        secondaryText="Se priser"
        secondaryLink="/priser"
      />
    </>
  );
};

export default ServicesPage;
