import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("August 9, 2025 18:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-background text-foreground">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src="/logo-mision.png" // Reemplaza con la ruta de tu logo
            alt="Logo"
            className="h-40 w-auto"
          />
        </div>

        {/* Mensaje principal */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          Sección en Construcción
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Estamos trabajando duro para brindarte una mejor experiencia. ¡Vuelve
          pronto para descubrir las novedades!
        </p>

        {/* Cuenta regresiva */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-secondary">
            Lanzamiento el 9 de Agosto 2025
          </h2>

          <div className="flex justify-center gap-4">
            <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
              <div className="text-3xl font-bold text-primary">
                {timeLeft.days}
              </div>
              <div className="text-sm text-muted-foreground">Días</div>
            </div>

            <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
              <div className="text-3xl font-bold text-primary">
                {timeLeft.hours}
              </div>
              <div className="text-sm text-muted-foreground">Horas</div>
            </div>

            <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
              <div className="text-3xl font-bold text-primary">
                {timeLeft.minutes}
              </div>
              <div className="text-sm text-muted-foreground">Minutos</div>
            </div>

            <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
              <div className="text-3xl font-bold text-primary">
                {timeLeft.seconds}
              </div>
              <div className="text-sm text-muted-foreground">Segundos</div>
            </div>
          </div>
        </div>

        {/* Botón de regreso */}
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary-dark transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
};

export default LoginPage;
