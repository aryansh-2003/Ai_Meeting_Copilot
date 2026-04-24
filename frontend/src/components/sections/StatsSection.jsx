import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCard = ({ value, suffix, prefix = '', label, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1600, 1);
      const e = 1 - (1 - p) ** 3;
      setCount(Math.floor(e * value));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);
 
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1, duration: .6 }}
      style={{ textAlign: 'center' }}>
      <div className="font-display stat-num grad-cyan" style={{ fontSize: 'clamp(40px,4.5vw,60px)', fontWeight: 800, lineHeight: 1, marginBottom: 10 }}>
        {prefix}{count}{suffix}
      </div>
      <div style={{ fontSize: 13, color: '#6888A8', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>{label}</div>
    </motion.div>
  );
};

export const StatsSection = () => (
  <section style={{ position: 'relative', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,.05)', borderBottom: '1px solid rgba(255,255,255,.05)' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }}>
      {[
        { value: 50, suffix: 'ms', prefix: '<', label: 'Avg. Suggestion Latency' },
        { value: 98, suffix: '%', label: 'Transcription Accuracy' },
        { value: 3, suffix: ' cards', label: 'Generated Per Refresh' },
        { value: 30, suffix: 's', label: 'Auto-Refresh Interval' },
      ].map((s, i) => <StatCard key={i} {...s} index={i} />)}
    </div>
  </section>
);