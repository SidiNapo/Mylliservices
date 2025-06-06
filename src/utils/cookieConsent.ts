
export type CookieCategory = 'essential' | 'analytics' | 'marketing' | 'preferences';

export interface CookieInfo {
  name: string;
  provider: string;
  purpose: string;
  expiry: string;
  type: 'HTTP Cookie' | 'Local Storage' | 'Session Storage';
}

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  timestamp: string;
  consentGiven: boolean;
}

export const cookieCategories: Record<CookieCategory, CookieInfo[]> = {
  essential: [
    {
      name: 'consent-preferences',
      provider: 'Mylli Services',
      purpose: 'Stocke vos préférences de cookies et votre consentement',
      expiry: '1 an',
      type: 'Local Storage'
    },
    {
      name: 'language',
      provider: 'Mylli Services',
      purpose: 'Mémorise votre langue préférée',
      expiry: 'Session',
      type: 'Local Storage'
    }
  ],
  analytics: [
    {
      name: '_ga',
      provider: 'Google Analytics',
      purpose: 'Distingue les utilisateurs uniques pour les statistiques',
      expiry: '2 ans',
      type: 'HTTP Cookie'
    },
    {
      name: '_gid',
      provider: 'Google Analytics',
      purpose: 'Distingue les utilisateurs uniques pour les statistiques',
      expiry: '24 heures',
      type: 'HTTP Cookie'
    }
  ],
  marketing: [
    {
      name: '_fbp',
      provider: 'Facebook',
      purpose: 'Suivi des conversions et publicités ciblées',
      expiry: '3 mois',
      type: 'HTTP Cookie'
    }
  ],
  preferences: [
    {
      name: 'theme-preference',
      provider: 'Mylli Services',
      purpose: 'Mémorise vos préférences d\'affichage',
      expiry: '1 an',
      type: 'Local Storage'
    }
  ]
};

export const getConsentPreferences = (): CookiePreferences | null => {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem('cookie-consent-preferences');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  return null;
};

export const setConsentPreferences = (preferences: CookiePreferences): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('cookie-consent-preferences', JSON.stringify(preferences));
  
  // Trigger custom event for other parts of the app to listen to
  window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: preferences }));
};

export const hasConsentFor = (category: CookieCategory): boolean => {
  const preferences = getConsentPreferences();
  if (!preferences) return false;
  
  return preferences[category];
};

export const initializeGoogleAnalytics = (): void => {
  if (!hasConsentFor('analytics')) return;
  
  // Initialize Google Analytics only if consent is given
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
  document.head.appendChild(script);
  
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
};

export const loadMarketingScripts = (): void => {
  if (!hasConsentFor('marketing')) return;
  
  // Load Facebook Pixel or other marketing scripts
  console.log('Loading marketing scripts...');
};

export const clearCookiesByCategory = (category: CookieCategory): void => {
  const cookies = cookieCategories[category];
  
  cookies.forEach(cookie => {
    if (cookie.type === 'HTTP Cookie') {
      // Clear HTTP cookies
      document.cookie = `${cookie.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `${cookie.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
    } else if (cookie.type === 'Local Storage') {
      localStorage.removeItem(cookie.name);
    } else if (cookie.type === 'Session Storage') {
      sessionStorage.removeItem(cookie.name);
    }
  });
};

declare global {
  interface Window {
    dataLayer: any[];
  }
}
