import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Users, Target, BarChart3, CheckCircle, ArrowRight, MessageSquare, Building, Award, Sparkles, Code, Globe, CalendarCheck } from 'lucide-react';
import AiSolutionsSection from '../components/AiSolutionsSection';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

interface ServiceItem {
  title: string;
  description: string;
  features: string[];
}

interface IndustryItem {
  title: string;
  description: string;
  successStory: string;
  expertise: string[];
}

interface DigitalItem {
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  const serviceIcons = [
    <Phone className="w-12 h-12 text-blue-600" />,
    <Users className="w-12 h-12 text-blue-600" />,
    <Target className="w-12 h-12 text-blue-600" />,
    <MessageSquare className="w-12 h-12 text-blue-600" />,
  ];
  const services = (t('services.coreServices.items', { returnObjects: true }) as ServiceItem[]).map((service, index) => ({
    ...service,
    icon: serviceIcons[index],
  }));

  const industryIcons = [
    <Building className="w-12 h-12 text-blue-600" />,
    <Building className="w-12 h-12 text-blue-600" />,
    <Building className="w-12 h-12 text-blue-600" />,
    <Award className="w-12 h-12 text-blue-600" />,
  ];
  const industries = (t('services.industries.items', { returnObjects: true }) as IndustryItem[]).map((industry, index) => ({
    ...industry,
    icon: industryIcons[index],
  }));

  const digitalIcons = [
    <Sparkles size={28} className="text-blue-300" />,
    <Globe size={28} className="text-blue-300" />,
    <Code size={28} className="text-blue-300" />,
    <CalendarCheck size={28} className="text-blue-300" />,
  ];
  const digitalItems = (t('services.digitalSection.items', { returnObjects: true }) as DigitalItem[]).map((item, index) => ({
    ...item,
    icon: digitalIcons[index],
  }));

  const faqs = t('services.faqs', { returnObjects: true }) as FaqItem[];
  const info1List = t('services.info1.list', { returnObjects: true }) as string[];

  return (
    <>
      <SEO
        title={t('services.seo.title')}
        description={t('services.seo.description')}
        canonical="/ydelser"
        keywords={t('services.seo.keywords')}
      />

      <HeroSection
        title={t('services.hero.title')}
        subtitle={t('services.hero.subtitle')}
        ctaText={t('services.hero.ctaText')}
        ctaLink="/kontakt"
        secondaryCtaText={t('services.hero.secondaryCtaText')}
        secondaryCtaLink="/priser"
        backgroundImage="/heroes/hero-telesalg.jpg"
      />

      {/* Digital & AI – topsektion der fanger opmærksomheden */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              {t('services.digitalSection.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              {t('services.digitalSection.title')}
            </h2>
            <p className="text-lg text-white/70">
              {t('services.digitalSection.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {digitalItems.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/digital/webudvikling" className="btn btn-primary text-base px-8 py-4">
              {t('services.digitalSection.ctaPrimary')} <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link to="/kontakt" className="btn text-base px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white backdrop-blur-sm">
              {t('services.digitalSection.ctaSecondary')}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('services.coreServices.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('services.coreServices.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AiSolutionsSection />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('services.industries.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('services.industries.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <p className="text-blue-600 font-medium mb-4">{industry.successStory}</p>
                <ul className="space-y-2">
                  {industry.expertise.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('services.ctaBanner.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('services.ctaBanner.subtitle')}
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('services.ctaBanner.buttonText')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('services.info1.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('services.info1.p1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('services.info1.p2')}
            </p>
            <ul className="space-y-2">
              {info1List.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('services.info2.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('services.info2.p1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('services.info2.p2')}
            </p>
          </div>
        </div>
      </section>


      <FAQSection faqs={faqs} />
      <CTASection
        title={t('services.finalCta.title')}
        subtitle={t('services.finalCta.subtitle')}
        primaryText={t('services.finalCta.primaryText')}
        primaryLink="/kontakt"
        secondaryText={t('services.finalCta.secondaryText')}
        secondaryLink="/priser"
      />
    </>
  );
};

export default ServicesPage;
