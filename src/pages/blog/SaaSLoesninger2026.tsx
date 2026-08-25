import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

export default function SaaSLoesninger2026() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('blogPosts.SaaSLoesninger2026.seoTitle')}
        description={t('blogPosts.SaaSLoesninger2026.seoDescription')}
        canonical="/blog/digital-omstilling-telemarketing"
        keywords={t('blogPosts.SaaSLoesninger2026.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.SaaSLoesninger2026.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.SaaSLoesninger2026.title')}</h1>
          <p className="text-gray-300">{t('blogPosts.SaaSLoesninger2026.metaAuthor')} · {t('blogPosts.SaaSLoesninger2026.metaDate')} · {t('blogPosts.SaaSLoesninger2026.metaReadTime')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.SaaSLoesninger2026.intro')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.SaaSLoesninger2026.trendsHeading')}</h2>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.SaaSLoesninger2026.trend1Heading')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSLoesninger2026.trend1Body1')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.SaaSLoesninger2026.trend1Body2')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.SaaSLoesninger2026.trend2Heading')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSLoesninger2026.trend2Body1')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.SaaSLoesninger2026.trend3Heading')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSLoesninger2026.trend3Body1')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.SaaSLoesninger2026.trend4Heading')}</h3>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.SaaSLoesninger2026.trend4Body1')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.SaaSLoesninger2026.digitalSalesHeading')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSLoesninger2026.digitalSalesBody1')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSLoesninger2026.digitalSalesBody2')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.SaaSLoesninger2026.helpHeading')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.SaaSLoesninger2026.helpBody1')}
        </p>
      </div>
      <CTASection
        title={t('blogPosts.SaaSLoesninger2026.ctaTitle')}
        subtitle={t('blogPosts.SaaSLoesninger2026.ctaSubtitle')}
        primaryText={t('blogPosts.SaaSLoesninger2026.ctaPrimaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPosts.SaaSLoesninger2026.ctaSecondaryText')}
        secondaryLink="/digital/ai-integration"
      />
    </>
  );
}
