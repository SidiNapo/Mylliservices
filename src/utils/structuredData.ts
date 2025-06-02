
// Utility functions for generating structured data

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mylli Services",
  "description": "Services d'aide et de soins à domicile pour personnes en perte d'autonomie à Casablanca depuis 2014",
  "url": "https://mylliservices.com",
  "logo": "https://mylliservices.com/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png",
  "image": "https://mylliservices.com/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png",
  "telephone": "+212661377438",
  "email": "info@mylliservices.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "19, rue Masmouda hay Al Hana",
    "addressLocality": "Casablanca",
    "postalCode": "20210",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.5731,
    "longitude": -7.5898
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Casablanca"
    },
    {
      "@type": "City", 
      "name": "Mohammedia"
    },
    {
      "@type": "City",
      "name": "Bouskoura"
    },
    {
      "@type": "City",
      "name": "Dar Bouazza"
    },
    {
      "@type": "City",
      "name": "Marrakech"
    },
    {
      "@type": "City",
      "name": "Rabat"
    }
  ],
  "foundingDate": "2014",
  "sameAs": [
    "https://web.facebook.com/mylliservices",
    "https://www.instagram.com/mylliservices"
  ]
});

export const generateServiceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Mylli Services"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Casablanca"
    },
    {
      "@type": "City",
      "name": "Mohammedia"
    }
  ],
  "serviceType": "Healthcare Service",
  "audience": {
    "@type": "Audience",
    "audienceType": "Seniors and people with reduced mobility"
  }
});

export const generateArticleSchema = (
  title: string,
  description: string,
  publishDate: string,
  modifiedDate: string,
  imageUrl: string,
  slug: string
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "image": imageUrl,
  "datePublished": publishDate,
  "dateModified": modifiedDate,
  "author": {
    "@type": "Organization",
    "name": "Mylli Services"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mylli Services",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mylliservices.com/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png"
    }
  },
  "url": `https://mylliservices.com/articles/${slug}`,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://mylliservices.com/articles/${slug}`
  }
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mylli Services",
  "description": "Services professionnels d'aide et de soins à domicile",
  "image": "https://mylliservices.com/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png",
  "telephone": "+212661377438",
  "email": "info@mylliservices.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "19, rue Masmouda hay Al Hana",
    "addressLocality": "Casablanca",
    "postalCode": "20210",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.5731,
    "longitude": -7.5898
  },
  "url": "https://mylliservices.com",
  "priceRange": "$$",
  "openingHours": "Mo-Su 00:00-23:59",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 33.5731,
      "longitude": -7.5898
    },
    "geoRadius": "50000"
  }
});

export const generateFAQSchema = (faqs: Array<{question: string; answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
