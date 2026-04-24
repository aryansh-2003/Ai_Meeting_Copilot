import React from 'react';
import { BrainCircuit } from 'lucide-react';

export const Footer = () => (
  <footer style={{ position: 'relative', zIndex: 10, borderTop: '1px solid rgba(255,255,255,.05)', padding: '28px 24px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(135deg,#06EDD8,#3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <BrainCircuit size={11} color="#020510" />
        </div>
        <span className="font-mono-tm" style={{ fontSize: 10, color: '#3A4A5A', letterSpacing: '.15em', textTransform: 'uppercase' }}>TwinMind © 2025</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#06EDD8', display: 'inline-block', animation: 'pring 2s ease-out infinite' }} />
        <span className="font-mono-tm" style={{ fontSize: 10, color: '#3A4A5A', letterSpacing: '.15em', textTransform: 'uppercase' }}>All Systems Operational</span>
      </div>
    </div>
  </footer>
);