
// SEO utility functions

export const generateSitemap = (routes: string[]) => {
  const baseUrl = 'https://mylliservices.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  return sitemap;
};

export const optimizeTitle = (title: string, maxLength = 60) => {
  if (title.length <= maxLength) return title;
  return title.substring(0, maxLength - 3) + '...';
};

export const optimizeDescription = (description: string, maxLength = 160) => {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3) + '...';
};

export const generateKeywords = (primary: string[], secondary: string[] = []) => {
  return [...primary, ...secondary].join(', ');
};

// Analytics and tracking function
export const trackEvent = (action: string, category: string, label?: string) => {
  // Simple event tracking implementation
  console.log(`Event tracked: ${action} - ${category}${label ? ` - ${label}` : ''}`);
  
  // In a real implementation, this would send data to analytics service
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};

// Image optimization helper
export const getOptimizedImageUrl = (src: string, width: number, quality = 80) => {
  // For future integration with image optimization service
  if (src.startsWith('/lovable-uploads/')) {
    return `${src}?w=${width}&q=${quality}`;
  }
  return src;
};

// Critical CSS inlining helper
export const inlineCriticalCSS = () => {
  const criticalCSS = `
    /* Critical above-the-fold styles */
    .container-custom { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
    .btn-primary { background: #0077C0; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; }
    .hero-section { min-height: 95vh; display: flex; align-items: center; }
    @media (max-width: 768px) {
      .container-custom { padding: 0 0.5rem; }
      .hero-section { min-height: 80vh; }
    }
  `;
  
  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
};

// Preload next page resources
export const preloadPageResources = (path: string) => {
  const routes = {
    '/services': ['/lovable-uploads/814f2ab3-ccf7-489c-a719-2651c104e2b6.png'],
    '/contact': ['/lovable-uploads/cfbe77b8-0c6a-4e5c-b8f4-b2fb19e403a5.png'],
    '/equipe': ['/lovable-uploads/5d0ce080-c5a4-42a8-8249-c2a0a65b787a.png']
  };
  
  const resources = routes[path as keyof typeof routes];
  if (resources) {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }
};

// Service Worker registration for caching
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

// Schema markup validators
export const validateSchema = (schema: object): boolean => {
  try {
    JSON.stringify(schema);
    return schema.hasOwnProperty('@context') && schema.hasOwnProperty('@type');
  } catch {
    return false;
  }
};

// Core Web Vitals optimization helpers
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap';
  fontLink.as = 'style';
  document.head.appendChild(fontLink);
  
  // Preload critical images
  const logoLink = document.createElement('link');
  logoLink.rel = 'preload';
  logoLink.href = '/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png';
  logoLink.as = 'image';
  document.head.appendChild(logoLink);
};

export const measureCoreWebVitals = () => {
  // This would integrate with web-vitals library in a real implementation
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.log(`Core Web Vital: ${entry.name}`, entry);
      });
    });
    
    observer.observe({ entryTypes: ['measure', 'paint', 'largest-contentful-paint'] });
  }
};
