import { Card } from "@/components/ui/card";
import { Languages as LanguagesIcon } from "lucide-react";

const Languages = () => {
  const languages = [
    {
      name: "Español",
      level: "Nativo",
      proficiency: 100,
      icon: "/images/languages/español.png"
    },
    {
      name: "Valenciano",
      level: "Nativo",
      proficiency: 100,
      icon: "/images/languages/valenciano.png"
    },
    {
      name: "Inglés",
      level: "Intermedio",
      proficiency: 60,
      icon: "/images/languages/ingles.png"
    },
  ];

  return (
    <section id="idiomas" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Idiomas</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Capacidad de comunicación en múltiples idiomas
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {languages.map((language, index) => (
            <Card
              key={index}
              className="p-6 shadow-soft hover:shadow-medium transition-smooth border-border/50 hover:border-primary/50"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{language.name}</h3>
                  <p className="text-sm text-muted-foreground">{language.level}</p>
                </div>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <img src={language.icon} alt={language.name} className="h-10 w-10 object-contain" />
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
