import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/ui/Marquee";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { profile } from "@/data/profile";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="noise-overlay" aria-hidden="true" />
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>

      <ScrollProgress />
      <Header />

      <main id="contenido" tabIndex={-1}>
        <Hero />
        <Marquee items={profile.stackTicker} />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
