
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = 'soins domicile casablanca, infirmier domicile casablanca, aide soignant domicile casablanca, garde malade casablanca, soins infirmiers domicile, mylli services casablanca, aide domicile personnes agees, infirmier nuit casablanca, garde malade 24h casablanca, soins palliatifs domicile, assistance medicale domicile, infirmier liberal casablanca',
  canonicalUrl,
  ogImage = '/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png',
  ogType = 'website',
  noindex = false,
  nofollow = false,
  structuredData
}) => {
  const baseUrl = 'https://mylliservices.com';
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : undefined;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Favicon System */}
      <link rel="icon" type="image/png" sizes="32x32" href="/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png" />
      
      {/* Advanced SEO Meta */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'},max-snippet:160,max-image-preview:large,max-video-preview:30`} />
      <meta name="googlebot" content="index,follow" />
      <meta name="bingbot" content="index,follow" />
      <meta name="language" content="fr-MA" />
      <meta name="author" content="Mylli Services Casablanca" />
      <meta name="publisher" content="Mylli Services" />
      <meta name="copyright" content="Mylli Services 2024" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      
      {/* Geo Meta Tags */}
      <meta name="geo.region" content="MA-06" />
      <meta name="geo.placename" content="Casablanca, Morocco" />
      <meta name="geo.position" content="33.5731;-7.5898" />
      <meta name="ICBM" content="33.5731, -7.5898" />
      <meta name="distribution" content="local" />
      <meta name="coverage" content="Casablanca" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Mylli Services - Aide à domicile professionnelle Casablanca" />
      {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
      <meta property="og:site_name" content="Mylli Services - Soins à Domicile Casablanca" />
      <meta property="og:locale" content="fr_MA" />
      <meta property="og:locale:alternate" content="ar_MA" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mylli_services" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content="Mylli Services - Aide à domicile professionnelle Casablanca" />
      
      {/* Hreflang - Using hrefLang for React */}
      <link rel="alternate" hrefLang="fr-ma" href={fullCanonicalUrl || baseUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullCanonicalUrl || baseUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
