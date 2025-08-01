import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, TreePine } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-muted"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nosotros
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Misión Antigua es más que un fraccionamiento; es una comunidad
            comprometida con el bienestar, la seguridad y la calidad de vida de
            nuestros residentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Nuestra Historia
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Fundada con la visión de crear un espacio donde las familias
              puedan crecer y prosperar en un ambiente seguro y armonioso,
              Misión Antigua se ha consolidado como una de las comunidades
              residenciales más valoradas de Querétaro.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde nuestros inicios, hemos mantenido un compromiso firme con la
              excelencia en servicios, la preservación de áreas verdes y el
              fortalecimiento de los lazos comunitarios.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Seguridad
                    </h4>
                    <p className="text-muted-foreground">
                      Vigilancia 24/7 y acceso controlado para la tranquilidad
                      de tu familia.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Comunidad
                    </h4>
                    <p className="text-muted-foreground">
                      Espacios diseñados para fomentar la convivencia y amistad
                      entre vecinos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <TreePine className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Naturaleza
                    </h4>
                    <p className="text-muted-foreground">
                      Amplias áreas verdes y espacios naturales para el
                      bienestar familiar.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-soft">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Misión
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar a nuestros residentes un entorno seguro, limpio y
                armonioso que fomente el desarrollo integral de las familias y
                fortalezca los vínculos comunitarios.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/20 to-accent/30 border-accent/30 shadow-soft">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Visión
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconocidos como la comunidad residencial líder en
                Querétaro, donde la calidad de vida, la seguridad y el sentido
                de pertenencia definen el estilo de vida de nuestros residentes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
