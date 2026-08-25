import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, PiggyBank, Home, Laptop, Globe, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';

export default function RemoteWorkPage() {
  const { t } = useTranslation();

  const introFeatureIcons = [
    <Home size={40} className="text-blue-600" />,
    <Laptop size={40} className="text-blue-600" />,
    <Globe size={40} className="text-blue-600" />,
  ];
  const introFeatures = (t('jobRemoteWork.intro.features', { returnObjects: true }) as { title: string; desc: string }[]).map((item, i) => ({
    ...item,
    icon: introFeatureIcons[i],
  }));

  const productItems = t('jobRemoteWork.chooseProduct.items', { returnObjects: true }) as { label: string; link: string }[];

  const benefitIcons = [
    <PiggyBank size={40} className="text-blue-600" />,
    <Users size={40} className="text-blue-600" />,
    <Clock size={40} className="text-blue-600" />,
    <Laptop size={40} className="text-blue-600" />,
  ];
  const benefits = (t('jobRemoteWork.benefits.items', { returnObjects: true }) as { title: string; desc: string }[]).map((item, i) => ({
    ...item,
    icon: benefitIcons[i],
  }));

  const requirements = t('jobRemoteWork.requirements.items', { returnObjects: true }) as string[];
  const longSection1Bullets = t('jobRemoteWork.longSection1.bullets', { returnObjects: true }) as string[];
  const faqs = t('jobRemoteWork.faqs', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t('jobRemoteWork.seo.title')}
        description={t('jobRemoteWork.seo.description')}
        canonical="/jobs/arbejd-hjemmefra"
        keywords={t('jobRemoteWork.seo.keywords')}
      />

      <HeroSection
        title={t('jobRemoteWork.hero.title')}
        subtitle={t('jobRemoteWork.hero.subtitle')}
        ctaText={t('jobRemoteWork.hero.ctaText')}
        ctaLink="/freelance-telemarketing"
        secondaryCtaText={t('jobRemoteWork.hero.secondaryCtaText')}
        secondaryCtaLink="/kontakt"
        backgroundImage="/heroes/hero-jobs.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('jobRemoteWork.intro.heading')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('jobRemoteWork.intro.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {introFeatures.map((item, i) => (
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
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('jobRemoteWork.chooseProduct.heading')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('jobRemoteWork.chooseProduct.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productItems.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <CheckCircle className="text-blue-500 flex-shrink-0 group-hover:text-blue-600" size={18} />
                <span className="text-gray-700 group-hover:text-blue-600 font-medium text-sm">{item.label}</span>
                <ArrowRight className="ml-auto text-gray-300 group-hover:text-blue-500" size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('jobRemoteWork.benefits.heading')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {benefits.map((item, i) => (
              <div key={i} className="flex gap-5 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('jobRemoteWork.requirements.heading')}</h2>
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
              <h2 className="text-2xl font-bold mb-6">{t('jobRemoteWork.gettingStarted.heading')}</h2>
              <p className="text-gray-600 mb-4">
                {t('jobRemoteWork.gettingStarted.paragraph1')}
              </p>
              <p className="text-gray-600 mb-8">{t('jobRemoteWork.gettingStarted.paragraph2')}</p>
              <div className="flex flex-col gap-3">
                <Link to="/freelance-telemarketing" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {t('jobRemoteWork.gettingStarted.primaryCta')} <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/kontakt" className="inline-flex items-center border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  {t('jobRemoteWork.gettingStarted.secondaryCta')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('jobRemoteWork.longSection1.heading')}</h2>
            <p className="text-gray-600 mb-4">
              {t('jobRemoteWork.longSection1.paragraph1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('jobRemoteWork.longSection1.paragraph2')}
            </p>
            <ul className="space-y-2">
              {longSection1Bullets.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('jobRemoteWork.longSection2.heading')}</h2>
            <p className="text-gray-600 mb-4">
              {t('jobRemoteWork.longSection2.paragraph1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('jobRemoteWork.longSection2.paragraph2')}
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('jobRemoteWork.finalCta.heading')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('jobRemoteWork.finalCta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/freelance-telemarketing" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('jobRemoteWork.finalCta.primaryCta')} <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/kontakt" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              {t('jobRemoteWork.finalCta.secondaryCta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
