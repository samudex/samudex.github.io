import { Code2, Database, Globe, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Interfaces modernas y responsivas con Angular, React y CSS avanzado.",
  },
  {
    icon: Database,
    title: "Backend & Datos",
    description: "APIs robustas con NodeJS, gestión de bases de datos SQL y NoSQL.",
  },
  {
    icon: Globe,
    title: "Web Completa",
    description: "Desarrollo end-to-end desde el diseño hasta el deployment.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Experiencia trabajando en equipos ágiles y comunicación efectiva.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="section-padding bg-muted/50">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre mí
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground mb-4">
            Soy un desarrollador apasionado por crear experiencias web que combinan 
            funcionalidad robusta con interfaces intuitivas. Mi formación dual en 
            Ingeniería Informática y Contaduría me brinda una perspectiva única para 
            entender tanto los aspectos técnicos como las necesidades del negocio.
          </p>
          <p className="text-lg text-muted-foreground">
            Actualmente busco oportunidades{" "}
            <span className="text-primary font-medium">remotas</span> como desarrollador, 
            con enfoque fuerte en{" "}
            <span className="text-primary font-medium">frontend</span> y capacidad 
            full stack. Me especializo en Angular y NodeJS, pero siempre estoy 
            aprendiendo nuevas tecnologías.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="bg-card rounded-lg p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
