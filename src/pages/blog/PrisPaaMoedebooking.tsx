import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Calculator, CheckCircle2, ClipboardCheck, Lightbulb, XCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';
import { BlogBreadcrumbs, BlogPostFooter, BlogPostMeta } from '../../components/BlogPostParts';

type PriceModel = { name: string; price: string; unit: string; best: string; pros: string[]; cons: string[] };
type Factor = { factor: string; impact: string; level: 'high' | 'medium' | 'low'; note: string };
type Line = { label: string; value: string };
type Reason = { title: string; text: string };
type Faq = { question: string; answer: string };

const K = 'blogPosts.PrisPaaMoedebooking';

// Pricing guide: answer box, model cards, price-factor table and an ROI calculation.
export default function PrisPaaMoedebooking() {
  const { t } = useTranslation();
  const models = t(`${K}.models.items`, { returnObjects: true }) as PriceModel[];
  const factors = t(`${K}.factors.rows`, { returnObjects: true }) as Factor[];
  const included = t(`${K}.included.items`, { returnObjects: true }) as string[];
  const roiLines = t(`${K}.roi.lines`, { returnObjects: true }) as Line[];
  const reasons = t(`${K}.why.reasons`, { returnObjects: true }) as Reason[];
  const checklist = t(`${K}.checklist.items`, { returnObjects: true }) as string[];
  const faqs = t(`${K}.faqs`, { returnObjects: true }) as Faq[];
  const impactStyle = { high: 'bg-rose-100 text-rose-700', medium: 'bg-amber-100 text-amber-700', low: 'bg-emerald-100 text-emerald-700' };

  return (
    <>
      <SEO
        title={t(`${K}.seoTitle`)}
        description={t(`${K}.seoDescription`)}
        canonical="/blog/pris-paa-moedebooking"
        keywords={t(`${K}.keywords`)}
      />

      <div className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <BlogBreadcrumbs />
          <span className="inline-block bg-blue-500/30 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t(`${K}.category`)}</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-4xl">{t(`${K}.title`)}</h1>
          <BlogPostMeta />
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-4xl">{t(`${K}.intro`)}</p>

        {/* Short answer, written to be quoted directly by search and AI answers */}
        <div className="flex gap-4 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6 mb-16">
          <Lightbulb className="text-blue-600 flex-shrink-0 mt-1" size={24} />
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700 mb-2">{t(`${K}.answerBox.label`)}</p>
            <p className="text-slate-800 leading-relaxed">{t(`${K}.answerBox.text`)}</p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{t(`${K}.models.heading`)}</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">{t(`${K}.models.intro`)}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {models.map((m, i) => (
              <div key={i} className={`flex flex-col rounded-2xl border p-6 ${i === 1 ? 'border-blue-600 shadow-xl shadow-blue-500/10 bg-white' : 'border-gray-200 bg-white'}`}>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{m.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">{t(`${K}.models.priceLabel`)}</p>
                <p className="text-3xl font-extrabold text-blue-700 mt-1">{m.price}</p>
                <p className="text-sm text-gray-500 mb-5">{m.unit}</p>
                <p className="text-sm text-slate-700 mb-5"><strong>{t(`${K}.models.bestLabel`)}:</strong> {m.best}</p>
                <p className="text-sm font-semibold text-slate-800 mb-2">{t(`${K}.models.prosLabel`)}</p>
                <ul className="space-y-2 mb-5">
                  {m.pros.map((p, j) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-700"><CheckCircle2 size={17} className="text-emerald-600 flex-shrink-0 mt-0.5" />{p}</li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-slate-800 mb-2">{t(`${K}.models.consLabel`)}</p>
                <ul className="space-y-2">
                  {m.cons.map((c, j) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-700"><XCircle size={17} className="text-amber-500 flex-shrink-0 mt-0.5" />{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{t(`${K}.factors.heading`)}</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">{t(`${K}.factors.intro`)}</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold">{t(`${K}.factors.colFactor`)}</th>
                  <th className="px-5 py-4 font-semibold">{t(`${K}.factors.colImpact`)}</th>
                  <th className="px-5 py-4 font-semibold">{t(`${K}.factors.colNote`)}</th>
                </tr>
              </thead>
              <tbody>
                {factors.map((row, i) => (
                  <tr key={i} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-5 py-4 font-semibold text-slate-900">{row.factor}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${impactStyle[row.level]}`}>{row.impact}</span>
                    </td>
                    <td className="px-5 py-4 text-gray-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">{t(`${K}.included.heading`)}</h2>
            <p className="text-gray-600 mb-6">{t(`${K}.included.intro`)}</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {included.map((item, i) => (
                <li key={i} className="flex gap-2 rounded-xl bg-emerald-50 border border-emerald-100 p-3 text-sm text-slate-800">
                  <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-900 text-white p-7">
            <div className="flex items-center gap-3 mb-3">
              <Calculator className="text-blue-300" size={26} />
              <h2 className="text-2xl font-bold text-white">{t(`${K}.roi.heading`)}</h2>
            </div>
            <p className="text-slate-300 text-sm mb-5">{t(`${K}.roi.intro`)}</p>
            <dl className="divide-y divide-white/10">
              {roiLines.map((line, i) => (
                <div key={i} className="flex justify-between py-3 text-sm">
                  <dt className="text-slate-300">{line.label}</dt>
                  <dd className="font-semibold">{line.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 rounded-xl bg-blue-600 p-4 flex justify-between items-center">
              <span className="font-semibold">{t(`${K}.roi.resultLabel`)}</span>
              <span className="text-2xl font-extrabold">{t(`${K}.roi.resultValue`)}</span>
            </div>
            <p className="text-slate-300 text-sm mt-4">{t(`${K}.roi.note`)}</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{t(`${K}.why.heading`)}</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">{t(`${K}.why.intro`)}</p>
          <ol className="space-y-4">
            {reasons.map((r, i) => (
              <li key={i} className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-5">
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center">{i + 1}</span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{r.title}</h3>
                  <p className="text-gray-600">{r.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link to="/priser" className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-800">
            {t(`${K}.pricingLink`)} <ArrowRight size={16} />
          </Link>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-7">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck className="text-amber-600" size={26} />
            <h2 className="text-2xl font-bold text-slate-900">{t(`${K}.checklist.heading`)}</h2>
          </div>
          <ul className="space-y-3">
            {checklist.map((q, i) => (
              <li key={i} className="flex gap-3 text-slate-800">
                <span className="font-bold text-amber-600">{i + 1}.</span>{q}
              </li>
            ))}
          </ul>
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
        secondaryLink="/modebooking-priser"
      />
    </>
  );
}
