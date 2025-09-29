import React, { useState, useEffect } from 'react';

const CompleteServicesPage = () => {
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
      borderColor: "ring-blue-500/30",
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
      borderColor: "ring-green-500/30",
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
      borderColor: "ring-purple-500/30",
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
      borderColor: "ring-orange-500/30",
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
      borderColor: "ring-yellow-500/30",
      images: [
        "/images/trash-1.jpg",
        "/images/trash-2.jpg",
        "/images/trash-3.jpg"
      ]
    }
  ];

  // Carousel automático para cada serviço
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
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen" id='services'>

      {/* Main Services */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-500/15 ring-1 ring-blue-500/30 rounded-full px-4 py-2 text-sm text-blue-400 font-medium mb-6">
              <span>✨</span>
              <span>Nossos Serviços</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Soluções completas de Limpeza
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Do residencial ao comercial, cuidamos de cada detalhe com profissionalismo e dedicação
            </p>
          </div>

          <div className="space-y-16 max-w-7xl mx-auto">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-sm ring-1 ${service.borderColor} rounded-3xl p-8 lg:p-12 hover:bg-white/10 transition-all duration-500 group`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  
                  {/* Left Side - Icon & Title */}
                  <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-6xl">{service.icon}</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-3">{service.title}</h3>
                    <p className="text-xl text-blue-400 mb-4">{service.subtitle}</p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{service.description}</p>
                    
                    {/* Features List */}
                    <div className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6">
                      <h4 className="text-lg font-semibold mb-4 text-gray-300">O que está incluso:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-green-400 text-xl mt-0.5">✓</span>
                            <span className="text-gray-200">{feature}</span>
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
                    <div className="relative bg-white/5 ring-1 ring-white/10 rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[600px]">
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
                              // Se a imagem não carregar, mostra o placeholder
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

                      {/* Indicadores de navegação */}
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
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/15 ring-1 ring-blue-500/30 rounded-full px-4 py-2 text-sm text-blue-400 font-medium mb-6">
              <span>🔄</span>
              <span>Como Funciona</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Processo Simples e Rápido
            </h2>
            <p className="text-xl text-gray-400">Em apenas 5 passos seu espaço estará impecável</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {workflow.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 ring-1 ring-blue-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                  {index < workflow.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-blue-500">
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
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 ring-1 ring-blue-500/30 rounded-3xl p-12 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
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