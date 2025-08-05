import HeroSecondary from "@/components/HeroSecondary";
import Navigation from "@/components/Navigation";
import { heroSection } from "./constants";
import Footer from "@/components/Footer";
import SuppliersSection from "./components/SuppliersSection";
import ContactSection from "@/components/ContactSection";

const SuppliersPage = () => {
  const scrollToSection = () => {
    const element = document.getElementById("suppliers");
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
          onClick: scrollToSection,
        }}
        secondaryButton={{
          text: "Proponer proveedor",
          onClick: () =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" }),
        }}
        className="additional-section-classes"
      />
      <SuppliersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default SuppliersPage;
