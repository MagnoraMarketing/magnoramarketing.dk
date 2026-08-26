import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, ArrowRight, TrendingUp, Clock, Shield, Users, BarChart3, Zap, Sparkles, Code, Globe, Phone, Repeat, HeartHandshake } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';

interface TextItem {
  title: string;
  desc: string;
}

interface ReasonItem {
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const OutsourcingPage: React.FC = () => {
  const { t } = useTranslation();

  const reasonIcons = [
    <TrendingUp className="w-12 h-12 text-blue-600" />,
    <Clock className="w-12 h-12 text-blue-600" />,
    <Shield className="w-12 h-12 text-blue-600" />,
    <Users className="w-12 h-12 text-blue-600" />,
    <BarChart3 className="w-12 h-12 text-blue-600" />,
    <Zap className="w-12 h-12 text-blue-600" />,
  ];
  const reasons = t('outsourcing.reasons.items', { returnObjects: true }) as ReasonItem[];

  const longTermIcons = [
    <Repeat size={28} className="text-blue-300" />,
    <HeartHandshake size={28} className="text-blue-300" />,
    <Users size={28} className="text-blue-300" />,
  ];
  const longTermItems = t('outsourcing.longTerm.items', { returnObjects: true }) as TextItem[];

  const competencyMeta = [
    { icon: <Globe size={28} className="text-blue-600" />, link: '/digital/hjemmesider' },
    { icon: <Sparkles size={28} className="text-blue-600" />, link: '/digital/ai-integration' },
    { icon: <Phone size={28} className="text-blue-600" />, link: '/ydelser' },
    { icon: <Code size={28} className="text-blue-600" />, link: '/digital/webudvikling' },
    { icon: <TrendingUp size={28} className="text-blue-600" />, link: '/ydelser' },
    { icon: <HeartHandshake size={28} className="text-blue-600" />, link: '/kontakt' },
  ];
  const competencyItems = t('outsourcing.competencies.items', { returnObjects: true }) as TextItem[];

  const comparisonItems = t('outsourcing.comparison.items', { returnObjects: true }) as string[];
  const infoList1 = t('outsourcing.info.section1.list', { returnObjects: true }) as string[];
  const infoList2 = t('outsourcing.info.section2.list', { returnObjects: true }) as string[];
  const faqItems = t('outsourcing.faq.items', { returnObjects: true }) as FaqItem[];

  return (
    <>
      <SEO
        title={t('outsourcing.seo.title')}
        description={t('outsourcing.seo.description')}
        canonical="/hvorfor-os"
        keywords={t('outsourcing.seo.keywords')}
      />

      <HeroSection
        title={t('outsourcing.hero.title')}
        subtitle={t('outsourcing.hero.subtitle')}
        ctaText={t('outsourcing.hero.cta')}
        ctaLink="/kontakt"
        secondaryCtaText={t('outsourcing.hero.secondaryCta')}
        secondaryCtaLink="/priser"
        backgroundImage="/heroes/hero-partner.jpg"
      />

      {/* Langsigtet samarbejde – kernebudskab */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              {t('outsourcing.longTerm.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              {t('outsourcing.longTerm.title')}
            </h2>
            <p className="text-lg text-white/70">
              {t('outsourcing.longTerm.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {longTermItems.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  {longTermIcons[i]}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vores kompetencer */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">{t('outsourcing.competencies.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('outsourcing.competencies.title')}</h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              {t('outsourcing.competencies.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {competencyItems.map((item, i) => (
              <Link key={i} to={competencyMeta[i].link} className="card p-7 flex flex-col group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                  {competencyMeta[i].icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 flex-grow">{item.desc}</p>
                <span className="mt-4 inline-flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                  {t('outsourcing.competencies.readMore')} <ArrowRight size={15} className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('outsourcing.reasons.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('outsourcing.reasons.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-lg">
                <div className="mb-4">{reasonIcons[index]}</div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('outsourcing.comparison.title')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('outsourcing.comparison.p1')}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t('outsourcing.comparison.p2')}
              </p>
              <div className="space-y-3 mb-8">
                {comparisonItems.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/kontakt" className="btn btn-primary inline-flex items-center">
                {t('outsourcing.comparison.cta')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-center">{t('outsourcing.comparison.formTitle')}</h3>
                <ContactForm presetTopic="Pris på Mødebooking / Telesalg" sourceLabel="Hvorfor Magnora-siden" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('outsourcing.midCta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('outsourcing.midCta.subtitle')}
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('outsourcing.midCta.cta')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('outsourcing.info.section1.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('outsourcing.info.section1.p1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('outsourcing.info.section1.p2')}
            </p>
            <ul className="space-y-2">
              {infoList1.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('outsourcing.info.section2.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('outsourcing.info.section2.p1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('outsourcing.info.section2.p2')}
            </p>
            <ul className="space-y-2 mb-4">
              {infoList2.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> {item}</li>
              ))}
            </ul>
            <p className="text-gray-600 mb-4">
              {t('outsourcing.info.section2.p3')}
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqItems} />
      <CTASection
        title={t('outsourcing.finalCta.title')}
        subtitle={t('outsourcing.finalCta.subtitle')}
        primaryText={t('outsourcing.finalCta.primaryText')}
        primaryLink="/kontakt"
        secondaryText={t('outsourcing.finalCta.secondaryText')}
        secondaryLink="/priser"
      />
    </>
  );
};

export default OutsourcingPage;
