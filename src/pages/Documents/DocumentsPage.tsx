import HeroSecondary from "@/components/HeroSecondary";

import { heroSection } from "./constants";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import DocumentsSection from "./components/DocumentsSection";

const DocumentsPage = () => {
  const scrollToDocuments = () => {
    const element = document.getElementById("documents");
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
          onClick: scrollToDocuments,
        }}
        secondaryButton={{
          text: "Tengo dudas?",
          onClick: () =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" }),
        }}
        className="additional-section-classes"
      />
      <DocumentsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default DocumentsPage;
