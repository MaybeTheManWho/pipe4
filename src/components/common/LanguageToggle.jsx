import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const LanguageToggle = ({ className = '' }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`p-2 rounded-full transition-colors ${className} ${
        language === 'ar' 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
      }`}
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      {language === 'en' ? (
        <div className="flex items-center">
          <span className="text-sm font-medium">عربي</span>
        </div>
      ) : (
        <div className="flex items-center">
          <span className="text-sm font-medium">EN</span>
        </div>
      )}
    </button>
  );
};

export default LanguageToggle;