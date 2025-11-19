import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/notramon1919"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/ramon-marti"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:rmartiadsuara@gmail.com"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Portfolio.</span>
            <span>Hecho con React y Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
