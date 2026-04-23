import React from 'react';
import { Menu, Mic, Gamepad2, Coffee, Ghost } from 'lucide-react';
import Navbar from './Navbar'; // Importing the separate component

function chatRoom() {
  
  return (
    <div className="min-h-screen bg-[#FFFDF5] font-sans text-black relative pb-32">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 opacity-10 pointer-events-none z-0" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23000000' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="max-w-md mx-auto relative z-10 px-5 pt-6">
        
        {/* Top Header */}
        <div className="flex justify-between items-center mb-8">
          <button className="bg-white p-3 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none transition-all">
            <Menu className="w-6 h-6" strokeWidth={3} />
          </button>
          
          <div className="bg-[#FCD34D] w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            😎
          </div>
        </div>

        {/* Title Section with Decorations */}
        <div className="relative mb-8">
           {/* Floating Decorations */}
           <div className="absolute -top-8 left-0 text-4xl -rotate-12">🌮</div>
           <div className="absolute -top-10 left-1/2 text-4xl opacity-50">🌚</div>
           <div className="absolute top-10 right-0 text-4xl rotate-12 z-20">🎉</div>
           <div className="absolute top-20 right-2 text-4xl opacity-30 rotate-12">👻</div>

           <h1 className="text-5xl font-black leading-[0.9] tracking-tight relative z-10">
             Join the <br />
             <span className="text-[#FB7185] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Party!</span>
           </h1>
        </div>

        {/* Filter Scroll (Pills) */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-6 no-scrollbar">
          <button className="whitespace-nowrap bg-black text-white px-5 py-2 rounded-full border-2 border-black font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
            All Rooms
          </button>
          <button className="whitespace-nowrap bg-white text-black px-5 py-2 rounded-full border-2 border-black font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1">
            Trending 🔥
          </button>
          <button className="whitespace-nowrap bg-white text-black px-5 py-2 rounded-full border-2 border-black font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1">
            Gaming 🎮
          </button>
        </div>

        {/* Featured Hero Card (Purple) */}
        <div className="bg-[#6D67E4] rounded-2xl border-2 border-black p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] mb-6 text-white relative overflow-hidden group">
          <div className="flex justify-between items-start mb-8 relative z-10">
             <div className="bg-[#BE185D] px-3 py-1 rounded-full border-2 border-black text-xs font-black uppercase tracking-wider shadow-sm">
               Live Now
             </div>
             <div className="bg-black/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
               1.2k online
             </div>
          </div>

          <div className="w-14 h-14 bg-white rounded-full border-2 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
             <Mic className="text-black w-7 h-7" />
          </div>

          <h2 className="text-2xl font-black leading-tight mb-2">
            Karaoke Night (Bad Singing Only)
          </h2>
          <p className="text-sm font-bold opacity-90">Hosted by @loud_mic</p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 gap-4">
          
          {/* Card 1: Green */}
          <div className="bg-[#4ADE80] rounded-2xl border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between h-48 active:scale-95 transition-transform">
             <div className="flex justify-between items-start">
               <div className="w-10 h-10 bg-white rounded-full border-2 border-black flex items-center justify-center text-xl">
                 🐸
               </div>
               <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded font-bold">LIVE</span>
             </div>
             <div>
               <h3 className="font-black text-lg leading-tight mb-1">The Meme Den</h3>
               <p className="text-xs font-bold opacity-70">248 vibing</p>
             </div>
          </div>

          {/* Card 2: Red/Salmon */}
          <div className="bg-[#FB7185] rounded-2xl border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between h-48 active:scale-95 transition-transform">
             <div className="flex justify-between items-start">
               <div className="w-10 h-10 bg-white rounded-full border-2 border-black flex items-center justify-center">
                 <Coffee className="w-5 h-5 text-black" />
               </div>
               <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded font-bold">LIVE</span>
             </div>
             <div>
               <h3 className="font-black text-lg leading-tight mb-1">No Sleep Club</h3>
               <p className="text-xs font-bold opacity-70">420 awake</p>
             </div>
          </div>

          {/* Card 3: Yellow */}
          <div className="bg-[#FCD34D] rounded-2xl border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between h-40 active:scale-95 transition-transform">
             <div className="flex justify-between items-start">
               <div className="w-10 h-10 bg-white rounded-full border-2 border-black flex items-center justify-center">
                 <Gamepad2 className="w-5 h-5 text-black" />
               </div>
               <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded font-bold">LIVE</span>
             </div>
             {/* Content implied to continue below fold */}
          </div>

          {/* Card 4: Blue */}
          <div className="bg-[#60A5FA] rounded-2xl border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between h-40 active:scale-95 transition-transform">
             <div className="flex justify-between items-start">
               <div className="w-10 h-10 bg-white rounded-full border-2 border-black flex items-center justify-center">
                 <Ghost className="w-5 h-5 text-black" />
               </div>
               <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded font-bold">LIVE</span>
             </div>
          </div>

        </div>
      </div>

      {/* Insert Separate Navbar */}
      <Navbar />

    </div>
  );
};

export default chatRoom;