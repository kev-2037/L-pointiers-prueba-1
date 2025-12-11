import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=1" 
          alt="Cartagena Walled City" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <div className="inline-block px-4 py-1.5 mb-6 border border-white/30 rounded-full bg-white/10 backdrop-blur-md">
            <span className="text-sm font-semibold tracking-wide uppercase text-brand-primary">Turismo Web3</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Descubre la magia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Cartagena</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 font-light leading-relaxed">
            Experiencias auténticas curadas para el viajero digital. Paga con criptomonedas, vive la historia y disfruta del lujo sin fricciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#destinos" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-primary rounded-lg hover:bg-sky-600 transition-all shadow-lg hover:shadow-brand-primary/50">
              Explorar Tours
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-white/30 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all">
              Agenda Personalizada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
