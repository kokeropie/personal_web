import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://github.com/kokeropie',
    label: 'GitHub profile',
    icon: Github,
  },
  {
    href: 'https://linkedin.com/in/kusumajaya-na-59a57420',
    label: 'LinkedIn profile',
    icon: Linkedin,
  },
  {
    href: 'mailto:cpkusuma@gmail.com',
    label: 'Send email',
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/70 backdrop-blur-md py-8">
      <div className="container-max section-padding py-0 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-600">
          &copy; {new Date().getFullYear()} Kusuma. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-600 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none rounded"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
