# Daniel Prieto — Portafolio Personal

Portafolio personal de Daniel Enrique Prieto Gallani, Ingeniero en Informática y Desarrollador Fullstack.

**URL del sitio**: [https://samudex.github.io](https://samudex.github.io)

## Tecnologías

- **React 19** + **TypeScript**
- **Vite** como build tool
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones e interacciones
- **Three.js** + **React Three Fiber** para la escena 3D del hero
- **Lucide React** y **React Icons** para iconografía

## Desarrollo local

### Requisitos

- Node.js 18 o superior
- npm

### Instalación

```bash
npm install
npm run dev
```

El sitio estará disponible en `http://localhost:8080`.

## Scripts

| Script | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción en `dist/` |
| `npm run build:pages` | Build de producción en `docs/` |
| `npm run preview` | Previsualiza el build |
| `npm run typecheck` | Verifica los tipos con TypeScript |
| `npm run lint` | Ejecuta ESLint |

## Deploy en GitHub Pages

El sitio se publica desde la carpeta `docs/` de la rama principal.

```bash
npm run build:pages
```

Eso regenera `docs/` con la versión actual del sitio. Después hay que commitear y pushear los cambios de `docs/`.

> `dist/` es solo un build local y está ignorado por Git. No se debe commitear.

## Estructura del proyecto

```
src/
├── components/
│   ├── layout/          # Header y Footer
│   ├── sections/        # Hero, Projects, Skills, Contact
│   ├── projects/        # Tarjetas, previews y efecto tilt
│   ├── three/           # Escena 3D del hero
│   └── ui/              # Componentes UI propios (Reveal, Marquee, etc.)
├── data/
│   ├── profile.ts       # Datos personales y enlaces
│   ├── projects.ts      # Proyectos destacados
│   └── skills.ts        # Stack tecnológico
├── hooks/
│   └── useActiveSection.ts
├── lib/
│   └── utils.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Editar contenido

- **Proyectos**: `src/data/projects.ts`. Ahí se definen descripción, tecnologías, enlaces y preview de Comopago y Focus-bud.
- **Perfil y redes**: `src/data/profile.ts`.
- **Habilidades**: `src/data/skills.ts`.
- **Colores y estilos globales**: `src/index.css` y `tailwind.config.ts`.

## Contacto

- **Email**: deprieto@urbe.edu.ve
- **LinkedIn**: [linkedin.com/in/danielprietog](https://linkedin.com/in/danielprietog)
- **GitHub**: [github.com/samudex](https://github.com/samudex)
