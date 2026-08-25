import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function AiSalgMoedebookingFremtid() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.AiSalgMoedebookingFremtid.seoTitle')}
      seoDescription={t('blogPosts.AiSalgMoedebookingFremtid.seoDescription')}
      canonical="/blog/ai-salg-moedebooking-fremtid"
      keywords={t('blogPosts.AiSalgMoedebookingFremtid.keywords')}
      category={t('blogPosts.AiSalgMoedebookingFremtid.category')}
      title={t('blogPosts.AiSalgMoedebookingFremtid.title')}
      date="2026-07-22"
      displayDate={t('blogPosts.AiSalgMoedebookingFremtid.displayDate')}
      readTime={t('blogPosts.AiSalgMoedebookingFremtid.readTime')}
      intro={t('blogPosts.AiSalgMoedebookingFremtid.intro')}
      sections={t('blogPosts.AiSalgMoedebookingFremtid.sections', { returnObjects: true }) as ArticleSection[]}
      faqs={t('blogPosts.AiSalgMoedebookingFremtid.faqs', { returnObjects: true }) as { question: string; answer: string }[]}
      jobCta={{
        heading: t('blogPosts.AiSalgMoedebookingFremtid.jobCta.heading'),
        body: t('blogPosts.AiSalgMoedebookingFremtid.jobCta.body'),
        linkText: t('blogPosts.AiSalgMoedebookingFremtid.jobCta.linkText'),
        link: '/jobs/ai-konsulent',
      }}
      ctaTitle={t('blogPosts.AiSalgMoedebookingFremtid.ctaTitle')}
      ctaSubtitle={t('blogPosts.AiSalgMoedebookingFremtid.ctaSubtitle')}
      ctaSecondaryText={t('blogPosts.AiSalgMoedebookingFremtid.ctaSecondaryText')}
      ctaSecondaryLink="/jobs/ai-konsulent"
    />
  );
}
