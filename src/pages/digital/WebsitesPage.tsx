import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Monitor, CheckCircle, ArrowRight, Search, TrendingUp, PenTool, Gauge, Leaf, Hammer, Store, ShoppingBag, HardHat, Briefcase, Tag, Image as ImageIcon, ExternalLink } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';

export default function WebsitesPage() {
  const { t } = useTranslation();

  const features = [
    { icon: <PenTool size={36} className="text-blue-600" /> },
    { icon: <Search size={36} className="text-blue-600" /> },
    { icon: <Gauge size={36} className="text-blue-600" /> },
    { icon: <TrendingUp size={36} className="text-blue-600" /> }
  ];

  const included = t('digitalWebsites.included.items', { returnObjects: true }) as string[];

  const siteTypes = [0, 1, 2, 3, 4, 5];

  const budgetTemplates = [
    {
      image: '/references/ref-have-anlaeg.jpg',
      icon: <Leaf size={18} />,
      color: 'text-green-600 bg-green-50'
    },
    {
      image: '/references/ref-haandvaerker.jpg',
      icon: <Hammer size={18} />,
      color: 'text-orange-600 bg-orange-50'
    },
    {
      image: '/references/ref-detail.jpg',
      icon: <Store size={18} />,
      color: 'text-pink-600 bg-pink-50'
    },
    {
      image: '/references/ref-webshop.jpg',
      icon: <ShoppingBag size={18} />,
      color: 'text-indigo-600 bg-indigo-50'
    },
    {
      image: '/references/ref-entreprenoer.jpg',
      icon: <HardHat size={18} />,
      color: 'text-yellow-600 bg-yellow-50'
    },
    {
      image: '/references/ref-konsulent.jpg',
      icon: <Briefcase size={18} />,
      color: 'text-blue-600 bg-blue-50'
    }
  ];

  const showcaseSites = [
    {
      image: '/references/showcase-mtvagt.jpg',
      name: 'MT Vagt',
      url: 'https://mtvagt.dk/',
      domain: 'mtvagt.dk'
    },
    {
      image: '/references/showcase-aibooking.jpg',
      name: 'AI Booking',
      url: 'https://aibooking.dk/',
      domain: 'aibooking.dk'
    },
    {
      image: '/references/showcase-nexusmarketing.jpg',
      name: 'Nexus Marketing',
      url: 'https://nexusmarketing.dk/',
      domain: 'nexusmarketing.dk'
    },
    {
      image: '/references/showcase-somevideopost.jpg',
      name: 'Some Video Post',
      url: 'https://www.somevideopost.com/',
      domain: 'somevideopost.com'
    }
  ];

  return (
    <>
      <SEO
        title={t('digitalWebsites.seo.title')}
        description={t('digitalWebsites.seo.description')}
        canonical="/digital/hjemmesider"
        keywords={t('digitalWebsites.seo.keywords')}
      />

      <HeroSection
        title={t('digitalWebsites.hero.title')}
        subtitle={t('digitalWebsites.hero.subtitle')}
        ctaText={t('digitalWebsites.hero.cta')}
        ctaLink="/kontakt"
        backgroundImage="/heroes/hero-webdev.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('digitalWebsites.differentiators.heading')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('digitalWebsites.differentiators.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="flex gap-5 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t(`digitalWebsites.features.${i}.title`)}</h3>
                  <p className="text-gray-600">{t(`digitalWebsites.features.${i}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('digitalWebsites.included.heading')}</h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('digitalWebsites.included.subtitle')}
              </p>
              <ul className="space-y-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {t('digitalWebsites.included.cta')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/heroes/hero-webdev.jpg"
                alt={t('digitalWebsites.included.imageAlt')}
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Monitor size={48} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">{t('digitalWebsites.siteTypesSection.heading')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('digitalWebsites.siteTypesSection.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteTypes.map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                <h3 className="text-lg font-semibold mb-2 text-blue-600">{t(`digitalWebsites.siteTypes.${i}.title`)}</h3>
                <p className="text-gray-600 text-sm">{t(`digitalWebsites.siteTypes.${i}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">{t('digitalWebsites.budget.label')}</span>
            <h2 className="text-3xl font-bold mb-4">{t('digitalWebsites.budget.heading')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('digitalWebsites.budget.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                <Tag size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: t('digitalWebsites.budget.badgePrice') }} />
              </div>
              <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                <ImageIcon size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: t('digitalWebsites.budget.badgeImages') }} />
              </div>
              <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                <Gauge size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: t('digitalWebsites.budget.badgeFast') }} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {budgetTemplates.map((ref, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={ref.image}
                    alt={t('digitalWebsites.budget.imageAltTemplate', { branche: t(`digitalWebsites.budget.items.${i}.branche`) })}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-xs font-bold text-white bg-blue-600 px-3 py-1 rounded-full shadow-sm">
                    {t('digitalWebsites.budget.priceTag')}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`w-9 h-9 rounded-lg flex items-center justify-center ${ref.color}`}>
                      {ref.icon}
                    </span>
                    <h3 className="text-lg font-semibold">{t(`digitalWebsites.budget.items.${i}.branche`)}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{t(`digitalWebsites.budget.items.${i}.desc`)}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <ImageIcon size={15} className="text-blue-500" />
                    <span>{t('digitalWebsites.budget.customizeNote')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-5">{t('digitalWebsites.budget.noIndustry')}</p>
            <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              {t('digitalWebsites.budget.cta')} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">{t('digitalWebsites.showcase.label')}</span>
            <h2 className="text-3xl font-bold mb-4">{t('digitalWebsites.showcase.heading')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('digitalWebsites.showcase.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {showcaseSites.map((site, i) => (
              <a
                key={i}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={site.image}
                    alt={t('digitalWebsites.showcase.altTemplate', { name: site.name })}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {t('digitalWebsites.showcase.visitLabel')} <ExternalLink size={13} />
                  </span>
                </div>
                <div className="p-6 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{site.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{t(`digitalWebsites.showcase.items.${i}.desc`)}</p>
                  </div>
                  <span className="flex-shrink-0 flex items-center gap-1.5 text-sm font-medium text-blue-600 group-hover:gap-2.5 transition-all">
                    {site.domain} <ExternalLink size={15} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('digitalWebsites.midCta.heading')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('digitalWebsites.midCta.subtitle')}
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('digitalWebsites.midCta.cta')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('digitalWebsites.article1.heading')}</h2>
            <p className="text-gray-600 mb-4">
              {t('digitalWebsites.article1.p1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('digitalWebsites.article1.p2')}
            </p>
            <ul className="space-y-2">
              {(t('digitalWebsites.article1.list', { returnObjects: true }) as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('digitalWebsites.article2.heading')}</h2>
            <p className="text-gray-600 mb-4">
              {t('digitalWebsites.article2.p1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('digitalWebsites.article2.p2')}
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={t('digitalWebsites.faqs', { returnObjects: true }) as { question: string; answer: string }[]} />
      <CTASection
        title={t('digitalWebsites.finalCta.title')}
        subtitle={t('digitalWebsites.finalCta.subtitle')}
        primaryText={t('digitalWebsites.finalCta.primaryText')}
        primaryLink="/kontakt"
        secondaryText={t('digitalWebsites.finalCta.secondaryText')}
        secondaryLink="/priser"
      />
    </>
  );
}
