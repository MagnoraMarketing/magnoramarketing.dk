import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, CheckCircle, ArrowRight, Users, BarChart3, Shield } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

interface FeatureItem {
  title: string;
  description: string;
}

interface StepItem {
  title: string;
  desc: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const MeetingBookingPage: React.FC = () => {
  const { t } = useTranslation();

  const featureIcons = [
    <Calendar className="w-12 h-12 text-blue-600" />,
    <Users className="w-12 h-12 text-blue-600" />,
    <BarChart3 className="w-12 h-12 text-blue-600" />,
    <Shield className="w-12 h-12 text-blue-600" />,
  ];
  const features = t('meetingBooking.features.items', { returnObjects: true }) as FeatureItem[];

  const steps = t('meetingBooking.process.steps', { returnObjects: true }) as StepItem[];
  const includesItems = t('meetingBooking.process.includesItems', { returnObjects: true }) as string[];
  const infoList = t('meetingBooking.info.section1.list', { returnObjects: true }) as string[];
  const faqItems = t('meetingBooking.faq.items', { returnObjects: true }) as FaqItem[];

  return (
    <>
      <SEO
        title={t('meetingBooking.seo.title')}
        description={t('meetingBooking.seo.description')}
        canonical="/modebooking-priser"
        keywords={t('meetingBooking.seo.keywords')}
      />

      <HeroSection
        title={t('meetingBooking.hero.title')}
        subtitle={t('meetingBooking.hero.subtitle')}
        ctaText={t('meetingBooking.hero.cta')}
        ctaLink="/priser"
        secondaryCtaText={t('meetingBooking.hero.secondaryCta')}
        secondaryCtaLink="/kontakt"
        backgroundImage="/heroes/hero-moedebooking.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('meetingBooking.features.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('meetingBooking.features.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">{featureIcons[index]}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('meetingBooking.process.title')}</h2>
              <div className="space-y-6">
                {steps.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/kontakt" className="btn btn-primary inline-flex items-center">
                  {t('meetingBooking.process.cta')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4">{t('meetingBooking.process.includesTitle')}</h3>
                <ul className="space-y-3">
                  {includesItems.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                      <span>{item}</span>
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
          <h2 className="text-3xl font-bold mb-6">{t('meetingBooking.midCta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('meetingBooking.midCta.subtitle')}
          </p>
          <Link to="/priser" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('meetingBooking.midCta.cta')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('meetingBooking.info.section1.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('meetingBooking.info.section1.p1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('meetingBooking.info.section1.p2')}
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
            <h2 className="text-3xl font-bold mb-6">{t('meetingBooking.info.section2.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('meetingBooking.info.section2.p1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('meetingBooking.info.section2.p2')}
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqItems} />
      <CTASection
        title={t('meetingBooking.finalCta.title')}
        subtitle={t('meetingBooking.finalCta.subtitle')}
        primaryText={t('meetingBooking.finalCta.primaryText')}
        primaryLink="/kontakt"
        secondaryText={t('meetingBooking.finalCta.secondaryText')}
        secondaryLink="/priser"
      />
    </>
  );
};

export default MeetingBookingPage;
