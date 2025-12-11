import React from 'react';
import { Bitcoin, Compass, Clock, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Bitcoin className="h-8 w-8 text-brand-accent" />,
    title: "Crypto Friendly",
    description: "Aceptamos pagos en BTC, ETH, USDT y más. Transacciones seguras y rápidas."
  },
  {
    icon: <Compass className="h-8 w-8 text-brand-primary" />,
    title: "Experiencias Únicas",
    description: "Rutas fuera de lo común diseñadas por expertos locales para viajeros exigentes."
  },
  {
    icon: <Clock className="h-8 w-8 text-emerald-500" />,
    title: "Soporte 24/7",
    description: "Asistencia continua vía WhatsApp y Telegram durante toda tu estadía."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-indigo-500" />,
    title: "Seguridad Total",
    description: "Proveedores verificados y transporte privado para tu tranquilidad."
  }
];

const ValueProps: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">¿Por qué elegir L'pointiers?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Reinventamos el turismo en el Caribe combinando tecnología y hospitalidad de lujo.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
              <div className="mb-6 p-4 bg-gray-50 rounded-full group-hover:bg-white group-hover:shadow-md transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
