import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Target, CheckCircle, ArrowRight, BarChart3, Database, Zap } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

interface ProcessItem {
  title: string;
  desc: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const LeadGenerationPage: React.FC = () => {
  const { t } = useTranslation();

  const processIcons = [
    <Target className="w-12 h-12 text-blue-600" />,
    <Database className="w-12 h-12 text-blue-600" />,
    <Zap className="w-12 h-12 text-blue-600" />,
  ];
  const processItems = t('leadGeneration.process.items', { returnObjects: true }) as ProcessItem[];

  const whyItems = t('leadGeneration.why.items', { returnObjects: true }) as string[];
  const deliverItems = t('leadGeneration.why.deliverItems', { returnObjects: true }) as string[];
  const infoList = t('leadGeneration.info.section1.list', { returnObjects: true }) as string[];
  const faqItems = t('leadGeneration.faq.items', { returnObjects: true }) as FaqItem[];

  return (
    <>
      <SEO
        title={t('leadGeneration.seo.title')}
        description={t('leadGeneration.seo.description')}
        canonical="/leadgenerering"
        keywords={t('leadGeneration.seo.keywords')}
      />

      <HeroSection
        title={t('leadGeneration.hero.title')}
        subtitle={t('leadGeneration.hero.subtitle')}
        ctaText={t('leadGeneration.hero.cta')}
        ctaLink="/kontakt"
        secondaryCtaText={t('leadGeneration.hero.secondaryCta')}
        secondaryCtaLink="/priser"
        backgroundImage="/heroes/hero-leadgen.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('leadGeneration.process.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('leadGeneration.process.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processItems.map((item, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">{processIcons[i]}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('leadGeneration.why.title')}</h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('leadGeneration.why.subtitle')}
              </p>
              <div className="space-y-4 mb-8">
                {whyItems.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/kontakt" className="btn btn-primary inline-flex items-center">
                {t('leadGeneration.why.cta')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <BarChart3 className="w-16 h-16 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{t('leadGeneration.why.deliverTitle')}</h3>
                <ul className="space-y-3">
                  {deliverItems.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('leadGeneration.midCta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('leadGeneration.midCta.subtitle')}
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('leadGeneration.midCta.cta')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('leadGeneration.info.section1.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('leadGeneration.info.section1.p1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('leadGeneration.info.section1.p2')}
            </p>
            <ul className="space-y-2">
              {infoList.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('leadGeneration.info.section2.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('leadGeneration.info.section2.p1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('leadGeneration.info.section2.p2')}
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqItems} />
      <CTASection
        title={t('leadGeneration.finalCta.title')}
        subtitle={t('leadGeneration.finalCta.subtitle')}
        primaryText={t('leadGeneration.finalCta.primaryText')}
        primaryLink="/kontakt"
        secondaryText={t('leadGeneration.finalCta.secondaryText')}
        secondaryLink="/priser"
      />
    </>
  );
};

export default LeadGenerationPage;
