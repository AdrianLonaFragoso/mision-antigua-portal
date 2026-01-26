import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HeroSectionEvent from "@/components/HeroSectionEvent";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BoardSection from "@/components/BoardSection";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useAuth0 } from "@auth0/auth0-react";
// import UserMetadata from "@/components/UserMetadata";
// import AnnouncementsModal from "@/components/AnnouncementsModal";

// Flag to toggle between default Hero and Event Hero
const SHOW_EVENT_HERO = false;

const Index = () => {
  const { isAuthenticated, user } = useAuth0();
  console.log(user);
  return (
    <div className="min-h-screen">
      <Navigation />
      {SHOW_EVENT_HERO ? <HeroSectionEvent /> : <HeroSection />}
      <AboutSection />
      <ServicesSection />
      {isAuthenticated && <BoardSection />}
      {isAuthenticated && <AnnouncementsSection />}
      {/* <UserMetadata /> */}
      <ContactSection />
      <Footer />
      {/* <AnnouncementsModal /> */}
    </div>
  );
};

export default Index;
