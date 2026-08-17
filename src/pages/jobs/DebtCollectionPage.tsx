import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, PiggyBank, Home, Shield, BarChart3, Users } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';

export default function DebtCollectionPage() {
  return (
    <>
      <SEO
        title="Freelance Sælger Inkasso & Kreditorstyring | Magnora Marketing"
        description="Bliv freelance sælger inden for inkasso og kreditorstyring hos Magnora Marketing. Sælg professionel gældinddrivelse til erhvervskunder – hjemmefra med god provision."
        canonical="/jobs/inkasso"
        keywords="freelance sælger inkasso, kreditorstyring salg, inkasso sælger job, gældinddrivelse B2B, Magnora Marketing inkasso stilling"
      />

      <HeroSection
        title="Freelance Sælger – Inkasso & Kreditorstyring"
        subtitle="Hjælp virksomheder med at få deres tilgodehavender hjem. Inkasso og kreditorstyring er en B2B-niche med høj efterspørgsel og attraktiv provision."
        ctaText="Søg stillingen"
        ctaLink="/kontakt"
        secondaryCtaText="Se alle stillinger"
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage="/heroes/hero-telesalg.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hvad går jobbet ud på?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Som freelance sælger inden for inkasso og kreditorstyring kontakter du virksomheder der har problemer med sen betaling og udestående tilgodehavender. Du præsenterer professionelle løsninger til gældinddrivelse og kreditorstyring.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Det er en reel smerteløsning for mange virksomheder – og behovet er stort. Magnora Marketing leverer scripts og leads, du skaber dialogen og booker møder med beslutningstagerne.
              </p>
              <ul className="space-y-3">
                {[
                  'Opsøgende B2B-salg til virksomheder med kreditorbehov',
                  'Kontakt til økonomiansvarlige, CFO\'er og direktører',
                  'Præsentation af inkasso- og kreditorstyringsprodukter',
                  'Booking af rådgivningsmøder og behovs-analyser',
                  'Opfølgning og pipeline-styring'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold mb-6 text-slate-800">Stillingens nøglefakta</h3>
              <div className="space-y-4">
                {[
                  { label: 'Ansættelsesform', value: 'Freelance / selvstændig' },
                  { label: 'Arbejdssted', value: 'Hjemmefra – hele Danmark' },
                  { label: 'Arbejdstid', value: 'Fleksibel – du bestemmer selv' },
                  { label: 'Løn', value: 'Attraktiv provisionsløn' },
                  { label: 'Produkt', value: 'Inkasso & kreditorstyring til erhverv' },
                  { label: 'Opstart', value: 'Hurtigst muligt' }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-0">
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
            <h2 className="text-3xl font-bold mb-4">Hvorfor inkassosalg er en stærk niche</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Shield size={36} className="text-slate-600" />, title: 'Alle virksomheder har behovet', desc: 'Sen betaling og dårlige debitorer rammer alle brancher. Det giver dig et enormt og konstant marked.' },
              { icon: <BarChart3 size={36} className="text-slate-600" />, title: 'Høj lukningsrate', desc: 'Virksomheder der oplever betalingsproblemer er motiverede for at handle. De er allerede bevidste om smertestedet.' },
              { icon: <Users size={36} className="text-slate-600" />, title: 'Adgang til beslutningstagere', desc: 'Du taler med CFO\'er og direktører – folk der kan sige ja med det samme. Kortere salgscyklus og hurtigere provision.' }
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
              { icon: <Home size={40} className="text-blue-600" />, title: 'Arbejd hjemmefra', desc: 'Sælg fra dit eget hjem med fuld frihed. Ingen pendling, ingen faste kontortider.' },
              { icon: <PiggyBank size={40} className="text-blue-600" />, title: 'Attraktiv provision', desc: 'Grundhonorar plus provision per bookede møde og lukket aftale. B2B-inkasso giver høj provision pr. kontrakt.' },
              { icon: <Clock size={40} className="text-blue-600" />, title: 'Fleksible tider', desc: 'Du bestemmer selv din salgsdag. Erhvervskunder kontaktes typisk i dagtimerne – resten af tiden er din.' }
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
                  'Erfaring med B2B-salg eller erhvervskundekontakt',
                  'Professionel og troværdig kommunikationsstil',
                  'Evne til at navigere og tale med beslutningstagere',
                  'Selvdisciplin og evne til at arbejde selvstændigt',
                  'Juridisk eller finansiel baggrund er en fordel – ikke krav',
                  'Resultatorienteret og målbevidst'
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
              <p className="text-gray-600 mb-6">Send en kort besked om dig selv og din salgserfaring. Vi vender tilbage inden for 2 hverdage.</p>
              <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Kontakt Magnora Marketing nu <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Hvad booker jeg møder om?', answer: 'Du kontakter virksomheder og booker møder med inkassoeksperter om professionel debitorhåndtering og gældinddrivelse.' },
        { question: 'Er det et svært produkt at sælge?', answer: 'Inkasso er et nødvendigt produkt for virksomheder med ubetalte fordringer. Mange virksomheder ser positivt på at forbedre deres debitorhåndtering.' },
        { question: 'Hvem er målgruppen?', answer: 'Primært SMV\'er og større virksomheder der har udestående fakturaer og behøver professionel hjælp til inddrivelse.' },
        { question: 'Er der særlige krav til min baggrund?', answer: 'Nej – du behøver ikke juridisk baggrund. Gode kommunikationsevner og professionel optræden er det vigtigste.' },
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
          <h2 className="text-3xl font-bold mb-6">Klar til at sælge i en B2B-niche med høj efterspørgsel?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Kontakt Magnora Marketing og start med inkasso- og kreditorstyringssalg der giver resultater.</p>
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
