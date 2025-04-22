import React, { createContext, useState, useEffect, useContext } from 'react';
import translations from '../utils/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  useEffect(() => {
    // Set html dir attribute for RTL support
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Add RTL class to body
    if (language === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
    
    // Save to localStorage
    localStorage.setItem('language', language);
  }, [language]);
  
  // Get the text for the current language
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    // Navigate through nested keys
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to English if translation not found
        console.warn(`Translation missing for key: ${key} in ${language}`);
        let fallback = translations['en'];
        for (const k of keys) {
          if (fallback && fallback[k]) {
            fallback = fallback[k];
          } else {
            return key; // Last resort fallback
          }
        }
        return fallback || key;
      }
    }
    
    return value;
  };
  
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'ar' : 'en');
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};