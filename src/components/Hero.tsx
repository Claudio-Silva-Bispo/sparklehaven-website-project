import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
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

  const handlePanelChange = (panelType: typeof activePanel, index: number) => {
    setActivePanel(panelType);
    setCurrentPanelIndex(index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/5 left-1/5 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-1/5 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-5 relative z-10 pt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Hero Text */}
            <div className="animate-fadeInUp pt-3 xl:pt-0">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 ring-1 ring-blue-500/30 rounded-full text-sm text-blue-400 font-medium mb-6 min-w-full md:min-w-sm">
                <span className='p-3'>🏠</span> <p className='p-3'>Empresa Familiar • Seattle, WA</p>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold leading-tight bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                Limpeza Profissional para seu LAR e seu NEGÓCIO
              </h1>
              
              <p className="md:text-xl text-gray-400 mb-3 leading-relaxed pt-3">
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
                      className="flex items-center gap-2 p-1 ld:p-3 bg-blue-500/5 ring-1 ring-blue-500/20 rounded-lg transition-all duration-300 hover:bg-blue-500/10 hover:translate-x-2"
                    >
                      <div className="text-2xl w-10 text-center p-2 lg:p-3">{service.icon}</div>
                      <div className="text-gray-300 font-medium text-sm lg:text-md">{service.text}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button 
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
                >
                  <a 
                    href="tel:+14255886654" 
                  >
                    📞 Free Estimate
                  </a>
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 font-semibold flex items-center gap-2 hover:text-blue-500 transition-colors duration-300"
                >
                  Conheça os Serviços →
                </button>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="animate-fadeInRight w-full mb-20">
              <div className="bg-white/5 backdrop-blur-sm ring-1 ring-white/10 rounded-2xl p-4 lg:p-8 shadow-2xl relative overflow-hidden">
                
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
                          ? "bg-blue-500/30 ring-blue-500/50 text-white"
                          : "bg-blue-500/10 ring-blue-500/20 text-blue-400 hover:bg-blue-500/20"
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
                      {/* Header */}
                                              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 ring-b ring-blue-500/20 pb-3">
                        <div className="text-gray-300 font-semibold text-base lg:text-lg">
                          Limpeza Residencial
                        </div>
                        <div className="flex items-center gap-2 text-blue-400 text-sm">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span>Serviço Completo</span>
                        </div>
                      </div>

                      {/* Checklist */}
                      <div className="space-y-3">
                        <h3 className="text-gray-300 font-semibold mb-3">O que está incluído:</h3>
                        {[
                          'Limpeza completa de todos os cômodos',
                          'Limpeza de cozinha e banheiros',
                          'Organização de ambientes',
                          'Move In/Move Out disponível',
                          'Produtos de limpeza inclusos'
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3 p-2 hover:bg-blue-500/5 rounded-lg transition-colors">
                            <div className="text-blue-400 text-xl mt-0.5">✓</div>
                            <div className="text-gray-400">{item}</div>
                          </div>
                        ))}
                      </div>

                      {/* Info adicional */}
                      <div className="bg-blue-500/10 rounded-lg ring-1 p-3 border-blue-500/20">
                        <div className="text-center text-gray-300">
                          <div className="text-sm mb-2">💡 Serviços Especiais</div>
                          <div className="text-blue-400 font-semibold">Move In & Move Out</div>
                          <div className="text-gray-400 text-sm mt-1">Limpeza profunda para mudanças</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Commercial Panel */}
                  <div className={`absolute inset-0 transition-opacity duration-500 overflow-y-auto ${
                    activePanel === "commercial" ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <div className="p-4 space-y-6">
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 border-b border-blue-500/20 pb-3">
                        <div className="text-gray-300 font-semibold text-base lg:text-lg">
                          Limpeza Comercial
                        </div>
                        <div className="flex items-center gap-2 text-blue-400 text-sm">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>Profissional</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-gray-300 font-semibold mb-3">Serviços inclusos:</h3>
                        {[
                          'Lojas e estabelecimentos comerciais',
                          'Restaurantes e cafeterias',
                          'Academias e centros fitness',
                          'Limpeza após horário comercial',
                          'Manutenção de áreas externas'
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3 p-2 hover:bg-blue-500/5 rounded-lg transition-colors">
                            <div className="text-blue-400 text-xl mt-0.5">✓</div>
                            <div className="text-gray-400">{item}</div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-blue-500/10 rounded-lg p-3 ring-1 border-blue-500/20">
                        <div className="text-center text-gray-300">
                          <div className="text-sm mb-2">🗑️ Incluso</div>
                          <div className="text-blue-400 font-semibold">Remoção de Lixo</div>
                          <div className="text-gray-400 text-sm mt-1">Descarte responsável e reciclagem</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Office Panel */}
                  <div className={`absolute inset-0 transition-opacity duration-500 overflow-y-auto ${
                    activePanel === "office" ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <div className="p-4 space-y-6">
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 border-b border-blue-500/20 pb-3">
                        <div className="text-gray-300 font-semibold text-base lg:text-lg">
                          Limpeza de Escritórios
                        </div>
                        <div className="flex items-center gap-2 text-blue-400 text-sm">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>Corporativo</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-gray-300 font-semibold mb-3">Ambiente corporativo:</h3>
                        {[
                          'Limpeza de mesas e estações',
                          'Sanitização de banheiros',
                          'Áreas comuns e recepção',
                          'Salas de reunião e conferência',
                          'Copas e cozinhas corporativas'
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3 p-2 hover:bg-blue-500/5 rounded-lg transition-colors">
                            <div className="text-blue-400 text-xl mt-0.5">✓</div>
                            <div className="text-gray-400">{item}</div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-blue-500/10 rounded-lg p-3 ring-1 border-blue-500/20">
                        <div className="text-center text-gray-300">
                          <div className="text-sm mb-2">⏰ Flexibilidade</div>
                          <div className="text-blue-400 font-semibold">Horários Personalizados</div>
                          <div className="text-gray-400 text-sm mt-1">Atendemos fora do expediente</div>
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