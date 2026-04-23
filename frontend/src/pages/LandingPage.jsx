import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Mic, MessageSquare, Zap, Settings, ChevronRight, Sparkles, AudioWaveform, BrainCircuit
} from 'lucide-react';

// --- TYPEWRITER UTILITY ---
const TypewriterText = ({ text, delay = 0, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    setDisplayedText('');
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay, speed]);

  return <span>{displayedText}</span>;
};

const Cute3DRobot = () => {
  return (
    <div className="relative w-full max-w-[500px] h-[600px] flex items-center justify-center perspective-[1000px]">
      
      {/* 3D Floating Speech Bubble */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotateX: 45, z: -100 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0, z: 50 }}
        transition={{ delay: 1.5, duration: 0.8, type: "spring", bounce: 0.4 }}
        className="absolute top-4 -right-4 z-50 bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-3xl rounded-bl-sm shadow-[0_20px_40px_rgba(0,0,0,0.5),_0_0_30px_rgba(6,182,212,0.3)] max-w-[280px]"
      >
        <p className="text-sm text-gray-100 font-medium leading-relaxed drop-shadow-md">
          <TypewriterText text="Hello! I am your cute AI copilot. I listen, think, and give you super-smart suggestions in real-time. Check me out below!" delay={2000} speed={25} />
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-4 ml-1 align-middle bg-cyan-400 rounded-sm" />
        </p>
      </motion.div>

      {/* Robot Container with Hover Physics */}
      <motion.div
        animate={{ y: [-15, 15, -15], rotateY: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center mt-12 transform-gpu"
      >
        {/* Antenna */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
          <motion.div 
            animate={{ backgroundColor: ["#22d3ee", "#818cf8", "#22d3ee"], boxShadow: ["0 0 10px #22d3ee", "0 0 20px #818cf8", "0 0 10px #22d3ee"] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-3 h-3 rounded-full z-20"
          />
          <div className="w-1.5 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-t-full -mt-1 shadow-inner z-10" />
        </div>

        {/* HEAD (Glossy Spherical Look) */}
        <div className="relative w-64 h-48 bg-gradient-to-br from-white via-gray-100 to-gray-300 rounded-[50%_50%_45%_45%] border border-white/50 shadow-[inset_-10px_-15px_30px_rgba(0,0,0,0.15),_0_25px_35px_rgba(0,0,0,0.4)] flex items-center justify-center z-30 overflow-hidden">
          {/* Top Glare (Plastic Reflection) */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-48 h-12 bg-white/60 rounded-[100%] blur-md pointer-events-none" />
          
          {/* Black Glass Visor */}
          <div className="relative w-56 h-28 bg-gradient-to-b from-gray-900 via-black to-gray-950 rounded-[100px] shadow-[inset_0_10px_20px_rgba(255,255,255,0.1),_0_5px_10px_rgba(0,0,0,0.5)] flex items-center justify-center gap-8 overflow-hidden">
            {/* Visor Glare */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-[100px] pointer-events-none" />
            
            {/* Left Eye (Cyan Ring) */}
            <div className="relative w-16 h-16 rounded-full flex items-center justify-center">
              <motion.div 
                animate={{ scaleY: [1, 0.1, 1], scaleX: [1, 1.05, 1] }} 
                transition={{ repeat: Infinity, duration: 5, times: [0, 0.05, 0.1], repeatDelay: 1 }}
                className="w-full h-full rounded-full border-[6px] border-cyan-400 shadow-[0_0_20px_#22d3ee,_inset_0_0_15px_#22d3ee]"
              />
              <div className="absolute top-2 right-2 w-3 h-3 bg-white/80 rounded-full blur-[1px]" />
            </div>

            {/* Right Eye (Cyan Ring) */}
            <div className="relative w-16 h-16 rounded-full flex items-center justify-center">
              <motion.div 
                animate={{ scaleY: [1, 0.1, 1], scaleX: [1, 1.05, 1] }} 
                transition={{ repeat: Infinity, duration: 5, times: [0, 0.05, 0.1], repeatDelay: 1 }}
                className="w-full h-full rounded-full border-[6px] border-cyan-400 shadow-[0_0_20px_#22d3ee,_inset_0_0_15px_#22d3ee]"
              />
              <div className="absolute top-2 right-2 w-3 h-3 bg-white/80 rounded-full blur-[1px]" />
            </div>
          </div>
        </div>

        {/* Neck Mechanism */}
        <div className="w-12 h-10 -mt-2 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 border-x-2 border-gray-900 z-20 shadow-[inset_0_5px_10px_rgba(0,0,0,0.5)]" />

        {/* CHUBBY BODY */}
        <div className="relative w-52 h-60 -mt-4 bg-gradient-to-br from-white via-gray-100 to-gray-400 rounded-[45%_45%_55%_55%] shadow-[inset_-15px_-15px_30px_rgba(0,0,0,0.2),_0_30px_40px_rgba(0,0,0,0.5)] flex flex-col items-center z-30">
          <div className="absolute top-4 left-4 w-12 h-20 bg-white/50 rounded-[100%] blur-md rotate-[20deg]" /> {/* Side Reflection */}
          
          {/* Belly Detail Lines */}
          <div className="absolute bottom-12 w-20 h-1.5 bg-gray-300 rounded-full shadow-inner opacity-60" />
          <div className="absolute bottom-8 w-12 h-1.5 bg-gray-300 rounded-full shadow-inner opacity-60" />
        </div>

        {/* ARMS */}
        {/* Left Arm (Waving) */}
        <motion.div 
          animate={{ rotate: [0, -40, 10, -40, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
          style={{ originY: 0.1, originX: 0.8 }}
          className="absolute top-[220px] -left-20 w-16 h-40 flex flex-col items-center z-20"
        >
          {/* Shoulder Joint */}
          <div className="w-12 h-12 rounded-full bg-gray-700 shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] z-10" />
          {/* Upper Arm */}
          <div className="w-10 h-20 bg-gradient-to-b from-white to-gray-300 rounded-full -mt-6 shadow-lg z-20" />
          {/* Elbow Joint */}
          <div className="w-8 h-8 rounded-full bg-gray-800 shadow-inner -mt-2 z-10" />
          {/* Lower Arm & Hand */}
          <div className="w-10 h-20 bg-gradient-to-b from-white to-gray-400 rounded-t-full rounded-b-3xl -mt-2 shadow-lg flex items-end justify-center pb-2 z-20">
            {/* Cute Fingers */}
            <div className="flex gap-1">
              <div className="w-2 h-6 bg-gray-700 rounded-full shadow-inner" />
              <div className="w-2 h-7 bg-gray-700 rounded-full shadow-inner -translate-y-1" />
              <div className="w-2 h-6 bg-gray-700 rounded-full shadow-inner" />
            </div>
          </div>
        </motion.div>

        {/* Right Arm (Resting) */}
        <div className="absolute top-[220px] -right-16 w-16 h-40 flex flex-col items-center z-10 rotate-[15deg]">
          <div className="w-12 h-12 rounded-full bg-gray-700 shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] z-10" />
          <div className="w-10 h-20 bg-gradient-to-b from-white to-gray-300 rounded-full -mt-6 shadow-lg z-20" />
          <div className="w-8 h-8 rounded-full bg-gray-800 shadow-inner -mt-2 z-10" />
          <div className="w-10 h-16 bg-gradient-to-b from-white to-gray-400 rounded-t-full rounded-b-3xl -mt-2 shadow-lg z-20" />
        </div>

        {/* LEGS */}
        <div className="absolute -bottom-8 flex gap-12 z-10">
          {/* Left Leg */}
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.1 }} className="flex flex-col items-center">
            <div className="w-14 h-16 bg-gradient-to-b from-gray-800 to-black rounded-b-full shadow-inner" />
            <div className="w-20 h-12 bg-gradient-to-br from-white to-gray-400 rounded-[20px_20px_10px_10px] -mt-4 shadow-[0_15px_20px_rgba(0,0,0,0.6)] border-t border-white/50" />
          </motion.div>
          {/* Right Leg */}
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.8 }} className="flex flex-col items-center">
            <div className="w-14 h-16 bg-gradient-to-b from-gray-800 to-black rounded-b-full shadow-inner" />
            <div className="w-20 h-12 bg-gradient-to-br from-white to-gray-400 rounded-[20px_20px_10px_10px] -mt-4 shadow-[0_15px_20px_rgba(0,0,0,0.6)] border-t border-white/50" />
          </motion.div>
        </div>

        {/* Floating Floor Shadow */}
        <motion.div 
          animate={{ scale: [1, 0.8, 1], opacity: [0.4, 0.15, 0.4] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute -bottom-24 w-64 h-12 bg-black rounded-[50%] blur-xl z-0"
        />
      </motion.div>
    </div>
  );
};


const LiveDemoSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 3D Parallax and Rotations based on scroll
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -20]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[150vh] bg-[#030614] py-32 overflow-hidden perspective-[2000px]">
      
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-cyan-900/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="sticky top-20 flex flex-col items-center w-full max-w-6xl mx-auto px-8">
        
        <div className="text-center mb-16 z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold uppercase tracking-widest mb-4"
          >
            <BrainCircuit size={16} /> Live Demo
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Watch it think in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Real-Time.</span></h2>
        </div>

        {/* 3D UI Wrapper */}
        <motion.div 
          style={{ rotateX, scale, opacity }}
          className="relative w-full h-[600px] flex gap-6 transform-style-3d shadow-2xl"
        >
          {/* Panel 1: Live Transcript */}
          <div className="flex-1 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)] translate-z-12">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center animate-pulse">
                <AudioWaveform className="text-indigo-400" size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-200">Live Transcript</h3>
            </div>
            <div className="flex-1 space-y-4 text-gray-400 text-lg leading-relaxed font-light">
              <p>User: "We need to scale our database, the current read replicas are choking during peak hours."</p>
              <p className="text-white">
                <TypewriterText text="Wait, what if we switch to DynamoDB on-demand for those peaks? " delay={1000} speed={40} />
              </p>
            </div>
          </div>

          {/* Panel 2: Floating Suggestions (The Core Feature) */}
          <div className="flex-1 relative flex flex-col justify-center gap-4 perspective-1000 translate-z-24">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ x: 100, opacity: 0, rotateY: -30 }} 
              whileInView={{ x: 0, opacity: 1, rotateY: 0 }} 
              transition={{ delay: 2.5, type: "spring", stiffness: 100 }}
              className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 backdrop-blur-xl border border-cyan-500/30 p-5 rounded-2xl shadow-[0_20px_30px_rgba(6,182,212,0.15)] hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="text-[10px] font-bold text-cyan-400 tracking-widest mb-2 uppercase">Talking Point</div>
              <p className="text-gray-100 text-sm">Mention that DynamoDB On-Demand is great for unpredictable workloads, but expensive at a steady high scale.</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ x: 100, opacity: 0, rotateY: -30 }} 
              whileInView={{ x: 0, opacity: 1, rotateY: 0 }} 
              transition={{ delay: 3.5, type: "spring", stiffness: 100 }}
              className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-xl border border-purple-500/30 p-5 rounded-2xl shadow-[0_20px_30px_rgba(168,85,247,0.15)] hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="text-[10px] font-bold text-purple-400 tracking-widest mb-2 uppercase">Question to Ask</div>
              <p className="text-gray-100 text-sm">Have we calculated the expected Read/Write Capacity Units (RCU/WCU) for the switch?</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ x: 100, opacity: 0, rotateY: -30 }} 
              whileInView={{ x: 0, opacity: 1, rotateY: 0 }} 
              transition={{ delay: 4.5, type: "spring", stiffness: 100 }}
              className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 backdrop-blur-xl border border-emerald-500/30 p-5 rounded-2xl shadow-[0_20px_30px_rgba(16,185,129,0.15)] hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="text-[10px] font-bold text-emerald-400 tracking-widest mb-2 uppercase">Fact Check</div>
              <p className="text-gray-100 text-sm">AWS recently updated Dynamo pricing in 2024; verify if standard IA classes apply here.</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050814] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* Global Ambient Noise Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* --- HERO SECTION --- */}
      <main className="relative z-10 w-full min-h-screen flex items-center pt-20 pb-32">
        {/* Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-600/20 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Copy */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Powered by Groq & Llama 3
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 text-white drop-shadow-2xl">
              Meet the AI that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                Thinks With You.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl font-light">
              TwinMind lives in your browser, listens to your mic, and surfaces live talking points, fact-checks, and answers while the meeting is happening. 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                Start Live Session <ChevronRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-2xl transition-all backdrop-blur-md flex items-center justify-center gap-2 text-lg hover:-translate-y-1">
                <Settings size={20} /> Paste API Key
              </button>
            </div>
          </motion.div>

          {/* Right Robot */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
            <Cute3DRobot />
          </motion.div>
        </div>
      </main>

      {/* --- 3D SCROLLING LIVE DEMO SECTION --- */}
      <LiveDemoSection />

      {/* --- GRID FEATURES SECTION --- */}
      <section className="relative z-10 py-32 bg-[#050814] border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Built for <span className="text-cyan-400">Scale</span> & <span className="text-indigo-400">Speed</span>.</h2>
            <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto">No login required. Local processing. Zero latency generation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Cards using 3D Hover Effects */}
            {[
              { icon: Mic, title: "Whisper V3 Processing", desc: "Captures 30s audio chunks and transcripts seamlessly while you talk." },
              { icon: Zap, title: "Sub-second Generation", desc: "Utilizes Groq API's blazing fast inference to generate 3 cards instantly." },
              { icon: MessageSquare, title: "Contextual Deep Chat", desc: "Click any suggestion to stream a detailed expansion without leaving the view." }
            ].map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.05] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 text-cyan-400 group-hover:text-white transition-colors shadow-lg">
                    <feat.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feat.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <footer className="relative z-10 bg-black py-32 border-t border-white/[0.1] overflow-hidden">
        {/* Animated Laser Line */}
        <motion.div 
          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-[2px] bg-[linear-gradient(90deg,transparent_0%,#22d3ee_50%,transparent_100%)] bg-[length:200%_100%]"
        />
        
        <div className="max-w-4xl mx-auto text-center px-8 relative z-10">
          <Sparkles className="mx-auto text-cyan-400 mb-6 w-12 h-12 animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-white tracking-tight">Stop taking notes.<br/>Start taking action.</h2>
          <button className="px-12 py-6 bg-white text-black hover:bg-gray-200 font-bold rounded-full transition-transform hover:scale-105 text-xl shadow-[0_0_50px_rgba(255,255,255,0.3)]">
            Launch Your Workspace
          </button>
        </div>
      </footer>
    </div>
  );
}