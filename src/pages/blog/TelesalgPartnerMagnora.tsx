import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function TelesalgPartnerMagnora() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.TelesalgPartnerMagnora.seoTitle')}
      seoDescription={t('blogPosts.TelesalgPartnerMagnora.seoDescription')}
      canonical="/blog/telesalg-partner-magnora"
      keywords={t('blogPosts.TelesalgPartnerMagnora.keywords')}
      category={t('blogPosts.TelesalgPartnerMagnora.category')}
      title={t('blogPosts.TelesalgPartnerMagnora.title')}
      date="2026-07-06"
      displayDate={t('blogPosts.TelesalgPartnerMagnora.displayDate')}
      readTime={t('blogPosts.TelesalgPartnerMagnora.readTime')}
      intro={t('blogPosts.TelesalgPartnerMagnora.intro')}
      sections={t('blogPosts.TelesalgPartnerMagnora.sections', { returnObjects: true }) as ArticleSection[]}
      faqs={t('blogPosts.TelesalgPartnerMagnora.faqs', { returnObjects: true }) as { question: string; answer: string }[]}
      ctaTitle={t('blogPosts.TelesalgPartnerMagnora.ctaTitle')}
      ctaSubtitle={t('blogPosts.TelesalgPartnerMagnora.ctaSubtitle')}
    />
  );
}
