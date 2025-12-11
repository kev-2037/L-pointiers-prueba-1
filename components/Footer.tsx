import React from 'react';
import { MapPin, Instagram, Facebook, Phone, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <MapPin className="h-6 w-6 text-brand-primary" />
               <span className="font-bold text-xl text-brand-dark">L'pointiers</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Agencia de turismo boutique en Cartagena. Conectando la historia del Caribe con la innovación del Web3.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Explora</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#destinos" className="hover:text-brand-primary">Islas del Rosario</a></li>
              <li><a href="#destinos" className="hover:text-brand-primary">Centro Histórico</a></li>
              <li><a href="#destinos" className="hover:text-brand-primary">Gastronomía</a></li>
              <li><a href="#destinos" className="hover:text-brand-primary">Vida Nocturna</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-primary">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-brand-primary">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-brand-primary">RNT: 1234567</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contáctanos</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-brand-primary shrink-0" />
                <span>Centro Histórico, Calle de la Moneda, Cartagena, Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-primary shrink-0" />
                <span>+57 (300) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-brand-primary shrink-0" />
                <span>bookings@lpointiers.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} L'pointiers. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <span>Operando 24/7 en Blockchain</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
