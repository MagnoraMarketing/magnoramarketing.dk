import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

export default function WebsitekonverteringTips() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('blogPosts.WebsitekonverteringTips.seoTitle')}
        description={t('blogPosts.WebsitekonverteringTips.seoDescription')}
        canonical="/blog/website-konvertering-tips-2026"
        keywords={t('blogPosts.WebsitekonverteringTips.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.WebsitekonverteringTips.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.WebsitekonverteringTips.title')}</h1>
          <p className="text-gray-300">{t('blogPosts.WebsitekonverteringTips.meta')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.WebsitekonverteringTips.intro')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.WebsitekonverteringTips.h2_1')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.WebsitekonverteringTips.p1')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.WebsitekonverteringTips.h2_2')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.WebsitekonverteringTips.p2')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.WebsitekonverteringTips.h2_3')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.WebsitekonverteringTips.p3')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.WebsitekonverteringTips.h2_4')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.WebsitekonverteringTips.p4')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.WebsitekonverteringTips.h2_5')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.WebsitekonverteringTips.p5')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.WebsitekonverteringTips.h2_6')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.WebsitekonverteringTips.p6')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.WebsitekonverteringTips.h2_7')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.WebsitekonverteringTips.p7')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.WebsitekonverteringTips.h2_8')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.WebsitekonverteringTips.p8')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.WebsitekonverteringTips.h2_9')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.WebsitekonverteringTips.p9')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.WebsitekonverteringTips.h2_10')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.WebsitekonverteringTips.p10')}
        </p>
      </div>
      <CTASection
        title={t('blogPosts.WebsitekonverteringTips.ctaTitle')}
        subtitle={t('blogPosts.WebsitekonverteringTips.ctaSubtitle')}
        primaryText={t('blogPosts.WebsitekonverteringTips.ctaPrimaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPosts.WebsitekonverteringTips.ctaSecondaryText')}
        secondaryLink="/digital/webudvikling"
      />
    </>
  );
}
