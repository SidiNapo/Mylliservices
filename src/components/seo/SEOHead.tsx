
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
  keywords = 'aide à domicile, soins à domicile, Casablanca, infirmier, aide-soignant, garde-malade',
  canonicalUrl,
  ogImage = '/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png',
  ogType = 'website',
  noindex = false,
  nofollow = false,
  structuredData
}) => {
  const baseUrl = 'https://mylliservices.com'; // Replace with your actual domain
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
      
      {/* Robots Meta */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:alt" content="Mylli Services - Aide à domicile professionnelle" />
      {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
      <meta property="og:site_name" content="Mylli Services" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mylli_services" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content="Mylli Services - Aide à domicile professionnelle" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Mylli Services" />
      <meta name="language" content="French" />
      <meta name="geo.region" content="MA-CAS" />
      <meta name="geo.placename" content="Casablanca" />
      <meta name="geo.position" content="33.5731;-7.5898" />
      <meta name="ICBM" content="33.5731, -7.5898" />
      
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
