import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

export default function SaaSVsOnPremise() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('blogPosts.SaaSVsOnPremise.seoTitle')}
        description={t('blogPosts.SaaSVsOnPremise.seoDescription')}
        canonical="/blog/saas-vs-on-premise-2026"
        keywords={t('blogPosts.SaaSVsOnPremise.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.SaaSVsOnPremise.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.SaaSVsOnPremise.title')}</h1>
          <p className="text-gray-300">{t('blogPosts.SaaSVsOnPremise.metaAuthor')} · {t('blogPosts.SaaSVsOnPremise.metaDate')} · {t('blogPosts.SaaSVsOnPremise.metaReadTime')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.SaaSVsOnPremise.intro')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.SaaSVsOnPremise.s1Heading')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSVsOnPremise.s1Body1')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.SaaSVsOnPremise.s1Body2')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.SaaSVsOnPremise.s2Heading')}</h2>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.SaaSVsOnPremise.s2Sub1Heading')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSVsOnPremise.s2Sub1Body1')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSVsOnPremise.s2Sub1Body2')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.SaaSVsOnPremise.s2Sub2Heading')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSVsOnPremise.s2Sub2Body1')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.SaaSVsOnPremise.s2Sub2Body2')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.SaaSVsOnPremise.s3Heading')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSVsOnPremise.s3Body1')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSVsOnPremise.s3Body2')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.SaaSVsOnPremise.s3Body3')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.SaaSVsOnPremise.s4Heading')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSVsOnPremise.s4Body1')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSVsOnPremise.s4Body2')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.SaaSVsOnPremise.s5Heading')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSVsOnPremise.s5Body1')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.SaaSVsOnPremise.s5Body2')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.SaaSVsOnPremise.s6Heading')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.SaaSVsOnPremise.s6Body1')}
        </p>
      </div>
      <CTASection
        title={t('blogPosts.SaaSVsOnPremise.ctaTitle')}
        subtitle={t('blogPosts.SaaSVsOnPremise.ctaSubtitle')}
        primaryText={t('blogPosts.SaaSVsOnPremise.ctaPrimaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPosts.SaaSVsOnPremise.ctaSecondaryText')}
        secondaryLink="/digital/ai-integration"
      />
    </>
  );
}
