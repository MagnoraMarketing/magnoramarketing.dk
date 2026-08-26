import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function GenerativAiForretningsvaerdi() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.GenerativAiForretningsvaerdi.seoTitle')}
      seoDescription={t('blogPosts.GenerativAiForretningsvaerdi.seoDescription')}
      canonical="/blog/generativ-ai-forretningsvaerdi"
      keywords={t('blogPosts.GenerativAiForretningsvaerdi.keywords')}
      category={t('blogPosts.GenerativAiForretningsvaerdi.category')}
      title={t('blogPosts.GenerativAiForretningsvaerdi.title')}
      date="2026-07-16"
      displayDate={t('blogPosts.GenerativAiForretningsvaerdi.displayDate')}
      readTime={t('blogPosts.GenerativAiForretningsvaerdi.readTime')}
      intro={t('blogPosts.GenerativAiForretningsvaerdi.intro')}
      sections={t('blogPosts.GenerativAiForretningsvaerdi.sections', { returnObjects: true }) as ArticleSection[]}
      faqs={t('blogPosts.GenerativAiForretningsvaerdi.faqs', { returnObjects: true }) as { question: string; answer: string }[]}
      jobCta={{
        heading: t('blogPosts.GenerativAiForretningsvaerdi.jobCtaHeading'),
        body: t('blogPosts.GenerativAiForretningsvaerdi.jobCtaBody'),
        linkText: t('blogPosts.GenerativAiForretningsvaerdi.jobCtaLinkText'),
        link: '/jobs/ai-konsulent',
      }}
      ctaTitle={t('blogPosts.GenerativAiForretningsvaerdi.ctaTitle')}
      ctaSubtitle={t('blogPosts.GenerativAiForretningsvaerdi.ctaSubtitle')}
      ctaSecondaryText={t('blogPosts.GenerativAiForretningsvaerdi.ctaSecondaryText')}
      ctaSecondaryLink="/jobs/ai-konsulent"
    />
  );
}
