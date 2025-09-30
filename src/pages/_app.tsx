import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaArrowUp, FaWhatsapp, FaSun, FaMoon } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import '../globals.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';

function AppContent({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* Botão de Idioma */}
        <button
          onClick={toggleLanguage}
          className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-600 text-white shadow-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label={language === 'en' ? 'Mudar para Português' : 'Change to English'}
        >
          <div className="flex items-center gap-1">
            <MdLanguage size={20} />
            {/* <span className="text-xs font-bold">{language === 'en' ? 'PT' : 'EN'}</span> */}
          </div>
        </button>

        {/* Botão de Tema */}
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 hover:scale-110"
          aria-label={isDarkMode ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        {/* Botão WhatsApp */}
        <a
          href="https://wa.me/+14254765411"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-400 transition"
          aria-label="Fale conosco no WhatsApp"
        >
          <FaWhatsapp size={20} />
        </a>

        {/* Botão Voltar ao Topo */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-500 transition"
            aria-label="Voltar ao topo"
          >
            <FaArrowUp size={20} />
          </button>
        )}
      </div>
    </div>
  );
}

function MyApp(props: AppProps) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent {...props} />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default MyApp;