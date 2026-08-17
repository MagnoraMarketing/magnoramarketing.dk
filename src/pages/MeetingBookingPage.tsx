import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, ArrowRight, Users, BarChart3, Shield } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const MeetingBookingPage: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="w-12 h-12 text-blue-600" />,
      title: 'Kvalificerede møder',
      description: 'Hvert møde er grundigt screenet og kvalificeret inden booking. Ingen spildt tid – kun møder med reel forretningspotentiale.'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Rette beslutningstagere',
      description: 'Vi sikrer at du møder de rette nøglepersoner med budget og beslutningskompetence.'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: 'Klar rapportering',
      description: 'Fuld transparens med løbende rapportering på bookede møder, mødekvalitet og kampagnestatus.'
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Garanteret kvalitet',
      description: 'Aflyste eller ikke-opfyldte møder erstattes – vi holder os selv ansvarlige for at levere.'
    }
  ];

  return (
    <>
      <SEO
        title="Mødebooking | Magnora Marketing – Din Vækstpartner inden for Telesalg og AI"
        description="Magnora Marketing's professionelle mødebooking sikrer kvalificerede salgsmøder. Din vækstpartner inden for telesalg, mødebooking, webudvikling, leadgenerering og AI."
        canonical="/modebooking-priser"
        keywords="mødebooking priser, B2B salgsmøder, Magnora Marketing mødebooking, kvalificerede møder, mødebooking service"
      />

      <HeroSection
        title="Professionel Mødebooking med Magnora Marketing"
        subtitle="Vi leverer kvalificerede salgsmøder med de rette beslutningstagere – så din salgsstyrke kan lukke flere aftaler og bruge tid på det der skaber omsætning."
        ctaText="Se priser"
        ctaLink="/priser"
        secondaryCtaText="Kontakt os"
        secondaryCtaLink="/kontakt"
        backgroundImage="/heroes/hero-moedebooking.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Magnora Marketing's Tilgang til Mødebooking</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi går metodisk til mødebooking – fra lead-research og kvalificering til bekræftede møder i din kalender.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sådan fungerer Magnora Marketing's mødebooking</h2>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Briefing og strategi', desc: 'Vi lærer din virksomhed og dine ideelle kunder at kende, og udvikler en målrettet kommunikationsstrategi.' },
                  { step: '2', title: 'Lead-identifikation', desc: 'Vi identificerer og screener relevante virksomheder og nøglepersoner i din målgruppe.' },
                  { step: '3', title: 'Kvalificeret kontakt', desc: 'Vi tager første kontakt og kvalificerer interesse, budget og beslutningskompetence.' },
                  { step: '4', title: 'Møde booket', desc: 'Det kvalificerede møde bookes i din kalender – bekræftet og klar til at gennemføre.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/kontakt" className="btn btn-primary inline-flex items-center">
                  Kom i gang med Magnora Marketing <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4">Hvad inkluderer Magnora Marketing's mødebooking?</h3>
                <ul className="space-y-3">
                  {[
                    'Fuld lead-research og målgruppesegmentering',
                    'Skræddersyede scripts og kommunikationsstrategier',
                    'BANT-kvalificering af hvert lead',
                    'Booking og kalenderkoordinering',
                    'Dobbelt mødebekræftelse (email + SMS)',
                    'Mødenoter og briefing-materiale til dig',
                    'Løbende optimering og feedback-loop',
                    'Månedlig performance-rapportering'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Lad Magnora Marketing fylde din mødebog</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Kontakt os og få et skræddersyet tilbud på mødebooking tilpasset din branche og dine vækstmål.
          </p>
          <Link to="/priser" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Se priser og modeller <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professionel B2B Mødebooking – Kvalificerede Salgsmøder med de Rette Beslutningstagere</h2>
            <p className="text-gray-600 mb-4">
              Magnora Marketing's professionelle mødebooking-service er designet til at fylde din kalender med kvalificerede salgsmøder hos de beslutningstagere der faktisk har budget, behov og kompetence til at træffe en beslutning. Vores erfarne mødebookere arbejder metodisk og struktureret: vi identificerer og screener relevante virksomheder, kontakter nøglepersonerne med et skræddersyet budskab og booker mødet direkte i din kalender – bekræftet, briefet og klar til gennemførelse. Aflyste møder erstattes automatisk, så du aldrig mister momentum.
            </p>
            <p className="text-gray-600 mb-6">
              B2B mødebooking med Magnora Marketing er langt mere end blot at lave telefonopkald. Vi udvikler en komplet kommunikationsstrategi med branchetilpassede scripts, gennemfører BANT-kvalificering af hvert lead og sikrer dobbelt mødebekræftelse via email og SMS. Du modtager løbende rapporter med mødestatus, mødekvalitet og kampagneperformance – og har altid fuld transparens over hvad der sker i din salgspipeline.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Fuld lead-research og målgruppesegmentering</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> BANT-kvalificering af hvert møde inden booking</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Dobbelt mødebekræftelse (email + SMS)</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Mødenoter og briefing-materiale til din salgsstyrke</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Mødebooking Priser og Modeller – No Cure No Pay eller Fast Pakke</h2>
            <p className="text-gray-600 mb-4">
              Magnora Marketing tilbyder fleksible prismodeller for professionel mødebooking der passer til din virksomheds størrelse og behov. Med vores No Cure No Pay-model betaler du udelukkende for gennemførte, kvalificerede møder – du definerer selv kvalitetskriterierne og betaler ikke for aflyste eller useriøse møder. Pakkeløsningen giver en lavere enhedspris og mere forudsigelige omkostninger, og er bedst egnet til virksomheder med et kontinuerligt behov for mødebooking.
            </p>
            <p className="text-gray-600 mb-4">
              Kontakt Magnora Marketing på mail@magnoramarketing.dk for et uforpligtende tilbud på mødebooking tilpasset din branche, din målgruppe og dine vækstmål. De første kvalificerede møder kan typisk leveres inden for 2-3 uger efter opstartsbriefing.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Hvad er mødebooking?', answer: 'Mødebooking er processen med at identificere og kontakte potentielle kunder og booke kvalificerede salgsmøder direkte i din kalender – så dit salgsteam kan fokusere på at lukke aftaler.' },
        { question: 'Hvem booker møderne?', answer: 'Magnora Marketing\'s erfarne mødebookere kontakter beslutningstagere i din målgruppe, præsenterer din løsning og booker møder direkte i din kalender.' },
        { question: 'Hvad sker der, hvis et møde aflyses?', answer: 'Vi håndterer afbud og ombookinger og sikrer at din kalender altid er fyldt med kvalificerede møder.' },
        { question: 'Kan I booke møder inden for specifikke brancher?', answer: 'Ja – vi har erfaring med mødebooking i over 16 brancher og tilpasser vores tilgang til din målgruppe.' },
        { question: 'Hvad er en typisk succesrate for mødebooking?', answer: 'Det afhænger af branche og målgruppe, men vores kunder oplever typisk en møderate på 10-20% af kvalificerede kontakter.' },
        { question: "Hvad er en beslutningstager?", answer: "En beslutningstager er den person i en virksomhed der har myndighed til at godkende et køb – typisk en direktør, chef eller manager." },
        { question: "Kan I booke møder i hele Skandinavien?", answer: "Vi fokuserer primært på det danske marked, men kan også understøtte mødebooking i Sverige og Norge." },
        { question: "Hvad sker der, hvis en potentiel kunde siger nej?", answer: "Vi registrerer feedbacken, opdaterer databasen og vender eventuelt tilbage på et senere tidspunkt med ny information." },
        { question: "Kan vi se hvem der er kontaktet?", answer: "Ja – du modtager løbende opdateringer og har fuld adgang til aktivitetslog og kontakthistorik." },
        { question: "Hvordan håndterer I GDPR ved opkald?", answer: "Vi følger alle GDPR-regler for B2B kommunikation og registrering, inkl. korrekt håndtering af opt-out og dataopbevaring." },
        { question: "Hvor mange opkald laver I per dag?", answer: "Aktivitetsniveauet aftales individuelt baseret på kampagnens omfang og budget." },
        { question: "Kan vi stille krav til mødetidspunkter?", answer: "Ja – du kan angive præferencer for hvornår møder må bookes, f.eks. kun om morgenen eller bestemte ugedage." },
        { question: "Hvad er en pre-kvalificering?", answer: "Pre-kvalificering betyder at vi screener potentielle kunder inden mødebooking for at sikre de opfylder dine kriterier for en god kunde." },
        { question: "Kan vi se en demo af processen?", answer: "Ja – kontakt os for en gennemgang af vores mødebookingproces og eksempler på kampagner." },
        { question: "Hvad er den hurtigste måde at komme i gang?", answer: "Udfyld kontaktformularen, og vi sætter et afklaringsmøde op inden for 2 hverdage." },
      ]} />
      <CTASection
        title="Book dit første mødebookingmøde med Magnora Marketing i dag"
        subtitle="Vi er klar til at hjælpe din virksomhed med at fylde kalenderen med kvalificerede salgsmøder."
        primaryText="Kontakt os nu"
        primaryLink="/kontakt"
        secondaryText="Se priser"
        secondaryLink="/priser"
      />
    </>
  );
};

export default MeetingBookingPage;
