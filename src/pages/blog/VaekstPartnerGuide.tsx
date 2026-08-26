import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

export default function VaekstPartnerGuide() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('blogPosts.VaekstPartnerGuide.seoTitle')}
        description={t('blogPosts.VaekstPartnerGuide.seoDescription')}
        canonical="/blog/vaekst-partner-guide-2026"
        keywords={t('blogPosts.VaekstPartnerGuide.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.VaekstPartnerGuide.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.VaekstPartnerGuide.title')}</h1>
          <p className="text-gray-300">{t('blogPosts.VaekstPartnerGuide.meta')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.VaekstPartnerGuide.intro')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.VaekstPartnerGuide.h2_1')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.VaekstPartnerGuide.p1')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.VaekstPartnerGuide.p2')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.VaekstPartnerGuide.p3')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.VaekstPartnerGuide.h2_2')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.VaekstPartnerGuide.p4')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.VaekstPartnerGuide.p5')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.VaekstPartnerGuide.h2_3')}</h2>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.VaekstPartnerGuide.h3_1')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.VaekstPartnerGuide.p6')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.VaekstPartnerGuide.h3_2')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.VaekstPartnerGuide.p7')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.VaekstPartnerGuide.h3_3')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.VaekstPartnerGuide.p8')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.VaekstPartnerGuide.h3_4')}</h3>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.VaekstPartnerGuide.p9')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.VaekstPartnerGuide.h2_4')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.VaekstPartnerGuide.p10')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.VaekstPartnerGuide.p11')}
        </p>
      </div>
      <CTASection
        title={t('blogPosts.VaekstPartnerGuide.ctaTitle')}
        subtitle={t('blogPosts.VaekstPartnerGuide.ctaSubtitle')}
        primaryText={t('blogPosts.VaekstPartnerGuide.ctaPrimaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPosts.VaekstPartnerGuide.ctaSecondaryText')}
        secondaryLink="/om-os"
      />
    </>
  );
}
