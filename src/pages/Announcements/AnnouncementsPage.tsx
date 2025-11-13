import AnnouncementsSection from "@/components/AnnouncementsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavigationApp from "@/components/NavigationApp";

const AnnouncementsPage = () => {
  return (
    <div className="mx-auto">
      <NavigationApp />
      <AnnouncementsSection />
      <Footer />
    </div>
  );
};

export default AnnouncementsPage;
