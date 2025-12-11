import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendoza',
    role: 'Crypto Trader',
    comment: 'Increíble poder pagar todo el viaje con ETH. El tour privado a las islas fue de otro nivel. L\'pointiers entiende lo que necesita un nómada digital.',
    avatar: 'https://picsum.photos/100/100?random=10',
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Travel Blogger',
    comment: 'La atención al detalle es impecable. Me sentí segura y bien atendida en todo momento. La integración Web3 es el futuro.',
    avatar: 'https://picsum.photos/100/100?random=11',
    rating: 5
  },
  {
    id: '3',
    name: 'Mateo & Lucia',
    role: 'Pareja',
    comment: 'Usamos el concierge virtual para planear nuestra cena de aniversario y fue espectacular. Gracias por hacer de Cartagena algo mágico.',
    avatar: 'https://picsum.photos/100/100?random=12',
    rating: 4.8
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-16">Lo que dicen nuestros viajeros</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-gray-50 p-8 rounded-2xl relative">
              <div className="flex text-brand-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(t.rating) ? 'fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{t.comment}"</p>
              <div className="flex items-center">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover mr-4 ring-2 ring-white" />
                <div>
                  <h4 className="font-bold text-brand-dark">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
