import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Sun, 
  Clock, 
  ShieldCheck, 
  Bitcoin, 
  Wallet, 
  Star, 
  Instagram, 
  Mail, 
  MessageCircle,
  ArrowRight,
  Anchor,
  Coffee
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
    image: "https://images.unsplash.com/photo-1590523741831-ab7f41e93143?q=80&w=1000&auto=format&fit=crop",
    price: "Desde 1.2 ETH / Grupo"
  },
  {
    id: 2,
    title: "Historia & Leyendas",
    description: "Recorrido privado por la ciudad amurallada al atardecer.",
    image: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=1000&auto=format&fit=crop",
    price: "Desde $50 USD"
  },
  {
    id: 3,
    title: "Ruta Gastronómica",
    description: "Prueba los sabores del Caribe en los mejores rooftops de la ciudad.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop",
    price: "Desde $80 USD"
  }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Andrea M.",
    text: "La mejor experiencia en Cartagena. Pagar con crypto fue súper fácil y el soporte 24/7 nos salvó la noche.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Carlos D.",
    text: "El yate estaba impecable. L'pointiers se encargó de cada detalle. 100% recomendados.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="font-sans text-gray-900 antialiased bg-gray-50 min-h-screen">
      
      {/* --- Navigation --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Anchor className="h-8 w-8 text-teal-600" />
              <span className="font-bold text-xl tracking-tight text-gray-900">L'pointiers</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#destinos" className="text-gray-600 hover:text-teal-600 transition-colors">Destinos</a>
              <a href="#web3" className="text-gray-600 hover:text-teal-600 transition-colors">Crypto</a>
              <a href="#contacto" className="text-gray-600 hover:text-teal-600 transition-colors">Contacto</a>
              <button className="bg-teal-600 text-white px-5 py-2 rounded-full font-medium hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20 flex items-center gap-2">
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
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
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

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=2000&auto=format&fit=crop" 
            alt="Cartagena Streets" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-900/90" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Experiencias de viaje <span className="text-amber-400">únicas</span> en Cartagena
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
            Explora Cartagena a tu ritmo — tours personalizados, pagos con crypto y soporte 24/7 para que solo te preocupes por disfrutar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#destinos" className="px-8 py-4 bg-teal-600 text-white font-bold rounded-full text-lg shadow-xl hover:bg-teal-700 transform hover:scale-105 transition-all">
              Conoce nuestros tours
            </a>
            <a href="#contacto" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full text-lg hover:bg-white/20 transition-all">
              Planear mi viaje
            </a>
          </div>
        </div>
      </section>

      {/* --- Value Proposition --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">¿Por qué elegir L'pointiers?</h2>
            <p className="mt-4 text-gray-500">Más que una agencia, somos tu anfitrión local.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-teal-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-teal-600">
                <Bitcoin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Pagos Crypto Friendly</h3>
              <p className="text-gray-600">Aceptamos BTC, ETH y stablecoins. Pagos rápidos, seguros y sin las tasas de cambio abusivas.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-amber-600">
                <Sun size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Experiencias a Medida</h3>
              <p className="text-gray-600">Olvídate de los itinerarios rígidos. Diseñamos cada minuto de tu viaje según tus gustos.</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Soporte 24/7</h3>
              <p className="text-gray-600">Estamos contigo siempre. Desde una reserva de cena de último minuto hasta cualquier emergencia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Featured Destinations (Carousel/Grid) --- */}
      <section id="destinos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Destinos Destacados</h2>
              <p className="mt-2 text-gray-600">Lo mejor de Cartagena te espera.</p>
            </div>
            <a href="#" className="hidden sm:flex items-center text-teal-600 font-semibold hover:text-teal-700">
              Ver todos <ArrowRight size={20} className="ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <div key={dest.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                    POPULAR
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dest.title}</h3>
                  <p className="text-gray-600 mb-4 h-12 overflow-hidden">{dest.description}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <span className="text-teal-700 font-bold">{dest.price}</span>
                    <button className="text-sm font-semibold text-gray-900 border-b-2 border-amber-400 hover:border-amber-500 transition-colors">
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <a href="#" className="inline-flex items-center text-teal-600 font-semibold">
              Ver todos <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* --- Web3 Section --- */}
      <section id="web3" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Abstract shapes/gradient */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
                <span className="animate-pulse w-2 h-2 rounded-full bg-green-400"></span>
                <span className="text-sm font-medium text-green-200">Web3 Ready</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Viaja al futuro.<br/>Paga con libertad.</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Somos pioneros en turismo Web3. Conecta tu wallet y reserva tu próxima aventura sin intermediarios bancarios, con total transparencia y seguridad.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-[#F7931A] flex items-center justify-center">
                    <span className="font-bold text-white text-xs">₿</span>
                  </div>
                  <span className="font-medium">Bitcoin</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-[#627EEA] flex items-center justify-center">
                    <span className="font-bold text-white text-xs">Ξ</span>
                  </div>
                  <span className="font-medium">Ethereum</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-[#2775CA] flex items-center justify-center">
                    <span className="font-bold text-white text-xs">$</span>
                  </div>
                  <span className="font-medium">USDC</span>
                </div>
              </div>

              <button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all flex items-center gap-3">
                <Wallet size={20} />
                Conectar Wallet & Reservar
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl transform rotate-3 opacity-20 blur-lg"></div>
              <div className="bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-2xl relative">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-400 text-sm">Resumen de pago</span>
                  <span className="text-green-400 text-xs bg-green-400/10 px-2 py-1 rounded">Verificado</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-700 bg-[url('https://images.unsplash.com/photo-1590523741831-ab7f41e93143?q=80&w=100&auto=format&fit=crop')] bg-cover"></div>
                      <div>
                        <div className="font-medium text-white">Yate Privado 40ft</div>
                        <div className="text-xs text-gray-400">Islas del Rosario • 8 Pax</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-white">1.2 ETH</div>
                      <div className="text-xs text-gray-500">≈ $3,800 USD</div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Gas Fee (Estimado)</span>
                    <span>0.002 ETH</span>
                  </div>
                  <div className="pt-4 flex justify-between items-center">
                     <span className="text-white font-bold text-lg">Total</span>
                     <span className="text-teal-400 font-bold text-xl">1.202 ETH</span>
                  </div>
                </div>
                <div className="mt-6 w-full h-12 bg-teal-600/20 rounded-lg border border-teal-500/50 flex items-center justify-center text-teal-400 font-medium">
                  Confirmar en Wallet...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Lo que dicen nuestros viajeros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testi) => (
              <div key={testi.id} className="bg-gray-50 p-8 rounded-2xl relative">
                <div className="flex items-center gap-4 mb-4">
                  <img src={testi.image} alt={testi.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                  <div>
                    <h4 className="font-bold text-gray-900">{testi.name}</h4>
                    <div className="flex text-amber-400">
                      {[...Array(testi.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testi.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact & Location & Lead Form --- */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Form Side */}
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Comienza tu aventura</h2>
                <p className="text-gray-500 mb-8">Déjanos tus datos y diseñaremos el plan perfecto para ti.</p>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="Ej. Juan Pérez" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="juan@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">¿Qué te interesa?</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-gray-600">
                      <option>Islas del Rosario</option>
                      <option>Tour Histórico</option>
                      <option>Gastronomía</option>
                      <option>Personalizado</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-gray-900 text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors shadow-lg mt-4">
                    Enviar interés
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Al enviar, aceptas nuestras políticas de privacidad. Tus datos están seguros.
                  </p>
                </form>
              </div>

              {/* Info & Map Side */}
              <div className="bg-gray-900 text-white p-8 md:p-12 flex flex-col justify-between relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596436807753-43788339b36d?q=80&w=1000&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-teal-400 mt-1" />
                      <div>
                        <p className="font-semibold">Oficina Principal</p>
                        <p className="text-gray-400 text-sm">Centro Histórico, Calle de la Moneda<br/>Cartagena, Colombia</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <MessageCircle className="text-teal-400" />
                      <p className="font-medium hover:text-teal-400 cursor-pointer transition-colors">+57 300 123 4567</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="text-teal-400" />
                      <p className="font-medium hover:text-teal-400 cursor-pointer transition-colors">reservas@lpointiers.com</p>
                    </div>
                  </div>

                  {/* Socials */}
                  <div className="mt-8 flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors">
                      <Instagram size={20} />
                    </a>
                    {/* Add more social icons as needed */}
                  </div>
                </div>

                {/* Simulated Map Embed */}
                <div className="mt-8 h-48 w-full rounded-xl overflow-hidden relative z-10 border border-white/20">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.627295889606!2d-75.55027588520268!3d10.421671292564175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625e59d91c89f%3A0xc60c7379d0124619!2sCentro%20Hist%C3%B3rico%2C%20Cartagena%20de%20Indias%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
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
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <Anchor className="h-6 w-6 text-gray-900" />
             <span className="font-bold text-lg text-gray-900">L'pointiers</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-teal-600 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Términos de Servicio</a>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} L'pointiers. Todos los derechos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
