import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Lenguajes",
    skills: ["JavaScript", "Python", "PHP", "SQL", "TypeScript"],
  },
  {
    title: "Frontend",
    skills: ["Angular", "HTML5", "CSS3", "jQuery", "React"],
  },
  {
    title: "Backend",
    skills: ["NodeJS", "Express", "REST APIs"],
  },
  {
    title: "Bases de Datos",
    skills: ["MySQL", "SQL Server", "NoSQL", "MongoDB"],
  },
  {
    title: "CMS",
    skills: ["WordPress", "Joomla", "WPBakery"],
  },
  {
    title: "Herramientas",
    skills: ["Git", "GitHub", "VS Code", "Spreadsheets", "CSV"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Tech Stack
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo para construir 
            soluciones web completas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-lg p-6 card-shadow border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
