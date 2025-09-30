import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = () => {
    if (email) {
      alert('Obrigado! Você foi inscrito na nossa newsletter.');
      setEmail('');
    }
  };

  return (
    <footer className={`relative overflow-hidden transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-sky-100 to-blue-100'
    }`}>
      {/* Background overlay */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-full h-full ${isDarkMode ? 'opacity-10' : 'opacity-20'}`}>
          <div className={`absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl ${
            isDarkMode ? 'bg-blue-500/20' : 'bg-blue-200'
          }`}></div>
          <div className={`absolute bottom-20 right-20 w-64 h-64 rounded-full blur-3xl ${
            isDarkMode ? 'bg-blue-500/15' : 'bg-sky-200'
          }`}></div>
        </div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Coluna 1 - Empresa */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-24 h-24 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-lg lg:text-xl font-bold text-white shadow-lg">
                ✨
              </div>
              <div className={`text-xl lg:text-2xl font-bold bg-clip-text text-transparent ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-white to-blue-400' 
                  : 'bg-gradient-to-r from-gray-800 via-blue-900 to-blue-800'
              }`}>
                SparklHaven Cleaning Service
              </div>
            </div>
            
            {/* Tagline */}
            <p className={`mb-6 text-base lg:text-lg font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Transformando casas em lares impecáveis na região de Seattle
            </p>
            
            {/* Description */}
            <p className={`text-sm lg:text-base leading-relaxed mb-6 max-w-md ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Empresa familiar especializada em limpeza residencial, comercial e de escritórios. 
              Atendemos com carinho e profissionalismo desde 2015.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 lg:gap-4">
              <a 
                href="https://wa.me/14254765411" 
                className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-lg lg:text-xl hover:-translate-y-1 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-blue-500/10 ring-1 ring-blue-500/20 hover:bg-blue-500/20 hover:ring-blue-500/40' 
                    : 'bg-blue-600/10 ring-1 ring-blue-600/30 hover:bg-blue-600/20 hover:ring-blue-600/50'
                }`}
                aria-label="WhatsApp"
              >
                📱
              </a>
              <a 
                href="mailto:contato@sparklhavencleaning.com" 
                className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-lg lg:text-xl hover:-translate-y-1 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-blue-500/10 ring-1 ring-blue-500/20 hover:bg-blue-500/20 hover:ring-blue-500/40' 
                    : 'bg-blue-600/10 ring-1 ring-blue-600/30 hover:bg-blue-600/20 hover:ring-blue-600/50'
                }`}
                aria-label="Email"
              >
                📧
              </a>
              <a 
                href="#" 
                className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-lg lg:text-xl hover:-translate-y-1 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-blue-500/10 ring-1 ring-blue-500/20 hover:bg-blue-500/20 hover:ring-blue-500/40' 
                    : 'bg-blue-600/10 ring-1 ring-blue-600/30 hover:bg-blue-600/20 hover:ring-blue-600/50'
                }`}
                aria-label="Facebook"
              >
                👍
              </a>
              <a 
                href="#" 
                className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-lg lg:text-xl hover:-translate-y-1 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-blue-500/10 ring-1 ring-blue-500/20 hover:bg-blue-500/20 hover:ring-blue-500/40' 
                    : 'bg-blue-600/10 ring-1 ring-blue-600/30 hover:bg-blue-600/20 hover:ring-blue-600/50'
                }`}
                aria-label="Instagram"
              >
                📸
              </a>
            </div>
          </div>

          {/* Coluna 2 - Serviços */}
          <div>
            <h3 className={`text-lg lg:text-xl font-bold mb-6 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>
              Serviços
            </h3>
            <ul className="space-y-3 lg:space-y-4">
              <li>
                <a 
                  href="#residential" 
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  Limpeza Residencial
                </a>
              </li>
              <li>
                <a 
                  href="#commercial" 
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  Limpeza Comercial
                </a>
              </li>
              <li>
                <a 
                  href="#office" 
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  Limpeza de Escritórios
                </a>
              </li>
              <li>
                <a 
                  href="#move" 
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  Move In/Move Out
                </a>
              </li>
              <li>
                <a 
                  href="#trash" 
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  Remoção de Lixo
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Empresa */}
          <div>
            <h3 className={`text-lg lg:text-xl font-bold mb-6 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>
              Empresa
            </h3>
            <ul className="space-y-3 lg:space-y-4">
              <li>
                <a 
                  href="#about" 
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  Depoimentos
                </a>
              </li>
             
              <li>
                <a 
                  href="#areas" 
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  Áreas Atendidas
                </a>
              </li>

              <li>
                <a 
                  href="#faq" 
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Coluna 4 - Contato (Full width on mobile) */}
        <div className="mb-12 lg:mb-16">
          <h3 className={`text-lg lg:text-xl font-bold mb-6 ${
            isDarkMode ? 'text-gray-200' : 'text-gray-800'
          }`}>
            Contato
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Email */}
            <div className="flex items-start gap-4">
              <span className="text-xl lg:text-2xl mt-1">📧</span>
              <div>
                <div className={`text-xs lg:text-sm mb-1 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Email</div>
                <a 
                  href="mailto:contato@sparklhavencleaning.com" 
                  className={`text-sm lg:text-base transition-colors duration-300 break-all ${
                    isDarkMode 
                      ? 'text-gray-200 hover:text-blue-400' 
                      : 'text-gray-800 hover:text-blue-700'
                  }`}
                >
                  contato@sparklhavencleaning.com
                </a>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start gap-4">
              <span className="text-xl lg:text-2xl mt-1">📱</span>
              <div>
                <div className={`text-xs lg:text-sm mb-1 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Telefone</div>
                <a 
                  href="tel:+14254765411" 
                  className={`text-sm lg:text-base transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-gray-200 hover:text-blue-400' 
                      : 'text-gray-800 hover:text-blue-700'
                  }`}
                >
                  (425) 476-5411
                </a>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex items-start gap-4">
              <span className="text-xl lg:text-2xl mt-1">📍</span>
              <div>
                <div className={`text-xs lg:text-sm mb-1 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Localização</div>
                <div className={`text-sm lg:text-base ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  Seattle, WA
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={`pt-6 lg:pt-8 border-t ${
          isDarkMode ? 'border-white/10' : 'border-blue-300/30'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 lg:gap-6">
            <div className={`text-sm lg:text-base text-center sm:text-left ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © 2025 SparklHaven Cleaning Service. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 lg:gap-8">
              <a 
                href="#privacy" 
                className={`text-sm lg:text-base transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-blue-400' 
                    : 'text-gray-600 hover:text-blue-700'
                }`}
              >
                Política de Privacidade
              </a>
              <a 
                href="#terms" 
                className={`text-sm lg:text-base transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-blue-400' 
                    : 'text-gray-600 hover:text-blue-700'
                }`}
              >
                Termos de Uso
              </a>
              <a 
                href="#cookies" 
                className={`text-sm lg:text-base transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-blue-400' 
                    : 'text-gray-600 hover:text-blue-700'
                }`}
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;