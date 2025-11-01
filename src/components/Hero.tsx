import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();
  const [activePanel, setActivePanel] = useState<'residential' | 'commercial' | 'office'>('residential');
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0);

  const panels = ['residential', 'commercial', 'office'] as const;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentPanelIndex + 1) % panels.length;
      setCurrentPanelIndex(nextIndex);
      setActivePanel(panels[nextIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentPanelIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Cidades atendidas - IMPORTANTE PARA SEO LOCAL
  const citiesServed = [
    'Seattle',
    'Kirkland', 
    'Bellevue',
    'Redmond',
    'Bothell',
    'Sammamish',
    'Issaquah',
    'Mercer Island'
  ];

  // Dados dos serviços com traduções
  const services = [
    { icon: '🏡', textKey: 'hero.service1' },
    { icon: '🏢', textKey: 'hero.service2' },
    { icon: '📦', textKey: 'hero.service3' }
  ];

  // Items da lista de limpeza residencial
  const residentialItems = [
    'hero.residential.feature1',
    'hero.residential.feature2',
    'hero.residential.feature3',
    'hero.residential.feature4',
    'hero.residential.feature5'
  ];

  // Items da lista comercial
  const commercialItems = [
    'hero.commercial.feature1',
    'hero.commercial.feature2',
    'hero.commercial.feature3',
    'hero.commercial.feature4',
    'hero.commercial.feature5'
  ];

  // Items da lista de escritórios
  const officeItems = [
    'hero.office.feature1',
    'hero.office.feature2',
    'hero.office.feature3',
    'hero.office.feature4',
    'hero.office.feature5'
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section 
        id="home" 
        className={`min-h-screen flex items-center relative overflow-hidden transition-colors duration-500 pt-3 xl:pt-20 lg:pt-24 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' 
            : 'bg-gradient-to-br from-blue-50 via-sky-100 to-blue-100'
        }`}
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-0 w-full h-full ${isDarkMode ? 'opacity-10' : 'opacity-20'}`}>
            <div className={`absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl ${
              isDarkMode ? 'bg-blue-500/20' : 'bg-blue-200'
            }`}></div>
            <div className={`absolute top-40 right-20 w-64 h-64 rounded-full blur-3xl ${
              isDarkMode ? 'bg-blue-500/10' : 'bg-sky-200'
            }`}></div>
          </div>
        </div>

        <div className="container mx-auto px-5 relative z-10 py-8 md:py-12 lg:py-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-center xl:max-h-[calc(100vh-120px)]">
            {/* Hero Text - lado esquerdo */}
            <div className="animate-fadeInUp space-y-3 lg:space-y-4">
              <div className={`inline-flex items-center gap-2 rounded-full text-xs sm:text-sm font-medium px-3 py-1.5 ${
                isDarkMode 
                  ? 'bg-blue-500/10 ring-1 ring-blue-500/30 text-blue-400' 
                  : 'bg-blue-600/10 ring-1 ring-blue-600/30 text-blue-900'
              }`}>
                <span>🏠</span> <span>{t('hero.badge')}</span>
              </div>
              
              {/* Título otimizado com localização */}
              <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-extrabold leading-tight bg-clip-text text-transparent ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-white to-blue-400' 
                  : 'bg-gradient-to-r from-gray-800 via-blue-900 to-blue-800'
              }`}>
                {t('hero.title')}
              </h1>

              {/* Badge de localização - ESSENCIAL PARA SEO LOCAL */}
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-xs ${
                isDarkMode
                  ? 'bg-green-500/15 ring-1 ring-green-500/30'
                  : 'bg-green-100 ring-1 ring-green-300'
              }`}>
                <span className="text-sm sm:text-base">📍</span>
                <span className={`font-semibold ${
                  isDarkMode ? 'text-green-400' : 'text-green-800'
                }`}>
                  Serving Seattle, Kirkland, Bellevue & Surrounding Areas
                </span>
              </div>
              
              <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-400' : 'text-gray-700'
              }`}>
                {t('hero.description')}
              </p>

              {/* Área de serviço expandida - IMPORTANTE PARA SEO */}
              <div className={`p-3 sm:p-4 rounded-lg ${
                isDarkMode
                  ? 'bg-blue-500/10 ring-1 ring-blue-500/20'
                  : 'bg-white/70 ring-1 ring-blue-200'
              }`}>
                <div className={`flex items-center gap-2 mb-2 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-800'
                }`}>
                  <span className="text-sm sm:text-base">🗺️</span>
                  <span className="font-semibold text-xs sm:text-sm">We Proudly Serve:</span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {citiesServed.map((city, index) => (
                    <span
                      key={index}
                      className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-medium ${
                        isDarkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-blue-50 text-blue-900'
                      }`}
                    >
                      {city}, WA
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-2 p-2 sm:p-3 rounded-lg transition-all duration-300 hover:translate-x-2 ${
                      isDarkMode 
                        ? 'bg-blue-500/5 ring-1 ring-blue-500/20 hover:bg-blue-500/10' 
                        : 'bg-white/60 ring-1 ring-blue-300/40 hover:bg-white/80 hover:shadow-md'
                    }`}
                  >
                    <div className="text-lg sm:text-xl w-8 sm:w-10 text-center">{service.icon}</div>
                    <div className={`font-medium text-xs sm:text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-800'
                    }`}>{t(service.textKey)}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 items-center pt-2">
                <button 
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 justify-center"
                >
                  <a href="tel:+14254765411" className="flex items-center gap-2">
                    📞 {t('hero.cta')}
                  </a>
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className={`font-semibold flex items-center gap-2 transition-colors duration-300 text-sm ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-blue-500' 
                      : 'text-gray-700 hover:text-blue-700'
                  }`}
                >
                  {t('hero.learnMore')} →
                </button>
              </div>
            </div>
            
            {/* Hero Visual - lado direito */}
            <div className="animate-fadeInRight w-full mb-20 xl:mb-0">
              <div className={`backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-2xl relative overflow-hidden ${
                isDarkMode 
                  ? 'bg-white/5 ring-1 ring-white/10' 
                  : 'bg-white/80 ring-1 ring-blue-200/50'
              }`}>
                
                {/* Tabs */}
                <div className="flex gap-2 justify-center flex-wrap pt-6 h-24 md:h-16 xl:h-16 mb-4">
                  {[
                    { key: "residential", label: `🏡 ${t('hero.residential')}` },
                    { key: "commercial", label: `🏢 ${t('hero.commercial')}` },
                    { key: "office", label: `💼 ${t('hero.office')}` },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActivePanel(tab.key as typeof activePanel)}
                      className={`px-2 py-2 lg:px-6 lg:py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 ring-1 w-[15vh] md:w-[18vh] ${
                        activePanel === tab.key
                          ? isDarkMode
                            ? "bg-blue-500/30 ring-blue-500/50 text-white"
                            : "bg-blue-600 ring-blue-700 text-white shadow-lg"
                          : isDarkMode
                            ? "bg-blue-500/10 ring-blue-500/20 text-blue-400 hover:bg-blue-500/20"
                            : "bg-blue-100 ring-blue-300 text-blue-900 hover:bg-blue-200"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Container com altura fixa responsiva */}
                <div className="relative min-w-full h-[450px] md:h-[550px]">
                  
                  {/* Residential Panel */}
                  <div className={`absolute inset-0 transition-opacity duration-500 overflow-y-auto ${
                    activePanel === "residential" ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <div className="p-3 sm:p-4 space-y-4 sm:space-y-6">
                      <div className={`flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 pb-2 sm:pb-3 ${
                        isDarkMode ? 'border-b border-blue-500/20' : 'border-b border-blue-300/30'
                      }`}>
                        <div className={`font-semibold text-sm sm:text-base lg:text-lg ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-800'
                        }`}>
                          {t('services.residential.title')}
                        </div>
                        <div className={`flex items-center gap-2 text-xs sm:text-sm ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-700'
                        }`}>
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse ${
                            isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                          }`}></div>
                          <span>{t('hero.fullService')}</span>
                        </div>
                      </div>

                      <div className="space-y-2 sm:space-y-3">
                        <h3 className={`font-semibold text-xs sm:text-sm mb-2 sm:mb-3 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-800'
                        }`}>{t('hero.included')}</h3>
                        {residentialItems.map((item, index) => (
                          <div key={index} className={`flex items-start gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg transition-colors ${
                            isDarkMode ? 'hover:bg-blue-500/5' : 'hover:bg-blue-50'
                          }`}>
                            <div className={`text-base sm:text-xl mt-0.5 ${
                              isDarkMode ? 'text-blue-400' : 'text-blue-600'
                            }`}>✓</div>
                            <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{t(item)}</div>
                          </div>
                        ))}
                      </div>

                      <div className={`rounded-lg ring-1 p-2.5 sm:p-3 ${
                        isDarkMode 
                          ? 'bg-blue-500/10 border-blue-500/20' 
                          : 'bg-blue-100/70 ring-blue-300/40'
                      }`}>
                        <div className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                          <div className="text-xs sm:text-sm mb-1 sm:mb-2">💡 {t('hero.specialServices')}</div>
                          <div className={`font-semibold text-sm sm:text-base ${
                            isDarkMode ? 'text-blue-400' : 'text-blue-700'
                          }`}>{t('hero.moveInOut')}</div>
                          <div className={`text-xs sm:text-sm mt-0.5 sm:mt-1 ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>{t('hero.deepCleaning')}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Commercial Panel */}
                  <div className={`absolute inset-0 transition-opacity duration-500 overflow-y-auto ${
                    activePanel === "commercial" ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <div className="p-3 sm:p-4 space-y-4 sm:space-y-6">
                      <div className={`flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 pb-2 sm:pb-3 ${
                        isDarkMode ? 'border-b border-blue-500/20' : 'border-b border-blue-300/30'
                      }`}>
                        <div className={`font-semibold text-sm sm:text-base lg:text-lg ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-800'
                        }`}>
                          {t('services.commercial.title')}
                        </div>
                        <div className={`flex items-center gap-2 text-xs sm:text-sm ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-700'
                        }`}>
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                            isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                          }`}></div>
                          <span>{t('hero.professional')}</span>
                        </div>
                      </div>

                      <div className="space-y-2 sm:space-y-3">
                        <h3 className={`font-semibold text-xs sm:text-sm mb-2 sm:mb-3 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-800'
                        }`}>{t('hero.included')}</h3>
                        {commercialItems.map((item, index) => (
                          <div key={index} className={`flex items-start gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg transition-colors ${
                            isDarkMode ? 'hover:bg-blue-500/5' : 'hover:bg-blue-50'
                          }`}>
                            <div className={`text-base sm:text-xl mt-0.5 ${
                              isDarkMode ? 'text-blue-400' : 'text-blue-600'
                            }`}>✓</div>
                            <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{t(item)}</div>
                          </div>
                        ))}
                      </div>

                      <div className={`rounded-lg p-2.5 sm:p-3 ring-1 ${
                        isDarkMode 
                          ? 'bg-blue-500/10 border-blue-500/20' 
                          : 'bg-blue-100/70 ring-blue-300/40'
                      }`}>
                        <div className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                          <div className="text-xs sm:text-sm mb-1 sm:mb-2">🗑️ Included</div>
                          <div className={`font-semibold text-sm sm:text-base ${
                            isDarkMode ? 'text-blue-400' : 'text-blue-700'
                          }`}>{t('hero.trashRemoval')}</div>
                          <div className={`text-xs sm:text-sm mt-0.5 sm:mt-1 ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>{t('hero.responsibleDisposal')}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Office Panel */}
                  <div className={`absolute inset-0 transition-opacity duration-500 overflow-y-auto ${
                    activePanel === "office" ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <div className="p-3 sm:p-4 space-y-4 sm:space-y-6">
                      <div className={`flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 pb-2 sm:pb-3 ${
                        isDarkMode ? 'border-b border-blue-500/20' : 'border-b border-blue-300/30'
                      }`}>
                        <div className={`font-semibold text-sm sm:text-base lg:text-lg ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-800'
                        }`}>
                          {t('services.office.title')}
                        </div>
                        <div className={`flex items-center gap-2 text-xs sm:text-sm ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-700'
                        }`}>
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                            isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                          }`}></div>
                          <span>{t('hero.corporate')}</span>
                        </div>
                      </div>

                      <div className="space-y-2 sm:space-y-3">
                        <h3 className={`font-semibold text-xs sm:text-sm mb-2 sm:mb-3 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-800'
                        }`}>{t('hero.included')}</h3>
                        {officeItems.map((item, index) => (
                          <div key={index} className={`flex items-start gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg transition-colors ${
                            isDarkMode ? 'hover:bg-blue-500/5' : 'hover:bg-blue-50'
                          }`}>
                            <div className={`text-base sm:text-xl mt-0.5 ${
                              isDarkMode ? 'text-blue-400' : 'text-blue-600'
                            }`}>✓</div>
                            <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{t(item)}</div>
                          </div>
                        ))}
                      </div>

                      <div className={`rounded-lg p-2.5 sm:p-3 ring-1 ${
                        isDarkMode 
                          ? 'bg-blue-500/10 border-blue-500/20' 
                          : 'bg-blue-100/70 ring-blue-300/40'
                      }`}>
                        <div className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                          <div className="text-xs sm:text-sm mb-1 sm:mb-2">⏰ Flexibility</div>
                          <div className={`font-semibold text-sm sm:text-base ${
                            isDarkMode ? 'text-blue-400' : 'text-blue-700'
                          }`}>{t('hero.customSchedule')}</div>
                          <div className={`text-xs sm:text-sm mt-0.5 sm:mt-1 ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>{t('hero.afterHours')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease 0.8s both;
        }
      `}</style>
    </div>
  );
};

export default Hero;