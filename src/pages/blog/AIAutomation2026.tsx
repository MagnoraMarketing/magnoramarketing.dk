import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

export default function AIAutomation2026() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('blogPosts.AIAutomation2026.seoTitle')}
        description={t('blogPosts.AIAutomation2026.seoDescription')}
        canonical="/blog/ai-telemarketing-fremtiden"
        keywords={t('blogPosts.AIAutomation2026.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.AIAutomation2026.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.AIAutomation2026.title')}</h1>
          <p className="text-gray-300">{t('blogPosts.AIAutomation2026.metaAuthor')} · {t('blogPosts.AIAutomation2026.metaDate')} · {t('blogPosts.AIAutomation2026.metaReadTime')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.AIAutomation2026.intro')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.AIAutomation2026.section1Heading')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.AIAutomation2026.section1Body1')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.AIAutomation2026.section1Body2')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.AIAutomation2026.section2Heading')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.AIAutomation2026.section2Body1')}
        </p>
        <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: t('blogPosts.AIAutomation2026.section2Body2') }} />
        <p className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: t('blogPosts.AIAutomation2026.section2Body3') }} />

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.AIAutomation2026.section3Heading')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.AIAutomation2026.section3Intro')}
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-gray-600 mb-6">
          <li dangerouslySetInnerHTML={{ __html: t('blogPosts.AIAutomation2026.listItem1') }} />
          <li dangerouslySetInnerHTML={{ __html: t('blogPosts.AIAutomation2026.listItem2') }} />
          <li dangerouslySetInnerHTML={{ __html: t('blogPosts.AIAutomation2026.listItem3') }} />
          <li dangerouslySetInnerHTML={{ __html: t('blogPosts.AIAutomation2026.listItem4') }} />
          <li dangerouslySetInnerHTML={{ __html: t('blogPosts.AIAutomation2026.listItem5') }} />
        </ol>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.AIAutomation2026.section4Heading')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.AIAutomation2026.section4Body1')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.AIAutomation2026.section4Body2')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.AIAutomation2026.section5Heading')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.AIAutomation2026.section5Body1')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.AIAutomation2026.section5Body2')}
        </p>
      </div>
      <CTASection
        title={t('blogPosts.AIAutomation2026.ctaTitle')}
        subtitle={t('blogPosts.AIAutomation2026.ctaSubtitle')}
        primaryText={t('blogPosts.AIAutomation2026.ctaPrimaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPosts.AIAutomation2026.ctaSecondaryText')}
        secondaryLink="/digital/ai-integration"
      />
    </>
  );
}
