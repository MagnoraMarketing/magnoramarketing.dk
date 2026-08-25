import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

export default function HvorforMagnoraTelesalg() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('blogPosts.HvorforMagnoraTelesalg.seoTitle')}
        description={t('blogPosts.HvorforMagnoraTelesalg.seoDescription')}
        canonical="/blog/hvorfor-magnora-telesalg"
        keywords={t('blogPosts.HvorforMagnoraTelesalg.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.HvorforMagnoraTelesalg.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.HvorforMagnoraTelesalg.title')}</h1>
          <p className="text-gray-300">{t('blogPosts.HvorforMagnoraTelesalg.meta')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.HvorforMagnoraTelesalg.intro')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvorforMagnoraTelesalg.h2_1')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraTelesalg.p1')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvorforMagnoraTelesalg.p2')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvorforMagnoraTelesalg.h2_2')}</h2>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraTelesalg.h3_1')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraTelesalg.p3')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraTelesalg.p4')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraTelesalg.h3_2')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraTelesalg.p5')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraTelesalg.h3_3')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraTelesalg.p6')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraTelesalg.p7')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraTelesalg.h3_4')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraTelesalg.p8')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraTelesalg.h3_5')}</h3>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvorforMagnoraTelesalg.p9')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvorforMagnoraTelesalg.h2_3')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvorforMagnoraTelesalg.p10')}
        </p>
      </div>
      <CTASection
        title={t('blogPosts.HvorforMagnoraTelesalg.ctaTitle')}
        subtitle={t('blogPosts.HvorforMagnoraTelesalg.ctaSubtitle')}
        primaryText={t('blogPosts.HvorforMagnoraTelesalg.ctaPrimaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPosts.HvorforMagnoraTelesalg.ctaSecondaryText')}
        secondaryLink="/telesalg"
      />
    </>
  );
}
