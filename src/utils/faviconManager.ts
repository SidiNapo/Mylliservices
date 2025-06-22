
// iOS Safari Favicon Manager - Clean URL Implementation
// Ensures proper favicon display on iOS without breaking URLs

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
  private readonly MAX_REFRESHES = 3;
  private readonly MIN_REFRESH_INTERVAL = 5000;
  private static instance: FaviconManager | null = null;

  constructor(config: FaviconConfig) {
    this.config = config;
  }

  static getInstance(): FaviconManager {
    if (!FaviconManager.instance) {
      FaviconManager.instance = new FaviconManager({
        baseUrl: '/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png',
        version: '2024_ios_stable'
      });
    }
    return FaviconManager.instance;
  }

  private generateSessionId(): string {
    let sessionId = sessionStorage.getItem('mylli-favicon-session');
    if (!sessionId) {
      sessionId = `ios_${Date.now()}_stable`;
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
    
    // Use clean URL without cache busters to prevent fragment accumulation
    link.href = this.config.baseUrl;
    
    if (rel.includes('apple-touch-icon')) {
      link.setAttribute('data-mylli-ios-favicon', 'true');
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

    console.log(`🍎 Setting up iOS favicons (attempt ${this.refreshCount + 1}/${this.MAX_REFRESHES})`);
    
    this.isRefreshing = true;
    this.refreshCount++;
    this.lastRefreshTime = Date.now();
    
    // Step 1: Clean URL first
    this.cleanURL();
    
    // Step 2: Clean existing dynamic favicons
    this.removeExistingFavicons();
    
    // Step 3: Create new favicon elements
    const fragment = document.createDocumentFragment();
    
    // iOS Apple Touch Icons for window switching
    fragment.appendChild(this.createFaviconElement('apple-touch-icon')); // Default 180x180
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '180x180'));
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '152x152'));
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '120x120'));
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '76x76'));
    
    // Standard favicons for fallback
    fragment.appendChild(this.createFaviconElement('icon', '32x32'));
    fragment.appendChild(this.createFaviconElement('icon', '16x16'));
    fragment.appendChild(this.createFaviconElement('shortcut icon'));
    
    // Add all to head
    document.head.appendChild(fragment);
    
    // Step 4: Update iOS meta tags
    this.updateIOSMetaTags();
    
    console.log('✅ iOS favicons installed successfully');
    this.isRefreshing = false;
    this.hasInitialized = true;
  }

  private updateIOSMetaTags(): void {
    const metaUpdates = [
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Mylli Services' },
      { name: 'theme-color', content: '#8B5A8C' }
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
    console.log('🎯 Initializing clean favicon system...');
    
    // Clean URL immediately
    this.cleanURL();
    
    // Initial setup
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => this.setupIOSFavicons(), 1000);
      });
    } else {
      setTimeout(() => this.setupIOSFavicons(), 1000);
    }
    
    // Handle visibility change for iOS Safari (throttled)
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && this.isIOS() && this.isSafari() && this.canRefresh()) {
        setTimeout(() => {
          if (this.canRefresh()) {
            this.setupIOSFavicons();
          }
        }, 2000);
      }
    });
    
    // Handle window focus for iOS (throttled)
    window.addEventListener('focus', () => {
      if (this.isIOS() && this.isSafari() && this.canRefresh()) {
        setTimeout(() => {
          if (this.canRefresh()) {
            this.setupIOSFavicons();
          }
        }, 3000);
      }
    });
  }

  public resetRefreshLimits(): void {
    this.refreshCount = 0;
    this.lastRefreshTime = 0;
    this.isRefreshing = false;
    console.log('🔄 Favicon refresh limits reset');
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
