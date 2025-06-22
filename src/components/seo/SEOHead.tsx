
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'business.business';
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
  ogType = 'business.business',
  noindex = false,
  nofollow = false,
  structuredData
}) => {
  const baseUrl = 'https://mylli-home-care-oasis-gilt.vercel.app';
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  // Rich preview description with emojis and compelling copy
  const richDescription = "🏥 Leader des soins à domicile à Casablanca depuis 2014. Services d'infirmiers et aides-soignants qualifiés disponibles 24h/24. ⭐⭐⭐⭐⭐ Soins personnalisés, professionnels et sécurisés directement chez vous. Confiance de milliers de familles marocaines.";

  return (
    <Helmet>
      {/* Enhanced Page Title with Emoji */}
      <title>🏥 {title}</title>
      <meta name="description" content={richDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Advanced SEO Meta */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'},max-snippet:160,max-image-preview:large,max-video-preview:30`} />
      <meta name="googlebot" content="index,follow" />
      <meta name="bingbot" content="index,follow" />
      <meta name="language" content="fr-MA" />
      <meta name="author" content="Mylli Services Casablanca" />
      <meta name="publisher" content="Mylli Services Maroc" />
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
      
      {/* Enhanced Open Graph Tags for Rich Preview */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="Mylli Services - Soins à Domicile Casablanca" />
      <meta property="og:title" content="Mylli Services - Soins à Domicile Professionnel Casablanca" />
      <meta property="og:description" content={richDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:secure_url" content={fullOgImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content="Mylli Services - Soins à Domicile Professionnel Casablanca" />
      <meta property="og:locale" content="fr_MA" />
      <meta property="og:locale:alternate" content="ar_MA" />
      <meta property="og:updated_time" content="2025-06-22T23:00:00+00:00" />
      
      {/* Business Information for Rich Cards */}
      {ogType === 'business.business' && (
        <>
          <meta property="business:contact_data:locality" content="Casablanca" />
          <meta property="business:contact_data:region" content="Casablanca-Settat" />
          <meta property="business:contact_data:country_name" content="Morocco" />
        </>
      )}
      
      {/* Enhanced Twitter Card Tags for Rich Preview */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Mylli_Services" />
      <meta name="twitter:creator" content="@Mylli_Services" />
      <meta name="twitter:title" content="Mylli Services - Soins à Domicile Professionnel Casablanca" />
      <meta name="twitter:description" content="🏥 Leader des soins à domicile à Casablanca depuis 2014. Services d'infirmiers et aides-soignants qualifiés 24h/24. ⭐⭐⭐⭐⭐ Soins personnalisés et professionnels chez vous." />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content="Mylli Services - Soins à Domicile Professionnel Casablanca" />
      
      {/* WhatsApp/iMessage Rich Preview */}
      <meta name="description" content={richDescription} />
      <meta name="thumbnail" content={fullOgImage} />
      <meta name="image" content={fullOgImage} />
      
      {/* Hreflang */}
      <link rel="alternate" hrefLang="fr-ma" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullCanonicalUrl} />
      
      {/* Enhanced iOS-specific favicon meta tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Mylli Services" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Mylli Services" />
      
      {/* Enhanced Structured Data for Rich Business Card */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Rich Business Card Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "Mylli Services",
          "alternateName": "Mylli Services Casablanca",
          "url": fullCanonicalUrl,
          "logo": fullOgImage,
          "image": fullOgImage,
          "description": "Leader des soins à domicile à Casablanca depuis 2014. Services d'infirmiers et aides-soignants qualifiés disponibles 24h/24.",
          "foundingDate": "2014",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "ratingCount": "200"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Casablanca",
            "addressRegion": "Casablanca-Settat",
            "addressCountry": "MA"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["French", "Arabic"],
            "hoursAvailable": "24/7"
          },
          "serviceArea": {
            "@type": "City",
            "name": "Casablanca"
          },
          "medicalSpecialty": "Home Healthcare",
          "priceRange": "$$"
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
