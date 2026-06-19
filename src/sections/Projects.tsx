import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <h2 className="mb-2 text-3xl font-bold text-white">
          Projects
        </h2>
        <div className="mb-4 h-1 w-12 rounded-full bg-slate-400" />
        <p className="mb-10 text-slate-500">
          Things I&apos;ve built or am currently building.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
