import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();
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

  return (
    <div className="relative">
      {/* Hero Section */}
      <section 
        id="home" 
        className={`min-h-screen flex items-center relative overflow-hidden transition-colors duration-500 ${
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

        <div className="container mx-auto px-5 relative z-10 pt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Hero Text */}
            <div className="animate-fadeInUp pt-3 xl:pt-0">
              <div className={`inline-flex items-center gap-2 rounded-full text-sm font-medium mb-6 min-w-full md:min-w-sm ${
                isDarkMode 
                  ? 'bg-blue-500/10 ring-1 ring-blue-500/30 text-blue-400' 
                  : 'bg-blue-600/10 ring-1 ring-blue-600/30 text-blue-900'
              }`}>
                <span className='p-3'>🏠</span> <p className='p-3'>Empresa Familiar • Seattle, WA</p>
              </div>
              
              <h1 className={`text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold leading-tight bg-clip-text text-transparent ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-white to-blue-400' 
                  : 'bg-gradient-to-r from-gray-800 via-blue-900 to-blue-800'
              }`}>
                Limpeza Profissional para seu LAR e seu NEGÓCIO
              </h1>
              
              <p className={`md:text-xl mb-3 leading-relaxed pt-3 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-700'
              }`}>
                Transformamos seu espaço com serviços de limpeza de alta qualidade. Atendemos residências, escritórios e estabelecimentos comerciais na região de Seattle.
              </p>
              
              <div className="mb-10">
                <div className="flex flex-col gap-3">
                  {[
                    { icon: '🏡', text: 'Limpeza Residencial - Cuidado com sua Casa' },
                    { icon: '🏢', text: 'Limpeza Comercial - Ambientes Profissionais' },
                    { icon: '📦', text: 'Move In & Move Out - Mudanças Sem Estresse' }
                  ].map((service, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-2 p-1 lg:p-3 rounded-lg transition-all duration-300 hover:translate-x-2 ${
                        isDarkMode 
                          ? 'bg-blue-500/5 ring-1 ring-blue-500/20 hover:bg-blue-500/10' 
                          : 'bg-white/60 ring-1 ring-blue-300/40 hover:bg-white/80 hover:shadow-md'
                      }`}
                    >
                      <div className="text-2xl w-10 text-center p-2 lg:p-3">{service.icon}</div>
                      <div className={`font-medium text-sm lg:text-md ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-800'
                      }`}>{service.text}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button 
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
                >
                  <a href="tel:+14255886654">
                    📞 Free Estimate
                  </a>
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className={`font-semibold flex items-center gap-2 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-blue-500' 
                      : 'text-gray-700 hover:text-blue-700'
                  }`}
                >
                  Conheça os Serviços →
                </button>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="animate-fadeInRight w-full mb-20">
              <div className={`backdrop-blur-sm rounded-2xl p-4 lg:p-8 shadow-2xl relative overflow-hidden ${
                isDarkMode 
                  ? 'bg-white/5 ring-1 ring-white/10' 
                  : 'bg-white/80 ring-1 ring-blue-200/50'
              }`}>
                
                {/* Tabs */}
                <div className="flex gap-2 lg:gap-3 justify-center flex-wrap pt-6 h-24 md:h-16 xl:h-16 mb-4">
                  {[
                    { key: "residential", label: "🏡 Residencial" },
                    { key: "commercial", label: "🏢 Comercial" },
                    { key: "office", label: "💼 Escritórios" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActivePanel(tab.key as typeof activePanel)}
                      className={`px-2 py-2 lg:px-8 lg:py-2 rounded-full text-sm lg:text-md font-medium transition-all duration-300 ring-1 w-[15vh] md:w-[20vh] ${
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

                {/* Container com altura fixa */}
                <div className="relative min-w-full" style={{ height: '600px' }}>
                  
                  {/* Residential Panel */}
                  <div className={`absolute inset-0 transition-opacity duration-500 overflow-y-auto ${
                    activePanel === "residential" ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <div className="p-4 space-y-6">
                      <div className={`flex flex-col sm:flex-row justify-between items-center gap-3 pb-3 ${
                        isDarkMode ? 'border-b border-blue-500/20' : 'border-b border-blue-300/30'
                      }`}>
                        <div className={`font-semibold text-base lg:text-lg ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-800'
                        }`}>
                          Limpeza Residencial
                        </div>
                        <div className={`flex items-center gap-2 text-sm ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-700'
                        }`}>
                          <div className={`w-2 h-2 rounded-full animate-pulse ${
                            isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                          }`}></div>
                          <span>Serviço Completo</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className={`font-semibold mb-3 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-800'
                        }`}>O que está incluído:</h3>
                        {[
                          'Limpeza completa de todos os cômodos',
                          'Limpeza de cozinha e banheiros',
                          'Organização de ambientes',
                          'Move In/Move Out disponível',
                          'Produtos de limpeza inclusos'
                        ].map((item, index) => (
                          <div key={index} className={`flex items-start gap-3 p-2 rounded-lg transition-colors ${
                            isDarkMode ? 'hover:bg-blue-500/5' : 'hover:bg-blue-50'
                          }`}>
                            <div className={`text-xl mt-0.5 ${
                              isDarkMode ? 'text-blue-400' : 'text-blue-600'
                            }`}>✓</div>
                            <div className={isDarkMode ? 'text-gray-400' : 'text-gray-700'}>{item}</div>
                          </div>
                        ))}
                      </div>

                      <div className={`rounded-lg ring-1 p-3 ${
                        isDarkMode 
                          ? 'bg-blue-500/10 border-blue-500/20' 
                          : 'bg-blue-100/70 ring-blue-300/40'
                      }`}>
                        <div className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                          <div className="text-sm mb-2">💡 Serviços Especiais</div>
                          <div className={`font-semibold ${
                            isDarkMode ? 'text-blue-400' : 'text-blue-700'
                          }`}>Move In & Move Out</div>
                          <div className={`text-sm mt-1 ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>Limpeza profunda para mudanças</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Commercial Panel */}
                  <div className={`absolute inset-0 transition-opacity duration-500 overflow-y-auto ${
                    activePanel === "commercial" ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <div className="p-4 space-y-6">
                      <div className={`flex flex-col sm:flex-row justify-between items-center gap-3 pb-3 ${
                        isDarkMode ? 'border-b border-blue-500/20' : 'border-b border-blue-300/30'
                      }`}>
                        <div className={`font-semibold text-base lg:text-lg ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-800'
                        }`}>
                          Limpeza Comercial
                        </div>
                        <div className={`flex items-center gap-2 text-sm ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-700'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                          }`}></div>
                          <span>Profissional</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className={`font-semibold mb-3 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-800'
                        }`}>Serviços inclusos:</h3>
                        {[
                          'Lojas e estabelecimentos comerciais',
                          'Restaurantes e cafeterias',
                          'Academias e centros fitness',
                          'Limpeza após horário comercial',
                          'Manutenção de áreas externas'
                        ].map((item, index) => (
                          <div key={index} className={`flex items-start gap-3 p-2 rounded-lg transition-colors ${
                            isDarkMode ? 'hover:bg-blue-500/5' : 'hover:bg-blue-50'
                          }`}>
                            <div className={`text-xl mt-0.5 ${
                              isDarkMode ? 'text-blue-400' : 'text-blue-600'
                            }`}>✓</div>
                            <div className={isDarkMode ? 'text-gray-400' : 'text-gray-700'}>{item}</div>
                          </div>
                        ))}
                      </div>

                      <div className={`rounded-lg p-3 ring-1 ${
                        isDarkMode 
                          ? 'bg-blue-500/10 border-blue-500/20' 
                          : 'bg-blue-100/70 ring-blue-300/40'
                      }`}>
                        <div className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                          <div className="text-sm mb-2">🗑️ Incluso</div>
                          <div className={`font-semibold ${
                            isDarkMode ? 'text-blue-400' : 'text-blue-700'
                          }`}>Remoção de Lixo</div>
                          <div className={`text-sm mt-1 ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>Descarte responsável e reciclagem</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Office Panel */}
                  <div className={`absolute inset-0 transition-opacity duration-500 overflow-y-auto ${
                    activePanel === "office" ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <div className="p-4 space-y-6">
                      <div className={`flex flex-col sm:flex-row justify-between items-center gap-3 pb-3 ${
                        isDarkMode ? 'border-b border-blue-500/20' : 'border-b border-blue-300/30'
                      }`}>
                        <div className={`font-semibold text-base lg:text-lg ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-800'
                        }`}>
                          Limpeza de Escritórios
                        </div>
                        <div className={`flex items-center gap-2 text-sm ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-700'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                          }`}></div>
                          <span>Corporativo</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className={`font-semibold mb-3 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-800'
                        }`}>Ambiente corporativo:</h3>
                        {[
                          'Limpeza de mesas e estações',
                          'Sanitização de banheiros',
                          'Áreas comuns e recepção',
                          'Salas de reunião e conferência',
                          'Copas e cozinhas corporativas'
                        ].map((item, index) => (
                          <div key={index} className={`flex items-start gap-3 p-2 rounded-lg transition-colors ${
                            isDarkMode ? 'hover:bg-blue-500/5' : 'hover:bg-blue-50'
                          }`}>
                            <div className={`text-xl mt-0.5 ${
                              isDarkMode ? 'text-blue-400' : 'text-blue-600'
                            }`}>✓</div>
                            <div className={isDarkMode ? 'text-gray-400' : 'text-gray-700'}>{item}</div>
                          </div>
                        ))}
                      </div>

                      <div className={`rounded-lg p-3 ring-1 ${
                        isDarkMode 
                          ? 'bg-blue-500/10 border-blue-500/20' 
                          : 'bg-blue-100/70 ring-blue-300/40'
                      }`}>
                        <div className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                          <div className="text-sm mb-2">⏰ Flexibilidade</div>
                          <div className={`font-semibold ${
                            isDarkMode ? 'text-blue-400' : 'text-blue-700'
                          }`}>Horários Personalizados</div>
                          <div className={`text-sm mt-1 ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>Atendemos fora do expediente</div>
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
            transform: translateX(0);
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