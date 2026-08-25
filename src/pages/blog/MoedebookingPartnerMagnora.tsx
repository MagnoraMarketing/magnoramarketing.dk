import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle from '../../components/BlogArticle';

export default function MoedebookingPartnerMagnora() {
  const { t } = useTranslation();
  return (
    <BlogArticle
      seoTitle={t('blogPosts.MoedebookingPartnerMagnora.seoTitle')}
      seoDescription={t('blogPosts.MoedebookingPartnerMagnora.seoDescription')}
      canonical="/blog/moedebooking-partner-magnora"
      keywords={t('blogPosts.MoedebookingPartnerMagnora.keywords')}
      category={t('blogPosts.MoedebookingPartnerMagnora.category')}
      title={t('blogPosts.MoedebookingPartnerMagnora.title')}
      date="2026-07-04"
      displayDate={t('blogPosts.MoedebookingPartnerMagnora.displayDate')}
      readTime={t('blogPosts.MoedebookingPartnerMagnora.readTime')}
      intro={t('blogPosts.MoedebookingPartnerMagnora.intro')}
      sections={[
        {
          heading: t('blogPosts.MoedebookingPartnerMagnora.section1Heading'),
          body: [
            t('blogPosts.MoedebookingPartnerMagnora.section1Body'),
          ],
        },
        {
          heading: t('blogPosts.MoedebookingPartnerMagnora.section2Heading'),
          body: [
            t('blogPosts.MoedebookingPartnerMagnora.section2Body'),
          ],
        },
        {
          heading: t('blogPosts.MoedebookingPartnerMagnora.section3Heading'),
          body: [
            t('blogPosts.MoedebookingPartnerMagnora.section3Body'),
          ],
        },
        {
          heading: t('blogPosts.MoedebookingPartnerMagnora.section4Heading'),
          body: [
            t('blogPosts.MoedebookingPartnerMagnora.section4Body'),
          ],
        },
        {
          heading: t('blogPosts.MoedebookingPartnerMagnora.section5Heading'),
          body: [
            t('blogPosts.MoedebookingPartnerMagnora.section5Body'),
          ],
        },
      ]}
      faqs={[
        { question: t('blogPosts.MoedebookingPartnerMagnora.faq1Question'), answer: t('blogPosts.MoedebookingPartnerMagnora.faq1Answer') },
        { question: t('blogPosts.MoedebookingPartnerMagnora.faq2Question'), answer: t('blogPosts.MoedebookingPartnerMagnora.faq2Answer') },
        { question: t('blogPosts.MoedebookingPartnerMagnora.faq3Question'), answer: t('blogPosts.MoedebookingPartnerMagnora.faq3Answer') },
        { question: t('blogPosts.MoedebookingPartnerMagnora.faq4Question'), answer: t('blogPosts.MoedebookingPartnerMagnora.faq4Answer') },
        { question: t('blogPosts.MoedebookingPartnerMagnora.faq5Question'), answer: t('blogPosts.MoedebookingPartnerMagnora.faq5Answer') },
      ]}
      ctaTitle={t('blogPosts.MoedebookingPartnerMagnora.ctaTitle')}
      ctaSubtitle={t('blogPosts.MoedebookingPartnerMagnora.ctaSubtitle')}
    />
  );
}
