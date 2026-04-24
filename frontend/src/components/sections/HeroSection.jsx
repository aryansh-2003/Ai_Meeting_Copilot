import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Settings, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 0 80px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(6,237,216,.07)', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 450, height: 450, borderRadius: '50%', background: 'rgba(124,58,237,.07)', filter: 'blur(120px)', pointerEvents: 'none' }} />
 
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: [.25,.1,.25,1] }}>
          <motion.div initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .2 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(6,237,216,.2)', background: 'rgba(6,237,216,.06)', backdropFilter: 'blur(12px)', marginBottom: 32 }}>
            <span style={{ position: 'relative', display: 'flex', width: 8, height: 8 }}>
              <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#06EDD8', opacity: .7, animation: 'pring 2s ease-out infinite' }} />
              <span style={{ position: 'relative', width: 8, height: 8, borderRadius: '50%', background: '#06EDD8', display: 'block' }} />
            </span>
            <span className="font-mono-tm" style={{ fontSize: 11, fontWeight: 700, color: '#06EDD8', letterSpacing: '.14em', textTransform: 'uppercase' }}>AI Meeting Copilot — Live</span>
          </motion.div>
 
          <motion.h1 className="font-display" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3, duration: .8 }}
            style={{ fontSize: 'clamp(52px,6vw,80px)', fontWeight: 800, lineHeight: .95, letterSpacing: '-.025em', color: '#fff', marginBottom: 28 }}>
            Think Faster.<br />
            <span className="grad-full">Win Every</span><br />
            Meeting.
          </motion.h1>
 
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5, duration: .7 }}
            style={{ fontSize: 18, color: '#8888A8', lineHeight: 1.65, maxWidth: 440, marginBottom: 40, fontFamily: "'Space Grotesk', sans-serif" }}>
            TwinMind listens in real-time and surfaces instant talking points, fact-checks, and smart questions — while you stay focused on the conversation.
          </motion.p>
 
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 }}
            style={{ display: 'flex', gap: 16, marginBottom: 36, flexWrap: 'wrap' }}>
            <motion.button onClick={() => navigate('/home')} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: .97 }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 14, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 16, fontFamily: "'Space Grotesk', sans-serif", background: 'linear-gradient(135deg,#06EDD8,#3B82F6)', color: '#020510', boxShadow: '0 0 35px rgba(6,237,216,.35), 0 0 70px rgba(6,237,216,.1)' }}>
              <Mic size={18} /> Start Live Session <ChevronRight size={16} />
            </motion.button>
      
          </motion.div>
 
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .85 }}
            style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {['No login required', 'Works in any meeting', 'Open source'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: '#506080', fontFamily: "'Space Grotesk', sans-serif" }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(6,237,216,.5)' }} />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
 
        <motion.div initial={{ opacity: 0, scale: .85, rotateY: -12 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ delay: .4, duration: 1.1, ease: [.25,.1,.25,1] }}
          style={{ position: 'relative', height: 580, perspective: '1200px' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 400, height: 400, borderRadius: '50%', background: 'rgba(6,237,216,.05)', filter: 'blur(80px)', pointerEvents: 'none' }} />
 
          <motion.div animate={{ y: [-6, 6, -6] }} transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
            className="g-border"
            style={{ position: 'absolute', left: 0, top: 40, width: 280, background: 'rgba(8,14,30,.92)', borderRadius: 20, overflow: 'hidden', backdropFilter: 'blur(20px)', transform: 'perspective(900px) rotateY(8deg) rotateX(-3deg)', boxShadow: '0 30px 60px rgba(0,0,0,.65)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
              <div style={{ display: 'flex', gap: 5 }}>
                {['#ef4444','#eab308','#22c55e'].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, opacity: .55 }} />)}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 4 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#06EDD8', animation: 'pring 2s ease-out infinite' }} />
                <span className="font-mono-tm" style={{ fontSize: 9, color: '#6888A8', letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 700 }}>Live Transcript</span>
              </div>
            </div>
            <div style={{ padding: '14px 14px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontSize: 12, color: '#7888A0', lineHeight: 1.55 }}>
                <span className="font-mono-tm" style={{ fontSize: 9, color: 'rgba(6,237,216,.4)' }}>0:45 </span>
                We need to scale the database before Q4 peak traffic hits...
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.85)', lineHeight: 1.55 }}>
                <span className="font-mono-tm" style={{ fontSize: 9, color: 'rgba(6,237,216,.4)' }}>1:12 </span>
                The read replicas can't handle more than 10k concurrent users right now
              </div>
              <motion.div animate={{ opacity: [.4, 1, .4] }} transition={{ repeat: Infinity, duration: 2 }}
                style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#06EDD8', opacity: .7 }} />
                <span className="font-mono-tm" style={{ fontSize: 10, color: 'rgba(6,237,216,.5)' }}>Listening...</span>
              </motion.div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 20, marginTop: 4 }}>
                {Array.from({ length: 22 }).map((_, i) => (
                  <div key={i} style={{ width: 2.5, background: 'rgba(6,237,216,.35)', borderRadius: 2, animation: `wave ${.3 + Math.random() * .5}s ease-in-out ${Math.random() * .4}s infinite`, transformOrigin: 'bottom', height: '100%', minHeight: 3 }} />
                ))}
              </div>
            </div>
          </motion.div>
 
          <motion.div animate={{ y: [-10, 8, -10], rotate: [-1, .8, -1] }} transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
            style={{ position: 'absolute', right: 0, top: 20, width: 240, borderRadius: 18, background: 'rgba(4,12,28,.95)', border: '1px solid rgba(6,237,216,.2)', backdropFilter: 'blur(16px)', padding: '14px 16px', boxShadow: '0 20px 40px rgba(6,237,216,.1), 0 0 0 1px rgba(6,237,216,.06)' }}>
            <div className="font-mono-tm" style={{ fontSize: 9, color: '#06EDD8', letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>💡 Talking Point</div>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,.8)', lineHeight: 1.6 }}>DynamoDB On-Demand is ideal for unpredictable peaks but expensive at steady high scale vs provisioned + auto-scaling.</p>
          </motion.div>
 
          <motion.div animate={{ y: [8, -8, 8], rotate: [1, -.5, 1] }} transition={{ repeat: Infinity, duration: 6.5, ease: 'easeInOut', delay: 1 }}
            style={{ position: 'absolute', right: 12, bottom: 110, width: 230, borderRadius: 18, background: 'rgba(4,12,28,.95)', border: '1px solid rgba(139,92,246,.22)', backdropFilter: 'blur(16px)', padding: '14px 16px', boxShadow: '0 20px 40px rgba(139,92,246,.1)' }}>
            <div className="font-mono-tm" style={{ fontSize: 9, color: '#A78BFA', letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>❓ Ask This</div>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,.8)', lineHeight: 1.6 }}>Have you benchmarked the expected RCU/WCU requirements? Have you run the DMS migration cost estimator?</p>
          </motion.div>
 
          <motion.div animate={{ y: [-5, 10, -5] }} transition={{ repeat: Infinity, duration: 7.5, ease: 'easeInOut', delay: 2 }}
            style={{ position: 'absolute', left: 20, bottom: 30, width: 215, borderRadius: 18, background: 'rgba(4,12,28,.95)', border: '1px solid rgba(16,185,129,.22)', backdropFilter: 'blur(16px)', padding: '14px 16px', boxShadow: '0 20px 40px rgba(16,185,129,.08)' }}>
            <div className="font-mono-tm" style={{ fontSize: 9, color: '#34D399', letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>✓ Fact Check</div>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,.8)', lineHeight: 1.6 }}>AWS updated DynamoDB pricing in 2024. Standard IA storage class now available at ~60% cost reduction.</p>
          </motion.div>
        </motion.div>
      </div>
 
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span className="font-mono-tm" style={{ fontSize: 9, color: '#3A4A5A', letterSpacing: '.2em', textTransform: 'uppercase' }}>Scroll to explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
          style={{ width: 20, height: 32, borderRadius: 10, border: '1px solid rgba(255,255,255,.1)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 6 }}>
          <div style={{ width: 4, height: 8, borderRadius: 2, background: 'rgba(6,237,216,.6)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
};