import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight, Bell, Bot, CalendarCheck, Check, ExternalLink, Gauge, Languages, Layers, PhoneIncoming, Plug, RefreshCw, Sparkles, Wrench,
} from 'lucide-react';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';
import { BlogBreadcrumbs, BlogPostFooter, BlogPostMeta } from '../../components/BlogPostParts';

type Row = { feature: string; ai: string; service: string; human: string };
type Item = { title: string; text: string };
type Stat = { value: string; label: string };
type Faq = { question: string; answer: string };

const K = 'blogPosts.PrisPaaAiReception';
const driverIcons = [Gauge, Plug, Layers, Languages];
const reasonIcons = [Languages, CalendarCheck, RefreshCw, Bell, Wrench, Sparkles];

// AI reception pricing: price card next to the intro, three-way comparison table,
// missed-call stats, the AIbooking.dk recommendation and a go-live timeline.
export default function PrisPaaAiReception() {
  const { t } = useTranslation();
  const points = t(`${K}.priceCard.points`, { returnObjects: true }) as string[];
  const rows = t(`${K}.comparison.rows`, { returnObjects: true }) as Row[];
  const drivers = t(`${K}.costDrivers.items`, { returnObjects: true }) as Item[];
  const stats = t(`${K}.missedCalls.stats`, { returnObjects: true }) as Stat[];
  const reasons = t(`${K}.aibooking.reasons`, { returnObjects: true }) as Item[];
  const steps = t(`${K}.steps.items`, { returnObjects: true }) as Item[];
  const faqs = t(`${K}.faqs`, { returnObjects: true }) as Faq[];

  return (
    <>
      <SEO
        title={t(`${K}.seoTitle`)}
        description={t(`${K}.seoDescription`)}
        canonical="/blog/pris-paa-ai-reception"
        keywords={t(`${K}.keywords`)}
      />

      <div className="pt-32 pb-16 bg-gradient-to-br from-slate-950 via-violet-950 to-blue-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <BlogBreadcrumbs />
          <span className="inline-flex items-center gap-2 bg-violet-500/30 text-violet-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            <Bot size={15} /> {t(`${K}.category`)}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-4xl">{t(`${K}.title`)}</h1>
          <BlogPostMeta />
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-10 items-start mb-16">
          <p className="lg:col-span-3 text-xl text-gray-700 leading-relaxed">{t(`${K}.intro`)}</p>
          <aside className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-violet-600 to-blue-600 text-white p-7 shadow-xl shadow-violet-500/20">
            <p className="text-sm font-semibold text-violet-100 mb-2">{t(`${K}.priceCard.label`)}</p>
            <p className="text-4xl font-extrabold">{t(`${K}.priceCard.price`)}</p>
            <p className="text-sm text-violet-100 mb-4">{t(`${K}.priceCard.unit`)}</p>
            <ul className="space-y-2 mb-5">
              {points.map((p, i) => (
                <li key={i} className="flex gap-2 text-sm"><Check size={17} className="flex-shrink-0 mt-0.5" />{p}</li>
              ))}
            </ul>
            <p className="text-sm text-violet-100 mb-5">{t(`${K}.priceCard.text`)}</p>
            <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-xl bg-white text-violet-700 font-semibold px-5 py-3 hover:bg-violet-50">
              {t(`${K}.priceCard.cta`)} <ArrowRight size={16} />
            </Link>
          </aside>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{t(`${K}.comparison.heading`)}</h2>
          <p className="text-gray-600 mb-6">{t(`${K}.comparison.intro`)}</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm min-w-[640px]">
              <thead>
                <tr className="bg-gray-50 text-slate-700">
                  <th className="px-5 py-4 font-semibold">{t(`${K}.comparison.colFeature`)}</th>
                  <th className="px-5 py-4 font-bold text-white bg-violet-600">{t(`${K}.comparison.colAi`)}</th>
                  <th className="px-5 py-4 font-semibold">{t(`${K}.comparison.colService`)}</th>
                  <th className="px-5 py-4 font-semibold">{t(`${K}.comparison.colHuman`)}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="px-5 py-4 font-semibold text-slate-900">{r.feature}</td>
                    <td className="px-5 py-4 font-semibold text-violet-700 bg-violet-50">{r.ai}</td>
                    <td className="px-5 py-4 text-gray-600">{r.service}</td>
                    <td className="px-5 py-4 text-gray-600">{r.human}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{t(`${K}.costDrivers.heading`)}</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {drivers.map((d, i) => {
              const Icon = driverIcons[i % driverIcons.length];
              return (
                <div key={i} className="rounded-2xl border border-gray-200 p-6 bg-white">
                  <span className="inline-flex w-11 h-11 rounded-xl bg-violet-100 text-violet-700 items-center justify-center mb-4"><Icon size={22} /></span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{d.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-16 rounded-3xl bg-slate-900 text-white p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <PhoneIncoming className="text-rose-400" size={26} />
            <h2 className="text-2xl md:text-3xl font-bold text-white">{t(`${K}.missedCalls.heading`)}</h2>
          </div>
          <p className="text-slate-300 mb-8 max-w-3xl leading-relaxed">{t(`${K}.missedCalls.text`)}</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {stats.map((s, i) => (
              <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <p className="text-3xl font-extrabold text-violet-300">{s.value}</p>
                <p className="text-sm text-slate-300 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-3xl border-2 border-violet-200 bg-gradient-to-br from-violet-50 to-blue-50 p-8 md:p-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600 text-white text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles size={13} /> {t(`${K}.aibooking.badge`)}
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{t(`${K}.aibooking.heading`)}</h2>
          <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">{t(`${K}.aibooking.intro`)}</p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {reasons.map((r, i) => {
              const Icon = reasonIcons[i % reasonIcons.length];
              return (
                <div key={i} className="rounded-2xl bg-white p-5 shadow-sm">
                  <Icon className="text-violet-600 mb-3" size={22} />
                  <h3 className="font-bold text-slate-900 mb-1">{r.title}</h3>
                  <p className="text-sm text-gray-600">{r.text}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://aibooking.dk/" target="_blank" rel="noopener" className="btn btn-primary inline-flex items-center gap-2 px-6 py-3 !bg-violet-600 hover:!bg-violet-700">
              {t(`${K}.aibooking.linkText`)} <ExternalLink size={16} />
            </a>
            <Link to="/digital/ai-reception" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-violet-300 text-violet-700 font-semibold hover:bg-white">
              {t(`${K}.aibooking.serviceLinkText`)} <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{t(`${K}.steps.heading`)}</h2>
          <ol className="grid md:grid-cols-4 gap-8 md:gap-5">
            {steps.map((s, i) => (
              <li key={i} className="relative rounded-2xl border border-gray-200 bg-white p-5 pt-8">
                <span className="absolute -top-4 left-5 w-9 h-9 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center">{i + 1}</span>
                <h3 className="font-bold text-slate-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </article>

      <BlogPostFooter />
      <FAQSection faqs={faqs} />
      <CTASection
        title={t(`${K}.ctaTitle`)}
        subtitle={t(`${K}.ctaSubtitle`)}
        primaryText={t(`${K}.ctaPrimaryText`)}
        primaryLink="/kontakt"
        secondaryText={t(`${K}.ctaSecondaryText`)}
        secondaryLink="/digital/ai-reception"
      />
    </>
  );
}
