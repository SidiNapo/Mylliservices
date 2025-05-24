
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'fr' | 'en' | 'ar';

// Define language context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  isRTL: boolean;
};

// Create the language context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language provider props
interface LanguageProviderProps {
  children: ReactNode;
}

// Translation data
const translations: Record<Language, Record<string, string>> = {
  fr: {},
  en: {},
  ar: {}
};

// Import translation data
import frTranslations from '../translations/fr';
import enTranslations from '../translations/en';
import arTranslations from '../translations/ar';

// Assign translations
translations.fr = frTranslations;
translations.en = enTranslations;
translations.ar = arTranslations;

// Language provider component
export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Get saved language from localStorage or use default
  const getSavedLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language');
      return (savedLanguage as Language) || 'fr';
    }
    return 'fr'; // Default language
  };

  const [language, setLanguage] = useState<Language>(getSavedLanguage());
  const isRTL = language === 'ar';

  // Save language to localStorage when it changes
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
    
    // Handle RTL direction for Arabic
    if (isRTL) {
      document.documentElement.dir = 'rtl';
      document.body.classList.add('rtl');
    } else {
      document.documentElement.dir = 'ltr';
      document.body.classList.remove('rtl');
    }
  }, [language, isRTL]);

  // Translation function with parameter support
  const t = (key: string, params?: Record<string, string | number>): string => {
    if (!translations[language] || !translations[language][key]) {
      console.warn(`Missing translation for key: ${key} in language: ${language}`);
      return key;
    }
    
    let translation = translations[language][key];
    
    // Replace parameters in translation if provided
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        const regex = new RegExp(`{${paramKey}}`, 'g');
        translation = translation.replace(regex, String(paramValue));
      });
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
