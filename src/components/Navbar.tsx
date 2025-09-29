"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
/* Instalar 
npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faPhone, faCalendarAlt, faUsers, faStar, faShareAlt, faEnvelope,faUserTie,faDatabase,faChartBar,faLaptopCode,faQuestionCircle,faChartPie,faGlobe } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Navbar() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeHash, setActiveHash] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const menuItems: Array<{ item: string, path: string, icon: any, type: 'page' | 'section' }> = [
    { item: 'Início', path: '/', icon: faHome, type: 'page' },
    { item: 'Sobre', path: '#about', icon: faUserTie, type: 'section' },
    { item: 'Contato', path: '#contact', icon: faEnvelope, type: 'section' },
    { item: 'Serviços', path: '#service', icon: faDatabase, type: 'section' },
    { item: 'Orçamento', path: '#orcamento', icon: faDatabase, type: 'section' },
    { item: 'Review', path: '#review', icon: faStar, type: 'section' },
  ];

  // Função aprimorada para navegação
  const handleNavigation = async (path: string, type: 'page' | 'section' = 'section') => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);

    if (type === 'page') {
      // Navegação para páginas
      await router.push(path);
    } else if (type === 'section') {
      // Navegação para seções
      if (path.startsWith('#')) {
        const sectionId = path.substring(1);
        
        if (window.location.pathname === '/') {
          // Se já estiver na home, rola diretamente para a seção
          scrollToSection(sectionId);
        } else {
          // Se não estiver na home, navega para a home primeiro
          await router.push('/');
          // Aguarda um pequeno delay para garantir que a página carregou
          setTimeout(() => {
            scrollToSection(sectionId);
          }, 100);
        }
      }
    }
  };

  // Função para rolar até uma seção específica
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId) || document.querySelector(`[data-section="${sectionId}"]`);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Atualiza o hash da URL sem recarregar a página
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', `#${sectionId}`);
        setActiveHash(`#${sectionId}`);
      }
    } else {
      console.warn(`Seção com ID "${sectionId}" não encontrada`);
    }
  };

  // Hook para detectar mudanças no hash da URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setActiveHash(hash);
      if (hash && pathname === '/') {
        const sectionId = hash.substring(1);
        setTimeout(() => scrollToSection(sectionId), 100);
      }
    };

    // Detecta mudanças no hash
    window.addEventListener('hashchange', handleHashChange);
    
    // Verifica o hash inicial
    if (typeof window !== 'undefined' && window.location.hash) {
      handleHashChange();
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [pathname, router]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Fechar menu mobile ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <header className="top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Container principal respeitando o limite de 1280px */}
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - visível apenas em desktop */}
          {/* <div className="hidden xl:flex items-center">
            <button onClick={() => handleNavigation('/', 'page')} className="flex items-center">
              <Image 
                width={120} 
                height={120} 
                src="/" 
                alt="Logo"
                className="w-24 h-24 object-contain"
              />
            </button>
          </div>
           */}
          {/* Menu Desktop - oculto em mobile */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button 
              onClick={() => handleNavigation('/', 'page')} 
              className={`px-3 py-2 text-sm hover:bg-[#78B2FB] hover:text-white rounded-md flex items-center space-x-2 transition-colors ${pathname === '/' ? 'bg-[#2C394C] text-white' : 'text-gray-700'}`}
            >
              <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
              <span>Inicio</span>
            </button>
            
            <button 
              onClick={() => handleNavigation('#contact', 'section')} 
              className={`px-3 py-2 text-sm hover:bg-[#2C394C] hover:text-white rounded-md flex items-center space-x-2 transition-colors ${activeHash === '#FormQuote' ? 'bg-[#2C394C] text-white' : 'text-gray-700'}`}
            >
              <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4" />
              <span>Orçamento</span>
            </button>

             <button 
              onClick={() => handleNavigation('WebDevelopment', 'page')} 
              className={`px-3 py-2 text-sm hover:bg-[#2C394C] hover:text-white rounded-md flex items-center space-x-2 transition-colors ${activeHash === '#Service' ? 'bg-[#2C394C] text-white' : 'text-gray-700'}`}
            >
              <FontAwesomeIcon icon={faGlobe} className="w-4 h-4" />
              <span>Contato</span>
            </button>

             <button 
              onClick={() => handleNavigation('DocumentationTrainingSection', 'page')} 
              className={`px-3 py-2 text-sm hover:bg-[#2C394C] hover:text-white rounded-md flex items-center space-x-2 transition-colors ${activeHash === '#Service' ? 'bg-[#2C394C] text-white' : 'text-gray-700'}`}
            >
              <FontAwesomeIcon icon={faQuestionCircle} className="w-4 h-4" />
              <span>Serviços</span>
            </button>

            <button 
              onClick={() => handleNavigation('About', 'page')} 
              className={`px-3 py-2 text-sm hover:bg-[#2C394C] hover:text-white rounded-md flex items-center space-x-2 transition-colors ${activeHash === '#About' ? 'bg-[#2C394C] text-white' : 'text-gray-700'}`}
            >
              <FontAwesomeIcon icon={faUsers} className="w-4 h-4" />
              <span>Sobre</span>
            </button>

            <button 
              onClick={() => handleNavigation('FeedbackForm', 'page')} 
              className={`px-3 py-2 text-sm hover:bg-[#2C394C] hover:text-white rounded-md flex items-center space-x-2 transition-colors ${activeHash === '#About' ? 'bg-[#2C394C] text-white' : 'text-gray-700'}`}
            >
              <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
              <span>Review</span>
            </button>
            
          </nav>
          
          {/* Botão de Contato Desktop */}
          <div className="hidden xl:flex items-center">
            <a 
              href="tel:+14255886654" 
              className="px-4 py-2 bg-[#2C394C] hover:bg-[#78B2FB] text-white rounded-md transition-colors text-sm font-medium"
            >
              (425) 476-5411
            </a>
          </div>
          
          {/* Logo Mobile - centralizado */}
          <div className="flex lg:hidden items-center text-center transform-translate-x-1/2">
            <button onClick={() => handleNavigation('/', 'page')} className="flex items-center">
              <Image 
                width={120} 
                height={120} 
                src="/logo/logo-principal/transparent-logo-icone.png" 
                alt="Logo da empresa"
                className="w-24 h-24 object-contain"
              />
            </button>
            <p className='text-sm'>BC Tech Solutions & Advisory</p>
          </div>
          
          {/* Botão Hamburger - apenas mobile */}
          <button 
            onClick={toggleMobileMenu} 
            className="lg:hidden p-2 text-gray-700 hover:text-[#9b4819] transition-colors"
            aria-label="Abrir menu"
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Menu Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-full bg-[#78B2FB] shadow-xl">
            {/* Header do menu mobile */}
            <div className="flex items-center justify-between p-4 border-b border-[#2C394C] border-opacity-20">
              <h2 className="text-lg font-semibold text-[#2C394C]">Menu</h2>
              <button 
                onClick={toggleMobileMenu} 
                className="p-2 text-[#2C394C] hover:bg-[#2C394C] hover:bg-opacity-10 rounded-lg transition-colors"
                aria-label="Fechar menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Lista de menu items */}
            <nav className="flex flex-col">
              {menuItems.map((menuItem) => (
                <button
                  key={menuItem.item}
                  onClick={() => handleNavigation(menuItem.path, menuItem.type)}
                  className="flex items-center space-x-3 px-6 py-4 text-[#2C394C] hover:bg-[#9b4819] hover:bg-opacity-10 transition-colors text-left"
                >
                  <FontAwesomeIcon icon={menuItem.icon} className="w-5 h-5" />
                  <span className="font-medium">{menuItem.item}</span>
                </button>
              ))}
              
              {/* Botão de contato no mobile */}
              <div className="px-6 pt-4">
                <a 
                  href="tel:+14254765411" 
                  className="flex items-center justify-center w-full px-4 py-3 bg-[#2C394C] hover:bg-[#7a3614] text-white rounded-lg transition-colors font-medium"
                >
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2" />
                  Ligar Agora
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}