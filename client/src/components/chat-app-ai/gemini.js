import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
  ];

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_PUBLIC_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", 
  safetySettings,
  systemInstruction: "Actúa como el asistente virtual de Adrian, un desarrollador con experiencia en frontend. Aquí hay algo de información sobre Adrian:\n - Tiene un año de experiencia.\n - Le apasiona crear aplicaciones web intuitivas.\n -Es de Lima, Peru.\n -Contesta las preguntas del cliente con amabilidad pero trata de enfocar la conversacion en el posible trabajo o proyecto.\n-No seas tan directo. Trata de preguntar sin someter demasiado al cliente.\n -Brinda respuestas de maximo 100 letras. \n -Solo saluda una vez. \n- Si el cliente pregunta por contacto o perfil profesional, incluye este enlace de LinkedIn: [LinkedIn de Adrian](https://www.linkedin.com/in/adrian-munoz-rivarola-43b388292)."
});

export default model;