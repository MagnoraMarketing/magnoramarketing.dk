import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Mail, Sparkles } from 'lucide-react';
import SEO from './SEO';
import FAQSection from './FAQSection';
import CTASection from './CTASection';

export interface ArticleSection {
  heading?: string;
  level?: 2 | 3;
  body?: string[];
  bullets?: string[];
}

export interface BlogArticleProps {
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  keywords: string;
  category: string;
  title: string;
  date: string;
  displayDate: string;
  readTime: string;
  intro: string;
  sections: ArticleSection[];
  faqs?: { question: string; answer: string }[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  /** Optional highlighted referral box (e.g. to a job page). Replaces the default contact box. */
  jobCta?: { heading: string; body: string; linkText: string; link: string };
  /** Optional overrides for the bottom CTA section. */
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
}

const BlogArticle: React.FC<BlogArticleProps> = ({
  seoTitle,
  seoDescription,
  canonical,
  keywords,
  category,
  title,
  date,
  displayDate,
  readTime,
  intro,
  sections,
  faqs,
  ctaTitle = 'Klar til at samarbejde med Magnora Marketing?',
  ctaSubtitle = 'Book en gratis og uforpligtende samtale om idéudvikling, mødebooking eller telesalg. Vi vender tilbage inden for én hverdag.',
  jobCta,
  ctaPrimaryText = 'Kontakt Magnora Marketing',
  ctaPrimaryLink = '/kontakt',
  ctaSecondaryText = 'Se vores ydelser',
  ctaSecondaryLink = '/ydelser',
}) => {
  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={canonical}
        keywords={keywords}
        ogType="article"
        articlePublishedTime={new Date(date).toISOString()}
        author="Magnora Marketing"
        breadcrumbs={[
          { name: 'Forside', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: title, url: canonical },
        ]}
      />

      {/* Header */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-500/30 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">{category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">{title}</h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-blue-100/80 text-sm">
            <span className="flex items-center gap-2"><span>Af Magnora Marketing-teamet</span></span>
            <span className="flex items-center gap-2"><Calendar size={15} /> {displayDate}</span>
            <span className="flex items-center gap-2"><Clock size={15} /> {readTime}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 mb-10 leading-relaxed">{intro}</p>

        {sections.map((section, i) => (
          <section key={i}>
            {section.heading && section.level !== 3 && (
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-10">{section.heading}</h2>
            )}
            {section.heading && section.level === 3 && (
              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-8">{section.heading}</h3>
            )}
            {section.body?.map((p, j) => (
              <p key={j} className="text-gray-600 mb-4 leading-relaxed">{p}</p>
            ))}
            {section.bullets && (
              <ul className="space-y-2.5 mb-6 mt-1">
                {section.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-700">
                    <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Inline CTA – job referral box when provided, otherwise the default contact box */}
        {jobCta ? (
          <div className="mt-12 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold uppercase tracking-widest mb-4">
              <Sparkles size={13} /> Ledig stilling
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{jobCta.heading}</h2>
            <p className="text-slate-600 mb-6 max-w-2xl">{jobCta.body}</p>
            <Link to={jobCta.link} className="btn btn-primary inline-flex items-center gap-2 px-7 py-3.5 !bg-violet-600 hover:!bg-violet-700">
              {jobCta.linkText} <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Lad os tage en uforpligtende snak</h2>
            <p className="text-slate-600 mb-6 max-w-2xl">
              Fortæl os om din idé, din virksomhed og dine mål via vores kontaktformular. Vi vender tilbage inden for én
              hverdag med et konkret bud på, hvordan Magnora Marketing kan hjælpe dig videre – helt uden forpligtelser.
            </p>
            <Link to="/kontakt" className="btn btn-primary inline-flex items-center gap-2 px-7 py-3.5">
              <Mail size={17} /> Gå til kontaktformularen <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </article>

      {faqs && faqs.length > 0 && <FAQSection faqs={faqs} />}

      <CTASection
        title={ctaTitle}
        subtitle={ctaSubtitle}
        primaryText={ctaPrimaryText}
        primaryLink={ctaPrimaryLink}
        secondaryText={ctaSecondaryText}
        secondaryLink={ctaSecondaryLink}
      />
    </>
  );
};

export default BlogArticle;
