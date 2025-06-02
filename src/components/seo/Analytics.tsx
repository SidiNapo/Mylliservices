
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

interface AnalyticsProps {
  gtag?: string;
  gsc?: string;
}

const Analytics = ({ gtag, gsc }: AnalyticsProps) => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics 4 setup
    if (gtag && typeof window !== 'undefined') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gtag}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      
      gtag('js', new Date());
      gtag('config', gtag, {
        send_page_view: false // We'll manually send page views
      });

      // Make gtag available globally
      window.gtag = gtag;
    }

    // Google Search Console verification
    if (gsc) {
      let metaTag = document.querySelector('meta[name="google-site-verification"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', 'google-site-verification');
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', gsc);
    }
  }, [gtag, gsc]);

  // Track page views on route changes
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', gtag, {
        page_path: location.pathname + location.search,
        page_title: document.title
      });
      
      // Custom event for page view
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search
      });
    }
  }, [location, gtag]);

  // Track scroll depth
  useEffect(() => {
    let scrollDepth = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        ((window.scrollY + window.innerHeight) / document.body.scrollHeight) * 100
      );
      
      // Track at 25%, 50%, 75%, and 100% scroll depth
      if (scrollPercent >= 25 && scrollDepth < 25) {
        scrollDepth = 25;
        if (window.gtag) {
          window.gtag('event', 'scroll', {
            event_category: 'engagement',
            event_label: '25%'
          });
        }
      } else if (scrollPercent >= 50 && scrollDepth < 50) {
        scrollDepth = 50;
        if (window.gtag) {
          window.gtag('event', 'scroll', {
            event_category: 'engagement',
            event_label: '50%'
          });
        }
      } else if (scrollPercent >= 75 && scrollDepth < 75) {
        scrollDepth = 75;
        if (window.gtag) {
          window.gtag('event', 'scroll', {
            event_category: 'engagement',
            event_label: '75%'
          });
        }
      } else if (scrollPercent >= 100 && scrollDepth < 100) {
        scrollDepth = 100;
        if (window.gtag) {
          window.gtag('event', 'scroll', {
            event_category: 'engagement',
            event_label: '100%'
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
};

// Helper function to track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Helper function to track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Helper function to track file downloads
export const trackDownload = (fileName: string) => {
  trackEvent('file_download', 'engagement', fileName);
};

// Helper function to track external links
export const trackExternalLink = (url: string) => {
  trackEvent('click', 'external_link', url);
};

export default Analytics;
