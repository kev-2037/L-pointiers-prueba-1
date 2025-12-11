import React from 'react';
import { Zap, Lock, Globe } from 'lucide-react';

const Web3Section: React.FC = () => {
  return (
    <section id="web3" className="py-20 bg-brand-dark text-white overflow-hidden relative">
      {/* Decorative blurred blobs */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-brand-accent opacity-10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">El Futuro del Turismo es <span className="text-brand-primary">Descentralizado</span></h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              En L'pointiers eliminamos las barreras bancarias. Paga tus vacaciones con tus activos digitales de manera directa, rápida y sin comisiones ocultas por tipo de cambio.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white/10 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-brand-accent" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold">Pagos Instantáneos</h3>
                  <p className="text-gray-400 mt-1">Confirmación en segundos, sin esperas de validación bancaria internacional.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white/10 p-3 rounded-lg">
                  <Lock className="h-6 w-6 text-brand-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold">Privacidad y Seguridad</h3>
                  <p className="text-gray-400 mt-1">Tecnología Blockchain que garantiza la trazabilidad y seguridad de tu reserva.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#F7931A] flex items-center justify-center text-[10px] font-bold">B</div>
                <span className="font-mono text-sm">Bitcoin</span>
              </div>
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg flex items-center gap-2">
                 <div className="w-6 h-6 rounded-full bg-[#627EEA] flex items-center justify-center text-[10px] font-bold">E</div>
                <span className="font-mono text-sm">Ethereum</span>
              </div>
               <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg flex items-center gap-2">
                 <div className="w-6 h-6 rounded-full bg-[#26A17B] flex items-center justify-center text-[10px] font-bold">T</div>
                <span className="font-mono text-sm">USDT</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6 shadow-2xl max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
               <div className="flex items-center justify-between mb-8 border-b border-gray-700 pb-4">
                 <span className="text-sm text-gray-400">Checkout</span>
                 <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Conectado</span>
               </div>
               <div className="space-y-4">
                 <div className="flex justify-between items-center">
                   <span className="text-gray-300">Tour Islas del Rosario</span>
                   <span className="font-bold">0.05 ETH</span>
                 </div>
                 <div className="flex justify-between items-center text-sm text-gray-500">
                   <span>Fee de Red (Gas)</span>
                   <span>~$2.50</span>
                 </div>
                 <div className="h-px bg-gray-700 my-4"></div>
                 <div className="flex justify-between items-center mb-6">
                   <span className="text-lg font-bold">Total</span>
                   <span className="text-2xl font-bold text-brand-primary">0.05 ETH</span>
                 </div>
                 <button className="w-full bg-brand-primary hover:bg-sky-500 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-brand-primary/20">
                   Confirmar Transacción
                 </button>
                 <p className="text-center text-xs text-gray-500 mt-2">Powered by WalletConnect</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3Section;
