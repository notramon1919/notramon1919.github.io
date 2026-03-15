import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "customrag4all",
      link: "https://github.com",
      description:
        "Solución integral de RAG personalizable que permite indexar y consultar documentos locales mediante LLMs. Facilita la creación de un sistema de preguntas y respuestas eficiente, priorizando la privacidad y la precisión de los datos.",
      tags: ["RAG", "Python", "IA", "ChromaDB", "Ollama", "Flask"]
    }
  ];

  return (
    <section id="proyectos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos Personales</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Selección de proyectos destacados y contribuciones técnicas
          </p>
        </div>

        <div className={`max-w-4xl mx-auto grid gap-6 ${projects.length === 1 ? 'grid-cols-1 justify-items-center' : 'grid-cols-1 md:grid-cols-2'}`}>
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-0 overflow-hidden shadow-soft hover:shadow-medium transition-smooth border-border/50"
            >

              {/* Contenido */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-lg text-primary font-medium mb-2"><a href={project.link} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                      github.com
                    </a></p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
