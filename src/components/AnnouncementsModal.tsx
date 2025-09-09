import { X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const AnnouncementsModal = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`bg-black/50 fixed inset-0 z-50 flex items-center justify-center ${
        open ? "block" : "hidden"
      }`}
    >
      <article className="bg-white rounded-lg shadow-lg min-h-[400px] min-w-[600px] max-w-[800px] p-6 relative">
        <X
          className="h-6 w-6 absolute top-4 right-4 cursor-pointer"
          onClick={() => setOpen(false)}
        />
        <h1 className="text-2xl font-bold text-secondary text-center">
          Anuncio Importante <br />
          Proxima Asamblea General <br />
          27 de septiembre 2025
        </h1>
        <p className="text-lg text-center mb-4">
          Por favor, lea el siguiente con atención los siguientes comunicados:
        </p>
        <div className="flex gap-6 justify-center">
          <article className="p-5 border rounded-lg">
            <h2 className="text-md font-bold text-secondary">
              Reglamento del Fraccionamiento
            </h2>
            <img
              src="src/assets/reglamento.png"
              alt="Reglamento"
              className="lg:h-[300px] mx-auto mb-3"
            />
            <p className="text-sm text-muted-foreground mb-4">
              En este documento se detallan las reglas y regulaciones que deben
              ser cumplidas por todos los residentes del fraccionamiento.
            </p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() =>
                window.open(
                  "https://www.misionantigua.org/docs/REGLAMENTO_INTERNO_DEL_FRACCIONAMIENTO_MISION_ANTIGUA_RV_050825.pdf",
                  "_blank"
                )
              }
            >
              Leer Reglamento
            </Button>
          </article>

          <article className="p-5 border rounded-lg">
            <h2 className="text-md font-bold text-secondary">
              Convocatoria asamblea general
            </h2>
            <img
              src="src/assets/comunicado.png"
              alt="Convocatoria"
              className="lg:h-[300px] mx-auto mb-3"
            />
            <p className="text-sm text-muted-foreground mb-4">
              Se convoca a la asamblea general de los residentes del
              fraccionamiento para discutir y votar sobre el reglamento del
              fraccionamiento.
            </p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() =>
                window.open(
                  "https://www.misionantigua.org/docs/Informe_de_vecinos_mision_antigua.pdf",
                  "_blank"
                )
              }
            >
              Leer Convocatoria
            </Button>
          </article>
        </div>
      </article>
    </div>
  );
};

export default AnnouncementsModal;
