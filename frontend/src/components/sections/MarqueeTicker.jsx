import React from 'react';

export const MarqueeTicker = () => {
  const items = ['Real-Time Transcription', 'Smart Suggestions', 'Instant Fact-Checks', 'Question Generator', 'Context-Aware AI', 'Groq-Powered Speed', 'Whisper Large V3', 'Sub-50ms Latency', 'No Login Required', 'Session Export'];
  const doubled = [...items, ...items];
  return (
    <div style={{ position: 'relative', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,.06)', borderBottom: '1px solid rgba(255,255,255,.06)', background: 'rgba(255,255,255,.01)', overflow: 'hidden' }}>
      <div className="marquee-inner" style={{ gap: 48 }}>
        {doubled.map((item, i) => (
          <span key={i} className="font-mono-tm" style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 11, color: '#3A4A5A', letterSpacing: '.12em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(6,237,216,.5)', flexShrink: 0, display: 'inline-block' }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};