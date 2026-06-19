'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormData = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          ...form,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-600 transition-colors focus:border-slate-400 focus:ring-2 focus:ring-slate-400/10 focus:outline-none backdrop-blur-sm';

  return (
    <section id="contact" className="section-padding">
      <div className="container-max max-w-2xl">
        <h2 className="mb-2 text-3xl font-bold text-white">
          Contact
        </h2>
        <div className="mb-4 h-1 w-12 rounded-full bg-slate-400" />
        <p className="mb-10 text-slate-500">
          Have a question or want to work together? Send a message.
        </p>

        {status === 'success' ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-green-800/40 bg-green-900/20 py-16 text-center backdrop-blur-sm">
            <CheckCircle className="mb-4 h-12 w-12 text-green-400" />
            <h3 className="mb-2 text-lg font-semibold text-white">
              Message sent!
            </h3>
            <p className="mb-6 text-sm text-slate-400">
              I&apos;ll get back to you as soon as I can.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="rounded-lg bg-white px-5 py-2 text-sm font-medium text-black hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-1.5 block text-sm font-medium text-slate-300"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is this about?"
                value={form.subject}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your message..."
                value={form.message}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 rounded-lg border border-red-800/40 bg-red-900/20 px-4 py-3 text-sm text-red-400 backdrop-blur-sm">
                <AlertCircle size={15} className="flex-shrink-0" />
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="flex items-center gap-2 rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send size={15} />
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
