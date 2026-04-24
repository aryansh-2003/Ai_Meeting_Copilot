import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { BrainCircuit, Volume2, Sparkles, RefreshCw, MessageSquare, ArrowRight } from 'lucide-react';

export const LiveDemoSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
 
  const rotX = useTransform(scrollYProgress, [0, .4, .8], [28, 0, -4]);
  const sc = useTransform(scrollYProgress, [0, .4, .8], [.83, 1, .96]);
  const op = useTransform(scrollYProgress, [0, .18, .75, .92], [0, 1, 1, 0]);
  const ty = useTransform(scrollYProgress, [0, .5], [60, 0]);
  const springRX = useSpring(rotX, { stiffness: 90, damping: 28 });
  const springSC = useSpring(sc, { stiffness: 90, damping: 28 });
 
  return (
    <section ref={ref} style={{ position: 'relative', minHeight: '190vh', padding: '120px 0', overflow: 'hidden', perspective: '2400px' }}>
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '40vh', background: 'rgba(6,237,216,.05)', filter: 'blur(200px)', borderRadius: '50%', pointerEvents: 'none' }} />
 
      <div style={{ position: 'sticky', top: 80, maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 16px', borderRadius: 100, background: 'rgba(6,237,216,.07)', border: '1px solid rgba(6,237,216,.2)', marginBottom: 20 }}>
            <BrainCircuit size={12} color="#06EDD8" />
            <span className="font-mono-tm" style={{ fontSize: 10, color: '#06EDD8', letterSpacing: '.14em', fontWeight: 700, textTransform: 'uppercase' }}>Live Demo</span>
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(40px,5.5vw,72px)', fontWeight: 800, color: '#fff', letterSpacing: '-.02em', lineHeight: 1 }}>
            Watch it <span className="grad-cyan">think.</span>
          </h2>
          <p style={{ fontSize: 18, color: '#6888A8', marginTop: 14, maxWidth: 480, margin: '14px auto 0', fontFamily: "'Space Grotesk', sans-serif" }}>Three intelligent panels. Real-time. In sync. Always on.</p>
        </motion.div>
 
        <motion.div style={{ rotateX: springRX, scale: springSC, opacity: op, y: ty, transformStyle: 'preserve-3d', transformOrigin: 'center top' }}>
          <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,.09)', boxShadow: '0 60px 120px rgba(0,0,0,.75), 0 0 0 1px rgba(255,255,255,.04), 0 0 100px rgba(6,237,216,.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 18px', background: '#080E1C', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {['#ef4444','#eab308','#22c55e'].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: .45 }} />)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ maxWidth: 260, margin: '0 auto', height: 24, borderRadius: 12, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="font-mono-tm" style={{ fontSize: 10, color: '#3A4A5A' }}>twinmind.app/session</span>
                </div>
              </div>
            </div>
 
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', minHeight: 480, background: '#050C17' }}>
              {/* Column 1: Transcript */}
              <div style={{ borderRight: '1px solid rgba(255,255,255,.06)', padding: 20, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(99,102,241,.15)', border: '1px solid rgba(99,102,241,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Volume2 size={14} color="#818CF8" />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', fontFamily: "'Space Grotesk', sans-serif" }}>Live Transcript</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#EF4444', animation: 'pring 2s ease-out infinite' }} />
                      <span style={{ fontSize: 10, color: '#6888A8', fontFamily: "'Space Grotesk', sans-serif" }}>Recording</span>
                    </div>
                  </div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    ['0:00', "Let's discuss the Q4 database migration strategy...", false],
                    ['0:30', "We're seeing 40% increase in read latency during peak hours...", true],
                    ['1:00', "The current PostgreSQL setup won't scale horizontally...", false],
                    ['1:28', "Have you considered DynamoDB for the write-heavy endpoints?", true],
                  ].map(([ts, text, bright], i) => (
                    <motion.p key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}
                      style={{ fontSize: 12, color: bright ? 'rgba(255,255,255,.85)' : '#7888A0', lineHeight: 1.6, fontFamily: "'Space Grotesk', sans-serif" }}>
                      <span className="font-mono-tm" style={{ fontSize: 9, color: 'rgba(6,237,216,.35)' }}>{ts} </span>{text}
                    </motion.p>
                  ))}
                  <motion.p animate={{ opacity: [.4, 1, .4] }} transition={{ repeat: Infinity, duration: 2 }}
                    style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', fontFamily: "'Space Grotesk', sans-serif" }}>
                    <span className="font-mono-tm" style={{ fontSize: 9, color: 'rgba(6,237,216,.35)' }}>1:52 </span>The migration complexity is the biggest concern here... ▊
                  </motion.p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 28, marginTop: 12 }}>
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} style={{ width: 2.5, background: 'rgba(6,237,216,.3)', borderRadius: 2, animation: `wave ${.25 + Math.random() * .55}s ease-in-out ${Math.random() * .5}s infinite`, transformOrigin: 'bottom', height: '100%' }} />
                  ))}
                </div>
              </div>
 
              {/* Column 2: Suggestions */}
              <div style={{ borderRight: '1px solid rgba(255,255,255,.06)', padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(6,237,216,.1)', border: '1px solid rgba(6,237,216,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Sparkles size={14} color="#06EDD8" />
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', fontFamily: "'Space Grotesk', sans-serif" }}>Live Suggestions</span>
                  </div>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <RefreshCw size={10} color="#6888A8" />
                  </div>
                </div>
 
                {[
                  { type: 'Talking Point', color: '#06EDD8', bg: 'rgba(6,237,216,.07)', border: 'rgba(6,237,216,.18)', text: 'DynamoDB On-Demand is great for unpredictable workloads, but expensive at high steady-state traffic vs Provisioned + Auto Scaling.' },
                  { type: 'Question to Ask', color: '#A78BFA', bg: 'rgba(139,92,246,.07)', border: 'rgba(139,92,246,.2)', text: 'Have we calculated the expected RCU/WCU requirements? Have we run the AWS DMS Migration Cost Estimator?' },
                  { type: 'Fact Check', color: '#34D399', bg: 'rgba(52,211,153,.07)', border: 'rgba(52,211,153,.2)', text: 'AWS updated DynamoDB pricing in 2024 — Standard Infrequent Access class available at ~60% storage cost reduction.' },
                ].map((card, i) => (
                  <motion.div key={i} initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * .15 + .3, type: 'spring', stiffness: 120 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    style={{ padding: '12px 14px', borderRadius: 14, background: card.bg, border: `1px solid ${card.border}`, cursor: 'pointer', transition: 'all .2s' }}>
                    <div className="font-mono-tm" style={{ fontSize: 9, color: card.color, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 7 }}>{card.type}</div>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,.75)', lineHeight: 1.6, fontFamily: "'Space Grotesk', sans-serif" }}>{card.text}</p>
                  </motion.div>
                ))}
              </div>
 
              {/* Column 3: Chat */}
              <div style={{ padding: 20, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(124,58,237,.15)', border: '1px solid rgba(124,58,237,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MessageSquare size={14} color="#A78BFA" />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', fontFamily: "'Space Grotesk', sans-serif" }}>Deep Chat</span>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ maxWidth: '82%', background: 'rgba(139,92,246,.18)', border: '1px solid rgba(139,92,246,.22)', borderRadius: '14px 14px 4px 14px', padding: '8px 12px' }}>
                      <p style={{ fontSize: 11, color: 'rgba(255,255,255,.85)', fontFamily: "'Space Grotesk', sans-serif" }}>Tell me more about DynamoDB On-Demand vs Provisioned</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{ maxWidth: '88%', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '14px 14px 14px 4px', padding: '8px 12px' }}>
                      <p style={{ fontSize: 11, color: '#A8A8C0', lineHeight: 1.65, fontFamily: "'Space Grotesk', sans-serif" }}>
                        DynamoDB On-Demand charges per request (~$1.25/million writes, $0.25/million reads). Ideal when traffic is <span style={{ color: '#fff' }}>unpredictable or spiky</span>. At sustained high load, Provisioned with Auto Scaling is typically <span style={{ color: '#06EDD8' }}>40-60% cheaper</span>. Consider your P95 traffic pattern before deciding.
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
                  <div style={{ flex: 1, height: 34, borderRadius: 10, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', paddingLeft: 10 }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,.2)', fontFamily: "'Space Grotesk', sans-serif" }}>Ask a follow-up...</span>
                  </div>
                  <div style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(124,58,237,.2)', border: '1px solid rgba(124,58,237,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArrowRight size={12} color="#A78BFA" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};