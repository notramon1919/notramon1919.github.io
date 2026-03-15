import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Programador IA",
      company: "INIT - UJI",
      location: "Castellón de la Plana, España",
      period: "Abril 2025 - Junio 2025",
      description:
        "Prácticas de programación en el Instituto de las Nuevas Tecnologías de la Imagen (INIT) de la Universitat Jaume I.",
      tags: ["IA", "Python", "Investigación"],
      image: "/images/places/inituji.png"
    },
    {
      title: "Desarrollador Web",
      company: "IN.TR.AM s.r.a",
      location: "Praga, República Checa",
      period: "Junio 2024 - Julio 2024",
      description:
        "Desarrollo de soluciones software durante experiencia en el extranjero.",
      tags: ["Wordpress", "Inglés"],
      image: "/images/places/intram.png"
    },
    {
      title: "Programador SAP",
      company: "Blumaq s.a",
      location: "La Vall d'Uixó, España",
      period: "Marzo 2024 - Mayo 2024",
      description:
        "Desarrollador SAP (ABAP).",
      tags: ["SAP"],
      image: "/images/places/blumaq.png"
    },
    {
      title: "Técnico Sistemas IT",
      company: "STN Cerámicas",
      location: "Nules, España",
      period: "Marzo 2022 - Mayo 2022",
      description:
        "Soporte técnico y mantenimiento de sistemas informáticos en entorno industrial.",
      tags: ["Soporte IT", "Sistemas"],
      image: "/images/places/stn.png"
    },
  ];

  return (
    <section id="experiencia" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiencia</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Mi trayectoria profesional desarrollando
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-0 overflow-hidden shadow-soft hover:shadow-medium transition-smooth border-border/50"
            >
              {/* Imagen superior */}
              <div
                className="relative w-full h-32 md:h-40 overflow-hidden"
                style={{
                  backgroundImage: `url(${exp.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
              </div>

              {/* Contenido */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-lg text-primary font-medium mb-2">{exp.company}</p>
                  </div>

                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
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

export default Experience;
