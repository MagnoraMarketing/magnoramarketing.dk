import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function FraIdeTilSalg() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.FraIdeTilSalg.seoTitle')}
      seoDescription={t('blogPosts.FraIdeTilSalg.seoDescription')}
      canonical="/blog/fra-ide-til-salg"
      keywords={t('blogPosts.FraIdeTilSalg.keywords')}
      category={t('blogPosts.FraIdeTilSalg.category')}
      title={t('blogPosts.FraIdeTilSalg.title')}
      date="2026-07-03"
      displayDate={t('blogPosts.FraIdeTilSalg.displayDate')}
      readTime={t('blogPosts.FraIdeTilSalg.readTime')}
      intro={t('blogPosts.FraIdeTilSalg.intro')}
      sections={t('blogPosts.FraIdeTilSalg.sections', { returnObjects: true }) as ArticleSection[]}
      faqs={t('blogPosts.FraIdeTilSalg.faqs', { returnObjects: true }) as { question: string; answer: string }[]}
      ctaSubtitle={t('blogPosts.FraIdeTilSalg.ctaSubtitle')}
    />
  );
}
