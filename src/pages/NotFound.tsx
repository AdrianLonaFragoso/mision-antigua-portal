import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <img
          src="../public/logo-mision.png"
          alt="Not found image"
          className="w-[200px] mx-auto"
        />
        <img
          src="../public/404.png"
          alt="Not found image"
          className="w-[200px] mx-auto"
        />
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Página no encontrada</p>
        <a href="/" className="text-blue-500 hover:text-primary  font-bold">
          Volver a Inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
