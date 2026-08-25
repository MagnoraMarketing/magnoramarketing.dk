import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MessageSquare, ArrowRight, Zap, Clock, Bot, Shield, Mic, Languages, CalendarCheck, Wallet, Building2 } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';

export default function AiWidgetPage() {
  const { t } = useTranslation();

  const capabilityIcons = [
    <Mic size={16} />,
    <MessageSquare size={16} />,
    <CalendarCheck size={16} />,
    <Languages size={16} />,
  ];

  const featureIcons = [
    <Mic size={36} className="text-blue-600" />,
    <CalendarCheck size={36} className="text-blue-600" />,
    <Clock size={36} className="text-blue-600" />,
    <MessageSquare size={36} className="text-blue-600" />,
    <Shield size={36} className="text-blue-600" />,
    <Languages size={36} className="text-blue-600" />,
    <Zap size={36} className="text-blue-600" />,
    <Bot size={36} className="text-blue-600" />,
    <Wallet size={36} className="text-blue-600" />,
  ];

  const capabilities = t('digitalAiWidget.whatIsIt.capabilities', { returnObjects: true }) as string[];
  const features = t('digitalAiWidget.features.items', { returnObjects: true }) as { title: string; description: string }[];
  const useCases = t('digitalAiWidget.useCases.items', { returnObjects: true }) as { title: string; desc: string }[];
  const steps = t('digitalAiWidget.howItWorks.steps', { returnObjects: true }) as { title: string; desc: string }[];
  const roiStats = t('digitalAiWidget.roi.stats', { returnObjects: true }) as { value: string; label: string }[];
  const faqs = t('digitalAiWidget.faqs', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t('digitalAiWidget.seo.title')}
        description={t('digitalAiWidget.seo.description')}
        canonical="/digital/ai-widget"
        keywords={t('digitalAiWidget.seo.keywords')}
      />

      <HeroSection
        title={t('digitalAiWidget.hero.title')}
        subtitle={t('digitalAiWidget.hero.subtitle')}
        ctaText={t('digitalAiWidget.hero.ctaText')}
        ctaLink="/kontakt"
        secondaryCtaText={t('digitalAiWidget.hero.secondaryCtaText')}
        secondaryCtaLink="/priser"
        backgroundImage="/heroes/hero-voice.jpg"
      />

      {/* What is it */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">{t('digitalAiWidget.whatIsIt.label')}</span>
              <h2 className="mb-6">{t('digitalAiWidget.whatIsIt.title')}</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {t('digitalAiWidget.whatIsIt.paragraph1')}
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {t('digitalAiWidget.whatIsIt.paragraph2')}
              </p>
              <p className="text-slate-800 font-semibold mb-8 leading-relaxed">
                {t('digitalAiWidget.whatIsIt.paragraph3')}
              </p>
              <div className="flex flex-wrap gap-3">
                {capabilities.map((c, i) => (
                  <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
                    {capabilityIcons[i]} {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Voice widget mockup */}
            <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                  <Mic size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">{t('digitalAiWidget.whatIsIt.mockup.assistantName')}</div>
                  <div className="text-xs text-green-500 font-medium flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" /> {t('digitalAiWidget.whatIsIt.mockup.statusListening')}</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-slate-100 text-slate-700 rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-[85%] ml-auto flex items-center gap-2">
                  <Mic size={14} className="text-blue-600 flex-shrink-0" /> "{t('digitalAiWidget.whatIsIt.mockup.userMessage1')}"
                </div>
                <div className="bg-blue-600 text-white rounded-2xl rounded-tl-sm px-4 py-3 text-sm max-w-[85%]">
                  {t('digitalAiWidget.whatIsIt.mockup.aiMessage1')}
                </div>
                <div className="bg-slate-100 text-slate-700 rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-[85%] ml-auto flex items-center gap-2">
                  <Mic size={14} className="text-blue-600 flex-shrink-0" /> "{t('digitalAiWidget.whatIsIt.mockup.userMessage2')}"
                </div>
                <div className="bg-blue-600 text-white rounded-2xl rounded-tl-sm px-4 py-3 text-sm max-w-[85%]">
                  {t('digitalAiWidget.whatIsIt.mockup.aiMessage2')}
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="flex items-center gap-1">
                  {[3, 5, 8, 6, 9, 5, 7, 4, 6, 8, 5, 3].map((h, i) => (
                    <span key={i} className="w-1 rounded-full bg-blue-500/70" style={{ height: `${h * 3}px` }} />
                  ))}
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Mic size={20} className="text-white" />
                </div>
                <div className="flex items-center gap-1">
                  {[4, 7, 5, 9, 6, 8, 4, 6, 9, 5, 7, 3].map((h, i) => (
                    <span key={i} className="w-1 rounded-full bg-blue-500/70" style={{ height: `${h * 3}px` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-sky-50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">{t('digitalAiWidget.howItWorks.label')}</span>
            <h2 className="mb-4">{t('digitalAiWidget.howItWorks.title')}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">{t('digitalAiWidget.howItWorks.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="card p-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-5">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-bold text-slate-800 mb-2 text-lg">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/kontakt" className="btn btn-primary inline-flex">
              {t('digitalAiWidget.howItWorks.ctaLabel')} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">{t('digitalAiWidget.features.label')}</span>
            <h2 className="mb-4">{t('digitalAiWidget.features.title')}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">{t('digitalAiWidget.features.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card p-8">
                <div className="mb-4">{featureIcons[i]}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section bg-sky-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">{t('digitalAiWidget.useCases.label')}</span>
            <h2 className="mb-4">{t('digitalAiWidget.useCases.title')}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">{t('digitalAiWidget.useCases.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((u, i) => (
              <div key={i} className="flex items-start gap-4 p-6 card bg-white">
                <Building2 size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-slate-800 mb-1">{u.title}</div>
                  <div className="text-sm text-slate-500">{u.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="section bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-white mb-4">{t('digitalAiWidget.roi.title')}</h2>
            <p
              className="text-white/80 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('digitalAiWidget.roi.descriptionHtml') }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            {roiStats.map((s, i) => (
              <div key={i}>
                <div className="text-5xl font-black mb-2">{s.value}</div>
                <div className="text-white/70 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={t('digitalAiWidget.faqTitle')} />

      <CTASection
        title={t('digitalAiWidget.cta.title')}
        subtitle={t('digitalAiWidget.cta.subtitle')}
        primaryText={t('digitalAiWidget.cta.primaryText')}
        primaryLink="/kontakt"
        secondaryText={t('digitalAiWidget.cta.secondaryText')}
        secondaryLink="/digital/ai-integration"
      />
    </>
  );
}
