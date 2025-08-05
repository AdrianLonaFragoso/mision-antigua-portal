// src/hooks/useSectionNavigator.ts
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

export const useSectionNavigator = (setIsOpen: (open: boolean) => void) => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTarget = useRef<string | null>(null);

  // Scroll después de navegación
  useEffect(() => {
    if (scrollTarget.current) {
      const elementId = scrollTarget.current;
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      scrollTarget.current = null;
    }
  }, [location.pathname]);

  // Scroll en carga inicial si hay hash
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1);
      const el = document.getElementById(elementId);
      if (el) {
        // Timeout por si el DOM aún no ha montado el elemento
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const navigateToSection = (target: string) => {
    if (target.startsWith("#")) {
      const elementId = target.substring(1);

      if (location.pathname !== "/") {
        scrollTarget.current = elementId;
        navigate("/#" + elementId); // Agregamos el hash a la URL también
      } else {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          // Si el elemento aún no existe, forzamos scroll en el siguiente efecto
          scrollTarget.current = elementId;
        }
      }
    } else {
      navigate(target);
    }

    setIsOpen(false);
  };

  return navigateToSection;
};
