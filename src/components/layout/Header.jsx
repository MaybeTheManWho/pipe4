import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import ThemeToggle from '../common/ThemeToggle';
import LanguageToggle from '../common/LanguageToggle';

const Header = ({ isAuthenticated, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const isActiveLink = (path) => {
    return location.pathname === path;
  };
  
  const navLinks = [
    { name: t('common.home'), path: '/' },
    { name: t('common.services'), path: '/services' },
    { name: t('common.contact'), path: '/contact' },
  ];
  
  return (
    <header className={`bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-2 shadow-md' : 'py-4'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 relative overflow-hidden group">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center relative z-10">
              <span className="text-white font-bold text-xl">P</span>
              {/* Adding animation */}
              <div className="absolute inset-0 bg-blue-700 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 z-0"></div>
            </div>
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400 relative">
              PipeBot
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium relative overflow-hidden group ${
                  isActiveLink(link.path)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                } transition-colors duration-200`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                  isActiveLink(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                } bg-blue-600 dark:bg-blue-400 transition-all duration-300`}></span>
              </Link>
            ))}
            
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className={`font-medium relative overflow-hidden group ${
                    isActiveLink('/dashboard')
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  } transition-colors duration-200`}
                >
                  {t('common.dashboard')}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                    isActiveLink('/dashboard') ? 'w-full' : 'w-0 group-hover:w-full'
                  } bg-blue-600 dark:bg-blue-400 transition-all duration-300`}></span>
                </Link>
                <button
                  onClick={onLogout}
                  className="btn btn-outline dark:border-blue-500 dark:text-blue-400 dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
                >
                  {t('common.logout')}
                </button>
              </>
            ) : (
              <Link to="/login" className="btn btn-primary transform hover:scale-105 transition-all duration-300">
                {t('common.login')}
              </Link>
            )}
            
            {/* Theme and Language toggles */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </nav>
          
          {/* Mobile Menu Button and Toggles */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />
            <button
              className="text-gray-600 dark:text-gray-300 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block font-medium ${
                  isActiveLink(link.path)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                } transition-colors duration-200`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className={`block font-medium ${
                    isActiveLink('/dashboard')
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  } transition-colors duration-200`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('common.dashboard')}
                </Link>
                <button
                  onClick={() => {
                    onLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left font-medium text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-200"
                >
                  {t('common.logout')}
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('common.login')}
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;