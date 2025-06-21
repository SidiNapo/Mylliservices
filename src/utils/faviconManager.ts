
// COMPLETE REBUILD - iOS Safari Favicon Fix System
// This system ensures the correct Mylli Services favicon displays consistently

export interface FaviconConfig {
  baseUrl: string;
  version: string;
}

export class FaviconManager {
  private config: FaviconConfig;
  private hasInitialized: boolean = false;
  private static instance: FaviconManager | null = null;
  private refreshAttempts: number = 0;
  private maxRefreshAttempts: number = 3;

  constructor(config: FaviconConfig) {
    this.config = config;
  }

  static getInstance(): FaviconManager {
    if (!FaviconManager.instance) {
      FaviconManager.instance = new FaviconManager({
        baseUrl: '/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png',
        version: '2024_final_rebuild'
      });
    }
    return FaviconManager.instance;
  }

  private generateUltimateCacheBuster(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 15);
    const sessionId = Math.random().toString(36).substring(2, 10);
    return `v=${this.config.version}&t=${timestamp}&r=${random}&s=${sessionId}&force=true`;
  }

  private isIOS(): boolean {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  }

  private isSafari(): boolean {
    return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
  }

  private removeAllExistingFavicons(): void {
    console.log('🗑️ Removing ALL existing favicon elements...');
    
    // Comprehensive list of all possible favicon selectors
    const selectors = [
      'link[rel*="icon"]',
      'link[rel*="apple-touch-icon"]',
      'link[rel="shortcut icon"]',
      'link[rel="apple-touch-icon-precomposed"]',
      'meta[name="msapplication-TileImage"]',
      'link[type="image/x-icon"]',
      'link[type="image/png"]',
      'link[type="image/gif"]',
      'link[type="image/jpeg"]'
    ];
    
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        console.log(`🗑️ Removing: ${element.outerHTML}`);
        element.remove();
      });
    });

    // Force DOM cleanup
    setTimeout(() => {
      console.log('✅ All old favicon elements removed');
    }, 100);
  }

  private createFaviconElement(rel: string, sizes?: string, type: string = 'image/png'): HTMLLinkElement {
    const link = document.createElement('link');
    link.rel = rel;
    link.type = type;
    
    if (sizes) {
      link.setAttribute('sizes', sizes);
    }
    
    const cacheBuster = this.generateUltimateCacheBuster();
    const sizeParam = sizes ? `&size=${sizes}` : '';
    const finalUrl = `${this.config.baseUrl}?${cacheBuster}${sizeParam}`;
    
    link.href = finalUrl;
    link.setAttribute('data-mylli-favicon', 'true');
    link.setAttribute('data-version', this.config.version);
    
    console.log(`✨ Created favicon: ${rel} ${sizes || 'default'} -> ${finalUrl}`);
    
    return link;
  }

  public ultimateRebuildFavicons(): void {
    // Prevent multiple rebuilds within short timeframe
    if (this.hasInitialized && this.refreshAttempts >= this.maxRefreshAttempts) {
      console.log('🛑 Max refresh attempts reached, skipping rebuild');
      return;
    }

    this.refreshAttempts++;
    console.log(`🔄 ULTIMATE FAVICON REBUILD - Attempt ${this.refreshAttempts}/${this.maxRefreshAttempts}`);
    
    // Step 1: Nuclear removal of all existing favicons
    this.removeAllExistingFavicons();
    
    // Step 2: Wait for DOM cleanup, then rebuild
    setTimeout(() => {
      console.log('🚀 Building new favicon system...');
      
      const fragment = document.createDocumentFragment();
      
      // Standard favicons with aggressive cache busting
      fragment.appendChild(this.createFaviconElement('icon', '16x16'));
      fragment.appendChild(this.createFaviconElement('icon', '32x32'));
      fragment.appendChild(this.createFaviconElement('icon', '48x48'));
      fragment.appendChild(this.createFaviconElement('icon', '64x64'));
      fragment.appendChild(this.createFaviconElement('shortcut icon'));
      
      // iOS/Apple specific icons - CRITICAL for iOS Safari
      const appleSizes = [
        '57x57', '60x60', '72x72', '76x76', '114x114', '120x120', 
        '144x144', '152x152', '167x167', '180x180', '1024x1024'
      ];
      
      appleSizes.forEach(size => {
        fragment.appendChild(this.createFaviconElement('apple-touch-icon', size));
      });
      
      // Default apple touch icon (most important for iOS)
      fragment.appendChild(this.createFaviconElement('apple-touch-icon'));
      
      // Android/Chrome icons
      fragment.appendChild(this.createFaviconElement('icon', '192x192'));
      fragment.appendChild(this.createFaviconElement('icon', '256x256'));
      fragment.appendChild(this.createFaviconElement('icon', '384x384'));
      fragment.appendChild(this.createFaviconElement('icon', '512x512'));
      
      // Add all to head at once
      document.head.appendChild(fragment);
      
      console.log('✅ New favicon system installed');
      
      // Step 3: iOS/Safari specific handling
      if (this.isIOS() || this.isSafari()) {
        this.applySafariSpecificFixes();
      }
      
      this.hasInitialized = true;
      
    }, 250); // Longer delay for iOS
  }

  private applySafariSpecificFixes(): void {
    console.log('🍎 Applying Safari/iOS specific fixes...');
    
    // Update web app meta tags with new cache buster
    const cacheBuster = this.generateUltimateCacheBuster();
    
    const metaUpdates = [
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Mylli Services' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: 'Mylli Services' }
    ];
    
    metaUpdates.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (meta) {
        meta.remove();
      }
      
      meta = document.createElement('meta');
      meta.name = name;
      meta.content = content;
      meta.setAttribute('data-mylli-meta', 'true');
      document.head.appendChild(meta);
    });
    
    // Update manifest link with aggressive cache busting
    const manifestLink = document.querySelector('link[rel="manifest"]') as HTMLLinkElement;
    if (manifestLink) {
      manifestLink.href = `/site.webmanifest?${cacheBuster}`;
    }
    
    // Force browser to recognize changes
    if (this.isIOS()) {
      setTimeout(() => {
        console.log('🔄 Forcing iOS favicon refresh...');
        // Add a temporary meta tag to force iOS to re-read favicon
        const tempMeta = document.createElement('meta');
        tempMeta.name = 'apple-touch-icon-refresh';
        tempMeta.content = Date.now().toString();
        document.head.appendChild(tempMeta);
        
        setTimeout(() => {
          tempMeta.remove();
        }, 1000);
      }, 500);
    }
    
    console.log('✅ Safari/iOS fixes applied');
  }

  public initialize(): void {
    console.log('🎯 Initializing Ultimate Favicon Manager...');
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => this.ultimateRebuildFavicons(), 100);
      });
    } else {
      setTimeout(() => this.ultimateRebuildFavicons(), 100);
    }
    
    // Also handle visibility change to refresh when switching tabs/windows
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && (this.isIOS() || this.isSafari())) {
        console.log('👀 Page became visible, refreshing favicons for Safari/iOS...');
        setTimeout(() => this.ultimateRebuildFavicons(), 200);
      }
    });
  }
}

// Export singleton and utility functions
export const faviconManager = FaviconManager.getInstance();
export const rebuildFavicons = () => faviconManager.ultimateRebuildFavicons();
export const initializeFaviconManager = () => faviconManager.initialize();
