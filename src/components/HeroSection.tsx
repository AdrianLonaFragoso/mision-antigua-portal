import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-neighborhood.webp";
import heroImageNight from "@/assets/hero-neighborhood-night.webp";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [currentImage, setCurrentImage] = useState(heroImage);

  useEffect(() => {
    const checkTimeAndUpdateImage = () => {
      const now = new Date();

      const hours = now.getHours();

      if (hours >= 19 || hours < 6) {
        // 7 PM a 6 AM
        setCurrentImage(heroImageNight);
      } else {
        setCurrentImage(heroImage);
      }
    };

    // Ejecutar al montar el componente
    checkTimeAndUpdateImage();

    // const interval = setInterval(checkTimeAndUpdateImage, 60000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentImage}
          alt="Misión Antigua Neighborhood"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Misión
          <span className="block text-primary-light">Antigua</span>
        </h1> */}
        <img
          src="/logo-mision-white.png"
          alt="Logo Misión Antigua"
          className="max-w-64 mx-auto"
        />

        <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
          Viviendo con sentido de comunidad
        </p>

        <p className="text-lg md:text-xl mb-12 opacity-90 max-w-3xl mx-auto">
          Un lugar donde la seguridad, la tranquilidad y el espíritu comunitario
          se encuentran para crear el hogar perfecto para tu familia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToAbout}
            className="bg-white text-primary hover:bg-primary-light hover:text-white transition-all duration-300 px-8 py-3 text-lg font-semibold shadow-lg"
          >
            Conoce Más
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-3 text-lg font-semibold"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contactanos
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 text-white animate-bounce">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center hover:text-primary-light transition-colors"
        >
          <span className="text-sm mb-2">Descubre más</span>
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
