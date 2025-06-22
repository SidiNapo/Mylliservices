
// Advanced Favicon Manager - New Healthcare Logo Implementation
// Comprehensive cross-platform favicon management with iOS Safari optimization

export interface FaviconConfig {
  baseUrl: string;
  version: string;
}

export class NewHealthcareFaviconManager {
  private config: FaviconConfig;
  private hasInitialized: boolean = false;
  private isRefreshing: boolean = false;
  private lastRefreshTime: number = 0;
  private refreshCount: number = 0;
  private readonly MAX_REFRESHES = 8;
  private readonly MIN_REFRESH_INTERVAL = 2000;
  private static instance: NewHealthcareFaviconManager | null = null;

  constructor(config: FaviconConfig) {
    this.config = config;
  }

  static getInstance(): NewHealthcareFaviconManager {
    if (!NewHealthcareFaviconManager.instance) {
      NewHealthcareFaviconManager.instance = new NewHealthcareFaviconManager({
        baseUrl: '/lovable-uploads/b9acdab9-45f1-4b63-ad2b-8b0f6390ae5c.png',
        version: '2024_new_healthcare_optimized'
      });
    }
    return NewHealthcareFaviconManager.instance;
  }

  private generateSessionId(): string {
    let sessionId = sessionStorage.getItem('mylli-new-favicon-session');
    if (!sessionId) {
      sessionId = `new_healthcare_${Date.now()}_v2024`;
      sessionStorage.setItem('mylli-new-favicon-session', sessionId);
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

  private cleanExistingFavicons(): void {
    const selectors = [
      'link[rel*="icon"]',
      'link[rel*="apple-touch-icon"]',
      'link[rel="shortcut icon"]'
    ];
    
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        if (element.getAttribute('data-mylli-new-favicon') || 
            element.getAttribute('data-mylli-new-ios-favicon')) {
          element.remove();
        }
      });
    });
  }

  private createNewFaviconElement(rel: string, sizes?: string): HTMLLinkElement {
    const link = document.createElement('link');
    link.rel = rel;
    
    if (sizes) {
      link.setAttribute('sizes', sizes);
    }
    
    const timestamp = Date.now();
    const sessionId = this.generateSessionId();
    link.href = `${this.config.baseUrl}?v=${this.config.version}&t=${timestamp}&session=${sessionId}`;
    
    if (rel.includes('apple-touch-icon')) {
      link.setAttribute('data-mylli-new-ios-favicon', 'true');
      link.setAttribute('data-new-healthcare-ios', 'true');
    } else {
      link.setAttribute('data-mylli-new-favicon', 'true');
      link.type = 'image/png';
    }
    
    return link;
  }

  public setupNewHealthcareFavicons(): void {
    if (!this.canRefresh()) {
      console.log('🛑 New healthcare favicon refresh throttled');
      return;
    }

    console.log(`🏥 Setting up NEW healthcare favicons (attempt ${this.refreshCount + 1}/${this.MAX_REFRESHES})`);
    
    this.isRefreshing = true;
    this.refreshCount++;
    this.lastRefreshTime = Date.now();
    
    this.cleanExistingFavicons();
    
    const fragment = document.createDocumentFragment();
    
    // Comprehensive iOS Apple Touch Icons for perfect window switching
    const iosSizes = ['180x180', '152x152', '144x144', '120x120', '114x114', '76x76', '72x72', '60x60', '57x57'];
    iosSizes.forEach(size => {
      fragment.appendChild(this.createNewFaviconElement('apple-touch-icon', size));
    });
    
    // Default apple touch icon without size
    fragment.appendChild(this.createNewFaviconElement('apple-touch-icon'));
    
    // Standard favicons for all platforms
    const standardSizes = ['512x512', '192x192', '128x128', '96x96', '32x32', '16x16'];
    standardSizes.forEach(size => {
      fragment.appendChild(this.createNewFaviconElement('icon', size));
    });
    
    // Shortcut icon for legacy support
    fragment.appendChild(this.createNewFaviconElement('shortcut icon'));
    
    document.head.appendChild(fragment);
    
    this.updateNewHealthcareMetaTags();
    
    console.log('✅ NEW healthcare favicons installed successfully');
    this.isRefreshing = false;
    this.hasInitialized = true;
  }

  private updateNewHealthcareMetaTags(): void {
    const metaUpdates = [
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Mylli Services' },
      { name: 'theme-color', content: '#0077C0' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: 'Mylli Services' },
      { name: 'msapplication-TileColor', content: '#0077C0' },
      { name: 'msapplication-TileImage', content: this.config.baseUrl }
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
    console.log('🏥 Initializing NEW healthcare favicon system...');
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => this.setupNewHealthcareFavicons(), 300);
      });
    } else {
      setTimeout(() => this.setupNewHealthcareFavicons(), 300);
    }
    
    // Enhanced iOS Safari support with multiple event listeners
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && this.canRefresh()) {
        console.log('👁️ Visibility change - refreshing NEW healthcare favicon');
        setTimeout(() => {
          if (this.canRefresh()) {
            this.setupNewHealthcareFavicons();
          }
        }, 800);
      }
    });
    
    window.addEventListener('focus', () => {
      if (this.canRefresh()) {
        console.log('🎯 Window focus - refreshing NEW healthcare favicon');
        setTimeout(() => {
          if (this.canRefresh()) {
            this.setupNewHealthcareFavicons();
          }
        }, 1200);
      }
    });

    window.addEventListener('pageshow', (event) => {
      if (this.canRefresh()) {
        console.log('📱 Page show - ensuring NEW healthcare favicon visibility');
        setTimeout(() => {
          if (this.canRefresh()) {
            this.setupNewHealthcareFavicons();
          }
        }, 1500);
      }
    });

    // Additional iOS Safari specific events
    if (this.isIOS() && this.isSafari()) {
      window.addEventListener('orientationchange', () => {
        if (this.canRefresh()) {
          console.log('🔄 Orientation change - refreshing NEW healthcare favicon');
          setTimeout(() => {
            if (this.canRefresh()) {
              this.setupNewHealthcareFavicons();
            }
          }, 2000);
        }
      });

      window.addEventListener('resize', () => {
        if (this.canRefresh()) {
          setTimeout(() => {
            if (this.canRefresh()) {
              this.setupNewHealthcareFavicons();
            }
          }, 1000);
        }
      });
    }
  }

  public resetRefreshLimits(): void {
    this.refreshCount = 0;
    this.lastRefreshTime = 0;
    this.isRefreshing = false;
    console.log('🔄 NEW healthcare favicon refresh limits reset');
  }

  public forceRefresh(): void {
    this.resetRefreshLimits();
    this.setupNewHealthcareFavicons();
  }
}

// Export singleton and utility functions
export const newHealthcareFaviconManager = NewHealthcareFaviconManager.getInstance();
export const setupNewHealthcareFavicons = () => newHealthcareFaviconManager.setupNewHealthcareFavicons();
export const initializeNewFaviconManager = () => newHealthcareFaviconManager.initialize();
export const resetNewFaviconLimits = () => newHealthcareFaviconManager.resetRefreshLimits();
export const forceRefreshNewFavicon = () => newHealthcareFaviconManager.forceRefresh();
