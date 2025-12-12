import { Mail, Phone, Linkedin, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "deprieto@urbe.edu.ve",
    href: "mailto:deprieto@urbe.edu.ve",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+58 412 668 2072",
    href: "tel:+584126682072",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "danielprietog",
    href: "https://linkedin.com/in/danielprietog",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+58 412 668 2072",
    href: "https://wa.me/584126682072",
  },
];

export function ContactSection() {
  return (
    <section id="contacto" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Trabajamos juntos?
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estoy buscando oportunidades de trabajo remoto. Si tienes un proyecto 
            interesante o quieres hablar sobre posibles colaboraciones, 
            ¡me encantaría saber de ti!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl p-8 card-shadow border border-border">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <MapPin className="w-4 h-4" />
              <span>Maracaibo, Venezuela • Disponible para trabajo remoto</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <a href="mailto:deprieto@urbe.edu.ve">
                  <Mail className="w-4 h-4" />
                  Enviar email
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a
                  href="https://linkedin.com/in/danielprietog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                  Conectar en LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
