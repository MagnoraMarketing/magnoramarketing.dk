import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Clock, Home, Bot, Sparkles, TrendingUp,
  PhoneCall, Target, CalendarCheck, Users, Building2, Wallet, Award,
  Rocket, Zap, Lightbulb, Star, MapPin, ShieldCheck, Gauge
} from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import ContactForm from '../../components/ContactForm';
import { jobListings } from '../../data/jobListings';

export default function AiConsultantPage() {
  return (
    <>
      <SEO
        title="AI-konsulent Søges – Introducér Virksomheder til AI-løsninger | Magnora Marketing"
        description="Bliv AI-konsulent hos Magnora Marketing og hjælp danske virksomheder med at forstå og tage stilling til AI-løsninger, der sparer dem tid. Fleksibelt job 100% hjemmefra med attraktiv løn. Send din henvendelse i dag."
        canonical="/jobs/ai-konsulent"
        keywords="AI-konsulent job, AI konsulent søges, AI salg job, opsøgende AI-konsulent, AI-løsninger til virksomheder, konsulent AI hjemmefra, AI sælger job Danmark, freelance AI-konsulent, AI rådgiver job, kunstig intelligens konsulent"
        ogType="website"
        breadcrumbs={[
          { name: 'Forside', url: '/' },
          { name: 'Job søgere', url: '/freelance-telemarketing' },
          { name: 'AI-konsulent', url: '/jobs/ai-konsulent' },
        ]}
      />

      <HeroSection
        title="Bliv AI-konsulent og vis virksomheder fremtiden"
        subtitle="Vi søger konsulenter, der kontakter danske virksomheder og giver dem indblik i de AI-løsninger, de er nødt til at tage stilling til – løsninger, der sparer dem tid og penge. Fleksibelt, 100% hjemmefra og med attraktiv løn."
        ctaText="Send din henvendelse"
        ctaLink="#ansog"
        secondaryCtaText="Se alle ledige stillinger"
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage="/heroes/hero-ai.jpg"
      />

      {/* Stat band */}
      <section className="relative -mt-8 z-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
            {[
              { icon: <Home size={26} className="text-violet-600" />, stat: '100%', label: 'Hjemmefra' },
              { icon: <Rocket size={26} className="text-violet-600" />, stat: 'Fremtids-', label: 'sikret branche' },
              { icon: <Wallet size={26} className="text-violet-600" />, stat: 'Uden loft', label: 'På din provision' },
              { icon: <Clock size={26} className="text-violet-600" />, stat: 'Fleksible', label: 'Arbejdstider' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-2">{item.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900">{item.stat}</div>
                <div className="text-sm text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-700 text-xs font-semibold uppercase tracking-widest mb-5">
              <Bot size={14} /> Konsulent · Kunstig Intelligens
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-slate-900">
              Et af Danmarks mest fremtidssikrede job
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              AI forandrer måden, danske virksomheder arbejder på – men mange ved ikke, hvor de skal starte. Som
              AI-konsulent hos Magnora Marketing er det din opgave at kontakte virksomheder, åbne deres øjne for de
              muligheder, kunstig intelligens giver, og vise dem, hvordan de kan spare tid og automatisere
              tidskrævende opgaver. Du er brobyggeren mellem virksomheden og fremtidens teknologi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Rocket size={38} className="text-violet-600" />,
                title: 'Fremtidssikret branche',
                desc: 'AI er den hurtigst voksende teknologi nogensinde. Som AI-konsulent står du forrest i en branche, der kun bliver større.',
              },
              {
                icon: <Home size={38} className="text-violet-600" />,
                title: 'Fuld frihed',
                desc: 'Arbejd 100% hjemmefra og sæt selv dine rammer. Ingen pendling, ingen faste mødetider – kun resultater.',
              },
              {
                icon: <Wallet size={38} className="text-violet-600" />,
                title: 'Attraktiv løn',
                desc: 'Fast grundhonorar plus provision uden loft. Din indsats og dine resultater afgør din indtjening.',
              },
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What does an AI consultant do */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Hvad laver en AI-konsulent?</h2>
            <p className="text-slate-600 mb-8">
              Som AI-konsulent kontakter du virksomheder over telefon og online for at give dem et indblik i,
              hvordan kunstig intelligens kan effektivisere deres hverdag. Du sælger ikke teknisk komplekse
              systemer – du åbner en samtale, skaber nysgerrighed og booker et møde eller en demo med vores
              AI-specialister. Du hjælper virksomheder med at tage stilling til en teknologi, de alligevel ikke
              kan komme udenom.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <PhoneCall size={32} className="text-violet-600" />, title: 'Skab kontakten', desc: 'Du kontakter relevante virksomheder fra vores lister og indleder en god samtale om deres udfordringer.' },
                { icon: <Lightbulb size={32} className="text-violet-600" />, title: 'Giv indblik', desc: 'Du fortæller, hvordan AI-løsninger kan automatisere opgaver, spare tid og styrke deres forretning.' },
                { icon: <CalendarCheck size={32} className="text-violet-600" />, title: 'Book mødet', desc: 'Du booker et møde eller en demo med vores AI-specialister – og bliver belønnet for hvert kvalificeret møde.' },
              ].map((item, i) => (
                <div key={i} className="p-7 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How you save companies time */}
      <section className="py-20 bg-gradient-to-br from-violet-700 via-indigo-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest mb-6">
                <Gauge size={14} /> Værdi for kunden
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Du hjælper virksomheder med at spare tid
              </h2>
              <p className="text-lg text-white/80 mb-8">
                AI-løsninger kan automatisere kundeservice, e-mails, bogføring, booking og meget mere. Når du
                introducerer en virksomhed for de rette AI-værktøjer, hjælper du dem med at frigøre timer hver
                eneste uge. Det gør dit job meningsfuldt – du sælger ikke bare, du skaber reel værdi.
              </p>
              <ul className="space-y-4">
                {[
                  'Automatisér tidskrævende, manuelle opgaver',
                  'Frigør medarbejdernes tid til det, der betyder noget',
                  'Døgnbetjening med AI-chat og AI-reception',
                  'Hurtigere svar til kunderne – og flere salg',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-violet-300 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/digital/ai-integration" className="mt-8 inline-flex items-center text-violet-200 font-semibold hover:text-white transition-colors">
                Se de AI-løsninger du kommer til at repræsentere <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-10">
              <div className="text-center">
                <div className="text-sm uppercase tracking-widest text-white/60 mb-2">Din indtjening</div>
                <div className="text-5xl md:text-6xl font-bold mb-1">Uden loft</div>
                <p className="text-white/70 mb-8">Grundløn + provision pr. booket møde</p>
                <div className="space-y-4 text-left">
                  {[
                    { icon: <TrendingUp size={20} className="text-violet-300" />, label: 'Voksende marked med høj efterspørgsel' },
                    { icon: <ShieldCheck size={20} className="text-violet-300" />, label: 'Tryg fast grundløn i bunden' },
                    { icon: <Star size={20} className="text-violet-300" />, label: 'Bonus til de dygtigste konsulenter' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                      {row.icon}
                      <span className="text-white/90 text-sm">{row.label}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#ansog"
                  className="mt-8 inline-flex items-center justify-center w-full bg-white text-violet-700 px-6 py-4 rounded-xl font-semibold hover:bg-violet-50 transition-colors"
                >
                  Send din henvendelse <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI consultant is future-proof */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-slate-900">Derfor er AI-konsulent et fremtidssikret job</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Kunstig intelligens er ikke en forbigående trend – det er en grundlæggende forandring af, hvordan
              virksomheder arbejder. At blive AI-konsulent nu betyder, at du er med fra begyndelsen af en af de
              største erhvervsrevolutioner nogensinde.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Zap size={34} className="text-violet-600" />, title: 'Enorm efterspørgsel', desc: 'Næsten alle virksomheder skal tage stilling til AI – det giver dig et stort marked af potentielle kunder.' },
              { icon: <Sparkles size={34} className="text-violet-600" />, title: 'Et produkt der sælger sig selv', desc: 'Du behøver ikke overtale nogen. AI vækker nysgerrighed – din opgave er at åbne samtalen.' },
              { icon: <Users size={34} className="text-violet-600" />, title: 'Værdifuld erfaring', desc: 'Du opbygger viden om AI og salg – to af de mest efterspurgte kompetencer på arbejdsmarkedet.' },
              { icon: <Building2 size={34} className="text-violet-600" />, title: 'Stærke løsninger bag dig', desc: 'Du repræsenterer gennemprøvede AI-løsninger fra Magnora Marketing – ikke tomme løfter.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 p-7 rounded-2xl border border-slate-100 bg-slate-50/60">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements + process */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">Det kigger vi efter</h2>
              <ul className="space-y-3">
                {[
                  'Du er nysgerrig på teknologi og interesseret i AI',
                  'Du er udadvendt og god til at tale med mennesker i telefonen',
                  'Du taler og skriver flydende dansk',
                  'Du er selvdisciplineret og kan arbejde selvstændigt hjemmefra',
                  'Du er resultatorienteret og motiveret af at nå dine mål',
                  'Erfaring med salg eller mødebooking er en fordel – men ikke et krav',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-slate-600">
                Du behøver ikke være AI-ekspert. Vi giver dig grundig træning i både AI-løsningerne og
                salgsprocessen, så du er klar til at skabe resultater fra start.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">Sådan kommer du i gang</h2>
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Send din henvendelse', desc: 'Udfyld formularen nedenfor – ingen lang ansøgning nødvendig.' },
                  { step: '2', title: 'Kort afklaringssnak', desc: 'Vi vender tilbage inden for 2 hverdage og aftaler en uforpligtende snak.' },
                  { step: '3', title: 'AI- & salgstræning', desc: 'Du lærer løsningerne at kende og får scripts og systemadgang – klar på få dage.' },
                  { step: '4', title: 'Kontakt virksomheder & tjen', desc: 'Du kontakter virksomheder, booker møder og bliver belønnet for hvert kvalificeret møde.' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center">{item.step}</div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <a href="#ansog" className="mt-8 inline-flex items-center bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors">
                Send din henvendelse <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="ansog" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-700 text-xs font-semibold uppercase tracking-widest mb-5">
              <Sparkles size={14} /> Ansøg nu
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Send din henvendelse</h2>
            <p className="text-lg text-slate-600">
              Er du klar til at blive AI-konsulent og arbejde hjemmefra? Udfyld formularen, så vender vi tilbage
              inden for én hverdag. Det er helt uforpligtende.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm">
            <ContactForm presetTopic="Job henvendelse" sourceLabel="Jobside: AI-konsulent" />
          </div>
        </div>
      </section>

      {/* SEO content blocks */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              AI-konsulent job – hjælp virksomheder med at tage stilling til AI-løsninger
            </h2>
            <p className="text-slate-600 mb-4">
              Kunstig intelligens er blevet en fast del af den moderne forretningsverden, og danske virksomheder
              står over for et vigtigt valg: Skal de udnytte AI til at effektivisere deres arbejde – eller risikere
              at blive overhalet af konkurrenterne? Som AI-konsulent hos Magnora Marketing spiller du en central
              rolle. Du kontakter virksomheder, giver dem et konkret indblik i, hvad AI-løsninger kan gøre for dem,
              og hjælper dem med at tage stilling til en teknologi, de ikke kan ignorere. Samtidig hjælper du dem
              med at spare tid ved at automatisere tidskrævende og manuelle opgaver.
            </p>
            <p className="text-slate-600 mb-6">
              Jobbet som AI-konsulent er ideelt for dig, der er nysgerrig på teknologi, god til mennesker og
              motiveret af at skabe resultater. Du arbejder 100% hjemmefra med fleksible arbejdstider, en tryg fast
              grundløn og provision uden loft. Du behøver ingen forudgående erfaring med AI – vi giver dig al den
              træning, du skal bruge for at forstå løsningerne og formidle deres værdi. Alt du skal bruge er en
              telefon, en computer og lysten til at være med i front af en af tidens største teknologiske
              revolutioner.
            </p>
            <ul className="space-y-2">
              {[
                '100% hjemmefra – arbejd hvornår og hvorfra du vil',
                'Attraktiv løn: fast grundhonorar + provision uden loft',
                'Fremtidssikret branche med enorm efterspørgsel',
                'Grundig oplæring i AI-løsninger og salg – ingen forhåndsviden krævet',
                'Meningsfuldt arbejde: du hjælper virksomheder med at spare tid',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="text-violet-600 font-bold mt-1">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Hvorfor AI-konsulenter er så efterspurgte i Danmark lige nu
            </h2>
            <p className="text-slate-600 mb-4">
              Interessen for kunstig intelligens er eksploderet, og værktøjer som ChatGPT og andre AI-assistenter
              har gjort teknologien tilgængelig for alle. Men mange danske virksomheder ved stadig ikke, hvordan de
              konkret skal bruge AI i deres hverdag. Der er derfor et stort behov for konsulenter, der kan bygge bro
              mellem teknologien og virksomhederne – og forklare fordelene i et sprog, som beslutningstagere
              forstår. Som AI-konsulent er du netop denne brobygger.
            </p>
            <p className="text-slate-600 mb-4">
              Fordi efterspørgslen er så høj, og fordi AI-løsninger reelt sparer virksomheder for tid og penge, er
              samtalerne lettere at åbne end i mange andre brancher. Kombinationen af et stærkt, relevant produkt og
              en generøs provisionsmodel gør AI-konsulent til et af de mest attraktive og fremtidssikrede hjemmejob i
              Danmark. Uanset om du søger et fuldtidsjob eller en fleksibel biindtægt, giver rollen dig frihed til at
              tilrettelægge arbejdet, som det passer dig bedst.
            </p>
            <p className="text-slate-600">
              Vil du være med? Udfyld <a href="#ansog" className="text-violet-600 font-semibold underline">henvendelsesformularen</a> og
              hør mere om, hvordan du kommer i gang som AI-konsulent hjemmefra.
            </p>
          </div>
        </div>
      </section>

      {/* Related jobs – internal linking */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-3 text-slate-900 text-center">Andre ledige job hjemmefra</h2>
          <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
            AI er kun én af mange spændende brancher, du kan arbejde med hos Magnora Marketing. Se flere ledige
            hjemmejob.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobListings.filter(job => job.path !== '/jobs/ai-konsulent').slice(0, 9).map((job) => (
              <Link
                key={job.path}
                to={job.path}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-violet-300 hover:shadow-md transition-all group"
              >
                <job.icon className={`flex-shrink-0 ${job.color}`} size={20} />
                <span className="text-slate-700 group-hover:text-violet-600 font-medium text-sm">{job.title}</span>
                <ArrowRight className="ml-auto text-slate-300 group-hover:text-violet-500" size={16} />
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/freelance-telemarketing" className="inline-flex items-center text-violet-600 font-semibold hover:text-violet-700">
              Se alle ledige stillinger <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Hvad går jobbet som AI-konsulent ud på?', answer: 'Du kontakter danske virksomheder over telefon og online, giver dem indblik i, hvordan AI-løsninger kan spare dem tid, og booker et møde eller en demo med vores AI-specialister. Du bliver belønnet for hvert kvalificeret møde, du booker.' },
        { question: 'Skal jeg være AI-ekspert for at søge?', answer: 'Nej. Du behøver ingen teknisk baggrund eller forhåndsviden om AI. Vi giver dig grundig træning i både AI-løsningerne og salgsprocessen, så du er klar til at skabe resultater. Nysgerrighed og gode kommunikationsevner er vigtigere end teknisk viden.' },
        { question: 'Kan jeg arbejde som AI-konsulent hjemmefra?', answer: 'Ja – jobbet foregår 100% hjemmefra. Du skal blot bruge en telefon, en computer og stabilt internet. Ingen pendling og ingen fast fremmøde.' },
        { question: 'Hvilke AI-løsninger kommer jeg til at repræsentere?', answer: 'Du repræsenterer Magnora Marketings AI-løsninger, herunder AI-integration, AI-chatwidget og AI-reception, der hjælper virksomheder med at automatisere kundeservice, booking og andre tidskrævende opgaver.' },
        { question: 'Hvad er lønnen som AI-konsulent?', answer: 'Du får en fast grundløn kombineret med provision uden loft pr. booket møde. Den præcise model aftaler vi med dig inden opstart – men din indsats afgør, hvor meget du kan tjene.' },
        { question: 'Kan jeg have jobbet ved siden af studie eller andet arbejde?', answer: 'Ja – mange af vores konsulenter arbejder fleksibelt og bruger jobbet som en attraktiv biindtægt ved siden af studie, familie eller andet arbejde.' },
        { question: 'Hvor hurtigt kan jeg komme i gang?', answer: 'Efter en kort afklaringssnak og onboarding med AI- og salgstræning kan de fleste være klar til at kontakte virksomheder inden for få dage.' },
        { question: 'Hvordan søger jeg jobbet som AI-konsulent?', answer: 'Udfyld henvendelsesformularen her på siden – ingen lang ansøgning nødvendig. Vi vender tilbage inden for én hverdag.' },
      ]} title="Ofte stillede spørgsmål om AI-konsulent jobbet" />

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-violet-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Bot size={44} className="mx-auto mb-6 text-violet-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vær med i front af AI-revolutionen</h2>
          <p className="text-xl mb-10 text-white/80">
            Bliv AI-konsulent, arbejd hjemmefra og hjælp danske virksomheder med at spare tid med kunstig
            intelligens. Send din henvendelse i dag – det er helt uforpligtende.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#ansog" className="inline-flex items-center justify-center bg-white text-violet-700 px-8 py-4 rounded-lg font-semibold hover:bg-violet-50 transition-colors">
              Send din henvendelse <ArrowRight className="ml-2" size={18} />
            </a>
            <Link to="/freelance-telemarketing" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-violet-700 transition-colors">
              Se alle ledige stillinger
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
