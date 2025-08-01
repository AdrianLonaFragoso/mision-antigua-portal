import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Lock,
  TreePine,
  PlayCircle,
  PartyPopper,
  Trophy,
  Camera,
  Car,
} from "lucide-react";
import securityImage from "@/assets/security-gate.jpg";
import playgroundImage from "@/assets/playground.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "Seguridad 24/7",
      description:
        "Vigilancia continua con personal capacitado para garantizar la seguridad de todos los residentes.",
    },
    {
      icon: Lock,
      title: "Acceso Controlado",
      description:
        "Caseta de vigilancia con control de acceso y registro de visitantes para mayor tranquilidad.",
    },
    {
      icon: TreePine,
      title: "Áreas Verdes",
      description:
        "Amplios jardines y espacios naturales perfectamente mantenidos para el disfrute familiar.",
    },
    {
      icon: PlayCircle,
      title: "Área de Juegos",
      description:
        "Playground moderno y seguro con equipos de alta calidad para la diversión de los niños.",
    },
    // {
    //   icon: PartyPopper,
    //   title: "Salón de Eventos",
    //   description:
    //     "Espacio elegante disponible para celebraciones familiares y eventos comunitarios.",
    // },
    {
      icon: Trophy,
      title: "Cancha Multiusos",
      description:
        "Instalación deportiva versátil para  básquet y actividades recreativas.",
    },
    // {
    //   icon: Camera,
    //   title: "Circuito Cerrado",
    //   description:
    //     "Sistema completo de videovigilancia en puntos estratégicos de la comunidad.",
    // },
    {
      icon: Car,
      title: "Estacionamiento",
      description:
        "Amplios espacios de estacionamiento para residentes y visitantes.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Servicios y Amenidades
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Disfruta de servicios diseñados para tu comodidad, seguridad y
            bienestar
          </p>
        </div>

        {/* Featured Services with Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300">
            <div className="h-64 overflow-hidden">
              <img
                src={securityImage}
                alt="Caseta de Seguridad"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <div className="bg-primary/10 p-2 rounded-lg mr-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Seguridad 24/7
                </h3>
              </div>
              <p className="text-muted-foreground">
                Contamos con personal de seguridad altamente capacitado, caseta
                de vigilancia moderna y sistemas de monitoreo las 24 horas del
                día.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300">
            <div className="h-64 overflow-hidden">
              <img
                src={playgroundImage}
                alt="Área de Juegos"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <div className="bg-primary/10 p-2 rounded-lg mr-3">
                  <PlayCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Recreación Familiar
                </h3>
              </div>
              <p className="text-muted-foreground">
                Espacios recreativos seguros y modernos donde los niños pueden
                jugar mientras los padres disfrutan de un ambiente relajado.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="text-center shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
