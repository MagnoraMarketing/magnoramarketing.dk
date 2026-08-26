import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function VaekstpartnerIdeMoedeTelesalg() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.VaekstpartnerIdeMoedeTelesalg.seoTitle')}
      seoDescription={t('blogPosts.VaekstpartnerIdeMoedeTelesalg.seoDescription')}
      canonical="/blog/vaekstpartner-ide-moedebooking-telesalg"
      keywords={t('blogPosts.VaekstpartnerIdeMoedeTelesalg.keywords')}
      category={t('blogPosts.VaekstpartnerIdeMoedeTelesalg.category')}
      title={t('blogPosts.VaekstpartnerIdeMoedeTelesalg.title')}
      date="2026-07-08"
      displayDate={t('blogPosts.VaekstpartnerIdeMoedeTelesalg.displayDate')}
      readTime={t('blogPosts.VaekstpartnerIdeMoedeTelesalg.readTime')}
      intro={t('blogPosts.VaekstpartnerIdeMoedeTelesalg.intro')}
      sections={t('blogPosts.VaekstpartnerIdeMoedeTelesalg.sections', { returnObjects: true }) as ArticleSection[]}
      faqs={t('blogPosts.VaekstpartnerIdeMoedeTelesalg.faqs', { returnObjects: true }) as { question: string; answer: string }[]}
    />
  );
}
