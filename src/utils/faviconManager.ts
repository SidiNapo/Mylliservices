
// ULTIMATE iOS Safari Favicon Fix System
// This system ensures the correct Mylli Services favicon displays on iOS Safari

export interface FaviconConfig {
  baseUrl: string;
  version: string;
}

export class FaviconManager {
  private config: FaviconConfig;
  private hasInitialized: boolean = false;
  private static instance: FaviconManager | null = null;
  private iosRefreshAttempts: number = 0;
  private maxIosRefreshAttempts: number = 2;

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

  private generateIOSCacheBuster(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 15);
    const sessionId = sessionStorage.getItem('ios-favicon-session') || Math.random().toString(36).substring(2, 10);
    sessionStorage.setItem('ios-favicon-session', sessionId);
    return `v=${this.config.version}&t=${timestamp}&r=${random}&s=${sessionId}&ios=true&ultimate=true`;
  }

  private isIOS(): boolean {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  }

  private isSafari(): boolean {
    return /Safari/.test(navigator.userAgent) && !/Chrome|CriOS|FxiOS/.test(navigator.userAgent);
  }

  private removeAllExistingFavicons(): void {
    console.log('🗑️ Removing ALL existing favicon elements for iOS...');
    
    const selectors = [
      'link[rel*="icon"]',
      'link[rel*="apple-touch-icon"]',
      'link[rel="shortcut icon"]',
      'link[rel="apple-touch-icon-precomposed"]',
      'meta[name="msapplication-TileImage"]'
    ];
    
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        console.log(`🗑️ Removing: ${element.getAttribute('rel')} ${element.getAttribute('sizes') || 'default'}`);
        element.remove();
      });
    });

    console.log('✅ All old favicon elements removed');
  }

  private createIOSAppleTouchIcon(sizes?: string): HTMLLinkElement {
    const link = document.createElement('link');
    link.rel = 'apple-touch-icon';
    
    if (sizes) {
      link.setAttribute('sizes', sizes);
    }
    
    const cacheBuster = this.generateIOSCacheBuster();
    const sizeParam = sizes ? `&size=${sizes}` : '&size=180x180';
    const finalUrl = `${this.config.baseUrl}?${cacheBuster}${sizeParam}&apple=true`;
    
    link.href = finalUrl;
    link.setAttribute('data-mylli-ios-favicon', 'true');
    link.setAttribute('data-version', this.config.version);
    
    console.log(`🍎 Created iOS apple-touch-icon: ${sizes || 'default'} -> ${finalUrl}`);
    
    return link;
  }

  private createStandardFavicon(rel: string, sizes?: string, type: string = 'image/png'): HTMLLinkElement {
    const link = document.createElement('link');
    link.rel = rel;
    link.type = type;
    
    if (sizes) {
      link.setAttribute('sizes', sizes);
    }
    
    const cacheBuster = this.generateIOSCacheBuster();
    const sizeParam = sizes ? `&size=${sizes}` : '';
    const finalUrl = `${this.config.baseUrl}?${cacheBuster}${sizeParam}&standard=true`;
    
    link.href = finalUrl;
    link.setAttribute('data-mylli-favicon', 'true');
    link.setAttribute('data-version', this.config.version);
    
    console.log(`✨ Created standard favicon: ${rel} ${sizes || 'default'} -> ${finalUrl}`);
    
    return link;
  }

  public ultimateIOSFaviconFix(): void {
    // Check if we've exceeded iOS refresh attempts
    if (this.iosRefreshAttempts >= this.maxIosRefreshAttempts) {
      console.log('🛑 Max iOS refresh attempts reached');
      return;
    }

    this.iosRefreshAttempts++;
    console.log(`🍎 ULTIMATE iOS FAVICON FIX - Attempt ${this.iosRefreshAttempts}/${this.maxIosRefreshAttempts}`);
    
    // Step 1: Nuclear removal of all existing favicons
    this.removeAllExistingFavicons();
    
    // Step 2: Wait for DOM cleanup, then rebuild with iOS-specific handling
    setTimeout(() => {
      console.log('🚀 Building iOS-optimized favicon system...');
      
      const fragment = document.createDocumentFragment();
      
      // iOS Apple Touch Icons - CRITICAL for iOS Safari (in order of importance)
      fragment.appendChild(this.createIOSAppleTouchIcon()); // Default 180x180
      fragment.appendChild(this.createIOSAppleTouchIcon('180x180')); // iPhone 6 Plus, iPhone X, iPhone XS, iPhone XS Max
      fragment.appendChild(this.createIOSAppleTouchIcon('152x152')); // iPad mini, iPad Air
      fragment.appendChild(this.createIOSAppleTouchIcon('144x144')); // IE10 Metro tile
      fragment.appendChild(this.createIOSAppleTouchIcon('120x120')); // iPhone 6, iPhone 6s, iPhone 7, iPhone 8
      fragment.appendChild(this.createIOSAppleTouchIcon('114x114')); // iPhone 4, iPhone 4s (Retina)
      fragment.appendChild(this.createIOSAppleTouchIcon('76x76'));   // iPad
      fragment.appendChild(this.createIOSAppleTouchIcon('72x72'));   // iPad (non-Retina)
      fragment.appendChild(this.createIOSAppleTouchIcon('60x60'));   // iPhone (non-Retina)
      fragment.appendChild(this.createIOSAppleTouchIcon('57x57'));   // iPhone (original)
      
      // Standard favicons for other browsers
      fragment.appendChild(this.createStandardFavicon('icon', '32x32'));
      fragment.appendChild(this.createStandardFavicon('icon', '16x16'));
      fragment.appendChild(this.createStandardFavicon('shortcut icon'));
      
      // Android/Chrome icons
      fragment.appendChild(this.createStandardFavicon('icon', '192x192'));
      fragment.appendChild(this.createStandardFavicon('icon', '512x512'));
      
      // Add all to head at once
      document.head.appendChild(fragment);
      
      console.log('✅ iOS-optimized favicon system installed');
      
      // Step 3: iOS-specific meta tag updates
      if (this.isIOS() || this.isSafari()) {
        this.applyIOSSpecificFixes();
      }
      
      this.hasInitialized = true;
      
    }, this.isIOS() ? 500 : 250); // Longer delay for iOS
  }

  private applyIOSSpecificFixes(): void {
    console.log('🍎 Applying iOS-specific favicon fixes...');
    
    const cacheBuster = this.generateIOSCacheBuster();
    
    // Update iOS web app meta tags
    const iosMetaUpdates = [
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Mylli Services' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: 'Mylli Services' }
    ];
    
    iosMetaUpdates.forEach(({ name, content }) => {
      // Remove existing meta tag
      const existingMeta = document.querySelector(`meta[name="${name}"]`);
      if (existingMeta) {
        existingMeta.remove();
      }
      
      // Create new meta tag
      const meta = document.createElement('meta');
      meta.name = name;
      meta.content = content;
      meta.setAttribute('data-mylli-ios-meta', 'true');
      document.head.appendChild(meta);
    });
    
    // Update manifest link for iOS
    const manifestLink = document.querySelector('link[rel="manifest"]') as HTMLLinkElement;
    if (manifestLink) {
      manifestLink.href = `/site.webmanifest?${cacheBuster}`;
    }
    
    // iOS-specific force refresh technique
    if (this.isIOS()) {
      setTimeout(() => {
        console.log('🔄 Forcing iOS Safari favicon refresh...');
        
        // Create a temporary meta refresh to force iOS to re-read favicons
        const tempMeta = document.createElement('meta');
        tempMeta.setAttribute('http-equiv', 'refresh');
        tempMeta.content = '0;url=' + window.location.href + '#ios-favicon-refresh';
        document.head.appendChild(tempMeta);
        
        setTimeout(() => {
          tempMeta.remove();
          // Remove the hash from URL
          if (window.location.hash === '#ios-favicon-refresh') {
            history.replaceState('', document.title, window.location.pathname + window.location.search);
          }
        }, 100);
        
      }, 1000);
    }
    
    console.log('✅ iOS-specific fixes applied');
  }

  public initialize(): void {
    console.log('🎯 Initializing Ultimate iOS Favicon Manager...');
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => this.ultimateIOSFaviconFix(), 200);
      });
    } else {
      setTimeout(() => this.ultimateIOSFaviconFix(), 200);
    }
    
    // Handle visibility change for iOS Safari tab switching
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && this.isIOS() && this.isSafari()) {
        console.log('👀 iOS Safari tab became visible, refreshing favicons...');
        setTimeout(() => {
          // Only refresh if we haven't reached max attempts
          if (this.iosRefreshAttempts < this.maxIosRefreshAttempts) {
            this.ultimateIOSFaviconFix();
          }
        }, 300);
      }
    });
    
    // Handle page focus for iOS
    window.addEventListener('focus', () => {
      if (this.isIOS() && this.isSafari()) {
        console.log('🔍 iOS Safari gained focus, checking favicon...');
        setTimeout(() => {
          // Only refresh if we haven't reached max attempts
          if (this.iosRefreshAttempts < this.maxIosRefreshAttempts) {
            this.ultimateIOSFaviconFix();
          }
        }, 500);
      }
    });
  }
}

// Export singleton and utility functions
export const faviconManager = FaviconManager.getInstance();
export const rebuildIOSFavicons = () => faviconManager.ultimateIOSFaviconFix();
export const initializeFaviconManager = () => faviconManager.initialize();
