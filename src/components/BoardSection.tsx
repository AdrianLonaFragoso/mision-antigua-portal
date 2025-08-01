import { Card, CardContent } from "@/components/ui/card";
import { User, Mail, Phone } from "lucide-react";

const BoardSection = () => {
  const boardMembers = [
    {
      position: "Presidente",
      name: "Lic. Irma",
      email: "presidente@misionantigua.com",
      description:
        "Coordina las actividades generales de la comunidad y representa oficialmente al fraccionamiento.",
    },
    {
      position: "Secretario",
      name: "Ing. Jesus",
      email: "secretario@misionantigua.com",
      description:
        "Gestiona la documentación oficial y mantiene el registro de todas las sesiones del consejo.",
    },
    {
      position: "Tesorero",
      name: "C.P. Sandra ",
      email: "tesorero@misionantigua.com",
      description:
        "Administra los recursos económicos y supervisa el cumplimiento del presupuesto comunitario.",
    },
    {
      position: "Vocal",
      name: "Sr. Arturo Méndez",
      email: "arturo@misionantigua.com",
      description:
        "Apoyo a actividades varias de administración y vigilancia de actividades.",
    },
    {
      position: "Representante de Vigilancia",
      name: "Mtra. Jeanet Rosales",
      email: "vigilancia@misionantigua.com",
      description:
        "Supervisa las actividades del comité asegurando el cumplimiento de los reglamentos y procedimientos.",
    },
    {
      position: "Comité de comunicación",
      name: "R11",
      email: "comunicacion@misionantigua.com",
      description:
        "Se encarga de difundir información importante para los vecinos y propietarios.",
    },
  ];

  return (
    <section
      id="board"
      className="py-20 bg-gradient-to-b from-muted to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mesa Directiva
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conoce a nuestro dedicado equipo de liderazgo comunitario
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.position}
                  </h3>
                  <p className="text-lg text-primary font-medium mb-3">
                    {member.name}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {member.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/10 border-primary/20 shadow-soft max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¿Tienes alguna sugerencia o inquietud?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nuestro equipo directivo está siempre disponible para escuchar a
                los residentes. Puedes contactar directamente al área
                correspondiente o asistir a nuestras reuniones mensuales que se
                realizan el primer sábado de cada mes.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  <span>Reuniones: Primer sábado del mes</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  <span>Horario: 10:00 AM - Salón de Eventos</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BoardSection;
