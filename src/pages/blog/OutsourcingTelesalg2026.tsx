import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

export default function OutsourcingTelesalg2026() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('blogPosts.OutsourcingTelesalg2026.seoTitle')}
        description={t('blogPosts.OutsourcingTelesalg2026.seoDescription')}
        canonical="/blog/outsourcing-telesalg-2026"
        keywords={t('blogPosts.OutsourcingTelesalg2026.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.OutsourcingTelesalg2026.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.OutsourcingTelesalg2026.title')}</h1>
          <p className="text-gray-300">{t('blogPosts.OutsourcingTelesalg2026.metaAuthor')} · {t('blogPosts.OutsourcingTelesalg2026.metaDate')} · {t('blogPosts.OutsourcingTelesalg2026.metaReadTime')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.OutsourcingTelesalg2026.intro')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.OutsourcingTelesalg2026.benefitsHeading')}</h2>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.OutsourcingTelesalg2026.flexibilityHeading')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.OutsourcingTelesalg2026.flexibilityBody1')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.OutsourcingTelesalg2026.expertiseHeading')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.OutsourcingTelesalg2026.expertiseBody1')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.OutsourcingTelesalg2026.costHeading')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.OutsourcingTelesalg2026.costBody1')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.OutsourcingTelesalg2026.speedHeading')}</h3>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.OutsourcingTelesalg2026.speedBody1')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.OutsourcingTelesalg2026.pitfallsHeading')}</h2>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.OutsourcingTelesalg2026.pitfall1Heading')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.OutsourcingTelesalg2026.pitfall1Body1')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.OutsourcingTelesalg2026.pitfall2Heading')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.OutsourcingTelesalg2026.pitfall2Body1')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.OutsourcingTelesalg2026.pitfall3Heading')}</h3>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.OutsourcingTelesalg2026.pitfall3Body1')}
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">{t('blogPosts.OutsourcingTelesalg2026.pitfall4Heading')}</h3>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.OutsourcingTelesalg2026.pitfall4Body1')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.OutsourcingTelesalg2026.requireHeading')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.OutsourcingTelesalg2026.requireBody1')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.OutsourcingTelesalg2026.requireBody2')}
        </p>
      </div>
      <CTASection
        title={t('blogPosts.OutsourcingTelesalg2026.ctaTitle')}
        subtitle={t('blogPosts.OutsourcingTelesalg2026.ctaSubtitle')}
        primaryText={t('blogPosts.OutsourcingTelesalg2026.ctaPrimaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPosts.OutsourcingTelesalg2026.ctaSecondaryText')}
        secondaryLink="/telesalg"
      />
    </>
  );
}
