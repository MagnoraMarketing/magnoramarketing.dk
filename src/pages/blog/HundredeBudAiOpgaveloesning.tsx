import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function HundredeBudAiOpgaveloesning() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.HundredeBudAiOpgaveloesning.seoTitle')}
      seoDescription={t('blogPosts.HundredeBudAiOpgaveloesning.seoDescription')}
      canonical="/blog/100-bud-ai-opgaveloesning"
      keywords={t('blogPosts.HundredeBudAiOpgaveloesning.keywords')}
      category={t('blogPosts.HundredeBudAiOpgaveloesning.category')}
      title={t('blogPosts.HundredeBudAiOpgaveloesning.title')}
      date="2026-07-26"
      displayDate={t('blogPosts.HundredeBudAiOpgaveloesning.displayDate')}
      readTime={t('blogPosts.HundredeBudAiOpgaveloesning.readTime')}
      intro={t('blogPosts.HundredeBudAiOpgaveloesning.intro')}
      sections={t('blogPosts.HundredeBudAiOpgaveloesning.sections', { returnObjects: true }) as ArticleSection[]}
      faqs={t('blogPosts.HundredeBudAiOpgaveloesning.faqs', { returnObjects: true }) as { question: string; answer: string }[]}
      jobCta={{
        heading: t('blogPosts.HundredeBudAiOpgaveloesning.jobCta.heading'),
        body: t('blogPosts.HundredeBudAiOpgaveloesning.jobCta.body'),
        linkText: t('blogPosts.HundredeBudAiOpgaveloesning.jobCta.linkText'),
        link: '/jobs/ai-konsulent',
      }}
      ctaTitle={t('blogPosts.HundredeBudAiOpgaveloesning.ctaTitle')}
      ctaSubtitle={t('blogPosts.HundredeBudAiOpgaveloesning.ctaSubtitle')}
      ctaPrimaryText={t('blogPosts.HundredeBudAiOpgaveloesning.ctaPrimaryText')}
      ctaPrimaryLink="/kontakt"
      ctaSecondaryText={t('blogPosts.HundredeBudAiOpgaveloesning.ctaSecondaryText')}
      ctaSecondaryLink="/samarbejdspartner"
    />
  );
}
