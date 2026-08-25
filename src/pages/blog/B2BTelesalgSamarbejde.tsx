import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function B2BTelesalgSamarbejde() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.B2BTelesalgSamarbejde.seoTitle')}
      seoDescription={t('blogPosts.B2BTelesalgSamarbejde.seoDescription')}
      canonical="/blog/b2b-telesalg-samarbejde"
      keywords={t('blogPosts.B2BTelesalgSamarbejde.keywords')}
      category={t('blogPosts.B2BTelesalgSamarbejde.category')}
      title={t('blogPosts.B2BTelesalgSamarbejde.title')}
      date="2026-07-07"
      displayDate={t('blogPosts.B2BTelesalgSamarbejde.displayDate')}
      readTime={t('blogPosts.B2BTelesalgSamarbejde.readTime')}
      intro={t('blogPosts.B2BTelesalgSamarbejde.intro')}
      sections={t('blogPosts.B2BTelesalgSamarbejde.sections', { returnObjects: true }) as ArticleSection[]}
      faqs={t('blogPosts.B2BTelesalgSamarbejde.faqs', { returnObjects: true }) as { question: string; answer: string }[]}
      ctaTitle={t('blogPosts.B2BTelesalgSamarbejde.ctaTitle')}
      ctaSubtitle={t('blogPosts.B2BTelesalgSamarbejde.ctaSubtitle')}
    />
  );
}
