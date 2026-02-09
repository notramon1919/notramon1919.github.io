import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Python TOTAL - Programador Avanzado en 16 días",
      provider: "Udemy",
      date: "2026",
      description:
        "Programa intensivo de 16 días con 16 proyectos REALES y 160 ejercicios de código. Aprendizaje desde fundamentos hasta aplicaciones avanzadas en Machine Learning, Data Science, Django, Interfaces Gráficas y Videojuegos.",
      skills: ["Python", "OOP", "Machine Learning", "Data Science", "Django", "PyGame", "Web Scraping", "AI"],
      icon: BookOpen,
      certificateUrl: "https://www.udemy.com/certificate/UC-d3c98660-567c-4e29-b03d-9fc0291de8b0/",
    },
  ];

  return (
    <section id="cursos" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cursos Realizados</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Formación complementaria y especialización en diversas tecnologías
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {courses.map((course, index) => {
            const Icon = course.icon;
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
                        <h3 className="text-xl font-bold mb-1">{course.title}</h3>
                        <p className="text-lg text-primary font-medium mb-2">{course.provider}</p>
                      </div>
                      <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                        {course.date}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{course.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.skills.map((skill, sIndex) => (
                        <Badge 
                          key={sIndex} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    {course.certificateUrl && (
                      <a 
                        href={course.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-medium text-primary hover:underline"
                      >
                        Ver certificado →
                      </a>
                    )}
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

export default Courses;
