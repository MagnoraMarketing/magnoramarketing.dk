import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Users, Code, ArrowRight, Briefcase, BarChart3, CheckCircle, TrendingUp, MessageSquare, Target, Zap, Bot, Cpu, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';
import HeroVisual from '../components/HeroVisual';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import CallingSystemSection from '../components/CallingSystemSection';
import { LatestArticles } from '../components/BlogPostParts';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const services = [
    { icon: <Phone size={40} className="text-blue-600" /> },
    { icon: <Users size={40} className="text-blue-600" /> },
    { icon: <Code size={40} className="text-blue-600" /> },
    { icon: <BarChart3 size={40} className="text-blue-600" /> },
  ];
  const serviceItems = t('home.services.items', { returnObjects: true }) as { title: string; description: string; features: string[] }[];

  const businessBenefits = t('home.growth.benefits', { returnObjects: true }) as string[];

  const industries = t('home.industriesSection.items', { returnObjects: true }) as { name: string; description: string }[];

  const aiFeatures = t('home.aiSection.features', { returnObjects: true }) as { title: string; desc: string }[];

  const seoChecklist = t('home.seoContent1.checklist', { returnObjects: true }) as string[];

  const faqs = t('home.faqs', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t('home.seo.title')}
        description={t('home.seo.description')}
        canonical="/"
        keywords={t('home.seo.keywords')}
      />

      <HeroSection
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        ctaText={t('home.hero.ctaPrimary')}
        ctaLink="/samarbejdspartner"
        secondaryCtaText={t('home.hero.ctaSecondary')}
        secondaryCtaLink="/freelance-telemarketing"
        visual={<HeroVisual />}
      />

      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-4">
            <span className="section-label">{t('home.process.label')}</span>
            <h2 className="text-3xl font-bold mb-4">{t('home.process.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
              {t('home.process.subtitle')}
            </p>
          </div>

          {/* Process simulation */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100 hidden md:block" />

              {[
                { step: '01', key: 'step1', icon: <MessageSquare size={22} className="text-white" />, color: 'bg-blue-600' },
                { step: '02', key: 'step2', icon: <Target size={22} className="text-white" />, color: 'bg-indigo-600' },
                { step: '03', key: 'step3', icon: <Zap size={22} className="text-white" />, color: 'bg-blue-700' },
                { step: '04', key: 'step4', icon: <TrendingUp size={22} className="text-white" />, color: 'bg-green-600' },
              ].map((s, i) => (
                <div key={i} className="relative flex gap-6 mb-8 last:mb-0">
                  <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center flex-shrink-0 shadow-lg z-10`}>
                    {s.icon}
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-bold text-slate-800 text-lg">{t(`home.process.${s.key}.title`)}</h3>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">{s.step}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{t(`home.process.${s.key}.desc`)}</p>
                    <div className="text-xs text-slate-400 font-medium">{t(`home.process.${s.key}.tag`)}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
              <p className="text-lg font-semibold mb-1">{t('home.process.finalCta.title')}</p>
              <p className="text-white/80 text-sm mb-6">{t('home.process.finalCta.subtitle')}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/kontakt" className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  {t('home.process.finalCta.primaryButton')} <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/ydelser" className="inline-flex items-center justify-center bg-white/10 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                  {t('home.process.finalCta.secondaryButton')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallingSystemSection />

      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('home.specialists.heading')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('home.specialists.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-6 flex flex-col items-center text-center fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{serviceItems[index]?.title}</h3>
                <p className="text-gray-600">{serviceItems[index]?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-integrationer & AI-løsninger – fremhævet fokus */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              {t('home.aiSection.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              {t('home.aiSection.heading')}
            </h2>
            <p className="text-lg text-white/70">
              {t('home.aiSection.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {[
              <Bot size={28} className="text-blue-300" />,
              <Clock size={28} className="text-blue-300" />,
              <TrendingUp size={28} className="text-blue-300" />,
              <Cpu size={28} className="text-blue-300" />,
            ].map((icon, i) => ({ icon, ...aiFeatures[i] })).map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/digital/ai-integration" className="btn btn-primary text-base px-8 py-4">
              {t('home.aiSection.primaryButton')} <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link to="/kontakt" className="btn text-base px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white backdrop-blur-sm">
              {t('home.aiSection.secondaryButton')}
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('home.growth.heading')}</h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('home.growth.description')}
              </p>
              <div className="space-y-4">
                {businessBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/kontakt" className="btn btn-primary inline-flex items-center">
                  {t('home.growth.ctaButton')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/heroes/hero-home.jpg"
                alt={t('home.growth.imageAlt')}
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-lg object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-xl font-semibold mb-2">{t('home.growth.statBadge.title')}</p>
                <p>{t('home.growth.statBadge.subtitle')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('home.industriesSection.heading')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('home.industriesSection.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-semibold mb-2 text-blue-600">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-8 border-b md:border-b-0 md:border-r border-gray-700">
              <Briefcase size={48} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">{t('home.audience.forCompanies.heading')}</h3>
              <p className="mb-6">
                {t('home.audience.forCompanies.description')}
              </p>
              <Link to="/samarbejdspartner" className="btn bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center">
                {t('home.audience.forCompanies.button')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="text-center p-8">
              <BarChart3 size={48} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">{t('home.audience.forSellers.heading')}</h3>
              <p className="mb-6">
                {t('home.audience.forSellers.description')}
              </p>
              <Link to="/freelance-telemarketing" className="btn bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center">
                {t('home.audience.forSellers.button')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('home.seoContent1.heading')}</h2>
            <p className="text-gray-600 mb-4">
              {t('home.seoContent1.paragraph1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('home.seoContent1.paragraph2')}
            </p>
            <ul className="space-y-2">
              {seoChecklist.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('home.seoContent2.heading')}</h2>
            <p className="text-gray-600 mb-4">
              {t('home.seoContent2.paragraph1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('home.seoContent2.paragraph2')}
            </p>
          </div>
        </div>
      </section>

      <LatestArticles />

      <FAQSection faqs={faqs} />
      <CTASection
        title={t('home.bottomCta.title')}
        subtitle={t('home.bottomCta.subtitle')}
        primaryText={t('home.bottomCta.primaryText')}
        primaryLink="/samarbejdspartner"
        secondaryText={t('home.bottomCta.secondaryText')}
        secondaryLink="/priser"
      />
    </>
  );
};

export default HomePage;
