import Navigation from "@/components/Navigation";
import ColorCard from "./components/ColorCard";
import HeroSecondary from "@/components/HeroSecondary";
import { heroSection } from "./constants";
import { Button } from "@/components/ui/button";

const ColorPalettePage = () => {
  return (
    <>
      <Navigation />
      <HeroSecondary
        title={heroSection.title}
        description={heroSection.description}
        primaryButton={{
          text: "Conoce Más",
          className: "hidden",
        }}
        secondaryButton={{
          text: "Proponer proveedor",
          className: "hidden",
        }}
        className="additional-section-classes"
      />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Muestras de color</h1>
        <div className="grid gap-6 lg:grid-cols-4">
          <ColorCard
            code="CW030"
            subtitle="versión del fraccionamiento CECSA"
            hexColor="#E6E6E6"
          />
          <ColorCard
            code="OSTRA"
            subtitle="versión del fraccionamiento CECSA"
            hexColor="#F7F7F5"
          />
        </div>

        <section id="ubication" className="py-10">
          <h2 className="text-2xl font-semibold mb-2">Ubicación</h2>
          <p className="text-muted-foreground">
            Ubicación de la muestras de color
          </p>
          <div className="w-full grid lg:grid-cols-4 gap-4 py-4">
            <article className="bg-white p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Osel 5 de febrero</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.3937861841164!2d-100.4213099341241!3d20.612799870787924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35a95b0a23d97%3A0x6cf1c6e6262aabeb!2sIncusa%2C%20Pinturas%20Osel%20(Av.%205%20de%20Febrero)!5e0!3m2!1ses!2smx!4v1756410376595!5m2!1ses!2smx"
                width="100%"
                height="300"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p className="text-muted-foreground py-4">
                Av. 5 de Febrero 269, Carrillo, 76120 Santiago de Querétaro,
                Qro.
              </p>

              <Button
                onClick={() => {
                  (document.location.href =
                    "https://www.google.com/maps/place/Incusa,+Pinturas+Osel+(Av.+5+de+Febrero)/@20.6127999,-100.4213099,17z/data=!4m6!3m5!1s0x85d35a95b0a23d97:0x6cf1c6e6262aabeb!8m2!3d20.6131216!4d-100.4204713!16s%2Fg%2F1thd70fb?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"),
                    "_blank";
                }}
                className="w-full"
              >
                Ver ubicación
              </Button>
            </article>

            <article className="bg-white p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Osel Zaragoza</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.88024976514!2d-100.4112474!3d20.552080000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d34559e0030f11%3A0xf0b1c669ad0a54ef!2sIncusa%2C%20Pinturas%20Osel!5e0!3m2!1ses!2smx!4v1756410726764!5m2!1ses!2smx"
                width="100%"
                height="300"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p className="text-muted-foreground py-4">
                Prol Zaragoza 1065-B y C, Col, Valle de los Olivos, 76902 San
                José de los Olvera, Qro.
              </p>

              <Button
                onClick={() => {
                  (document.location.href =
                    "https://www.google.com/maps/place/Incusa,+Pinturas+Osel/@20.55208,-100.4112474,17z/data=!3m1!4b1!4m6!3m5!1s0x85d34559e0030f11:0xf0b1c669ad0a54ef!8m2!3d20.55208!4d-100.4112474!16s%2Fg%2F11cmt7kh1m?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"),
                    "_blank";
                }}
                className="w-full"
              >
                Ver ubicación
              </Button>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default ColorPalettePage;
