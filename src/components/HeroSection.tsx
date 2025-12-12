import { Mail, Linkedin, MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#proyectos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 section-padding"
    >
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Disponible para trabajo remoto
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Daniel Enrique Prieto Gallani
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Ingeniero en Informática y Contador Público |{" "}
            <span className="text-gradient font-semibold">
              Frontend-focused Full Stack Developer
            </span>
          </p>

          <p
            className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Ingeniero en Informática con experiencia en desarrollo Full Stack
            (Angular, NodeJS, HTML, CSS, JavaScript, PHP) y gestión de datos.
            Enfocado en crear soluciones web eficientes y responsivas, optimizar
            sistemas y mejorar la experiencia de usuario.
          </p>

          <div
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Maracaibo, Venezuela
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-3 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button asChild size="lg" className="gap-2">
              <a href="mailto:deprieto@urbe.edu.ve">
                <Mail className="w-4 h-4" />
                Contactar por email
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a
                href="https://linkedin.com/in/danielprietog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a
                href="https://wa.me/584126682072"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          <button
            onClick={scrollToProjects}
            className="mt-16 inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors opacity-0 animate-fade-in cursor-pointer"
            style={{ animationDelay: "0.8s" }}
            aria-label="Ver proyectos"
          >
            <span className="text-sm">Ver proyectos</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
