import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TrendingUp, BarChart3, HeartHandshake, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import AiSolutionsSection from '../components/AiSolutionsSection';
import ContactForm from '../components/ContactForm';

interface BenefitItem {
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const PartnersPage: React.FC = () => {
  const { t } = useTranslation();

  const benefitIcons = [
    <TrendingUp size={40} className="text-blue-600" />,
    <BarChart3 size={40} className="text-blue-600" />,
    <HeartHandshake size={40} className="text-blue-600" />,
  ];
  const benefits = (t('partners.benefits.items', { returnObjects: true }) as BenefitItem[]).map((item, i) => ({
    ...item,
    icon: benefitIcons[i],
  }));

  const processNumbers = ['01', '02', '03', '04'];
  const processSteps = (t('partners.process.steps', { returnObjects: true }) as ProcessStep[]).map((step, i) => ({
    ...step,
    number: processNumbers[i],
  }));

  return (
    <>
      <SEO
        title={t('partners.seo.title')}
        description={t('partners.seo.description')}
        canonical="/samarbejdspartner"
        keywords={t('partners.seo.keywords')}
      />

      <HeroSection
        title={t('partners.hero.title')}
        subtitle={t('partners.hero.subtitle')}
        ctaText={t('partners.hero.cta')}
        ctaLink="#kontakt-formular"
        secondaryCtaText={t('partners.hero.secondaryCta')}
        secondaryCtaLink="/priser"
        backgroundImage="/heroes/hero-partner.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('partners.benefits.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('partners.benefits.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-lg">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('partners.process.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt-formular" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">{t('partners.contactSection.title')}</h2>
            <p className="text-lg text-gray-600">{t('partners.contactSection.subtitle')}</p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
            <ContactForm presetTopic="Pris på Mødebooking / Telesalg" sourceLabel="Samarbejdspartner-siden" />
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klar til at samarbejde med Magnora Marketing?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Tag det første skridt mod mere vækst. Kontakt os og hør hvad Magnora Marketing kan gøre for din virksomhed.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kom i gang <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Outsourcing af Salg og Mødebooking – Bliv Samarbejdspartner med Magnora Marketing</h2>
            <p className="text-gray-600 mb-4">
              At blive samarbejdspartner med Magnora Marketing er den strategiske beslutning for B2B virksomheder der ønsker at vækste hurtigt og effektivt uden at opbygge og bemande et stort internt salgsteam. Magnora Marketing fungerer som din forlængede salgsstyrke – med erfarne salgskonsulenter der repræsenterer din virksomhed professionelt og engageret over for potentielle kunder. Vi skræddersyr kampagnen fuldstændigt til din branche, din målgruppe og dit specifikke produkt eller service, og leverer løbende rapporter der viser præcist hvad indsatsen giver.
            </p>
            <p className="text-gray-600 mb-6">
              Samarbejdet med Magnora Marketing starter med et grundigt opstartsmøde hvor vi lærer din virksomhed og dine kunder at kende. Derefter udvikler vi en målrettet strategi med klare KPI'er, kommunikationsplaner og en realistisk plan for opstart og skalering. De fleste samarbejdspartnere kan forvente de første resultater inden for 2-3 uger efter kampagnestart, og mange ser positiv ROI allerede i første kvartal.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Skalér salget uden dyre faste ansættelser</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Skræddersyet strategi med klare KPI'er og mål</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Ugentlige og månedlige performance-rapporter</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Fleksible aftaler med rimelige opsigelsesvarsler</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Magnora Marketing er Mere end et Callcenter – Vi er Din Strategiske Salgspartner</h2>
            <p className="text-gray-600 mb-4">
              Magnora Marketing adskiller sig fundamentalt fra traditionelle callcentre ved at fokusere på kvalitet frem for volumen. Vi er en strategisk salgspartner med dyb brancheviden, målrettede kommunikationsstrategier og et konstant fokus på at maksimere ROI for vores samarbejdspartnere. Vores team af erfarne salgsprofessionelle arbejder dedikeret med din kampagne og justerer løbende tilgangen baseret på data, feedback og markedsudvikling.
            </p>
            <p className="text-gray-600 mb-4">
              Kontakt Magnora Marketing i dag på mail@magnoramarketing.dk – vi tilbyder en uforpligtende pilotperiode til reduceret pris for nye samarbejdspartnere, så du kan evaluere resultater og samarbejdsform inden fuld opstart.
            </p>
          </div>
        </div>
      </section>

      <AiSolutionsSection />

      <FAQSection faqs={[
        { question: 'Hvad koster det at samarbejde med Magnora Marketing?', answer: 'Prisen afhænger af din branche, opgavens omfang og den valgte model. Vi tilbyder både No Cure No Pay og faste pakkeløsninger. Kontakt os for et skræddersyet tilbud.' },
        { question: 'Hvornår kan I starte?', answer: 'Typisk kan vi starte aktiv indsats inden for 1-2 uger efter en grundig opstartsbriefing.' },
        { question: 'Hvilke brancher arbejder I med?', answer: 'Vi arbejder med en bred vifte af B2B brancher – fra IT og SaaS til energi, facility, finans og konsulentbranchen.' },
        { question: 'Hvad er minimumsperioden for samarbejde?', answer: 'Vi anbefaler minimum 3 måneder for at se solide resultater, men vi er fleksible og tilpasser os din situation.' },
        { question: 'Hvad indebærer et samarbejde med Magnora Marketing?', answer: 'Som samarbejdspartner får du adgang til Magnora Marketing\'s team af erfarne salgsprofessionelle, der arbejder dedikeret med at generere leads og booke møder til din virksomhed.' },
        { question: 'Kan vi selv definere målgruppen?', answer: 'Ja – vi skræddersyr kampagner baseret på din ønskede målgruppe, branche, virksomhedsstørrelse og geografi.' },
        { question: 'Hvad er minimumslængden på et samarbejde?', answer: 'Vi anbefaler minimum 3 måneder for at opnå optimale resultater, men tilbyder fleksible løsninger.' },
        { question: 'Får vi adgang til rapportering?', answer: 'Ja, du modtager ugentlige og månedlige rapporter med alle aktiviteter, mødebookinger og resultater.' },
        { question: 'Arbejder I med NDA og fortrolighed?', answer: 'Selvfølgelig – alle samarbejder er beskyttet af fortrolighedsaftaler.' },
        { question: "Hvad er en typisk opstartsproces?", answer: "Vi starter med en briefing, definerer målgruppe og KPI'er, laver et script og testperiode, og går derefter i fuld drift." },
        { question: "Kan vi se vores leads i realtid?", answer: "Ja – vi kan give adgang til et live dashboard eller levere ugentlige rapporter afhængigt af jeres præference." },
        { question: "Hvad sker der, hvis resultaterne ikke lever op til forventningerne?", answer: "Vi holder løbende optimeringsmøder og justerer tilgangen baseret på data. Transparens og ærlighed er grundlæggende for vores samarbejde." },
        { question: "Kan vi stoppe samarbejdet hvis det ikke virker?", answer: "Ja – vi har rimelige opsigelsesvarsler og ønsker ikke at binde kunder der ikke oplever værdi." },
        { question: "Arbejder I med eksklusive aftaler?", answer: "Vi kan tilbyde eksklusivitet inden for en given branche og region, afhængigt af samarbejdets omfang." },
        { question: "Kan I arbejde med vores eksisterende salgsteam?", answer: "Absolut – mange kunder bruger Magnora Marketing som supplement til deres interne salgsteam, ikke som erstatning." },
        { question: "Hvad er jeres erfaring med SaaS-virksomheder?", answer: "Vi har stærk erfaring med mødebooking og leadgenerering til SaaS-virksomheder, herunder tech-beslutningstagere og IT-chefer." },
        { question: "Kan I hjælpe med at validere en ny målgruppe?", answer: "Ja – telemarketing og mødebooking er ideelle til at teste nye målgrupper hurtigt og datadrevet." },
        { question: "Tilbyder I pilotprojekter?", answer: "Ja – vi tilbyder ofte en kortere pilotperiode så du kan evaluere resultater og samarbejdsform inden fuld opstart." },
        { question: "Hvad adskiller Magnora Marketing fra et traditionelt callcenter?", answer: "Magnora Marketing er ikke et callcenter – vi er en strategisk salgspartner med fokus på kvalitet, målretning og dokumenterede resultater, ikke volumen." },
      ]} />
      <CTASection
        title="Bliv samarbejdspartner – start din vækst i dag"
        subtitle="Lad Magnora Marketing fylde din kalender med kvalificerede salgsmøder og varme leads, så dit team kan fokusere på at lukke aftaler."
        primaryText="Kontakt os"
        primaryLink="/kontakt"
        secondaryText="Se priser og pakker"
        secondaryLink="/priser"
      />
    </>
  );
};

export default PartnersPage;
