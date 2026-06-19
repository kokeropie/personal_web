import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white/[0.02]">
      <div className="container-max">
        <h2 className="mb-2 text-3xl font-bold text-white">
          Experience
        </h2>
        <div className="mb-10 h-1 w-12 rounded-full bg-slate-400" />

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-12">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold ${
                    index === 0
                      ? 'border-white bg-white text-black'
                      : 'border-white/20 bg-transparent text-slate-500'
                  }`}
                >
                  {index + 1}
                </div>

                <div className="rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm p-6">
                  <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-slate-300">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500">
                        {exp.duration}
                      </p>
                      {exp.location && (
                        <p className="text-xs text-slate-600">
                          {exp.location}
                        </p>
                      )}
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-400">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
