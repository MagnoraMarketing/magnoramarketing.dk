import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function BlivAiKonsulentKarriere() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.BlivAiKonsulentKarriere.seoTitle')}
      seoDescription={t('blogPosts.BlivAiKonsulentKarriere.seoDescription')}
      canonical="/blog/bliv-ai-konsulent-karriere"
      keywords={t('blogPosts.BlivAiKonsulentKarriere.keywords')}
      category={t('blogPosts.BlivAiKonsulentKarriere.category')}
      title={t('blogPosts.BlivAiKonsulentKarriere.title')}
      date="2026-07-25"
      displayDate={t('blogPosts.BlivAiKonsulentKarriere.displayDate')}
      readTime={t('blogPosts.BlivAiKonsulentKarriere.readTime')}
      intro={t('blogPosts.BlivAiKonsulentKarriere.intro')}
      sections={t('blogPosts.BlivAiKonsulentKarriere.sections', { returnObjects: true }) as ArticleSection[]}
      faqs={t('blogPosts.BlivAiKonsulentKarriere.faqs', { returnObjects: true }) as { question: string; answer: string }[]}
      jobCta={{
        heading: t('blogPosts.BlivAiKonsulentKarriere.jobCta.heading'),
        body: t('blogPosts.BlivAiKonsulentKarriere.jobCta.body'),
        linkText: t('blogPosts.BlivAiKonsulentKarriere.jobCta.linkText'),
        link: '/jobs/ai-konsulent',
      }}
      ctaTitle={t('blogPosts.BlivAiKonsulentKarriere.ctaTitle')}
      ctaSubtitle={t('blogPosts.BlivAiKonsulentKarriere.ctaSubtitle')}
      ctaPrimaryText={t('blogPosts.BlivAiKonsulentKarriere.ctaPrimaryText')}
      ctaPrimaryLink="/jobs/ai-konsulent"
      ctaSecondaryText={t('blogPosts.BlivAiKonsulentKarriere.ctaSecondaryText')}
      ctaSecondaryLink="/kontakt"
    />
  );
}
