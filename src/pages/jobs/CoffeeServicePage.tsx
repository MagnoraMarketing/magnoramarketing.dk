import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, ArrowRight, Clock, PiggyBank, Home, Coffee, Users, Star } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';

export default function CoffeeServicePage() {
  const { t } = useTranslation();

  const tasks = t('jobCoffeeService.whatJob.tasks', { returnObjects: true }) as string[];
  const keyFactRows = t('jobCoffeeService.keyFacts.rows', { returnObjects: true }) as { label: string; value: string }[];
  const whyGoodItems = t('jobCoffeeService.whyGood.items', { returnObjects: true }) as { title: string; desc: string }[];
  const whatYouGetItems = t('jobCoffeeService.whatYouGet.items', { returnObjects: true }) as { title: string; desc: string }[];
  const requirements = t('jobCoffeeService.requirements.items', { returnObjects: true }) as string[];
  const faqItems = t('jobCoffeeService.faq.items', { returnObjects: true }) as { question: string; answer: string }[];

  const whyGoodIcons = [
    <Coffee size={36} className="text-amber-600" />,
    <Users size={36} className="text-amber-600" />,
    <Star size={36} className="text-amber-600" />,
  ];
  const whatYouGetIcons = [
    <Home size={40} className="text-blue-600" />,
    <PiggyBank size={40} className="text-blue-600" />,
    <Clock size={40} className="text-blue-600" />,
  ];

  return (
    <>
      <SEO
        title={t('jobCoffeeService.seo.title')}
        description={t('jobCoffeeService.seo.description')}
        canonical="/jobs/kaffe-service"
        keywords={t('jobCoffeeService.seo.keywords')}
      />

      <HeroSection
        title={t('jobCoffeeService.hero.title')}
        subtitle={t('jobCoffeeService.hero.subtitle')}
        ctaText={t('jobCoffeeService.hero.ctaText')}
        ctaLink="/kontakt"
        secondaryCtaText={t('jobCoffeeService.hero.secondaryCtaText')}
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage="/heroes/hero-kaffe.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('jobCoffeeService.whatJob.heading')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('jobCoffeeService.whatJob.paragraph1')}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {t('jobCoffeeService.whatJob.paragraph2')}
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
            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
              <h3 className="text-xl font-bold mb-6 text-amber-800">{t('jobCoffeeService.keyFacts.heading')}</h3>
              <div className="space-y-4">
                {keyFactRows.map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-0">
                    <span className="text-gray-600 text-sm">{row.label}</span>
                    <span className="font-semibold text-gray-900 text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/kontakt" className="w-full inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {t('jobCoffeeService.keyFacts.applyButton')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('jobCoffeeService.whyGood.heading')}</h2>
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
            <h2 className="text-3xl font-bold mb-4">{t('jobCoffeeService.whatYouGet.heading')}</h2>
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
              <h2 className="text-2xl font-bold mb-6">{t('jobCoffeeService.requirements.heading')}</h2>
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
              <h2 className="text-2xl font-bold mb-6">{t('jobCoffeeService.howToApply.heading')}</h2>
              <p className="text-gray-600 mb-6">{t('jobCoffeeService.howToApply.text')}</p>
              <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {t('jobCoffeeService.howToApply.button')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqItems} />

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('jobCoffeeService.finalCta.heading')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('jobCoffeeService.finalCta.text')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('jobCoffeeService.finalCta.applyButton')} <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/freelance-telemarketing" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              {t('jobCoffeeService.finalCta.seeAllButton')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
