import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, PiggyBank, Home, Coffee, Users, Star } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';

export default function CoffeeServicePage() {
  return (
    <>
      <SEO
        title="Freelance Sælger Kaffeservice til Erhverv | Magnora Marketing"
        description="Bliv freelance sælger af kaffeservice og kaffemaskiner til erhverv hos Magnora Marketing. Arbejd hjemmefra og sælg et produkt alle kontoransatte elsker."
        canonical="/jobs/kaffe-service"
        keywords="freelance sælger kaffeservice, kaffemaskin salg erhverv, kaffe B2B sælger, Magnora Marketing kaffe stilling, kaffesalg job"
      />

      <HeroSection
        title="Freelance Sælger – Kaffeservice til Erhverv"
        subtitle="Sælg noget alle kontoransatte sætter pris på: god kaffe. Kaffeservice til erhverv er et let salg med høj kundretention – og du kan gøre det hjemmefra med attraktiv provision."
        ctaText="Søg stillingen"
        ctaLink="/kontakt"
        secondaryCtaText="Se alle stillinger"
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage="/heroes/hero-kaffe.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hvad går jobbet ud på?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Som freelance sælger af kaffeservice kontakter du virksomheder, kontorer, klinikker og institutioner med en løsning alle ansatte vil elske: professionel kaffeservice direkte på arbejdspladsen. Du sælger kaffemaskiner, abonnementer og forbrugsvarer i ét samlet tilbud.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Kaffeservice er et let salg – kunderne er loyale, og abonnementerne giver løbende provision. Magnora Marketing leverer scripts og leads, du tager kontakten og lukker aftalen.
              </p>
              <ul className="space-y-3">
                {[
                  'Opsøgende salg til virksomheder og institutioner',
                  'Præsentation af kaffeservice-pakker og priser',
                  'Booking af demonstrationer og tilbudsmøder',
                  'Opfølgning og lukke abonnementsaftaler',
                  'Opbygning af fast kundeportefølje med løbende provision'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
              <h3 className="text-xl font-bold mb-6 text-amber-800">Stillingens nøglefakta</h3>
              <div className="space-y-4">
                {[
                  { label: 'Ansættelsesform', value: 'Freelance / selvstændig' },
                  { label: 'Arbejdssted', value: 'Hjemmefra – hele Danmark' },
                  { label: 'Arbejdstid', value: 'Fleksibel – du bestemmer selv' },
                  { label: 'Løn', value: 'Attraktiv provisionsløn' },
                  { label: 'Produkt', value: 'Kaffeservice & kaffemaskiner til erhverv' },
                  { label: 'Opstart', value: 'Hurtigst muligt' }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-0">
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
            <h2 className="text-3xl font-bold mb-4">Hvorfor kaffeservice sælger sig selv</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Coffee size={36} className="text-amber-600" />, title: 'Et produkt alle vil have', desc: 'God kaffe på arbejdspladsen er ikke luksus – det er forventet. Næsten alle virksomheder er potentielle kunder.' },
              { icon: <Users size={36} className="text-amber-600" />, title: 'Lang kundelevetid', desc: 'Når en virksomhed siger ja til kaffeservice, beholder de det i årevis. Det giver dig stabil løbende provision.' },
              { icon: <Star size={36} className="text-amber-600" />, title: 'Nem afslutning', desc: 'Modtagelse er høj og afvisningsgraden lav – kaffe er et positivt emne der er nemt at tale om med receptionen.' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Home size={40} className="text-blue-600" />, title: 'Arbejd hjemmefra', desc: 'Sælg fra sofaen, kontoret eller haven. Alt hvad du behøver er din telefon og lidt drive.' },
              { icon: <PiggyBank size={40} className="text-blue-600" />, title: 'Løbende provision', desc: 'Provision på nye aftaler plus gentagen provision på abonnementer. Din kundeportefølje giver passiv indkomst.' },
              { icon: <Clock size={40} className="text-blue-600" />, title: 'Fleksible tider', desc: 'Kontorer er åbne i dagtimerne – men du bestemmer selv hvornår du ringer og hvor mange aftaler du vil lave.' }
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
                  'Erfaring med telefonsalg eller B2B-kundekontakt',
                  'God til at skabe rapport hurtigt over telefon',
                  'Selvstændig og resultatorienteret',
                  'Flydende dansk i skrift og tale',
                  'Ingen brancheerfaring nødvendig – vi oplærer dig',
                  'Passion for gode kundeoplevelser'
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
              <p className="text-gray-600 mb-6">Skriv til os og fortæl kort om din baggrund. Ingen formel ansøgning kræves – vi vender tilbage inden for 2 hverdage.</p>
              <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Kontakt Magnora Marketing nu <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Hvad sælger jeg præcist?', answer: 'Du booker møder for professionelle kaffeserviceløsninger til virksomheder – kaffemaskiner, service og forbrugsvarer til kontorer og erhvervslokaler.' },
        { question: 'Er det et let produkt at sælge?', answer: 'Kaffe er et produkt næsten alle virksomheder bruger. Efterspørgslen er høj og samtalerne er typisk positive.' },
        { question: 'Hvem ringer jeg til?', answer: 'Du kontakter facility managers, indkøbsansvarlige og kontoradministratorer i virksomheder.' },
        { question: 'Hvad er opkaldsomfanget per dag?', answer: 'Du bestemmer selv dit tempo, men et typisk udgangspunkt er 30-50 opkald om dagen.' },
        { question: "Er der opkaldslister klar fra dag ét?", answer: "Ja – Magnora Marketing leverer opkaldslister og kampagnematerialer, så du kan starte med det samme." },
        { question: "Kan jeg se et eksempel på et script?", answer: "Ja – du modtager et gennemprøvet salgsskript ved opstart som du kan tilpasse din stil." },
        { question: "Hvad sker der ved et succes-salg eller booket møde?", answer: "Du registrerer resultatet i vores system, og provisionen beregnes automatisk og udbetales månedligt." },
        { question: "Er der løbende coaching?", answer: "Ja – Magnora Marketing's salgsledere holder regelmæssige coaching-sessioner og giver feedback på din salgsstil." },
        { question: "Kan jeg prøve stillingen i en kortere periode?", answer: "Ja – de første 2-4 uger betragtes som en gensidig prøveperiode." },
        { question: "Hvad er den gennemsnitlige indkomst for en aktiv freelancer?", answer: "Det afhænger af aktivitet og produkt. Aktive freelancere med gode resultater kan tjene et solidt supplement eller en fuld indkomst." },
        { question: "Kan jeg arbejde for Magnora Marketing og for andre bureauer?", answer: "Som freelancer er du fri til at arbejde for andre, så længe der ikke er konkurrencekonflikt med Magnora Marketing's kunder." },
        { question: "Er der skriftlige kontrakter?", answer: "Ja – alle samarbejder formaliseres med en klar freelance-aftale der beskriver vilkår, provision og forventninger." },
        { question: "Hvad sker der, hvis jeg ikke trives med produktet?", answer: "Vi kan diskutere om du er bedre egnet til et andet produkt i Magnora Marketing's portfolio." },
        { question: "Hvad er Magnora Marketing's forventninger til mig som freelancer?", answer: "Vi forventer selvdisciplin, professionel optræden og løbende kommunikation om aktivitet og resultater." },
      ]} />

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klar til at sælge Danmarks yndlingsdrik til erhverv?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Kontakt Magnora Marketing og start en karriere med et produkt der altid er velkomment.</p>
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
