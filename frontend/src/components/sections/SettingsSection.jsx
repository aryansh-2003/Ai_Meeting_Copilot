import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Check } from 'lucide-react';

export const SettingsSection = () => (
  <section style={{ position: 'relative', padding: '120px 0', borderTop: '1px solid rgba(255,255,255,.05)', borderBottom: '1px solid rgba(255,255,255,.05)' }}>
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(124,58,237,.05), transparent)', pointerEvents: 'none' }} />
    <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
 
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 16px', borderRadius: 100, background: 'rgba(139,92,246,.08)', border: '1px solid rgba(139,92,246,.2)', marginBottom: 24 }}>
          <Settings size={11} color="#A78BFA" />
          <span className="font-mono-tm" style={{ fontSize: 10, color: '#A78BFA', letterSpacing: '.14em', fontWeight: 700, textTransform: 'uppercase' }}>Fully Configurable</span>
        </div>
        <h2 className="font-display" style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-.02em', marginBottom: 20, lineHeight: 1.1 }}>
          Tune every prompt.<br /><span className="grad-purple">Own the experience.</span>
        </h2>
        <p style={{ fontSize: 16, color: '#8888A8', lineHeight: 1.7, marginBottom: 32, fontFamily: "'Space Grotesk', sans-serif" }}>
          Every prompt, every context window, every parameter — fully editable. We ship optimal defaults, but you're in complete control.
        </p>
        {['Live suggestion prompt', 'Context window size (tokens)', 'Chat system prompt', 'Auto-refresh interval', 'Card detail expansion depth', 'JSON / plain text export format'].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }}
            style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderBottom: '1px solid rgba(255,255,255,.04)' }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(167,139,250,.5)', flexShrink: 0 }} />
            <span style={{ fontSize: 14, color: '#A0A8C0', fontFamily: "'Space Grotesk', sans-serif" }}>{item}</span>
          </motion.div>
        ))}
      </motion.div>
 
      <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}>
        <div className="g-border" style={{ borderRadius: 22, background: '#080E1E', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,.5), 0 0 60px rgba(139,92,246,.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
            <Settings size={14} color="#A78BFA" />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', fontFamily: "'Space Grotesk', sans-serif" }}>Settings</span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 5 }}>
              {[.4,.2].map((o, i) => <div key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: `rgba(167,139,250,${o})` }} />)}
            </div>
          </div>
          <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div>
              <label className="font-mono-tm" style={{ display: 'block', fontSize: 9, color: '#6888A8', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 8 }}>Groq API Key</label>
              <div style={{ display: 'flex', gap: 8 }}>
                <div style={{ flex: 1, height: 36, borderRadius: 10, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', paddingLeft: 12 }}>
                  <span className="font-mono-tm" style={{ fontSize: 11, color: '#3A4A5A' }}>gsk_••••••••••••••••</span>
                </div>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(167,139,250,.12)', border: '1px solid rgba(167,139,250,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={13} color="#A78BFA" />
                </div>
              </div>
            </div>
            <div>
              <label className="font-mono-tm" style={{ display: 'block', fontSize: 9, color: '#6888A8', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 8 }}>Suggestion Prompt</label>
              <div style={{ height: 90, borderRadius: 10, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', padding: '10px 12px', position: 'relative', overflow: 'hidden' }}>
                <div className="scanline" />
                <p className="font-mono-tm" style={{ fontSize: 10, color: '#6888A8', lineHeight: 1.6 }}>
                  You are an expert meeting copilot. Given the transcript context, generate exactly 3 useful suggestions. Each can be a talking point, question, fact-check, or clarification. Prioritize what's most useful RIGHT NOW...
                </p>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <label className="font-mono-tm" style={{ fontSize: 9, color: '#6888A8', letterSpacing: '.14em', textTransform: 'uppercase' }}>Context Window</label>
                <span className="font-mono-tm" style={{ fontSize: 10, color: '#A78BFA' }}>2000 tokens</span>
              </div>
              <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,.06)', position: 'relative' }}>
                <div style={{ height: '100%', width: '62%', borderRadius: 3, background: 'linear-gradient(90deg,#A78BFA,#7C3AED)' }} />
                <div style={{ position: 'absolute', top: '50%', left: '62%', transform: 'translate(-50%,-50%)', width: 16, height: 16, borderRadius: '50%', background: '#fff', border: '2px solid #A78BFA', boxShadow: '0 0 10px rgba(167,139,250,.5)' }} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);