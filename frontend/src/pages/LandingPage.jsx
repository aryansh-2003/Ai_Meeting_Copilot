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
    <div style={{ minHeight: '100vh', background: '#020510', color: '#fff', overflowX: 'hidden', fontFamily: "'Space Grotesk', sans-serif" }}>
      <Fonts />
      <NeuralCanvas />
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Nav />
        <HeroSection />
        <MarqueeTicker />
        <LiveDemoSection />
        <StatsSection />
        <FeaturesSection />
        <SettingsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}