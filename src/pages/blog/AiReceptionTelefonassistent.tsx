import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function AiReceptionTelefonassistent() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.AiReceptionTelefonassistent.seoTitle')}
      seoDescription={t('blogPosts.AiReceptionTelefonassistent.seoDescription')}
      canonical="/blog/ai-reception-telefonassistent"
      keywords={t('blogPosts.AiReceptionTelefonassistent.keywords')}
      category={t('blogPosts.AiReceptionTelefonassistent.category')}
      title={t('blogPosts.AiReceptionTelefonassistent.title')}
      date="2026-07-18"
      displayDate={t('blogPosts.AiReceptionTelefonassistent.displayDate')}
      readTime={t('blogPosts.AiReceptionTelefonassistent.readTime')}
      intro={t('blogPosts.AiReceptionTelefonassistent.intro')}
      sections={t('blogPosts.AiReceptionTelefonassistent.sections', { returnObjects: true }) as ArticleSection[]}
      faqs={t('blogPosts.AiReceptionTelefonassistent.faqs', { returnObjects: true }) as { question: string; answer: string }[]}
      jobCta={{
        heading: t('blogPosts.AiReceptionTelefonassistent.jobCtaHeading'),
        body: t('blogPosts.AiReceptionTelefonassistent.jobCtaBody'),
        linkText: t('blogPosts.AiReceptionTelefonassistent.jobCtaLinkText'),
        link: '/jobs/ai-konsulent',
      }}
      ctaTitle={t('blogPosts.AiReceptionTelefonassistent.ctaTitle')}
      ctaSubtitle={t('blogPosts.AiReceptionTelefonassistent.ctaSubtitle')}
      ctaSecondaryText={t('blogPosts.AiReceptionTelefonassistent.ctaSecondaryText')}
      ctaSecondaryLink="/jobs/ai-konsulent"
    />
  );
}
