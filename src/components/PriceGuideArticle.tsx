import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Lightbulb, Scale, Wallet } from 'lucide-react';
import SEO from './SEO';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import PriceCalculator from './PriceCalculator';
import { BlogBreadcrumbs, BlogPostFooter, BlogPostMeta } from './BlogPostParts';
import type { CalculatorVariant } from '../data/priceCalculator';

type PriceRow = { model: string; price: string; best: string };
type Section = { heading: string; body: string[]; bullets: string[] };
type CompareRow = { label: string; inHouse: string; outsource: string };
type Example = { title: string; setup: string; price: string; result: string };
type Faq = { question: string; answer: string };

interface PriceGuideArticleProps {
  /** i18n key of the post, e.g. "blogPosts.HvadKosterTelemarketing". */
  k: string;
  canonical: string;
  calculator: CalculatorVariant[];
  secondaryLink: string;
}

// "Hvad koster …?" price guide: short answer, price table, the price calculator,
// free-text sections, in-house vs. outsourcing comparison and budget examples.
const PriceGuideArticle: React.FC<PriceGuideArticleProps> = ({ k, canonical, calculator, secondaryLink }) => {
  const { t } = useTranslation();
  const rows = t(`${k}.priceTable.rows`, { returnObjects: true }) as PriceRow[];
  const sections = t(`${k}.sections`, { returnObjects: true }) as Section[];
  const compareRows = t(`${k}.compare.rows`, { returnObjects: true }) as CompareRow[];
  const examples = t(`${k}.examples.items`, { returnObjects: true }) as Example[];
  const faqs = t(`${k}.faqs`, { returnObjects: true }) as Faq[];

  return (
    <>
      <SEO title={t(`${k}.seoTitle`)} description={t(`${k}.seoDescription`)} canonical={canonical} keywords={t(`${k}.keywords`)} />

      <div className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <BlogBreadcrumbs />
          <span className="inline-block bg-blue-500/30 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t(`${k}.category`)}</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-4xl">{t(`${k}.title`)}</h1>
          <BlogPostMeta />
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-4xl">{t(`${k}.intro`)}</p>

        {/* Short answer, written to be quoted directly by search and AI answers */}
        <div className="flex gap-4 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6 mb-14">
          <Lightbulb className="text-blue-600 flex-shrink-0 mt-1" size={24} />
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700 mb-2">{t(`${k}.answerBox.label`)}</p>
            <p className="text-slate-800 leading-relaxed">{t(`${k}.answerBox.text`)}</p>
          </div>
        </div>

        <section className="mb-14">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{t(`${k}.priceTable.heading`)}</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">{t(`${k}.priceTable.intro`)}</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold">{t(`${k}.priceTable.colModel`)}</th>
                  <th className="px-5 py-4 font-semibold">{t(`${k}.priceTable.colPrice`)}</th>
                  <th className="px-5 py-4 font-semibold">{t(`${k}.priceTable.colBest`)}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-5 py-4 font-semibold text-slate-900">{row.model}</td>
                    <td className="px-5 py-4 font-bold text-blue-700 whitespace-nowrap">{row.price}</td>
                    <td className="px-5 py-4 text-gray-600">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">{t(`${k}.priceTable.note`)}</p>
        </section>

        <div className="-mx-4 mb-16 overflow-hidden md:mx-0 md:rounded-3xl">
          <PriceCalculator variants={calculator} />
        </div>

        {sections.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{section.heading}</h2>
            {section.body.map((p, j) => (
              <p key={j} className="text-gray-600 mb-4 leading-relaxed">{p}</p>
            ))}
            {section.bullets.length > 0 && (
              <ul className="space-y-2.5 mt-1">
                {section.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-700">
                    <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <Scale className="text-blue-600" size={26} />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{t(`${k}.compare.heading`)}</h2>
          </div>
          <p className="text-gray-600 mb-6 max-w-3xl">{t(`${k}.compare.intro`)}</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-5 py-4" />
                  <th className="px-5 py-4 font-semibold text-slate-700">{t(`${k}.compare.inHouseLabel`)}</th>
                  <th className="px-5 py-4 font-semibold text-blue-700">{t(`${k}.compare.outsourceLabel`)}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {compareRows.map((row, i) => (
                  <tr key={i}>
                    <td className="px-5 py-4 font-semibold text-slate-900">{row.label}</td>
                    <td className="px-5 py-4 text-gray-600">{row.inHouse}</td>
                    <td className="px-5 py-4 text-slate-800 bg-blue-50/50">{row.outsource}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600">{t(`${k}.compare.note`)}</p>
        </section>

        <section className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <Wallet className="text-blue-600" size={26} />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{t(`${k}.examples.heading`)}</h2>
          </div>
          <p className="text-gray-600 mb-6 max-w-3xl">{t(`${k}.examples.intro`)}</p>
          <div className="grid gap-5 md:grid-cols-3">
            {examples.map((ex, i) => (
              <div key={i} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{ex.title}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-1">{ex.setup}</p>
                <p className="text-2xl font-extrabold text-blue-700">{ex.price}</p>
                <p className="text-sm text-gray-500 mt-1">{ex.result}</p>
              </div>
            ))}
          </div>
        </section>

        <Link to="/prisberegner" className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-800">
          {t(`${k}.calculatorLink`)} <ArrowRight size={16} />
        </Link>
      </article>

      <BlogPostFooter />
      <FAQSection faqs={faqs} />
      <CTASection
        title={t(`${k}.ctaTitle`)}
        subtitle={t(`${k}.ctaSubtitle`)}
        primaryText={t(`${k}.ctaPrimaryText`)}
        primaryLink="/kontakt"
        secondaryText={t(`${k}.ctaSecondaryText`)}
        secondaryLink={secondaryLink}
      />
    </>
  );
};

export default PriceGuideArticle;
