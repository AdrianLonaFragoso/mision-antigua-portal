import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Settings } from "lucide-react";
import logo from "../../public/mision-app.svg";

type NavigationAppProps = {
  btnBack?: string;
};

const NavigationApp = ({ btnBack = "/app" }: NavigationAppProps) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between mb-3 p-3 bg-background shadow-lgs">
      <Link to={btnBack}>
        <Button
          variant="ghost"
          size="icon"
          className="[&_svg]:!size-6"
          aria-label="Volver"
          title="Volver"
        >
          <ChevronLeft />
        </Button>
      </Link>

      <Link to={"/app"}>
        <Button variant="ghost" aria-label="Logo" title="Logo">
          <img src={logo} alt="Logo" width={150} />
        </Button>
      </Link>

      <Link to={"/perfil"}>
        <Button
          variant="ghost"
          size="icon"
          className="[&_svg]:!size-6"
          aria-label="Configuración"
          title="Configuración"
        >
          <Settings />
        </Button>
      </Link>
    </header>
  );
};

export default NavigationApp;
