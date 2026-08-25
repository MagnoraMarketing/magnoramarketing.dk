import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

interface Tool {
  heading: string;
  body: string;
}

export default function BedsteSaaSTools2026() {
  const { t } = useTranslation();
  const tools = t('blogPosts.BedsteSaaSTools2026.tools', { returnObjects: true }) as Tool[];
  return (
    <>
      <SEO
        title={t('blogPosts.BedsteSaaSTools2026.seoTitle')}
        description={t('blogPosts.BedsteSaaSTools2026.seoDescription')}
        canonical="/blog/bedste-saas-tools-2026"
        keywords={t('blogPosts.BedsteSaaSTools2026.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.BedsteSaaSTools2026.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.BedsteSaaSTools2026.h1')}</h1>
          <p className="text-gray-300">{t('blogPosts.BedsteSaaSTools2026.meta')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.BedsteSaaSTools2026.intro')}
        </p>

        {tools.map((tool, i) => (
          <React.Fragment key={i}>
            <h2 className="text-2xl font-bold mb-4 mt-10">{tool.heading}</h2>
            <p className="text-gray-600 mb-6">{tool.body}</p>
          </React.Fragment>
        ))}

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.BedsteSaaSTools2026.closingHeading')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.BedsteSaaSTools2026.closingBody')}
        </p>
      </div>
      <CTASection
        title={t('blogPosts.BedsteSaaSTools2026.cta.title')}
        subtitle={t('blogPosts.BedsteSaaSTools2026.cta.subtitle')}
        primaryText={t('blogPosts.BedsteSaaSTools2026.cta.primaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPosts.BedsteSaaSTools2026.cta.secondaryText')}
        secondaryLink="/digital/ai-integration"
      />
    </>
  );
}
