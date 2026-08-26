import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

export default function OutboundSales2026() {
  const { t } = useTranslation();
  const intro1Body = t('blogPosts.OutboundSales2026.intro1Body', { returnObjects: true }) as string[];
  const pillars = t('blogPosts.OutboundSales2026.pillars', { returnObjects: true }) as { heading: string; body: string }[];
  const closingBody = t('blogPosts.OutboundSales2026.closingBody', { returnObjects: true }) as string[];
  return (
    <>
      <SEO
        title={t('blogPosts.OutboundSales2026.seoTitle')}
        description={t('blogPosts.OutboundSales2026.seoDescription')}
        canonical="/blog/effektive-telemarketing-strategier-2025"
        keywords={t('blogPosts.OutboundSales2026.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.OutboundSales2026.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.OutboundSales2026.h1')}</h1>
          <p className="text-gray-300">{t('blogPosts.OutboundSales2026.meta')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.OutboundSales2026.intro')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.OutboundSales2026.intro1Heading')}</h2>
        {intro1Body.map((p, i) => (
          <p key={i} className={i === intro1Body.length - 1 ? 'text-gray-600 mb-6' : 'text-gray-600 mb-4'}>
            {p}
          </p>
        ))}

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.OutboundSales2026.pillarsHeading')}</h2>

        {pillars.map((pillar, i) => (
          <React.Fragment key={i}>
            <h3 className="text-xl font-semibold mb-3 mt-6">{pillar.heading}</h3>
            <p className="text-gray-600 mb-4">{pillar.body}</p>
          </React.Fragment>
        ))}

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.OutboundSales2026.closingHeading')}</h2>
        {closingBody.map((p, i) => (
          <p key={i} className={i === closingBody.length - 1 ? 'text-gray-600 mb-6' : 'text-gray-600 mb-4'}>
            {p}
          </p>
        ))}
      </div>
      <CTASection
        title={t('blogPosts.OutboundSales2026.cta.title')}
        subtitle={t('blogPosts.OutboundSales2026.cta.subtitle')}
        primaryText={t('blogPosts.OutboundSales2026.cta.primaryText')}
        primaryLink="/samarbejdspartner"
        secondaryText={t('blogPosts.OutboundSales2026.cta.secondaryText')}
        secondaryLink="/ydelser"
      />
    </>
  );
}
