export const profile = {
  name: "Daniel Prieto",
  firstName: "Daniel",
  fullName: "Daniel Enrique Prieto Gallani",
  role: "Desarrollador Fullstack",
  location: "Maracaibo, Venezuela",
  timezone: "America/Caracas",
  timezoneLabel: "GMT−4",
  email: "deprieto@urbe.edu.ve",
  github: "https://github.com/samudex",
  linkedin: "https://linkedin.com/in/danielprietog",
  whatsapp: "https://wa.me/584126682072",

  availability: "Disponible para nuevos proyectos",

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Stack", href: "#stack" },
    { label: "Contacto", href: "#contacto" },
  ],

  hero: {
    greeting: "Hola, soy Daniel Prieto",
    headline: ["Desarrollador", "Fullstack"],
    lead: "Me obsesiona convertir problemas reales en productos web simples, rápidos y bien hechos. Del píxel a la base de datos, de la idea a producción.",
    secondary:
      "Dos productos vivos. Cero proyectos de relleno. Este es el trabajo que me representa.",
    metrics: [
      { value: "02", label: "productos en producción" },
      { value: "E2E", label: "del diseño al deploy" },
      { value: "GMT−4", label: "remoto desde Venezuela" },
    ],
  },

  stackTicker: [
    "React",
    "TypeScript",
    "Node.js",
    "Firebase",
    "Tailwind CSS",
    "Angular",
    "PostgreSQL",
    "Framer Motion",
    "Python",
    "Git",
  ],

  socials: [
    {
      id: "github",
      label: "GitHub",
      handle: "@samudex",
      href: "https://github.com/samudex",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      handle: "in/danielprietog",
      href: "https://linkedin.com/in/danielprietog",
    },
    {
      id: "email",
      label: "Email",
      handle: "deprieto@urbe.edu.ve",
      href: "mailto:deprieto@urbe.edu.ve",
    },
  ],
} as const;

export type Profile = typeof profile;
