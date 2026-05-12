import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Nav from '../Navbar/Navbar';
import { ArrowRight } from 'lucide-react';

const smoothFadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const pills = [
  { w: '1vw', h: 3.2, bg: 'linear-gradient(135deg, #FFD0C5 0%, #FF6840 100%)' },
  { w: '1.8vw', h: 6.4, bg: 'linear-gradient(135deg, #FFD0C5 0%, #FF6840 100%)' },
  { w: '2.6vw', h: 11.2, bg: 'radial-gradient(circle at 30% 20%, #FFF 0%, #FF8A66 40%, #A82E0F 100%)' },
  { w: '3.2vw', h: 20, bg: 'radial-gradient(ellipse at 50% 30%, #FFF 0%, #FFB199 30%, #DE491B 70%, #521000 100%)' },
  { w: '4.4vw', h: 44, bg: 'radial-gradient(ellipse at 40% 40%, #FFB69E 0%, #A32828 40%, #2E0404 80%)' },
  { w: '6.4vw', h: 64, bg: 'radial-gradient(ellipse at 30% 50%, #4BE3D3 0%, #175259 25%, #260515 50%, #872424 80%, #FF8957 100%)' },
  { w: '8.8vw', h: 76.8, bg: 'radial-gradient(ellipse at 70% 50%, #FF8957 0%, #7A1523 30%, #2E0618 60%, #156961 80%, #61FFEA 100%)' },
  { w: '8vw', h: 70.4, bg: 'radial-gradient(ellipse at 80% 40%, #61FFEA 0%, #178275 30%, #2B0C26 60%, #631241 80%, #FFB5CF 100%)' },
  { w: '4.8vw', h: 52, bg: 'radial-gradient(ellipse at 30% 60%, #4BE3D3 0%, #186E57 30%, #472611 60%, #BD4B17 80%, #FF986E 100%)' },
];

const VoiceWave = () => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[65vw] flex items-center justify-end gap-[1.5vw] pr-[2vw] pointer-events-none z-0">
      {pills.map((pill, idx) => (
        <motion.div
          key={idx}
          animate={{ height: [`${pill.h}vh`, `${pill.h * 1.08}vh`, `${pill.h * 0.92}vh`, `${pill.h}vh`] }}
          transition={{ duration: 2.5 + Math.random() * 1.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.15 }}
          style={{
            width: pill.w,
            background: pill.bg,
            borderRadius: '100vw',
            boxShadow: 'inset -8px -8px 24px rgba(0,0,0,0.3), inset 8px 8px 24px rgba(255,255,255,0.4), 0 10px 30px rgba(0,0,0,0.1)',
            opacity: 0.95
          }}
          className="shrink-0 will-change-[height]"
        />
      ))}
    </div>
  )
};

const MiniVoiceWave = () => {
  const miniPills = [
    { w: 4, h: 10, bg: 'linear-gradient(135deg, #FFD0C5 0%, #FF6840 100%)' },
    { w: 6, h: 20, bg: 'linear-gradient(135deg, #FFD0C5 0%, #FF6840 100%)' },
    { w: 10, h: 36, bg: 'radial-gradient(circle at 30% 20%, #FFF 0%, #FF8A66 40%, #A82E0F 100%)' },
    { w: 14, h: 64, bg: 'radial-gradient(ellipse at 50% 30%, #FFF 0%, #FFB199 30%, #DE491B 70%, #521000 100%)' },
    { w: 18, h: 96, bg: 'radial-gradient(ellipse at 40% 40%, #FFB69E 0%, #A32828 40%, #2E0404 80%)' },
    { w: 24, h: 120, bg: 'radial-gradient(ellipse at 30% 50%, #4BE3D3 0%, #175259 25%, #260515 50%, #872424 80%, #FF8957 100%)' },
    { w: 28, h: 140, bg: 'radial-gradient(ellipse at 70% 50%, #FF8957 0%, #7A1523 30%, #2E0618 60%, #156961 80%, #61FFEA 100%)' },
    { w: 26, h: 130, bg: 'radial-gradient(ellipse at 80% 40%, #61FFEA 0%, #178275 30%, #2B0C26 60%, #631241 80%, #FFB5CF 100%)' },
    { w: 18, h: 90, bg: 'radial-gradient(ellipse at 30% 60%, #4BE3D3 0%, #186E57 30%, #472611 60%, #BD4B17 80%, #FF986E 100%)' },
    { w: 12, h: 48, bg: 'radial-gradient(ellipse at 50% 50%, #FFF 0%, #FFB199 30%, #DE491B 70%, #521000 100%)' },
    { w: 6, h: 24, bg: 'linear-gradient(135deg, #FFD0C5 0%, #FF6840 100%)' },
  ];

  return (
    <div className="flex items-center justify-center gap-2 pointer-events-none h-[180px] w-full">
      {miniPills.map((pill, idx) => (
        <motion.div
          key={idx}
          animate={{ height: [`${pill.h}px`, `${pill.h * 1.15}px`, `${pill.h * 0.85}px`, `${pill.h}px`] }}
          transition={{ duration: 2.5 + Math.random() * 1.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.1 }}
          style={{
            width: pill.w,
            background: pill.bg,
            borderRadius: '100px',
            boxShadow: 'inset -2px -2px 6px rgba(0,0,0,0.3), inset 2px 2px 6px rgba(255,255,255,0.4), 0 3px 8px rgba(0,0,0,0.1)',
            opacity: 0.95
          }}
          className="shrink-0 will-change-[height]"
        />
      ))}
    </div>
  )
};

export default function LandingPage() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FDFDFD] text-[#231917] font-sans selection:bg-[#A8FFDB] selection:text-[#231917] overflow-x-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Nav />

      <main className="relative w-full">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-10 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto min-h-[90vh] flex flex-col justify-center">
          <VoiceWave />
          
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="relative z-10 max-w-2xl mt-12">
            <motion.h1 variants={smoothFadeUp} className="font-inter text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.05] mb-6 text-[#231917]">
              Controlled language,<br/>powered by AI
            </motion.h1>
            <motion.p variants={smoothFadeUp} className="text-lg md:text-xl text-[#231917]/80 font-normal mb-10 max-w-xl leading-relaxed font-inter">
              We fuse LLMs with linguistics to deliver controlled voice engines, narratives, and multilingual experiences with safety and QA built in from day one.
            </motion.p>
            <motion.div variants={smoothFadeUp} className="flex flex-wrap items-center gap-4">
              <button onClick={() => navigate('/home')} className="px-8 py-3.5 bg-[#231917] text-[#A8FFDB] font-mono text-sm tracking-wide rounded-xl hover:bg-black transition-colors duration-300">
                Start a Project
              </button>
              <button className="px-8 py-3.5 bg-white border border-[#231917]/20 text-[#231917] font-mono text-sm tracking-wide rounded-xl hover:border-[#231917]/60 transition-colors duration-300">
                View Work
              </button>
            </motion.div>
            
            <motion.div variants={smoothFadeUp} className="mt-32 flex items-center gap-8">
              <span className="font-mono text-lg text-[#231917] tracking-widest whitespace-nowrap">Trusted by</span>
            </motion.div>
          </motion.div>
        </section>

        {/* LOGO TICKER */}
        <section className="py-8 bg-transparent overflow-hidden flex relative z-10">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex items-center gap-24 whitespace-nowrap px-12"
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-3xl font-bold text-[#231917]/20 font-inter tracking-tighter uppercase">Zenergetor</span>
                <span className="text-3xl font-bold text-[#231917]/20 font-inter tracking-tighter uppercase">Datox.Ai</span>
                <span className="text-3xl font-bold text-[#231917]/20 font-inter tracking-tighter uppercase">Groq Inc</span>
                <span className="text-3xl font-bold text-[#231917]/20 font-inter tracking-tighter uppercase">Auralia</span>
                <span className="text-3xl font-bold text-[#231917]/20 font-inter tracking-tighter uppercase">Synthetix</span>
              </React.Fragment>
            ))}
          </motion.div>
        </section>

        {/* CAPABILITIES GRID */}
        <section className="py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={smoothFadeUp}
            className="bg-[#F2F2F2]/80 backdrop-blur-2xl rounded-[40px] p-8 md:p-16 border border-white/50 shadow-sm"
          >
            <h2 className="text-5xl md:text-6xl font-bold font-inter mb-16 max-w-2xl tracking-tight">
              What we do with audio and AI.
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Voice Engines", desc: "Real-time transcription powered by Groq's high-speed inference." },
                { title: "Narratives", desc: "Automated summarization and structured action items instantly." },
                { title: "Intelligence", desc: "Fact-checking and contextual suggestions mid-conversation." },
                { title: "Analytics", desc: "Deep dive into meeting metrics, sentiment, and participation." },
                { title: "Integrations", desc: "Seamless syncing with your existing CRM and workspace tools." },
                { title: "Security", desc: "Enterprise-grade data protection and ephemeral processing." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/60 p-8 rounded-[24px] hover:bg-white transition-colors duration-300">
                  <div className="font-mono text-sm font-bold text-[#231917] mb-6 flex items-center gap-2">
                    <span className="text-[#FF7F50]">[</span> {item.title} <span className="text-[#FF7F50]">]</span>
                  </div>
                  <p className="text-[#231917]/70 font-inter leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={smoothFadeUp}
            className="flex items-center gap-8 md:gap-16 overflow-x-auto hide-scrollbar"
          >
            {['Discover', 'Calibrate', 'Generate', 'QA', 'Deliver'].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="text-5xl md:text-7xl font-bold font-inter text-[#231917] shrink-0 hover:text-[#A8FFDB] transition-colors duration-300" style={{ WebkitTextStroke: '1px #231917', color: 'transparent' }}>
                  {step}
                </div>
                {idx !== arr.length - 1 && (
                  <ArrowRight className="w-12 h-12 text-[#231917]/20 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </section>

        {/* LARGE IMAGE SECTION */}
        <section className="relative py-64 bg-[#231917] text-white flex items-center min-h-[80vh]">
          <div className="absolute inset-0 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" alt="Person with headphones" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-medium font-inter mb-8 tracking-tight drop-shadow-2xl"
            >
              Meeting become easier
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="font-mono text-sm md:text-xl text-white/90 uppercase tracking-[0.2em] flex items-center gap-4 md:gap-6 drop-shadow-lg"
            >
              <span>Listen</span>
              <ArrowRight className="w-5 h-5 text-[#A8FFDB]" />
              <span>Analyse</span>
              <ArrowRight className="w-5 h-5 text-[#A8FFDB]" />
              <span>Results</span>
            </motion.div>
          </div>
        </section>

        {/* BLOG / NEWS SECTION */}
        <section className="py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
           <div className="flex justify-between items-end mb-16">
              <h2 className="text-5xl font-bold font-inter text-[#231917]">Latest updates.</h2>
              <button className="hidden md:block font-mono text-sm uppercase tracking-widest hover:text-[#FF7F50] transition-colors">View All</button>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
             {[
               { date: "Oct 12, 2026", title: "The future of real-time meeting intelligence." },
               { date: "Sep 28, 2026", title: "How Groq LPUs are changing the AI landscape." },
               { date: "Sep 15, 2026", title: "Maximizing productivity with automated action items." }
             ].map((post, idx) => (
               <motion.div 
                 key={idx}
                 initial="hidden" whileInView="show" viewport={{ once: true }} variants={smoothFadeUp}
                 className="bg-white rounded-[32px] p-8 shadow-sm border border-[#231917]/5 group cursor-pointer"
               >
                 <div className="font-mono text-xs text-[#231917]/40 mb-6">{post.date}</div>
                 <h3 className="text-2xl font-bold font-inter mb-12 group-hover:text-[#FF7F50] transition-colors">{post.title}</h3>
                 <div className="font-mono text-sm border-b border-[#231917] inline-block pb-1">Read More</div>
               </motion.div>
             ))}
           </div>
        </section>

        {/* BOTTOM CTA SECTION */}
        <section className="py-40 px-6 flex flex-col items-center justify-center text-center bg-[#FDFDFD] relative z-10">
          <motion.h2 
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={smoothFadeUp}
            className="text-5xl md:text-7xl font-medium font-inter tracking-tight text-[#231917] mb-8"
          >
            Ready to brief the voice?
          </motion.h2>
          
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 1 }} className="w-full flex justify-center">
            <MiniVoiceWave />
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
            onClick={() => navigate('/home')}
            className="w-72 max-w-[90vw] py-5 mt-28 bg-[#231917] text-[#A8FFDB] font-mono text-sm tracking-wide rounded-xl hover:bg-black transition-colors duration-300 shadow-xl hover:shadow-2xl"
          >
            Start a Project
          </motion.button>
        </section>

      </main>

      {/* FOOTER */}
      <footer 
        className="w-full relative overflow-x-hidden" 
        style={{ 
          background: 'radial-gradient(circle at 0% 0%, #00F0C0 0%, transparent 40%), linear-gradient(135deg, #4BE3D3 0%, #7CF0D0 50%, #9EF5DC 100%)' 
        }}
      >
        {/* Grain / Noise Overlay */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>

        <div className="pt-8 pl-8 md:pt-12 md:pl-12 w-full flex flex-col relative z-10">
          <div className="flex-1 w-full rounded-tl-[60px] md:rounded-tl-[80px] p-8 md:p-16 lg:p-24 flex flex-col relative bg-white/40 backdrop-blur-2xl shadow-[inset_2px_2px_20px_rgba(255,255,255,0.5),-10px_-10px_30px_rgba(0,0,0,0.02)] border-t border-l border-white/50">
            <div className="max-w-[1600px] w-full mx-auto flex flex-col flex-grow">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 md:mb-32">
                <div>
                  <div className="font-mono text-lg text-[#231917] mb-8">Menu</div>
                  <ul className="space-y-4 font-inter text-[#231917] font-normal text-[15px]">
                    <li><a href="#" className="hover:text-[#FF7F50] transition-colors">Home</a></li>
                    <li><a href="#" className="hover:text-[#FF7F50] transition-colors">The Company</a></li>
                    <li><a href="#" className="hover:text-[#FF7F50] transition-colors">Case Study</a></li>
                    <li><a href="#" className="hover:text-[#FF7F50] transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-[#FF7F50] transition-colors">Contact</a></li>
                  </ul>
                </div>
                
                <div>
                  <div className="font-mono text-lg text-[#231917] mb-8">Contact</div>
                  <ul className="space-y-1 font-inter text-[#231917] font-normal text-[15px]">
                    <li>123-456-7890</li>
                    <li>info@aaco.com</li>
                    <li><a href="#" className="underline hover:text-[#FF7F50] transition-colors mt-2 inline-block">Linked In</a></li>
                  </ul>
                </div>
                
                <div>
                  <div className="font-mono text-lg text-[#231917] mb-8">Address</div>
                  <p className="font-inter text-[#231917] font-normal text-[15px] leading-relaxed">
                    500 Terry Francine St.<br />
                    San Francisco, CA 94158
                  </p>
                </div>
                
                <div>
                  <div className="font-mono text-lg text-[#231917] mb-8">Legal</div>
                  <ul className="space-y-4 font-inter text-[#231917] font-normal text-[15px]">
                    <li><a href="#" className="hover:text-[#FF7F50] transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-[#FF7F50] transition-colors">Accessibility Statement</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-auto flex flex-col md:flex-row items-end justify-between w-full pt-12 md:pt-0">
                <h1 className="text-[20vw] md:text-[16vw] font-bold font-inter tracking-tighter text-[#231917] leading-[0.85] m-0 p-0 -ml-2 md:-ml-4">
                  Aaco
                </h1>
                <div className="font-inter text-[#231917] text-sm text-left md:text-right mt-8 md:mt-0 pb-4">
                  © 2026 by Aaco, Powered<br/>and secured by <a href="#" className="underline">TwinMind</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}