'use client';

import Link from 'next/link';
import { FileDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-md">
      <nav className="container-max section-padding py-0 flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none rounded"
        >
          Kusuma
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            aria-label="Download resume PDF"
            className="ml-2 flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:border-white/25 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
          >
            <FileDown size={15} />
            Resume
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/90 backdrop-blur-md px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="mt-1 flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
          >
            <FileDown size={15} />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
