import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://github.com/kokeropie',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://linkedin.com/in/kusumajaya-na-59a57420',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'mailto:cpkusuma@gmail.com',
    label: 'Email',
    icon: Mail,
  },
];

export default function Hero() {
  return (
    <section className="section-padding container-max flex min-h-[90vh] flex-col items-center justify-center text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-slate-400">
        Open to new opportunities
      </p>

      <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
        Hi, I&apos;m Kusuma
      </h1>

      <p className="mb-3 text-xl font-medium text-slate-300">
        MIS Manager · Jakarta, Indonesia
      </p>

      <p className="mb-8 max-w-xl text-base text-slate-400 leading-relaxed">
        17+ years building the data infrastructure behind a travel company —
        MS SQL databases, QlikView dashboards, Crystal Reports, SSRS, and
        the business process work that turns manual operations into automated ones.
      </p>

      {/* Social Links */}
      <div className="mb-8 flex items-center gap-4">
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            aria-label={label}
            className="flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:border-white/30 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
          >
            <Icon size={15} />
            {label}
          </a>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projects"
          className="rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          download
          aria-label="Download resume PDF"
          className="rounded-lg border border-white/15 px-6 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:bg-white/5 hover:border-white/30 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
        >
          Download Resume
        </a>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="mt-16 animate-bounce text-slate-600 hover:text-slate-300 focus-visible:outline-none transition-colors"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
