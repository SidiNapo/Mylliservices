
// Dedicated favicon management for iOS cache busting

export interface FaviconConfig {
  baseUrl: string;
  version: string;
  forceRefresh?: boolean;
}

export class FaviconManager {
  private config: FaviconConfig;
  private cacheBuster: string;

  constructor(config: FaviconConfig) {
    this.config = config;
    this.cacheBuster = this.generateCacheBuster();
  }

  private generateCacheBuster(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(7);
    return `v=${this.config.version}&t=${timestamp}&r=${random}&ios_force=true`;
  }

  private isIOS(): boolean {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  }

  private removeAllExistingFavicons(): void {
    const selectors = [
      'link[rel*="icon"]',
      'link[rel*="apple-touch-icon"]',
      'link[rel="shortcut icon"]',
      'meta[name="msapplication-TileImage"]'
    ];
    
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(element => {
        element.remove();
      });
    });
  }

  private createFaviconLink(rel: string, sizes?: string, type: string = 'image/png'): HTMLLinkElement {
    const link = document.createElement('link');
    link.rel = rel;
    link.type = type;
    
    if (sizes) {
      link.setAttribute('sizes', sizes);
    }
    
    const sizeParam = sizes ? `&size=${sizes}` : '';
    link.href = `${this.config.baseUrl}?${this.cacheBuster}${sizeParam}`;
    
    // Add iOS-specific attributes
    if (rel.includes('apple') && this.isIOS()) {
      link.setAttribute('data-ios-updated', Date.now().toString());
      link.setAttribute('data-cache-buster', this.cacheBuster);
    }
    
    return link;
  }

  public updateFavicons(): void {
    console.log('🔄 Updating favicons with aggressive cache busting...');
    
    // Remove all existing favicons
    this.removeAllExistingFavicons();
    
    // Wait a bit to ensure removal
    setTimeout(() => {
      const fragment = document.createDocumentFragment();
      
      // Standard favicons
      fragment.appendChild(this.createFaviconLink('icon', '16x16'));
      fragment.appendChild(this.createFaviconLink('icon', '32x32'));
      fragment.appendChild(this.createFaviconLink('shortcut icon'));
      
      // iOS Apple Touch Icons - comprehensive list
      const iosSizes = [
        '180x180', '167x167', '152x152', '144x144', 
        '120x120', '114x114', '76x76', '72x72', 
        '60x60', '57x57'
      ];
      
      iosSizes.forEach(size => {
        fragment.appendChild(this.createFaviconLink('apple-touch-icon', size));
      });
      
      // Default apple touch icon
      fragment.appendChild(this.createFaviconLink('apple-touch-icon'));
      
      // Android/Chrome icons
      fragment.appendChild(this.createFaviconLink('icon', '192x192'));
      fragment.appendChild(this.createFaviconLink('icon', '512x512'));
      
      // Add all favicons to head
      document.head.appendChild(fragment);
      
      // iOS-specific refresh techniques
      if (this.isIOS()) {
        this.forceIOSRefresh();
      }
      
      console.log('✅ Favicons updated successfully');
    }, 100);
  }

  private forceIOSRefresh(): void {
    console.log('🍎 Applying iOS-specific favicon refresh techniques...');
    
    // Technique 1: Force a micro-refresh
    const metaRefresh = document.createElement('meta');
    metaRefresh.setAttribute('http-equiv', 'refresh');
    metaRefresh.setAttribute('content', '0');
    document.head.appendChild(metaRefresh);
    
    setTimeout(() => {
      metaRefresh.remove();
    }, 50);
    
    // Technique 2: Add iOS-specific meta tags
    const iosMetaTags = [
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Mylli Services' },
      { name: 'apple-touch-fullscreen', content: 'yes' }
    ];
    
    iosMetaTags.forEach(({ name, content }) => {
      // Remove existing if present
      const existing = document.querySelector(`meta[name="${name}"]`);
      if (existing) existing.remove();
      
      // Add new one
      const meta = document.createElement('meta');
      meta.name = name;
      meta.content = content;
      document.head.appendChild(meta);
    });
    
    // Technique 3: Manipulate manifest cache
    const manifestLink = document.querySelector('link[rel="manifest"]') as HTMLLinkElement;
    if (manifestLink) {
      const originalHref = manifestLink.href;
      manifestLink.href = `${originalHref.split('?')[0]}?${this.cacheBuster}`;
    }
  }

  public initializeOnLoad(): void {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.updateFavicons());
    } else {
      this.updateFavicons();
    }
  }
}

// Default favicon manager instance
export const defaultFaviconManager = new FaviconManager({
  baseUrl: '/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png',
  version: '2024_v2',
  forceRefresh: true
});

// Export utility functions
export const updateFavicons = () => defaultFaviconManager.updateFavicons();
export const initializeFaviconManager = () => defaultFaviconManager.initializeOnLoad();
