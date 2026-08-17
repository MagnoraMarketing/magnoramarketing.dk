import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, PiggyBank, Home, Laptop, Globe, Users } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';

export default function WebBureauPage() {
  return (
    <>
      <SEO
        title="Freelance Sælger til Web Bureau | Magnora Marketing – Sælg Webudvikling og Digitale Løsninger"
        description="Bliv freelance sælger for web bureau ydelser hos Magnora Marketing. Sælg webudvikling, SEO og digitale løsninger hjemmefra med fleksible tider og attraktiv provision."
        canonical="/jobs/webudvikling-salg"
        keywords="freelance sælger web bureau, sælg webudvikling, digitalt bureau sælger, freelance digital salg, Magnora Marketing web bureau stilling"
      />

      <HeroSection
        title="Freelance Sælger til Web Bureau & Digitale Løsninger"
        subtitle="Sælg webudvikling, SEO og digitale løsninger til danske virksomheder – hjemmefra, med fleksible tider og stærk provision. Magnora Marketing giver dig produkterne, kunderne og støtten."
        ctaText="Søg stillingen"
        ctaLink="/kontakt"
        secondaryCtaText="Se alle stillinger"
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage="/heroes/hero-webdev.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hvad går jobbet ud på?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Som freelance sælger for web bureau ydelser hos Magnora Marketing kontakter du danske virksomheder og præsenterer vores webudvikling, landingssider, SEO og digitale løsninger. Du arbejder selvstændigt hjemmefra – Magnora Marketing sørger for scripts, materialer og løbende support.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Du behøver ikke teknisk baggrund – du skal forstå forretning og have lyst til at hjælpe virksomheder med at vokse online. Vi oplærer dig i produkterne og salgsprocessen.
              </p>
              <ul className="space-y-3">
                {[
                  'Opsøgende salg til SMV\'er og iværksættere',
                  'Booking af møder og præsentationer af webløsninger',
                  'Opfølgning på leads og tilbud',
                  'Samarbejde med Magnora Marketing\'s web- og salgsteam',
                  'Rapportering af aktivitet og resultater'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold mb-6 text-blue-800">Stillingens nøglefakta</h3>
              <div className="space-y-4">
                {[
                  { label: 'Ansættelsesform', value: 'Freelance / selvstændig' },
                  { label: 'Arbejdssted', value: 'Hjemmefra – hele Danmark' },
                  { label: 'Arbejdstid', value: 'Fleksibel – du bestemmer selv' },
                  { label: 'Løn', value: 'Attraktiv provisionsløn' },
                  { label: 'Produkt', value: 'Webudvikling, SEO, digitale løsninger' },
                  { label: 'Opstart', value: 'Hurtigst muligt' }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-blue-100 last:border-0">
                    <span className="text-gray-600 text-sm">{row.label}</span>
                    <span className="font-semibold text-gray-900 text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/kontakt" className="w-full inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Send din ansøgning <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Det sælger du – Magnora Marketing's digitale ydelser</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Du har et stærkt produktkatalog i ryggen. Magnora Marketing leverer moderne webløsninger som danske virksomheder efterspørger.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe size={32} className="text-blue-600" />,
                title: 'Hjemmesider & landingssider',
                desc: 'Moderne, mobilvenlige hjemmesider og konverteringsoptimerede landingssider til SMV\'er og iværksættere.'
              },
              {
                icon: <Laptop size={32} className="text-blue-600" />,
                title: 'Webshops & e-handel',
                desc: 'Professionelle webshops med nem administration og integrationer til betaling, lager og fragt.'
              },
              {
                icon: <Users size={32} className="text-blue-600" />,
                title: 'SEO & synlighed',
                desc: 'Organisk søgemaskineoptimering der bringer relevante kunder til virksomhedens hjemmeside.'
              },
              {
                icon: <ArrowRight size={32} className="text-blue-600" />,
                title: 'AI-integration',
                desc: 'Chatbots, booking-automatisering og AI-funktioner integreret direkte på kundens hjemmeside.'
              },
              {
                icon: <Clock size={32} className="text-blue-600" />,
                title: 'Vedligeholdelse & support',
                desc: 'Løbende opdatering, sikkerhed og support – en fast månedlig ydelse der skaber tilbagevendende omsætning.'
              },
              {
                icon: <PiggyBank size={32} className="text-blue-600" />,
                title: 'Skræddersyede løsninger',
                desc: 'Særlige integrationer, API-forbindelser og kundespecifikke digitale projekter med fast pris.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvad du får hos Magnora Marketing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi giver dig de bedste forudsætninger for at lykkes – så du kan fokusere på at sælge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Home size={40} className="text-blue-600" />,
                title: 'Arbejd hjemmefra',
                desc: 'Fuld frihed til at arbejde fra dit eget hjem. Ingen transport, ingen faste mødetider – du styrer din egen dag.'
              },
              {
                icon: <PiggyBank size={40} className="text-blue-600" />,
                title: 'Attraktiv provision',
                desc: 'Fast grundhonorar plus provision på alle salg. Jo mere du sælger, jo mere tjener du – ingen loft.'
              },
              {
                icon: <Users size={40} className="text-blue-600" />,
                title: 'Oplæring og support',
                desc: 'Vi oplærer dig i produkterne og salgsteknikken. Du har altid adgang til support fra Magnora Marketing\'s salgsteam.'
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Det kigger vi efter</h2>
              <ul className="space-y-3">
                {[
                  'Erfaring med salg eller kundekontakt – B2B er en fordel',
                  'Gode kommunikationsevner på dansk',
                  'Selvdisciplin og evne til at arbejde selvstændigt',
                  'Grundlæggende forståelse for digitale produkter',
                  'Resultatorienteret og målbevidst indstilling',
                  'Teknisk baggrund er ikke et krav'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Sådan søger du</h2>
              <p className="text-gray-600 mb-6">
                Send os en kort besked om hvem du er, hvad du har prøvet, og hvorfor du vil sælge digitale løsninger. Vi vender tilbage inden for 2 hverdage.
              </p>
              <p className="text-gray-600 mb-8">
                Ingen formel ansøgning nødvendig – bare skriv til os. Vi vurderer alle henvendelser individuelt.
              </p>
              <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Kontakt Magnora Marketing nu <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Skal jeg kende til webudvikling for at sælge det?', answer: 'Nej – du behøver ingen teknisk baggrund. Magnora Marketing oplærer dig i produkterne og salgsteknikken, så du kan præsentere løsningerne professionelt.' },
        { question: 'Hvem er mine kunder?', answer: 'Du kontakter primært SMV\'er og iværksættere i Danmark der har brug for en professionel online tilstedeværelse.' },
        { question: 'Hvad sker der, når jeg har lavet et salg?', answer: 'Du videregiver kundens information til Magnora Marketing\'s web-team, som overtager og leverer løsningen. Du tjener provision på salget.' },
        { question: 'Er der faste kvoter jeg skal nå?', answer: 'Vi arbejder med mål og ambitioner, men tilpasser forventningerne individuelt. Du sætter selv barren.' },
        { question: "Hvad er USP'en for Magnora Marketing's webprodukter?", answer: "Magnora Marketing bygger moderne, hurtige og konverteringsoptimerede løsninger til konkurrencedygtige priser – med dansk support og garanti." },
        { question: "Hvem konkurrerer vi med?", answer: "Kunder sammenligner typisk med Wix, WordPress-bureauer og freelance udviklere. Magnora Marketing's fordel er skræddersyet kvalitet med professionel support." },
        { question: "Hvad er typiske indsigelser fra kunder?", answer: "Vi oplærer dig i at håndtere indsigelser som pris, timing og eksisterende løsning. Du får scripts og svar til alle standardindsigelser." },
        { question: "Kan jeg sælge til kunder der allerede har en hjemmeside?", answer: "Ja – mange kunder er klar til et redesign eller opgradering. Vi hjælper dig med at identificere og kvalificere disse muligheder." },
        { question: "Hvad er en god kundereferens?", answer: "Vi giver dig adgang til portfolio og cases som du kan bruge til at overbevise skeptiske kunder om kvaliteten." },
        { question: "Kan jeg se produktet inden jeg sælger det?", answer: "Ja – du får en grundig gennemgang og demo af alle Magnora Marketing's webprodukter inden du begynder at sælge dem." },
        { question: "Er der mersalgsmuligheder?", answer: "Ja – kunder der køber en hjemmeside kan sælges vedligeholdelse, SEO, AI-integration og andre løbende services." },
        { question: "Hvad er den gennemsnitlige ordreværdi?", answer: "Det varierer per produkt og kunde. En simpel hjemmeside kan starte fra 10.000 kr., mens større projekter kan være 50.000+ kr." },
        { question: "Kan jeg specialisere mig i én kundetype?", answer: "Ja – mange sælgere vælger at fokusere på en specifik branche eller virksomhedsstørrelse for at blive eksperter." },
        { question: "Hvad er provision per salg?", answer: "Provisionen aftales individuelt og afhænger af produkttype og salgspris. Du modtager en klar provisionsstruktur ved opstart." },
      ]} />

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klar til at sælge digitale løsninger?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Tag det første skridt og kontakt Magnora Marketing i dag. Vi ser frem til at høre fra dig.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Send ansøgning <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/freelance-telemarketing" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Se alle ledige stillinger
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
