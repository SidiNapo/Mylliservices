
// Complete rebuild of favicon management system for iOS Safari compatibility

export interface FaviconConfig {
  baseUrl: string;
  version: string;
}

export class FaviconManager {
  private config: FaviconConfig;
  private hasInitialized: boolean = false;
  private static instance: FaviconManager | null = null;

  constructor(config: FaviconConfig) {
    this.config = config;
  }

  static getInstance(): FaviconManager {
    if (!FaviconManager.instance) {
      FaviconManager.instance = new FaviconManager({
        baseUrl: '/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png',
        version: '2024_rebuild'
      });
    }
    return FaviconManager.instance;
  }

  private generateCacheBuster(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(7);
    return `v=${this.config.version}&t=${timestamp}&r=${random}`;
  }

  private isIOS(): boolean {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  }

  private removeAllExistingFavicons(): void {
    // Remove ALL existing favicon and icon elements
    const selectors = [
      'link[rel*="icon"]',
      'link[rel*="apple-touch-icon"]',
      'link[rel="shortcut icon"]',
      'meta[name="msapplication-TileImage"]',
      'link[rel="apple-touch-icon-precomposed"]'
    ];
    
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(element => {
        console.log(`Removing old favicon element: ${element.outerHTML}`);
        element.remove();
      });
    });
  }

  private createFaviconElement(rel: string, sizes?: string): HTMLLinkElement {
    const link = document.createElement('link');
    link.rel = rel;
    link.type = 'image/png';
    
    if (sizes) {
      link.setAttribute('sizes', sizes);
    }
    
    const cacheBuster = this.generateCacheBuster();
    const sizeParam = sizes ? `&size=${sizes}` : '';
    link.href = `${this.config.baseUrl}?${cacheBuster}${sizeParam}`;
    
    return link;
  }

  public rebuildFavicons(): void {
    // Prevent multiple rebuilds
    if (this.hasInitialized) {
      console.log('Favicon system already rebuilt, skipping...');
      return;
    }

    console.log('🔄 Rebuilding favicon system from scratch...');
    this.hasInitialized = true;
    
    // Step 1: Remove ALL existing favicons
    this.removeAllExistingFavicons();
    
    // Step 2: Wait for DOM cleanup
    setTimeout(() => {
      console.log('✨ Creating new favicon elements...');
      
      // Step 3: Create new favicon elements
      const fragment = document.createDocumentFragment();
      
      // Standard favicons
      fragment.appendChild(this.createFaviconElement('icon', '16x16'));
      fragment.appendChild(this.createFaviconElement('icon', '32x32'));
      fragment.appendChild(this.createFaviconElement('shortcut icon'));
      
      // iOS specific icons
      const iosSizes = ['180x180', '152x152', '144x144', '120x120', '114x114', '76x76', '72x72', '60x60', '57x57'];
      iosSizes.forEach(size => {
        fragment.appendChild(this.createFaviconElement('apple-touch-icon', size));
      });
      
      // Default apple touch icon
      fragment.appendChild(this.createFaviconElement('apple-touch-icon'));
      
      // Android/Chrome icons
      fragment.appendChild(this.createFaviconElement('icon', '192x192'));
      fragment.appendChild(this.createFaviconElement('icon', '512x512'));
      
      // Add all to head
      document.head.appendChild(fragment);
      
      console.log('✅ New favicon system rebuilt successfully');
      
      // Step 4: iOS specific refresh (if needed)
      if (this.isIOS()) {
        this.iosSpecificRefresh();
      }
      
    }, 200); // Give time for cleanup
  }

  private iosSpecificRefresh(): void {
    console.log('🍎 Applying iOS Safari specific refresh...');
    
    // Force iOS to recognize new icons by manipulating meta tags
    const iosMetas = [
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Mylli Services' }
    ];
    
    iosMetas.forEach(({ name, content }) => {
      const existing = document.querySelector(`meta[name="${name}"]`);
      if (existing) existing.remove();
      
      const meta = document.createElement('meta');
      meta.name = name;
      meta.content = content;
      document.head.appendChild(meta);
    });
    
    // Update manifest with new cache buster
    const manifestLink = document.querySelector('link[rel="manifest"]') as HTMLLinkElement;
    if (manifestLink) {
      const cacheBuster = this.generateCacheBuster();
      manifestLink.href = `/site.webmanifest?${cacheBuster}`;
    }
  }

  public initialize(): void {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.rebuildFavicons());
    } else {
      this.rebuildFavicons();
    }
  }
}

// Export singleton instance and utility functions
export const faviconManager = FaviconManager.getInstance();
export const rebuildFavicons = () => faviconManager.rebuildFavicons();
export const initializeFaviconManager = () => faviconManager.initialize();
