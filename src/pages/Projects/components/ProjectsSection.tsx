import { projectsSection } from "../constants";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center my-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Proyectos
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsSection.map((p, index) => (
          <ProjectCard
            key={index}
            title={p.title}
            description={p.description}
            imageUrl={p.imageUrl}
            link={p.link}
            buttonText={p.buttonText}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
