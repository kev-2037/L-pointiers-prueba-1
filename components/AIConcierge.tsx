import React, { useState } from 'react';
import { Send, Sparkles, Loader2 } from 'lucide-react';
import { generateItinerarySuggestion } from '../services/geminiService';

const AIConcierge: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    const result = await generateItinerarySuggestion(prompt);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-brand-light to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
            <Sparkles className="h-6 w-6 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-brand-dark">Tu Concierge Virtual IA</h2>
          <p className="text-gray-500 mt-2">¿No sabes qué hacer? Pregúntale a nuestra IA experta en Cartagena.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
          <div className="mb-6 h-64 overflow-y-auto bg-gray-50 rounded-xl p-6 border border-gray-100">
             {!response && !loading && (
               <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center">
                 <p>Ejemplo: "Quiero una cena romántica cerca al mar"</p>
                 <p className="mt-2">Ejemplo: "¿Qué islas recomiendas para hacer snorkel?"</p>
               </div>
             )}
             
             {loading && (
               <div className="h-full flex items-center justify-center text-brand-primary">
                 <Loader2 className="h-8 w-8 animate-spin" />
                 <span className="ml-2 font-medium">Diseñando tu experiencia...</span>
               </div>
             )}

             {response && !loading && (
               <div className="prose prose-sm max-w-none text-gray-700">
                 <p className="whitespace-pre-line leading-relaxed text-lg">{response}</p>
                 <div className="mt-4 pt-4 border-t border-gray-200">
                   <p className="text-xs text-gray-400 italic">Sugerencia generada por L'pointiers AI. Contáctanos para reservar.</p>
                 </div>
               </div>
             )}
          </div>

          <form onSubmit={handleSubmit} className="relative">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe tu plan ideal en Cartagena..." 
              className="w-full pl-6 pr-14 py-4 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all text-gray-700 bg-white shadow-sm"
            />
            <button 
              type="submit" 
              disabled={loading || !prompt.trim()}
              className="absolute right-2 top-2 bottom-2 bg-brand-primary text-white p-2.5 rounded-lg hover:bg-sky-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIConcierge;
