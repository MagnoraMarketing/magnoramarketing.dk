import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight, BadgeCheck, Bot, Eye, Megaphone, Monitor, Scaling, Target, Users,
} from 'lucide-react';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';
import { BlogBreadcrumbs, BlogPostFooter, BlogPostMeta, PostBookingCta } from '../../components/BlogPostParts';

type Stat = { value: string; label: string };
type Service = { name: string; desc: string; link: string };
type Group = { title: string; text: string; items: Service[] };
type Item = { title: string; text: string };
type Faq = { question: string; answer: string };

const K = 'blogPosts.HvadTilbyderMagnora';
const groupStyles = [
  { icon: Megaphone, accent: 'from-blue-600 to-sky-500', ring: 'border-blue-100' },
  { icon: Monitor, accent: 'from-emerald-600 to-teal-500', ring: 'border-emerald-100' },
  { icon: Bot, accent: 'from-violet-600 to-fuchsia-500', ring: 'border-violet-100' },
];
const pillarIcons = [Users, Target, Eye, Scaling];

// Collaboration overview: stats band, service catalogue in three groups, pillars,
// a horizontal process line and the kinds of companies we work with.
export default function HvadTilbyderMagnora() {
  const { t } = useTranslation();
  const stats = t(`${K}.stats`, { returnObjects: true }) as Stat[];
  const groups = t(`${K}.services.groups`, { returnObjects: true }) as Group[];
  const pillars = t(`${K}.why.pillars`, { returnObjects: true }) as Item[];
  const steps = t(`${K}.process.steps`, { returnObjects: true }) as Item[];
  const fit = t(`${K}.fit.items`, { returnObjects: true }) as string[];
  const faqs = t(`${K}.faqs`, { returnObjects: true }) as Faq[];

  return (
    <>
      <SEO
        title={t(`${K}.seoTitle`)}
        description={t(`${K}.seoDescription`)}
        canonical="/blog/hvad-tilbyder-magnora-marketing"
        keywords={t(`${K}.keywords`)}
      />

      <div className="pt-32 pb-24 bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="flex justify-center"><BlogBreadcrumbs /></div>
          <span className="inline-block bg-emerald-500/25 text-emerald-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t(`${K}.category`)}</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-4xl mx-auto">{t(`${K}.title`)}</h1>
          <div className="flex justify-center"><BlogPostMeta /></div>
        </div>
      </div>

      {/* Stats band overlapping the header */}
      <div className="max-w-5xl mx-auto px-4 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="rounded-2xl bg-white shadow-lg border border-gray-100 p-5 text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-blue-700">{s.value}</p>
              <p className="text-sm text-gray-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <PostBookingCta />

      <article className="max-w-5xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-16 leading-relaxed max-w-4xl">{t(`${K}.intro`)}</p>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{t(`${K}.services.heading`)}</h2>
          <p className="text-gray-600 mb-10 max-w-3xl">{t(`${K}.services.intro`)}</p>
          <div className="space-y-10">
            {groups.map((g, i) => {
              const style = groupStyles[i % groupStyles.length];
              const Icon = style.icon;
              return (
                <div key={i}>
                  <div className="flex items-center gap-4 mb-5">
                    <span className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${style.accent} text-white flex items-center justify-center`}><Icon size={24} /></span>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{g.title}</h3>
                      <p className="text-gray-600 text-sm">{g.text}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-5">
                    {g.items.map((s, j) => (
                      <Link key={j} to={s.link} className={`group flex flex-col rounded-2xl border ${style.ring} bg-white p-6 hover:shadow-lg transition-shadow`}>
                        <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700">{s.name}</h4>
                        <p className="text-sm text-gray-600 mb-4 flex-1">{s.desc}</p>
                        <span className="text-sm font-semibold text-blue-600 inline-flex items-center gap-1">
                          {t(`${K}.services.readMore`)} <ArrowRight size={14} />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-20 rounded-3xl bg-slate-50 border border-gray-200 p-8 md:p-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{t(`${K}.why.heading`)}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p, i) => {
              const Icon = pillarIcons[i % pillarIcons.length];
              return (
                <div key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center"><Icon size={22} /></span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{p.title}</h3>
                    <p className="text-gray-600">{p.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">{t(`${K}.process.heading`)}</h2>
          <ol className="relative grid md:grid-cols-4 gap-8 md:gap-5">
            <span aria-hidden="true" className="hidden md:block absolute top-6 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-600 via-emerald-500 to-violet-600" />
            {steps.map((s, i) => (
              <li key={i} className="relative">
                <span className="relative z-10 w-12 h-12 rounded-full bg-white border-4 border-blue-600 text-blue-700 font-extrabold flex items-center justify-center mb-4">{i + 1}</span>
                <h3 className="font-bold text-slate-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{t(`${K}.fit.heading`)}</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">{t(`${K}.fit.intro`)}</p>
          <ul className="flex flex-wrap gap-3">
            {fit.map((f, i) => (
              <li key={i} className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2 text-sm font-medium text-emerald-800">
                <BadgeCheck size={16} /> {f}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-lg font-semibold">{t(`${K}.readMoreBox.text`)}</p>
          <Link to="/blog/hvorfor-samarbejde-magnora" className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-700 font-semibold px-5 py-3 hover:bg-blue-50 flex-shrink-0">
            {t(`${K}.readMoreBox.linkText`)} <ArrowRight size={16} />
          </Link>
        </div>
      </article>

      <BlogPostFooter />
      <FAQSection faqs={faqs} />
      <CTASection
        title={t(`${K}.ctaTitle`)}
        subtitle={t(`${K}.ctaSubtitle`)}
        primaryText={t(`${K}.ctaPrimaryText`)}
        primaryLink="/kontakt"
        secondaryText={t(`${K}.ctaSecondaryText`)}
        secondaryLink="/ydelser"
      />
    </>
  );
}
