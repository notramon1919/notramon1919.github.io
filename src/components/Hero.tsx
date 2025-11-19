import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen gradient-hero flex items-center pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-medium">
                <img
                  src="/images/me.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-medium text-sm">Programador & Desarrollador</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Ramón Martí
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Especializado en IA, Big Data y desarrollo de aplicaciones. Curioso y minucioso, me apasiona explorar las posibilidades de la inteligencia artificial.
              <br />
              <br />
              <strong>
                Mi contratación está bonificada con hasta 5.000€.
                <br />
                <a
                  href="https://www.camaracastellon.com/es/empleo/ayudas-contratacion-talento-joven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline hover:text-accent transition"
                >
                  Más información aquí
                </a>
              </strong>

            </p>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-soft" asChild>
                <a href="#contacto" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <Mail className="mr-2 h-5 w-5" />
                  Contáctame
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/notramon1919"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card shadow-soft flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ram%C3%B3n-mart%C3%AD-adsuara/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card shadow-soft flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:rmartiadsuara@gmail.com"
                className="w-12 h-12 rounded-full bg-card shadow-soft flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
