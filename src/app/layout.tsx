import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Starfield from '@/components/Starfield';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yourdomain.com'),
  title: 'Kusuma | MIS Manager',
  description:
    'Information System Manager based in Jakarta, Indonesia. 17+ years in MS SQL, QlikView dashboards, Crystal Reports, SSRS, and business process automation at Panorama-JTB Tours Indonesia.',
  openGraph: {
    title: 'Kusuma | MIS Manager',
    description:
      'MIS Manager based in Jakarta. MS SQL, QlikView, Crystal Reports, SSRS, and data infrastructure for the travel industry.',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kusuma | MIS Manager',
    description: 'MIS Manager based in Jakarta. MS SQL, QlikView, Crystal Reports, SSRS.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" forcedTheme="dark">
          <Starfield />
          <div className="relative flex min-h-screen flex-col" style={{ zIndex: 1 }}>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
