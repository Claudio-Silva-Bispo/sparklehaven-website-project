import React, { useState, useEffect } from 'react';
import { Star, Send, CheckCircle, Quote, ChevronLeft, ChevronRight } from 'lucide-react'; /* Instalar npm install lucide-react */
import { useTheme } from '../contexts/ThemeContext';

const FeedbackTestimonials = () => {
  const { isDarkMode } = useTheme();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Proprietária",
      company: "Residência Particular",
      text: "Excelente serviço! Minha casa nunca esteve tão limpa. A equipe é pontual, educada e muito cuidadosa com todos os detalhes.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Gerente",
      company: "Restaurante Bella Vista",
      text: "Profissionais incríveis! Mantêm nosso restaurante impecável todos os dias. Confiamos totalmente no trabalho deles.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Diretora",
      company: "Tech Solutions Inc",
      text: "Nosso escritório sempre está perfeito graças a eles. Trabalham de forma discreta e eficiente, sem atrapalhar nossa rotina.",
      rating: 5
    },
    {
      name: "Carlos Oliveira",
      role: "Proprietário",
      company: "Academia Fitness Pro",
      text: "A limpeza da academia melhorou muito com este serviço. Nossos clientes sempre comentam sobre como tudo está limpo.",
      rating: 5
    },
    {
      name: "Patricia Lima",
      role: "Gerente de Facilities",
      company: "Corporate Tower",
      text: "Parceria excelente! Atendem todas as nossas demandas com profissionalismo e qualidade superior.",
      rating: 5
    },
    {
      name: "Roberto Fernandes",
      role: "Proprietário",
      company: "Casa de Repouso Vida Plena",
      text: "Cuidado e atenção excepcionais. Tratam nosso espaço com o respeito que nossos residentes merecem.",
      rating: 5
    }
  ];

  const handleSubmit = async () => {
    if (rating === 0 || !formData.name || !formData.role || !formData.company || !formData.message) return;
    
    try {
      const res = await fetch('/api/sendFeedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          rating,
          type: 'feedback' 
        })
      });

      if (res.ok) {
        setSubmitted(true);
        
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', role: '', company: '', message: '' });
          setRating(0);
        }, 3000);
      } else {
        alert('Erro ao enviar o feedback. Tente novamente.');
      }
    } catch (err) {
      console.error(err);
      alert('Erro ao enviar o feedback. Tente novamente.');
    }
  };

  interface FormData {
    name: string;
    role: string;
    company: string;
    message: string;
  }

  const handleChange = (field: keyof FormData, value: string): void => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className={`py-20 lg:py-32 transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50'
      }`} 
      id="feedback"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6 ${
            isDarkMode 
              ? 'bg-blue-500/15 ring-1 ring-blue-500/30 text-blue-400' 
              : 'bg-blue-600/10 ring-1 ring-blue-600/30 text-blue-900'
          }`}>
            <span>⭐</span>
            <span>Feedback & Depoimentos</span>
          </div>
          <h2 className={`text-4xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent ${
            isDarkMode 
              ? 'bg-gradient-to-r from-white via-blue-400 to-purple-400' 
              : 'bg-gradient-to-r from-gray-800 via-blue-900 to-purple-900'
          }`}>
            Compartilhe sua Experiência
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-700'
          }`}>
            Seu feedback é importante para nós! Veja o que nossos clientes dizem
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Left Column - Feedback Form */}
          <div>
            {!submitted ? (
              <div className={`backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl ${
                isDarkMode 
                  ? 'bg-white/5 ring-1 ring-white/10' 
                  : 'bg-white/80 ring-1 ring-blue-200/50'
              }`}>
                
                {/* Rating Stars */}
                <div className="mb-6">
                  <label className={`block font-semibold mb-3 text-lg ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    Avalie nosso serviço *
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= (hoveredRating || rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : isDarkMode ? 'text-gray-500' : 'text-gray-400'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div className="mb-5">
                  <label className={`block font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      isDarkMode 
                        ? 'bg-white/10 ring-1 ring-white/20 text-white placeholder-gray-400' 
                        : 'bg-white ring-1 ring-blue-200/50 text-gray-800 placeholder-gray-500'
                    }`}
                    placeholder="Seu nome"
                  />
                </div>

                {/* Role & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className={`block font-semibold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      Cargo *
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => handleChange('role', e.target.value)}
                      className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        isDarkMode 
                          ? 'bg-white/10 ring-1 ring-white/20 text-white placeholder-gray-400' 
                          : 'bg-white ring-1 ring-blue-200/50 text-gray-800 placeholder-gray-500'
                      }`}
                      placeholder="Ex: Gerente"
                    />
                  </div>
                  <div>
                    <label className={`block font-semibold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      Empresa *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        isDarkMode 
                          ? 'bg-white/10 ring-1 ring-white/20 text-white placeholder-gray-400' 
                          : 'bg-white ring-1 ring-blue-200/50 text-gray-800 placeholder-gray-500'
                      }`}
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className={`block font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    Seu Depoimento *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={5}
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${
                      isDarkMode 
                        ? 'bg-white/10 ring-1 ring-white/20 text-white placeholder-gray-400' 
                        : 'bg-white ring-1 ring-blue-200/50 text-gray-800 placeholder-gray-500'
                    }`}
                    placeholder="Conte sua experiência..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={rating === 0 || !formData.name || !formData.role || !formData.company || !formData.message}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Feedback
                </button>
              </div>
            ) : (
              // Success Message
              <div className={`backdrop-blur-sm rounded-3xl p-12 text-center shadow-xl ${
                isDarkMode 
                  ? 'bg-white/5 ring-1 ring-white/10' 
                  : 'bg-white/80 ring-1 ring-blue-200/50'
              }`}>
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className={`text-3xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  Obrigado pelo seu feedback!
                </h3>
                <p className={`text-lg ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Sua opinião é muito importante para nós.
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Testimonials Carousel */}
          <div className="relative">
            <div className={`backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl min-h-[600px] flex flex-col ${
              isDarkMode 
                ? 'bg-white/5 ring-1 ring-white/10' 
                : 'bg-white/80 ring-1 ring-blue-200/50'
            }`}>
              
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Current Testimonial */}
              <div className="flex-1 flex flex-col justify-center">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, idx) => (
                    <Star key={idx} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className={`text-lg lg:text-xl mb-8 leading-relaxed italic ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author Info */}
                <div className={`pt-6 border-t ${
                  isDarkMode ? 'border-white/10' : 'border-blue-200/30'
                }`}>
                  <h4 className={`font-bold text-lg ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>{testimonials[currentIndex].name}</h4>
                  <p className={`font-medium ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-700'
                  }`}>{testimonials[currentIndex].role}</p>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{testimonials[currentIndex].company}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevSlide}
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDarkMode 
                      ? 'bg-white/10 hover:bg-white/20 ring-1 ring-white/20' 
                      : 'bg-blue-100 hover:bg-blue-200 ring-1 ring-blue-300/40'
                  }`}
                >
                  <ChevronLeft className={`w-6 h-6 ${
                    isDarkMode ? 'text-white' : 'text-blue-900'
                  }`} />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'w-8 bg-blue-500' 
                          : isDarkMode 
                            ? 'w-2 bg-white/30' 
                            : 'w-2 bg-blue-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDarkMode 
                      ? 'bg-white/10 hover:bg-white/20 ring-1 ring-white/20' 
                      : 'bg-blue-100 hover:bg-blue-200 ring-1 ring-blue-300/40'
                  }`}
                >
                  <ChevronRight className={`w-6 h-6 ${
                    isDarkMode ? 'text-white' : 'text-blue-900'
                  }`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackTestimonials;