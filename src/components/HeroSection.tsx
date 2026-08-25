import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  /** Optional code-rendered background visual. When set, it replaces the photo/gradient background. */
  visual?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  visual,
}) => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Background */}
      {visual ? (
        visual
      ) : backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/75 via-blue-800/55 to-indigo-900/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-hero-gradient" />
      )}

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />

      {/* Glow orb */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="fade-in mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              {t('common.heroBadge')}
            </span>
          </div>

          <h1 className="text-white mb-6 fade-in stagger-1">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl fade-in stagger-2 font-normal">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 fade-in stagger-3">
            <Link
              to={ctaLink}
              className="btn btn-primary text-base px-8 py-4"
            >
              {ctaText}
              <ArrowRight size={16} className="ml-2" />
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                to={secondaryCtaLink}
                className="btn text-base px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white backdrop-blur-sm"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-sky-50/90 via-sky-50/40 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
