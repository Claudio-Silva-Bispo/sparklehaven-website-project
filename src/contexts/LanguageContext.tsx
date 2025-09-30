import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Tipo para as chaves de tradução
type TranslationKey = 
  | 'nav.home' | 'nav.about' | 'nav.services' | 'nav.feedback' | 'nav.contact' | 'nav.lightMode' | 'nav.darkMode' | 'nav.callNow'
  | 'hero.badge' | 'hero.title' | 'hero.description' | 'hero.service1' | 'hero.service2' | 'hero.service3'
  | 'hero.cta' | 'hero.learnMore' | 'hero.residential' | 'hero.commercial' | 'hero.office'
  | 'hero.fullService' | 'hero.professional' | 'hero.corporate' | 'hero.included'
  | 'hero.specialServices' | 'hero.moveInOut' | 'hero.deepCleaning' | 'hero.trashRemoval'
  | 'hero.responsibleDisposal' | 'hero.customSchedule' | 'hero.afterHours' | 'hero.residential.feature1' | 'hero.residential.feature2'
  | 'hero.residential.feature3' | 'hero.residential.feature4' | 'hero.residential.feature5'
  | 'hero.commercial.feature1' | 'hero.commercial.feature2' | 'hero.commercial.feature3' | 'hero.commercial.feature4' | 'hero.commercial.feature5'
  | 'hero.office.feature1'  | 'hero.office.feature2'  | 'hero.office.feature3'  | 'hero.office.feature4'  | 'hero.office.feature5'
  | 'about.badge' | 'about.title' | 'about.subtitle' | 'about.company' | 'about.location'
  | 'about.bio1' | 'about.bio2' | 'about.bio3' | 'about.care' | 'about.careDesc'
  | 'about.trust' | 'about.trustDesc' | 'about.dedication' | 'about.dedicationDesc'
  | 'about.familyBusiness' | 'about.familyBusinessDesc' | 'about.reliable' | 'about.reliableDesc'
  | 'about.ecoFriendly' | 'about.ecoFriendlyDesc' | 'about.flexibility' | 'about.flexibilityDesc'
  | 'about.attention' | 'about.attentionDesc' | 'about.satisfaction' | 'about.satisfactionDesc'
  | 'services.badge' | 'services.title' | 'services.subtitle'
  | 'services.residential.title' | 'services.residential.subtitle' | 'services.residential.desc'
  | 'services.commercial.title' | 'services.commercial.subtitle' | 'services.commercial.desc'
  | 'services.office.title' | 'services.office.subtitle' | 'services.office.desc'
  | 'services.moveInOut.title' | 'services.moveInOut.subtitle' | 'services.moveInOut.desc'
  | 'services.trash.title' | 'services.trash.subtitle' | 'services.trash.desc'
  | 'services.quote' | 'services.workflow.badge' | 'services.workflow.title' | 'services.workflow.subtitle'
  | 'services.workflow.contact' | 'services.workflow.contactDesc' | 'services.workflow.estimate'
  | 'services.workflow.estimateDesc' | 'services.workflow.schedule' | 'services.workflow.scheduleDesc'
  | 'services.workflow.cleaning' | 'services.workflow.cleaningDesc' | 'services.workflow.satisfaction'
  | 'services.workflow.satisfactionDesc' | 'services.cta.title' | 'services.cta.subtitle'
  | 'services.residential.feature1' | 'services.residential.feature2' | 'services.residential.feature3'
  | 'services.residential.feature4' | 'services.residential.feature5' | 'services.residential.feature6'
  | 'services.commercial.feature1' | 'services.commercial.feature2' | 'services.commercial.feature3'
  | 'services.commercial.feature4' | 'services.commercial.feature5' | 'services.commercial.feature6'
  | 'services.office.feature1' | 'services.office.feature2' | 'services.office.feature3'
  | 'services.office.feature4' | 'services.office.feature5' | 'services.office.feature6'
  | 'services.moveInOut.feature1' | 'services.moveInOut.feature2' | 'services.moveInOut.feature3'
  | 'services.moveInOut.feature4' | 'services.moveInOut.feature5' | 'services.moveInOut.feature6'
  | 'services.trash.feature1' | 'services.trash.feature2' | 'services.trash.feature3'
  | 'services.trash.feature4' | 'services.trash.feature5' | 'services.trash.feature6'
  | 'footer.tagline' | 'footer.description' | 'footer.services' | 'footer.company' | 'footer.contact'
  | 'footer.email' | 'footer.phone' | 'footer.location' | 'footer.rights' | 'footer.privacy'
  | 'footer.terms' | 'footer.cookies' | 'footer.testimonials'
  | 'feedback.badge' | 'feedback.title' | 'feedback.subtitle' | 'feedback.rate'
  | 'feedback.name' | 'feedback.namePlaceholder' | 'feedback.email' | 'feedback.emailPlaceholder'
  | 'feedback.phone' | 'feedback.phonePlaceholder' | 'feedback.message' | 'feedback.messagePlaceholder'
  | 'feedback.submit' | 'feedback.thanks' | 'feedback.thanksDesc' ;

type Translations = Record<TranslationKey, string>;

// Traduções
const translations: Record<Language, Translations> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.feedback': 'Feedback',
    'nav.contact': 'Contact',
    'nav.lightMode': 'Light Mode',
    'nav.darkMode': 'Dark Mode',
    'nav.callNow': 'Call Now',
    
    // Hero
    'hero.badge': 'Family Business • Seattle, WA',
    'hero.title': 'Professional Cleaning for your HOME and BUSINESS',
    'hero.description': 'We transform your space with high-quality cleaning services. We serve homes, offices, and commercial establishments in the Seattle area.',
    'hero.service1': 'Residential Cleaning - Care for Your Home',
    'hero.service2': 'Commercial Cleaning - Professional Environments',
    'hero.service3': 'Move In & Move Out - Stress-Free Moving',
    'hero.cta': 'Free Estimate',
    'hero.learnMore': 'Learn About Services →',
    'hero.residential': 'Residential',
    'hero.commercial': 'Commercial',
    'hero.office': 'Offices',
    'hero.fullService': 'Full Service',
    'hero.professional': 'Professional',
    'hero.corporate': 'Corporate',
    'hero.included': "What's included:",
    'hero.specialServices': 'Special Services',
    'hero.moveInOut': 'Move In & Move Out',
    'hero.deepCleaning': 'Deep cleaning for moving',
    'hero.trashRemoval': 'Trash Removal',
    'hero.responsibleDisposal': 'Responsible disposal and recycling',
    'hero.customSchedule': 'Custom Schedules',
    'hero.afterHours': 'We work after hours',

    // Services Features - Residential
    'hero.residential.feature1': 'Complete cleaning of all rooms',
    'hero.residential.feature2': 'Deep kitchen cleaning',
    'hero.residential.feature3': 'Complete bathroom sanitization',
    'hero.residential.feature4': 'Room organization',
    'hero.residential.feature5': 'Cleaning products included',

    // Services Features - Commercial
    'hero.commercial.feature1': 'Stores and establishments',
    'hero.commercial.feature2': 'Restaurants and cafeterias',
    'hero.commercial.feature3': 'Gyms and fitness centers',
    'hero.commercial.feature4': 'After-hours cleaning',
    'hero.commercial.feature5': 'Outdoor area maintenance',

    // Services Features - Office
    'hero.office.feature1': 'Desk and workstation cleaning',
    'hero.office.feature2': 'Bathroom sanitization',
    'hero.office.feature3': 'Common areas and reception',
    'hero.office.feature4': 'Meeting rooms',
    'hero.office.feature5': 'Pantries and corporate kitchens',
    
    // About
    'about.badge': 'Our Family',
    'about.title': 'We Care for Your Home Like It Were Our Own',
    'about.subtitle': 'A family business that understands the value of a clean and welcoming home',
    'about.company': 'SparklHaven Cleaning Service',
    'about.location': 'Seattle, WA • Since 2015',
    'about.bio1': 'We are a couple who started this business with a simple dream: to offer the same care and attention to our clients\' homes that we give to our own family. We understand that your home is more than just a place - it\'s where your family creates memories, grows, and lives.',
    'about.bio2': 'For over 8 years in the Seattle area, we have built lasting relationships with our clients, treating each home as if it were our own. We know how important it is to trust the people who enter your home, and we take that responsibility very seriously.',
    'about.bio3': 'Our approach is personal and caring. We are not just a cleaning company - we are a family caring for your family. Every detail matters to us because we understand that a clean and organized home brings peace of mind and more time for you to enjoy with those you love.',
    'about.care': 'Care',
    'about.careDesc': 'Like family',
    'about.trust': 'Trust',
    'about.trustDesc': 'Total security',
    'about.dedication': 'Dedication',
    'about.dedicationDesc': 'Every detail',
    'about.familyBusiness': 'Family Business',
    'about.familyBusinessDesc': 'Operated by a dedicated couple who treats each client as part of our extended family.',
    'about.reliable': 'Reliable',
    'about.reliableDesc': 'Verified background, complete insurance, and years of proven references in the community.',
    'about.ecoFriendly': 'Eco-Friendly Products',
    'about.ecoFriendlyDesc': 'We use products that are safe for your family, your pets, and the environment.',
    'about.flexibility': 'Flexibility',
    'about.flexibilityDesc': 'Schedules that adapt to your family\'s routine, including weekends.',
    'about.attention': 'Attention to Details',
    'about.attentionDesc': 'We care for every corner of your home with the same care we give to ours.',
    'about.satisfaction': 'Satisfaction Guarantee',
    'about.satisfactionDesc': 'If you\'re not 100% satisfied, we\'ll come back to fix it at no additional cost.',
    
    // Services
    'services.badge': 'Our Services',
    'services.title': 'Complete Cleaning Solutions',
    'services.subtitle': 'From residential to commercial, we care for every detail with professionalism and dedication',
    'services.residential.title': 'Residential Cleaning',
    'services.residential.subtitle': 'Your Home Always Spotless',
    'services.residential.desc': 'We care for your home with love and attention to detail. Weekly, bi-weekly, or monthly services adapted to your needs.',
    'services.commercial.title': 'Commercial Cleaning',
    'services.commercial.subtitle': 'Impeccable Professional Environment',
    'services.commercial.desc': 'We keep your commercial establishment always clean and welcoming to your customers. We work on flexible schedules.',
    'services.office.title': 'Office Cleaning',
    'services.office.subtitle': 'Productivity in Clean Environment',
    'services.office.desc': 'Clean and organized offices increase productivity. We offer daily, weekly, or on-demand services.',
    'services.moveInOut.title': 'Move In & Move Out',
    'services.moveInOut.subtitle': 'Stress-Free Moving',
    'services.moveInOut.desc': 'Complete deep cleaning for when you are moving in or out of a property. We leave everything sparkling!',
    'services.trash.title': 'Trash Removal',
    'services.trash.subtitle': 'Responsible Disposal',
    'services.trash.desc': 'Complete residential and commercial trash collection and disposal service. Recycling and eco-friendly disposal.',
    'services.quote': 'Request Quote',
    'services.workflow.badge': 'How It Works',
    'services.workflow.title': 'Simple and Fast Process',
    'services.workflow.subtitle': 'In just 5 steps your space will be spotless',
    'services.workflow.contact': 'Contact',
    'services.workflow.contactDesc': 'Get in touch with us',
    'services.workflow.estimate': 'Estimate',
    'services.workflow.estimateDesc': 'Free evaluation',
    'services.workflow.schedule': 'Schedule',
    'services.workflow.scheduleDesc': 'Choose date and time',
    'services.workflow.cleaning': 'Cleaning',
    'services.workflow.cleaningDesc': 'Impeccable work',
    'services.workflow.satisfaction': 'Satisfaction',
    'services.workflow.satisfactionDesc': 'Total guarantee',
    'services.cta.title': 'Ready for a spotless space?',
    'services.cta.subtitle': 'Contact us today and receive a free personalized quote for your needs',
    
    // Services Features - Residential
    'services.residential.feature1': 'Complete cleaning of all rooms',
    'services.residential.feature2': 'Vacuuming and floor washing',
    'services.residential.feature3': 'Deep kitchen cleaning',
    'services.residential.feature4': 'Complete bathroom sanitization',
    'services.residential.feature5': 'Room organization',
    'services.residential.feature6': 'Cleaning products included',
    
    // Services Features - Commercial
    'services.commercial.feature1': 'Stores and establishments',
    'services.commercial.feature2': 'Restaurants and cafes',
    'services.commercial.feature3': 'Gyms and fitness centers',
    'services.commercial.feature4': 'After hours cleaning',
    'services.commercial.feature5': 'External area maintenance',
    'services.commercial.feature6': 'Professional products',
    
    // Services Features - Office
    'services.office.feature1': 'Desk and workstation cleaning',
    'services.office.feature2': 'Bathroom sanitization',
    'services.office.feature3': 'Common areas and reception',
    'services.office.feature4': 'Meeting rooms',
    'services.office.feature5': 'Corporate kitchens and pantries',
    'services.office.feature6': 'Selective waste collection',
    
    // Services Features - Move In/Out
    'services.moveInOut.feature1': 'Complete deep cleaning',
    'services.moveInOut.feature2': 'All cabinets inside',
    'services.moveInOut.feature3': 'Detailed appliances',
    'services.moveInOut.feature4': 'Windows and frames',
    'services.moveInOut.feature5': 'Walls and baseboards',
    'services.moveInOut.feature6': 'Satisfaction guarantee',
    
    // Services Features - Trash
    'services.trash.feature1': 'Scheduled regular collection',
    'services.trash.feature2': 'Bulky trash removal',
    'services.trash.feature3': 'Proper recycling',
    'services.trash.feature4': 'Ecological disposal',
    'services.trash.feature5': 'Trash bin cleaning',
    'services.trash.feature6': 'Punctual and reliable service',
    
    // Footer
    'footer.tagline': 'Transforming houses into impeccable homes in the Seattle area',
    'footer.description': 'Family business specialized in residential, commercial, and office cleaning. We serve with care and professionalism since 2015.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.email': 'Email',
    'footer.phone': 'Phone',
    'footer.location': 'Location',
    'footer.rights': '© 2025 SparklHaven Cleaning Service. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.cookies': 'Cookies',
    'footer.testimonials': 'Testimonials',
    
    // Feedback
    'feedback.badge': 'Feedback & Testimonials',
    'feedback.title': 'Share Your Experience',
    'feedback.subtitle': 'Your feedback is important to us! See what our clients say',
    'feedback.rate': 'Rate our service *',
    'feedback.name': 'Full Name *',
    'feedback.namePlaceholder': 'Your name',
    'feedback.email': 'Email *',
    'feedback.emailPlaceholder': 'your@email.com',
    'feedback.phone': 'Phone *',
    'feedback.phonePlaceholder': '(425) 555-0123',
    'feedback.message': 'Your Testimonial *',
    'feedback.messagePlaceholder': 'Tell us about your experience...',
    'feedback.submit': 'Send Feedback',
    'feedback.thanks': 'Thank you for your feedback!',
    'feedback.thanksDesc': 'Your opinion is very important to us.'
  },
  pt: {
    // Navbar
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.feedback': 'Feedback',
    'nav.contact': 'Contato',
    'nav.lightMode': 'Modo Claro',
    'nav.darkMode': 'Modo Escuro',
    'nav.callNow': 'Ligar Agora',
    
    // Hero
    'hero.badge': 'Empresa Familiar • Seattle, WA',
    'hero.title': 'Limpeza Profissional para seu LAR e seu NEGÓCIO',
    'hero.description': 'Transformamos seu espaço com serviços de limpeza de alta qualidade. Atendemos residências, escritórios e estabelecimentos comerciais na região de Seattle.',
    'hero.service1': 'Limpeza Residencial - Cuidado com sua Casa',
    'hero.service2': 'Limpeza Comercial - Ambientes Profissionais',
    'hero.service3': 'Move In & Move Out - Mudanças Sem Estresse',
    'hero.cta': 'Orçamento Grátis',
    'hero.learnMore': 'Conheça os Serviços →',
    'hero.residential': 'Residencial',
    'hero.commercial': 'Comercial',
    'hero.office': 'Escritórios',
    'hero.fullService': 'Serviço Completo',
    'hero.professional': 'Profissional',
    'hero.corporate': 'Corporativo',
    'hero.included': 'O que está incluído:',
    'hero.specialServices': 'Serviços Especiais',
    'hero.moveInOut': 'Move In & Move Out',
    'hero.deepCleaning': 'Limpeza profunda para mudanças',
    'hero.trashRemoval': 'Remoção de Lixo',
    'hero.responsibleDisposal': 'Descarte responsável e reciclagem',
    'hero.customSchedule': 'Horários Personalizados',
    'hero.afterHours': 'Atendemos fora do expediente',

     // Services Features - Residential
    'hero.residential.feature1': 'Limpeza completa de todos os cômodos',
    'hero.residential.feature2': 'Limpeza profunda de cozinha',
    'hero.residential.feature3': 'Sanitização completa de banheiros',
    'hero.residential.feature4': 'Organização de ambientes',
    'hero.residential.feature5': 'Produtos de limpeza inclusos',
    
    // Services Features - Commercial
    'hero.commercial.feature1': 'Lojas e estabelecimentos',
    'hero.commercial.feature2': 'Restaurantes e cafeterias',
    'hero.commercial.feature3': 'Academias e centros fitness',
    'hero.commercial.feature4': 'Limpeza após horário comercial',
    'hero.commercial.feature5': 'Manutenção de áreas externas',
    
    // Services Features - Office
    'hero.office.feature1': 'Limpeza de mesas e estações',
    'hero.office.feature2': 'Sanitização de banheiros',
    'hero.office.feature3': 'Áreas comuns e recepção',
    'hero.office.feature4': 'Salas de reunião',
    'hero.office.feature5': 'Copas e cozinhas corporativas',
    
    // About
    'about.badge': 'Nossa Família',
    'about.title': 'Cuidamos da sua casa como se fosse a Nossa',
    'about.subtitle': 'Uma empresa familiar que entende o valor de um lar limpo e acolhedor',
    'about.company': 'SparklHaven Cleaning Service',
    'about.location': 'Seattle, WA • Desde 2015',
    'about.bio1': 'Somos um casal que começou este negócio com um sonho simples: oferecer o mesmo cuidado e atenção às casas dos nossos clientes que damos à nossa própria família. Entendemos que sua casa é mais do que apenas um lugar - é onde sua família cria memórias, cresce e vive.',
    'about.bio2': 'Há mais de 8 anos na região de Seattle, construímos relacionamentos duradouros com nossos clientes, tratando cada casa como se fosse nossa. Sabemos o quanto é importante ter confiança nas pessoas que entram no seu lar, e levamos essa responsabilidade muito a sério.',
    'about.bio3': 'Nossa abordagem é pessoal e atenciosa. Não somos apenas uma empresa de limpeza - somos uma família cuidando da sua família. Cada detalhe importa para nós, porque entendemos que um lar limpo e organizado traz paz de espírito e mais tempo para você aproveitar com quem você ama.',
    'about.care': 'Cuidado',
    'about.careDesc': 'Como família',
    'about.trust': 'Confiança',
    'about.trustDesc': 'Total segurança',
    'about.dedication': 'Dedicação',
    'about.dedicationDesc': 'Cada detalhe',
    'about.familyBusiness': 'Negócio Familiar',
    'about.familyBusinessDesc': 'Operado por um casal dedicado que trata cada cliente como parte da nossa família estendida.',
    'about.reliable': 'Confiável',
    'about.reliableDesc': 'Background verificado, seguros completos e anos de referências comprovadas na comunidade.',
    'about.ecoFriendly': 'Produtos Ecológicos',
    'about.ecoFriendlyDesc': 'Usamos produtos seguros para sua família, seus pets e o meio ambiente.',
    'about.flexibility': 'Flexibilidade',
    'about.flexibilityDesc': 'Horários que se adaptam à rotina da sua família, incluindo fins de semana.',
    'about.attention': 'Atenção aos Detalhes',
    'about.attentionDesc': 'Cuidamos de cada canto da sua casa com o mesmo carinho que cuidamos da nossa.',
    'about.satisfaction': 'Garantia de Satisfação',
    'about.satisfactionDesc': 'Se não ficar 100% satisfeito, voltamos para acertar sem custo adicional.',
    
    // Services
    'services.badge': 'Nossos Serviços',
    'services.title': 'Soluções completas de Limpeza',
    'services.subtitle': 'Do residencial ao comercial, cuidamos de cada detalhe com profissionalismo e dedicação',
    'services.residential.title': 'Limpeza Residencial',
    'services.residential.subtitle': 'Seu Lar Sempre Impecável',
    'services.residential.desc': 'Cuidamos da sua casa com carinho e atenção aos detalhes. Serviços semanais, quinzenais ou mensais adaptados às suas necessidades.',
    'services.commercial.title': 'Limpeza Comercial',
    'services.commercial.subtitle': 'Ambiente Profissional Impecável',
    'services.commercial.desc': 'Mantemos seu estabelecimento comercial sempre limpo e acolhedor para seus clientes. Trabalhamos em horários flexíveis.',
    'services.office.title': 'Limpeza de Escritórios',
    'services.office.subtitle': 'Produtividade em Ambiente Limpo',
    'services.office.desc': 'Escritórios limpos e organizados aumentam a produtividade. Oferecemos serviços diários, semanais ou sob demanda.',
    'services.moveInOut.title': 'Move In & Move Out',
    'services.moveInOut.subtitle': 'Mudanças Sem Estresse',
    'services.moveInOut.desc': 'Limpeza profunda completa para quando você está entrando ou saindo de uma propriedade. Deixamos tudo brilhando!',
    'services.trash.title': 'Remoção de Lixo',
    'services.trash.subtitle': 'Descarte Responsável',
    'services.trash.desc': 'Serviço completo de coleta e descarte de lixo residencial e comercial. Reciclagem e descarte ecológico.',
    'services.quote': 'Solicitar Orçamento',
    'services.workflow.badge': 'Como Funciona',
    'services.workflow.title': 'Processo Simples e Rápido',
    'services.workflow.subtitle': 'Em apenas 5 passos seu espaço estará impecável',
    'services.workflow.contact': 'Contato',
    'services.workflow.contactDesc': 'Entre em contato conosco',
    'services.workflow.estimate': 'Orçamento',
    'services.workflow.estimateDesc': 'Avaliação gratuita',
    'services.workflow.schedule': 'Agendamento',
    'services.workflow.scheduleDesc': 'Escolha data e hora',
    'services.workflow.cleaning': 'Limpeza',
    'services.workflow.cleaningDesc': 'Trabalho impecável',
    'services.workflow.satisfaction': 'Satisfação',
    'services.workflow.satisfactionDesc': 'Garantia total',
    'services.cta.title': 'Pronto para ter um espaço impecável?',
    'services.cta.subtitle': 'Entre em contato hoje e receba um orçamento gratuito personalizado para suas necessidades',
    
    // Services Features - Residential
    'services.residential.feature1': 'Limpeza completa de todos os cômodos',
    'services.residential.feature2': 'Aspiração e lavagem de pisos',
    'services.residential.feature3': 'Limpeza profunda de cozinha',
    'services.residential.feature4': 'Sanitização completa de banheiros',
    'services.residential.feature5': 'Organização de ambientes',
    'services.residential.feature6': 'Produtos de limpeza inclusos',
    
    // Services Features - Commercial
    'services.commercial.feature1': 'Lojas e estabelecimentos',
    'services.commercial.feature2': 'Restaurantes e cafeterias',
    'services.commercial.feature3': 'Academias e centros fitness',
    'services.commercial.feature4': 'Limpeza após horário comercial',
    'services.commercial.feature5': 'Manutenção de áreas externas',
    'services.commercial.feature6': 'Produtos profissionais',
    
    // Services Features - Office
    'services.office.feature1': 'Limpeza de mesas e estações',
    'services.office.feature2': 'Sanitização de banheiros',
    'services.office.feature3': 'Áreas comuns e recepção',
    'services.office.feature4': 'Salas de reunião',
    'services.office.feature5': 'Copas e cozinhas corporativas',
    'services.office.feature6': 'Coleta seletiva de lixo',
    
    // Services Features - Move In/Out
    'services.moveInOut.feature1': 'Limpeza profunda completa',
    'services.moveInOut.feature2': 'Todos os armários por dentro',
    'services.moveInOut.feature3': 'Eletrodomésticos detalhados',
    'services.moveInOut.feature4': 'Janelas e molduras',
    'services.moveInOut.feature5': 'Paredes e rodapés',
    'services.moveInOut.feature6': 'Garantia de satisfação',
    
    // Services Features - Trash
    'services.trash.feature1': 'Coleta regular programada',
    'services.trash.feature2': 'Remoção de lixo volumoso',
    'services.trash.feature3': 'Reciclagem adequada',
    'services.trash.feature4': 'Descarte ecológico',
    'services.trash.feature5': 'Limpeza de lixeiras',
    'services.trash.feature6': 'Serviço pontual e confiável',
    
    // Footer
    'footer.tagline': 'Transformando casas em lares impecáveis na região de Seattle',
    'footer.description': 'Empresa familiar especializada em limpeza residencial, comercial e de escritórios. Atendemos com carinho e profissionalismo desde 2015.',
    'footer.services': 'Serviços',
    'footer.company': 'Empresa',
    'footer.contact': 'Contato',
    'footer.email': 'Email',
    'footer.phone': 'Telefone',
    'footer.location': 'Localização',
    'footer.rights': '© 2025 SparklHaven Cleaning Service. Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Uso',
    'footer.cookies': 'Cookies',
    'footer.testimonials': 'Depoimentos',
    
    // Feedback
    'feedback.badge': 'Feedback & Depoimentos',
    'feedback.title': 'Compartilhe sua Experiência',
    'feedback.subtitle': 'Seu feedback é importante para nós! Veja o que nossos clientes dizem',
    'feedback.rate': 'Avalie nosso serviço *',
    'feedback.name': 'Nome Completo *',
    'feedback.namePlaceholder': 'Seu nome',
    'feedback.email': 'Email *',
    'feedback.emailPlaceholder': 'seu@email.com',
    'feedback.phone': 'Telefone *',
    'feedback.phonePlaceholder': '(11) 98765-4321',
    'feedback.message': 'Seu Depoimento *',
    'feedback.messagePlaceholder': 'Conte sua experiência...',
    'feedback.submit': 'Enviar Feedback',
    'feedback.thanks': 'Obrigado pelo seu feedback!',
    'feedback.thanksDesc': 'Sua opinião é muito importante para nós.'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en'); // Inglês como padrão

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  const t = (key: string): string => {
    const translation = translations[language][key as TranslationKey];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};