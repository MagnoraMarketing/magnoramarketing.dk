import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  CheckCircle, ArrowRight, Zap, Shield,
  Sparkles, Bot, Rocket, Layers, Search, Cpu,
  Clock, Target, PenTool, Server, TrendingUp, MessageSquare
} from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';
import ContactForm from '../../components/ContactForm';

export default function WebDevelopmentPage() {
  const { t } = useTranslation();

  const featureIcons = [
    <Sparkles size={36} className="text-blue-600" />,
    <Bot size={36} className="text-blue-600" />,
    <Zap size={36} className="text-blue-600" />,
    <Shield size={36} className="text-blue-600" />,
  ];
  const features = (t('digitalWebDevelopment.features.items', { returnObjects: true }) as Array<{ title: string; description: string }>)
    .map((f, i) => ({ ...f, icon: featureIcons[i] }));

  const techStack = t('digitalWebDevelopment.deliverables.tech', { returnObjects: true }) as string[];

  const deliverables = t('digitalWebDevelopment.deliverables.items', { returnObjects: true }) as string[];

  // "Uanset omfang" – vi hjælper med alt fra små justeringer til store platforme
  const scopeTierIcons = [
    <PenTool size={32} className="text-blue-600" />,
    <Layers size={32} className="text-blue-600" />,
    <Server size={32} className="text-blue-600" />,
  ];
  const scopeTiers = (t('digitalWebDevelopment.scope.tiers', { returnObjects: true }) as Array<{ tag: string; title: string; description: string; points: string[] }>)
    .map((tier, i) => ({ ...tier, icon: scopeTierIcons[i] }));

  const aiCapabilityIcons = [
    <MessageSquare size={28} className="text-blue-600" />,
    <Search size={28} className="text-blue-600" />,
    <PenTool size={28} className="text-blue-600" />,
    <Cpu size={28} className="text-blue-600" />,
  ];
  const aiCapabilities = (t('digitalWebDevelopment.aiFocus.capabilities', { returnObjects: true }) as Array<{ title: string; desc: string }>)
    .map((c, i) => ({ ...c, icon: aiCapabilityIcons[i] }));

  const aiChatMessages = t('digitalWebDevelopment.aiFocus.chat.messages', { returnObjects: true }) as string[];

  const process = (t('digitalWebDevelopment.process.steps', { returnObjects: true }) as Array<{ label: string; desc: string }>)
    .map((p, i) => ({ ...p, step: String(i + 1) }));

  const whyNowIcons = [
    <TrendingUp size={28} className="text-blue-600" />,
    <Target size={28} className="text-blue-600" />,
    <Clock size={28} className="text-blue-600" />,
  ];
  const whyNow = (t('digitalWebDevelopment.whyNow.items', { returnObjects: true }) as Array<{ title: string; desc: string }>)
    .map((item, i) => ({ ...item, icon: whyNowIcons[i] }));

  const contactPoints = t('digitalWebDevelopment.contactCta.points', { returnObjects: true }) as string[];

  const seoSection1Items = t('digitalWebDevelopment.seoSection1.items', { returnObjects: true }) as string[];

  const faqs = (t('digitalWebDevelopment.faq.items', { returnObjects: true }) as Array<{ question: string; answer: string }>);

  return (
    <>
      <SEO
        title={t('digitalWebDevelopment.seo.title')}
        description={t('digitalWebDevelopment.seo.description')}
        canonical="/digital/webudvikling"
        keywords={t('digitalWebDevelopment.seo.keywords')}
      />

      <HeroSection
        title={t('digitalWebDevelopment.hero.title')}
        subtitle={t('digitalWebDevelopment.hero.subtitle')}
        ctaText={t('digitalWebDevelopment.hero.ctaText')}
        ctaLink="/kontakt"
        secondaryCtaText={t('digitalWebDevelopment.hero.secondaryCtaText')}
        secondaryCtaLink="#loesninger"
        backgroundImage="/heroes/hero-webdev.jpg"
      />

      {/* Hvorfor tage stilling nu – "det er noget man skal være klar til" */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              {t('digitalWebDevelopment.whyNow.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              {t('digitalWebDevelopment.whyNow.title')}
            </h2>
            <p className="text-lg text-white/70" dangerouslySetInnerHTML={{ __html: t('digitalWebDevelopment.whyNow.descriptionHtml') }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyNow.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  {React.cloneElement(item.icon, { className: 'text-blue-300' })}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#kontakt-form" className="btn btn-primary text-base px-8 py-4">
              {t('digitalWebDevelopment.whyNow.ctaText')} <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Hvad vi tilbyder */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">{t('digitalWebDevelopment.features.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('digitalWebDevelopment.features.title')}</h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              {t('digitalWebDevelopment.features.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="card flex gap-5 p-6">
                <div className="flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{f.title}</h3>
                  <p className="text-slate-600">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uanset omfang – scope tiers */}
      <section id="loesninger" className="section bg-sky-50 scroll-mt-20">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">{t('digitalWebDevelopment.scope.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('digitalWebDevelopment.scope.title')}</h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              {t('digitalWebDevelopment.scope.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {scopeTiers.map((tier, i) => (
              <div key={i} className="card p-8 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                  {tier.icon}
                </div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">{tier.tag}</span>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{tier.title}</h3>
                <p className="text-slate-600 mb-5 flex-grow">{tier.description}</p>
                <ul className="space-y-2">
                  {tier.points.map((p, pi) => (
                    <li key={pi} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-500 mb-5">{t('digitalWebDevelopment.scope.prompt')}</p>
            <a href="#kontakt-form" className="btn btn-primary text-base px-8 py-4">
              {t('digitalWebDevelopment.scope.ctaText')} <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* AI-fokus sektion */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">{t('digitalWebDevelopment.aiFocus.label')}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">{t('digitalWebDevelopment.aiFocus.title')}</h2>
              <p className="text-lg text-slate-600 mb-6">
                {t('digitalWebDevelopment.aiFocus.description')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {aiCapabilities.map((c, i) => (
                  <div key={i} className="p-5 bg-sky-50 rounded-2xl border border-blue-100/60">
                    <div className="mb-3">{c.icon}</div>
                    <h3 className="font-semibold text-slate-900 mb-1.5 text-base">{c.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/digital/ai-integration" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  {t('digitalWebDevelopment.aiFocus.linkText')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl blur-2xl opacity-60" />
              <div className="relative bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Bot size={24} className="text-blue-300" />
                  </div>
                  <div>
                    <p className="font-semibold">{t('digitalWebDevelopment.aiFocus.chat.assistantName')}</p>
                    <p className="text-xs text-white/50">{t('digitalWebDevelopment.aiFocus.chat.status')}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 text-sm max-w-[85%]">
                    {aiChatMessages[0]}
                  </div>
                  <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-[85%] ml-auto">
                    {aiChatMessages[1]}
                  </div>
                  <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 text-sm max-w-[85%]">
                    {aiChatMessages[2]}
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs text-white/40">
                  <Sparkles size={14} /> {t('digitalWebDevelopment.aiFocus.chat.note')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proces */}
      <section className="section bg-sky-50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">{t('digitalWebDevelopment.process.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('digitalWebDevelopment.process.title')}</h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              {t('digitalWebDevelopment.process.subtitle')}
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <div key={i} className="relative bg-white rounded-2xl border border-blue-100/60 p-6 text-center shadow-sm">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-500/25">
                  {p.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-base">{p.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hvad du modtager + tech */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">{t('digitalWebDevelopment.deliverables.label')}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">{t('digitalWebDevelopment.deliverables.title')}</h2>
              <p className="text-lg text-slate-600 mb-8">
                {t('digitalWebDevelopment.deliverables.description')}
              </p>
              <ul className="space-y-3">
                {deliverables.map((d, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span className="text-slate-700">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#kontakt-form" className="btn btn-primary inline-flex items-center">
                  {t('digitalWebDevelopment.deliverables.ctaText')} <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
            <div className="bg-sky-50 rounded-3xl border border-blue-100/60 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Layers size={28} className="text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">{t('digitalWebDevelopment.deliverables.techTitle')}</h3>
              </div>
              <p className="text-slate-600 mb-6">
                {t('digitalWebDevelopment.deliverables.techDescription')}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech, i) => (
                  <span key={i} className="bg-white text-blue-700 px-4 py-2 rounded-full font-medium text-sm border border-blue-100 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktformular – catchy */}
      <section id="kontakt-form" className="relative overflow-hidden py-24 scroll-mt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                {t('digitalWebDevelopment.contactCta.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                {t('digitalWebDevelopment.contactCta.title')}
              </h2>
              <p className="text-lg text-white/70 mb-8">
                {t('digitalWebDevelopment.contactCta.subtitle')}
              </p>
              <ul className="space-y-3">
                {contactPoints.map((item, i) => (
                  <li key={i} className="flex items-center text-white/80">
                    <CheckCircle className="text-blue-300 mr-3 flex-shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-3 text-white/50 text-sm">
                <Rocket size={18} className="text-blue-300" />
                {t('digitalWebDevelopment.contactCta.note')}
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{t('digitalWebDevelopment.contactCta.formTitle')}</h3>
                <p className="text-sm text-slate-500">{t('digitalWebDevelopment.contactCta.formSubtitle')}</p>
              </div>
              <ContactForm presetTopic="Webudvikling" sourceLabel="Webudvikling-siden" />
            </div>
          </div>
        </div>
      </section>

      {/* SEO tekst-sektioner */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('digitalWebDevelopment.seoSection1.title')}</h2>
            <p className="text-slate-600 mb-4">
              {t('digitalWebDevelopment.seoSection1.paragraph1')}
            </p>
            <p className="text-slate-600 mb-6">
              {t('digitalWebDevelopment.seoSection1.paragraph2')}
            </p>
            <ul className="space-y-2">
              {seoSection1Items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700"><span className="text-blue-600 font-bold mt-1">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('digitalWebDevelopment.seoSection2.title')}</h2>
            <p className="text-slate-600 mb-4">
              {t('digitalWebDevelopment.seoSection2.paragraph1')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('digitalWebDevelopment.seoSection2.paragraph2')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('digitalWebDevelopment.seoSection2.paragraph3')}
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title={t('digitalWebDevelopment.ctaSection.title')}
        subtitle={t('digitalWebDevelopment.ctaSection.subtitle')}
        primaryText={t('digitalWebDevelopment.ctaSection.primaryText')}
        primaryLink="/kontakt"
        secondaryText={t('digitalWebDevelopment.ctaSection.secondaryText')}
        secondaryLink="/digital/hjemmesider"
      />
    </>
  );
}
