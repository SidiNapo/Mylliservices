
// Performance monitoring and Core Web Vitals tracking

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];

  init() {
    this.measureCoreWebVitals();
    this.measureResourceTiming();
    this.measureLongTasks();
  }

  private measureCoreWebVitals() {
    // First Contentful Paint
    this.measureFCP();
    
    // Largest Contentful Paint
    this.measureLCP();
    
    // Cumulative Layout Shift
    this.measureCLS();
    
    // First Input Delay
    this.measureFID();
  }

  private measureFCP() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        this.recordMetric('FCP', fcp.startTime);
      }
    });
    observer.observe({ type: 'paint', buffered: true });
  }

  private measureLCP() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.recordMetric('LCP', lastEntry.startTime);
    });
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  }

  private measureCLS() {
    let clsScore = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsScore += (entry as any).value;
        }
      }
      this.recordMetric('CLS', clsScore);
    });
    observer.observe({ type: 'layout-shift', buffered: true });
  }

  private measureFID() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fid = entries[0];
      this.recordMetric('FID', fid.processingStart - fid.startTime);
    });
    observer.observe({ type: 'first-input', buffered: true });
  }

  private measureResourceTiming() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.transferSize > 100000) { // Resources larger than 100KB
          console.warn(`Large resource detected: ${entry.name} (${Math.round(entry.transferSize / 1024)}KB)`);
        }
      });
    });
    observer.observe({ type: 'resource', buffered: true });
  }

  private measureLongTasks() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.duration > 50) {
          console.warn(`Long task detected: ${entry.duration}ms`);
        }
      });
    });
    observer.observe({ type: 'longtask', buffered: true });
  }

  private recordMetric(name: string, value: number) {
    let rating: 'good' | 'needs-improvement' | 'poor' = 'good';
    
    // Define thresholds for each metric
    const thresholds = {
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      CLS: { good: 0.1, poor: 0.25 },
      FID: { good: 100, poor: 300 }
    };

    const threshold = thresholds[name as keyof typeof thresholds];
    if (threshold) {
      rating = value <= threshold.good ? 'good' : 
               value <= threshold.poor ? 'needs-improvement' : 'poor';
    }

    const metric: PerformanceMetric = { name, value, rating };
    this.metrics.push(metric);
    
    console.log(`📊 ${name}: ${Math.round(value)}${name === 'CLS' ? '' : 'ms'} (${rating})`);
  }

  getMetrics() {
    return this.metrics;
  }
}

export const performanceMonitor = new PerformanceMonitor();
