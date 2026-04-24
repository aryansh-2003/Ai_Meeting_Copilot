import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Mic, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CTASection = () => {
    const navigate = useNavigate()
return(
  <section style={{ position: 'relative', padding: '160px 0', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: '20%', left: '15%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(6,237,216,.09)', filter: 'blur(160px)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', bottom: '10%', right: '15%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(124,58,237,.09)', filter: 'blur(160px)', pointerEvents: 'none' }} />
 
    <motion.div animate={{ backgroundPosition: ['200% 0', '-200% 0'] }} transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
      style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent 0%,#06EDD8 50%,transparent 100%)', backgroundSize: '200% 100%' }} />
 
    <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .9, ease: [.25,.1,.25,1] }}>
        <div style={{ width: 64, height: 64, borderRadius: 20, background: 'linear-gradient(135deg, rgba(6,237,216,.15), rgba(124,58,237,.15))', border: '1px solid rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
          <BrainCircuit size={28} color="#06EDD8" />
        </div>
        <h2 className="font-display" style={{ fontSize: 'clamp(48px,7vw,88px)', fontWeight: 800, color: '#fff', letterSpacing: '-.025em', lineHeight: .92, marginBottom: 28 }}>
          Stop taking notes.<br />
          <span className="grad-full">Start taking action.</span>
        </h2>
        <p style={{ fontSize: 20, color: '#8888A8', marginBottom: 48, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.6 }}>
          Every conversation is an opportunity.<br />TwinMind makes sure you never miss it.
        </p>
        <motion.button onClick={() => navigate('/home')} whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: .97 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '18px 44px', borderRadius: 100, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 18, fontFamily: "'Space Grotesk', sans-serif", background: 'linear-gradient(135deg,#06EDD8,#3B82F6)', color: '#020510', boxShadow: '0 0 50px rgba(6,237,216,.4), 0 0 100px rgba(6,237,216,.15)' }}>
          <Mic size={22} />
          Launch Your Workspace
          <ChevronRight size={20} />
        </motion.button>
        <p className="font-mono-tm" style={{ marginTop: 28, fontSize: 10, color: '#3A4A5A', letterSpacing: '.18em', textTransform: 'uppercase' }}>
          Open Source · Groq-Powered · Zero Data Retention
        </p>
      </motion.div>
    </div>
  </section>
)}