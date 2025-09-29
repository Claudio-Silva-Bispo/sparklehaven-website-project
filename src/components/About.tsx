import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPhoto(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="about" 
      className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/15 ring-1 ring-blue-500/30 rounded-full px-4 py-2 text-sm text-blue-400 font-medium mb-5">
            <span>👨‍👩‍👧‍👦</span>
            <span>Nossa Família</span>
          </div>
          
          <h2 className="text-4xl xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent text-start lg:text-center">
            Cuidamos da sua casa como se fosse a Nossa
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-start lg:text-center">
            Uma empresa familiar que entende o valor de um lar limpo e acolhedor
          </p>
        </div>

        {/* Personal Intro */}
        <div className={`bg-white/5 backdrop-blur-sm ring-1 ring-white/10 rounded-2xl p-8 lg:p-12 mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            
            {/* Avatar/Profile */}
            <div className="text-center lg:text-left">
              <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto lg:mx-0 mb-6 rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600">
                {showPhoto ? (
                  <img
                    src="/assets/family/couple-photo.jpg" 
                    alt="Nossa Família"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl lg:text-6xl">
                    👨‍👩‍👧‍👦
                  </div>
                )}
              </div>

              <div className="text-blue-400 font-medium mb-4">
                Sparkle Haven Cleaning Service
              </div>
              <div className="text-gray-400 text-sm">Seattle, WA • Desde 2015</div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Somos um casal que começou este negócio com um sonho simples: oferecer o mesmo cuidado e atenção às casas dos nossos clientes que damos à nossa própria família. Entendemos que sua casa é mais do que apenas um lugar - é onde sua família cria memórias, cresce e vive.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Há mais de 8 anos na região de Seattle, construímos relacionamentos duradouros com nossos clientes, tratando cada casa como se fosse nossa. Sabemos o quanto é importante ter confiança nas pessoas que entram no seu lar, e levamos essa responsabilidade muito a sério.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Nossa abordagem é pessoal e atenciosa. Não somos apenas uma empresa de limpeza - somos uma família cuidando da sua família. Cada detalhe importa para nós, porque entendemos que um lar limpo e organizado traz paz de espírito e mais tempo para você aproveitar com quem você ama.
              </p>

              {/* Valores */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                <div className="bg-blue-500/10 ring-1 ring-blue-500/20 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">❤️</div>
                  <div className="text-blue-400 font-semibold mb-1">Cuidado</div>
                  <div className="text-gray-400 text-sm">Como família</div>
                </div>
                <div className="bg-blue-500/10 ring-1 ring-blue-500/20 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🤝</div>
                  <div className="text-blue-400 font-semibold mb-1">Confiança</div>
                  <div className="text-gray-400 text-sm">Total segurança</div>
                </div>
                <div className="bg-blue-500/10 ring-1 ring-blue-500/20 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">⭐</div>
                  <div className="text-blue-400 font-semibold mb-1">Dedicação</div>
                  <div className="text-gray-400 text-sm">Cada detalhe</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center pt-6">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-4 py-4 lg:px-8 lg:py-4 rounded-lg font-semibold md:text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 flex items-center w-full justify-center"
                >
                  <a 
                    href="tel:+14255886654" 
                  >
                    📞 Free Estimate
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white/5 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-4">🏡</div>
            <h3 className="text-xl font-bold text-white mb-3">Negócio Familiar</h3>
            <p className="text-gray-400">Operado por um casal dedicado que trata cada cliente como parte da nossa família estendida.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-bold text-white mb-3">Confiável</h3>
            <p className="text-gray-400">Background verificado, seguros completos e anos de referências comprovadas na comunidade.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-4">💚</div>
            <h3 className="text-xl font-bold text-white mb-3">Produtos Ecológicos</h3>
            <p className="text-gray-400">Usamos produtos seguros para sua família, seus pets e o meio ambiente.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold text-white mb-3">Flexibilidade</h3>
            <p className="text-gray-400">Horários que se adaptam à rotina da sua família, incluindo fins de semana.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-white mb-3">Atenção aos Detalhes</h3>
            <p className="text-gray-400">Cuidamos de cada canto da sua casa com o mesmo carinho que cuidamos da nossa.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-4">😊</div>
            <h3 className="text-xl font-bold text-white mb-3">Garantia de Satisfação</h3>
            <p className="text-gray-400">Se não ficar 100% satisfeito, voltamos para acertar sem custo adicional.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;