import HeroSecondary from "@/components/HeroSecondary";

import { heroSection } from "./constants";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const RegulationsPage = () => {
  const scrollToRegulations = () => {
    const element = document.getElementById("regulations");
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
          onClick: scrollToRegulations,
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

      <section className="min-h-screen bg-primary"></section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default RegulationsPage;
