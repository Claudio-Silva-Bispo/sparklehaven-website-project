import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaArrowUp,FaWhatsapp  } from 'react-icons/fa'; /*Instalar npm install react-icons*/
import '../globals.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300); // mostra depois de rolar 300px
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
      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/+14255886654"
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

export default MyApp;
