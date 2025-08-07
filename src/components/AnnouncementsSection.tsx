import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, PartyPopper } from "lucide-react";

const AnnouncementsSection = () => {
  const announcements = [
    {
      id: 1,
      type: "event",
      title: "Inicio de actividades nueva mesa directiva",
      date: "2025-08-02",
      content:
        "Presentamos oficialmente a los nuevos integrantes de la mesa directiva. Compartiremos planes, proyectos y formas de participación vecinal.",
      icon: PartyPopper,
    },
    {
      id: 2,
      type: "important",
      title: "Lanzamiento del portal de transparencia",
      date: "2025-08-07",
      content:
        "Ya está disponible el nuevo portal con acceso exclusivo para colonos. Consulta facturas, proyectos, actas y reportes de forma segura y clara.",
      icon: PartyPopper,
    },

    // {
    //   id: 3,
    //   type: "info",
    //   title: "Nuevo Horario de Recolección de Basura",
    //   date: "2024-02-10",
    //   content:
    //     "A partir del 1 de marzo, el servicio de recolección de basura será los días martes, jueves y sábados a las 7:00 AM. Por favor saca tus contenedores la noche anterior.",
    //   icon: Info,
    // },
    // {
    //   id: 4,
    //   type: "meeting",
    //   title: "Asamblea General de Residentes",
    //   date: "2024-03-02",
    //   content:
    //     "Te invitamos a la Asamblea General de Residentes que se realizará el primer sábado de marzo a las 10:00 AM en el salón de eventos. Temas importantes a tratar.",
    //   icon: CalendarDays,
    // },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "important":
        return "destructive";
      case "event":
        return "default";
      case "info":
        return "secondary";
      case "meeting":
        return "outline";
      default:
        return "default";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "important":
        return "Importante";
      case "event":
        return "Evento";
      case "info":
        return "Información";
      case "meeting":
        return "Reunión";
      default:
        return "Aviso";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="announcements" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Avisos y Comunicados
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mantente informado sobre las novedades y eventos de nuestra
            comunidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {announcements.map((announcement) => {
            const IconComponent = announcement.icon;
            return (
              <Card
                key={announcement.id}
                className="shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant={getTypeColor(announcement.type)}>
                        {getTypeLabel(announcement.type)}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {formatDate(announcement.date)}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {announcement.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {announcement.content}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Newsletter Subscription */}
        <div className="text-center hidden">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/10 border-primary/20 shadow-soft max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Info className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¿Quieres recibir los avisos por WhatsApp?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Únete a nuestro grupo de WhatsApp para recibir notificaciones
                importantes, avisos de emergencia y recordatorios de eventos
                directamente en tu teléfono.
              </p>
              <a
                href="https://wa.me/5214421234567?text=Hola, me gustaría unirme al grupo de avisos de Misión Antigua"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Unirse al Grupo de WhatsApp
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
