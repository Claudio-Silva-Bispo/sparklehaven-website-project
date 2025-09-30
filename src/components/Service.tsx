import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const CompleteServicesPage = () => {
  const { isDarkMode } = useTheme();
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{[key: number]: number}>({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0
  });

  const mainServices = [
    {
      icon: "🏡",
      title: "Limpeza Residencial",
      subtitle: "Seu Lar Sempre Impecável",
      description: "Cuidamos da sua casa com carinho e atenção aos detalhes. Serviços semanais, quinzenais ou mensais adaptados às suas necessidades.",
      features: [
        "Limpeza completa de todos os cômodos",
        "Aspiração e lavagem de pisos",
        "Limpeza profunda de cozinha",
        "Sanitização completa de banheiros",
        "Organização de ambientes",
        "Produtos de limpeza inclusos"
      ],
      color: "from-blue-500 to-cyan-500",
      borderColor: "ring-blue-400/40",
      images: [
        "../../assets/services/residential-one.jpeg",
        "/assets/services/residential-two.PNG",
        "/assets/services/residential-three.jpeg"
      ]
    },
    {
      icon: "🏢",
      title: "Limpeza Comercial",
      subtitle: "Ambiente Profissional Impecável",
      description: "Mantemos seu estabelecimento comercial sempre limpo e acolhedor para seus clientes. Trabalhamos em horários flexíveis.",
      features: [
        "Lojas e estabelecimentos",
        "Restaurantes e cafeterias",
        "Academias e centros fitness",
        "Limpeza após horário comercial",
        "Manutenção de áreas externas",
        "Produtos profissionais"
      ],
      color: "from-green-500 to-teal-500",
      borderColor: "ring-green-400/40",
      images: [
        "/images/commercial-1.jpg",
        "/images/commercial-2.jpg",
        "/images/commercial-3.jpg"
      ]
    },
    {
      icon: "💼",
      title: "Limpeza de Escritórios",
      subtitle: "Produtividade em Ambiente Limpo",
      description: "Escritórios limpos e organizados aumentam a produtividade. Oferecemos serviços diários, semanais ou sob demanda.",
      features: [
        "Limpeza de mesas e estações",
        "Sanitização de banheiros",
        "Áreas comuns e recepção",
        "Salas de reunião",
        "Copas e cozinhas corporativas",
        "Coleta seletiva de lixo"
      ],
      color: "from-purple-500 to-pink-500",
      borderColor: "ring-purple-400/40",
      images: [
        "/images/office-1.jpg",
        "/images/office-2.jpg",
        "/images/office-3.jpg"
      ]
    },
    {
      icon: "📦",
      title: "Move In & Move Out",
      subtitle: "Mudanças Sem Estresse",
      description: "Limpeza profunda completa para quando você está entrando ou saindo de uma propriedade. Deixamos tudo brilhando!",
      features: [
        "Limpeza profunda completa",
        "Todos os armários por dentro",
        "Eletrodomésticos detalhados",
        "Janelas e molduras",
        "Paredes e rodapés",
        "Garantia de satisfação"
      ],
      color: "from-orange-500 to-red-500",
      borderColor: "ring-orange-400/40",
      images: [
        "../../assets/services/move-in-one.PNG",
        "../../assets/services/move-in-two.jpeg",
        "../../assets/services/move-in-three.jpeg",
        "../../assets/services/move-in-four.jpeg"
      ]
    },
    {
      icon: "🗑️",
      title: "Remoção de Lixo",
      subtitle: "Descarte Responsável",
      description: "Serviço completo de coleta e descarte de lixo residencial e comercial. Reciclagem e descarte ecológico.",
      features: [
        "Coleta regular programada",
        "Remoção de lixo volumoso",
        "Reciclagem adequada",
        "Descarte ecológico",
        "Limpeza de lixeiras",
        "Serviço pontual e confiável"
      ],
      color: "from-yellow-500 to-orange-500",
      borderColor: "ring-yellow-400/40",
      images: [
        "/images/trash-1.jpg",
        "/images/trash-2.jpg",
        "/images/trash-3.jpg"
      ]
    }
  ];

  useEffect(() => {
    const intervals = mainServices.map((_, serviceIndex) => {
      return setInterval(() => {
        setCurrentImageIndexes(prev => ({
          ...prev,
          [serviceIndex]: (prev[serviceIndex] + 1) % 3
        }));
      }, 5000);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const workflow = [
    { step: "1", title: "Contato", desc: "Entre em contato conosco" },
    { step: "2", title: "Orçamento", desc: "Avaliação gratuita" },
    { step: "3", title: "Agendamento", desc: "Escolha data e hora" },
    { step: "4", title: "Limpeza", desc: "Trabalho impecável" },
    { step: "5", title: "Satisfação", desc: "Garantia total" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-50'
      }`} 
      id='services'
    >
      {/* Main Services */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6 ${
              isDarkMode 
                ? 'bg-blue-500/15 ring-1 ring-blue-500/30 text-blue-400' 
                : 'bg-blue-600/10 ring-1 ring-blue-600/30 text-blue-900'
            }`}>
              <span>✨</span>
              <span>Nossos Serviços</span>
            </div>
            <h2 className={`text-4xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent text-start lg:text-center pb-5 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-white via-blue-400 to-purple-400' 
                : 'bg-gradient-to-r from-gray-800 via-blue-900 to-purple-900'
            }`}>
              Cuidamos do que é mais importante: sua Família e seu Negócio
            </h2>
            <p className={`text-xl max-w-3xl mx-auto text-start lg:text-center ${
              isDarkMode ? 'text-gray-400' : 'text-gray-700'
            }`}>
              Do residencial ao comercial, cuidamos de cada detalhe com profissionalismo e dedicação
            </p>
          </div>

          <div className="space-y-16 max-w-7xl mx-auto">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm ring-1 ${service.borderColor} rounded-3xl p-8 lg:p-12 hover:from-gray-700 hover:to-gray-800 transition-all duration-500 group shadow-xl`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  
                  {/* Left Side - Icon & Title */}
                  <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-6xl">{service.icon}</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-xl text-blue-400 mb-4">{service.subtitle}</p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{service.description}</p>
                    
                    {/* Features List */}
                    <div className="bg-gray-900/50 ring-1 ring-white/10 rounded-2xl p-6">
                      <h4 className="text-lg font-semibold mb-4 text-gray-200">O que está incluso:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-green-400 text-xl mt-0.5">✓</span>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 min-w-full justify-center"
                    >
                      📞 Solicitar Orçamento
                    </button>
                  </div>

                  {/* Right Side - Image Carousel */}
                  <div className={index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                    <div className="relative bg-gray-900/50 ring-1 ring-white/10 rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[600px]">
                      {service.images.map((img, imgIdx) => (
                        <div
                          key={imgIdx}
                          className={`absolute inset-0 transition-opacity duration-1000 ${
                            currentImageIndexes[index] === imgIdx ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${service.title} - Foto ${imgIdx + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                              if (placeholder) placeholder.style.display = 'flex';
                            }}
                          />
                          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 hidden items-center justify-center">
                            <div className="text-center">
                              <span className="text-6xl mb-4 block">{service.icon}</span>
                              <p className="text-gray-400 text-sm">Imagem {imgIdx + 1} de 3</p>
                              <p className="text-gray-500 text-xs mt-2">{service.title}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                        {[0, 1, 2].map((dotIndex) => (
                          <button
                            key={dotIndex}
                            onClick={() => setCurrentImageIndexes(prev => ({
                              ...prev,
                              [index]: dotIndex
                            }))}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              currentImageIndexes[index] === dotIndex 
                                ? 'bg-blue-400 w-8' 
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Ver imagem ${dotIndex + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className={`py-20 backdrop-blur-sm ${
        isDarkMode ? 'bg-white/5' : 'bg-white/30'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6 ${
              isDarkMode 
                ? 'bg-blue-500/15 ring-1 ring-blue-500/30 text-blue-400' 
                : 'bg-blue-600/10 ring-1 ring-blue-600/30 text-blue-900'
            }`}>
              <span>🔄</span>
              <span>Como Funciona</span>
            </div>
            <h2 className={`text-4xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent ${
              isDarkMode 
                ? 'bg-gradient-to-r from-white via-blue-400 to-purple-400' 
                : 'bg-gradient-to-r from-gray-800 via-blue-900 to-purple-900'
            }`}>
              Processo Simples e Rápido
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Em apenas 5 passos seu espaço estará impecável
            </p>
          </div>

          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
              {workflow.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 ring-1 ring-blue-400/30 rounded-2xl p-6 text-center hover:scale-105 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                  {index < workflow.length - 1 && (
                    <div className={`hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-2xl ${
                      isDarkMode ? 'text-blue-500' : 'text-blue-600'
                    }`}>
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 ring-1 ring-blue-400/30 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              Pronto para ter um espaço impecável?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato hoje e receba um orçamento gratuito personalizado para suas necessidades
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25"
            >
              📞 Free Estimate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompleteServicesPage;