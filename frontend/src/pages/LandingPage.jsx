import React from 'react';

import { Fonts } from '../components/ui/Fonts';
import { NeuralCanvas } from '../components/ui/NeuralCanvas';

import Nav  from '../Navbar/Navbar';
import { Footer } from '../components/layout/Footer';

import { HeroSection } from '../components/sections/HeroSection';
import { MarqueeTicker } from '../components/sections/MarqueeTicker';
import { LiveDemoSection } from '../components/sections/LiveDemoSection';
import { StatsSection } from '../components/sections/StatsSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { SettingsSection } from '../components/sections/SettingsSection';
import { CTASection } from '../components/sections/CTASections';

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#020510', color: '#fff', overflowX: 'hidden', fontFamily: "'Space Grotesk', sans-serif" }} 
         className="flex flex-col relative w-full">
      
      <NeuralCanvas />
      
      <div className="relative w-full z-50 pt-1 shrink-0">
        <Nav />
      </div>

      <main className="relative z-10 w-full flex flex-col flex-1 mt-4 sm:mt-12">
        <HeroSection />
        <MarqueeTicker />
        <LiveDemoSection />
        <StatsSection />
        <FeaturesSection />
        <SettingsSection />
        <CTASection />
        <Footer />
      </main>
      
    </div>
  );
}