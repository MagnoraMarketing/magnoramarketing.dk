import React from 'react';
import SEO from './SEO';
import HeroSection from './HeroSection';
import CTASection from './CTASection';

interface PagePlaceholderProps {
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  heroTitle: string;
  heroSubtitle: string;
  bodyTitle: string;
  bodyText: string;
}

/**
 * Temporary placeholder used for pages whose full content hasn't been
 * migrated yet, so routing and the production build stay unblocked.
 */
const PagePlaceholder: React.FC<PagePlaceholderProps> = ({
  seoTitle,
  seoDescription,
  canonical,
  heroTitle,
  heroSubtitle,
  bodyTitle,
  bodyText,
}) => (
  <>
    <SEO title={seoTitle} description={seoDescription} canonical={canonical} />
    <HeroSection
      title={heroTitle}
      subtitle={heroSubtitle}
      ctaText="Kontakt os"
      ctaLink="/kontakt"
    />
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{bodyTitle}</h2>
          <p className="text-lg text-gray-600">{bodyText}</p>
        </div>
      </div>
    </section>
    <CTASection
      title="Klar til at komme i gang?"
      subtitle="Kontakt Magnora Marketing for en uforpligtende snak om dine muligheder."
      primaryText="Kontakt os"
      primaryLink="/kontakt"
    />
  </>
);

export default PagePlaceholder;
