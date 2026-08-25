import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

export default function Modebooking2026() {
  const { t } = useTranslation();
  const list1 = t('blogPosts.Modebooking2026.list1', { returnObjects: true }) as string[];
  return (
    <>
      <SEO
        title={t('blogPosts.Modebooking2026.seoTitle')}
        description={t('blogPosts.Modebooking2026.seoDescription')}
        canonical="/blog/modebooking-best-practices"
        keywords={t('blogPosts.Modebooking2026.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.Modebooking2026.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.Modebooking2026.title')}</h1>
          <p className="text-gray-300">{t('blogPosts.Modebooking2026.meta', { date: '15. februar 2026' })}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.Modebooking2026.intro')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.Modebooking2026.h2_1')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.Modebooking2026.p1')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.Modebooking2026.p2')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.Modebooking2026.h2_2')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.Modebooking2026.p3')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
          {list1.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.Modebooking2026.p4')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.Modebooking2026.h2_3')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.Modebooking2026.p5')}
        </p>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.Modebooking2026.p6')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.Modebooking2026.p7')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.Modebooking2026.h2_4')}</h2>
        <p className="text-gray-600 mb-4">
          {t('blogPosts.Modebooking2026.p8')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.Modebooking2026.p9')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.Modebooking2026.h2_5')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.Modebooking2026.p10')}
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">{t('blogPosts.Modebooking2026.h2_6')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blogPosts.Modebooking2026.p11')}
        </p>
      </div>
      <CTASection
        title={t('blogPosts.Modebooking2026.ctaTitle')}
        subtitle={t('blogPosts.Modebooking2026.ctaSubtitle')}
        primaryText={t('blogPosts.Modebooking2026.ctaPrimaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPosts.Modebooking2026.ctaSecondaryText')}
        secondaryLink="/modebooking-priser"
      />
    </>
  );
}
