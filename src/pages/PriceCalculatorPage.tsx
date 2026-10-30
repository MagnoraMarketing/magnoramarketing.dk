import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CalendarCheck, Globe, PhoneCall, Sparkles } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import PriceCalculator from '../components/PriceCalculator';

interface Answer {
  question: string;
  answer: string;
}

// One card per calculator, linking to the page that goes deeper on that price.
const answerMeta = [
  { icon: CalendarCheck, path: '/blog/pris-paa-moedebooking' },
  { icon: PhoneCall, path: '/priser' },
  { icon: Globe, path: '/digital/hjemmesider/priser' },
  { icon: Sparkles, path: '/blog/pris-paa-ai-reception' },
];

const PriceCalculatorPage: React.FC = () => {
  const { t } = useTranslation();
  const answers = t('priceCalculatorPage.answers.items', { returnObjects: true }) as Answer[];

  return (
    <>
      <SEO
        title={t('priceCalculatorPage.seo.title')}
        description={t('priceCalculatorPage.seo.description')}
        canonical="/prisberegner"
        keywords={t('priceCalculatorPage.seo.keywords')}
      />

      <HeroSection
        title={t('priceCalculatorPage.hero.title')}
        subtitle={t('priceCalculatorPage.hero.subtitle')}
        ctaText={t('priceCalculatorPage.hero.cta')}
        ctaLink="/prisberegner#prisberegner"
        backgroundImage="/heroes/hero-partner.jpg"
      />

      <PriceCalculator variants={['meetings', 'telemarketing', 'website', 'ai']} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">{t('priceCalculatorPage.answers.heading')}</h2>
            <p className="text-gray-600">{t('priceCalculatorPage.answers.intro')}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {answers.map((item, i) => {
              const { icon: Icon, path } = answerMeta[i];
              return (
                <div key={path} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon size={22} /></span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.question}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{item.answer}</p>
                  <Link to={path} className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-800">
                    {t('priceCalculatorPage.answers.linkText')} <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FAQSection faqs={t('priceCalculatorPage.faqs', { returnObjects: true }) as Answer[]} />
      <CTASection
        title={t('priceCalculatorPage.cta.title')}
        subtitle={t('priceCalculatorPage.cta.subtitle')}
        primaryText={t('priceCalculatorPage.cta.primaryText')}
        primaryLink="/kontakt"
      />
    </>
  );
};

export default PriceCalculatorPage;
