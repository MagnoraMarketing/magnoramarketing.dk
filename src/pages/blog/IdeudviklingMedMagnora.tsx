import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function IdeudviklingMedMagnora() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.IdeudviklingMedMagnora.seoTitle')}
      seoDescription={t('blogPosts.IdeudviklingMedMagnora.seoDescription')}
      canonical="/blog/ideudvikling-med-magnora"
      keywords={t('blogPosts.IdeudviklingMedMagnora.keywords')}
      category={t('blogPosts.IdeudviklingMedMagnora.category')}
      title={t('blogPosts.IdeudviklingMedMagnora.title')}
      date="2026-07-02"
      displayDate={t('blogPosts.IdeudviklingMedMagnora.displayDate')}
      readTime={t('blogPosts.IdeudviklingMedMagnora.readTime')}
      intro={t('blogPosts.IdeudviklingMedMagnora.intro')}
      sections={t('blogPosts.IdeudviklingMedMagnora.sections', { returnObjects: true }) as ArticleSection[]}
      faqs={t('blogPosts.IdeudviklingMedMagnora.faqs', { returnObjects: true }) as { question: string; answer: string }[]}
      ctaSubtitle={t('blogPosts.IdeudviklingMedMagnora.ctaSubtitle')}
    />
  );
}
