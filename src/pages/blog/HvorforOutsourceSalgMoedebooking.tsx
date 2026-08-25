import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from '../../components/BlogArticle';

interface SectionsShape {
  s1: { heading: string; body1: string };
  s2: { heading: string; body1: string };
  s3: { heading: string; body1: string };
  s4: { heading: string; body1: string };
  s5: { heading: string; bullet1: string; bullet2: string; bullet3: string; bullet4: string };
  s6: { heading: string; body1: string };
}

interface FaqsShape {
  f1: { question: string; answer: string };
  f2: { question: string; answer: string };
  f3: { question: string; answer: string };
  f4: { question: string; answer: string };
  f5: { question: string; answer: string };
}

export default function HvorforOutsourceSalgMoedebooking() {
  const { t } = useTranslation();
  const s = t('blogPosts.HvorforOutsourceSalgMoedebooking.sections', { returnObjects: true }) as SectionsShape;
  const f = t('blogPosts.HvorforOutsourceSalgMoedebooking.faqs', { returnObjects: true }) as FaqsShape;

  const sections: ArticleSection[] = [
    { heading: s.s1.heading, body: [s.s1.body1] },
    { heading: s.s2.heading, body: [s.s2.body1] },
    { heading: s.s3.heading, body: [s.s3.body1] },
    { heading: s.s4.heading, body: [s.s4.body1] },
    { heading: s.s5.heading, bullets: [s.s5.bullet1, s.s5.bullet2, s.s5.bullet3, s.s5.bullet4] },
    { heading: s.s6.heading, body: [s.s6.body1] },
  ];

  const faqs = [f.f1, f.f2, f.f3, f.f4, f.f5];

  return (
    <BlogArticle
      seoTitle={t('blogPosts.HvorforOutsourceSalgMoedebooking.seoTitle')}
      seoDescription={t('blogPosts.HvorforOutsourceSalgMoedebooking.seoDescription')}
      canonical="/blog/hvorfor-outsource-salg-og-moedebooking"
      keywords={t('blogPosts.HvorforOutsourceSalgMoedebooking.keywords')}
      category={t('blogPosts.HvorforOutsourceSalgMoedebooking.category')}
      title={t('blogPosts.HvorforOutsourceSalgMoedebooking.title')}
      date="2026-07-10"
      displayDate={t('blogPosts.HvorforOutsourceSalgMoedebooking.displayDate')}
      readTime={t('blogPosts.HvorforOutsourceSalgMoedebooking.readTime')}
      intro={t('blogPosts.HvorforOutsourceSalgMoedebooking.intro')}
      sections={sections}
      faqs={faqs}
      ctaTitle={t('blogPosts.HvorforOutsourceSalgMoedebooking.ctaTitle')}
      ctaSubtitle={t('blogPosts.HvorforOutsourceSalgMoedebooking.ctaSubtitle')}
    />
  );
}
