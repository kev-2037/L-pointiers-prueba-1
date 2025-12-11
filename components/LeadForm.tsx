import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contacto" className="py-20 bg-brand-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para tu próxima aventura?</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Déjanos tus datos y un especialista te contactará para diseñar tu experiencia a medida en Cartagena.
        </p>

        {status === 'success' ? (
          <div className="bg-white rounded-2xl p-8 max-w-lg mx-auto animate-fade-in">
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">¡Gracias por contactarnos!</h3>
              <p className="text-gray-600 mt-2">Hemos recibido tu solicitud. Te escribiremos pronto.</p>
              <button onClick={() => setStatus('idle')} className="mt-6 text-brand-primary font-medium hover:underline">
                Enviar otra consulta
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-2 md:p-4 shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row gap-4 items-center">
            <input 
              required
              type="text" 
              placeholder="Tu Nombre" 
              className="w-full md:w-1/3 px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-primary/50 outline-none text-gray-800 placeholder-gray-400"
            />
            <input 
              required
              type="email" 
              placeholder="Tu Email" 
              className="w-full md:w-1/3 px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-primary/50 outline-none text-gray-800 placeholder-gray-400"
            />
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full md:w-1/3 bg-brand-dark hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? 'Enviando...' : (
                <>
                  Cotizar Ahora <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>
        )}
        <p className="text-blue-200/60 text-xs mt-6">
          Al enviar este formulario aceptas nuestra política de privacidad. Tus datos están seguros.
        </p>
      </div>
    </section>
  );
};

export default LeadForm;
