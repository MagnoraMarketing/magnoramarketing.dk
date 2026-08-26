import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, PiggyBank, Home, Laptop, Globe, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';

export default function WebBureauPage() {
  const { t } = useTranslation();

  const tasks = t('jobWebBureau.about.tasks', { returnObjects: true }) as string[];
  const keyFactRows = t('jobWebBureau.keyFacts.rows', { returnObjects: true }) as { label: string; value: string }[];
  const requirements = t('jobWebBureau.requirements.items', { returnObjects: true }) as string[];
  const faqs = t('jobWebBureau.faqs', { returnObjects: true }) as { question: string; answer: string }[];

  const productIcons = [
    <Globe size={32} className="text-blue-600" />,
    <Laptop size={32} className="text-blue-600" />,
    <Users size={32} className="text-blue-600" />,
    <ArrowRight size={32} className="text-blue-600" />,
    <Clock size={32} className="text-blue-600" />,
    <PiggyBank size={32} className="text-blue-600" />,
  ];
  const products = (t('jobWebBureau.products.items', { returnObjects: true }) as { title: string; desc: string }[]).map((item, i) => ({
    ...item,
    icon: productIcons[i],
  }));

  const benefitIcons = [
    <Home size={40} className="text-blue-600" />,
    <PiggyBank size={40} className="text-blue-600" />,
    <Users size={40} className="text-blue-600" />,
  ];
  const benefits = (t('jobWebBureau.benefits.items', { returnObjects: true }) as { title: string; desc: string }[]).map((item, i) => ({
    ...item,
    icon: benefitIcons[i],
  }));

  return (
    <>
      <SEO
        title={t('jobWebBureau.seo.title')}
        description={t('jobWebBureau.seo.description')}
        canonical="/jobs/webudvikling-salg"
        keywords={t('jobWebBureau.seo.keywords')}
      />

      <HeroSection
        title={t('jobWebBureau.hero.title')}
        subtitle={t('jobWebBureau.hero.subtitle')}
        ctaText={t('jobWebBureau.hero.ctaText')}
        ctaLink="/kontakt"
        secondaryCtaText={t('jobWebBureau.hero.secondaryCtaText')}
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage="/heroes/hero-webdev.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('jobWebBureau.about.heading')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('jobWebBureau.about.paragraph1')}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {t('jobWebBureau.about.paragraph2')}
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
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold mb-6 text-blue-800">{t('jobWebBureau.keyFacts.heading')}</h3>
              <div className="space-y-4">
                {keyFactRows.map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-blue-100 last:border-0">
                    <span className="text-gray-600 text-sm">{row.label}</span>
                    <span className="font-semibold text-gray-900 text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/kontakt" className="w-full inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {t('jobWebBureau.keyFacts.applyButton')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('jobWebBureau.products.heading')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('jobWebBureau.products.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="mb-4">{item.icon}</div>
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
            <h2 className="text-3xl font-bold mb-4">{t('jobWebBureau.benefits.heading')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('jobWebBureau.benefits.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((item, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="flex justify-center mb-4">{item.icon}</div>
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
              <h2 className="text-2xl font-bold mb-6">{t('jobWebBureau.requirements.heading')}</h2>
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
              <h2 className="text-2xl font-bold mb-6">{t('jobWebBureau.howToApply.heading')}</h2>
              <p className="text-gray-600 mb-6">
                {t('jobWebBureau.howToApply.paragraph1')}
              </p>
              <p className="text-gray-600 mb-8">
                {t('jobWebBureau.howToApply.paragraph2')}
              </p>
              <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {t('jobWebBureau.howToApply.ctaText')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('jobWebBureau.finalCta.heading')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('jobWebBureau.finalCta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('jobWebBureau.finalCta.primaryCta')} <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/freelance-telemarketing" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              {t('jobWebBureau.finalCta.secondaryCta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
