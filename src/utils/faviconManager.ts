
// iOS Safari Favicon Manager - Enhanced for Window Switching
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
  private readonly MAX_REFRESHES = 5;
  private readonly MIN_REFRESH_INTERVAL = 2000;
  private static instance: FaviconManager | null = null;
  private visibilityChangeHandler: (() => void) | null = null;
  private focusHandler: (() => void) | null = null;

  constructor(config: FaviconConfig) {
    this.config = config;
  }

  static getInstance(): FaviconManager {
    if (!FaviconManager.instance) {
      FaviconManager.instance = new FaviconManager({
        baseUrl: '/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png',
        version: '2024_safari_stable'
      });
    }
    return FaviconManager.instance;
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
    
    if (currentUrl.includes('#') || currentUrl.includes('%23')) {
      console.log('🧹 Cleaning URL fragments...');
      
      let cleanURL = currentUrl.split('#')[0];
      cleanURL = cleanURL.replace(/%23[^&]*/g, '');
      cleanURL = cleanURL.replace(/ios-favicon-refresh/g, '');
      cleanURL = cleanURL.replace(/[?&]v=[^&]*/g, '');
      cleanURL = cleanURL.replace(/[?&]session=[^&]*/g, '');
      cleanURL = cleanURL.replace(/[?&]ios=[^&]*/g, '');
      cleanURL = cleanURL.replace(/[?&]$/, '');
      
      window.history.replaceState(null, '', cleanURL);
      console.log('✅ URL cleaned to:', cleanURL);
    }
  }

  private removeExistingFavicons(): void {
    const selectors = [
      'link[rel*="icon"]:not([data-static])',
      'link[rel*="apple-touch-icon"]:not([data-static])',
      'link[rel="shortcut icon"]:not([data-static])'
    ];
    
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        if (element.getAttribute('data-mylli-dynamic')) {
          element.remove();
        }
      });
    });
  }

  private createFaviconElement(rel: string, sizes?: string, forceRefresh: boolean = false): HTMLLinkElement {
    const link = document.createElement('link');
    link.rel = rel;
    
    if (sizes) {
      link.setAttribute('sizes', sizes);
    }
    
    // Use clean URL with Safari-specific cache busting only when needed
    let href = this.config.baseUrl;
    if (forceRefresh && this.isSafari()) {
      href += `?safari=${Date.now()}`;
    }
    link.href = href;
    
    link.setAttribute('data-mylli-dynamic', 'true');
    
    if (rel.includes('apple-touch-icon')) {
      link.type = 'image/png';
    } else {
      link.type = 'image/png';
    }
    
    return link;
  }

  public setupIOSFavicons(forceRefresh: boolean = false): void {
    if (!forceRefresh && !this.canRefresh()) {
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
    
    // Step 3: Create new favicon elements with Safari optimization
    const fragment = document.createDocumentFragment();
    
    // iOS Apple Touch Icons for window switching - prioritized order
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '180x180', forceRefresh));
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '152x152', forceRefresh));
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '120x120', forceRefresh));
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '76x76', forceRefresh));
    fragment.appendChild(this.createFaviconElement('apple-touch-icon', '', forceRefresh)); // Default
    
    // Standard favicons for fallback
    fragment.appendChild(this.createFaviconElement('icon', '32x32', forceRefresh));
    fragment.appendChild(this.createFaviconElement('icon', '16x16', forceRefresh));
    fragment.appendChild(this.createFaviconElement('shortcut icon', '', forceRefresh));
    
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
    console.log('🎯 Initializing enhanced favicon system...');
    
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
    
    // Enhanced Safari window switching detection
    if (this.isSafari()) {
      // Remove existing listeners
      if (this.visibilityChangeHandler) {
        document.removeEventListener('visibilitychange', this.visibilityChangeHandler);
      }
      if (this.focusHandler) {
        window.removeEventListener('focus', this.focusHandler);
      }

      // Create new throttled handlers
      this.visibilityChangeHandler = () => {
        if (!document.hidden && this.canRefresh()) {
          setTimeout(() => {
            if (this.canRefresh()) {
              this.setupIOSFavicons(true);
            }
          }, 1000);
        }
      };

      this.focusHandler = () => {
        if (this.canRefresh()) {
          setTimeout(() => {
            if (this.canRefresh()) {
              this.setupIOSFavicons(true);
            }
          }, 1500);
        }
      };

      // Add listeners
      document.addEventListener('visibilitychange', this.visibilityChangeHandler);
      window.addEventListener('focus', this.focusHandler);
      
      // Safari-specific: Page show event (back/forward navigation)
      window.addEventListener('pageshow', () => {
        if (this.canRefresh()) {
          setTimeout(() => this.setupIOSFavicons(true), 2000);
        }
      });
    }
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

  public destroy(): void {
    if (this.visibilityChangeHandler) {
      document.removeEventListener('visibilitychange', this.visibilityChangeHandler);
    }
    if (this.focusHandler) {
      window.removeEventListener('focus', this.focusHandler);
    }
  }
}

// Export singleton and utility functions
export const faviconManager = FaviconManager.getInstance();
export const setupIOSFavicons = (forceRefresh?: boolean) => faviconManager.setupIOSFavicons(forceRefresh);
export const initializeFaviconManager = () => faviconManager.initialize();
export const resetFaviconLimits = () => faviconManager.resetRefreshLimits();
export const cleanURLFragments = () => faviconManager.cleanURLFragments();
