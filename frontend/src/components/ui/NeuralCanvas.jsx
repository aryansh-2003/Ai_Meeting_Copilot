import React, { useEffect, useRef } from 'react';

export const NeuralCanvas = () => {
  const canvasRef = useRef(null);
  const raf = useRef(null);
 
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const N = 85, MAX = 155;
 
    let nodes = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const init = () => {
      nodes = Array.from({ length: N }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - .5) * .35,
        vy: (Math.random() - .5) * .35,
        r: Math.random() * 1.5 + .5,
        p: Math.random() * Math.PI * 2,
        cyan: Math.random() > .4,
      }));
    };
 
    resize(); init();
    window.addEventListener('resize', () => { resize(); init(); });
 
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy; n.p += .014;
        if (n.x < 0) n.x += canvas.width;
        if (n.x > canvas.width) n.x -= canvas.width;
        if (n.y < 0) n.y += canvas.height;
        if (n.y > canvas.height) n.y -= canvas.height;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX) {
            const a = (1 - d / MAX) * .22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = nodes[i].cyan ? `rgba(6,237,216,${a})` : `rgba(139,92,246,${a})`;
            ctx.lineWidth = .7;
            ctx.stroke();
          }
        }
      }
      nodes.forEach(n => {
        const pulse = Math.sin(n.p) * .5 + .5;
        const rgb = n.cyan ? '6,237,216' : '139,92,246';
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 7);
        g.addColorStop(0, `rgba(${rgb},${.65 * pulse})`);
        g.addColorStop(1, `rgba(${rgb},0)`);
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 7, 0, Math.PI * 2);
        ctx.fillStyle = g; ctx.fill();
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},.9)`; ctx.fill();
      });
      raf.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf.current); window.removeEventListener('resize', resize); };
  }, []);
 
  return (
    <canvas ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: .38, pointerEvents: 'none' }}
    />
  );
};