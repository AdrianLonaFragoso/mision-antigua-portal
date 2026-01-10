import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImageDay from "@/assets/hero-neighborhood.webp";
import heroImageNight from "@/assets/hero-neighborhood-night.webp";
import { HeroImage } from "./HeroImage";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const HeroSectionEvent = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set the date we're counting down to: Jan 10, 2026 9:00:00 AM CST (UTC-6)
    const countDownDate = new Date("2026-01-10T09:00:00-06:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateTimer(); // Run immediately
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 sm:mx-4">
      <div className="text-3xl sm:text-5xl font-bold bg-white/20 backdrop-blur-md rounded-lg p-2 sm:p-4 min-w-[60px] sm:min-w-[80px]">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs sm:text-sm uppercase mt-2 font-medium tracking-wider">{label}</div>
    </div>
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <HeroImage
          heroImageDay={heroImageDay}
          heroImageNight={heroImageNight}
        />
        {/* Changed gradient to differentiate visually - Event Theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-indigo-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* <div className="mb-6 inline-flex items-center gap-2 bg-yellow-500 text-black px-6 py-1.5 rounded-full font-bold uppercase tracking-wide shadow-lg transform hover:scale-105 transition-transform cursor-default">
          <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
          Edición Especial
        </div> */}
        
        <img
          src="/logo-mision-white.png"
          alt="Logo Misión Antigua"
          className="max-w-48 sm:max-w-64 mx-auto mb-6 drop-shadow-lg"
        />

        <p className="text-xl md:text-3xl mb-4 font-light max-w-3xl mx-auto leading-relaxed">
           Asamblea Informativa
        </p>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-10 text-white">
          <TimeUnit value={timeLeft.days} label="Días" />
          <TimeUnit value={timeLeft.hours} label="Horas" />
          <TimeUnit value={timeLeft.minutes} label="Min" />
          <TimeUnit value={timeLeft.seconds} label="Seg" />
        </div>

        <p className="text-lg md:text-xl mb-8 opacity-95 max-w-3xl mx-auto bg-black/30 p-6 rounded-xl backdrop-blur-sm border border-white/10">
          Te invitamos a ser parte de nuestra primera asamblea informativa el <strong>Sábado 10 de Enero de 2026</strong> a las <strong>9:00 AM</strong>. 
          Tu participación es fundamental para seguir construyendo la comunidad que todos deseamos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-purple-900 hover:bg-gray-100 transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Detalles del Evento
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl h-[80vh] flex flex-col p-0 gap-0 bg-white/95 backdrop-blur-xl border-white/20">
              <DialogHeader className="p-6 pb-2 shrink-0">
                <DialogTitle className="text-2xl font-bold text-center text-purple-900">
                  CONVOCATORIA ASAMBLEA GENERAL ORDINARIA
                </DialogTitle>
                <DialogDescription className="text-center text-gray-600">
                  Corregidora, Querétaro a 23 de diciembre de 2025
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="flex-1 p-6 pt-2">
                <div className="space-y-6 text-gray-800 text-sm md:text-base leading-relaxed">
                  <div className="font-bold text-lg">FRACCIONAMIENTO MISION ANTIGUA, A.C. PRESENTE.</div>
                  <p className="text-justify">
                    Estimados Asociados, con fundamentos en lo dispuesto por la fracción I del artículo
                    264, 265, 267, 268, 269, 270 y 272 del código urbano para el estado de Querétaro. El comité Directivo ubicado en Av. El centenario No. 39 Col. Tejeda (Misión antigua). Municipio de Corregidora C.P. 76904 en esta ciudad de Querétaro, convoca a decisiones que se deban tomar, o en su defecto dar aviso al propietario para que asista.
                  </p>
                  
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                    <h3 className="font-bold text-center text-lg mb-4 text-purple-900">ORDEN DEL DÍA</h3>
                    <ol className="list-decimal list-inside space-y-3 pl-2">
                      <li>Lista de asistencia, determinación de Quorum e instalación de la asamblea.</li>
                      <li>Nombramiento de 2 escrutadores y un moderador.</li>
                      <li>Información financiera actual.</li>
                      <li>Finalización del proyecto del portón.</li>
                      <li>Entrega de Códigos para acceso al portón exclusivamente se darán en la junta.</li>
                      <li>Informe FINAL de la protocolización.</li>
                      <li>Informar del cese de funciones de la actual mesa directiva y la entrega de funciones a la mesa directiva anterior hasta que se realicen las correcciones pertinentes.</li>
                      <li>Información que nos dio el notario sobre las limitantes de un fraccionamiento.</li>
                      <li>Asuntos varios: Donaciones, Observaciones sobre áreas de oportunidad con respecto a la conclusión de portón, Observaciones respecto a la vigilancia concluyendo el proyecto del portón.</li>
                    </ol>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-sm">
                    <p className="font-semibold text-yellow-900 mb-2">DETALLES DE LA CONVOCATORIA</p>
                    <p className="text-justify">
                      <strong>ASAMBLEA GENERAL ORDINARIA</strong>, a los residentes del fraccionamiento Misión Antigua, que se realizará en el área verde:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 mb-2 ml-2">
                      <li><strong>Sábado 10 de enero del 2026</strong></li>
                      <li><strong>9:00 AM</strong> - Primera convocatoria</li>
                      <li><strong>9:05 AM</strong> - Segunda convocatoria</li>
                      <li><strong>9:10 AM</strong> - Inicio con quorum legal</li>
                    </ul>
                    <p className="text-justify italic">
                      Por lo que se solicita a los Asociados (Arrendatarios, usufructuarios y usuarios) asistir con una carta poder, a fin de que su voto sea debidamente computado para la toma de decisiones.
                    </p>
                  </div>

                  <div className="text-center pt-8 pb-4">
                    <p className="font-bold">ATENTAMENTE</p>
                    <p className="text-purple-900 font-semibold">“MESA DIRECTIVA “FRACCIONAMIENTO MISION ANTIGUA, A.C.”</p>
                  </div>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-white text-blue-600 border-white hover:bg-gray-100 transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
            onClick={() => window.open('https://meet.google.com/tcw-makx-sin', '_blank')}
          >
            <img src="/glogo.png" alt="Google Logo" className="w-6 h-6" />
            Unirse por Google Meet
          </Button>

          <Button
            size="lg"
            className="w-full sm:w-auto bg-cyan-600 text-white hover:bg-cyan-700 transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
            onClick={() => navigate('/recent-projects')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-images"><path d="M18 22H4a2 2 0 0 1-2-2V6"/><path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"/><circle cx="12" cy="8" r="2"/><rect width="16" height="16" x="6" y="2" rx="2"/></svg>
            Últimos proyectos
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 text-white animate-bounce hidden sm:block">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center hover:text-yellow-400 transition-colors"
        >
          <span className="text-sm mb-2 opacity-80">Ver agenda del día</span>
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSectionEvent;
