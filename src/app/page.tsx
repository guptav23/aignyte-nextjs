import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import WhatWhySection from '@/components/sections/WhatWhySection';
import ResultsSection from '@/components/sections/ResultsSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'AIgnyte | Message Decisioning Platform — AI-Driven Message Selection for Direct Marketing',
  alternates: { canonical: 'https://www.aignyte.com/' },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWhySection />
      <ResultsSection />
      <TestimonialSection />
      <CtaSection />
    </>
  );
}
