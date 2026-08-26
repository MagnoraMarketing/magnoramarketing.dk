import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

export default function HvorforMagnoraAiIntegration() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('blogPosts.HvorforMagnoraAiIntegration.seoTitle')}
        description={t('blogPosts.HvorforMagnoraAiIntegration.seoDescription')}
        canonical="/blog/hvorfor-magnora-ai-integration"
        keywords={t('blogPosts.HvorforMagnoraAiIntegration.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.HvorforMagnoraAiIntegration.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.HvorforMagnoraAiIntegration.title')}</h1>
          <p className="text-gray-300">{t('blogPosts.HvorforMagnoraAiIntegration.meta')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.HvorforMagnoraAiIntegration.intro')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvorforMagnoraAiIntegration.h2_1')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraAiIntegration.p1')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvorforMagnoraAiIntegration.p2')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvorforMagnoraAiIntegration.h2_2')}</h2>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraAiIntegration.h3_1')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraAiIntegration.p3')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraAiIntegration.p4')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraAiIntegration.h3_2')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraAiIntegration.p5')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraAiIntegration.p6')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraAiIntegration.h3_3')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraAiIntegration.p7')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvorforMagnoraAiIntegration.p8')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraAiIntegration.h3_4')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraAiIntegration.p9')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvorforMagnoraAiIntegration.p10')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvorforMagnoraAiIntegration.h2_3')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraAiIntegration.p11')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvorforMagnoraAiIntegration.p12')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvorforMagnoraAiIntegration.h2_4')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvorforMagnoraAiIntegration.p13')}
        </p>
      </div>
      <CTASection
        title={t('blogPosts.HvorforMagnoraAiIntegration.ctaTitle')}
        subtitle={t('blogPosts.HvorforMagnoraAiIntegration.ctaSubtitle')}
        primaryText={t('blogPosts.HvorforMagnoraAiIntegration.ctaPrimaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPosts.HvorforMagnoraAiIntegration.ctaSecondaryText')}
        secondaryLink="/digital/ai-integration"
      />
    </>
  );
}
