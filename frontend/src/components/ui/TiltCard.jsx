import React, { useState, useRef, useCallback } from 'react';

export const TiltCard = ({ children, className = '', intensity = 10, glowRgb = '6,237,216', style = {} }) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, sx: 50, sy: 50 });
 
  const onMove = useCallback((e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    setTilt({ x: -dy * intensity, y: dx * intensity, sx: ((e.clientX - r.left) / r.width) * 100, sy: ((e.clientY - r.top) / r.height) * 100 });
  }, [intensity]);
 
  const onLeave = useCallback(() => setTilt({ x: 0, y: 0, sx: 50, sy: 50 }), []);
 
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={className}
      style={{
        ...style,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 ? 'transform .6s ease' : 'transform .08s ease',
        transformStyle: 'preserve-3d',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 'inherit', zIndex: 1, pointerEvents: 'none',
        background: `radial-gradient(circle at ${tilt.sx}% ${tilt.sy}%, rgba(${glowRgb},.1), transparent 60%)`,
      }} />
      {children}
    </div>
  );
};