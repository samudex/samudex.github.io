import { useState, useMemo } from "react";
import { ExternalLink, Github, Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import projectsData from "@/data/projects.json";

interface Project {
  slug: string;
  title: string;
  description: string;
  role: string;
  tech: string[];
  highlights: string[];
  year: number;
  links: {
    repo: string;
    demo: string;
  };
}

const projects: Project[] = projectsData;

// Get all unique technologies
const allTechs = [...new Set(projects.flatMap((p) => p.tech))].sort();

export function ProjectsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTech =
        selectedTech === null || project.tech.includes(selectedTech);
      return matchesSearch && matchesTech;
    });
  }, [searchQuery, selectedTech]);

  return (
    <section id="proyectos" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proyectos
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos en los que he trabajado, mostrando mis 
            habilidades técnicas y capacidad de resolver problemas.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar proyectos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={selectedTech === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTech(null)}
            >
              Todos
            </Button>
            {allTechs.map((tech) => (
              <Button
                key={tech}
                variant={selectedTech === tech ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTech(tech)}
              >
                {tech}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="bg-card rounded-lg p-6 card-shadow border border-border hover:card-shadow-hover transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">
                  {project.year}
                </span>
                <Badge variant="outline" className="text-xs">
                  {project.role}
                </Badge>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.tech.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{project.tech.length - 3}
                  </Badge>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No se encontraron proyectos con esos criterios.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedTech(null);
              }}
            >
              Limpiar filtros
            </Button>
          </div>
        )}

        {/* Project Detail Modal */}
        <Dialog
          open={selectedProject !== null}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-2xl">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{selectedProject.role}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {selectedProject.year}
                    </span>
                  </div>
                  <DialogTitle className="text-2xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Tecnologías
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Logros destacados
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-0.5">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {(selectedProject.links.repo || selectedProject.links.demo) && (
                    <div className="flex gap-3 pt-4 border-t border-border">
                      {selectedProject.links.repo && (
                        <Button asChild variant="outline" className="gap-2">
                          <a
                            href={selectedProject.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4" />
                            Ver código
                          </a>
                        </Button>
                      )}
                      {selectedProject.links.demo && (
                        <Button asChild className="gap-2">
                          <a
                            href={selectedProject.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Ver demo
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
