import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

export default function SaaSSecurityGDPR() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('blogPosts.SaaSSecurityGDPR.seoTitle')}
        description={t('blogPosts.SaaSSecurityGDPR.seoDescription')}
        canonical="/blog/saas-security-gdpr-2026"
        keywords={t('blogPosts.SaaSSecurityGDPR.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.SaaSSecurityGDPR.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.SaaSSecurityGDPR.title')}</h1>
          <p className="text-gray-300">{t('blogPosts.SaaSSecurityGDPR.metaAuthor')} · 12. februar 2026 · {t('blogPosts.SaaSSecurityGDPR.metaReadTime')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.SaaSSecurityGDPR.intro')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.SaaSSecurityGDPR.h2_1')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSSecurityGDPR.p1')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSSecurityGDPR.p2')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.SaaSSecurityGDPR.p3')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.SaaSSecurityGDPR.h2_2')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSSecurityGDPR.p4')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSSecurityGDPR.p5')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.SaaSSecurityGDPR.p6')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.SaaSSecurityGDPR.h2_3')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSSecurityGDPR.p7')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSSecurityGDPR.p8')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.SaaSSecurityGDPR.p9')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.SaaSSecurityGDPR.h2_4')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSSecurityGDPR.p10')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSSecurityGDPR.p11')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.SaaSSecurityGDPR.h2_5')}</h2>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.SaaSSecurityGDPR.h3_1')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSSecurityGDPR.p12')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.SaaSSecurityGDPR.h3_2')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSSecurityGDPR.p13')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.SaaSSecurityGDPR.h3_3')}</h3>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.SaaSSecurityGDPR.p14')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.SaaSSecurityGDPR.h2_6')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.SaaSSecurityGDPR.p15')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.SaaSSecurityGDPR.p16')}
        </p>
      </div>
      <CTASection
        title={t('blogPosts.SaaSSecurityGDPR.ctaTitle')}
        subtitle={t('blogPosts.SaaSSecurityGDPR.ctaSubtitle')}
        primaryText={t('blogPosts.SaaSSecurityGDPR.ctaPrimaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPosts.SaaSSecurityGDPR.ctaSecondaryText')}
        secondaryLink="/digital/ai-integration"
      />
    </>
  );
}
