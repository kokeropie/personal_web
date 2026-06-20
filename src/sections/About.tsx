import { Skill } from '@/types';

const skills: Skill[] = [
  {
    category: 'Databases',
    items: ['MSSQL', 'MySQL', 'MS Access'],
  },
  {
    category: 'BI & Reporting',
    items: ['QlikView', 'Crystal Reports', 'SSRS'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Visual Studio', 'Sabre GDS', 'Microsoft Office'],
  },
  {
    category: 'Certifications',
    items: ['MCP (Microsoft Certified Professional)', 'Crystal Reports 8.5'],
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white/[0.02]">
      <div className="container-max">
        <h2 className="mb-2 text-3xl font-bold text-white">
          About
        </h2>
        <div className="mb-10 h-1 w-12 rounded-full bg-slate-400" />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Bio */}
          <div>
            <p className="mb-4 text-slate-400 leading-relaxed">
              I&apos;m an Information System Manager at Panorama-JTB Tours Indonesia in Jakarta,
              where I&apos;ve spent over 17 years turning data into systems that
              actually run the business — from designing MS SQL databases to
              building QlikView dashboards for top management.
            </p>
            <p className="mb-4 text-slate-400 leading-relaxed">
              Most of my work sits at the intersection of data and operations:
              automating invoicing flows, building SSRS and Crystal Reports for
              finance, and doing the business process analysis that moves manual
              procedures into something systematic and reliable.
            </p>
            <p className="mb-4 text-slate-400 leading-relaxed">
              Before Panorama-JTB Tours Indonesia, I spent seven years at Carlson Wagonlit Travel
              handling Account Management, IT, and MIS — including implementing
              Sabre GDS scripting across offices and completing CWT training in
              Bangkok, China, and Singapore.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Currently learning to code — building an ETL automation tool in
              Python to replace the propietary software I&apos;ve been using for years. It&apos;s a fun challenge to recreate the same functionality in a language I&apos;m still learning, and it&apos;s helping me understand the underlying processes even better.
            </p>
            <p className="text-slate-400 leading-relaxed">
           
            </p>

            {/* Education */}
            <div className="mt-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-white">Magister Manajemen Sistem Informatika (MMSI)</p>
                  <p className="text-sm text-slate-500">Universitas Bina Nusantara · Jakarta, 2002</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">B.S., Economics</p>
                  <p className="text-sm text-slate-500">University of Oregon · Eugene, OR, 1997</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm p-4"
              >
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  {skill.category}
                </h3>
                <ul className="space-y-1.5">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-slate-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
