import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  CheckCircle, ArrowRight, Clock, Home, ShieldCheck,
  TrendingUp, Sparkles, CalendarCheck, HeartHandshake, Star, Wallet,
  Award, Phone, MapPin, PhoneCall, Target, Users, Building2
} from 'lucide-react';
import HeroSection from './HeroSection';
import SEO from './SEO';
import FAQSection from './FAQSection';
import { jobListings } from '../data/jobListings';
import JobApplicationSection from './JobApplicationSection';
import BookingCta from './BookingCta';
import { ServiceArticles } from './BlogPostParts';

interface RichJobPageProps {
  /** Locale namespace holding all texts, e.g. "jobInsuranceBroker" (same key structure for every rich job page). */
  ns: string;
  /** Canonical path of the job page, e.g. "/jobs/forsikring-hjemmefra". */
  path: string;
  heroImage: string;
  /** Icon shown in the intro badge and the final CTA. */
  Icon: React.ElementType;
  /** Sister job pages shown first in the "related jobs" grid (internal linking). */
  featuredRelated?: string[];
}

/**
 * Long-form, SEO-optimised job landing page. All copy lives in
 * src/i18n/locales/{da,en,es}/<ns>.ts; JobPosting + breadcrumb structured data
 * is added automatically by <SEO> for every path in src/data/jobListings.ts.
 */
export default function RichJobPage({ ns, path, heroImage, Icon, featuredRelated = [] }: RichJobPageProps) {
  const { t, i18n } = useTranslation();
  const hasTestimonial = i18n.exists(`${ns}.testimonial.quote`);
  const relatedJobs = jobListings
    .filter(job => job.path !== path)
    .sort((a, b) => Number(featuredRelated.includes(b.path)) - Number(featuredRelated.includes(a.path)));

  const statBandItems = t(`${ns}.statBand.items`, { returnObjects: true }) as { stat: string; label: string }[];
  const introCards = t(`${ns}.intro.cards`, { returnObjects: true }) as { title: string; desc: string }[];
  const salaryList = t(`${ns}.salary.list`, { returnObjects: true }) as string[];
  const salaryEarningsRows = t(`${ns}.salary.earnings.rows`, { returnObjects: true }) as string[];
  const freedomCards = t(`${ns}.freedom.cards`, { returnObjects: true }) as { title: string; desc: string }[];
  const requirementsList = t(`${ns}.requirements.list`, { returnObjects: true }) as string[];
  const processSteps = t(`${ns}.process.steps`, { returnObjects: true }) as { title: string; desc: string }[];
  const seoBlock1List = t(`${ns}.seoBlock1.list`, { returnObjects: true }) as string[];
  const whatIsSteps = t(`${ns}.whatIs.steps`, { returnObjects: true }) as { title: string; desc: string }[];
  const regionalCities = t(`${ns}.regional.cities`, { returnObjects: true }) as string[];
  const careerCards = t(`${ns}.career.cards`, { returnObjects: true }) as { title: string; desc: string }[];
  const faqItems = t(`${ns}.faq.items`, { returnObjects: true }) as { question: string; answer: string }[];

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
        title={t(`${ns}.seo.title`)}
        description={t(`${ns}.seo.description`)}
        canonical={path}
        keywords={t(`${ns}.seo.keywords`)}
        ogType="website"
        breadcrumbs={[
          { name: t(`${ns}.breadcrumbs.home`), url: '/' },
          { name: t(`${ns}.breadcrumbs.jobSeekers`), url: '/freelance-telemarketing' },
          { name: t(`${ns}.breadcrumbs.current`), url: path },
        ]}
      />

      <HeroSection
        title={t(`${ns}.hero.title`)}
        subtitle={t(`${ns}.hero.subtitle`)}
        ctaText={t(`${ns}.hero.cta`)}
        ctaLink="/kontakt"
        secondaryCtaText={t(`${ns}.hero.secondaryCta`)}
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage={heroImage}
      />

      <BookingCta kind="job" />

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
              <Icon size={14} /> {t(`${ns}.intro.badge`)}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-slate-900">
              {t(`${ns}.intro.title`)}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t(`${ns}.intro.text`)}
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
                <Sparkles size={14} /> {t(`${ns}.salary.badge`)}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t(`${ns}.salary.title`)}
              </h2>
              <p className="text-lg text-white/80 mb-8">
                {t(`${ns}.salary.text`)}
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
                <div className="text-sm uppercase tracking-widest text-white/60 mb-2">{t(`${ns}.salary.earnings.label`)}</div>
                <div className="text-5xl md:text-6xl font-bold mb-1">{t(`${ns}.salary.earnings.value`)}</div>
                <p className="text-white/70 mb-8">{t(`${ns}.salary.earnings.sub`)}</p>
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
                  {t(`${ns}.salary.earnings.cta`)} <ArrowRight size={16} className="ml-2" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-slate-900">{t(`${ns}.freedom.title`)}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t(`${ns}.freedom.text`)}
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

      {/* Testimonial (optional – only rendered when the locale has one) */}
      {hasTestimonial && <section className="py-16 surface-soft">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="flex justify-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-slate-800 mb-6 leading-relaxed">
            {t(`${ns}.testimonial.quote`)}
          </blockquote>
          <div className="font-semibold text-slate-900">{t(`${ns}.testimonial.author`)}</div>
          <div className="text-slate-500 text-sm">{t(`${ns}.testimonial.role`)}</div>
        </div>
      </section>}

      {/* Requirements + process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">{t(`${ns}.requirements.title`)}</h2>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">{t(`${ns}.process.title`)}</h2>
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
              <Link to="/kontakt" className="mt-8 inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-colors">
                {t(`${ns}.process.cta`)} <ArrowRight size={16} className="ml-2" />
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
              {t(`${ns}.seoBlock1.title`)}
            </h2>
            <p className="text-slate-600 mb-4">
              {t(`${ns}.seoBlock1.p1`)}
            </p>
            <p className="text-slate-600 mb-6">
              {t(`${ns}.seoBlock1.p2`)}
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
              {t(`${ns}.seoBlock2.title`)}
            </h2>
            <p className="text-slate-600 mb-4">
              {t(`${ns}.seoBlock2.p1`)}
            </p>
            <p className="text-slate-600 mb-4">
              {t(`${ns}.seoBlock2.p2`)}
            </p>
            <p className="text-slate-600">
              {t(`${ns}.seoBlock2.p3`)}
            </p>
          </div>
        </div>
      </section>

      {/* What is meeting booking within insurance */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              {t(`${ns}.whatIs.title`)}
            </h2>
            <p className="text-slate-600 mb-8">
              {t(`${ns}.whatIs.text`)}
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
              {t(`${ns}.regional.title`)}
            </h2>
            <p className="text-slate-600 mb-4">
              {t(`${ns}.regional.p1`)}
            </p>
            <p className="text-slate-600 mb-6">
              {t(`${ns}.regional.p2`)}
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
              {t(`${ns}.career.title`)}
            </h2>
            <p className="text-slate-600 mb-4">
              {t(`${ns}.career.text`)}
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
          <h2 className="text-3xl font-bold mb-3 text-slate-900 text-center">{t(`${ns}.relatedJobs.title`)}</h2>
          <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
            {t(`${ns}.relatedJobs.text`)}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedJobs.map((job) => (
              <Link
                key={job.path}
                to={job.path}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all group"
              >
                <job.icon className={`flex-shrink-0 ${job.color}`} size={20} />
                <span className="text-slate-700 group-hover:text-blue-600 font-medium text-sm">{t(`jobListings.${job.key}.title`)}</span>
                <ArrowRight className="ml-auto text-slate-300 group-hover:text-blue-500" size={16} />
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/freelance-telemarketing" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
              {t(`${ns}.relatedJobs.seeAll`)} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog articles about this job – internal links to the supporting content */}
      <ServiceArticles servicePath={path} limit={3} />

      <JobApplicationSection />


      <FAQSection faqs={faqItems} title={t(`${ns}.faq.title`)} />

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Icon size={44} className="mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t(`${ns}.finalCta.title`)}</h2>
          <p className="text-xl mb-10 text-white/80">
            {t(`${ns}.finalCta.text`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              {t(`${ns}.finalCta.cta`)} <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/freelance-telemarketing" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              {t(`${ns}.finalCta.secondaryCta`)}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
