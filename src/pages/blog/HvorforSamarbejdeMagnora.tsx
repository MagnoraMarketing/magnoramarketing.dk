import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function HvorforSamarbejdeMagnora() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.HvorforSamarbejdeMagnora.seoTitle')}
      seoDescription={t('blogPosts.HvorforSamarbejdeMagnora.seoDescription')}
      canonical="/blog/hvorfor-samarbejde-magnora"
      keywords={t('blogPosts.HvorforSamarbejdeMagnora.keywords')}
      category={t('blogPosts.HvorforSamarbejdeMagnora.category')}
      title={t('blogPosts.HvorforSamarbejdeMagnora.title')}
      date="2026-07-01"
      displayDate={t('blogPosts.HvorforSamarbejdeMagnora.displayDate')}
      readTime={t('blogPosts.HvorforSamarbejdeMagnora.readTime')}
      intro={t('blogPosts.HvorforSamarbejdeMagnora.intro')}
      sections={t('blogPosts.HvorforSamarbejdeMagnora.sections', { returnObjects: true }) as ArticleSection[]}
      faqs={t('blogPosts.HvorforSamarbejdeMagnora.faqs', { returnObjects: true }) as { question: string; answer: string }[]}
    />
  );
}
