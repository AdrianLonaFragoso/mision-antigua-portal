import { X } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const AnnouncementsModal = () => {
  const [open, setOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the target date to September 27, 2025, 9:00 AM
    const targetDate = new Date("2025-09-27T09:00:00-06:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // If the target date has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Initial call
    updateCountdown();

    // Update every second
    const timer = setInterval(updateCountdown, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`bg-black/50 fixed inset-0 z-50 flex items-center justify-center px-3 ${
        open ? "block" : "hidden"
      }`}
    >
      <article className="bg-white rounded-lg shadow-lg min-h-[400px] lg:min-w-[600px] max-w-[800px] p-6 relative h-[90vh] lg:h-auto overflow-auto lg:overflow-hidden">
        <X
          className="h-6 w-6 absolute top-4 right-4 cursor-pointer"
          onClick={() => setOpen(false)}
        />
        <h1 className="text-xl lg:text-2xl font-bold text-secondary text-center">
          Anuncio Importante <br />
          Proxima Asamblea General <br />
          <span className="text-primary">27 de septiembre 2025 | 9:00 AM</span>
        </h1>
        <div className="flex flex-wrap gap-2 justify-center items-baseline my-4">
          <div className="flex flex-col items-center mx-2">
            <span className="text-2xl font-bold text-primary">
              {timeLeft.days}
            </span>
            <span className="text-sm text-muted-foreground">días</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <span className="text-2xl font-bold text-primary">
              {timeLeft.hours}
            </span>
            <span className="text-sm text-muted-foreground">horas</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <span className="text-2xl font-bold text-primary">
              {timeLeft.minutes}
            </span>
            <span className="text-sm text-muted-foreground">minutos</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <span className="text-2xl font-bold text-primary">
              {timeLeft.seconds}
            </span>
            <span className="text-sm text-muted-foreground">segundos</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 justify-center">
          <article
            className="p-5 border rounded-lg"
            onClick={() =>
              window.open(
                "https://www.misionantigua.org/docs/REGLAMENTO_INTERNO_DEL_FRACCIONAMIENTO_MISION_ANTIGUA_RV_050825.pdf",
                "_blank"
              )
            }
          >
            <h2 className="text-md font-bold text-secondary">
              Reglamento del Fraccionamiento
            </h2>
            <img
              src="/reglamento.png"
              alt="Reglamento"
              className="h-[200px] lg:h-[300px] mx-auto mb-3"
            />
            <p className="text-sm text-muted-foreground mb-4">
              En este documento se detallan las reglas y regulaciones que deben
              ser cumplidas por todos los residentes del fraccionamiento.
            </p>
            <Button variant="outline" className="w-full">
              Leer Reglamento
            </Button>
          </article>

          <article
            className="p-5 border rounded-lg"
            onClick={() =>
              window.open(
                "https://www.misionantigua.org/docs/Informe_de_vecinos_mision_antigua.pdf",
                "_blank"
              )
            }
          >
            <h2 className="text-md font-bold text-secondary">
              Convocatoria asamblea general
            </h2>
            <img
              src="/comunicado.png"
              alt="Convocatoria"
              className="h-[200px] lg:h-[300px] mx-auto mb-3"
            />
            <p className="text-sm text-muted-foreground mb-4">
              Se convoca a la asamblea general de los residentes del
              fraccionamiento para discutir y votar sobre el reglamento del
              fraccionamiento.
            </p>
            <Button variant="outline" className="w-full">
              Leer Convocatoria
            </Button>
          </article>
        </div>
      </article>
    </div>
  );
};

export default AnnouncementsModal;
