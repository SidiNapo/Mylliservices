
// Optimized resource preloading for critical performance

interface PreloadResource {
  href: string;
  as: string;
  type?: string;
  crossorigin?: string;
  priority?: 'high' | 'low';
}

class ResourcePreloader {
  private preloadedResources = new Set<string>();

  preloadCriticalResources() {
    const criticalResources: PreloadResource[] = [
      // Critical fonts
      {
        href: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
        priority: 'high'
      },
      // Critical images (hero section)
      {
        href: '/lovable-uploads/554676d0-4988-4b83-864c-15c32ee349a2.png',
        as: 'image',
        priority: 'high'
      }
    ];

    criticalResources.forEach(resource => this.preloadResource(resource));
  }

  preloadResource(resource: PreloadResource) {
    if (this.preloadedResources.has(resource.href)) {
      return;
    }

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    
    if (resource.type) link.type = resource.type;
    if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
    if (resource.priority) link.setAttribute('fetchpriority', resource.priority);

    document.head.appendChild(link);
    this.preloadedResources.add(resource.href);
  }

  prefetchNextPageResources(urls: string[]) {
    // Prefetch resources for likely next pages
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
  }

  preloadImagesInViewport() {
    // Preload images that are likely to be viewed
    const images = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          if (src) {
            this.preloadResource({ href: src, as: 'image' });
            observer.unobserve(img);
          }
        }
      });
    }, { rootMargin: '50px' });

    images.forEach(img => observer.observe(img));
  }
}

export const resourcePreloader = new ResourcePreloader();
