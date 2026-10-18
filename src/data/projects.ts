export type Project = {
  id: string;
  index: string;
  name: string;
  productName: string;
  category: string;
  status: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  url: string;
  displayUrl: string;
  accent: string;
  accentRgb: string;
  preview: "comopago" | "focusbud";
};

export const projects: Project[] = [
  {
    id: "comopago",
    index: "01",
    name: "Comopago",
    productName: "Cómo Pago",
    category: "Fintech · Decisiones de pago",
    status: "En producción",
    tagline: "Pagar en bolívares o en divisas. Ahora lo sabes en segundos.",
    description:
      "Una calculadora financiera para la realidad venezolana. Comopago compara tasas BCV y Binance P2P en tiempo real, convierte montos y muestra qué opción te conviene pagar, todo en una sola pantalla.",
    highlights: [
      "Comparación de tasas BCV y Binance P2P en tiempo real.",
      "Conversión entre bolívares y divisas sin hojas de cálculo.",
      "Instalable como PWA, con una experiencia mobile-first.",
    ],
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Vite"],
    url: "https://comopago.web.app",
    displayUrl: "comopago.web.app",
    accent: "#4d8dff",
    accentRgb: "77, 141, 255",
    preview: "comopago",
  },
  {
    id: "focus-bud",
    index: "02",
    name: "Focus-bud",
    productName: "One Thing",
    category: "Productividad · Enfoque",
    status: "En producción",
    tagline: "Una sola cosa a la vez. La app que te obliga a elegir.",
    description:
      "Focus-bud cambia la lista infinita de tareas por una pregunta: ¿qué única cosa harás ahora? Defines cuánto tiempo necesitas, entras en una sesión de foco y construyes un historial de lo que sí terminaste.",
    highlights: [
      "Flujo de una sola pregunta: acción y duración estimada.",
      "Sesiones de 15 minutos a 2 h+ con historial de foco.",
      "Interfaz oscura y sin ruido, diseñada para no distraerte.",
    ],
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Vite"],
    url: "https://focus-bud.web.app",
    displayUrl: "focus-bud.web.app",
    accent: "#00ceff",
    accentRgb: "0, 206, 255",
    preview: "focusbud",
  },
];
