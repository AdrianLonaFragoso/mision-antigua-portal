import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BoardSection from "@/components/BoardSection";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useAuth0 } from "@auth0/auth0-react";

const Index = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {isAuthenticated && <BoardSection />}
      {isAuthenticated && <AnnouncementsSection />}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
