import {
  MapPin,
  Phone,
  Mail,
  // Facebook,
  // Instagram,
  // Twitter,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img
              src="/logo-mision-grey.png"
              alt="Logo Misión Antigua"
              className="h-[100px]"
            />
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Una comunidad residencial comprometida con la seguridad, el
              bienestar y la calidad de vida de nuestros residentes. Viviendo
              con sentido de comunidad.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("board")}
                  className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
                >
                  Mesa Directiva
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("announcements")}
                  className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
                >
                  Avisos
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-primary-foreground/60" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    Misión Antigua, Tejeda, Corregidora
                    <br />
                    Querétaro, México
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 hidden">
                <Phone className="h-5 w-5 text-primary-foreground/60" />
                <p className="text-primary-foreground/80 text-sm">
                  +52 442 123 4567
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/60" />
                <p className="text-primary-foreground/80 text-sm">
                  contacto@misionantigua.org
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © {currentYear} Misión Antigua. Todos los derechos reservados.
              <br />
              <b>Sitio Web donado por el Comité de comunicación.</b> <br />
              <p>
                Powered by:
                <a
                  href="https://hypernetics.com.mx/"
                  target="_blank"
                  className="font-bold underline"
                >
                  HYPERNETICS
                </a>
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="/aviso-de-privacidad"
                className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
              >
                Términos de Uso
              </a>
              <a
                href="http://misionantigua.org/docs/REGLAMENTO_INTERNO_DEL_FRACCIONAMIENTO_MISION_ANTIGUA_RV_050825.pdf"
                target="_blank"
                className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
              >
                Reglamento Interno
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
