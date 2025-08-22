import { useState, useEffect } from "react";

export const HeroImage = ({ heroImageDay, heroImageNight }) => {
  const [currentImage, setCurrentImage] = useState(heroImageDay);

  useEffect(() => {
    // 1. Función para obtener la hora en CDMX (México)
    const getMexicoCityHour = () => {
      try {
        // Usamos Intl.DateTimeFormat para precisión en zona horaria
        const formatter = new Intl.DateTimeFormat("es-MX", {
          timeZone: "America/Mexico_City",
          hour: "numeric",
          hour12: false,
        });
        return parseInt(formatter.format(new Date()));
      } catch (error) {
        // Fallback por si el navegador no soporta Intl.DateTimeFormat
        console.warn("Usando hora local como fallback:", error);
        return new Date().getHours(); // Hora local del navegador
      }
    };

    // 2. Actualizar la imagen según la hora
    const updateImageBasedOnTime = () => {
      const currentHour = getMexicoCityHour();
      const isNightTime = currentHour >= 19 || currentHour < 6; // 7 PM - 6 AM
      setCurrentImage(isNightTime ? heroImageNight : heroImageDay);
    };

    // Ejecutar al montar el componente
    updateImageBasedOnTime();

    // 3. Actualizar cada hora (en lugar de cada minuto, para mejor rendimiento)
    const intervalId = setInterval(updateImageBasedOnTime, 60 * 60 * 1000); // 1 hora

    // Limpiar intervalo al desmontar
    return () => clearInterval(intervalId);
  }, [heroImageDay, heroImageNight]);

  return (
    <img
      src={currentImage}
      alt="Misión Antigua Neighborhood"
      className="w-full h-full object-cover"
      loading="lazy" // Lazy loading para mejor performance
    />
  );
};
