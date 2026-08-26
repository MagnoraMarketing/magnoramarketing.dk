import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

export default function B2BSalgStrategi2026() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('blogPosts.B2BSalgStrategi2026.seoTitle')}
        description={t('blogPosts.B2BSalgStrategi2026.seoDescription')}
        canonical="/blog/b2b-salg-strategi-2026"
        keywords={t('blogPosts.B2BSalgStrategi2026.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.B2BSalgStrategi2026.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.B2BSalgStrategi2026.title')}</h1>
          <p className="text-gray-300">{t('blogPosts.B2BSalgStrategi2026.metaAuthor')} · {t('blogPosts.B2BSalgStrategi2026.metaDate')} · {t('blogPosts.B2BSalgStrategi2026.metaReadTime')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.B2BSalgStrategi2026.intro')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.B2BSalgStrategi2026.f1Heading')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.B2BSalgStrategi2026.f1Body1')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.B2BSalgStrategi2026.f1Body2')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.B2BSalgStrategi2026.f1Body3')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.B2BSalgStrategi2026.f2Heading')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.B2BSalgStrategi2026.f2Body1')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.B2BSalgStrategi2026.f2Body2')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.B2BSalgStrategi2026.f3Heading')}</h2>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.B2BSalgStrategi2026.f3Sub1Heading')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.B2BSalgStrategi2026.f3Sub1Body')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.B2BSalgStrategi2026.f3Sub2Heading')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.B2BSalgStrategi2026.f3Sub2Body')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.B2BSalgStrategi2026.f3Sub3Heading')}</h3>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.B2BSalgStrategi2026.f3Sub3Body')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.B2BSalgStrategi2026.f4Heading')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.B2BSalgStrategi2026.f4Body1')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.B2BSalgStrategi2026.f4Body2')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.B2BSalgStrategi2026.f5Heading')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.B2BSalgStrategi2026.f5Body1')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.B2BSalgStrategi2026.f5Body2')}
        </p>
      </div>
      <CTASection
        title={t('blogPosts.B2BSalgStrategi2026.ctaTitle')}
        subtitle={t('blogPosts.B2BSalgStrategi2026.ctaSubtitle')}
        primaryText={t('blogPosts.B2BSalgStrategi2026.ctaPrimaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPosts.B2BSalgStrategi2026.ctaSecondaryText')}
        secondaryLink="/telesalg"
      />
    </>
  );
}
