import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BadgeCheck, Code2, Eye, FlaskConical, Gamepad2, Gift, Globe, GraduationCap, Lightbulb, Megaphone, Monitor, Smartphone, Sparkles } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';
import PriceCalculator from '../../components/PriceCalculator';
import { GameConcept, GameConceptArt, ProcessArt, ProcessStep } from '../../components/GameVisuals';

type Item = { title: string; desc: string };
type Example = { name: string; genre: string; platform: string; desc: string };
type CostRow = { type: string; price: string; time: string };
type Faq = { question: string; answer: string };

const K = 'digitalGameDevelopment';
const offerIcons = [Smartphone, Globe, Monitor, GraduationCap, Megaphone, FlaskConical];
const exampleArt: GameConcept[] = ['runner', 'puzzle', 'tycoon', 'quiz'];
const processArt: ProcessStep[] = ['concept', 'prototype', 'art', 'code', 'test', 'launch'];
const whyIcons = [Gift, Eye, BadgeCheck, Sparkles];

export default function GameDevelopmentPage() {
  const { t } = useTranslation();
  const offer = t(`${K}.offer.items`, { returnObjects: true }) as Item[];
  const examples = t(`${K}.examples.items`, { returnObjects: true }) as Example[];
  const steps = t(`${K}.process.steps`, { returnObjects: true }) as Item[];
  const costRows = t(`${K}.cost.rows`, { returnObjects: true }) as CostRow[];
  const diyBullets = t(`${K}.diy.bullets`, { returnObjects: true }) as string[];
  const howtoSteps = t(`${K}.howto.steps`, { returnObjects: true }) as string[];
  const why = t(`${K}.why.items`, { returnObjects: true }) as Item[];
  const faqs = t(`${K}.faqs`, { returnObjects: true }) as Faq[];

  return (
    <>
      <SEO
        title={t(`${K}.seo.title`)}
        description={t(`${K}.seo.description`)}
        canonical="/digital/spiludvikling"
        keywords={t(`${K}.seo.keywords`)}
      />

      <HeroSection
        title={t(`${K}.hero.title`)}
        subtitle={t(`${K}.hero.subtitle`)}
        ctaText={t(`${K}.hero.ctaText`)}
        ctaLink="/digital/spiludvikling#prisberegner"
        secondaryCtaText={t(`${K}.hero.secondaryCtaText`)}
        secondaryCtaLink="/digital/spiludvikling#pris"
        theme="game"
      />

      {/* Free price banner */}
      <section className="bg-gradient-to-r from-violet-600 to-fuchsia-600 py-8 text-white">
        <div className="container mx-auto flex flex-col items-start gap-4 px-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/15"><Gift size={24} /></span>
            <div>
              <h2 className="text-xl font-bold text-white">{t(`${K}.freePrice.title`)}</h2>
              <p className="mt-1 max-w-2xl text-white/85">{t(`${K}.freePrice.text`)}</p>
            </div>
          </div>
          <Link to="/digital/spiludvikling#prisberegner" className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-violet-700 shadow-lg hover:bg-violet-50">
            {t(`${K}.freePrice.cta`)} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* What we offer */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-violet-600">{t(`${K}.offer.label`)}</span>
            <h2 className="mb-4 text-3xl font-bold">{t(`${K}.offer.heading`)}</h2>
            <p className="text-lg text-gray-600">{t(`${K}.offer.subtitle`)}</p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offer.map((item, i) => {
              const Icon = offerIcons[i];
              return (
                <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600"><Icon size={24} /></span>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fictional examples */}
      <section className="section bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-fuchsia-300">{t(`${K}.examples.label`)}</span>
            <h2 className="mb-4 text-3xl font-bold text-white">{t(`${K}.examples.heading`)}</h2>
            <p className="text-lg text-slate-300">{t(`${K}.examples.subtitle`)}</p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {examples.map((ex, i) => (
              <article key={ex.name} className="overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-white/10">
                <div className="aspect-[16/10]">
                  <GameConceptArt concept={exampleArt[i]} />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold text-white">{ex.name}</h3>
                    <span className="rounded-full bg-fuchsia-500/20 px-3 py-1 text-xs font-semibold text-fuchsia-200">{ex.genre}</span>
                  </div>
                  <p className="mb-3 flex items-center gap-1.5 text-sm text-slate-400">
                    <Gamepad2 size={15} /> {t(`${K}.examples.platformLabel`)}: {ex.platform}
                  </p>
                  <p className="text-slate-300">{ex.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate-400">{t(`${K}.examples.disclaimer`)}</p>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-violet-50/60">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-violet-600">{t(`${K}.process.label`)}</span>
            <h2 className="mb-4 text-3xl font-bold">{t(`${K}.process.heading`)}</h2>
            <p className="text-lg text-gray-600">{t(`${K}.process.subtitle`)}</p>
          </div>
          <ol className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-violet-100">
                <div className="aspect-[5/3]">
                  <ProcessArt step={processArt[i]} />
                </div>
                <div className="p-6">
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-violet-600">{t(`${K}.process.stepLabel`)} {i + 1}</p>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PriceCalculator variants={['game']} />

      {/* SEO: what does it cost */}
      <section id="pris" className="section scroll-mt-20 bg-white">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-3 text-3xl font-bold">{t(`${K}.cost.heading`)}</h2>
          <p className="mb-6 max-w-3xl text-gray-600">{t(`${K}.cost.intro`)}</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold">{t(`${K}.cost.colType`)}</th>
                  <th className="px-5 py-4 font-semibold">{t(`${K}.cost.colPrice`)}</th>
                  <th className="px-5 py-4 font-semibold">{t(`${K}.cost.colTime`)}</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row.type} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-5 py-4 font-semibold text-slate-900">{row.type}</td>
                    <td className="whitespace-nowrap px-5 py-4 font-bold text-violet-700">{row.price}</td>
                    <td className="px-5 py-4 text-gray-600">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-500">{t(`${K}.cost.note`)}</p>
        </div>
      </section>

      {/* SEO: can you build it yourself + how to */}
      <section className="section surface-soft">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Lightbulb className="text-violet-600" size={26} />
              <h2 className="text-2xl font-bold md:text-3xl">{t(`${K}.diy.heading`)}</h2>
            </div>
            <p className="mb-4 text-gray-600">{t(`${K}.diy.p1`)}</p>
            <p className="mb-5 text-gray-600">{t(`${K}.diy.p2`)}</p>
            <ul className="space-y-2.5">
              {diyBullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700">
                  <Code2 size={18} className="mt-0.5 flex-shrink-0 text-violet-600" /> <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-sky-100">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">{t(`${K}.howto.heading`)}</h2>
            <p className="mb-5 text-gray-600">{t(`${K}.howto.intro`)}</p>
            <ol className="space-y-3">
              {howtoSteps.map((s, i) => (
                <li key={s} className="flex gap-3 text-gray-700">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-violet-600 text-sm font-bold text-white">{i + 1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">{t(`${K}.why.heading`)}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <div key={item.title} className="rounded-2xl bg-violet-50/60 p-6 text-center">
                  <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm"><Icon size={24} /></span>
                  <h3 className="mb-2 font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection
        title={t(`${K}.cta.title`)}
        subtitle={t(`${K}.cta.subtitle`)}
        primaryText={t(`${K}.cta.primaryText`)}
        primaryLink="/digital/spiludvikling#prisberegner"
        secondaryText={t(`${K}.cta.secondaryText`)}
        secondaryLink="/digital/webudvikling"
      />
    </>
  );
}
