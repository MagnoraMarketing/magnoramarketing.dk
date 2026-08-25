import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle from '../../components/BlogArticle';

export default function HvorforAiNu2026() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.HvorforAiNu2026.seoTitle')}
      seoDescription={t('blogPosts.HvorforAiNu2026.seoDescription')}
      canonical="/blog/hvorfor-ai-nu-2026"
      keywords={t('blogPosts.HvorforAiNu2026.keywords')}
      category={t('blogPosts.HvorforAiNu2026.category')}
      title={t('blogPosts.HvorforAiNu2026.title')}
      date="2026-07-20"
      displayDate={t('blogPosts.HvorforAiNu2026.displayDate')}
      readTime={t('blogPosts.HvorforAiNu2026.readTime')}
      intro={t('blogPosts.HvorforAiNu2026.intro')}
      sections={[
        {
          heading: t('blogPosts.HvorforAiNu2026.section1Heading'),
          body: [
            t('blogPosts.HvorforAiNu2026.section1Body'),
          ],
        },
        {
          heading: t('blogPosts.HvorforAiNu2026.section2Heading'),
          level: 2,
          bullets: [
            t('blogPosts.HvorforAiNu2026.section2Bullet1'),
            t('blogPosts.HvorforAiNu2026.section2Bullet2'),
            t('blogPosts.HvorforAiNu2026.section2Bullet3'),
            t('blogPosts.HvorforAiNu2026.section2Bullet4'),
            t('blogPosts.HvorforAiNu2026.section2Bullet5'),
          ],
        },
        {
          heading: t('blogPosts.HvorforAiNu2026.section3Heading'),
          body: [
            t('blogPosts.HvorforAiNu2026.section3Body'),
          ],
        },
        {
          heading: t('blogPosts.HvorforAiNu2026.section4Heading'),
          body: [
            t('blogPosts.HvorforAiNu2026.section4Body'),
          ],
        },
        {
          heading: t('blogPosts.HvorforAiNu2026.section5Heading'),
          body: [
            t('blogPosts.HvorforAiNu2026.section5Body'),
          ],
        },
      ]}
      faqs={[
        { question: t('blogPosts.HvorforAiNu2026.faq1Question'), answer: t('blogPosts.HvorforAiNu2026.faq1Answer') },
        { question: t('blogPosts.HvorforAiNu2026.faq2Question'), answer: t('blogPosts.HvorforAiNu2026.faq2Answer') },
        { question: t('blogPosts.HvorforAiNu2026.faq3Question'), answer: t('blogPosts.HvorforAiNu2026.faq3Answer') },
        { question: t('blogPosts.HvorforAiNu2026.faq4Question'), answer: t('blogPosts.HvorforAiNu2026.faq4Answer') },
      ]}
      jobCta={{
        heading: t('blogPosts.HvorforAiNu2026.jobCtaHeading'),
        body: t('blogPosts.HvorforAiNu2026.jobCtaBody'),
        linkText: t('blogPosts.HvorforAiNu2026.jobCtaLinkText'),
        link: '/jobs/ai-konsulent',
      }}
      ctaTitle={t('blogPosts.HvorforAiNu2026.ctaTitle')}
      ctaSubtitle={t('blogPosts.HvorforAiNu2026.ctaSubtitle')}
      ctaSecondaryText={t('blogPosts.HvorforAiNu2026.ctaSecondaryText')}
      ctaSecondaryLink="/jobs/ai-konsulent"
    />
  );
}
