
// ULTIMATE iOS Safari Favicon Fix System - NO URL FRAGMENTS
// This system ensures the correct Mylli Services favicon displays without breaking URLs

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
  private readonly MAX_REFRESHES = 2;
  private readonly MIN_REFRESH_INTERVAL = 8000;
  private static instance: FaviconManager | null = null;

  constructor(config: FaviconConfig) {
    this.config = config;
  }

  static getInstance(): FaviconManager {
    if (!FaviconManager.instance) {
      FaviconManager.instance = new FaviconManager({
        baseUrl: '/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png',
        version: '2024_final_stable'
      });
    }
    return FaviconManager.instance;
  }

  private generateStableCacheBuster(): string {
    // Use stable cache buster to prevent infinite updates - NO URL FRAGMENTS
    const sessionId = this.getOrCreateSessionId();
    return `v=${this.config.version}&session=${sessionId}&ios=stable`;
  }

  private getOrCreateSessionId(): string {
    let sessionId = sessionStorage.getItem('mylli-favicon-session');
    if (!sessionId) {
      sessionId = `ios_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
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
    // CRITICAL: Clean up ALL URL fragments to prevent accumulation
    const currentUrl = window.location.href;
    
    if (currentUrl.includes('#') || currentUrl.includes('%23')) {
      console.log('🧹 Cleaning broken URL fragments...');
      
      // Remove ALL hash fragments and encoded fragments
      let cleanURL = currentUrl.split('#')[0];
      cleanURL = cleanURL.replace(/%23[^&]*/g, '');
      cleanURL = cleanURL.replace(/ios-favicon-refresh/g, '');
      
      // Use replaceState to clean URL without triggering page reload
      window.history.replaceState(null, '', cleanURL);
      
      console.log('✅ URL cleaned from:', currentUrl);
      console.log('✅ URL cleaned to:', cleanURL);
    }
  }

  private removeAllExistingFavicons(): void {
    console.log('🗑️ Cleaning existing favicons for iOS...');
    
    const selectors = [
      'link[rel*="icon"]',
      'link[rel*="apple-touch-icon"]',
      'link[rel="shortcut icon"]'
    ];
    
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        if (element.getAttribute('data-mylli-favicon') || element.getAttribute('data-mylli-ios-favicon')) {
          element.remove();
        }
      });
    });
  }

  private createIOSAppleTouchIcon(sizes?: string): HTMLLinkElement {
    const link = document.createElement('link');
    link.rel = 'apple-touch-icon';
    
    if (sizes) {
      link.setAttribute('sizes', sizes);
    }
    
    const cacheBuster = this.generateStableCacheBuster();
    const sizeParam = sizes ? `&size=${sizes}` : '&size=180x180';
    link.href = `${this.config.baseUrl}?${cacheBuster}${sizeParam}`;
    link.setAttribute('data-mylli-ios-favicon', 'true');
    
    return link;
  }

  private createStandardFavicon(rel: string, sizes?: string): HTMLLinkElement {
    const link = document.createElement('link');
    link.rel = rel;
    link.type = 'image/png';
    
    if (sizes) {
      link.setAttribute('sizes', sizes);
    }
    
    const cacheBuster = this.generateStableCacheBuster();
    const sizeParam = sizes ? `&size=${sizes}` : '';
    link.href = `${this.config.baseUrl}?${cacheBuster}${sizeParam}`;
    link.setAttribute('data-mylli-favicon', 'true');
    
    return link;
  }

  public setupIOSFavicons(): void {
    if (!this.canRefresh()) {
      console.log('🛑 iOS favicon refresh blocked - too frequent or max attempts reached');
      return;
    }

    console.log(`🍎 Setting up iOS favicons (attempt ${this.refreshCount + 1}/${this.MAX_REFRESHES})`);
    
    this.isRefreshing = true;
    this.refreshCount++;
    this.lastRefreshTime = Date.now();
    
    // Step 1: Clean URL fragments FIRST - CRITICAL
    this.cleanURL();
    
    // Step 2: Clean existing favicons
    this.removeAllExistingFavicons();
    
    // Step 3: Create new favicon elements
    const fragment = document.createDocumentFragment();
    
    // iOS Apple Touch Icons (most important for iOS Safari)
    fragment.appendChild(this.createIOSAppleTouchIcon()); // Default 180x180
    fragment.appendChild(this.createIOSAppleTouchIcon('180x180'));
    fragment.appendChild(this.createIOSAppleTouchIcon('152x152'));
    fragment.appendChild(this.createIOSAppleTouchIcon('120x120'));
    fragment.appendChild(this.createIOSAppleTouchIcon('76x76'));
    
    // Standard favicons for other browsers and iOS fallback
    fragment.appendChild(this.createStandardFavicon('icon', '32x32'));
    fragment.appendChild(this.createStandardFavicon('icon', '16x16'));
    fragment.appendChild(this.createStandardFavicon('shortcut icon'));
    
    // Add all to head
    document.head.appendChild(fragment);
    
    // Step 4: Apply iOS-specific meta tags
    this.updateIOSMetaTags();
    
    console.log('✅ iOS favicons installed with clean URL');
    this.isRefreshing = false;
    this.hasInitialized = true;
  }

  private updateIOSMetaTags(): void {
    const metaUpdates = [
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Mylli Services' }
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
    console.log('🎯 Initializing URL-safe Favicon Manager with emergency cleanup...');
    
    // CRITICAL: Clean URL immediately on initialization
    this.cleanURL();
    
    // Initial setup
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => this.setupIOSFavicons(), 1000);
      });
    } else {
      setTimeout(() => this.setupIOSFavicons(), 1000);
    }
    
    // Handle visibility change for iOS Safari tab switching - with strict throttling
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && this.isIOS() && this.isSafari() && this.canRefresh()) {
        console.log('👀 iOS Safari tab became visible, checking favicon...');
        setTimeout(() => {
          if (this.canRefresh()) {
            this.setupIOSFavicons();
          }
        }, 2000);
      }
    });
    
    // Handle page focus for iOS - with strict throttling
    window.addEventListener('focus', () => {
      if (this.isIOS() && this.isSafari() && this.canRefresh()) {
        console.log('🔍 iOS Safari gained focus, checking favicon...');
        setTimeout(() => {
          if (this.canRefresh()) {
            this.setupIOSFavicons();
          }
        }, 3000);
      }
    });
  }

  // Public method to reset refresh limits if needed
  public resetRefreshLimits(): void {
    this.refreshCount = 0;
    this.lastRefreshTime = 0;
    this.isRefreshing = false;
    console.log('🔄 Favicon refresh limits reset');
  }

  // Public method to manually clean URL - CRITICAL FEATURE
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
