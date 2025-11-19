import { Card } from "@/components/ui/card";
import { Database, MonitorSmartphone, Network, BrainCircuit } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: "Inteligencia Artificial",
      description: "Desarrollo e implementación de soluciones basadas en IA y Machine Learning",
    },
    {
      icon: Database,
      title: "Big Data",
      description: "Análisis y procesamiento de grandes volúmenes de datos con librerías de Python y MongoDB",
    },
    {
      icon: MonitorSmartphone,
      title: "Desarrollo de Aplicaciones",
      description: "Creación de aplicaciones con Vue.js, Spring Boot y metodologías Agile",
    },
    {
      icon: Network,
      title: "Redes y Sistemas",
      description: "Administración de redes informáticas y soporte técnico IT",
    },
  ];

  return (
    <section id="sobre-mi" className="py-40 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mí</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>

          {/* Texto más ancho */}
          <div className="text-lg text-muted-foreground space-y-4 text-left max-w-4xl mx-auto">
            <p>
              Tengo 21 años y llevo varios años formándome en el ámbito de la informática. Mi interés
              comenzó en secundaria, cuando descubrí lo apasionante que podía ser crear soluciones
              mediante herramientas tecnológicas.
            </p>
            <p>
              Quienes han trabajado conmigo suelen describirme como una persona observadora y
              perseverante. Me gusta analizar cómo funcionan las cosas, profundizar en los conceptos
              y aplicar lo aprendido en cada proyecto que realizo. Siempre intento aportar ideas
              que mejoren el resultado final.
            </p>
            <p>
              Actualmente, estoy centrado en el potencial que ofrece la inteligencia artificial
              y en las oportunidades que abre para automatizar procesos, resolver problemas reales
              y construir nuevas formas de interactuar con la tecnología.
            </p>
          </div>
        </div>

        {/* Features más anchos */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 shadow-soft hover:shadow-medium transition-smooth border-border/50 hover:border-primary/50"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;