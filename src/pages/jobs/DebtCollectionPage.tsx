import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, ArrowRight, Clock, PiggyBank, Home, Shield, BarChart3, Users } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';

export default function DebtCollectionPage() {
  const { t } = useTranslation();

  const tasks = t('jobDebtCollection.whatJob.tasks', { returnObjects: true }) as string[];
  const keyFactRows = t('jobDebtCollection.keyFacts.rows', { returnObjects: true }) as { label: string; value: string }[];
  const whyGoodItems = t('jobDebtCollection.whyGood.items', { returnObjects: true }) as { title: string; desc: string }[];
  const whatYouGetItems = t('jobDebtCollection.whatYouGet.items', { returnObjects: true }) as { title: string; desc: string }[];
  const requirements = t('jobDebtCollection.requirements.items', { returnObjects: true }) as string[];
  const faqItems = t('jobDebtCollection.faq.items', { returnObjects: true }) as { question: string; answer: string }[];

  const whyGoodIcons = [
    <Shield size={36} className="text-slate-600" />,
    <BarChart3 size={36} className="text-slate-600" />,
    <Users size={36} className="text-slate-600" />,
  ];
  const whatYouGetIcons = [
    <Home size={40} className="text-blue-600" />,
    <PiggyBank size={40} className="text-blue-600" />,
    <Clock size={40} className="text-blue-600" />,
  ];

  return (
    <>
      <SEO
        title={t('jobDebtCollection.seo.title')}
        description={t('jobDebtCollection.seo.description')}
        canonical="/jobs/inkasso"
        keywords={t('jobDebtCollection.seo.keywords')}
      />

      <HeroSection
        title={t('jobDebtCollection.hero.title')}
        subtitle={t('jobDebtCollection.hero.subtitle')}
        ctaText={t('jobDebtCollection.hero.ctaText')}
        ctaLink="/kontakt"
        secondaryCtaText={t('jobDebtCollection.hero.secondaryCtaText')}
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage="/heroes/hero-telesalg.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('jobDebtCollection.whatJob.heading')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('jobDebtCollection.whatJob.paragraph1')}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {t('jobDebtCollection.whatJob.paragraph2')}
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
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold mb-6 text-slate-800">{t('jobDebtCollection.keyFacts.heading')}</h3>
              <div className="space-y-4">
                {keyFactRows.map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-0">
                    <span className="text-gray-600 text-sm">{row.label}</span>
                    <span className="font-semibold text-gray-900 text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/kontakt" className="w-full inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {t('jobDebtCollection.keyFacts.applyButton')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('jobDebtCollection.whyGood.heading')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyGoodItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="flex justify-center mb-4">{whyGoodIcons[i]}</div>
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
            <h2 className="text-3xl font-bold mb-4">{t('jobDebtCollection.whatYouGet.heading')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatYouGetItems.map((item, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="flex justify-center mb-4">{whatYouGetIcons[i]}</div>
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
              <h2 className="text-2xl font-bold mb-6">{t('jobDebtCollection.requirements.heading')}</h2>
              <ul className="space-y-3">
                {requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('jobDebtCollection.howToApply.heading')}</h2>
              <p className="text-gray-600 mb-6">{t('jobDebtCollection.howToApply.text')}</p>
              <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {t('jobDebtCollection.howToApply.button')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqItems} />

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('jobDebtCollection.finalCta.heading')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('jobDebtCollection.finalCta.text')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('jobDebtCollection.finalCta.applyButton')} <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/freelance-telemarketing" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              {t('jobDebtCollection.finalCta.seeAllButton')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
