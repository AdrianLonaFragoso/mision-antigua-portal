import { regulations } from "../constants";
import RegulationCard from "./DocumentsCard";

const DocumentsSection = () => {
  return (
    <section id="documents" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center my-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Documentos
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      </div>

      <div className="flex flex-wrap gap-4">
        {regulations.map((r) => (
          <RegulationCard
            title={r.title}
            description={r.description}
            documents={r.documents}
            disclaimer={r.disclaimer}
          />
        ))}
      </div>
    </section>
  );
};

export default DocumentsSection;
