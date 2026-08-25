import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

export default function HvorforMagnoraMoedebooking() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('blogPosts.HvorforMagnoraMoedebooking.seoTitle')}
        description={t('blogPosts.HvorforMagnoraMoedebooking.seoDescription')}
        canonical="/blog/hvorfor-magnora-moedebooking"
        keywords={t('blogPosts.HvorforMagnoraMoedebooking.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.HvorforMagnoraMoedebooking.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.HvorforMagnoraMoedebooking.title')}</h1>
          <p className="text-gray-300">{t('blogPosts.HvorforMagnoraMoedebooking.metaAuthor')} · 9. april 2026 · {t('blogPosts.HvorforMagnoraMoedebooking.metaReadTime')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.HvorforMagnoraMoedebooking.intro')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvorforMagnoraMoedebooking.h2_1')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraMoedebooking.p1')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraMoedebooking.p2')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvorforMagnoraMoedebooking.h2_2')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraMoedebooking.p3')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraMoedebooking.p4')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvorforMagnoraMoedebooking.p5')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvorforMagnoraMoedebooking.h2_3')}</h2>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraMoedebooking.h3_1')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraMoedebooking.p6')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraMoedebooking.p7')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraMoedebooking.h3_2')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraMoedebooking.p8')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraMoedebooking.h3_3')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraMoedebooking.p9')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraMoedebooking.h3_4')}</h3>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvorforMagnoraMoedebooking.p10')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvorforMagnoraMoedebooking.h2_4')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvorforMagnoraMoedebooking.p11')}
        </p>
      </div>
      <CTASection
        title={t('blogPosts.HvorforMagnoraMoedebooking.ctaTitle')}
        subtitle={t('blogPosts.HvorforMagnoraMoedebooking.ctaSubtitle')}
        primaryText={t('blogPosts.HvorforMagnoraMoedebooking.ctaPrimaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPosts.HvorforMagnoraMoedebooking.ctaSecondaryText')}
        secondaryLink="/moedebooking"
      />
    </>
  );
}
