import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, ArrowRight, Clock, PiggyBank, Home, Zap, Sun, Lightbulb } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';

export default function LedLightingPage() {
  const { t } = useTranslation();

  const tasks = t('jobLedLighting.about.tasks', { returnObjects: true }) as string[];
  const keyFactRows = t('jobLedLighting.keyFacts.rows', { returnObjects: true }) as { label: string; value: string }[];
  const whyLedSellsItems = t('jobLedLighting.whyLedSells.items', { returnObjects: true }) as { title: string; desc: string }[];
  const benefitsItems = t('jobLedLighting.benefits.items', { returnObjects: true }) as { title: string; desc: string }[];
  const requirementsItems = t('jobLedLighting.requirements.items', { returnObjects: true }) as string[];
  const faqItems = t('jobLedLighting.faqs', { returnObjects: true }) as { question: string; answer: string }[];

  const whyLedSellsIcons = [
    <Zap size={36} className="text-yellow-500" />,
    <Clock size={36} className="text-yellow-500" />,
    <Sun size={36} className="text-yellow-500" />,
  ];
  const benefitsIcons = [
    <Home size={40} className="text-blue-600" />,
    <PiggyBank size={40} className="text-blue-600" />,
    <Lightbulb size={40} className="text-blue-600" />,
  ];

  return (
    <>
      <SEO
        title={t('jobLedLighting.seo.title')}
        description={t('jobLedLighting.seo.description')}
        canonical="/jobs/led-belysning"
        keywords={t('jobLedLighting.seo.keywords')}
      />

      <HeroSection
        title={t('jobLedLighting.hero.title')}
        subtitle={t('jobLedLighting.hero.subtitle')}
        ctaText={t('jobLedLighting.hero.ctaText')}
        ctaLink="/kontakt"
        secondaryCtaText={t('jobLedLighting.hero.secondaryCtaText')}
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage="/heroes/hero-energi.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('jobLedLighting.about.heading')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('jobLedLighting.about.paragraph1')}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {t('jobLedLighting.about.paragraph2')}
              </p>
              <ul className="space-y-3">
                {tasks.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-100">
              <h3 className="text-xl font-bold mb-6 text-yellow-800">{t('jobLedLighting.keyFacts.heading')}</h3>
              <div className="space-y-4">
                {keyFactRows.map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-yellow-100 last:border-0">
                    <span className="text-gray-600 text-sm">{row.label}</span>
                    <span className="font-semibold text-gray-900 text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/kontakt" className="w-full inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {t('jobLedLighting.keyFacts.applyButton')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('jobLedLighting.whyLedSells.heading')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('jobLedLighting.whyLedSells.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyLedSellsItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="flex justify-center mb-4">{whyLedSellsIcons[i]}</div>
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
            <h2 className="text-3xl font-bold mb-4">{t('jobLedLighting.benefits.heading')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefitsItems.map((item, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="flex justify-center mb-4">{benefitsIcons[i]}</div>
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
              <h2 className="text-2xl font-bold mb-6">{t('jobLedLighting.requirements.heading')}</h2>
              <ul className="space-y-3">
                {requirementsItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('jobLedLighting.howToApply.heading')}</h2>
              <p className="text-gray-600 mb-6">{t('jobLedLighting.howToApply.paragraph1')}</p>
              <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {t('jobLedLighting.howToApply.ctaText')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqItems} />

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('jobLedLighting.finalCta.heading')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('jobLedLighting.finalCta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('jobLedLighting.finalCta.primaryCta')} <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/freelance-telemarketing" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              {t('jobLedLighting.finalCta.secondaryCta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
