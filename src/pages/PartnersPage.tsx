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
          <h2 className="text-3xl font-bold mb-6">{t('partners.midCta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('partners.midCta.subtitle')}
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('partners.midCta.cta')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('partners.info.section1.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('partners.info.section1.p1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('partners.info.section1.p2')}
            </p>
            <ul className="space-y-2">
              {(t('partners.info.section1.list', { returnObjects: true }) as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('partners.info.section2.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('partners.info.section2.p1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('partners.info.section2.p2')}
            </p>
          </div>
        </div>
      </section>

      <AiSolutionsSection />

      <FAQSection faqs={t('partners.faqExtra', { returnObjects: true }) as FaqItem[]} />
      <CTASection
        title={t('partners.finalCta.title')}
        subtitle={t('partners.finalCta.subtitle')}
        primaryText={t('partners.finalCta.primaryText')}
        primaryLink="/kontakt"
        secondaryText={t('partners.finalCta.secondaryText')}
        secondaryLink="/priser"
      />
    </>
  );
};

export default PartnersPage;
