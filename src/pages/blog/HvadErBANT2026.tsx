import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

export default function HvadErBANT2026() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('blogPosts.HvadErBANT2026.seoTitle')}
        description={t('blogPosts.HvadErBANT2026.seoDescription')}
        canonical="/blog/hvad-er-bant-kvalificering"
        keywords={t('blogPosts.HvadErBANT2026.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.HvadErBANT2026.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.HvadErBANT2026.title')}</h1>
          <p className="text-gray-300">{t('blogPosts.HvadErBANT2026.meta', { date: '14. maj 2026' })}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.HvadErBANT2026.intro')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvadErBANT2026.h2_1')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvadErBANT2026.p1')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvadErBANT2026.p2')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvadErBANT2026.h2_2')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvadErBANT2026.p3')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvadErBANT2026.p4')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvadErBANT2026.p5')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvadErBANT2026.h2_3')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvadErBANT2026.p6')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvadErBANT2026.p7')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvadErBANT2026.p8')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvadErBANT2026.h2_4')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvadErBANT2026.p9')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvadErBANT2026.p10')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvadErBANT2026.p11')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvadErBANT2026.h2_5')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvadErBANT2026.p12')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvadErBANT2026.p13')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvadErBANT2026.p14')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvadErBANT2026.h2_6')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvadErBANT2026.p15')}
        </p>
      </div>
      <CTASection
        title={t('blogPosts.HvadErBANT2026.ctaTitle')}
        subtitle={t('blogPosts.HvadErBANT2026.ctaSubtitle')}
        primaryText={t('blogPosts.HvadErBANT2026.ctaPrimaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPosts.HvadErBANT2026.ctaSecondaryText')}
        secondaryLink="/telesalg"
      />
    </>
  );
}
