import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function BedsteAiLoesningerSMV() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.BedsteAiLoesningerSMV.seoTitle')}
      seoDescription={t('blogPosts.BedsteAiLoesningerSMV.seoDescription')}
      canonical="/blog/bedste-ai-loesninger-smv"
      keywords={t('blogPosts.BedsteAiLoesningerSMV.keywords')}
      category={t('blogPosts.BedsteAiLoesningerSMV.category')}
      title={t('blogPosts.BedsteAiLoesningerSMV.title')}
      date="2026-07-24"
      displayDate={t('blogPosts.BedsteAiLoesningerSMV.displayDate')}
      readTime={t('blogPosts.BedsteAiLoesningerSMV.readTime')}
      intro={t('blogPosts.BedsteAiLoesningerSMV.intro')}
      sections={t('blogPosts.BedsteAiLoesningerSMV.sections', { returnObjects: true }) as ArticleSection[]}
      faqs={t('blogPosts.BedsteAiLoesningerSMV.faqs', { returnObjects: true }) as { question: string; answer: string }[]}
      jobCta={{
        heading: t('blogPosts.BedsteAiLoesningerSMV.jobCtaHeading'),
        body: t('blogPosts.BedsteAiLoesningerSMV.jobCtaBody'),
        linkText: t('blogPosts.BedsteAiLoesningerSMV.jobCtaLinkText'),
        link: '/jobs/ai-konsulent',
      }}
      ctaTitle={t('blogPosts.BedsteAiLoesningerSMV.ctaTitle')}
      ctaSubtitle={t('blogPosts.BedsteAiLoesningerSMV.ctaSubtitle')}
      ctaSecondaryText={t('blogPosts.BedsteAiLoesningerSMV.ctaSecondaryText')}
      ctaSecondaryLink="/jobs/ai-konsulent"
    />
  );
}
