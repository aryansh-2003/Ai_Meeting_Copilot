import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Volume2, Zap, BrainCircuit, MessageSquare, Download, Shield, Globe, CheckCircle2 } from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';

export const FeaturesSection = () => {
  const feats = [
    { icon: Volume2, title: 'Whisper V3 Transcription', desc: '30-second chunks, auto-appended, auto-scrolled. 98%+ accuracy across accents and technical jargon. Multi-language ready.', size: 'tall', color: '#06EDD8', rgb: '6,237,216', note: 'Groq Whisper API' },
    { icon: Zap, title: 'Sub-50ms Suggestions', desc: "Groq's LPU inference delivers 3 intelligent cards before you've even finished your sentence.", size: 'small', color: '#A78BFA', rgb: '139,92,246' },
    { icon: BrainCircuit, title: 'Context-Aware Intelligence', desc: 'Knows when to question, when to fact-check, when to suggest. Reads the conversation like a co-pilot.', size: 'small', color: '#F97B3D', rgb: '249,123,61' },
    { icon: MessageSquare, title: 'Deep Expansion Chat', desc: 'Tap any card to stream a full detailed answer with complete transcript context. One continuous session.', size: 'wide', color: '#06EDD8', rgb: '6,237,216' },
    { icon: Download, title: 'Full Session Export', desc: 'Export transcript + all suggestion batches + full chat as JSON or plain text with timestamps.', size: 'wide', color: '#A78BFA', rgb: '139,92,246' },
    { icon: Shield, title: 'Zero Server Storage', desc: 'Nothing leaves your browser. Complete privacy by design.', size: 'small', color: '#34D399', rgb: '52,211,153' },
    { icon: Globe, title: 'Works Everywhere', desc: 'Any meeting platform — Zoom, Meet, Teams, in-person, or phone calls.', size: 'small', color: '#60A5FA', rgb: '96,165,250' },
  ];
 
  return (
    <section style={{ position: 'relative', padding: '120px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 16px', borderRadius: 100, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.09)', marginBottom: 20 }}>
            <Activity size={11} color="#6888A8" />
            <span className="font-mono-tm" style={{ fontSize: 10, color: '#6888A8', letterSpacing: '.14em', fontWeight: 700, textTransform: 'uppercase' }}>Core Features</span>
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 800, color: '#fff', letterSpacing: '-.02em', lineHeight: 1.05 }}>
            Built for every moment<br />of every <span className="grad-full">meeting.</span>
          </h2>
        </motion.div>
 
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'auto', gap: 18 }}>
          {feats.map((f, i) => {
            const colSpan = f.size === 'tall' ? 1 : f.size === 'wide' ? 2 : 1;
            const rowSpan = f.size === 'tall' ? 2 : 1;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06, duration: .55 }}
                style={{ gridColumn: `span ${colSpan}`, gridRow: `span ${rowSpan}` }}>
                <TiltCard glowRgb={f.rgb} intensity={8} className="g-border"
                  style={{ height: '100%', minHeight: f.size === 'small' ? 180 : f.size === 'wide' ? 200 : 380, borderRadius: 20, background: '#060B17', padding: 26, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 13, background: `rgba(${f.rgb},.1)`, border: `1px solid rgba(${f.rgb},.22)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, color: f.color }}>
                    <f.icon size={18} />
                  </div>
                  <h3 className="font-display" style={{ fontSize: f.size === 'small' ? 16 : 20, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{f.title}</h3>
                  <p style={{ fontSize: 13, color: '#6888A8', lineHeight: 1.65, fontFamily: "'Space Grotesk', sans-serif", flex: 1 }}>{f.desc}</p>
                  {f.note && (
                    <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <CheckCircle2 size={11} color="rgba(6,237,216,.5)" />
                      <span className="font-mono-tm" style={{ fontSize: 9, color: 'rgba(6,237,216,.45)', letterSpacing: '.12em', textTransform: 'uppercase' }}>{f.note}</span>
                    </div>
                  )}
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
