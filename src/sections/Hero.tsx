'use client';

import { PixelHero } from '@/components/ui/pixel-perfect-hero';

export default function Hero() {
  return (
    <PixelHero
      word1="Data"
      word2="Mastery."
      description="17+ years engineering the data backbone of a travel company — MS SQL, QlikView dashboards, and business process automation at Panorama Tours."
      primaryCta="View Projects"
      primaryCtaMobile="Projects"
      secondaryCta="View GitHub"
      secondaryCtaMobile="GitHub"
      onPrimaryClick={() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }}
      githubUrl="https://github.com/kokeropie"
    />
  );
}
