import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function AiKundeserviceDoegnetRundt() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.AiKundeserviceDoegnetRundt.seoTitle')}
      seoDescription={t('blogPosts.AiKundeserviceDoegnetRundt.seoDescription')}
      canonical="/blog/ai-kundeservice-doegnet-rundt"
      keywords={t('blogPosts.AiKundeserviceDoegnetRundt.keywords')}
      category={t('blogPosts.AiKundeserviceDoegnetRundt.category')}
      title={t('blogPosts.AiKundeserviceDoegnetRundt.title')}
      date="2026-07-15"
      displayDate={t('blogPosts.AiKundeserviceDoegnetRundt.displayDate')}
      readTime={t('blogPosts.AiKundeserviceDoegnetRundt.readTime')}
      intro={t('blogPosts.AiKundeserviceDoegnetRundt.intro')}
      sections={t('blogPosts.AiKundeserviceDoegnetRundt.sections', { returnObjects: true }) as ArticleSection[]}
      faqs={t('blogPosts.AiKundeserviceDoegnetRundt.faqs', { returnObjects: true }) as { question: string; answer: string }[]}
      jobCta={{
        heading: t('blogPosts.AiKundeserviceDoegnetRundt.jobCtaHeading'),
        body: t('blogPosts.AiKundeserviceDoegnetRundt.jobCtaBody'),
        linkText: t('blogPosts.AiKundeserviceDoegnetRundt.jobCtaLinkText'),
        link: '/jobs/ai-konsulent',
      }}
      ctaTitle={t('blogPosts.AiKundeserviceDoegnetRundt.ctaTitle')}
      ctaSubtitle={t('blogPosts.AiKundeserviceDoegnetRundt.ctaSubtitle')}
      ctaSecondaryText={t('blogPosts.AiKundeserviceDoegnetRundt.ctaSecondaryText')}
      ctaSecondaryLink="/jobs/ai-konsulent"
    />
  );
}
