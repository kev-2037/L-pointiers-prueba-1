import React, { useState, useEffect } from 'react';
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
  Anchor
} from 'lucide-react';

// --- Types ---
interface Destination {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image: string;
}

// --- Data ---
const destinations: Destination[] = [
  {
    id: 1,
    title: "Islas del Rosario de Lujo",
    description: "Navega en yate privado por aguas cristalinas con servicio a bordo.",
    image: "https://images.unsplash.com/photo-1590523741831-ab7f41e93143?auto=format&fit=crop&q=80&w=800",
    price: "Desde 1.2 ETH / Grupo"
  },
  {
    id: 2,
    title: "Historia & Leyendas",
    description: "Recorrido privado por la ciudad amurallada al atardecer.",
    image: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&q=80&w=800",
    price: "Desde $50 USD"
  },
  {
    id: 3,
    title: "Ruta Gastronómica",
    description: "Prueba los sabores del Caribe en los mejores rooftops de la ciudad.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    price: "Desde $80 USD"
  }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Andrea M.",
    text: "La mejor experiencia en Cartagena. Pagar con crypto fue súper fácil y el soporte 24/7 nos salvó la noche.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Carlos D.",
    text: "El yate estaba impecable. L'pointiers se encargó de cada detalle. 100% recomendados.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Manejador de movimiento del mouse para efecto parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Calculamos la posición relativa al centro de la pantalla
    const x = (e.clientX - window.innerWidth / 2) / 50; // Factor de división controla la sensibilidad
    const y = (e.clientY - window.innerHeight / 2) / 50;
    setMousePos({ x, y });
  };

  return (
    <div className="font-sans text-gray-900 antialiased bg-gray-50 min-h-screen">
      
      {/* --- Navigation --- */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm transition-all duration-300 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-teal-600 p-1.5 rounded-lg rotate-3 shadow-lg">
                <Anchor className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">L'pointiers</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#destinos" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Destinos</a>
              <a href="#web3" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Crypto</a>
              <a href="#contacto" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Contacto</a>
              <button className="bg-gray-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-teal-600 transition-all shadow-lg hover:shadow-teal-600/30 flex items-center gap-2 transform hover:-translate-y-0.5">
                <Wallet size={18} />
                Conectar Wallet
              </button>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#destinos" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50">Destinos</a>
              <a href="#web3" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50">Crypto</a>
              <a href="#contacto" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50">Contacto</a>
              <button className="w-full text-left px-3 py-2 text-teal-600 font-bold flex items-center gap-2">
                <Wallet size={18} /> Conectar Wallet
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- Hero Section with Parallax --- */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900"
        onMouseMove={handleMouseMove}
      >
        {/* Background Layer with Parallax & Ken Burns */}
        <div 
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)`
          }}
        >
          {/* Base Image */}
          <div className="absolute inset-0 animate-ken-burns">
            <img 
              src="https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&q=80&w=1920" 
              alt="Cartagena Streets" 
              className="w-full h-full object-cover scale-110" // Initial scale to allow movement without white edges
            />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 via-black/20 to-amber-900/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90" />
        </div>

        {/* Floating Particles (Simulated with simple divs) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Content Layer (Moves slightly opposite to background for depth) */}
        <div 
          className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16"
          style={{
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium text-white tracking-wide">Descubre el Caribe Real</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight drop-shadow-lg">
            Cartagena<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-amber-200">Sin Límites</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Lujo local, experiencias auténticas y pagos en crypto. 
            <br className="hidden md:block"/>Tu viaje comienza antes de llegar.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#destinos" className="group px-8 py-4 bg-teal-600 text-white font-bold rounded-full text-lg shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:bg-teal-500 hover:shadow-[0_0_30px_rgba(13,148,136,0.5)] transform hover:scale-105 transition-all flex items-center justify-center gap-2">
              Explorar Tours <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contacto" className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/30 text-white font-bold rounded-full text-lg hover:bg-white/15 hover:border-white/50 transition-all shadow-lg">
              Diseñar mi Viaje
            </a>
          </div>
        </div>
      </section>

      {/* --- Value Proposition --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl tracking-tight">¿Por qué L'pointiers?</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">Redefinimos el turismo tradicional con tecnología moderna y calidez humana.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Bitcoin size={32} />, 
                color: "text-amber-600", 
                bg: "bg-amber-50",
                title: "Crypto Friendly",
                desc: "Libertad financiera. Paga con tus activos digitales favoritos sin fricción."
              },
              { 
                icon: <Sun size={32} />, 
                color: "text-teal-600", 
                bg: "bg-teal-50",
                title: "100% Personalizado",
                desc: "Tu viaje, tus reglas. Creamos itinerarios únicos basados en tu estilo."
              },
              { 
                icon: <Clock size={32} />, 
                color: "text-blue-600", 
                bg: "bg-blue-50",
                title: "Concierge 24/7",
                desc: "Soporte real en tiempo real. Estamos a un mensaje de distancia."
              }
            ].map((item, index) => (
              <div key={index} className="group text-center p-8 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className={`${item.bg} ${item.color} p-5 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Featured Destinations (Carousel/Grid) --- */}
      <section id="destinos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">Experiencias Top</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">Destinos Destacados</h2>
            </div>
            <a href="#" className="hidden sm:flex items-center text-teal-600 font-bold hover:text-teal-800 transition-colors group">
              Ver catálogo completo <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {destinations.map((dest) => (
              <div key={dest.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/0 transition-colors z-10" />
                  <img 
                    src={dest.image} 
                    alt={dest.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                     <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-lg tracking-wide uppercase">
                        Popular
                     </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">{dest.title}</h3>
                  <p className="text-gray-500 mb-6 line-clamp-2">{dest.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400 font-medium uppercase">Precio estimado</span>
                        <span className="text-teal-700 font-bold text-lg">{dest.price}</span>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-teal-600 transition-colors shadow-lg">
                        <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
            <a href="#" className="inline-flex items-center text-teal-600 font-bold text-lg">
              Ver catálogo completo <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* --- Web3 Section --- */}
      <section id="web3" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[30rem] h-[30rem] bg-teal-500/20 rounded-full blur-[100px] animate-pulse-soft"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[25rem] h-[25rem] bg-purple-500/20 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <div className="mb-16 lg:mb-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-900/30 border border-teal-500/30 mb-8">
                <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                </span>
                <span className="text-sm font-semibold text-teal-300">Tecnología Web3 Integrada</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Viaja al futuro.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">Paga con libertad.</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
                Somos pioneros en turismo descentralizado. Conecta tu wallet y vive una experiencia de reserva transparente, segura y sin fronteras.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                {['Bitcoin', 'Ethereum', 'USDC', 'USDT'].map((crypto) => (
                    <div key={crypto} className="flex items-center gap-2 px-5 py-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-teal-500/50 transition-all cursor-default">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        <span className="font-medium text-gray-200">{crypto}</span>
                    </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-[0_0_25px_rgba(20,184,166,0.4)] hover:shadow-[0_0_40px_rgba(20,184,166,0.6)] hover:scale-105 transition-all flex items-center gap-3 w-full sm:w-auto justify-center">
                <Wallet size={24} />
                Conectar Wallet
              </button>
            </div>
            
            <div className="relative group">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-600 rounded-3xl transform rotate-6 opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Card Container */}
              <div className="bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 p-8 rounded-3xl shadow-2xl relative transform transition-transform duration-500 hover:rotate-1">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Checkout Inteligente</span>
                  <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-lg border border-green-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-green-400 text-xs font-bold">Network Active</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 pb-6 border-b border-gray-700/50">
                    <div className="w-16 h-16 rounded-2xl bg-gray-700 overflow-hidden ring-2 ring-gray-600">
                        <img src="https://images.unsplash.com/photo-1590523741831-ab7f41e93143?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Thumb" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">Yate Privado 40ft</div>
                      <div className="text-sm text-gray-400">Islas del Rosario • Full Day</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-400">
                        <span>Subtotal</span>
                        <span>1.2 ETH</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                        <span>Network Fee</span>
                        <span className="text-xs bg-gray-700 px-2 py-0.5 rounded text-gray-300">~ $4.50</span>
                    </div>
                    <div className="pt-4 flex justify-between items-center border-t border-gray-700/50">
                        <span className="text-white font-bold">Total a pagar</span>
                        <div className="text-right">
                            <span className="block text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">1.202 ETH</span>
                        </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 w-full h-14 bg-teal-600/10 hover:bg-teal-600/20 rounded-xl border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold cursor-pointer transition-all group-hover:border-teal-500/60">
                  Confirmar Transacción
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Historias Reales</h2>
            <p className="text-lg text-gray-500">Nuestros viajeros no solo visitan Cartagena, la viven. Aquí está lo que tienen que decir.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testi) => (
              <div key={testi.id} className="bg-gray-50 p-10 rounded-3xl relative hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="absolute top-8 right-10 text-6xl text-teal-100 font-serif opacity-50">"</div>
                <div className="flex items-center gap-5 mb-6">
                  <img src={testi.image} alt={testi.name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md" />
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{testi.name}</h4>
                    <div className="flex text-amber-400 gap-1">
                      {[...Array(testi.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic text-lg leading-relaxed relative z-10">{testi.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact & Location & Lead Form --- */}
      <section id="contacto" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Form Side */}
              <div className="p-10 md:p-16">
                <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2 block">Contacto</span>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Diseña tu experiencia</h2>
                <p className="text-gray-500 mb-10 text-lg">Déjanos tus datos y un Travel Planner te contactará en menos de 24 horas.</p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
                        <input type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="Tu nombre" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Apellido</label>
                        <input type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="Tu apellido" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
                    <input type="email" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="ejemplo@correo.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Interés Principal</label>
                    <div className="relative">
                        <select className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-gray-600 appearance-none">
                        <option>Islas del Rosario & Playa</option>
                        <option>Historia & Cultura</option>
                        <option>Gastronomía & Nightlife</option>
                        <option>Experiencia 100% Personalizada</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-gray-900 text-white font-bold py-5 rounded-xl hover:bg-teal-600 transition-colors shadow-xl text-lg mt-6">
                    Solicitar Propuesta
                  </button>
                </form>
              </div>

              {/* Info & Map Side */}
              <div className="bg-gray-900 text-white p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596436807753-43788339b36d?auto=format&fit=crop&q=80&w=1000')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <MapPin className="text-teal-400" /> Encuéntranos
                  </h3>
                  
                  <div className="space-y-6 text-lg">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <div className="mt-1"><MapPin className="text-teal-400 w-5 h-5" /></div>
                      <div>
                        <p className="font-bold text-white">Oficina Principal</p>
                        <p className="text-gray-300 text-sm mt-1">Calle de la Moneda, Centro Histórico<br/>Cartagena de Indias, Colombia</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
                      <MessageCircle className="text-teal-400 w-5 h-5" />
                      <p className="font-medium">+57 300 123 4567</p>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
                      <Mail className="text-teal-400 w-5 h-5" />
                      <p className="font-medium">reservas@lpointiers.com</p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <p className="text-sm text-gray-400 mb-4 font-bold uppercase tracking-wider">Síguenos</p>
                    <div className="flex gap-4">
                        {[Instagram, MessageCircle, Mail].map((Icon, i) => (
                            <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all transform hover:-translate-y-1">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Simulated Map Embed */}
                <div className="mt-10 h-56 w-full rounded-2xl overflow-hidden relative z-10 border border-white/20 shadow-2xl">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.627295889606!2d-75.55027588520268!3d10.421671292564175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625e59d91c89f%3A0xc60c7379d0124619!2sCentro%20Hist%C3%B3rico%2C%20Cartagena%20de%20Indias%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco" 
                    width="100%" 
                    height="100%" 
                    style={{border:0, filter: 'grayscale(100%) invert(90%) contrast(80%)'}} 
                    allowFullScreen 
                    loading="lazy"
                    title="Ubicación L'pointiers"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3">
                    <div className="bg-teal-600 p-1.5 rounded-lg rotate-3">
                        <Anchor className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-bold text-xl text-gray-900">L'pointiers</span>
                </div>
                
                <div className="flex flex-wrap gap-8 text-sm font-medium text-gray-600 justify-center">
                    <a href="#" className="hover:text-teal-600 transition-colors">Sobre Nosotros</a>
                    <a href="#" className="hover:text-teal-600 transition-colors">Destinos</a>
                    <a href="#" className="hover:text-teal-600 transition-colors">Política de Privacidad</a>
                    <a href="#" className="hover:text-teal-600 transition-colors">Términos de Servicio</a>
                </div>

                <div className="text-sm text-gray-400 text-center md:text-right">
                    © {new Date().getFullYear()} L'pointiers.<br/>Hecho con 🌴 en Cartagena.
                </div>
            </div>
        </div>
      </footer>

    </div>
  );
};

export default App;