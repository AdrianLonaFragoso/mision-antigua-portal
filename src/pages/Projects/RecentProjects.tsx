import { useEffect, useState } from "react";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import HeroSecondary from "@/components/HeroSecondary";
import { heroSection } from "./constants";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RecentProjects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const scrollToGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const images = Array.from({ length: 16 }, (_, i) => `${i + 1}.jpeg`);

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
      
      <section id="gallery" className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center my-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Avances Recientes
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
              Seguimos trabajando en la mejora de nuestro fraccionamiento. Aquí puedes ver los últimos avances y trabajos realizados.
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-16 rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-4 border-white">
            <video 
              controls 
              className="w-full aspect-video object-cover"
              poster="/proyectos/1.jpeg" // Optional: using first image as poster
            >
              <source src="/proyectos/17.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images.map((img, idx) => (
              <button
                key={img}
                type="button"
                className="overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-md hover:shadow-xl transition-shadow duration-300"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={`/proyectos/${img}`}
                  alt={`Avance proyecto ${img}`}
                  className="h-64 w-full object-cover hover:scale-105 transition-transform duration-500"
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
            className="bg-white text-primary hover:bg-primary-light hover:text-white transition-all duration-300 px-8 py-3 text-lg font-semibold shadow-lg border border-primary/20"
          >
            Regresar a proyectos
          </Button>
        </Link>
      </div>

      {lightboxOpen && currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/proyectos/${images[currentIndex]}`}
              alt={`Imagen ${currentIndex + 1} de ${images.length}`}
              className="max-h-[80vh] w-full object-contain rounded-lg shadow-2xl"
            />

            <button
              type="button"
              aria-label="Cerrar"
              className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white hover:bg-white/30 transition-colors"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
            </button>

            <button
              type="button"
              aria-label="Anterior"
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/30 transition-colors"
              onClick={showPrev}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/30 transition-colors"
              onClick={showNext}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            
            <div className="absolute -bottom-10 left-0 right-0 text-center text-white/80 font-medium">
              Imagen {currentIndex + 1} de {images.length}
            </div>
          </div>
        </div>
      )}

      <ContactSection />
      <Footer />
    </div>
  );
};

export default RecentProjects;
