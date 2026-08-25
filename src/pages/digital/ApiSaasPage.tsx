import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Settings, CheckCircle, ArrowRight, RefreshCw, Lock, Layers, Globe } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';

export default function ApiSaasPage() {
  const { t } = useTranslation();

  const features = [
    { icon: <Settings size={36} className="text-blue-600" /> },
    { icon: <RefreshCw size={36} className="text-blue-600" /> },
    { icon: <Layers size={36} className="text-blue-600" /> },
    { icon: <Lock size={36} className="text-blue-600" /> }
  ];

  const useCases = t('digitalApiSaas.useCases', { returnObjects: true }) as string[];

  return (
    <>
      <SEO
        title={t('digitalApiSaas.seo.title')}
        description={t('digitalApiSaas.seo.description')}
        canonical="/digital/api-saas"
        keywords={t('digitalApiSaas.seo.keywords')}
      />

      <HeroSection
        title={t('digitalApiSaas.hero.title')}
        subtitle={t('digitalApiSaas.hero.subtitle')}
        ctaText={t('digitalApiSaas.hero.cta')}
        ctaLink="/kontakt"
        backgroundImage="/heroes/hero-webdev.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('digitalApiSaas.offerings.heading')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('digitalApiSaas.offerings.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="flex gap-5 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t(`digitalApiSaas.features.${i}.title`)}</h3>
                  <p className="text-gray-600">{t(`digitalApiSaas.features.${i}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/heroes/hero-webdev.jpg"
                alt={t('digitalApiSaas.integrations.imageAlt')}
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('digitalApiSaas.integrations.heading')}</h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('digitalApiSaas.integrations.subtitle')}
              </p>
              <ul className="space-y-3">
                {useCases.map((u, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {t('digitalApiSaas.integrations.cta')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe size={48} className="text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">{t('digitalApiSaas.scalable.heading')}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('digitalApiSaas.scalable.subtitle')}
            </p>
            <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              {t('digitalApiSaas.scalable.cta')} <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('digitalApiSaas.midCta.heading')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('digitalApiSaas.midCta.subtitle')}
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('digitalApiSaas.midCta.cta')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('digitalApiSaas.article1.heading')}</h2>
            <p className="text-gray-600 mb-4">
              {t('digitalApiSaas.article1.p1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('digitalApiSaas.article1.p2')}
            </p>
            <ul className="space-y-2">
              {(t('digitalApiSaas.article1.list', { returnObjects: true }) as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('digitalApiSaas.article2.heading')}</h2>
            <p className="text-gray-600 mb-4">
              {t('digitalApiSaas.article2.p1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('digitalApiSaas.article2.p2')}
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={t('digitalApiSaas.faqs', { returnObjects: true }) as { question: string; answer: string }[]} />
      <CTASection
        title={t('digitalApiSaas.finalCta.title')}
        subtitle={t('digitalApiSaas.finalCta.subtitle')}
        primaryText={t('digitalApiSaas.finalCta.primaryText')}
        primaryLink="/kontakt"
      />
    </>
  );
}
