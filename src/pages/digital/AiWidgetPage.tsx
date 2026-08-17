import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, Zap, Clock, Bot, Shield, Mic, Languages, CalendarCheck, Wallet, Building2 } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';

export default function AiWidgetPage() {
  const capabilities = [
    { icon: <Mic size={16} />, label: 'Talebaseret' },
    { icon: <MessageSquare size={16} />, label: 'Tekst-chat' },
    { icon: <CalendarCheck size={16} />, label: 'Auto-booking' },
    { icon: <Languages size={16} />, label: 'Flersproget' },
  ];

  const features = [
    {
      icon: <Mic size={36} className="text-blue-600" />,
      title: 'Naturlig talegenkendelse',
      description: 'Forstår naturligt dansk tale – kunder behøver ikke tale i kommandoer. AI\'en følger samtalen og stiller opfølgende spørgsmål.'
    },
    {
      icon: <CalendarCheck size={36} className="text-blue-600" />,
      title: 'Direkte kalenderintegration',
      description: 'Synkroniserer med Google Calendar, Outlook og andre kalendersystemer. Ingen dobbeltbookinger, ingen manuel registrering.'
    },
    {
      icon: <Clock size={36} className="text-blue-600" />,
      title: '24/7 tilgængelighed',
      description: 'Din AI-assistent arbejder rundt om uret – også uden for åbningstid, i weekenden og på helligdage.'
    },
    {
      icon: <MessageSquare size={36} className="text-blue-600" />,
      title: 'Tale og tekst',
      description: 'Kunder kan vælge at tale eller skrive. Widgetten understøtter begge inputformer og svarer på samme måde.'
    },
    {
      icon: <Shield size={36} className="text-blue-600" />,
      title: 'GDPR-kompatibel',
      description: 'Al data behandles sikkert og i overensstemmelse med GDPR. Du har fuld kontrol over dine kunders data.'
    },
    {
      icon: <Languages size={36} className="text-blue-600" />,
      title: 'Flersproget AI',
      description: 'Widgetten understøtter dansk og mange andre sprog. AI\'en tilpasser sig automatisk til det sprog, kunden taler.'
    },
    {
      icon: <Zap size={36} className="text-blue-600" />,
      title: 'Lynhurtig opsætning',
      description: 'Fra bestilling til aktiv widget på din hjemmeside tager det under 5 minutter. Ingen udviklere nødvendige.'
    },
    {
      icon: <Bot size={36} className="text-blue-600" />,
      title: 'Tilpasset din virksomhed',
      description: 'AI-assistenten kender din virksomhed, dine services og dine åbningstider – svar der passer præcist til din forretning.'
    },
    {
      icon: <Wallet size={36} className="text-blue-600" />,
      title: 'Betal kun for aktivitet',
      description: 'Du betaler kun for aktiv taletid – ikke for ventetid eller pauser. En langt billigere løsning end en deltidsmedarbejder.'
    }
  ];

  const useCases = [
    { title: 'Klinikker', desc: 'Patientbooking automatiseret' },
    { title: 'Håndværkere', desc: 'Opgaver og møder bookes' },
    { title: 'Konsulenter', desc: 'Møder direkte i kalender' },
    { title: 'Saloner', desc: 'Tider bookes automatisk' },
    { title: 'Tandlæger', desc: 'Patienthåndtering 24/7' },
    { title: 'E-handel', desc: 'Kundeservice non-stop' },
  ];

  const faqs = [
    { question: 'Hvad er en AI voice widget?', answer: 'En AI voice widget er et intelligent taleinterface, der sidder diskret på din hjemmeside – typisk som en flydende knap i hjørnet. Når en besøgende klikker, kan de tale direkte med din AI-assistent, der forstår naturligt dansk, svarer på spørgsmål om din virksomhed og booker møder direkte i din kalender.' },
    { question: 'Kan widgetten forstå dansk tale?', answer: 'Ja – AI\'en forstår naturligt dansk tale. Kunder behøver ikke tale i kommandoer; AI\'en følger samtalen og stiller opfølgende spørgsmål. Den understøtter også mange andre sprog og tilpasser sig automatisk til det sprog, kunden taler.' },
    { question: 'Kan kunder både tale og skrive til widgetten?', answer: 'Ja – widgetten understøtter både tale og tekst-chat. Kunden vælger selv, og AI\'en svarer på samme måde uanset inputform.' },
    { question: 'Hvad kræver installation af widgetten?', answer: 'Du får en enkel JavaScript-kodestump, som du indsætter på din hjemmeside. Den er kompatibel med WordPress, Shopify, Wix og alle andre platforme – ingen teknisk viden kræves, og opsætningen tager under 5 minutter.' },
    { question: 'Hvordan lander bookinger i min kalender?', answer: 'Widgetten synkroniserer direkte med Google Calendar, Outlook og andre kalendersystemer. Møder registreres automatisk, du modtager en bekræftelse, og kunden får en kvittering – uden dobbeltbookinger eller manuel registrering.' },
    { question: 'Hvad koster en AI voice widget?', answer: 'Fra 999 kr/md – og du betaler kun for aktiv taletid, ikke for ventetid eller pauser. Til sammenligning koster en deltidsreceptionist typisk 15.000-20.000 kr/md, så besparelsen er op til 95%.' },
    { question: 'Hvor hurtigt kan jeg komme i gang?', answer: 'Fra bestilling til aktiv widget på din hjemmeside tager det under 5 minutter. Ingen udviklere nødvendige.' },
    { question: 'Hvordan trænes AI\'en til min virksomhed?', answer: 'AI-assistenten opsættes med kendskab til din virksomhed, dine services og dine åbningstider, så den giver svar der passer præcist til din forretning.' },
    { question: 'Er widgetten GDPR-kompatibel?', answer: 'Ja – al data behandles sikkert og i overensstemmelse med GDPR, og du har fuld kontrol over dine kunders data.' },
    { question: 'Virker widgetten uden for åbningstid?', answer: 'Ja – din AI-assistent arbejder 24/7, også uden for åbningstid, i weekenden og på helligdage. Kunderne oplever 0 sekunders ventetid.' },
    { question: 'Hvem er widgetten relevant for?', answer: 'Alle virksomheder der tager imod bookinger og kundehenvendelser online: klinikker, tandlæger, saloner, håndværkere, konsulenter, e-handel og mange flere.' },
    { question: 'Kan widgetten bruges på mobilsider?', answer: 'Ja – widgetten er fuldt responsiv og fungerer på alle enheder: desktop, tablet og mobil.' },
    { question: 'Hvad sker der hvis AI\'en ikke kender svaret?', answer: 'Widgetten eskalerer ukendte spørgsmål til et menneske via e-mail eller chat-handover, så ingen henvendelse falder mellem to stole.' },
    { question: 'Kan jeg tilpasse widgettens design?', answer: 'Ja – farver, logo, velkomstbesked og tone-of-voice tilpasses din brand identity.' },
  ];

  return (
    <>
      <SEO
        title="AI Voice Widget til Hjemmesider | Tale, Chat & Automatisk Booking | Magnora Marketing"
        description="AI voice widget der taler dansk: besvarer kundehenvendelser og booker møder direkte i din kalender – 24/7. Opsætning på under 5 minutter, fra 999 kr/md. ✓ GDPR ✓ Tale & tekst ✓ Flersproget"
        canonical="/digital/ai-widget"
        keywords="AI voice widget, AI widget, talebaseret chatbot, automatisk booking, AI receptionist hjemmeside, AI chat dansk, voice bot dansk"
      />

      <HeroSection
        title="AI voice widget – din digitale receptionist der aldrig sover"
        subtitle="Besøgende taler eller skriver direkte med din AI-assistent, der svarer på dansk og booker møder direkte i din kalender – 24/7, helt uden menneskelig indgriben."
        ctaText="Få en gratis demo"
        ctaLink="/kontakt"
        secondaryCtaText="Se priser"
        secondaryCtaLink="/priser"
        backgroundImage="/heroes/hero-voice.jpg"
      />

      {/* What is it */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Hvad er det?</span>
              <h2 className="mb-6">Hvad er en AI voice widget?</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                En AI voice widget er et intelligent taleinterface, der sidder diskret på din hjemmeside – typisk som en flydende knap i hjørnet. Når en besøgende klikker, kan de tale direkte med din AI-assistent.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                AI-assistenten forstår naturligt dansk tale, kan svare på spørgsmål om din virksomhed, og booke møder direkte ind i din kalender – helt uden menneskelig indgriben.
              </p>
              <p className="text-slate-800 font-semibold mb-8 leading-relaxed">
                Det er som at have en receptionist, der aldrig sover, aldrig er syg og altid er professionel – til en brøkdel af prisen.
              </p>
              <div className="flex flex-wrap gap-3">
                {capabilities.map((c, i) => (
                  <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
                    {c.icon} {c.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Voice widget mockup */}
            <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                  <Mic size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">AI Voice Assistent</div>
                  <div className="text-xs text-green-500 font-medium flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" /> Lytter…</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-slate-100 text-slate-700 rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-[85%] ml-auto flex items-center gap-2">
                  <Mic size={14} className="text-blue-600 flex-shrink-0" /> "Hej, jeg vil gerne booke en tid i næste uge"
                </div>
                <div className="bg-blue-600 text-white rounded-2xl rounded-tl-sm px-4 py-3 text-sm max-w-[85%]">
                  Selvfølgelig! Jeg kan se, der er ledige tider tirsdag kl. 10 og torsdag kl. 14. Hvad passer dig bedst?
                </div>
                <div className="bg-slate-100 text-slate-700 rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-[85%] ml-auto flex items-center gap-2">
                  <Mic size={14} className="text-blue-600 flex-shrink-0" /> "Torsdag klokken 14, tak"
                </div>
                <div className="bg-blue-600 text-white rounded-2xl rounded-tl-sm px-4 py-3 text-sm max-w-[85%]">
                  Perfekt – din tid torsdag kl. 14 er booket! Du modtager en bekræftelse på e-mail om et øjeblik. 📅
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="flex items-center gap-1">
                  {[3, 5, 8, 6, 9, 5, 7, 4, 6, 8, 5, 3].map((h, i) => (
                    <span key={i} className="w-1 rounded-full bg-blue-500/70" style={{ height: `${h * 3}px` }} />
                  ))}
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Mic size={20} className="text-white" />
                </div>
                <div className="flex items-center gap-1">
                  {[4, 7, 5, 9, 6, 8, 4, 6, 9, 5, 7, 3].map((h, i) => (
                    <span key={i} className="w-1 rounded-full bg-blue-500/70" style={{ height: `${h * 3}px` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-sky-50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">Sådan virker det</span>
            <h2 className="mb-4">Fra installation til automatisk booking</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">En simpel proces i tre trin – uden teknisk viden.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Installer widgetten', desc: 'Du får en enkel JavaScript-kodestump. Indsæt den på din hjemmeside – kompatibel med WordPress, Shopify, Wix og alle andre platforme. Ingen teknisk viden kræves.' },
              { step: '02', title: 'Kunder taler med AI', desc: 'Besøgende på din hjemmeside klikker på widgetten og taler direkte med din personlige AI-assistent. AI\'en forstår dansk og svarer på spørgsmål om din virksomhed.' },
              { step: '03', title: 'Bookinger lander automatisk', desc: 'Møder og bookinger registreres direkte i din kalender. Du modtager en bekræftelse, og kunden får automatisk en kvittering – uden du skal gøre noget.' },
            ].map((s) => (
              <div key={s.step} className="card p-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-5">{s.step}</div>
                <h3 className="font-bold text-slate-800 mb-2 text-lg">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/kontakt" className="btn btn-primary inline-flex">
              Book en gratis demo <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">Funktioner</span>
            <h2 className="mb-4">Funktioner der gør forskel</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Alt hvad du har brug for til automatisk booking og kundeservice via AI.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card p-8">
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section bg-sky-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Brancher</span>
            <h2 className="mb-4">Hvem bruger AI voice widgetten?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Perfekt til alle virksomheder, der tager imod bookinger og kundehenvendelser online.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((u, i) => (
              <div key={i} className="flex items-start gap-4 p-6 card bg-white">
                <Building2 size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-slate-800 mb-1">{u.title}</div>
                  <div className="text-sm text-slate-500">{u.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="section bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-white mb-4">Typisk ROI for en AI voice widget</h2>
            <p className="text-white/80 leading-relaxed">
              En deltidsreceptionist koster typisk 15.000-20.000 kr/md. Med AI voice widgetten til <strong className="text-white">999 kr/md</strong> får du samme funktionalitet – men 24 timer i døgnet, 7 dage om ugen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            {[
              { value: '95%', label: 'Besparelse vs. receptionist' },
              { value: '0 sek', label: 'Ventetid for kunder' },
              { value: '100%', label: 'Automatiserede bookinger' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-5xl font-black mb-2">{s.value}</div>
                <div className="text-white/70 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Ofte stillede spørgsmål om AI voice widget" />

      <CTASection
        title="Klar til en receptionist der aldrig sover?"
        subtitle="Book en gratis demo og oplev AI voice widgetten i aktion – fra bestilling til live på din hjemmeside på under 5 minutter."
        primaryText="Book gratis demo"
        primaryLink="/kontakt"
        secondaryText="Se alle digitale løsninger"
        secondaryLink="/digital/ai-integration"
      />
    </>
  );
}
