import { Card } from "@/components/ui/card";
import { Languages as LanguagesIcon } from "lucide-react";

const Languages = () => {
  const languages = [
    {
      name: "Español",
      level: "Nativo",
      proficiency: 100,
    },
    {
      name: "Valenciano",
      level: "Nativo",
      proficiency: 100,
    },
    {
      name: "Inglés",
      level: "Intermedio",
      proficiency: 60,
    },
  ];

  return (
    <section id="idiomas" className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Idiomas</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Capacidad de comunicación en múltiples idiomas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-soft border-border/50">
            <div className="grid md:grid-cols-3 gap-8">
              {languages.map((language, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <LanguagesIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{language.name}</h3>
                      <p className="text-sm text-muted-foreground">{language.level}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Dominio</span>
                      <span className="font-medium">{language.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-primary transition-smooth"
                        style={{ width: `${language.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Languages;
