import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';

interface Section {
  heading: string;
  body: string[];
}

export default function StartupTilVaekst2026() {
  const { t } = useTranslation();
  const sections = t('blogPosts.StartupTilVaekst2026.sections', { returnObjects: true }) as Section[];
  return (
    <>
      <SEO
        title={t('blogPosts.StartupTilVaekst2026.seoTitle')}
        description={t('blogPosts.StartupTilVaekst2026.seoDescription')}
        canonical="/blog/startup-til-vaekekst-2026"
        keywords={t('blogPosts.StartupTilVaekst2026.keywords')}
      />
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{t('blogPosts.StartupTilVaekst2026.category')}</span>
          <h1 className="text-4xl font-bold text-white mb-4">{t('blogPosts.StartupTilVaekst2026.h1')}</h1>
          <p className="text-gray-300">{t('blogPosts.StartupTilVaekst2026.meta')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {t('blogPosts.StartupTilVaekst2026.intro')}
        </p>

        {sections.map((section, i) => (
          <React.Fragment key={i}>
            <h2 className="text-2xl font-bold mb-4 mt-10">{section.heading}</h2>
            {section.body.map((p, j) => (
              <p key={j} className={j === section.body.length - 1 ? 'text-gray-600 mb-6' : 'text-gray-600 mb-4'}>
                {p}
              </p>
            ))}
          </React.Fragment>
        ))}
      </div>
      <CTASection
        title={t('blogPosts.StartupTilVaekst2026.cta.title')}
        subtitle={t('blogPosts.StartupTilVaekst2026.cta.subtitle')}
        primaryText={t('blogPosts.StartupTilVaekst2026.cta.primaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPosts.StartupTilVaekst2026.cta.secondaryText')}
        secondaryLink="/telesalg"
      />
    </>
  );
}
