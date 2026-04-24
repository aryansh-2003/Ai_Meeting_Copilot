import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Mic } from 'lucide-react';

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
 
  return (
    <motion.nav initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .7 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(2,5,16,.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,.06)' : 'none',
        transition: 'all .4s ease',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg,#06EDD8,#3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BrainCircuit size={16} color="#020510" />
          </div>
          <span className="font-display" style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '-.01em' }}>TwinMind</span>
        </div>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {['Demo', 'Features', 'Settings', 'Export'].map(l => (
            <button key={l} style={{ fontSize: 14, color: '#6888A8', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, transition: 'color .2s' }}
              onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#6888A8'}>
              {l}
            </button>
          ))}
        </div>
        <motion.button whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: .97 }}
          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 18px', borderRadius: 12, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 14, fontFamily: "'Space Grotesk', sans-serif", background: 'linear-gradient(135deg,#06EDD8,#3B82F6)', color: '#020510', boxShadow: '0 0 20px rgba(6,237,216,.25)' }}>
          <Mic size={14} /> Start Now
        </motion.button>
      </div>
    </motion.nav>
  );
};