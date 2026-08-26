import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

export default function ColdCallingVsInbound() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('blogPosts.ColdCallingVsInbound.seoTitle')}
        description={t('blogPosts.ColdCallingVsInbound.seoDescription')}
        canonical="/blog/cold-calling-vs-inbound-2026"
        keywords={t('blogPosts.ColdCallingVsInbound.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.ColdCallingVsInbound.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.ColdCallingVsInbound.title')}</h1>
          <p className="text-gray-300">{t('blogPosts.ColdCallingVsInbound.meta')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.ColdCallingVsInbound.intro')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.ColdCallingVsInbound.h2_1')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.ColdCallingVsInbound.p1')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.ColdCallingVsInbound.p2')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.ColdCallingVsInbound.p3')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.ColdCallingVsInbound.h2_2')}</h2>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.ColdCallingVsInbound.h3_1')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.ColdCallingVsInbound.p4')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.ColdCallingVsInbound.h3_2')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.ColdCallingVsInbound.p5')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.ColdCallingVsInbound.h3_3')}</h3>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.ColdCallingVsInbound.p6')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.ColdCallingVsInbound.h2_3')}</h2>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.ColdCallingVsInbound.h3_4')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.ColdCallingVsInbound.p7')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.ColdCallingVsInbound.h3_5')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.ColdCallingVsInbound.p8')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.ColdCallingVsInbound.h3_6')}</h3>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.ColdCallingVsInbound.p9')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.ColdCallingVsInbound.h2_4')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.ColdCallingVsInbound.p10')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.ColdCallingVsInbound.p11')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.ColdCallingVsInbound.p12')}
        </p>
      </div>
      <CTASection
        title={t('blogPosts.ColdCallingVsInbound.ctaTitle')}
        subtitle={t('blogPosts.ColdCallingVsInbound.ctaSubtitle')}
        primaryText={t('blogPosts.ColdCallingVsInbound.ctaPrimaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPosts.ColdCallingVsInbound.ctaSecondaryText')}
        secondaryLink="/telesalg"
      />
    </>
  );
}
