import React, { useState } from 'react';
import { Menu, X, Wallet, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <MapPin className="h-8 w-8 text-brand-primary" />
            <span className="font-bold text-2xl tracking-tighter text-brand-dark">L'pointiers</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#destinos" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">Destinos</a>
            <a href="#web3" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">Crypto & Web3</a>
            <a href="#testimonios" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">Experiencias</a>
            <button className="flex items-center gap-2 bg-brand-dark text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium text-sm">
              <Wallet size={16} />
              Conectar Wallet
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-brand-dark focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
            <a href="#destinos" onClick={toggleMenu} className="block w-full text-center px-3 py-3 text-gray-700 hover:text-brand-primary font-medium">Destinos</a>
            <a href="#web3" onClick={toggleMenu} className="block w-full text-center px-3 py-3 text-gray-700 hover:text-brand-primary font-medium">Web3</a>
            <a href="#contacto" onClick={toggleMenu} className="block w-full text-center px-3 py-3 text-gray-700 hover:text-brand-primary font-medium">Contacto</a>
            <button className="w-full flex justify-center items-center gap-2 bg-brand-dark text-white px-5 py-3 rounded-lg">
              <Wallet size={18} />
              Conectar Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
