import HeroSecondary from "@/components/HeroSecondary";

import { heroSection } from "./constants";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  const scrollPrivacy = () => {
    const element = document.getElementById("privacy");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSecondary
        title={heroSection.title}
        description={heroSection.description}
        primaryButton={{
          text: "Conoce Más",
          onClick: scrollPrivacy,
        }}
        className="additional-section-classes"
      />
      <section id="privacy" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center my-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Aviso de privacidad
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <p className="mb-4">
          <strong>Fraccionamiento Misión Antigua</strong>, con domicilio en
          Querétaro, México, y sitio web
          <a
            href="https://www.misionantigua.org"
            className="text-primary underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.misionantigua.org
          </a>
          , en su calidad de Mesa Directiva, es responsable del tratamiento de
          los datos personales que se recaben a través de este portal digital,
          así como de su uso, protección y confidencialidad conforme a lo
          establecido por la
          <strong className="ml-1">
            Ley Federal de Protección de Datos Personales en Posesión de los
            Particulares.
          </strong>
        </p>

        <section>
          <h2 className="text-2xl font-semibold  text-primary mb-2">
            Finalidades del Tratamiento de Datos
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Comunicación efectiva entre la mesa directiva y los colonos y
              propietarios.
            </li>
            <li>
              Difusión de documentos relevantes como cotizaciones, facturas,
              proyectos, actas, avisos y otros documentos administrativos del
              fraccionamiento.
            </li>
            <li>
              Gestión de asuntos relacionados con seguridad, mantenimiento,
              eventos comunitarios y administración general del fraccionamiento.
            </li>
          </ul>
          <p className="mt-4">
            En caso de recabar <strong>datos sensibles</strong>, estos serán
            tratados bajo estrictas medidas de seguridad y confidencialidad, y
            sólo estarán disponibles para personas debidamente autorizadas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold  text-primary mb-2">
            Medidas de Seguridad y Acceso
          </h2>
          <p>
            El acceso a documentos con datos personales o información sensible
            estará restringido exclusivamente a colonos y propietarios mediante
            mecanismos de autenticación como contraseñas o accesos privados.
          </p>
          <p className="mt-2">
            Los datos compartidos en este sitio
            <strong>
              no serán transferidos a terceros sin el consentimiento previo del
              titular
            </strong>
            , salvo en los casos permitidos por la ley.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold  text-primary mb-2">
            Derechos ARCO
          </h2>
          <p>
            Usted tiene derecho a <strong>Acceder</strong>,
            <strong>Rectificar</strong>, <strong>Cancelar</strong> u
            <strong>Oponerse</strong> al tratamiento de sus datos personales
            (Derechos ARCO).
          </p>
          <p className="mt-2">
            Para ejercer estos derechos, puede ponerse en contacto con la mesa
            directiva mediante los medios disponibles en este sitio web o
            escribiendo al correo electrónico:
            <span className=" text-primary font-medium">
              [correo@misionantigua.org]
            </span>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold  text-primary mb-2">
            Cambios al Aviso de Privacidad
          </h2>
          <p>
            Este Aviso de Privacidad puede ser modificado en cualquier momento
            debido a cambios legislativos, necesidades internas o mejoras en
            nuestros procesos. Las modificaciones serán publicadas oportunamente
            en este mismo sitio web.
          </p>
        </section>

        <p className="text-sm text-gray-600 text-right mt-6">
          Última actualización: 7 de agosto de 2025
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
