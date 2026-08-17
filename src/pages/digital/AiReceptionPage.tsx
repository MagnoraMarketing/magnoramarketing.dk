import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight, Mic, Clock, MessageSquare, Bot, Calendar, Shield, Headphones, Zap, BarChart3 } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';

export default function AiReceptionPage() {
  const features = [
    {
      icon: <Mic size={36} className="text-blue-600" />,
      title: 'Naturlig stemmesamtale på dansk',
      description: 'Magnora Marketing\'s AI-receptionist taler flydende dansk med naturlig prosodi og forstår kontekst, dialekter og branchejargon – ligesom en erfaren medarbejder.'
    },
    {
      icon: <Clock size={36} className="text-blue-600" />,
      title: 'Aldrig optaget – altid tilgængelig',
      description: 'AI-receptionisten besvarer alle opkald øjeblikkeligt, 24/7/365. Ingen ventetid, ingen spildte leads, ingen mistede kunder.'
    },
    {
      icon: <Calendar size={36} className="text-blue-600" />,
      title: 'Automatisk mødebooking via telefon',
      description: 'Kalderen booker et møde direkte under opkaldet. AI\'en finder ledige tider, bekræfter bookingen og sender en kalenderinvitation.'
    },
    {
      icon: <Bot size={36} className="text-blue-600" />,
      title: 'Intelligent opkaldsrouting',
      description: 'AI\'en identificerer formålet med opkaldet og ruter det til den rette afdeling, kollega eller salgsperson – eller håndterer det selv.'
    },
    {
      icon: <MessageSquare size={36} className="text-blue-600" />,
      title: 'SMS og e-mail opfølgning',
      description: 'Efter hvert opkald sender AI-receptionisten automatisk en opsummering, et link til booking eller relevante dokumenter til kalderen.'
    },
    {
      icon: <BarChart3 size={36} className="text-blue-600" />,
      title: 'Fuld opkaldslogning og analyse',
      description: 'Alle samtaler transskriberes og analyseres. Du får indsigt i, hvad kunderne ringer om, og hvilke henvendelser der konverterer bedst.'
    }
  ];

  const scenarios = [
    {
      caller: 'Potentiel kunde',
      ai: 'Tak for dit opkald til Magnora Marketing. Hvad kan jeg hjælpe dig med i dag?',
      caller2: 'Jeg vil gerne høre mere om jeres mødebooking',
      ai2: 'Selvfølgelig! Vil du have et uforpligtende møde med en af vores specialister? Jeg kan booke det direkte nu.',
    }
  ];

  const faqs = [
    { question: 'Hvad er en AI-receptionist?', answer: 'En AI-receptionist er en stemmebaseret AI der besvarer telefonopkald, håndterer henvendelser og booker møder – automatisk og på naturligt dansk.' },
    { question: 'Lyder AI-receptionisten menneskelig?', answer: 'Ja – moderne AI-stemmer er meget naturtro. De fleste kaldere opdager ikke umiddelbart at de taler med en AI, medmindre de spørger direkte.' },
    { question: 'Hvad sker der med komplekse henvendelser?', answer: 'AI\'en eskalerer automatisk til et menneske ved komplekse eller følsomme henvendelser. Opkaldet viderestilles eller der sendes en notifikation til den rette medarbejder.' },
    { question: 'Kan AI-receptionisten booke møder direkte?', answer: 'Ja – via integration med Google Calendar og Outlook kan AI\'en finde ledige tider og bekræfte bookingen under selve opkaldet.' },
    { question: 'Hvilke sprog taler AI-receptionisten?', answer: 'Primært dansk, men løsningen kan konfigureres til dansk, engelsk, tysk og andre sprog afhængigt af jeres behov.' },
    { question: 'Hvad koster en AI-receptionist?', answer: 'Prisen afhænger af opkaldsvolumen og integrationer. Kontakt Magnora Marketing for et tilpasset tilbud – typisk markant billigere end en deltidsansat receptionist.' },
    { question: 'Kan AI-receptionisten integreres med vores telefonsystem?', answer: 'Ja – vi integrerer med alle gængse VOIP-systemer, Microsoft Teams, 3CX, RingCentral og traditionelle telefonlinjer.' },
    { question: 'Er løsningen GDPR-kompatibel?', answer: 'Ja – samtaler håndteres i overensstemmelse med GDPR. Optagelser opbevares sikkert og slettes efter den aftalte periode.' },
    { question: 'Kan jeg lytte til opkaldene efterfølgende?', answer: 'Ja – alle opkald transskriberes og kan gennemlyttes. Du modtager daglige eller ugentlige opsummeringer.' },
    { question: 'Hvordan trænes AI\'en til vores virksomhed?', answer: 'Vi onboarder AI-receptionisten med jeres produktinformation, FAQs, prisstruktur og tone-of-voice, så den svarer præcist og på brand.' },
    { question: 'Kan den håndtere flere opkald samtidigt?', answer: 'Ja – AI-receptionisten kan besvare ubegrænset mange samtidige opkald uden ventetid eller busy-signal.' },
    { question: 'Hvad sker der uden for åbningstid?', answer: 'AI-receptionisten arbejder 24/7. Uden for åbningstid kan den tage imod beskeder, booke møder og sende automatiske svar.' },
    { question: 'Sender AI\'en opkaldsoversigter?', answer: 'Ja – efter hvert opkald sendes en transskription og opsummering til den relevante medarbejder via e-mail eller Slack.' },
    { question: 'Kan eksisterende kunder genkende sig i systemet?', answer: 'Ja – via CRM-integration kan AI\'en genkende kendte kunder baseret på telefonnummer og tilpasse samtalen derefter.' },
    { question: 'Hvornår er AI-receptionist ikke egnet?', answer: 'AI-receptionisten er ikke ideel til meget komplekse rådgivende samtaler eller krisesituationer – her eskalerer den til et menneske.' },
  ];

  return (
    <>
      <SEO
        title="AI Receptionist & Voice Agent | Automatisk Telefonpasning på Dansk | Magnora Marketing"
        description="Magnora Marketing's AI-receptionist besvarer alle opkald, booker møder og router henvendelser automatisk – 24/7 på naturligt dansk. Aldrig optaget. ✓ GDPR-kompatibel ✓ Gratis demo"
        canonical="/digital/ai-reception"
        keywords="AI receptionist, voice agent, AI telefon, automatisk telefonpasning, AI mødebooking, virtuel receptionist dansk"
      />

      <HeroSection
        title="AI-receptionist der besvarer alle opkald og booker møder automatisk"
        subtitle="Magnora Marketing's voice AI håndterer telefonhenvendelser på naturligt dansk – kvalificerer kalderen, booker møder og ruter videre, 24/7 uden ventetid."
        ctaText="Book en gratis demo"
        ctaLink="/kontakt"
        secondaryCtaText="Se AI-widget"
        secondaryCtaLink="/digital/ai-widget"
        backgroundImage="/heroes/hero-voice.jpg"
      />

      {/* Problem / Solution */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Problemet</span>
              <h2 className="mb-6">Mistede opkald = mistede kunder</h2>
              <p className="text-slate-500 mb-5 leading-relaxed">
                Studier viser at 62% af virksomheders telefonopkald aldrig besvares. Kunder der ringer og ikke får svar, ringer videre til konkurrenten. En enkelt mistet henvendelse kan koste jer en kunde til seks cifre.
              </p>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Med Magnora Marketing's AI-receptionist besvares <strong className="text-slate-800">alle opkald</strong> – uanset tidspunkt, uanset belastning. AI\'en håndterer det meste selv, og ruter kun de komplekse henvendelser til jer.
              </p>
              <div className="space-y-3">
                {[
                  'Nul mistede opkald – AI\'en besvarer altid',
                  'Automatisk booking direkte i jeres kalender',
                  'Arbejder 24/7 inkl. weekender og helligdage',
                  'Markant billigere end en deltidsreceptionist',
                  'Klar til brug inden for 5 hverdage',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {/* Simulated call */}
              <div className="bg-slate-900 rounded-3xl p-6 text-white font-mono text-sm">
                <div className="flex items-center gap-2 mb-5 text-slate-400 text-xs">
                  <Headphones size={14} />
                  <span>Aktivt opkald · Magnora Marketing AI Reception</span>
                  <span className="ml-auto text-green-400">● Forbundet</span>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-blue-400 flex-shrink-0">AI:</span>
                    <span className="text-slate-300">Tak for dit opkald til Magnora Marketing. Hvad kan jeg hjælpe dig med?</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-400 flex-shrink-0">Kalder:</span>
                    <span className="text-slate-300">Jeg vil gerne høre om jeres mødebooking-løsning</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 flex-shrink-0">AI:</span>
                    <span className="text-slate-300">Selvfølgelig! Må jeg spørge – hvor mange møder ønsker du booket om måneden?</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-400 flex-shrink-0">Kalder:</span>
                    <span className="text-slate-300">Cirka 15-20 møder</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 flex-shrink-0">AI:</span>
                    <span className="text-slate-300">Perfekt. Jeg booker et møde for dig med én af vores specialister. Passer mandag kl. 10 dig?</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-700 text-slate-500 text-xs flex items-center gap-2">
                    <Calendar size={12} />
                    Møde booket automatisk · Kalenderinvitation sendt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-sky-50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">Funktioner</span>
            <h2 className="mb-4">En AI-receptionist der gør det hele</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Fra simpel telefonpasning til avanceret opkaldsrouting og automatisk mødebooking – alt i én løsning.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card p-8 bg-white">
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="section-label">Sammenligning</span>
            <h2 className="mb-4">AI-receptionist vs. menneskelig receptionist</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 pr-6 text-slate-500 font-medium"></th>
                  <th className="py-4 px-6 text-blue-600 font-bold text-center bg-blue-50 rounded-t-xl">Magnora Marketing AI-receptionist</th>
                  <th className="py-4 px-6 text-slate-600 font-bold text-center">Menneskelig receptionist</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Tilgængelighed', '24/7/365', 'Man-fre 8-16'],
                  ['Samtidige opkald', 'Ubegrænset', '1 ad gangen'],
                  ['Responstid', '< 1 sekund', '10-30 sekunder'],
                  ['Mødebooking', '✓ Automatisk', '✓ Manuel'],
                  ['Månedlig omkostning', 'Fra kr. 1.500', 'Kr. 25.000+'],
                  ['Oplæringstid', '3-5 dage', '4-8 uger'],
                ].map(([feature, ai, human], i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="py-4 pr-6 text-slate-700 font-medium">{feature}</td>
                    <td className="py-4 px-6 text-center bg-blue-50 text-blue-700 font-semibold">{ai}</td>
                    <td className="py-4 px-6 text-center text-slate-500">{human}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Link to="/kontakt" className="btn btn-primary">
              Kom i gang med AI-receptionist <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Ofte stillede spørgsmål om AI-receptionist" />

      <CTASection
        title="Lad AI besvare jeres telefon fra i morgen"
        subtitle="Book en gratis demo og se Magnora Marketing's AI-receptionist i aktion. Klar til brug inden for 5 hverdage."
        primaryText="Book gratis demo"
        primaryLink="/kontakt"
        secondaryText="Se AI-widget"
        secondaryLink="/digital/ai-widget"
      />
    </>
  );
}
