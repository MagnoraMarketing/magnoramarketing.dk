import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

export default function ArbejdeMedForsikringHjemmefra() {
  const { t } = useTranslation();
  const p = 'blogPosts.ArbejdeMedForsikringHjemmefra';
  return (
    <BlogArticle
      seoTitle={t(`${p}.seoTitle`)}
      seoDescription={t(`${p}.seoDescription`)}
      canonical="/blog/arbejde-med-forsikring-hjemmefra"
      keywords={t(`${p}.keywords`)}
      category={t(`${p}.category`)}
      title={t(`${p}.title`)}
      date="2026-11-04"
      displayDate={t(`${p}.displayDate`)}
      readTime={t(`${p}.readTime`)}
      intro={t(`${p}.intro`)}
      sections={t(`${p}.sections`, { returnObjects: true }) as ArticleSection[]}
      faqs={t(`${p}.faqs`, { returnObjects: true }) as { question: string; answer: string }[]}
      jobCta={{
        heading: t(`${p}.jobCta.heading`),
        body: t(`${p}.jobCta.body`),
        linkText: t(`${p}.jobCta.linkText`),
        link: '/jobs/forsikring-hjemmefra',
      }}
      ctaTitle={t(`${p}.ctaTitle`)}
      ctaSubtitle={t(`${p}.ctaSubtitle`)}
      ctaPrimaryText={t(`${p}.ctaPrimaryText`)}
      ctaPrimaryLink="/jobs/forsikring-hjemmefra"
      ctaSecondaryText={t(`${p}.ctaSecondaryText`)}
      ctaSecondaryLink="/jobs/pensionsordning"
    />
  );
}
