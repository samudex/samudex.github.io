import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Ingeniería en Informática",
    institution: "Universidad Privada Dr. Rafael Belloso Chacín",
    period: "2017 – 2019",
    type: "degree",
  },
  {
    degree: "Licenciatura en Contaduría Pública",
    institution: "Universidad Privada Dr. Rafael Belloso Chacín",
    period: "2013 – 2017",
    type: "degree",
  },
];

const certifications = [
  {
    name: "Curso Microsoft SQL Server",
    issuer: "URBE",
    date: "2025",
  },
  {
    name: "Curso de Python y Desarrollo Back End",
    issuer: "URBE",
    date: "2024",
  },
  {
    name: "C2 Proficient English EF SET Certificate",
    issuer: "EF SET",
    date: "02/2023",
  },
  {
    name: "Diploma de honor (8 niveles de inglés, promedio 17)",
    issuer: "URBE",
    date: "12/2015",
  },
  {
    name: "Curso de productividad personal",
    issuer: "Santa María la Real Foundation",
    date: "12/2015",
  },
];

export function EducationSection() {
  return (
    <section id="educacion" className="section-padding bg-muted/50">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Educación y Certificaciones
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Formación Académica
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="bg-card rounded-lg p-5 card-shadow border border-border"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certificaciones
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-card rounded-lg p-4 card-shadow border border-border flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-primary whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
