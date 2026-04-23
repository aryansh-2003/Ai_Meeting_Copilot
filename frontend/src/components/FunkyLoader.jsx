import React from 'react';
import { Sparkles, Clock, Zap } from 'lucide-react';

const FunkyLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] w-full bg-transparent relative z-10 font-dora overflow-hidden">
      
      {/* --- DORAEMON COMIC LOADER CSS --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Fredoka:wght@400;600;700&display=swap');
        
        .font-dora { font-family: 'Fredoka', sans-serif; }
        .font-comic { font-family: 'Bangers', cursive; letter-spacing: 1.5px; }

        .comic-border { border: 4px solid #1e3a8a; }
        .comic-shadow { box-shadow: 6px 6px 0px 0px #1e3a8a; }
        
        /* Shaking Bell Animation */
        @keyframes shake-bell {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-20deg) scale(1.1); }
          50% { transform: rotate(20deg) scale(1.1); }
          75% { transform: rotate(-10deg) scale(1.1); }
        }
        .animate-shake-bell { animation: shake-bell 0.5s ease-in-out infinite; }

        /* Rapid Spinning for Action Stars */
        @keyframes spin-action {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(0.8); }
          to { transform: rotate(360deg) scale(1); }
        }
        .animate-spin-action { animation: spin-action 1.5s linear infinite; }

        /* Bouncing Text Ellipsis */
        @keyframes bounce-dot {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .dot-1 { animation: bounce-dot 0.6s infinite 0s; }
        .dot-2 { animation: bounce-dot 0.6s infinite 0.2s; }
        .dot-3 { animation: bounce-dot 0.6s infinite 0.4s; }

        /* Comic pop burst */
        @keyframes pop-burst {
          0% { transform: scale(0); opacity: 1; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-pop-burst {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 4px solid #FF3366;
          border-radius: 50%;
          animation: pop-burst 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
        }
      `}</style>

      {/* --- THE LOADER GRAPHIC --- */}
      <div className="relative flex items-center justify-center w-32 h-32 mb-6 mt-4">
        
        {/* Background Action Burst (Pink Anywhere Door Color) */}
        <div className="absolute inset-0 bg-[#FF69B4] rounded-[2rem] transform rotate-12 comic-border comic-shadow animate-pulse"></div>
        
        {/* Blue 4D Pocket Base */}
        <div className="absolute inset-2 bg-[#00AEEF] rounded-full transform -rotate-6 comic-border flex items-center justify-center overflow-hidden">
          {/* Halftone dots inside the pocket */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1e3a8a 2px, transparent 2px)', backgroundSize: '10px 10px' }}></div>
        </div>

        {/* Popping Action Ring */}
        <div className="animate-pop-burst z-0"></div>

        {/* The Golden Bell (Shaking Frantically) */}
        <div className="relative w-16 h-16 bg-[#FFD166] rounded-full comic-border flex flex-col items-center justify-start pt-2 z-10 animate-shake-bell shadow-[4px_4px_0_0_#1e3a8a]">
          {/* Bell details */}
          <div className="w-10 h-1.5 bg-[#1e3a8a] rounded-full mb-1"></div>
          <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
          <div className="w-1 h-4 bg-[#1e3a8a]"></div>
        </div>

        {/* Floating Comic Icons around the bell */}
        <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-[#FFD166] animate-spin-action drop-shadow-[2px_2px_0_#1e3a8a]" fill="#FFD166" />
        <Clock className="absolute -bottom-2 -left-4 w-7 h-7 text-[#34D399] animate-spin-action drop-shadow-[2px_2px_0_#1e3a8a]" fill="white" />
        <Zap className="absolute top-4 -left-6 w-6 h-6 text-[#FF3366] animate-bounce drop-shadow-[2px_2px_0_#1e3a8a]" fill="#FF3366" />

      </div>

      {/* --- TYPOGRAPHY / TEXT --- */}
      <div className="relative text-center mt-4">
        {/* Manga action label */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#FF3366] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-md comic-border transform -rotate-3 whitespace-nowrap z-10">
          Time Machine Active
        </div>
        
        {/* Main Text */}
        <div className="bg-white comic-border rounded-2xl px-6 py-3 comic-shadow-sm transform rotate-1">
          <h2 className="font-comic text-2xl md:text-3xl text-[#1e3a8a] flex items-end gap-1">
            SEARCHING POCKET
            <span className="flex mb-1 ml-1">
              <span className="dot-1 inline-block text-[#FF3366] text-4xl leading-none">.</span>
              <span className="dot-2 inline-block text-[#00AEEF] text-4xl leading-none">.</span>
              <span className="dot-3 inline-block text-[#FFD166] text-4xl leading-none">.</span>
            </span>
          </h2>
        </div>
        
        <p className="font-bold text-sm text-[#1e3a8a] mt-4 uppercase tracking-wide bg-[#FFD166] inline-block px-3 py-1 rounded-full comic-border opacity-90">
          Fetching 22nd Century Chats 🚀
        </p>
      </div>

    </div>
  );
};

export default FunkyLoader;