import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, ArrowRight, ArrowLeft, Minus, Rocket, Building2, LayoutDashboard, Plus, Info } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import ContactForm from '../../components/ContactForm';
import PriceCalculator from '../../components/PriceCalculator';

interface WebsitePackage {
  name: string;
  tagline: string;
  yearly: number;
  monthly: number;
  features: string[];
}

interface CompareRow {
  label: string;
  values: string[];
}

interface Addon {
  name: string;
  price: string;
  desc: string;
}

const packageIcons = [Rocket, Building2, LayoutDashboard];
const highlightIndex = 1;

export default function WebsitePricingPage() {
  const { t, i18n } = useTranslation();
  const [billing, setBilling] = useState<'yearly' | 'monthly'>('yearly');

  const packages = t('digitalWebsitePricing.packages', { returnObjects: true }) as WebsitePackage[];
  const compareRows = t('digitalWebsitePricing.compare.rows', { returnObjects: true }) as CompareRow[];
  const addons = t('digitalWebsitePricing.addons.items', { returnObjects: true }) as Addon[];
  const terms = t('digitalWebsitePricing.terms.items', { returnObjects: true }) as string[];

  const formatNumber = (n: number) => n.toLocaleString(i18n.language === 'en' ? 'en-GB' : 'da-DK');

  const renderCell = (value: string) => {
    if (value === 'yes') {
      return <CheckCircle className="text-green-500 mx-auto" size={20} aria-label={t('digitalWebsitePricing.compare.yes')} />;
    }
    if (value === 'no') {
      return <Minus className="text-gray-300 mx-auto" size={20} aria-label={t('digitalWebsitePricing.compare.no')} />;
    }
    return <span className="text-sm text-gray-700">{value}</span>;
  };

  return (
    <>
      <SEO
        title={t('digitalWebsitePricing.seo.title')}
        description={t('digitalWebsitePricing.seo.description')}
        canonical="/digital/hjemmesider/priser"
        keywords={t('digitalWebsitePricing.seo.keywords')}
      />

      <HeroSection
        title={t('digitalWebsitePricing.hero.title')}
        subtitle={t('digitalWebsitePricing.hero.subtitle')}
        ctaText={t('digitalWebsitePricing.hero.cta')}
        ctaLink="/kontakt"
        backgroundImage="/heroes/hero-webdev.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Link to="/digital/hjemmesider" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft size={16} className="mr-1.5" /> {t('digitalWebsitePricing.back')}
          </Link>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">{t('digitalWebsitePricing.packagesHeading')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('digitalWebsitePricing.packagesSubtitle')}
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 mb-12">
            <div role="group" aria-label={t('digitalWebsitePricing.billing.label')} className="inline-flex bg-gray-100 rounded-full p-1">
              {(['yearly', 'monthly'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={billing === option}
                  onClick={() => setBilling(option)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${billing === option ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {t(`digitalWebsitePricing.billing.${option}`)}
                </button>
              ))}
            </div>
            <span className="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
              {t('digitalWebsitePricing.billing.save')}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {packages.map((pkg, i) => {
              const Icon = packageIcons[i];
              const highlight = i === highlightIndex;
              const price = billing === 'yearly' ? pkg.yearly : pkg.monthly;
              return (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col rounded-2xl p-8 border ${highlight ? 'bg-blue-600 text-white border-blue-600 shadow-xl md:-translate-y-2' : 'bg-white border-gray-200 shadow-sm'}`}
                >
                  {highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600 bg-white border border-blue-200 px-3 py-1 rounded-full shadow-sm">
                      {t('digitalWebsitePricing.popular')}
                    </span>
                  )}
                  <Icon className={`w-10 h-10 mb-4 ${highlight ? 'text-white' : 'text-blue-600'}`} />
                  <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                  <p className={`text-sm mb-6 ${highlight ? 'text-blue-100' : 'text-gray-600'}`}>{pkg.tagline}</p>
                  <p className="mb-1">
                    <span className="text-4xl font-bold">{formatNumber(price)}</span>
                    <span className={`text-sm ${highlight ? 'text-blue-100' : 'text-gray-500'}`}> {t('digitalWebsitePricing.billing.perMonth')}</span>
                  </p>
                  <p className={`text-xs mb-6 ${highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                    {t('digitalWebsitePricing.billing.exVat')} ·{' '}
                    {billing === 'yearly'
                      ? t('digitalWebsitePricing.billing.yearlyNote', { total: formatNumber(pkg.yearly * 12) })
                      : t('digitalWebsitePricing.billing.monthlyNote')}
                  </p>
                  {i > 0 && (
                    <p className={`text-sm font-semibold mb-3 ${highlight ? 'text-white' : 'text-gray-900'}`}>
                      {t('digitalWebsitePricing.includesPrevious', { name: packages[i - 1].name })}
                    </p>
                  )}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle className={`mr-2 mt-0.5 flex-shrink-0 ${highlight ? 'text-white' : 'text-green-500'}`} size={18} />
                        <span className={`text-sm ${highlight ? 'text-white' : 'text-gray-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#bestil"
                    className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${highlight ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  >
                    {t('digitalWebsitePricing.choose', { name: pkg.name })} <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PriceCalculator variants={['website']} />

      <section className="py-16 surface-soft">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('digitalWebsitePricing.compare.heading')}</h2>
          <div className="max-w-5xl mx-auto overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-500">{t('digitalWebsitePricing.compare.feature')}</th>
                  {packages.map((pkg, i) => (
                    <th key={pkg.name} className={`px-4 py-4 text-center text-sm font-bold ${i === highlightIndex ? 'text-blue-600' : 'text-gray-900'}`}>
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0">
                    <td className="px-6 py-3 text-sm text-gray-700">{row.label}</td>
                    {row.values.map((value, j) => (
                      <td key={j} className={`px-4 py-3 text-center ${j === highlightIndex ? 'bg-blue-50/50' : ''}`}>{renderCell(value)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">{t('digitalWebsitePricing.addons.heading')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('digitalWebsitePricing.addons.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {addons.map((addon, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-2xl ring-1 ring-slate-200/70 shadow-sm p-6">
                <span className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-50 text-blue-600 flex-shrink-0">
                  <Plus size={18} />
                </span>
                <div>
                  <h3 className="font-semibold">{addon.name}</h3>
                  <p className="text-blue-600 font-bold text-sm mb-1">{addon.price}</p>
                  <p className="text-gray-600 text-sm">{addon.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 bg-sky-50 rounded-2xl p-8">
            <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
              <Info size={20} className="text-blue-600" /> {t('digitalWebsitePricing.terms.heading')}
            </h3>
            <ul className="space-y-2">
              {terms.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 text-sm"><span className="text-blue-600 font-bold">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQSection faqs={t('digitalWebsitePricing.faqs', { returnObjects: true }) as { question: string; answer: string }[]} />

      <section id="bestil" className="bg-blue-600 text-white py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">{t('digitalWebsitePricing.form.heading')}</h2>
            <p className="text-xl max-w-3xl mx-auto text-white/85">{t('digitalWebsitePricing.form.subtitle')}</p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-left">
            <ContactForm presetTopic="Webudvikling" sourceLabel="Priser – skræddersyede hjemmesider" />
          </div>
        </div>
      </section>
    </>
  );
}
