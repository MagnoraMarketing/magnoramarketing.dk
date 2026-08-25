import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

export default function HvorforMagnoraWebudvikling() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('blogPosts.HvorforMagnoraWebudvikling.seoTitle')}
        description={t('blogPosts.HvorforMagnoraWebudvikling.seoDescription')}
        canonical="/blog/hvorfor-magnora-webudvikling"
        keywords={t('blogPosts.HvorforMagnoraWebudvikling.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.HvorforMagnoraWebudvikling.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.HvorforMagnoraWebudvikling.title')}</h1>
          <p className="text-gray-300">{t('blogPosts.HvorforMagnoraWebudvikling.metaAuthor')} · 19. februar 2026 · {t('blogPosts.HvorforMagnoraWebudvikling.metaReadTime')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.HvorforMagnoraWebudvikling.intro')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvorforMagnoraWebudvikling.h2_1')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraWebudvikling.p1')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraWebudvikling.p2')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvorforMagnoraWebudvikling.p3')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvorforMagnoraWebudvikling.h2_2')}</h2>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraWebudvikling.h3_1')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraWebudvikling.p4')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraWebudvikling.h3_2')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraWebudvikling.p5')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraWebudvikling.h3_3')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraWebudvikling.p6')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraWebudvikling.h3_4')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraWebudvikling.p7')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.HvorforMagnoraWebudvikling.h3_5')}</h3>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvorforMagnoraWebudvikling.p8')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvorforMagnoraWebudvikling.h2_3')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraWebudvikling.p9')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.HvorforMagnoraWebudvikling.p10')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvorforMagnoraWebudvikling.p11')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.HvorforMagnoraWebudvikling.h2_4')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.HvorforMagnoraWebudvikling.p12')}
        </p>
      </div>
      <CTASection
        title={t('blogPosts.HvorforMagnoraWebudvikling.ctaTitle')}
        subtitle={t('blogPosts.HvorforMagnoraWebudvikling.ctaSubtitle')}
        primaryText={t('blogPosts.HvorforMagnoraWebudvikling.ctaPrimaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPosts.HvorforMagnoraWebudvikling.ctaSecondaryText')}
        secondaryLink="/digital/webudvikling"
      />
    </>
  );
}
