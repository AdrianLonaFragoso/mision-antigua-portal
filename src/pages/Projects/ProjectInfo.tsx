import { useEffect, useState } from "react";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import HeroSecondary from "@/components/HeroSecondary";
import { heroSection } from "./constants";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProjectInfo = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const scrollToGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg",
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentIndex(null);
  };

  const showPrev = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const showNext = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, currentIndex]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSecondary
        title={heroSection.title}
        description={heroSection.description}
        primaryButton={{
          text: "Conoce Más",
          onClick: scrollToGallery,
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
      <section id="gallery" className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center my-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Proyecto Caseta de Vigilancia
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images.map((img, idx) => (
              <button
                key={img}
                type="button"
                className="overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={`/caseta/${img}`}
                  alt={`Galería caseta ${img}`}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 my-12 text-center">
        <Link to="/proyectos">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-primary-light hover:text-white transition-all duration-300 px-8 py-3 text-lg font-semibold shadow-lg"
          >
            Regresar a proyectos
          </Button>
        </Link>
      </div>

      {lightboxOpen && currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/caseta/${images[currentIndex]}`}
              alt={`Imagen ${currentIndex + 1} de ${images.length}`}
              className="max-h-[80vh] w-full object-contain"
            />

            <button
              type="button"
              aria-label="Cerrar"
              className="absolute -top-10 right-0 rounded-md bg-white/10 px-3 py-1.5 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              Cerrar
            </button>

            <button
              type="button"
              aria-label="Anterior"
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-md bg-white/10 px-3 py-2 text-white hover:bg-white/20"
              onClick={showPrev}
            >
              ◀
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-md bg-white/10 px-3 py-2 text-white hover:bg-white/20"
              onClick={showNext}
            >
              ▶
            </button>
          </div>
        </div>
      )}

      <ContactSection />
      <Footer />
    </div>
  );
};

export default ProjectInfo;
