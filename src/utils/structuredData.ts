// SEO structured data utility functions

export const generateOrganizationData = () => ({
  "@type": "Organization",
  "name": "Mylli Services",
  "url": "https://mylliservices.com",
  "logo": "https://mylliservices.com/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png",
  "description": "Mylli Services: Aide à domicile professionnelle à Casablanca. Services d'aide-soignant, infirmier, garde-malade et plus.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2 Rue Ahmed Barakat",
    "addressLocality": "Casablanca",
    "addressRegion": "Grand Casablanca",
    "postalCode": "20250",
    "addressCountry": "MA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+212661234567",
    "contactType": "assistance",
    "areaServed": "MA",
    "availableLanguage": ["French", "Arabic"]
  },
  "sameAs": [
    "https://www.facebook.com/MylliServices",
    "https://www.linkedin.com/company/mylliservices",
    "https://twitter.com/mylli_services"
  ]
});

export const generateHomepageStructuredData = () => {
  const baseOrganization = generateOrganizationData();

  return {
    "@context": "https://schema.org",
    "@graph": [
      baseOrganization,
      {
        "@type": "WebSite",
        "url": "https://mylliservices.com",
        "name": "Mylli Services",
        "description": "Aide à domicile professionnelle à Casablanca: Services d'aide-soignant, infirmier, garde-malade et plus.",
        "publisher": {
          "@id": "https://mylliservices.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://mylliservices.com/#webpage",
        "url": "https://mylliservices.com",
        "name": "Accueil",
        "isPartOf": {
          "@id": "https://mylliservices.com/#website"
        },
        "primaryImageOfPage": {
          "@id": "https://mylliservices.com/#primaryimage"
        },
        "datePublished": "2023-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Mylli Services: Votre partenaire de confiance pour l'aide à domicile à Casablanca. Découvrez nos services personnalisés.",
        "breadcrumb": {
          "@id": "https://mylliservices.com/#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mylliservices.com/#breadcrumb",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://mylliservices.com",
            "name": "Accueil"
          }
        }]
      },
      {
        "@type": "ImageObject",
        "@id": "https://mylliservices.com/#primaryimage",
        "url": "https://mylliservices.com/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png",
        "width": 800,
        "height": 600
      }
    ]
  };
};

export const generateServicePageStructuredData = () => {
  const baseOrganization = generateOrganizationData();
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      baseOrganization,
      {
        "@type": "WebPage",
        "@id": "https://mylliservices.com/services",
        "url": "https://mylliservices.com/services",
        "name": "Nos Services - Aide à domicile professionnelle",
        "description": "Découvrez nos services d'aide à domicile : aide-soignant, infirmier, garde-malade jour/nuit. Soins professionnels à Casablanca et environs.",
        "isPartOf": {
          "@id": "https://mylliservices.com"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Accueil",
              "item": "https://mylliservices.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://mylliservices.com/services"
            }
          ]
        }
      },
      {
        "@type": "Service",
        "name": "Services d'aide à domicile",
        "description": "Services professionnels d'aide à domicile incluant aide-soignant, infirmier et garde-malade",
        "provider": baseOrganization,
        "areaServed": {
          "@type": "City",
          "name": "Casablanca",
          "addressCountry": "MA"
        },
        "serviceType": [
          "Aide-soignant à domicile",
          "Soins infirmiers à domicile",
          "Garde-malade jour et nuit",
          "Exécution d'ordonnance médicale"
        ]
      }
    ]
  };
};

export const generateTeamPageStructuredData = () => {
  const baseOrganization = generateOrganizationData();
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      baseOrganization,
      {
        "@type": "WebPage",
        "@id": "https://mylliservices.com/outils",
        "url": "https://mylliservices.com/outils",
        "name": "Nos Outils - Formation et sélection de l'équipe",
        "description": "Découvrez nos processus de sélection rigoureux et nos programmes de formation continue pour garantir des soins de qualité exceptionnelle.",
        "isPartOf": {
          "@id": "https://mylliservices.com"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Accueil",
              "item": "https://mylliservices.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Nos Outils",
              "item": "https://mylliservices.com/outils"
            }
          ]
        }
      },
      {
        "@type": "EducationalOrganization",
        "name": "Centre de Formation Mylli Services",
        "description": "Programme de formation continue pour nos professionnels de santé",
        "parentOrganization": baseOrganization,
        "educationalCredentialAwarded": [
          "Formation technique spécialisée",
          "Formation relationnelle",
          "Certification aux gestes d'urgence"
        ]
      }
    ]
  };
};
