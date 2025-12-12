import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Inimble",
    period: "09/2024 – 12/2024",
    description: [
      "Implementación de funcionalidades y correcciones en Angular y NodeJS, mejorando estabilidad y rendimiento.",
      "Desarrollo de landing pages responsivas en WordPress con WPBakery.",
    ],
  },
  {
    title: "Junior Full Stack Developer",
    company: "QUIKPAGO",
    period: "05/2023 – 08/2024",
    description: [
      "Desarrollo y mantenimiento de aplicaciones con Angular, NodeJS y bases de datos.",
      "Implementación de nuevas features y corrección de bugs en sistemas existentes.",
    ],
  },
  {
    title: "Coordinador de Data Entry",
    company: "QUIKPAGO",
    period: "10/2020 – 04/2023",
    description: [
      "Automatización de procesos de carga y actualización usando JavaScript en Spreadsheets/CSV.",
      "Gestión de ~400 perfiles de comercios y capacitación a asistentes.",
    ],
  },
  {
    title: "Web Developer",
    company: "Tesla Media Group",
    period: "08/2018 – 03/2020",
    description: [
      "Desarrollo de sitios informativos con HTML/CSS/JS/PHP y Joomla.",
      "Conversión de diseños gráficos a código responsive con mejor semántica HTML.",
      "Rediseño, optimización e integración de componentes web.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experiencia" className="section-padding bg-muted/50">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experiencia Profesional
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className={`relative flex flex-col md:flex-row gap-4 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                {/* Content */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                  }`}
                >
                  <div className="bg-card rounded-lg p-6 card-shadow border border-border">
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        index % 2 === 0 ? "" : "md:justify-end"
                      }`}
                    >
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {exp.company}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <div
                      className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${
                        index % 2 === 0 ? "" : "md:justify-end"
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <ul
                      className={`space-y-2 ${
                        index % 2 === 0 ? "" : "md:text-left"
                      }`}
                    >
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
