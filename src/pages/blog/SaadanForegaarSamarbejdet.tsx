import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function SaadanForegaarSamarbejdet() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.SaadanForegaarSamarbejdet.seoTitle')}
      seoDescription={t('blogPosts.SaadanForegaarSamarbejdet.seoDescription')}
      canonical="/blog/saadan-foregaar-samarbejdet"
      keywords={t('blogPosts.SaadanForegaarSamarbejdet.keywords')}
      category={t('blogPosts.SaadanForegaarSamarbejdet.category')}
      title={t('blogPosts.SaadanForegaarSamarbejdet.title')}
      date="2026-07-09"
      displayDate={t('blogPosts.SaadanForegaarSamarbejdet.displayDate')}
      readTime={t('blogPosts.SaadanForegaarSamarbejdet.readTime')}
      intro={t('blogPosts.SaadanForegaarSamarbejdet.intro')}
      sections={t('blogPosts.SaadanForegaarSamarbejdet.sections', { returnObjects: true }) as ArticleSection[]}
      faqs={t('blogPosts.SaadanForegaarSamarbejdet.faqs', { returnObjects: true }) as { question: string; answer: string }[]}
      ctaTitle={t('blogPosts.SaadanForegaarSamarbejdet.ctaTitle')}
      ctaSubtitle={t('blogPosts.SaadanForegaarSamarbejdet.ctaSubtitle')}
    />
  );
}
