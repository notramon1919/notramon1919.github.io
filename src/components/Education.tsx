import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap} from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Curso IA y Transformación Digital Orientada a la Empresa",
      institution: "Cámara de Comercio de Castellón",
      period: "2025",
      description:
        "Soft Skills, habilidades digitales para el emprendimiento y Automatización de Procesos.",
      highlights: ["IA", "OpenAI", "n8n", "Flowise", "Loveable"],
      icon: GraduationCap,
    },
    {
      degree: "Técnico Especializado en IA y Big Data",
      institution: "IES Benigasló",
      period: "2024 - 2025",
      description:
        "Especialización en Inteligencia Artificial, Machine Learning y análisis de grandes volúmenes de datos.",
      highlights: ["Python", "MongoDB", "Machine Learning", "Big Data"],
      icon: GraduationCap,
    },
    {
      degree: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      institution: "IES Benigasló",
      period: "2022 - 2024",
      description:
        "Desarrollo de aplicaciones con tecnologías modernas y metodologías ágiles.",
      highlights: ["Vue.js", "Flexygo", "Agile", "Desarrollo de Software"],
      icon: GraduationCap,
    },
    {
      degree: "Técnico en Sistemas Microinformáticos y Redes (SMR)",
      institution: "IES Benigasló",
      period: "2020 - 2022",
      description:
        "Fundamentos de redes informáticas, administración de sistemas y soporte técnico.",
      highlights: ["Redes Informáticas", "Sistemas", "Soporte IT"],
      icon: GraduationCap,
    },
  ];

  return (
    <section id="formacion" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Formación</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Mi recorrido académico en tecnología e informática
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <Card
                key={index}
                className="p-6 md:p-8 shadow-soft hover:shadow-medium transition-smooth border-border/50"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                        <p className="text-lg text-primary font-medium mb-2">{edu.institution}</p>
                      </div>
                      <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                        {edu.period}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <Badge 
                          key={hIndex} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
