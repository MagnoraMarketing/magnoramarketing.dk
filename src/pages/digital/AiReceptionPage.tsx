import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, ArrowRight, Mic, Clock, MessageSquare, Bot, Calendar, Headphones, BarChart3 } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';

export default function AiReceptionPage() {
  const { t } = useTranslation();

  const featureIcons = [
    <Mic size={36} className="text-blue-600" />,
    <Clock size={36} className="text-blue-600" />,
    <Calendar size={36} className="text-blue-600" />,
    <Bot size={36} className="text-blue-600" />,
    <MessageSquare size={36} className="text-blue-600" />,
    <BarChart3 size={36} className="text-blue-600" />,
  ];

  const problemPoints = t('digitalAiReception.problem.points', { returnObjects: true }) as string[];
  const callLines = t('digitalAiReception.simulatedCall.lines', { returnObjects: true }) as { speaker: string; text: string }[];
  const featureItems = t('digitalAiReception.features.items', { returnObjects: true }) as { title: string; description: string }[];
  const comparisonRows = t('digitalAiReception.comparison.rows', { returnObjects: true }) as { feature: string; ai: string; human: string }[];
  const faqs = t('digitalAiReception.faq.items', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t('digitalAiReception.seo.title')}
        description={t('digitalAiReception.seo.description')}
        canonical="/digital/ai-reception"
        keywords={t('digitalAiReception.seo.keywords')}
      />

      <HeroSection
        title={t('digitalAiReception.hero.title')}
        subtitle={t('digitalAiReception.hero.subtitle')}
        ctaText={t('digitalAiReception.hero.ctaText')}
        ctaLink="/kontakt"
        secondaryCtaText={t('digitalAiReception.hero.secondaryCtaText')}
        secondaryCtaLink="/digital/ai-widget"
        backgroundImage="/heroes/hero-voice.jpg"
      />

      {/* Problem / Solution */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">{t('digitalAiReception.problem.label')}</span>
              <h2 className="mb-6">{t('digitalAiReception.problem.title')}</h2>
              <p className="text-slate-500 mb-5 leading-relaxed">
                {t('digitalAiReception.problem.paragraph1')}
              </p>
              <p
                className="text-slate-500 mb-8 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('digitalAiReception.problem.paragraph2Html') }}
              />
              <div className="space-y-3">
                {problemPoints.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {/* Simulated call */}
              <div className="bg-slate-900 rounded-3xl p-6 text-white font-mono text-sm">
                <div className="flex items-center gap-2 mb-5 text-slate-400 text-xs">
                  <Headphones size={14} />
                  <span>{t('digitalAiReception.simulatedCall.label')}</span>
                  <span className="ml-auto text-green-400">● {t('digitalAiReception.simulatedCall.status')}</span>
                </div>
                <div className="space-y-3">
                  {callLines.map((line, i) => (
                    <div key={i} className="flex gap-3">
                      <span className={`flex-shrink-0 ${line.speaker === 'ai' ? 'text-blue-400' : 'text-green-400'}`}>
                        {line.speaker === 'ai' ? t('digitalAiReception.simulatedCall.aiLabel') : t('digitalAiReception.simulatedCall.callerLabel')}
                      </span>
                      <span className="text-slate-300">{line.text}</span>
                    </div>
                  ))}
                  <div className="mt-4 pt-4 border-t border-slate-700 text-slate-500 text-xs flex items-center gap-2">
                    <Calendar size={12} />
                    {t('digitalAiReception.simulatedCall.footerNote')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-sky-50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">{t('digitalAiReception.features.label')}</span>
            <h2 className="mb-4">{t('digitalAiReception.features.title')}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">{t('digitalAiReception.features.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureItems.map((f, i) => (
              <div key={i} className="card p-8 bg-white">
                <div className="mb-4">{featureIcons[i]}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="section-label">{t('digitalAiReception.comparison.label')}</span>
            <h2 className="mb-4">{t('digitalAiReception.comparison.title')}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 pr-6 text-slate-500 font-medium"></th>
                  <th className="py-4 px-6 text-blue-600 font-bold text-center bg-blue-50 rounded-t-xl">{t('digitalAiReception.comparison.headerAi')}</th>
                  <th className="py-4 px-6 text-slate-600 font-bold text-center">{t('digitalAiReception.comparison.headerHuman')}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="py-4 pr-6 text-slate-700 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center bg-blue-50 text-blue-700 font-semibold">{row.ai}</td>
                    <td className="py-4 px-6 text-center text-slate-500">{row.human}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Link to="/kontakt" className="btn btn-primary">
              {t('digitalAiReception.comparison.ctaText')} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={t('digitalAiReception.faq.title')} />

      <CTASection
        title={t('digitalAiReception.ctaSection.title')}
        subtitle={t('digitalAiReception.ctaSection.subtitle')}
        primaryText={t('digitalAiReception.ctaSection.primaryText')}
        primaryLink="/kontakt"
        secondaryText={t('digitalAiReception.ctaSection.secondaryText')}
        secondaryLink="/digital/ai-widget"
      />
    </>
  );
}
