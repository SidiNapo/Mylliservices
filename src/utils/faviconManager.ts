
// iOS Safari Favicon Manager - Healthcare Logo Implementation
// Ensures proper favicon display on iOS Safari with enhanced window switching visibility

export interface FaviconConfig {
  baseUrl: string;
  version: string;
}

export class FaviconManager {
  private config: FaviconConfig;
  private hasInitialized: boolean = false;
  private isRefreshing: boolean = false;
  private lastRefreshTime: number = 0;
  private refreshCount: number = 0;
  private readonly MAX_REFRESHES = 5; // Increased for better iOS support
  private readonly MIN_REFRESH_INTERVAL = 3000; // Reduced for faster refresh
  private static instance: FaviconManager | null = null;

  constructor(config: FaviconConfig) {
    this.config = config;
  }

  static getInstance(): FaviconManager {
    if (!FaviconManager.instance) {
      FaviconManager.instance = new FaviconManager({
        baseUrl: '/lovable-uploads/7408a053-010a-48d7-a96a-2811465b0bba.png', // New healthcare logo
        version: '2024_healthcare_ios_optimized'
      });
    }
    return FaviconManager.instance;
  }

  private generateSessionId(): string {
    let sessionId = sessionStorage.getItem('mylli-favicon-session');
    if (!sessionId) {
      sessionId = `healthcare_ios_${Date.now()}_optimized`;
      sessionStorage.setItem('mylli-favicon-session', sessionId);
    }
    return sessionId;
  }

  private isIOS(): boolean {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  }

  private isSafari(): boolean {
    return /Safari/.test(navigator.userAgent) && !/Chrome|CriOS|FxiOS/.test(navigator.userAgent);
  }

  private canRefresh(): boolean {
    const now = Date.now();
    const timeSinceLastRefresh = now - this.lastRefreshTime;
    
    return (
      !this.isRefreshing &&
      this.refreshCount < this.MAX_REFRESHES &&
      timeSinceLastRefresh > this.MIN_REFRESH_INTERVAL
    );
  }

  private cleanURL(): void {
    const currentUrl = window.location.href;
    
    // Check for any unwanted hash fragments
    if (currentUrl.includes('#') || currentUrl.includes('%23')) {
      console.log('🧹 Cleaning URL fragments...');
      
      // Extract clean base URL without any fragments
      let cleanURL = currentUrl.split('#')[0];
      cleanURL = cleanURL.replace(/%23[^&]*/g, '');
      cleanURL = cleanURL.replace(/ios-favicon-refresh/g, '');
      cleanURL = cleanURL.replace(/[?&]v=[^&]*/g, '');
      cleanURL = cleanURL.replace(/[?&]session=[^&]*/g, '');
      cleanURL = cleanURL.replace(/[?&]ios=[^&]*/g, '');
      cleanURL = cleanURL.replace(/[?&]$/, '');
      
      // Use replaceState to avoid page reload
      window.history.replaceState(null, '', cleanURL);
      console.log('✅ URL cleaned to:', cleanURL);
    }
  }

  private removeExistingFavicons(): void {
    const selectors = [
      'link[rel*="icon"]',
      'link[rel*="apple-touch-icon"]',
      'link[rel="shortcut icon"]'
    ];
    
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        if (element.getAttribute('data-mylli-favicon') || 
            element.getAttribute('data-mylli-ios-favicon')) {
          element.remove();
        }
      });
    });
  }

  private createFaviconElement(rel: string, sizes?: string): HTMLLinkElement {
    const link = document.createElement('link');
    link.rel = rel;
    
    if (sizes) {
      link.setAttribute('sizes', sizes);
    }
    
    // Use the new healthcare logo with cache busting for iOS
    const timestamp = Date.now();
    link.href = `${this.config.baseUrl}?v=${this.config.version}&t=${timestamp}`;
    
    if (rel.includes('apple-touch-icon')) {
      link.setAttribute('data-mylli-ios-favicon', 'true');
      // Enhanced attributes for iOS Safari window switching
      link.setAttribute('data-ios-optimized', 'true');
    } else {
      link.setAttribute('data-mylli-favicon', 'true');
      link.type = 'image/png';
    }
    
    return link;
  }

  public setupIOSFavicons(): void {
    if (!this.canRefresh()) {
      console.log('🛑 iOS favicon refresh throttled');
      return;
    }

    console.log(`🏥 Setting up healthcare iOS favicons (attempt ${this.refreshCount + 1}/${this.MAX_REFRESHES})`);
    
    this.isRefreshing = true;
    this.refreshCount++;
    this.lastRefreshTime = Date.now();
    
    // Step 1: Clean URL first
    this.cleanURL();
    
    // Step 2: Clean existing dynamic favicons
    this.removeExistingFavicons();
    
    // Step 3: Create new healthcare favicon elements with enhanced iOS support
    const fragment = document.createDocumentFragment();
    
    // iOS Apple Touch Icons for enhanced window switching visibility
    fragment.appendChild(this.createFaviconElement('apple-touch-icon')); // Default 180x180
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '180x180'));
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '152x152'));
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '144x144')); // Added for better compatibility
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '120x120'));
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '114x114')); // Added for iPhone 4
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '76x76'));
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '72x72')); // Added for iPad mini
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '60x60')); // Added for iPhone
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '57x57')); // Added for legacy iPhone
    
    // Standard favicons for fallback
    fragment.appendChild(this.createFaviconElement('icon', '32x32'));
    fragment.appendChild(this.createFaviconElement('icon', '16x16'));
    fragment.appendChild(this.createFaviconElement('shortcut icon'));
    
    // Add all to head
    document.head.appendChild(fragment);
    
    // Step 4: Update iOS meta tags with healthcare branding
    this.updateIOSMetaTags();
    
    console.log('✅ Healthcare iOS favicons installed successfully');
    this.isRefreshing = false;
    this.hasInitialized = true;
  }

  private updateIOSMetaTags(): void {
    const metaUpdates = [
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Mylli Services' },
      { name: 'theme-color', content: '#0077C0' }, // Updated to healthcare blue
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: 'Mylli Services' }
    ];
    
    metaUpdates.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    });
  }

  public initialize(): void {
    console.log('🏥 Initializing healthcare favicon system with iOS Safari optimization...');
    
    // Clean URL immediately
    this.cleanURL();
    
    // Initial setup
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => this.setupIOSFavicons(), 500);
      });
    } else {
      setTimeout(() => this.setupIOSFavicons(), 500);
    }
    
    // Enhanced iOS Safari window switching support
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && this.isIOS() && this.isSafari() && this.canRefresh()) {
        console.log('🍎 iOS Safari visibility change detected - refreshing favicon');
        setTimeout(() => {
          if (this.canRefresh()) {
            this.setupIOSFavicons();
          }
        }, 1000);
      }
    });
    
    // Enhanced window focus for iOS Safari window switching
    window.addEventListener('focus', () => {
      if (this.isIOS() && this.isSafari() && this.canRefresh()) {
        console.log('🎯 iOS Safari window focus detected - refreshing favicon');
        setTimeout(() => {
          if (this.canRefresh()) {
            this.setupIOSFavicons();
          }
        }, 1500);
      }
    });

    // Additional iOS Safari window switching optimization
    window.addEventListener('pageshow', (event) => {
      if (this.isIOS() && this.isSafari() && this.canRefresh()) {
        console.log('📱 iOS Safari pageshow event - ensuring favicon visibility');
        setTimeout(() => {
          if (this.canRefresh()) {
            this.setupIOSFavicons();
          }
        }, 2000);
      }
    });
  }

  public resetRefreshLimits(): void {
    this.refreshCount = 0;
    this.lastRefreshTime = 0;
    this.isRefreshing = false;
    console.log('🔄 Healthcare favicon refresh limits reset');
  }

  public cleanURLFragments(): void {
    this.cleanURL();
  }
}

// Export singleton and utility functions
export const faviconManager = FaviconManager.getInstance();
export const setupIOSFavicons = () => faviconManager.setupIOSFavicons();
export const initializeFaviconManager = () => faviconManager.initialize();
export const resetFaviconLimits = () => faviconManager.resetRefreshLimits();
export const cleanURLFragments = () => faviconManager.cleanURLFragments();
