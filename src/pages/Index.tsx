import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Courses from "@/components/Courses";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="divider-line"></div>
      <About />
      <div className="divider-line"></div>
      <Experience />
      <div className="divider-line"></div>
      <Education />
      <div className="divider-line"></div>
      <Courses />
      <div className="divider-line"></div>
      <Projects />
      <div className="divider-line"></div>
      <Languages />
      <div className="divider-line"></div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
