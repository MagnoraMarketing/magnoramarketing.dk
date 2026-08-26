import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function OutsourceMoedebookingFordele() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.OutsourceMoedebookingFordele.seoTitle')}
      seoDescription={t('blogPosts.OutsourceMoedebookingFordele.seoDescription')}
      canonical="/blog/outsource-moedebooking-fordele"
      keywords={t('blogPosts.OutsourceMoedebookingFordele.keywords')}
      category={t('blogPosts.OutsourceMoedebookingFordele.category')}
      title={t('blogPosts.OutsourceMoedebookingFordele.title')}
      date="2026-07-05"
      displayDate={t('blogPosts.OutsourceMoedebookingFordele.displayDate')}
      readTime={t('blogPosts.OutsourceMoedebookingFordele.readTime')}
      intro={t('blogPosts.OutsourceMoedebookingFordele.intro')}
      sections={t('blogPosts.OutsourceMoedebookingFordele.sections', { returnObjects: true }) as ArticleSection[]}
      faqs={t('blogPosts.OutsourceMoedebookingFordele.faqs', { returnObjects: true }) as { question: string; answer: string }[]}
      ctaTitle={t('blogPosts.OutsourceMoedebookingFordele.ctaTitle')}
      ctaSubtitle={t('blogPosts.OutsourceMoedebookingFordele.ctaSubtitle')}
    />
  );
}
