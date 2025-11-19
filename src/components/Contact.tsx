import { Card } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-40 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 justify-center">
          {/* Email */}
          <Card className="flex-1 p-6 md:p-8 shadow-soft border-border/50 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <a
                href="mailto:rmartiadsuara@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                rmartiadsuara@gmail.com
              </a>
            </div>
          </Card>

          {/* Ubicación */}
          <Card className="flex-1 p-6 md:p-8 shadow-soft border-border/50 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Ubicación</h3>
              <p className="text-sm text-muted-foreground">
                Nules, Castellón, España
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
