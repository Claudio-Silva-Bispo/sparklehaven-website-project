import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  const menuItems = [
    { item: 'Início', path: '#home', icon: '🏠' },
    { item: 'Serviços', path: '#services', icon: '✨' },
    { item: 'Sobre', path: '#about', icon: '👥' },
    { item: 'Depoimentos', path: '#testimonials', icon: '⭐' },
    { item: 'Contato', path: '#contact', icon: '📧' },
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
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
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
                <span className="text-xl font-bold text-blue-400">SparklHaven</span>
              </button>
            </div>
            
            {/* Menu Desktop */}
            <nav className="flex items-center space-x-1">
              {menuItems.map((menuItem) => (
                <button
                  key={menuItem.item}
                  onClick={() => handleNavigation(menuItem.path)}
                  className={`px-4 py-2 text-sm hover:bg-blue-500/20 rounded-lg flex items-center space-x-2 transition-all ${
                    activeHash === menuItem.path ? 'bg-blue-500/30 text-white' : 'text-gray-300'
                  }`}
                >
                  <span>{menuItem.icon}</span>
                  <span>{menuItem.item}</span>
                </button>
              ))}
            </nav>
            
            {/* Botão de Contato */}
            <div className="flex items-center">
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
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg transition-transform duration-300 ${
          isScrolled ? 'translate-y-0' : '-translate-y-full'
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
              <span className="text-lg font-bold text-blue-400">SparklHaven</span>
            </button>
            
            {/* Botão Hamburger */}
            <button 
              onClick={toggleMobileMenu} 
              className="p-2 text-gray-200 hover:text-blue-400 transition-colors"
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
        <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 lg:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl">
            {/* Header do menu mobile */}
            <div className="flex items-center justify-between p-4 ring-b ring-blue-500/20">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <span className="text-2xl">✨</span>
                Menu
              </h2>
              <button 
                onClick={toggleMobileMenu} 
                className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
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
                  className="flex items-center space-x-3 px-4 py-4 text-white hover:bg-blue-500/10 rounded-lg transition-colors text-left ring-1 ring-blue-500/20"
                >
                  <span className="text-2xl">{menuItem.icon}</span>
                  <span className="font-medium">{menuItem.item}</span>
                </button>
              ))}
              
              {/* Botão de contato no mobile */}
              <div className="pt-4">
                <a 
                  href="tel:+14254765411" 
                  className="flex items-center justify-center w-full px-4 py-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-lg transition-all font-semibold shadow-lg"
                >
                  <span className="mr-2">📞</span>
                  Ligar Agora
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}