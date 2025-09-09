import Navigation from "@/components/Navigation";
import UserMetadata from "@/components/UserMetadata";
import { heroSection } from "./constants";
import HeroSecondary from "@/components/HeroSecondary";

const ProfilePage = () => {
  return (
    <>
      <Navigation />
      <HeroSecondary
        title={heroSection.title}
        description={heroSection.description}
        primaryButton={{
          text: "Conoce Más",
          className: "hidden",
        }}
        secondaryButton={{
          text: "Proponer proveedor",
          className: "hidden",
        }}
        className="additional-section-classes"
      />
      <UserMetadata />
    </>
  );
};

export default ProfilePage;
