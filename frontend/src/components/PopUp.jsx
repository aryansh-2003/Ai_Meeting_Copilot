import { X, Clock } from 'lucide-react';
import { useState } from 'react';

export const ComingSoonPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e3a8a]/60 p-4 backdrop-blur-sm animate-in fade-in duration-200 font-dora">
      
      <div className="relative w-full max-w-md transform flex-col items-center rounded-3xl bg-white p-8 text-center comic-border comic-shadow animate-in zoom-in-95 duration-300">
        
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFB5A7] text-[#1e3a8a] comic-border comic-shadow-sm transition-transform hover:scale-110 hover:bg-[#ff9a8a] active:translate-y-1 active:shadow-none"
        >
          <X className="h-6 w-6 font-black" strokeWidth={3} />
        </button>

=        <div className="absolute -top-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-[#FFD166] comic-border comic-shadow">
          <Clock className="h-10 w-10 text-[#1e3a8a] animate-spin-slow" strokeWidth={2.5} style={{ animationDuration: '4s' }} />
        </div>

        <h2 className="mt-8 text-3xl font-black uppercase text-[#1e3a8a] leading-tight">
          Hold your <br/> Bamboo Copter! 🚁
        </h2>
        
        <div className="my-5 rounded-2xl bg-[#E0F2FE] p-4 comic-border border-2">
          <p className="text-lg font-bold text-[#1e3a8a]">
            This gadget is still in the <span className="text-[#FF69B4] underline decoration-wavy decoration-2">22nd Century</span>!
          </p>
        </div>

        <p className="text-md font-semibold text-gray-500">
          Doraemon is currently searching his 4D pocket for this feature. Please take the Time Machine back here later, Nobita-kun! 🐾
        </p>

      </div>
    </div>
  );
};