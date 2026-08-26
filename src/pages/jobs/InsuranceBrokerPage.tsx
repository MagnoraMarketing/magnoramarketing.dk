import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  CheckCircle, ArrowRight, Clock, Home, Umbrella, ShieldCheck,
  TrendingUp, Sparkles, CalendarCheck, HeartHandshake, Star, Wallet,
  Award, Phone, MapPin, PhoneCall, Target, Users, Building2
} from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import { jobListings } from '../../data/jobListings';

export default function InsuranceBrokerPage() {
  const { t } = useTranslation();

  const statBandItems = t('jobInsuranceBroker.statBand.items', { returnObjects: true }) as { stat: string; label: string }[];
  const introCards = t('jobInsuranceBroker.intro.cards', { returnObjects: true }) as { title: string; desc: string }[];
  const salaryList = t('jobInsuranceBroker.salary.list', { returnObjects: true }) as string[];
  const salaryEarningsRows = t('jobInsuranceBroker.salary.earnings.rows', { returnObjects: true }) as string[];
  const freedomCards = t('jobInsuranceBroker.freedom.cards', { returnObjects: true }) as { title: string; desc: string }[];
  const requirementsList = t('jobInsuranceBroker.requirements.list', { returnObjects: true }) as string[];
  const processSteps = t('jobInsuranceBroker.process.steps', { returnObjects: true }) as { title: string; desc: string }[];
  const seoBlock1List = t('jobInsuranceBroker.seoBlock1.list', { returnObjects: true }) as string[];
  const whatIsSteps = t('jobInsuranceBroker.whatIs.steps', { returnObjects: true }) as { title: string; desc: string }[];
  const regionalCities = t('jobInsuranceBroker.regional.cities', { returnObjects: true }) as string[];
  const careerCards = t('jobInsuranceBroker.career.cards', { returnObjects: true }) as { title: string; desc: string }[];
  const faqItems = t('jobInsuranceBroker.faq.items', { returnObjects: true }) as { question: string; answer: string }[];

  const statBandIcons = [
    <Home size={26} className="text-blue-600" />,
    <TrendingUp size={26} className="text-blue-600" />,
    <Clock size={26} className="text-blue-600" />,
    <CalendarCheck size={26} className="text-blue-600" />,
  ];
  const introIcons = [
    <Wallet size={38} className="text-blue-600" />,
    <Home size={38} className="text-blue-600" />,
    <Award size={38} className="text-blue-600" />,
  ];
  const salaryEarningsIcons = [
    <TrendingUp size={20} className="text-blue-300" />,
    <ShieldCheck size={20} className="text-blue-300" />,
    <Star size={20} className="text-blue-300" />,
  ];
  const freedomIcons = [
    <MapPin size={34} className="text-blue-600" />,
    <Clock size={34} className="text-blue-600" />,
    <HeartHandshake size={34} className="text-blue-600" />,
    <Phone size={34} className="text-blue-600" />,
  ];
  const whatIsIcons = [
    <PhoneCall size={32} className="text-blue-600" />,
    <Target size={32} className="text-blue-600" />,
    <CalendarCheck size={32} className="text-blue-600" />,
  ];
  const careerIcons = [
    <TrendingUp size={30} className="text-blue-600" />,
    <Wallet size={30} className="text-blue-600" />,
    <Users size={30} className="text-blue-600" />,
    <Building2 size={30} className="text-blue-600" />,
  ];

  return (
    <>
      <SEO
        title={t('jobInsuranceBroker.seo.title')}
        description={t('jobInsuranceBroker.seo.description')}
        canonical="/jobs/forsikring-hjemmefra"
        keywords={t('jobInsuranceBroker.seo.keywords')}
        ogType="website"
        breadcrumbs={[
          { name: t('jobInsuranceBroker.breadcrumbs.home'), url: '/' },
          { name: t('jobInsuranceBroker.breadcrumbs.jobSeekers'), url: '/freelance-telemarketing' },
          { name: t('jobInsuranceBroker.breadcrumbs.current'), url: '/jobs/forsikring-hjemmefra' },
        ]}
      />

      <HeroSection
        title={t('jobInsuranceBroker.hero.title')}
        subtitle={t('jobInsuranceBroker.hero.subtitle')}
        ctaText={t('jobInsuranceBroker.hero.cta')}
        ctaLink="/kontakt"
        secondaryCtaText={t('jobInsuranceBroker.hero.secondaryCta')}
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage="/heroes/hero-home.jpg"
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-widest mb-5">
              <Umbrella size={14} /> {t('jobInsuranceBroker.intro.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-slate-900">
              {t('jobInsuranceBroker.intro.title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t('jobInsuranceBroker.intro.text')}
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

      {/* Salary highlight */}
      <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest mb-6">
                <Sparkles size={14} /> {t('jobInsuranceBroker.salary.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('jobInsuranceBroker.salary.title')}
              </h2>
              <p className="text-lg text-white/80 mb-8">
                {t('jobInsuranceBroker.salary.text')}
              </p>
              <ul className="space-y-4">
                {salaryList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-blue-300 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-10">
              <div className="text-center">
                <div className="text-sm uppercase tracking-widest text-white/60 mb-2">{t('jobInsuranceBroker.salary.earnings.label')}</div>
                <div className="text-5xl md:text-6xl font-bold mb-1">{t('jobInsuranceBroker.salary.earnings.value')}</div>
                <p className="text-white/70 mb-8">{t('jobInsuranceBroker.salary.earnings.sub')}</p>
                <div className="space-y-4 text-left">
                  {salaryEarningsRows.map((row, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                      {salaryEarningsIcons[i]}
                      <span className="text-white/90 text-sm">{row}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/kontakt"
                  className="mt-8 inline-flex items-center justify-center w-full bg-white text-blue-700 px-6 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                >
                  {t('jobInsuranceBroker.salary.earnings.cta')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Freedom / a day in the life */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-slate-900">{t('jobInsuranceBroker.freedom.title')}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t('jobInsuranceBroker.freedom.text')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {freedomCards.map((item, i) => (
              <div key={i} className="flex gap-5 p-7 rounded-2xl border border-slate-100 bg-slate-50/60">
                <div className="flex-shrink-0">{freedomIcons[i]}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="flex justify-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-slate-800 mb-6 leading-relaxed">
            {t('jobInsuranceBroker.testimonial.quote')}
          </blockquote>
          <div className="font-semibold text-slate-900">{t('jobInsuranceBroker.testimonial.author')}</div>
          <div className="text-slate-500 text-sm">{t('jobInsuranceBroker.testimonial.role')}</div>
        </div>
      </section>

      {/* Requirements + process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">{t('jobInsuranceBroker.requirements.title')}</h2>
              <ul className="space-y-3">
                {requirementsList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">{t('jobInsuranceBroker.process.title')}</h2>
              <ol className="space-y-5">
                {processSteps.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">{i + 1}</div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link to="/kontakt" className="mt-8 inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {t('jobInsuranceBroker.process.cta')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO content blocks */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              {t('jobInsuranceBroker.seoBlock1.title')}
            </h2>
            <p className="text-slate-600 mb-4">
              {t('jobInsuranceBroker.seoBlock1.p1')}
            </p>
            <p className="text-slate-600 mb-6">
              {t('jobInsuranceBroker.seoBlock1.p2')}
            </p>
            <ul className="space-y-2">
              {seoBlock1List.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="text-blue-600 font-bold mt-1">✓</span> {item}
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
              {t('jobInsuranceBroker.seoBlock2.title')}
            </h2>
            <p className="text-slate-600 mb-4">
              {t('jobInsuranceBroker.seoBlock2.p1')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('jobInsuranceBroker.seoBlock2.p2')}
            </p>
            <p className="text-slate-600">
              {t('jobInsuranceBroker.seoBlock2.p3')}
            </p>
          </div>
        </div>
      </section>

      {/* What is meeting booking within insurance */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              {t('jobInsuranceBroker.whatIs.title')}
            </h2>
            <p className="text-slate-600 mb-8">
              {t('jobInsuranceBroker.whatIs.text')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whatIsSteps.map((item, i) => (
                <div key={i} className="p-7 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="mb-4">{whatIsIcons[i]}</div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meeting booking from home across Denmark – regional SEO */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              {t('jobInsuranceBroker.regional.title')}
            </h2>
            <p className="text-slate-600 mb-4">
              {t('jobInsuranceBroker.regional.p1')}
            </p>
            <p className="text-slate-600 mb-6">
              {t('jobInsuranceBroker.regional.p2')}
            </p>
            <div className="flex flex-wrap gap-2">
              {regionalCities.map((city, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                  <MapPin size={13} /> {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why meeting booking is an attractive career */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              {t('jobInsuranceBroker.career.title')}
            </h2>
            <p className="text-slate-600 mb-4">
              {t('jobInsuranceBroker.career.text')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {careerCards.map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100">
                  <div className="flex-shrink-0">{careerIcons[i]}</div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related jobs – internal linking */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-3 text-slate-900 text-center">{t('jobInsuranceBroker.relatedJobs.title')}</h2>
          <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
            {t('jobInsuranceBroker.relatedJobs.text')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobListings.filter(job => job.path !== '/jobs/forsikring-hjemmefra').map((job) => (
              <Link
                key={job.path}
                to={job.path}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all group"
              >
                <job.icon className={`flex-shrink-0 ${job.color}`} size={20} />
                <span className="text-slate-700 group-hover:text-blue-600 font-medium text-sm">{job.title}</span>
                <ArrowRight className="ml-auto text-slate-300 group-hover:text-blue-500" size={16} />
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/freelance-telemarketing" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
              {t('jobInsuranceBroker.relatedJobs.seeAll')} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqItems} title={t('jobInsuranceBroker.faq.title')} />

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Umbrella size={44} className="mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('jobInsuranceBroker.finalCta.title')}</h2>
          <p className="text-xl mb-10 text-white/80">
            {t('jobInsuranceBroker.finalCta.text')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              {t('jobInsuranceBroker.finalCta.cta')} <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/freelance-telemarketing" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              {t('jobInsuranceBroker.finalCta.secondaryCta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
