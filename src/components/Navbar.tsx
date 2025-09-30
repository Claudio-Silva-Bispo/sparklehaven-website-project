import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  const menuItems = [
    { item: 'nav.home', path: '#home', icon: '🏠' },
    { item: 'nav.services', path: '#services', icon: '✨' },
    { item: 'nav.about', path: '#about', icon: '👥' },
    { item: 'nav.feedback', path: '#feedback', icon: '⭐' },
    { item: 'nav.contact', path: '#contact', icon: '📧' },
  ];

  // Detecta scroll para mostrar/ocultar navbar no mobile
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    
    if (path.startsWith('#')) {
      const sectionId = path.substring(1);
      const element = document.getElementById(sectionId);
      
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        window.history.replaceState(null, '', path);
        setActiveHash(path);
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar Desktop - sempre visível */}
      <header className={`hidden lg:block fixed top-0 left-0 right-0 z-50 shadow-lg transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => handleNavigation('#home')} 
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl">
                  ✨
                </div>
                <span className={`text-xl font-bold ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>SparklHaven</span>
              </button>
            </div>
            
            {/* Menu Desktop */}
            <nav className="flex items-center space-x-1">
              {menuItems.map((menuItem) => (
                <button
                  key={menuItem.item}
                  onClick={() => handleNavigation(menuItem.path)}
                  className={`px-4 py-2 text-sm rounded-lg flex items-center space-x-2 transition-all ${
                    activeHash === menuItem.path 
                      ? isDarkMode
                        ? 'bg-blue-500/30 text-blue-400'
                        : 'bg-blue-500/20 text-blue-700'
                      : isDarkMode
                        ? 'text-gray-300 hover:bg-blue-500/10 hover:text-blue-400'
                        : 'text-gray-700 hover:bg-blue-500/10 hover:text-blue-700'
                  }`}
                >
                  <span>{menuItem.icon}</span>
                  <span>{t(menuItem.item)}</span>
                </button>
              ))}
            </nav>
            
            {/* Botões de Controle e Contato */}
            <div className="flex items-center gap-3">
              {/* Botão de Tema */}
              <button
                onClick={toggleTheme}
                className={`px-4 py-3 rounded-lg transition-all duration-300 hover:scale-110 hidden xl:flex ${
                  isDarkMode
                    ? 'bg-blue-500/10 ring-1 ring-blue-500/20 hover:bg-blue-500/20'
                    : 'bg-blue-600/10 ring-1 ring-blue-600/30 hover:bg-blue-600/20'
                }`}
                aria-label="Toggle theme"
              >
                <span className="text-xl">{isDarkMode ? '☀️' : '🌙'}</span>
              </button>

              {/* Botão de Idioma */}
              <button
                onClick={toggleLanguage}
                className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hidden xl:flex ${
                  isDarkMode
                    ? 'bg-blue-500/10 ring-1 ring-blue-500/20 hover:bg-blue-500/20 text-blue-400'
                    : 'bg-blue-600/10 ring-1 ring-blue-600/30 hover:bg-blue-600/20 text-blue-700'
                }`}
              >
                {language === 'en' ? '🇧🇷 PT' : '🇺🇸 EN'}
              </button>

              {/* Botão de Contato */}
              <a 
                href="tel:+14254765411" 
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
              >
                📞 (425) 476-5411
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navbar Mobile - aparece apenas ao fazer scroll */}
      <header 
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 shadow-lg transition-all duration-300 ${
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        } ${
          isDarkMode
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
            : 'bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo Mobile */}
            <button 
              onClick={() => handleNavigation('#home')} 
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-xl">
                ✨
              </div>
              <span className={`text-lg font-bold ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>SparklHaven</span>
            </button>
            
            {/* Botão Hamburger */}
            <button 
              onClick={toggleMobileMenu} 
              className={`p-2 transition-colors ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-blue-400' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              aria-label="Abrir menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className={`fixed inset-0 backdrop-blur-sm z-50 lg:hidden ${
          isDarkMode ? 'bg-gray-900/95' : 'bg-blue-900/95'
        }`}>
          <div className={`fixed inset-y-0 right-0 w-full max-w-sm shadow-2xl ${
            isDarkMode
              ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
              : 'bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-50'
          }`}>
            {/* Header do menu mobile */}
            <div className={`flex items-center justify-between p-4 border-b ${
              isDarkMode ? 'border-blue-500/20' : 'border-blue-300/30'
            }`}>
              <h2 className={`text-lg font-semibold flex items-center gap-2 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                <span className="text-2xl">✨</span>
                Menu
              </h2>
              <button 
                onClick={toggleMobileMenu} 
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode
                    ? 'text-blue-400 hover:bg-blue-500/10'
                    : 'text-blue-600 hover:bg-blue-600/10'
                }`}
                aria-label="Fechar menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Lista de menu items */}
            <nav className="flex flex-col p-4 space-y-2">
              {menuItems.map((menuItem) => (
                <button
                  key={menuItem.item}
                  onClick={() => handleNavigation(menuItem.path)}
                  className={`flex items-center space-x-3 px-4 py-4 rounded-lg transition-colors text-left ring-1 ${
                    isDarkMode
                      ? 'text-white hover:bg-blue-500/10 ring-blue-500/20'
                      : 'text-gray-800 hover:bg-blue-600/10 ring-blue-300/30'
                  }`}
                >
                  <span className="text-2xl">{menuItem.icon}</span>
                  <span className="font-medium">{t(menuItem.item)}</span>
                </button>
              ))}
              
              {/* Botões de controle no mobile */}
              <div className="pt-4 space-y-3">
                {/* Botão de Tema */}
                <button
                  onClick={toggleTheme}
                  className={`flex items-center justify-center w-full rounded-lg px-4 py-3 transition-all font-semibold ring-1 ${
                    isDarkMode
                      ? 'bg-blue-500/10 ring-blue-500/20 hover:bg-blue-500/20 text-blue-400'
                      : 'bg-blue-600/10 ring-blue-300/30 hover:bg-blue-600/20 text-blue-700'
                  }`}
                >
                  <span className="mr-2">{isDarkMode ? '☀️' : '🌙'}</span>
                  {isDarkMode ? t('nav.lightMode') || 'Modo Claro' : t('nav.darkMode') || 'Modo Escuro'}
                </button>

                {/* Botão de Idioma */}
                <button
                  onClick={toggleLanguage}
                  className={`flex items-center justify-center w-full px-4 py-3 rounded-lg transition-all font-semibold ring-1 ${
                    isDarkMode
                      ? 'bg-blue-500/10 ring-blue-500/20 hover:bg-blue-500/20 text-blue-400'
                      : 'bg-blue-600/10 ring-blue-300/30 hover:bg-blue-600/20 text-blue-700'
                  }`}
                >
                  <span className="mr-2">{language === 'en' ? '🇧🇷' : '🇺🇸'}</span>
                  {language === 'en' ? 'Português' : 'English'}
                </button>

                {/* Botão de contato no mobile */}
                <a 
                  href="tel:+14254765411" 
                  className="flex items-center justify-center w-full px-4 py-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-lg transition-all font-semibold shadow-lg"
                >
                  <span className="mr-2">📞</span>
                  {t('nav.callNow') || 'Ligar Agora'}
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}