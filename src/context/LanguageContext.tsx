
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'fr' | 'en' | 'ar';

// Define language context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
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
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'fr';
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

  // Translation function
  const t = (key: string): string => {
    if (!translations[language]) return key;
    return translations[language][key] || key;
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
