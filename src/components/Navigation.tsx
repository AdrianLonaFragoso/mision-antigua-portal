import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSectionNavigator } from "@/hooks/navigateToSection";
import {
  Menu,
  X,
  Home,
  Users,
  UserCheck,
  Phone,
  FileChartColumn,
  Container,
  Files,
  PartyPopper,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nosotrosDropDown, setNosotrosDropDown] = useState(false);

  const navigateToSection = useSectionNavigator(setIsOpen);

  const navItems = [
    { id: "/proyectos", label: "Proyectos", icon: FileChartColumn },
    { id: "/#announcements", label: "Avisos", icon: PartyPopper },
    { id: "/proveedores", label: "Proveedores", icon: Container },
    { id: "#board", label: "Mesa Directiva", icon: UserCheck },
    { id: "/documentos", label: "Documentos", icon: Files },
    { id: "#contact", label: "Contacto", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => navigateToSection("#home")}>
              <img
                src="/logo-mision.png"
                alt="Logo Misión Antigua"
                className="h-[50px]"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => navigateToSection("/#home")}
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-accent rounded-md"
              >
                Inicio
              </button>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-accent rounded-md">
                  Nosotros
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem
                    onClick={() => navigateToSection("/#about")}
                  >
                    Acerca de nosotros
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => navigateToSection("/proveedores")}
                  >
                    Proveedores
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigateToSection("#board")}>
                    Mesa Directiva
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateToSection(item.id)}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-accent rounded-md"
                >
                  {item.label}
                </button>
              ))}

              <Button
                variant="outline"
                size="sm"
                className="ml-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => navigateToSection("/login")}
              >
                Acceso Residentes
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button
                onClick={() => navigateToSection("/#home")}
                className="flex items-center text-foreground hover:text-primary hover:bg-accent px-3 py-2 text-base font-medium w-full text-left rounded-md transition-all duration-300"
              >
                <Home className="mr-3 h-4 w-4" />
                Inicio
              </button>

              <div>
                <button
                  className="flex items-center text-foreground px-3 py-2 text-base font-medium w-full text-left"
                  onClick={() => setNosotrosDropDown((prev) => !prev)}
                >
                  <Users className="mr-3 h-4 w-4" />
                  Nosotros
                </button>
                <div
                  className={`pl-6 space-y-1 mt-1 ${
                    nosotrosDropDown === false ? "hidden" : null
                  }`}
                >
                  <button
                    onClick={() => navigateToSection("/#about")}
                    className="flex items-center text-foreground hover:text-primary hover:bg-accent px-3 py-2 text-sm font-medium w-full text-left rounded-md transition-all duration-300"
                  >
                    Acerca de nosotros
                  </button>
                  <button
                    onClick={() => navigateToSection("/proveedores")}
                    className="flex items-center text-foreground hover:text-primary hover:bg-accent px-3 py-2 text-sm font-medium w-full text-left rounded-md transition-all duration-300"
                  >
                    Proveedores
                  </button>
                  <button
                    onClick={() => navigateToSection("#board")}
                    className="flex items-center text-foreground hover:text-primary hover:bg-accent px-3 py-2 text-sm font-medium w-full text-left rounded-md transition-all duration-300"
                  >
                    Mesa Directiva
                  </button>
                </div>
              </div>

              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateToSection(item.id)}
                    className="flex items-center text-foreground hover:text-primary hover:bg-accent px-3 py-2 text-base font-medium w-full text-left rounded-md transition-all duration-300"
                  >
                    <IconComponent className="mr-3 h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Acceso Residentes
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
