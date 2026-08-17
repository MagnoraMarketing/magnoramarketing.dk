import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryText: string;
  primaryLink: string;
  secondaryText?: string;
  secondaryLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, primaryText, primaryLink, secondaryText, secondaryLink }) => (
  <section className="relative overflow-hidden py-24">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />
    <div className="absolute inset-0 bg-dot-pattern opacity-30" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />

    <div className="container relative z-10 text-center">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        Magnora Marketing · Kom i gang
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to={primaryLink} className="btn btn-primary text-base px-8 py-4">
          {primaryText} <ArrowRight className="ml-2" size={18} />
        </Link>
        {secondaryText && secondaryLink && (
          <Link to={secondaryLink} className="btn text-base px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white backdrop-blur-sm">
            {secondaryText}
          </Link>
        )}
      </div>
    </div>
  </section>
);

export default CTASection;
