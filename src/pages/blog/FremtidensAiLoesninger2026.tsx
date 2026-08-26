import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function FremtidensAiLoesninger2026() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.FremtidensAiLoesninger2026.seoTitle')}
      seoDescription={t('blogPosts.FremtidensAiLoesninger2026.seoDescription')}
      canonical="/blog/fremtidens-ai-loesninger-2026"
      keywords={t('blogPosts.FremtidensAiLoesninger2026.keywords')}
      category={t('blogPosts.FremtidensAiLoesninger2026.category')}
      title={t('blogPosts.FremtidensAiLoesninger2026.title')}
      date="2026-07-12"
      displayDate={t('blogPosts.FremtidensAiLoesninger2026.displayDate')}
      readTime={t('blogPosts.FremtidensAiLoesninger2026.readTime')}
      intro={t('blogPosts.FremtidensAiLoesninger2026.intro')}
      sections={t('blogPosts.FremtidensAiLoesninger2026.sections', { returnObjects: true }) as ArticleSection[]}
      faqs={t('blogPosts.FremtidensAiLoesninger2026.faqs', { returnObjects: true }) as { question: string; answer: string }[]}
      jobCta={{
        heading: t('blogPosts.FremtidensAiLoesninger2026.jobCtaHeading'),
        body: t('blogPosts.FremtidensAiLoesninger2026.jobCtaBody'),
        linkText: t('blogPosts.FremtidensAiLoesninger2026.jobCtaLinkText'),
        link: '/jobs/ai-konsulent',
      }}
      ctaTitle={t('blogPosts.FremtidensAiLoesninger2026.ctaTitle')}
      ctaSubtitle={t('blogPosts.FremtidensAiLoesninger2026.ctaSubtitle')}
      ctaSecondaryText={t('blogPosts.FremtidensAiLoesninger2026.ctaSecondaryText')}
      ctaSecondaryLink="/jobs/ai-konsulent"
    />
  );
}
