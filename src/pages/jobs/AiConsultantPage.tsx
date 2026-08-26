import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  CheckCircle, ArrowRight, Clock, Home, Bot, Sparkles, TrendingUp,
  PhoneCall, Target, CalendarCheck, Users, Building2, Wallet, Award,
  Rocket, Zap, Lightbulb, Star, MapPin, ShieldCheck, Gauge
} from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import ContactForm from '../../components/ContactForm';
import { jobListings } from '../../data/jobListings';

export default function AiConsultantPage() {
  const { t } = useTranslation();

  const statBandItems = t('jobAiConsultant.statBand.items', { returnObjects: true }) as { stat: string; label: string }[];
  const introCards = t('jobAiConsultant.intro.cards', { returnObjects: true }) as { title: string; desc: string }[];
  const whatDoesSteps = t('jobAiConsultant.whatDoes.steps', { returnObjects: true }) as { title: string; desc: string }[];
  const saveTimeList = t('jobAiConsultant.saveTime.list', { returnObjects: true }) as string[];
  const earningsRows = t('jobAiConsultant.saveTime.earnings.rows', { returnObjects: true }) as string[];
  const whyFutureProofCards = t('jobAiConsultant.whyFutureProof.cards', { returnObjects: true }) as { title: string; desc: string }[];
  const requirementsList = t('jobAiConsultant.requirements.list', { returnObjects: true }) as string[];
  const processSteps = t('jobAiConsultant.process.steps', { returnObjects: true }) as { title: string; desc: string }[];
  const seoBlock1List = t('jobAiConsultant.seoBlock1.list', { returnObjects: true }) as string[];
  const faqItems = t('jobAiConsultant.faq.items', { returnObjects: true }) as { question: string; answer: string }[];

  const introIcons = [
    <Rocket size={38} className="text-violet-600" />,
    <Home size={38} className="text-violet-600" />,
    <Wallet size={38} className="text-violet-600" />,
  ];

  const whatDoesIcons = [
    <PhoneCall size={32} className="text-violet-600" />,
    <Lightbulb size={32} className="text-violet-600" />,
    <CalendarCheck size={32} className="text-violet-600" />,
  ];

  const earningsIcons = [
    <TrendingUp size={20} className="text-violet-300" />,
    <ShieldCheck size={20} className="text-violet-300" />,
    <Star size={20} className="text-violet-300" />,
  ];

  const whyFutureProofIcons = [
    <Zap size={34} className="text-violet-600" />,
    <Sparkles size={34} className="text-violet-600" />,
    <Users size={34} className="text-violet-600" />,
    <Building2 size={34} className="text-violet-600" />,
  ];

  const statBandIcons = [
    <Home size={26} className="text-violet-600" />,
    <Rocket size={26} className="text-violet-600" />,
    <Wallet size={26} className="text-violet-600" />,
    <Clock size={26} className="text-violet-600" />,
  ];

  return (
    <>
      <SEO
        title={t('jobAiConsultant.seo.title')}
        description={t('jobAiConsultant.seo.description')}
        canonical="/jobs/ai-konsulent"
        keywords={t('jobAiConsultant.seo.keywords')}
        ogType="website"
        breadcrumbs={[
          { name: t('jobAiConsultant.breadcrumbs.home'), url: '/' },
          { name: t('jobAiConsultant.breadcrumbs.jobSeekers'), url: '/freelance-telemarketing' },
          { name: t('jobAiConsultant.breadcrumbs.current'), url: '/jobs/ai-konsulent' },
        ]}
      />

      <HeroSection
        title={t('jobAiConsultant.hero.title')}
        subtitle={t('jobAiConsultant.hero.subtitle')}
        ctaText={t('jobAiConsultant.hero.cta')}
        ctaLink="#ansog"
        secondaryCtaText={t('jobAiConsultant.hero.secondaryCta')}
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage="/heroes/hero-ai.jpg"
      />

      {/* Stat band */}
      <section className="relative -mt-8 z-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
            {statBandItems.map((item, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-2">{statBandIcons[i]}</div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900">{item.stat}</div>
                <div className="text-sm text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-700 text-xs font-semibold uppercase tracking-widest mb-5">
              <Bot size={14} /> {t('jobAiConsultant.intro.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-slate-900">
              {t('jobAiConsultant.intro.title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t('jobAiConsultant.intro.text')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {introCards.map((item, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="mb-4">{introIcons[i]}</div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What does an AI consultant do */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">{t('jobAiConsultant.whatDoes.title')}</h2>
            <p className="text-slate-600 mb-8">
              {t('jobAiConsultant.whatDoes.text')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whatDoesSteps.map((item, i) => (
                <div key={i} className="p-7 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="mb-4">{whatDoesIcons[i]}</div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How you save companies time */}
      <section className="py-20 bg-gradient-to-br from-violet-700 via-indigo-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest mb-6">
                <Gauge size={14} /> {t('jobAiConsultant.saveTime.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('jobAiConsultant.saveTime.title')}
              </h2>
              <p className="text-lg text-white/80 mb-8">
                {t('jobAiConsultant.saveTime.text')}
              </p>
              <ul className="space-y-4">
                {saveTimeList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-violet-300 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/digital/ai-integration" className="mt-8 inline-flex items-center text-violet-200 font-semibold hover:text-white transition-colors">
                {t('jobAiConsultant.saveTime.linkText')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-10">
              <div className="text-center">
                <div className="text-sm uppercase tracking-widest text-white/60 mb-2">{t('jobAiConsultant.saveTime.earnings.label')}</div>
                <div className="text-5xl md:text-6xl font-bold mb-1">{t('jobAiConsultant.saveTime.earnings.value')}</div>
                <p className="text-white/70 mb-8">{t('jobAiConsultant.saveTime.earnings.sub')}</p>
                <div className="space-y-4 text-left">
                  {earningsRows.map((label, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                      {earningsIcons[i]}
                      <span className="text-white/90 text-sm">{label}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#ansog"
                  className="mt-8 inline-flex items-center justify-center w-full bg-white text-violet-700 px-6 py-4 rounded-xl font-semibold hover:bg-violet-50 transition-colors"
                >
                  {t('jobAiConsultant.saveTime.earnings.cta')} <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI consultant is future-proof */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-slate-900">{t('jobAiConsultant.whyFutureProof.title')}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t('jobAiConsultant.whyFutureProof.text')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyFutureProofCards.map((item, i) => (
              <div key={i} className="flex gap-5 p-7 rounded-2xl border border-slate-100 bg-slate-50/60">
                <div className="flex-shrink-0">{whyFutureProofIcons[i]}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements + process */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">{t('jobAiConsultant.requirements.title')}</h2>
              <ul className="space-y-3">
                {requirementsList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-slate-600">
                {t('jobAiConsultant.requirements.note')}
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">{t('jobAiConsultant.process.title')}</h2>
              <ol className="space-y-5">
                {processSteps.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center">{i + 1}</div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <a href="#ansog" className="mt-8 inline-flex items-center bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors">
                {t('jobAiConsultant.process.cta')} <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="ansog" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-700 text-xs font-semibold uppercase tracking-widest mb-5">
              <Sparkles size={14} /> {t('jobAiConsultant.application.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{t('jobAiConsultant.application.title')}</h2>
            <p className="text-lg text-slate-600">
              {t('jobAiConsultant.application.text')}
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm">
            <ContactForm presetTopic="Job henvendelse" sourceLabel="Jobside: AI-konsulent" />
          </div>
        </div>
      </section>

      {/* SEO content blocks */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              {t('jobAiConsultant.seoBlock1.title')}
            </h2>
            <p className="text-slate-600 mb-4">
              {t('jobAiConsultant.seoBlock1.p1')}
            </p>
            <p className="text-slate-600 mb-6">
              {t('jobAiConsultant.seoBlock1.p2')}
            </p>
            <ul className="space-y-2">
              {seoBlock1List.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="text-violet-600 font-bold mt-1">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              {t('jobAiConsultant.seoBlock2.title')}
            </h2>
            <p className="text-slate-600 mb-4">
              {t('jobAiConsultant.seoBlock2.p1')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('jobAiConsultant.seoBlock2.p2')}
            </p>
            <p
              className="text-slate-600"
              dangerouslySetInnerHTML={{ __html: t('jobAiConsultant.seoBlock2.p3') }}
            />
          </div>
        </div>
      </section>

      {/* Related jobs – internal linking */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-3 text-slate-900 text-center">{t('jobAiConsultant.relatedJobs.title')}</h2>
          <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
            {t('jobAiConsultant.relatedJobs.text')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobListings.filter(job => job.path !== '/jobs/ai-konsulent').slice(0, 9).map((job) => (
              <Link
                key={job.path}
                to={job.path}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-violet-300 hover:shadow-md transition-all group"
              >
                <job.icon className={`flex-shrink-0 ${job.color}`} size={20} />
                <span className="text-slate-700 group-hover:text-violet-600 font-medium text-sm">{job.title}</span>
                <ArrowRight className="ml-auto text-slate-300 group-hover:text-violet-500" size={16} />
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/freelance-telemarketing" className="inline-flex items-center text-violet-600 font-semibold hover:text-violet-700">
              {t('jobAiConsultant.relatedJobs.seeAll')} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqItems} title={t('jobAiConsultant.faq.title')} />

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-violet-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Bot size={44} className="mx-auto mb-6 text-violet-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('jobAiConsultant.finalCta.title')}</h2>
          <p className="text-xl mb-10 text-white/80">
            {t('jobAiConsultant.finalCta.text')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#ansog" className="inline-flex items-center justify-center bg-white text-violet-700 px-8 py-4 rounded-lg font-semibold hover:bg-violet-50 transition-colors">
              {t('jobAiConsultant.finalCta.cta')} <ArrowRight className="ml-2" size={18} />
            </a>
            <Link to="/freelance-telemarketing" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-violet-700 transition-colors">
              {t('jobAiConsultant.finalCta.secondaryCta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
