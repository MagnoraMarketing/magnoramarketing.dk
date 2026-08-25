import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

interface SectionsShape {
  s1: { heading: string; body1: string; body2: string };
  s2: { heading: string; bullet1: string; bullet2: string; bullet3: string; bullet4: string; bullet5: string };
  s3: { heading: string; body1: string; body2: string };
  s4: { heading: string; body1: string };
  s5: { heading: string; body1: string };
}

interface FaqsShape {
  f1: { question: string; answer: string };
  f2: { question: string; answer: string };
  f3: { question: string; answer: string };
  f4: { question: string; answer: string };
}

export default function AiAgenterAutomatisering2026() {
  const { t } = useTranslation();
  const s = t('blogPosts.AiAgenterAutomatisering2026.sections', { returnObjects: true }) as SectionsShape;
  const f = t('blogPosts.AiAgenterAutomatisering2026.faqs', { returnObjects: true }) as FaqsShape;

  const sections: ArticleSection[] = [
    { heading: s.s1.heading, body: [s.s1.body1, s.s1.body2] },
    { heading: s.s2.heading, level: 2, bullets: [s.s2.bullet1, s.s2.bullet2, s.s2.bullet3, s.s2.bullet4, s.s2.bullet5] },
    { heading: s.s3.heading, body: [s.s3.body1, s.s3.body2] },
    { heading: s.s4.heading, body: [s.s4.body1] },
    { heading: s.s5.heading, body: [s.s5.body1] },
  ];

  const faqs = [f.f1, f.f2, f.f3, f.f4];

  return (
    <BlogArticle
      seoTitle={t('blogPosts.AiAgenterAutomatisering2026.seoTitle')}
      seoDescription={t('blogPosts.AiAgenterAutomatisering2026.seoDescription')}
      canonical="/blog/ai-agenter-automatisering-2026"
      keywords={t('blogPosts.AiAgenterAutomatisering2026.keywords')}
      category={t('blogPosts.AiAgenterAutomatisering2026.category')}
      title={t('blogPosts.AiAgenterAutomatisering2026.title')}
      date="2026-07-13"
      displayDate={t('blogPosts.AiAgenterAutomatisering2026.displayDate')}
      readTime={t('blogPosts.AiAgenterAutomatisering2026.readTime')}
      intro={t('blogPosts.AiAgenterAutomatisering2026.intro')}
      sections={sections}
      faqs={faqs}
      jobCta={{
        heading: t('blogPosts.AiAgenterAutomatisering2026.jobCta.heading'),
        body: t('blogPosts.AiAgenterAutomatisering2026.jobCta.body'),
        linkText: t('blogPosts.AiAgenterAutomatisering2026.jobCta.linkText'),
        link: '/jobs/ai-konsulent',
      }}
      ctaTitle={t('blogPosts.AiAgenterAutomatisering2026.ctaTitle')}
      ctaSubtitle={t('blogPosts.AiAgenterAutomatisering2026.ctaSubtitle')}
      ctaSecondaryText={t('blogPosts.AiAgenterAutomatisering2026.ctaSecondaryText')}
      ctaSecondaryLink="/jobs/ai-konsulent"
    />
  );
}
