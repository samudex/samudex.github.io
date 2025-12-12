# Daniel Prieto - Portfolio Personal

Portfolio personal de Daniel Enrique Prieto Gallani, Ingeniero en Informática y Full Stack Developer.

**URL del sitio**: [https://samudex.github.io](https://samudex.github.io)

## Tecnologías

- **React 19** + **TypeScript** - Framework principal
- **Vite** - Build tool
- **Tailwind CSS** - Estilos
- **shadcn/ui** - Componentes UI
- **Lucide React** - Iconos

## Desarrollo Local

### Prerrequisitos

- [Bun](https://bun.sh/docs/installation) instalado (recomendado) o Node.js 18+

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/samudex/samudex.github.io.git

# Navegar al directorio
cd samudex.github.io

# Instalar dependencias
bun install
# o con npm: npm install

# Iniciar servidor de desarrollo
bun run dev
# o con npm: npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## Build y Deploy

### Build de producción

```bash
bun run build
# o con npm: npm run build
```

Los archivos generados estarán en la carpeta `dist/`.

### Deploy a GitHub Pages

1. Asegúrate de que el repositorio esté configurado como `samudex.github.io`
2. Ejecuta el build: `bun run build`
3. Los archivos de `dist/` deben publicarse en la rama principal o en una rama `gh-pages`

Para automatizar el deploy, considera usar GitHub Actions.

## Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── ui/              # Componentes shadcn/ui
│   ├── Header.tsx       # Navegación
│   ├── HeroSection.tsx  # Sección principal
│   ├── AboutSection.tsx # Sobre mí
│   ├── SkillsSection.tsx # Habilidades
│   ├── ExperienceSection.tsx # Experiencia
│   ├── ProjectsSection.tsx # Proyectos
│   ├── EducationSection.tsx # Educación
│   ├── ContactSection.tsx # Contacto
│   └── Footer.tsx       # Pie de página
├── data/
│   └── projects.json    # ⭐ Datos de proyectos (editar aquí)
├── pages/
│   └── Index.tsx        # Página principal
├── index.css            # Estilos globales y diseño
└── main.tsx             # Punto de entrada
```

## Editar Proyectos

Para agregar o modificar proyectos, edita el archivo `src/data/projects.json`:

```json
{
  "slug": "nombre-del-proyecto",
  "title": "Título del Proyecto",
  "description": "Descripción detallada del proyecto...",
  "role": "Full Stack Developer",
  "tech": ["Angular", "NodeJS", "SQL"],
  "highlights": [
    "Logro importante 1",
    "Logro importante 2"
  ],
  "year": 2024,
  "links": {
    "repo": "https://github.com/usuario/repo",
    "demo": "https://demo.ejemplo.com"
  }
}
```

## Personalización

### Colores

Los colores se definen en `src/index.css` usando variables CSS HSL. El tema principal usa tonos azules/grises.

### Tema oscuro

El sitio incluye soporte para tema claro/oscuro con toggle en el header.

## Contacto

- **Email**: deprieto@urbe.edu.ve
- **LinkedIn**: [linkedin.com/in/danielprietog](https://linkedin.com/in/danielprietog)
- **WhatsApp**: [+58 412 668 2072](https://wa.me/584126682072)

---

Hecho con ♥ en Maracaibo, Venezuela
