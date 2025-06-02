
import { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor = () => {
  useEffect(() => {
    // Core Web Vitals monitoring
    const measurePerformance = () => {
      const metrics: PerformanceMetrics = {};

      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as any;
            metrics.lcp = lastEntry.startTime;
            console.log('LCP:', metrics.lcp);
          });
          lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

          // First Contentful Paint (FCP)
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint') as any;
            if (fcpEntry) {
              metrics.fcp = fcpEntry.startTime;
              console.log('FCP:', metrics.fcp);
            }
          });
          fcpObserver.observe({ type: 'paint', buffered: true });

          // Cumulative Layout Shift (CLS)
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
            metrics.cls = clsValue;
            console.log('CLS:', metrics.cls);
          });
          clsObserver.observe({ type: 'layout-shift', buffered: true });

          // Time to First Byte (TTFB)
          const navigationEntry = performance.getEntriesByType('navigation')[0] as any;
          if (navigationEntry) {
            metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
            console.log('TTFB:', metrics.ttfb);
          }

        } catch (error) {
          console.warn('Performance monitoring not supported:', error);
        }
      }

      // Resource loading performance
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter((resource: any) => resource.duration > 1000);
      if (slowResources.length > 0) {
        console.warn('Slow loading resources:', slowResources);
      }

      return metrics;
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      setTimeout(measurePerformance, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(measurePerformance, 1000);
      });
    }

    // Monitor page visibility for better metrics
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Send performance data when user leaves page
        const metrics = measurePerformance();
        // Here you could send metrics to analytics service
        console.log('Page performance metrics:', metrics);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
