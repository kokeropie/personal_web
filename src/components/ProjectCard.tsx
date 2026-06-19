import { ExternalLink, Github, Clock } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden transition-all hover:border-white/20 hover:bg-black/60">
      {/* Image placeholder */}
      <div className="relative h-44 bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center">
        <span className="text-4xl font-bold text-white/10 select-none">
          {project.title.charAt(0)}
        </span>
        {project.status === 'in-progress' && (
          <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-amber-900/40 px-2 py-0.5 text-xs font-medium text-amber-400 border border-amber-800/50">
            <Clock size={11} />
            In progress
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 flex-1 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-xs font-medium text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none rounded"
            >
              <Github size={15} />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex items-center gap-1.5 text-sm text-slate-300 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none rounded"
            >
              <ExternalLink size={15} />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
