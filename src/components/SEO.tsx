import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { blogCategoryImage, blogCategoryOrder, getBlogPostByPath } from '../data/blog';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  author?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  /** Keep the page out of search results (e.g. 404 and admin pages). */
  noindex?: boolean;
}

// Google Search Console HTML-tag verification. Set VITE_GOOGLE_SITE_VERIFICATION
// (the `content` value of the tag Search Console gives you) in the Vercel project's
// environment variables; the tag is then rendered on every page, including the
// pre-rendered static HTML.
const googleSiteVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined;

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  keywords,
  ogImage: ogImageProp,
  ogType: ogTypeProp,
  articlePublishedTime: publishedProp,
  articleModifiedTime: modifiedProp,
  author,
  breadcrumbs: breadcrumbsProp,
  noindex = false
}) => {
  const { i18n, t } = useTranslation();
  const ogLocaleMap: Record<string, string> = { da: 'da_DK', en: 'en_US', es: 'es_ES' };
  const ogLocale = ogLocaleMap[i18n.language] || 'da_DK';
  const domain = 'https://magnoramarketing.dk';
  const fullCanonical = canonical ? `${domain}${canonical}` : domain;

  // Blog posts are recognised from their canonical path, so every article gets
  // og:type=article, dates, a topic image, breadcrumbs and BlogPosting data from
  // the central registry (src/data/blogPosts.json) – no per-page wiring needed.
  const blogPost = getBlogPostByPath(canonical);
  const ogType = ogTypeProp ?? (blogPost ? 'article' : 'website');
  const ogImage = ogImageProp ?? (blogPost ? `${domain}${blogCategoryImage[blogPost.category]}` : `${domain}/og-image.png`);
  const articlePublishedTime = publishedProp ?? (blogPost ? blogPost.date : undefined);
  const articleModifiedTime = modifiedProp ?? (blogPost ? blogPost.modified ?? blogPost.date : undefined);
  const blogCategories = t('blogPage.categories', { returnObjects: true }) as Array<{ label: string }>;
  const breadcrumbs = breadcrumbsProp ?? (blogPost ? [
    { name: t('blogArticle.breadcrumbHome'), url: '/' },
    { name: t('blogArticle.breadcrumbBlog'), url: '/blog' },
    { name: blogPost.title, url: canonical! },
  ] : undefined);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${domain}/#organization`,
    "name": "Magnora Marketing",
    "url": domain,
    "logo": `${domain}/logo.png`,
    "image": `${domain}/logo.png`,
    "description": "Professionel B2B telemarketing, mødebooking, leadgenerering, webudvikling og AI-integration for danske virksomheder.",
    "email": "mail@magnoramarketing.dk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Purisima 5",
      "postalCode": "46540",
      "addressLocality": "El Puig, Valencia",
      "addressCountry": "ES"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Denmark"
    },
    "knowsAbout": [
      "Telemarketing",
      "Mødebooking",
      "Leadgenerering",
      "B2B-salg",
      "Telesalg",
      "Webudvikling",
      "AI-integration",
      "SaaS-udvikling"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "mail@magnoramarketing.dk",
      "areaServed": "DK",
      "availableLanguage": ["Danish", "English", "Spanish"]
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61559179262196",
      "https://www.linkedin.com/company/nexusmarketing-dk"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${domain}/#website`,
    "name": "Magnora Marketing",
    "url": domain,
    "inLanguage": "da-DK",
    "publisher": { "@id": `${domain}/#organization` }
  };

  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${domain}${crumb.url}`
    }))
  } : null;

  const articleSchema = ogType === 'article' && articlePublishedTime ? {
    "@context": "https://schema.org",
    "@type": blogPost ? "BlogPosting" : "Article",
    "headline": blogPost?.title ?? title,
    "description": description,
    "mainEntityOfPage": { "@type": "WebPage", "@id": fullCanonical },
    "inLanguage": "da-DK",
    "image": { "@type": "ImageObject", "url": ogImage, "width": blogPost ? 1600 : 1200, "height": blogPost ? 900 : 630 },
    "datePublished": articlePublishedTime,
    "dateModified": articleModifiedTime || articlePublishedTime,
    ...(blogPost && {
      "articleSection": blogCategories[blogCategoryOrder.indexOf(blogPost.category)]?.label,
      "isPartOf": { "@type": "Blog", "@id": `${domain}/blog#blog`, "name": "Magnora Marketing Blog", "url": `${domain}/blog` },
    }),
    // The articles are written by the company's team (no individual bylines), so
    // the author is the organization itself, linked to the About page.
    "author": author && author !== "Magnora Marketing" ? { "@type": "Person", "name": author } : {
      "@type": "Organization",
      "@id": `${domain}/#organization`,
      "name": "Magnora Marketing",
      "url": `${domain}/om-os`
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${domain}/#organization`,
      "name": "Magnora Marketing",
      "logo": {
        "@type": "ImageObject",
        "url": `${domain}/logo.png`
      }
    }
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {!noindex && <link rel="canonical" href={fullCanonical} />}
      {!noindex && <link rel="alternate" hrefLang="da" href={fullCanonical} />}
      {!noindex && <link rel="alternate" hrefLang="x-default" href={fullCanonical} />}
      <meta
        name="robots"
        content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
      />
      {googleSiteVerification && <meta name="google-site-verification" content={googleSiteVerification} />}
      <meta name="author" content={author || "Magnora Marketing"} />
      <meta name="publisher" content="Magnora Marketing" />
      <meta name="language" content="Danish" />
      <meta name="geo.region" content="DK" />
      <meta name="geo.placename" content="Denmark" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={blogPost ? '1600' : '1200'} />
      <meta property="og:image:height" content={blogPost ? '900' : '630'} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Magnora Marketing" />
      <meta property="og:locale" content={ogLocale} />

      {/* Article Specific Tags */}
      {ogType === 'article' && articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {ogType === 'article' && articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {ogType === 'article' && (
        <meta property="article:author" content={author || 'Magnora Marketing'} />
      )}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@MagnoraMarketing" />

      {/* Language (viewport is already set once in index.html) */}
      <html lang={i18n.language} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;