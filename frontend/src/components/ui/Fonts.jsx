import React from 'react';

export const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
 
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
 
    body { background: #020510; }
 
    .font-display { font-family: 'Syne', sans-serif !important; }
    .font-mono-tm  { font-family: 'Space Mono', monospace !important; }
 
    ::selection { background: rgba(6,237,216,0.25); }
    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: #020510; }
    ::-webkit-scrollbar-thumb { background: rgba(6,237,216,0.25); border-radius: 3px; }
 
    /* gradient texts */
    .grad-full {
      background: linear-gradient(135deg,#06EDD8 0%,#7C3AED 50%,#F97B3D 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .grad-cyan {
      background: linear-gradient(120deg,#06EDD8,#60A5FA);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .grad-purple {
      background: linear-gradient(120deg,#A78BFA,#EC4899);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }
 
    /* gradient border via pseudo-element */
    .g-border { position: relative; }
    .g-border::before {
      content:''; position:absolute; inset:0; border-radius:inherit;
      padding:1px;
      background: linear-gradient(135deg,rgba(6,237,216,.35),rgba(124,58,237,.3),rgba(249,123,61,.25));
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor; mask-composite: exclude;
      pointer-events: none;
    }
 
    /* glows */
    .glow-c { box-shadow: 0 0 50px rgba(6,237,216,.12), 0 0 100px rgba(6,237,216,.04); }
    .glow-p { box-shadow: 0 0 50px rgba(124,58,237,.12), 0 0 100px rgba(124,58,237,.04); }
 
    /* marquee */
    @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .marquee-inner { animation: marquee 22s linear infinite; width: max-content; display: flex; }
    .marquee-inner:hover { animation-play-state: paused; }
 
    /* waveform bars */
    @keyframes wave { 0%,100%{transform:scaleY(.3)} 50%{transform:scaleY(1)} }
 
    /* scan line */
    @keyframes scanline { from{top:-4px} to{top:100%} }
    .scanline {
      position: absolute; left:0; width:100%; height:4px;
      background: linear-gradient(to bottom, transparent, rgba(6,237,216,.15), transparent);
      animation: scanline 4s linear infinite;
      pointer-events: none;
    }
 
    /* pulse ring */
    @keyframes pring { from{transform:scale(1);opacity:.6} to{transform:scale(2.2);opacity:0} }
 
    /* counter number font */
    .stat-num { font-variant-numeric: tabular-nums; }
  `}</style>
);