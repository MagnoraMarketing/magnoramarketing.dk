import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Clock, Home, Umbrella, ShieldCheck,
  TrendingUp, Sparkles, CalendarCheck, HeartHandshake, Star, Wallet,
  Award, Phone, MapPin, PhoneCall, Target, Users, Building2
} from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import { jobListings } from '../../data/jobListings';

export default function InsuranceBrokerPage() {
  return (
    <>
      <SEO
        title="Mødebooking Hjemmefra for Danmarks Bedste Forsikringsmæglere | Magnora Marketing"
        description="Bliv mødebooker og lav mødebooking 100% hjemmefra for landets førende forsikringsmæglere. Attraktiv løn, provision uden loft og fuld frihed over din arbejdsdag. Søg om mødebooking-jobbet i dag."
        canonical="/jobs/forsikring-hjemmefra"
        keywords="mødebooking hjemmefra, mødebooker forsikring, mødebooking forsikring job, mødebooker forsikringsmægler, forsikringsmægler job hjemmefra, arbejd hjemmefra forsikring, freelance mødebooking, mødebooking job Danmark, attraktiv løn hjemmearbejde, remote mødebooking forsikring"
        ogType="website"
        breadcrumbs={[
          { name: 'Forside', url: '/' },
          { name: 'Job søgere', url: '/freelance-telemarketing' },
          { name: 'Forsikring – arbejd hjemmefra', url: '/jobs/forsikring-hjemmefra' },
        ]}
      />

      <HeroSection
        title="Mødebooking hjemmefra for Danmarks bedste forsikringsmæglere"
        subtitle="Lav mødebooking for landets førende forsikringsmæglere – 100% hjemmefra, med attraktiv løn, provision uden loft og fuld frihed over din egen arbejdsdag."
        ctaText="Ansøg – helt uforpligtende"
        ctaLink="/kontakt"
        secondaryCtaText="Se alle ledige stillinger"
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage="/heroes/hero-home.jpg"
      />

      {/* Stat band */}
      <section className="relative -mt-8 z-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
            {[
              { icon: <Home size={26} className="text-blue-600" />, stat: '100%', label: 'Hjemmefra' },
              { icon: <TrendingUp size={26} className="text-blue-600" />, stat: 'Uden loft', label: 'På din provision' },
              { icon: <Clock size={26} className="text-blue-600" />, stat: 'Fleksible', label: 'Arbejdstider' },
              { icon: <CalendarCheck size={26} className="text-blue-600" />, stat: '2 dage', label: 'Til opstart' },
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-widest mb-5">
              <Umbrella size={14} /> Mødebooker · Forsikring
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-slate-900">
              Et af Danmarks mest attraktive hjemmejob
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Som mødebooker for forsikring hjælper du landets bedste forsikringsmæglere med at komme i kontakt
              med virksomheder og privatkunder, der ønsker en bedre og billigere forsikringsløsning. Du arbejder
              100% hjemmefra, sætter selv dine rammer – og belønnes for dine resultater med markedets mest
              attraktive løn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Wallet size={38} className="text-blue-600" />,
                title: 'Attraktiv løn',
                desc: 'Fast grundhonorar plus provision uden loft. Jo flere kvalificerede møder du booker, jo mere tjener du – din indsats afgør din indtjening.',
              },
              {
                icon: <Home size={38} className="text-blue-600" />,
                title: 'Fuld frihed',
                desc: 'Arbejd fra din sofa, dit sommerhus eller et andet land. Ingen pendling, ingen faste mødetider – du strukturerer selv din dag.',
              },
              {
                icon: <Award size={38} className="text-blue-600" />,
                title: 'Danmarks bedste mæglere',
                desc: 'Du repræsenterer nogle af landets mest anerkendte forsikringsmæglere. Et stærkt produkt, du kan være stolt af at booke møder for.',
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

      {/* Salary highlight */}
      <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest mb-6">
                <Sparkles size={14} /> Løn & provision
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                En løn der matcher din indsats
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Vi tror på, at dygtige mødebookere skal belønnes derefter. Derfor kombinerer vi en tryg grundløn
                med en af markedets mest konkurrencedygtige provisionsmodeller – helt uden loft. Der er ingen
                grænse for, hvor meget du kan tjene.
              </p>
              <ul className="space-y-4">
                {[
                  'Fast grundhonorar fra dag ét',
                  'Provision på hvert kvalificeret møde – uden loft',
                  'Bonusprogrammer og konkurrencer for topbookere',
                  'Månedlig, transparent udbetaling',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-blue-300 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-10">
              <div className="text-center">
                <div className="text-sm uppercase tracking-widest text-white/60 mb-2">Din indtjening</div>
                <div className="text-5xl md:text-6xl font-bold mb-1">Uden loft</div>
                <p className="text-white/70 mb-8">Grundløn + provision pr. booket møde</p>
                <div className="space-y-4 text-left">
                  {[
                    { icon: <TrendingUp size={20} className="text-blue-300" />, label: 'Jo flere møder, jo højere løn' },
                    { icon: <ShieldCheck size={20} className="text-blue-300" />, label: 'Tryg fast grundløn i bunden' },
                    { icon: <Star size={20} className="text-blue-300" />, label: 'Ekstra bonus til topbookere' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                      {row.icon}
                      <span className="text-white/90 text-sm">{row.label}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/kontakt"
                  className="mt-8 inline-flex items-center justify-center w-full bg-white text-blue-700 px-6 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                >
                  Hør mere om lønnen <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Freedom / a day in the life */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-slate-900">Frihed til at leve livet, som du vil</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Glem pendling, stemplingsure og faste mødetider. Som mødebooker for forsikring hjemmefra
              bestemmer du selv, hvornår og hvorfra du arbejder.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <MapPin size={34} className="text-blue-600" />, title: 'Arbejd hvorfra du vil', desc: 'Fra hjemmet, sommerhuset eller udlandet – alt du behøver er en telefon, en computer og stabilt internet.' },
              { icon: <Clock size={34} className="text-blue-600" />, title: 'Dine egne tider', desc: 'Planlæg din dag omkring familie, studie eller fritid. Fuldtid eller som attraktiv biindtægt – du vælger.' },
              { icon: <HeartHandshake size={34} className="text-blue-600" />, title: 'Stærkt fællesskab', desc: 'Selvom du arbejder hjemmefra, er du aldrig alene. Onlinemøder, sparring og et netværk af erfarne bookere står klar.' },
              { icon: <Phone size={34} className="text-blue-600" />, title: 'Alt leveres til dig', desc: 'Leads, scripts, ringelister og CRM-adgang – du får alt, hvad du skal bruge for at komme godt fra start.' },
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

      {/* Testimonial */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="flex justify-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-slate-800 mb-6 leading-relaxed">
            «Jeg booker møder for forsikringsmæglere fra mit køkkenbord, henter mine børn kl. 15 – og tjener
            mere, end jeg gjorde på mit gamle kontorjob. Friheden og lønnen er simpelthen svær at slå.»
          </blockquote>
          <div className="font-semibold text-slate-900">Freelance mødebooker hos Magnora Marketing</div>
          <div className="text-slate-500 text-sm">Arbejder hjemmefra · Forsikring</div>
        </div>
      </section>

      {/* Requirements + process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">Det kigger vi efter</h2>
              <ul className="space-y-3">
                {[
                  'Du er udadvendt og god til at tale med mennesker i telefonen',
                  'Du taler og skriver flydende dansk',
                  'Du er selvdisciplineret og kan arbejde selvstændigt hjemmefra',
                  'Du er resultatorienteret og motiveret af at nå dine mål',
                  'Erfaring med salg, mødebooking eller kundeservice er en fordel – men ikke et krav',
                  'Du har telefon, computer og stabilt internet',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">Sådan kommer du i gang</h2>
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Send os en besked', desc: 'Ingen lang ansøgning nødvendig – skriv kort, hvem du er, og hvorfor du er interesseret.' },
                  { step: '2', title: 'Kort afklaringssnak', desc: 'Vi vender tilbage inden for 2 hverdage og aftaler en uforpligtende snak om mulighederne.' },
                  { step: '3', title: 'Onboarding & træning', desc: 'Du får produkttræning, scripts og adgang til systemerne – klar til at booke møder på få dage.' },
                  { step: '4', title: 'Book møder & tjen', desc: 'Du booker kvalificerede møder for forsikringsmæglerne og bliver belønnet for hvert eneste.' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">{item.step}</div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link to="/kontakt" className="mt-8 inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Ansøg nu – uforpligtende <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO content blocks */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Arbejd hjemmefra som mødebooker for forsikringsmæglere – frihed og attraktiv løn
            </h2>
            <p className="text-slate-600 mb-4">
              Drømmer du om et fleksibelt hjemmejob med en løn, der matcher din indsats? Som freelance mødebooker
              for forsikring hos Magnora Marketing arbejder du 100% hjemmefra og booker kvalificerede møder for
              nogle af Danmarks bedste og mest anerkendte forsikringsmæglere. Du hjælper virksomheder og
              privatkunder med at komme i kontakt med de rette rådgivere, så de kan få en bedre, billigere og mere
              gennemsigtig forsikringsløsning – og du belønnes for hvert eneste kvalificerede møde, du booker.
            </p>
            <p className="text-slate-600 mb-6">
              Jobbet som mødebooker inden for forsikring er ideelt for dig, der ønsker frihed og fleksibilitet i
              hverdagen. Du bestemmer selv, hvornår og hvorfra du arbejder, og du får en tryg fast grundløn
              kombineret med provision uden loft. Der er ingen pendling, ingen faste kontortider og intet
              loft over din indtjening – kun dine egne mål og ambitioner sætter grænsen. Magnora Marketing
              leverer leads, ringelister, scripts og CRM-adgang, så du kan fokusere på det, du er god til:
              at skabe gode samtaler og booke værdifulde møder.
            </p>
            <ul className="space-y-2">
              {[
                '100% hjemmefra – arbejd hvornår og hvorfra du vil',
                'Attraktiv løn: fast grundhonorar + provision uden loft',
                'Repræsenter Danmarks bedste forsikringsmæglere',
                'Leads, scripts og CRM leveret fra dag ét',
                'Fleksible arbejdstider – fuldtid eller som biindtægt',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="text-blue-600 font-bold mt-1">✓</span> {item}
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
              Derfor er mødebooking for forsikring et af landets bedste hjemmejob
            </h2>
            <p className="text-slate-600 mb-4">
              Forsikring er et produkt, som næsten alle danskere og virksomheder har brug for – og et marked, hvor
              en god forsikringsmægler kan spare kunderne for store beløb. Det gør din rolle som mødebooker både
              meningsfuld og efterspurgt. Du ringer til relevante kontakter fra vores ringelister, fortæller kort
              om fordelene ved en uforpligtende gennemgang hos en forsikringsmægler, og booker et møde til dem, der
              er interesserede. Enkelt, konkret og resultatorienteret.
            </p>
            <p className="text-slate-600 mb-4">
              Fordi efterspørgslen på dygtige forsikringsmæglere er høj, er der rig mulighed for at booke mange
              møder – og dermed tjene godt. Kombinationen af et stærkt produkt, varme emner og en generøs
              provisionsmodel gør dette til et af de mest attraktive hjemmejob, du kan finde i Danmark lige nu.
              Uanset om du søger et fuldtidsjob hjemmefra eller en fleksibel biindtægt ved siden af studie eller
              familie, giver rollen dig frihed til at tilrettelægge arbejdet, som det passer dig bedst.
            </p>
            <p className="text-slate-600">
              Kontakt Magnora Marketing i dag og hør mere om, hvordan du kommer i gang som mødebooker for
              forsikring hjemmefra. Vi glæder os til at høre fra dig.
            </p>
          </div>
        </div>
      </section>

      {/* What is meeting booking within insurance */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Hvad er mødebooking inden for forsikring?
            </h2>
            <p className="text-slate-600 mb-8">
              Mødebooking inden for forsikring handler om at skabe kontakten mellem en interesseret kunde og en
              professionel forsikringsmægler. Som mødebooker ringer du til virksomheder og privatpersoner, tager en
              god og troværdig samtale om deres nuværende forsikringer, og booker et uforpligtende møde med en
              mægler til dem, der ønsker at høre mere. Du sælger ikke selv forsikringen – dit fokus er udelukkende
              at booke det kvalificerede møde. Det gør mødebooking til et af de mest overskuelige og
              resultatorienterede hjemmejob, du kan få.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <PhoneCall size={32} className="text-blue-600" />, title: 'Ring op', desc: 'Du ringer til kontakter fra vores ringelister og indleder en god samtale med udgangspunkt i vores gennemprøvede scripts.' },
                { icon: <Target size={32} className="text-blue-600" />, title: 'Kvalificér', desc: 'Du afdækker kort behovet og finder ud af, om kunden er relevant for en forsikringsmægler.' },
                { icon: <CalendarCheck size={32} className="text-blue-600" />, title: 'Book mødet', desc: 'Du booker et uforpligtende møde i mæglerens kalender – og bliver belønnet for hvert kvalificeret møde.' },
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

      {/* Meeting booking from home across Denmark – regional SEO */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Mødebooking hjemmefra – i hele Danmark
            </h2>
            <p className="text-slate-600 mb-4">
              Fordi jobbet som mødebooker foregår 100% hjemmefra, er det ligegyldigt, hvor i landet du bor. Vi
              samarbejder med freelance mødebookere fra hele Danmark – og du kan lave mødebooking for
              forsikringsmæglere, uanset om du bor i en storby eller på landet. Alt du behøver er en telefon, en
              computer og stabilt internet.
            </p>
            <p className="text-slate-600 mb-6">
              Vi får løbende henvendelser fra mødebookere i blandt andet København, Aarhus, Odense, Aalborg,
              Esbjerg, Randers, Kolding, Vejle, Horsens og Roskilde – men du kan søge, uanset hvor du bor. Søger du
              "mødebooking job hjemmefra", "forsikringsmægler mødebooker" eller "arbejd hjemmefra forsikring", så er
              du landet det rigtige sted.
            </p>
            <div className="flex flex-wrap gap-2">
              {['København', 'Aarhus', 'Odense', 'Aalborg', 'Esbjerg', 'Randers', 'Kolding', 'Vejle', 'Horsens', 'Roskilde', 'Herning', 'Silkeborg', 'Hele Danmark'].map((city, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                  <MapPin size={13} /> {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why meeting booking is an attractive career */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Derfor er mødebooking en attraktiv karrierevej
            </h2>
            <p className="text-slate-600 mb-4">
              Mødebooking er en af de mest efterspurgte kompetencer i moderne B2B-salg. Dygtige mødebookere er
              guld værd for enhver forsikringsmægler, fordi de fylder kalenderen med kvalificerede møder og skaber
              direkte omsætning. Som mødebooker opbygger du stærke kommunikations- og salgsevner, der kan bruges i
              hele din karriere – og du bliver belønnet for din indsats her og nu gennem provision uden loft.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                { icon: <TrendingUp size={30} className="text-blue-600" />, title: 'Efterspurgt kompetence', desc: 'Mødebooking er en færdighed, der er efterspurgt i alle brancher – en investering i din fremtidige karriere.' },
                { icon: <Wallet size={30} className="text-blue-600" />, title: 'Indtjening uden loft', desc: 'Jo dygtigere du bliver til mødebooking, jo flere møder booker du – og jo mere tjener du.' },
                { icon: <Users size={30} className="text-blue-600" />, title: 'Menneskelig kontakt', desc: 'Du taler med mennesker hele dagen og hjælper dem videre til den rette rådgivning.' },
                { icon: <Building2 size={30} className="text-blue-600" />, title: 'Stærke samarbejdspartnere', desc: 'Du booker møder for nogle af landets mest anerkendte forsikringsmæglere.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related jobs – internal linking */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-3 text-slate-900 text-center">Andre mødebooking- &amp; salgsjob hjemmefra</h2>
          <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
            Forsikring er kun én af mange brancher, du kan lave mødebooking indenfor hos Magnora Marketing. Se
            flere ledige hjemmejob.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobListings.filter(job => job.path !== '/jobs/forsikring-hjemmefra').map((job) => (
              <Link
                key={job.path}
                to={job.path}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all group"
              >
                <job.icon className={`flex-shrink-0 ${job.color}`} size={20} />
                <span className="text-slate-700 group-hover:text-blue-600 font-medium text-sm">{job.title}</span>
                <ArrowRight className="ml-auto text-slate-300 group-hover:text-blue-500" size={16} />
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/freelance-telemarketing" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
              Se alle ledige stillinger <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Hvad går jobbet som mødebooker for forsikring ud på?', answer: 'Du ringer til relevante kontakter og booker uforpligtende møder mellem interesserede kunder og forsikringsmæglere. Du arbejder ud fra ringelister og scripts, som vi leverer, og bliver belønnet for hvert kvalificeret møde.' },
        { question: 'Hvad er forskellen på mødebooking og salg?', answer: 'Som mødebooker sælger du ikke selv forsikringen – du booker mødet mellem kunden og forsikringsmægleren. Selve rådgivningen og salget står mægleren for. Dit fokus er alene at skabe kvalificerede møder.' },
        { question: 'Kan jeg lave mødebooking hjemmefra, uanset hvor i Danmark jeg bor?', answer: 'Ja. Jobbet foregår 100% hjemmefra og over telefon, så du kan bo hvor som helst i Danmark – fra København og Aarhus til de mindste byer. Du behøver kun telefon, computer og stabilt internet.' },
        { question: 'Kan jeg virkelig arbejde 100% hjemmefra?', answer: 'Ja – hele rollen udføres hjemmefra. Du behøver kun en telefon, en computer og stabilt internet. Ingen pendling og ingen fast fremmøde.' },
        { question: 'Hvad er lønnen?', answer: 'Du får en fast grundløn kombineret med provision uden loft pr. booket møde. Den præcise model aftaler vi med dig inden opstart – men din indsats afgør, hvor meget du kan tjene.' },
        { question: 'Skal jeg selv finde kunderne?', answer: 'Nej. Vi leverer ringelister, leads, scripts og CRM-adgang. Du fokuserer på samtalerne og på at booke møderne.' },
        { question: 'Kræver det erfaring med forsikring eller salg?', answer: 'Nej. Erfaring med salg, mødebooking eller kundeservice er en fordel, men ikke et krav. Vi giver dig grundig produkttræning, så du er klar fra start.' },
        { question: 'Kan jeg have det som bijob ved siden af studie eller andet arbejde?', answer: 'Ja – mange af vores mødebookere arbejder fleksibelt og bruger det som en attraktiv biindtægt ved siden af studie, familie eller andet arbejde.' },
        { question: 'Hvilke arbejdstider er der?', answer: 'Du planlægger selv din dag. Bedste resultater opnås typisk inden for normal dansk kontortid (kl. 8-17), hvor kunderne er lettest at få fat i.' },
        { question: 'Hvornår udbetales provisionen?', answer: 'Provision udbetales månedligt og er baseret på dine verificerede, kvalificerede møder.' },
        { question: 'Hvor hurtigt kan jeg komme i gang?', answer: 'Efter en kort afklaringssnak og onboarding kan de fleste være klar til at booke møder inden for få dage.' },
        { question: 'Hvordan søger jeg?', answer: 'Send os en kort besked via kontaktsiden – ingen lang ansøgning nødvendig. Vi vender tilbage inden for 2 hverdage.' },
      ]} title="Ofte stillede spørgsmål om jobbet" />

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Umbrella size={44} className="mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klar til frihed og en løn, der matcher din indsats?</h2>
          <p className="text-xl mb-10 text-white/80">
            Bliv mødebooker for Danmarks bedste forsikringsmæglere – arbejd hjemmefra, sæt dine egne rammer og
            tjen uden loft. Ansøgningen er kort og helt uforpligtende.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Ansøg nu <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/freelance-telemarketing" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Se alle ledige stillinger
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
