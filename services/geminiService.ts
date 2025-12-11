import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key not found");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateItinerarySuggestion = async (userInput: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "Lo sentimos, el asistente virtual no está disponible en este momento. Por favor contáctanos vía WhatsApp.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userInput,
      config: {
        systemInstruction: "Eres un guía turístico experto de L'pointiers en Cartagena de Indias, Colombia. Tu objetivo es sugerir planes turísticos breves y atractivos basados en lo que pide el usuario. Mantén un tono elegante, moderno y amigable. Menciona que aceptamos criptomonedas. Respuestas cortas (max 80 palabras).",
      }
    });

    return response.text || "No pude generar una sugerencia en este momento.";
  } catch (error) {
    console.error("Error generating content:", error);
    return "Hubo un error al consultar al asistente. Intenta de nuevo más tarde.";
  }
};
