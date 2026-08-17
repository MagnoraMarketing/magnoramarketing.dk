import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, PiggyBank, Home, Shield, Users, Star } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';

export default function MatServicePage() {
  return (
    <>
      <SEO
        title="Freelance Sælger Måtte- og Rengøringsservice | Magnora Marketing"
        description="Bliv freelance sælger af måtte- og rengøringsservice til erhverv hos Magnora Marketing. Arbejd hjemmefra med fleksible tider og stabil provision på abonnementsaftaler."
        canonical="/jobs/matte-service"
        keywords="freelance sælger rengøringsservice, måtteservice salg, rengøring erhverv sælger, Magnora Marketing rengøring stilling, facility service salg"
      />

      <HeroSection
        title="Freelance Sælger – Måtte- og Rengøringsservice"
        subtitle="Sælg en uundværlig serviceydelse til danske virksomheder. Måtte- og rengøringsservice er et abonnementsprodukt med lang kundelevetid og stabil løbende provision."
        ctaText="Søg stillingen"
        ctaLink="/kontakt"
        secondaryCtaText="Se alle stillinger"
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage="/heroes/hero-service.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hvad går jobbet ud på?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Som freelance sælger inden for måtte- og rengøringsservice kontakter du virksomheder, butikker, klinikker og institutioner med et tilbud om professionel facility service. Det er en ydelse de fleste allerede bruger – og mange er åbne for et bedre tilbud.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Magnora Marketing leverer leads og scripts. Du ringer, præsenterer løsningen og lukker aftalen eller booker et møde med facility manageren.
              </p>
              <ul className="space-y-3">
                {[
                  'Opsøgende salg til virksomheder og institutioner',
                  'Kontakt til facility managers og indkøbsansvarlige',
                  'Præsentation af service, priser og kvalitetsgarantier',
                  'Booking af tilbudsbesøg og fremvisninger',
                  'Opfølgning og opbygning af stabil kundeportefølje'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
              <h3 className="text-xl font-bold mb-6 text-teal-800">Stillingens nøglefakta</h3>
              <div className="space-y-4">
                {[
                  { label: 'Ansættelsesform', value: 'Freelance / selvstændig' },
                  { label: 'Arbejdssted', value: 'Hjemmefra – hele Danmark' },
                  { label: 'Arbejdstid', value: 'Fleksibel – du bestemmer selv' },
                  { label: 'Løn', value: 'Attraktiv provisionsløn' },
                  { label: 'Produkt', value: 'Måtte- og rengøringsservice' },
                  { label: 'Opstart', value: 'Hurtigst muligt' }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-teal-100 last:border-0">
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
            <h2 className="text-3xl font-bold mb-4">Derfor er facility service et stærkt salgsprodukt</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Shield size={36} className="text-teal-600" />, title: 'Stabilt og tilbagevendende', desc: 'Rengørings- og måtteservice er abonnementsbaseret. Når du lander en kunde, giver det provision måned efter måned.' },
              { icon: <Users size={36} className="text-teal-600" />, title: 'Bredt marked', desc: 'Alle virksomheder med fysiske lokaler er potentielle kunder – butikker, kontorer, klinikker, lagre og institutioner.' },
              { icon: <Star size={36} className="text-teal-600" />, title: 'Lav afvisningsrisiko', desc: 'Facility service er en saglig og professionel henvendelse der modtages positivt af indkøbsansvarlige og facility managers.' }
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
              { icon: <Home size={40} className="text-blue-600" />, title: 'Arbejd hjemmefra', desc: 'Ingen transport og ingen mødetider – du sælger fra dit eget hjem med fuld fleksibilitet.' },
              { icon: <PiggyBank size={40} className="text-blue-600" />, title: 'Løbende provision', desc: 'Du tjener på nye salg og fortsætter med at modtage provision på dine eksisterende kunder.' },
              { icon: <Clock size={40} className="text-blue-600" />, title: 'Fleksible tider', desc: 'Du bestemmer selv hvornår du ringer og hvor meget du vil sælge. Ideelt som biindtægt eller fuldtidsjob.' }
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
                  'God til at skabe tillid og professionel relation hurtigt',
                  'Selvdisciplin og målbevidsthed',
                  'Flydende dansk',
                  'Brancheerfaring er ikke et krav',
                  'Motivation for at opbygge en stabil kundeportefølje'
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
              <p className="text-gray-600 mb-6">Send en kort besked om din baggrund og erfaring. Vi vender tilbage inden for 2 hverdage.</p>
              <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Kontakt Magnora Marketing nu <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Hvad sælger jeg?', answer: 'Du booker møder for professionel måtteservice – firmaer der lejer og servicerer måtter til erhvervskunder som sikrer rent arbejdsmiljø.' },
        { question: 'Hvem er de typiske kunder?', answer: 'Kontorer, butikker, restauranter, hoteller og produktionsvirksomheder der ønsker et professionelt indgangsmiljø.' },
        { question: 'Er det et tilbagevendende produkt?', answer: 'Ja – måtteservice er typisk abonnementsbaseret, hvilket giver kunderne god stabilitet.' },
        { question: 'Hvad er mine arbejdstider?', answer: 'Du bestemmer selv dine timer som freelancer. Vi anbefaler at ringe inden for normal kontortid.' },
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
          <h2 className="text-3xl font-bold mb-6">Klar til at bygge en stabil salgportefølje?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Kontakt Magnora Marketing og kom i gang med facility service-salg der giver stabil og tilbagevendende provision.</p>
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
