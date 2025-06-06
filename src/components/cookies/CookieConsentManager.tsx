
import React, { useState, useEffect } from 'react';
import CookieConsentBanner from './CookieConsentBanner';
import CookieSettingsModal from './CookieSettingsModal';
import { 
  getConsentPreferences, 
  setConsentPreferences, 
  CookiePreferences,
  initializeGoogleAnalytics,
  loadMarketingScripts,
  clearCookiesByCategory,
  CookieCategory
} from '@/utils/cookieConsent';

const CookieConsentManager: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false,
    timestamp: '',
    consentGiven: false
  });

  useEffect(() => {
    // Check if user has already given consent
    const existingPreferences = getConsentPreferences();
    
    if (existingPreferences) {
      setPreferences(existingPreferences);
      setShowBanner(false);
      
      // Load scripts based on existing preferences
      if (existingPreferences.analytics) {
        initializeGoogleAnalytics();
      }
      if (existingPreferences.marketing) {
        loadMarketingScripts();
      }
    } else {
      // Show banner if no consent has been given
      setShowBanner(true);
    }

    // Listen for global cookie consent changes
    const handleConsentChange = (event: CustomEvent<CookiePreferences>) => {
      setPreferences(event.detail);
    };

    window.addEventListener('cookieConsentChanged', handleConsentChange as EventListener);
    
    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange as EventListener);
    };
  }, []);

  // Expose method to show cookie settings from anywhere in the app
  useEffect(() => {
    const showCookieSettings = () => {
      setShowModal(true);
    };

    // Add global method to show cookie settings
    (window as any).showCookieSettings = showCookieSettings;

    return () => {
      delete (window as any).showCookieSettings;
    };
  }, []);

  const handleAcceptAll = () => {
    const newPreferences: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
      timestamp: new Date().toISOString(),
      consentGiven: true
    };
    
    setConsentPreferences(newPreferences);
    setPreferences(newPreferences);
    setShowBanner(false);
    
    // Load all scripts
    initializeGoogleAnalytics();
    loadMarketingScripts();
  };

  const handleRejectAll = () => {
    const newPreferences: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
      timestamp: new Date().toISOString(),
      consentGiven: true
    };
    
    setConsentPreferences(newPreferences);
    setPreferences(newPreferences);
    setShowBanner(false);
    
    // Clear non-essential cookies
    clearCookiesByCategory('analytics');
    clearCookiesByCategory('marketing');
    clearCookiesByCategory('preferences');
  };

  const handleCustomize = () => {
    setShowModal(true);
  };

  const handleSavePreferences = (newPreferences: CookiePreferences) => {
    const oldPreferences = preferences;
    
    setConsentPreferences(newPreferences);
    setPreferences(newPreferences);
    setShowBanner(false);
    
    // Handle script loading/unloading based on changes
    if (newPreferences.analytics && !oldPreferences.analytics) {
      initializeGoogleAnalytics();
    } else if (!newPreferences.analytics && oldPreferences.analytics) {
      clearCookiesByCategory('analytics');
    }
    
    if (newPreferences.marketing && !oldPreferences.marketing) {
      loadMarketingScripts();
    } else if (!newPreferences.marketing && oldPreferences.marketing) {
      clearCookiesByCategory('marketing');
    }
    
    if (!newPreferences.preferences && oldPreferences.preferences) {
      clearCookiesByCategory('preferences');
    }
  };

  const handleCloseBanner = () => {
    // Allow closing the banner, but don't set any preferences
    // This maintains CNDP compliance by not assuming consent
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <CookieConsentBanner
          onAcceptAll={handleAcceptAll}
          onRejectAll={handleRejectAll}
          onCustomize={handleCustomize}
          onClose={handleCloseBanner}
        />
      )}
      
      <CookieSettingsModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSavePreferences}
        initialPreferences={preferences}
      />
    </>
  );
};

export default CookieConsentManager;
