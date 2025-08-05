import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import HeroSecondary from "@/components/HeroSecondary";
import { heroSection } from "./constants";
import ProjectsSection from "@/pages/Projects/components/ProjectsSection";

const ProjectsPage = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSecondary
        title={heroSection.title}
        description={heroSection.description}
        primaryButton={{
          text: "Conoce Más",
          onClick: scrollToProjects,
        }}
        secondaryButton={{
          text: "Proponer proyecto",
          onClick: () =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" }),
        }}
        className="additional-section-classes"
      />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
