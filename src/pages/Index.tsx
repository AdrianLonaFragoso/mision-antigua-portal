import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BoardSection from "@/components/BoardSection";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BoardSection />
      <AnnouncementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
