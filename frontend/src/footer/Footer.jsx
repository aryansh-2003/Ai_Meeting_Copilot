import React from 'react';
import { Heart, Instagram, Twitter, Linkedin, Send, ArrowUp, Cloud, Zap, Navigation, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#FFF3B0] pt-16 border-t-4 border-[#1e3a8a] font-sans text-[#1e3a8a] overflow-hidden">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap');
        
        .font-dora {
          font-family: 'Fredoka', sans-serif;
        }

        .comic-border {
          border: 4px solid #1e3a8a;
        }
        
        .comic-shadow {
          box-shadow: 6px 6px 0px 0px #1e3a8a;
        }
        
        .comic-shadow-sm {
          box-shadow: 3px 3px 0px 0px #1e3a8a;
        }

        .bg-polka-footer {
          background-image: radial-gradient(#1e3a8a 1.5px, transparent 1.5px);
          background-size: 24px 24px;
          opacity: 0.05;
        }

        @keyframes marquee-footer {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-footer {
          animation: marquee-footer 20s linear infinite;
        }

        @keyframes hover-float {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(15deg); }
        }
        .animate-hover-float {
          animation: hover-float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-polka-footer pointer-events-none"></div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-8 left-10 text-5xl opacity-80 -rotate-12 animate-pulse drop-shadow-md">🚁</div>
      <div className="absolute top-24 right-[40%] text-6xl opacity-80 rotate-12 drop-shadow-md">🥞</div>
      <div className="absolute bottom-32 left-1/4 text-white/50 scale-150 -z-10"><Cloud size={100} fill="currentColor"/></div>

      {/* Fun Angled Marquee */}
      <div className="relative z-20 bg-[#00AEEF] text-white border-y-4 border-[#1e3a8a] py-3 overflow-hidden whitespace-nowrap mb-12 transform -rotate-2 comic-shadow mx-[-10px]">
        <div className="animate-marquee-footer inline-block font-dora font-black uppercase text-lg tracking-widest">
           ✨ 🚁 BAMBOO COPTER • 🚪 ANYWHERE DOOR • ⏱️ TIME MACHINE • 🥞 DORAYAKI • 🎒 4D POCKET • 
           ✨ 🚁 BAMBOO COPTER • 🚪 ANYWHERE DOOR • ⏱️ TIME MACHINE • 🥞 DORAYAKI • 🎒 4D POCKET •
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 relative z-10 font-dora">
        
        {/* Column 1: Brand & Vibe */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-6xl font-black leading-none drop-shadow-[2px_2px_0_#fff]">
            DORA<span className="text-[#FF69B4]">.</span>CHAT
            <span className="inline-block ml-3 transform -rotate-12 bg-white rounded-full p-1 comic-border">🐱</span>
          </h2>
          <p className="text-xl font-bold text-[#1e3a8a]/80 max-w-sm leading-snug bg-white/60 p-4 rounded-2xl comic-border border-dashed">
            Making the 22nd century accessible today. Watch out for Gian's concerts and keep your Dorayaki safe! 
          </p>
          
          <div className="inline-flex items-center gap-2 bg-white text-[#1e3a8a] px-5 py-2.5 rounded-full font-black text-sm mt-2 comic-border comic-shadow-sm cursor-help hover:-translate-y-1 transition-transform">
            <span className="w-3 h-3 bg-[#34D399] rounded-full animate-ping border border-[#1e3a8a]"></span>
            Time Patrol Status: All Clear 🚀
          </div>
        </div>

        {/* Column 2: The Gadgets (Links) */}
        <div className="relative z-20">
          <h3 className="font-black text-2xl mb-5 uppercase bg-[#FFD166] inline-block px-3 py-1 rounded-xl comic-border -rotate-2">
            The Map 🗺️
          </h3>
          <ul className="space-y-4 font-bold text-lg">
            {[
              { name: "Nobita's House", icon: "🏠" }, 
              { name: "Gadget Catalog", icon: "🎒" }, 
              { name: "Time Patrol Rules", icon: "📜" }, 
              { name: "Lost in Time (404)", icon: "⏱️" }
            ].map((item) => (
              <li key={item.name}>
                <a href="#" className="flex items-center gap-3 hover:translate-x-2 transition-transform hover:text-[#00AEEF] group">
                  <span className="bg-white h-8 w-8 rounded-full flex items-center justify-center comic-border comic-shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Digital Footprint & Newsletter */}
        <div className="relative z-20">
          <h3 className="font-black text-2xl mb-5 uppercase bg-[#FF69B4] text-white inline-block px-3 py-1 rounded-xl comic-border rotate-2">
            Signal Us 📡
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {[
              { icon: <Instagram size={22} />, color: 'bg-[#FF69B4]', link: "https://www.instagram.com/aryansh_dixit_/?hl=en" },
              { icon: <Twitter size={22} fill="currentColor" />, color: 'bg-[#00AEEF]', link: "https://x.com/TechnicalBanda_" },
              { icon: <Linkedin size={22} fill="currentColor" />, color: 'bg-[#FFD166]', link: "https://www.linkedin.com/in/aryansh-dixit-1046b2305" },
              { icon: <Facebook size={22} fill="currentColor" />, color: 'bg-white', link: "https://www.facebook.com/aryansh.dixit" },
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.link} 
                target="_blank"
                rel="noreferrer"
                className={`${social.color} ${social.color === 'bg-white' ? 'text-[#1e3a8a]' : 'text-white'} w-12 h-12 flex items-center justify-center comic-border rounded-2xl comic-shadow-sm hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all`}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          {/* Mini Newsletter - 4D Pocket Style */}
          <div className="mt-8 bg-white p-4 rounded-3xl comic-border comic-shadow relative">
            <div className="absolute -top-4 -right-4 bg-[#34D399] text-[#1e3a8a] text-xs font-black px-3 py-1 rounded-full comic-border rotate-12 animate-pulse">
              NEW!
            </div>
            <label className="text-sm font-black block mb-2 uppercase text-gray-500">Get Gadget Alerts!</label>
            <div className="flex">
                <input 
                  type="email" 
                  placeholder="nobita@22nd.com" 
                  className="w-full border-y-4 border-l-4 border-r-0 border-[#1e3a8a] rounded-l-2xl px-4 py-2 text-base bg-[#f8fafc] outline-none font-bold placeholder:text-gray-400 focus:bg-[#E0F2FE]" 
                />
                <button className="bg-[#00AEEF] text-white px-4 comic-border rounded-r-2xl hover:bg-[#008ccc] transition-colors flex items-center justify-center hover:pr-3">
                    <Send size={20} className="transform -rotate-12" />
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- CHARACTER PNG: NOBITA RUNNING --- */}
      {/* Placed absolute so he overlaps the background and bottom bar beautifully */}
      <div className="absolute bottom-16 right-4 md:right-16 z-0 pointer-events-none opacity-90 md:opacity-100">
        <img 
          src="https://stickershop.line-scdn.net/stickershop/v1/product/936/LINEStorePC/main.png?v=8" 
          alt="Nobita" 
          className="w-[150px] md:w-[220px] drop-shadow-[8px_8px_0_rgba(30,58,138,0.3)] animate-hover-float"
        />
        {/* Sweat drops effect */}
        <div className="absolute top-4 -left-4 text-3xl animate-bounce">💦</div>
        <div className="absolute top-12 -left-8 text-2xl animate-bounce delay-100">💦</div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-30 bg-[#1e3a8a] text-white p-4 border-t-4 border-[#1e3a8a] flex flex-col md:flex-row justify-between items-center gap-4 font-dora mt-10">
        
        <p className="font-bold text-sm text-center md:text-left flex items-center gap-2">
          © {new Date().getFullYear()} You. Built with 
          <span className="bg-white p-1 rounded-full comic-border h-7 w-7 flex items-center justify-center">🥞</span> 
          and zero completed homework.
        </p>
        
        <div className="flex items-center gap-6">
            <span className="text-xs font-black bg-[#FF69B4] px-3 py-1 rounded-full comic-border comic-shadow-sm text-white transform -rotate-2">
              v2112.0.0
            </span>
            
            {/* Scroll to Top - Bamboo Copter Theme */}
            <button 
                onClick={scrollToTop}
                className="group bg-[#FFD166] text-[#1e3a8a] p-3 rounded-2xl comic-border comic-shadow-sm hover:bg-white transition-colors relative"
                title="Fly to Top"
            >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  🚁
                </div>
                <ArrowUp size={24} strokeWidth={4} className="group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;