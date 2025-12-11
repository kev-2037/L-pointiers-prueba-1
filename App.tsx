import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Sun, 
  Clock, 
  Bitcoin, 
  Wallet, 
  Star, 
  Instagram, 
  Mail, 
  MessageCircle,
  ArrowRight,
  Anchor,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

// --- Colors Constants (for reference) ---
// Deep Blue: #0A0F3B
// White: #FFFFFF
// Light Gray: #F8F9FA
// Accent Modern: #6C5DD3
// Soft Accent: #E8D8FF

// --- Types ---
interface Destination {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  tag: string;
}

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image: string;
  role: string;
}

// --- Data ---
const destinations: Destination[] = [
  {
    id: 1,
    title: "Islas del Rosario: Private Luxe",
    description: "Navegación exclusiva en yate privado, aguas turquesas y servicio premium a bordo.",
    image: "https://images.unsplash.com/photo-1590523741831-ab7f41e93143?auto=format&fit=crop&q=80&w=800",
    price: "1.2 ETH",
    tag: "Exclusivo"
  },
  {
    id: 2,
    title: "Ciudad Amurallada & Sunset",
    description: "Recorrido histórico privado culminando con coctelería de autor al atardecer.",
    image: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&q=80&w=800",
    price: "$50 USD",
    tag: "Cultural"
  },
  {
    id: 3,
    title: "Gastro-Tour Getsemaní",
    description: "Fusión de sabores locales y vanguardia en el barrio más vibrante de Cartagena.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16549766b?auto=format&fit=crop&q=80&w=800",
    price: "$80 USD",
    tag: "Gastronomía"
  }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Andrea Martínez",
    role: "Digital Nomad",
    text: "La integración de pagos con crypto fue impecable. Cartagena es mágica, pero L'pointiers la hizo accesible y moderna.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Carlos Duran",
    role: "Crypto Investor",
    text: "Soporte 24/7 real. Organizaron una cena privada en 2 horas. La eficiencia que busco al viajar.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
];

// --- Components ---

// Scroll Reveal Component
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased bg-[#F8F9FA] text-[#0A0F3B] min-h-screen selection:bg-[#6C5DD3] selection:text-white overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className={`p-2 rounded-lg transition-colors ${scrollY > 50 ? 'bg-[#0A0F3B] text-white' : 'bg-white text-[#0A0F3B]'}`}>
                <Anchor className="h-6 w-6" />
              </div>
              <span className={`font-serif font-bold text-xl tracking-wide ${scrollY > 50 ? 'text-[#0A0F3B]' : 'text-white'}`}>
                L'pointiers
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {['Destinos', 'Experiencias', 'Web3'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className={`text-sm font-medium tracking-wide hover:text-[#6C5DD3] transition-colors ${scrollY > 50 ? 'text-[#0A0F3B]' : 'text-white/90'}`}
                >
                  {item}
                </a>
              ))}
              <button className="bg-[#6C5DD3] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#5b4cc4] transition-all shadow-[0_4px_14px_0_rgba(108,93,211,0.39)] hover:shadow-[0_6px_20px_rgba(108,93,211,0.23)] hover:-translate-y-0.5 flex items-center gap-2">
                <Wallet size={16} />
                Connect Wallet
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${scrollY > 50 ? 'text-[#0A0F3B]' : 'text-white'}`}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
            {['Destinos', 'Experiencias', 'Web3'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-[#0A0F3B] font-medium text-lg py-2 border-b border-gray-100"
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-[#0A0F3B] text-white py-3 rounded-lg font-medium mt-2">
              Conectar Wallet
            </button>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A0F3B]/40 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F3B] via-transparent to-transparent opacity-90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&q=80&w=2000" 
            alt="Cartagena Luxury Travel" 
            className="w-full h-full object-cover animate-ken-burns"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <Reveal>
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-widest uppercase mb-6">
              Premium Web3 Travel Agency
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1]">
              Cartagena <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D8FF] to-[#6C5DD3]">
                Reimaginada
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Descubre el encanto histórico con la libertad del futuro. Tours personalizados, acceso exclusivo y pagos cripto sin fronteras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button className="group relative px-8 py-4 bg-white text-[#0A0F3B] font-semibold rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <span className="relative z-10 flex items-center gap-2">
                  Explorar Experiencias <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button className="px-8 py-4 text-white font-medium border border-white/30 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                Diseñar mi viaje
              </button>
            </div>
          </Reveal>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/50">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* --- Value Proposition --- */}
      <section className="py-24 px-6 relative bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-serif text-[#0A0F3B] mb-4">La Nueva Era del Turismo</h2>
              <div className="w-24 h-1 bg-[#6C5DD3] mx-auto rounded-full"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <Bitcoin size={32} />,
                title: "Crypto Native",
                desc: "Pagos directos en ETH, BTC y USDC. Sin conversiones, sin fricción bancaria.",
                delay: 0
              },
              {
                icon: <Sun size={32} />,
                title: "Curaduría Local",
                desc: "Acceso a lugares que no salen en las guías. Vive Cartagena como un local VIP.",
                delay: 200
              },
              {
                icon: <Clock size={32} />,
                title: "Concierge 24/7",
                desc: "Soporte humano en tiempo real a través de WhatsApp o Telegram.",
                delay: 400
              }
            ].map((item, idx) => (
              <Reveal key={idx} delay={item.delay}>
                <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#E8D8FF] hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-[#F8F9FA] group-hover:bg-[#6C5DD3] flex items-center justify-center mb-6 transition-colors duration-300">
                    <div className="text-[#6C5DD3] group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-serif">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- Destinations Parallax --- */}
      <section id="destinos" className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E8D8FF]/20 skew-x-12 transform translate-x-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-serif text-[#0A0F3B]">
                Destinos <span className="text-[#6C5DD3] italic">Signature</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <a href="#" className="flex items-center gap-2 text-[#0A0F3B] font-medium hover:text-[#6C5DD3] transition-colors border-b border-[#0A0F3B] hover:border-[#6C5DD3] pb-1">
                Ver colección completa <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {destinations.map((dest, idx) => (
              <Reveal key={dest.id} delay={idx * 150}>
                <div 
                  className={`group relative rounded-[2rem] overflow-hidden cursor-pointer h-[500px] shadow-lg ${idx === 1 ? '' : 'lg:translate-y-8'}`}
                >
                  <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/10 transition-colors z-10" />
                  <img 
                    src={dest.image} 
                    alt={dest.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-6 right-6 z-20">
                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      {dest.tag}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-[#0A0F3B] via-[#0A0F3B]/80 to-transparent pt-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-serif text-white mb-2">{dest.title}</h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {dest.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#6C5DD3] font-bold bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm">
                        {dest.price}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0A0F3B] transform rotate-45 group-hover:rotate-0 transition-transform duration-300">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- Web3 / Tech Section --- */}
      <section id="web3" className="py-24 bg-[#0A0F3B] text-white relative overflow-hidden">
        {/* Geometric Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#6C5DD3] blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E8D8FF] blur-[150px] opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#6C5DD3] to-transparent transform -translate-x-1/2 rotate-45 opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            
            <Reveal>
              <div className="mb-12 lg:mb-0">
                <div className="flex items-center gap-2 text-[#E8D8FF] mb-6">
                  <ShieldCheck size={20} />
                  <span className="text-sm font-semibold tracking-wider uppercase">Seguridad Blockchain</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                  Viaja sin <br />
                  <span className="text-[#6C5DD3]">Fronteras</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
                  Integramos tecnología Web3 para ofrecerte reservas transparentes, seguras y rápidas. Conecta tu wallet y olvida las tasas de cambio abusivas.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                   {['Ethereum', 'Bitcoin', 'Polygon', 'USDC'].map(coin => (
                     <span key={coin} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:border-[#6C5DD3] hover:bg-[#6C5DD3]/10 transition-colors cursor-default">
                       {coin}
                     </span>
                   ))}
                </div>

                <button className="bg-gradient-to-r from-[#6C5DD3] to-[#5b4cc4] px-8 py-4 rounded-xl font-bold shadow-lg shadow-[#6C5DD3]/30 hover:shadow-[#6C5DD3]/50 transition-all hover:scale-105 flex items-center gap-3">
                  <Wallet size={20} />
                  Conectar Wallet Ahora
                </button>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#6C5DD3] rounded-3xl transform rotate-3 blur-sm opacity-40"></div>
                <div className="relative bg-[#12164a] border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
                  {/* Mock UI Card */}
                  <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                    <span className="text-xs text-gray-400 uppercase tracking-widest">Smart Contract</span>
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                       <span className="text-xs text-green-400">Verificado</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6C5DD3] to-purple-400 flex items-center justify-center">
                        <Anchor size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-serif text-lg">Reserva: Sunset Yacht</p>
                        <p className="text-gray-400 text-sm">0x71C...3A92</p>
                      </div>
                    </div>
                    
                    <div className="bg-[#0A0F3B] rounded-xl p-4 border border-white/5">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Monto Total</span>
                        <span className="text-white font-mono">1.2 ETH</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Gas Fee Est.</span>
                        <span className="text-[#6C5DD3] font-mono">&lt; 0.001 ETH</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 w-full bg-white/5 hover:bg-white/10 border border-white/10 border-dashed rounded-xl h-12 flex items-center justify-center text-sm text-gray-400 transition-colors cursor-pointer">
                    Esperando confirmación...
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
             <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-[#0A0F3B]">Voces de Viajeros</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, idx) => (
              <Reveal key={t.id} delay={idx * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover ring-4 ring-[#F8F9FA]" />
                    <div>
                      <h4 className="font-bold text-[#0A0F3B]">{t.name}</h4>
                      <p className="text-xs text-[#6C5DD3] font-bold uppercase tracking-wide">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4 gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- Lead Form & Contact --- */}
      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0A0F3B] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
            
            {/* Visual Side */}
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
              <img 
                src="https://images.unsplash.com/photo-1596436807753-43788339b36d?auto=format&fit=crop&q=80&w=1000" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                alt="Cartagena Streets"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F3B] to-transparent"></div>
              <div className="relative z-10 p-12 flex flex-col justify-center h-full">
                <h3 className="text-4xl font-serif text-white mb-4">Empieza tu Aventura</h3>
                <p className="text-gray-300 mb-8 max-w-sm">Déjanos tus datos. Un Travel Planner experto te contactará vía WhatsApp en menos de 2 horas.</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white/80">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MessageCircle size={20} />
                    </div>
                    <span>+57 300 123 4567</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/80">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <span>vip@lpointiers.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-1/2 p-8 lg:p-16 bg-white lg:rounded-l-[2.5rem] lg:ml-[-2rem] relative z-20 shadow-[-20px_0_40px_rgba(0,0,0,0.1)]">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-[#0A0F3B] mb-2 uppercase tracking-wide">Nombre</label>
                  <input type="text" className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0A0F3B] mb-2 uppercase tracking-wide">Contacto</label>
                  <input type="email" className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] transition-all" placeholder="Email o WhatsApp" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0A0F3B] mb-2 uppercase tracking-wide">Interés</label>
                  <select className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] transition-all text-gray-600">
                    <option>Experiencia Personalizada</option>
                    <option>Alquiler de Yate</option>
                    <option>Tour Histórico</option>
                    <option>Gastronomía</option>
                  </select>
                </div>
                
                <button className="w-full bg-[#0A0F3B] text-white font-bold py-4 rounded-xl hover:bg-[#6C5DD3] transition-colors shadow-lg mt-4 flex justify-center items-center gap-2">
                  Solicitar Propuesta <ArrowRight size={18} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-[#0A0F3B] text-white pt-16 pb-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Anchor className="text-[#6C5DD3]" size={28} />
              <span className="text-2xl font-serif font-bold">L'pointiers</span>
            </div>
            <div className="flex gap-6">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#6C5DD3] transition-colors">
                 <Instagram size={20} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#6C5DD3] transition-colors">
                 <MessageCircle size={20} />
               </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} L'pointiers Agency. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;