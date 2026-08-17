import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, PiggyBank, Award, Users, CheckCircle, ArrowRight, Home, Star } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import { jobListings } from '../data/jobListings';

const FreelancersPage: React.FC = () => {
  const benefits = [
    {
      icon: <Clock size={40} className="text-blue-600" />,
      title: 'Fleksibel hverdag',
      description: 'Du bestemmer selv hvornår du arbejder. Tilpas din arbejdsdag til dit liv – ikke omvendt.'
    },
    {
      icon: <PiggyBank size={40} className="text-blue-600" />,
      title: 'Stærk indtjening',
      description: 'Konkurrencedygtig grundaflønning kombineret med attraktive resultatbonusser. Jo bedre du performer, jo mere tjener du.'
    },
    {
      icon: <Users size={40} className="text-blue-600" />,
      title: 'Stærkt fællesskab',
      description: 'Selv som freelancer er du aldrig alene. Du er en del af et stærkt Magnora Marketing-netværk med sparring og fælles drive.'
    },
    {
      icon: <Award size={40} className="text-blue-600" />,
      title: 'Faglig udvikling',
      description: 'Struktureret oplæring, løbende coaching og mulighed for at tage mere ansvar og avancere i rollen.'
    }
  ];

  const workFromHomeBenefits = [
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: 'Hjemmekontor',
      description: 'Arbejd effektivt fra dit eget hjem med alle nødvendige digitale redskaber. Ingen transporttid, ingen dyre frokoster.'
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: 'Egne arbejdstider',
      description: 'Tilrettelæg din dag som det passer dig – ideelt for studerende, forældre og alle med et aktivt liv ved siden af arbejdet.'
    },
    {
      icon: <PiggyBank className="w-12 h-12 text-blue-600" />,
      title: 'Resultatdrevet løn',
      description: 'Fast grundløn plus provision. Dine resultater afspejler sig direkte i din lønseddel.'
    }
  ];

  return (
    <>
      <SEO
        title="Freelance Sælger & Mødebooker Stillinger | Magnora Marketing"
        description="Bliv freelance sælger eller mødebooker hos Magnora Marketing. Arbejd hjemmefra, sæt dine egne tider og tjen godt med attraktiv provision. Se alle ledige stillinger her."
        canonical="/freelance-telemarketing"
        keywords="freelance sælger, freelance mødebooker, arbejd hjemmefra, telemarketing job, Magnora Marketing stillinger, B2B sælger"
      />

      <HeroSection
        title="Din Karriere som Freelance Sælger starter her"
        subtitle="Magnora Marketing tilbyder fleksible freelance-muligheder inden for B2B salg og mødebooking. Sæt dine egne tider, arbejd hjemmefra og byg en karriere på dine egne præmisser."
        ctaText="Se ledige stillinger"
        ctaLink="#stillinger"
        secondaryCtaText="Kontakt os"
        secondaryCtaLink="/kontakt"
        backgroundImage="/heroes/hero-jobs.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvad du får hos Magnora Marketing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Magnora Marketing tilbyder noget sjældent: friheden som freelancer kombineret med et stærkt professionelt fundament.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Arbejd hjemmefra med Magnora Marketing</h2>
              <p className="text-lg text-gray-600 mb-8">
                Som freelance sælger eller mødebooker hos Magnora Marketing har du fuld fleksibilitet til at arbejde fra dit eget hjem. Du får adgang til moderne salgssystemer, løbende sparring og et stærkt netværk – uden at skulle møde ind på et kontor.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {workFromHomeBenefits.map((benefit, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow">
                    <div className="flex justify-center mb-3">{benefit.icon}</div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {['Ingen transport og pendling', 'Bedre balance mellem arbejde og privatliv', 'Fuld fleksibilitet i arbejdstilrettelæggelsen', 'Provision og bonus oveni grundlønnen', "Del af Magnora Marketing's stærke salgsfællesskab", 'Grundig onboarding og løbende support', 'Professionel og personlig udvikling', 'Sociale events og fælles fejringer'].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/heroes/hero-jobs.jpg"
                alt="Freelance sælger arbejder hjemmefra med Magnora Marketing"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="stillinger" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ledige Stillinger hos Magnora Marketing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi søger løbende dygtige og motiverede freelance sælgere og mødebookere. Se de aktuelle stillinger herunder.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobListings.map((job, index) => (
              <Link key={index} to={job.path} className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <Star className="text-blue-600 flex-shrink-0" size={24} />
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium">Ledig</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                <span className="text-blue-600 font-medium text-sm inline-flex items-center">
                  Læs mere <ArrowRight size={14} className="ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Er du klar til at starte hos Magnora Marketing?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Send os en besked eller ring – vi tager en uforpligtende snak om de muligheder der passer bedst til dig.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kontakt os i dag <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Bliv Freelance Sælger hos Magnora Marketing – Fleksibel Karriere inden for B2B Telemarketing</h2>
            <p className="text-gray-600 mb-4">
              Som freelance sælger eller mødebooker hos Magnora Marketing får du den sjældne kombination af frihed og et stærkt professionelt fundament. Du arbejder 100% hjemmefra på dine egne præmisser – ingen pendling, ingen faste kontortider og ingen loft på din indtjening. Magnora Marketing leverer leads, scripts, kampagnematerialer og CRM-adgang fra dag ét, så du kan fokusere på det du er bedst til: at skabe resultater. Vores freelancere er tilknyttet projekter inden for alt fra SaaS og webudvikling til energi, kaffeservice og pensionsrådgivning.
            </p>
            <p className="text-gray-600 mb-6">
              Oplæringen hos Magnora Marketing er struktureret og grundig – du gennemgår et onboarding-forløb med produkttræning, salgsteknik og gennemgang af scripts inden du begynder. Undervejs har du adgang til løbende coaching og sparring fra erfarne salgsledere, og du er en del af et stærkt Magnora Marketing-netværk af freelancere der deler erfaringer og motivation. Provisionen er konkurrencedygtig og afspejler direkte dine resultater – jo mere du sælger, jo mere tjener du.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Arbejd hjemmefra med fuld fleksibilitet over din arbejdsdag</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Grundig onboarding og løbende faglig sparring</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Konkurrencedygtig grundaflønning plus resultatbonus</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Bredt udvalg af produkter og brancher at vælge imellem</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Freelance Telemarketing og Mødebooking – Karrieremuligheder med Magnora Marketing</h2>
            <p className="text-gray-600 mb-4">
              Magnora Marketing er i konstant vækst og søger løbende dygtige og motiverede freelance sælgere og mødebookere til vores projekter i hele Danmark. Uanset om du er studerende, forælder, erfaren sælger eller nystartet i branchen, er der plads til dig hos Magnora Marketing. Du vælger selv det produkt og den branche der passer bedst til din baggrund og interesse – og Magnora Marketing leverer resten. Mange af vores freelancere bruger samarbejdet som en fast biindtægt eller som udgangspunkt for en fuld karriere inden for B2B salg og telemarketing.
            </p>
            <p className="text-gray-600 mb-4">
              Tag styringen over din karriere og kontakt Magnora Marketing på mail@magnoramarketing.dk. Vi tager en uforpligtende snak om de muligheder der passer bedst til din situation, og kommer hurtigt i gang med et onboarding-forløb tilpasset dig.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Hvad tjener man som freelance sælger hos Magnora Marketing?', answer: 'Lønnen består af et fast grundhonorar plus provision på dine resultater. Jo mere du sælger, jo mere tjener du – der er intet loft.' },
        { question: 'Skal jeg have erfaring for at søge?', answer: 'Erfaring er en fordel, men ikke et krav. Magnora Marketing oplærer dig grundigt og giver dig løbende sparring og support.' },
        { question: 'Kan jeg arbejde deltid?', answer: 'Ja – du bestemmer selv dine arbejdstider og kan arbejde alt fra få timer om ugen til fuld tid.' },
        { question: 'Hvad sker der, hvis jeg har spørgsmål under arbejdet?', answer: 'Du har altid adgang til support fra Magnora Marketing\'s erfarne salgsledere, der kan hjælpe med sparring, scripts og produktspørgsmål.' },
        { question: 'Hvilke produkter sælger man?', answer: 'Magnora Marketing har freelancere inden for mange brancher – webudvikling, energi, solceller, kaffeservice, pension, inkasso og mere. Du vælger det produkt, der passer bedst til dig.' },
        { question: "Er der mulighed for fast ansættelse?", answer: "Samarbejdet starter som freelance. Dygtige freelancere kan på sigt diskutere andre samarbejdsformer med Magnora Marketing." },
        { question: "Hvad sker der i oplæringsperioden?", answer: "Du gennemgår et onboarding-forløb med produkttræning, salgsteknik og gennemgang af scripts. Typisk tager det 1-3 dage." },
        { question: "Kan jeg sælge flere produkter på én gang?", answer: "Normalt starter du med ét produkt. Når du har opnået rutine, kan du eventuelt tage flere produkter ind." },
        { question: "Hvad er det laveste jeg kan tjene?", answer: "Det afhænger af aktivitetsniveau og produkt. Vi sætter realistiske forventninger ved opstart og er transparente om løn." },
        { question: "Har I et fællesskab for freelancere?", answer: "Ja – du bliver en del af Magnora Marketing's netværk af freelancere og har adgang til erfaringsudveksling og fælles motivationsaktiviteter." },
        { question: "Kan jeg arbejde fra udlandet?", answer: "Ja – så længe du har stabilt internet og kan kommunikere professionelt på dansk, kan du arbejde fra hele verden." },
        { question: "Hvad er det vigtigste for at lykkes som freelancer hos Magnora Marketing?", answer: "Vedholdenhed, struktur og positivt mindset. Telemarketing kræver at man kan håndtere afvisninger og bevare motivationen." },
        { question: "Hvornår modtager jeg min første udbetaling?", answer: "Udbetalinger sker typisk månedligt bagud. Du modtager en opgørelse over verificerede salg og aktiviteter." },
        { question: "Er der en prøveperiode?", answer: "De første 2-4 uger betragtes typisk som en gensidig prøveperiode, så begge parter kan vurdere samarbejdet." },
        { question: "Hvad er de typiske arbejdstider?", answer: "De fleste freelancere ringer inden for normal dansk kontortid (8-17), men du bestemmer selv inden for dette vindue." },
      ]} />
      <CTASection
        title="Tag styringen over din karriere – bliv freelance sælger hos Magnora Marketing"
        subtitle="Fleksible arbejdstider, konkurrencedygtig provision og spændende projekter. Alt hvad du behøver for at lykkes som freelancer."
        primaryText="Søg nu"
        primaryLink="/kontakt"
        secondaryText="Se ledige stillinger"
        secondaryLink="/jobs/arbejd-hjemmefra"
      />
    </>
  );
};

export default FreelancersPage;
