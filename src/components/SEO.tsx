import React from 'react';
import { Helmet } from 'react-helmet-async';

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
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  keywords,
  ogImage = 'https://magnoramarketing.dk/og-image.png',
  ogType = 'website',
  articlePublishedTime,
  articleModifiedTime,
  author,
  breadcrumbs
}) => {
  const domain = 'https://magnoramarketing.dk';
  const fullCanonical = canonical ? `${domain}${canonical}` : domain;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
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
    "name": "Magnora Marketing",
    "url": domain,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${domain}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
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
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": ogImage,
    "datePublished": articlePublishedTime,
    "dateModified": articleModifiedTime || articlePublishedTime,
    "author": {
      "@type": "Person",
      "name": author || "Magnora Marketing"
    },
    "publisher": {
      "@type": "Organization",
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
      <link rel="canonical" href={fullCanonical} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
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
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Magnora Marketing" />
      <meta property="og:locale" content="da_DK" />

      {/* Article Specific Tags */}
      {ogType === 'article' && articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {ogType === 'article' && articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@MagnoraMarketing" />

      {/* Language and Mobile Tags */}
      <html lang="da" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

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