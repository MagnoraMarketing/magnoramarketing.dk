import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function AiSparerTidVirksomhed() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.AiSparerTidVirksomhed.seoTitle')}
      seoDescription={t('blogPosts.AiSparerTidVirksomhed.seoDescription')}
      canonical="/blog/ai-sparer-tid-virksomhed"
      keywords={t('blogPosts.AiSparerTidVirksomhed.keywords')}
      category={t('blogPosts.AiSparerTidVirksomhed.category')}
      title={t('blogPosts.AiSparerTidVirksomhed.title')}
      date="2026-07-14"
      displayDate={t('blogPosts.AiSparerTidVirksomhed.displayDate')}
      readTime={t('blogPosts.AiSparerTidVirksomhed.readTime')}
      intro={t('blogPosts.AiSparerTidVirksomhed.intro')}
      sections={t('blogPosts.AiSparerTidVirksomhed.sections', { returnObjects: true }) as ArticleSection[]}
      faqs={t('blogPosts.AiSparerTidVirksomhed.faqs', { returnObjects: true }) as { question: string; answer: string }[]}
      jobCta={{
        heading: t('blogPosts.AiSparerTidVirksomhed.jobCta.heading'),
        body: t('blogPosts.AiSparerTidVirksomhed.jobCta.body'),
        linkText: t('blogPosts.AiSparerTidVirksomhed.jobCta.linkText'),
        link: '/jobs/ai-konsulent',
      }}
      ctaTitle={t('blogPosts.AiSparerTidVirksomhed.ctaTitle')}
      ctaSubtitle={t('blogPosts.AiSparerTidVirksomhed.ctaSubtitle')}
      ctaSecondaryText={t('blogPosts.AiSparerTidVirksomhed.ctaSecondaryText')}
      ctaSecondaryLink="/jobs/ai-konsulent"
    />
  );
}
