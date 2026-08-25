import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Cpu, CheckCircle, ArrowRight, Bot, Zap, BarChart3, MessageSquare, Users, Calendar, TrendingUp, Clock, Shield, Star } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';
import AiSolutionsSection from '../../components/AiSolutionsSection';

interface TextItem {
  title: string;
  description?: string;
  desc?: string;
}

interface AiTool {
  tag: string;
  description: string;
  features: string[];
  example: string;
}

interface WorkflowStep {
  step: string;
  label: string;
  desc: string;
}

interface Workflow {
  title: string;
  industry: string;
  steps: WorkflowStep[];
}

interface Faq {
  question: string;
  answer: string;
}

export default function AiIntegrationPage() {
  const { t } = useTranslation();
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  const featureIcons = [
    <Bot size={36} className="text-blue-600" />,
    <Zap size={36} className="text-blue-600" />,
    <BarChart3 size={36} className="text-blue-600" />,
    <MessageSquare size={36} className="text-blue-600" />,
  ];
  const features = t('digitalAiIntegration.features.items', { returnObjects: true }) as TextItem[];

  const benefitIcons = [
    <Clock size={32} className="text-blue-600" />,
    <TrendingUp size={32} className="text-blue-600" />,
    <Users size={32} className="text-blue-600" />,
    <Shield size={32} className="text-blue-600" />,
    <BarChart3 size={32} className="text-blue-600" />,
    <Zap size={32} className="text-blue-600" />,
  ];
  const benefits = t('digitalAiIntegration.benefits.items', { returnObjects: true }) as TextItem[];

  const aiToolsMeta = [
    { name: 'AIbooking.dk', color: 'blue', icon: <Calendar size={32} className="text-blue-600" /> },
    { name: 'Leadgenie.dk', color: 'green', icon: <Users size={32} className="text-green-600" /> },
  ];
  const aiTools = t('digitalAiIntegration.aiTools.tools', { returnObjects: true }) as AiTool[];

  const workflows = t('digitalAiIntegration.workflows.items', { returnObjects: true }) as Workflow[];

  const useCases = t('digitalAiIntegration.useCases.items', { returnObjects: true }) as string[];

  const buildProjectIcons = [
    <Cpu size={36} className="text-blue-300" />,
    <Star size={36} className="text-blue-300" />,
    <Calendar size={36} className="text-blue-300" />,
  ];
  const buildProjectItems = t('digitalAiIntegration.buildProject.items', { returnObjects: true }) as TextItem[];
  const pricingItems = t('digitalAiIntegration.buildProject.pricingItems', { returnObjects: true }) as string[];

  const whyUsItems = t('digitalAiIntegration.whyUs.items', { returnObjects: true }) as TextItem[];

  const seoListItems = t('digitalAiIntegration.seoContent1.listItems', { returnObjects: true }) as string[];

  const faqs = t('digitalAiIntegration.faqs', { returnObjects: true }) as Faq[];

  return (
    <>
      <SEO
        title={t('digitalAiIntegration.seo.title')}
        description={t('digitalAiIntegration.seo.description')}
        canonical="/digital/ai-integration"
        keywords={t('digitalAiIntegration.seo.keywords')}
      />

      <HeroSection
        title={t('digitalAiIntegration.hero.title')}
        subtitle={t('digitalAiIntegration.hero.subtitle')}
        ctaText={t('digitalAiIntegration.hero.ctaText')}
        ctaLink="/kontakt"
        backgroundImage="/heroes/hero-ai.jpg"
      />

      {/* Vi bygger dit AI-projekt – klar til lancering */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">{t('digitalAiIntegration.buildProject.badge')}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('digitalAiIntegration.buildProject.title')}
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                {t('digitalAiIntegration.buildProject.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {buildProjectItems.map((item, i) => (
                <div key={i} className="bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all">
                  <div className="mb-4">{buildProjectIcons[i]}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{t('digitalAiIntegration.buildProject.pricingTitle')}</h3>
                <ul className="space-y-2 text-blue-100">
                  {pricingItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0 text-center">
                <p className="text-blue-200 text-sm mb-3">{t('digitalAiIntegration.buildProject.ctaNote')}</p>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                >
                  {t('digitalAiIntegration.buildProject.ctaButton')} <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fordele ved AI integration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('digitalAiIntegration.benefits.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('digitalAiIntegration.benefits.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="mb-4">{benefitIcons[i]}</div>
                <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-løsninger vi integrerer */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('digitalAiIntegration.aiTools.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('digitalAiIntegration.aiTools.subtitle')}
            </p>
          </div>
          <div className="space-y-12 max-w-5xl mx-auto">
            {aiTools.map((tool, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`p-6 ${i === 0 ? 'bg-blue-600' : 'bg-emerald-600'} text-white`}>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 rounded-xl p-3">{aiToolsMeta[i].icon}</div>
                    <div>
                      <span className="text-sm font-medium opacity-80">{tool.tag}</span>
                      <h3 className="text-2xl font-bold">{aiToolsMeta[i].name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 text-lg mb-6">{tool.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">{t('digitalAiIntegration.aiTools.featuresLabel')}</h4>
                      <ul className="space-y-2">
                        {tool.features.map((f, fi) => (
                          <li key={fi} className="flex items-start">
                            <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-gray-700 text-sm">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`rounded-xl p-5 ${i === 0 ? 'bg-blue-50 border border-blue-100' : 'bg-emerald-50 border border-emerald-100'}`}>
                      <div className="flex items-center gap-2 mb-3">
                        <Star size={16} className={i === 0 ? 'text-blue-600' : 'text-emerald-600'} />
                        <span className="font-semibold text-sm">{t('digitalAiIntegration.aiTools.exampleLabel')}</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{tool.example}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link to="/kontakt" className={`inline-flex items-center px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${i === 0 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}>
                      {t('digitalAiIntegration.aiTools.ctaLabel', { name: aiToolsMeta[i].name })} <ArrowRight size={14} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Workflow eksempler */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('digitalAiIntegration.workflows.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('digitalAiIntegration.workflows.subtitle')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Tab navigation */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {workflows.map((w, i) => (
                <button
                  key={i}
                  onClick={() => setActiveWorkflow(i)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${activeWorkflow === i ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {w.industry}
                </button>
              ))}
            </div>

            {/* Active workflow */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">{workflows[activeWorkflow].title}</h3>
              <div className="space-y-4">
                {workflows[activeWorkflow].steps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-1">{step.label}</h4>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                    {i < workflows[activeWorkflow].steps.length - 1 && (
                      <div className="absolute ml-4 mt-10 w-0.5 h-4 bg-blue-200 hidden" />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {t('digitalAiIntegration.workflows.ctaLabel')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kerneydelser */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('digitalAiIntegration.features.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('digitalAiIntegration.features.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="flex gap-5 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex-shrink-0">{featureIcons[i]}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-gray-600">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases liste */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <img
                src="/heroes/hero-ai.jpg"
                alt={t('digitalAiIntegration.useCases.imageAlt')}
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('digitalAiIntegration.useCases.title')}</h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('digitalAiIntegration.useCases.subtitle')}
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
                  {t('digitalAiIntegration.useCases.ctaLabel')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hvorfor Magnora Marketing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <Cpu size={48} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">{t('digitalAiIntegration.whyUs.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('digitalAiIntegration.whyUs.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUsItems.map((item, i) => (
              <div key={i} className="text-center p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-blue-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('digitalAiIntegration.ctaBanner.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('digitalAiIntegration.ctaBanner.subtitle')}
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('digitalAiIntegration.ctaBanner.buttonLabel')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('digitalAiIntegration.seoContent1.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('digitalAiIntegration.seoContent1.paragraph1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('digitalAiIntegration.seoContent1.paragraph2')}
            </p>
            <ul className="space-y-2">
              {seoListItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('digitalAiIntegration.seoContent2.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('digitalAiIntegration.seoContent2.paragraph1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('digitalAiIntegration.seoContent2.paragraph2')}
            </p>
          </div>
        </div>
      </section>

      <AiSolutionsSection variant="dark" />

      <FAQSection faqs={faqs} />
      <CTASection
        title={t('digitalAiIntegration.cta.title')}
        subtitle={t('digitalAiIntegration.cta.subtitle')}
        primaryText={t('digitalAiIntegration.cta.primaryText')}
        primaryLink="/kontakt"
        secondaryText={t('digitalAiIntegration.cta.secondaryText')}
        secondaryLink="/digital/ai-integration"
      />
    </>
  );
}
