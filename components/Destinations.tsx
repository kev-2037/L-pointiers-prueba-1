import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { TourPackage } from '../types';

const tours: TourPackage[] = [
  {
    id: '1',
    title: 'Islas del Rosario VIP',
    description: 'Navega en yate privado por las aguas cristalinas del archipiélago. Incluye almuerzo gourmet y snorkel.',
    priceUsd: 150,
    priceEth: 0.05,
    imageUrl: 'https://picsum.photos/600/400?random=2',
    duration: '8 Horas',
    rating: 4.9
  },
  {
    id: '2',
    title: 'Historia & Gastronomía',
    description: 'Recorrido nocturno por la ciudad amurallada con degustación de rones y cena en restaurante top.',
    priceUsd: 90,
    priceEth: 0.03,
    imageUrl: 'https://picsum.photos/600/400?random=3',
    duration: '4 Horas',
    rating: 4.8
  },
  {
    id: '3',
    title: 'Atardecer en Catamarán',
    description: 'Disfruta de la mejor vista del skyline de Cartagena con cocteles ilimitados y música en vivo.',
    priceUsd: 65,
    priceEth: 0.02,
    imageUrl: 'https://picsum.photos/600/400?random=4',
    duration: '2 Horas',
    rating: 4.7
  }
];

const Destinations: React.FC = () => {
  return (
    <section id="destinos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Destinos Destacados</h2>
            <p className="text-gray-500 text-lg">Explora nuestras experiencias más populares.</p>
          </div>
          <button className="hidden md:flex items-center text-brand-primary font-bold hover:text-sky-700 transition-colors mt-4 md:mt-0">
            Ver todos los tours <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img src={tour.imageUrl} alt={tour.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="h-4 w-4 text-brand-accent fill-current" />
                  <span className="text-sm font-bold text-gray-800">{tour.rating}</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-brand-primary bg-sky-50 px-2 py-1 rounded uppercase tracking-wider">{tour.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{tour.title}</h3>
                <p className="text-gray-500 mb-6 line-clamp-2 flex-1">{tour.description}</p>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <div>
                    <p className="text-xs text-gray-400 uppercase">Desde</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-brand-dark">${tour.priceUsd} USD</span>
                      <span className="text-sm text-gray-400 font-mono">({tour.priceEth} ETH)</span>
                    </div>
                  </div>
                  <button className="bg-brand-dark text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm font-semibold">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <button className="inline-flex items-center text-brand-primary font-bold hover:text-sky-700 transition-colors">
            Ver todos los tours <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
