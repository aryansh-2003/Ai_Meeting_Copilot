import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Square, Sparkles, ChevronDown, Activity } from 'lucide-react';

const ActiveVoiceWave = ({ isListening }) => {
  return (
    <div className="flex items-end justify-center gap-1.5 h-32 w-full max-w-3xl mx-auto mb-8">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 md:w-2 bg-gradient-to-t from-[#4BE3D3] to-[#A8FFDB] rounded-full"
          animate={{
            height: isListening 
              ? ["10%", `${Math.random() * 80 + 20}%`, "10%"] 
              : "10%"
          }}
          transition={{
            duration: isListening ? Math.random() * 0.4 + 0.2 : 0.5,
            repeat: isListening ? Infinity : 0,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [translation, setTranslation] = useState("");
  
  // Mock real-time transcription and translation effect
  useEffect(() => {
    let interval;
    if (isListening) {
      let chars = 0;
      const sampleText = "Welcome to Aaco. Start speaking naturally and we will provide real-time translation with minimal latency. This demonstrates our advanced voice intelligence.";
      const targetText = "Bienvenue chez Aaco. Commencez à parler naturellement et nous vous fournirons une traduction en temps réel avec une latence minimale. Ceci démontre notre intelligence vocale avancée.";
      
      setTranscript("");
      setTranslation("");
      
      interval = setInterval(() => {
        chars++;
        setTranscript(sampleText.substring(0, chars));
        
        // Lag translation slightly behind
        if (chars > 15) {
           setTranslation(targetText.substring(0, chars - 15));
        }
        
        if (chars >= sampleText.length + 15) {
          setIsListening(false);
          clearInterval(interval);
        }
      }, 70); // Typing speed
    }
    return () => clearInterval(interval);
  }, [isListening]);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#231917] font-inter selection:bg-[#4BE3D3] selection:text-[#231917] flex flex-col relative overflow-hidden">
      
      {/* Background Soft Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#A8FFDB]/30 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#4BE3D3]/15 blur-[200px] rounded-full pointer-events-none"></div>

      {/* Header */}
      <header className="px-6 md:px-12 py-8 flex justify-between items-center z-10 w-full max-w-[1800px] mx-auto">
        <div className="flex items-center gap-3">
          <div className="bg-[#231917] p-2.5 rounded-xl">
             <Activity className="text-[#A8FFDB]" size={20} />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-[#231917]">Aaco Translate</h1>
        </div>
        
        <div className="flex items-center bg-white/70 backdrop-blur-xl border border-[#231917]/10 rounded-full px-2 py-1.5 shadow-sm">
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-[#231917]/5 rounded-full cursor-pointer transition-colors">
            <span className="font-mono text-sm font-medium">English</span>
            <ChevronDown size={14} className="text-[#231917]/50"/>
          </div>
          <div className="w-px h-6 bg-[#231917]/10 mx-2"></div>
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-[#231917]/5 rounded-full cursor-pointer transition-colors">
            <span className="font-mono text-sm font-bold text-[#4BE3D3]">French</span>
            <ChevronDown size={14} className="text-[#231917]/50"/>
          </div>
        </div>
      </header>

      {/* Main Translation Interface */}
      <main className="flex-1 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col relative z-10 pb-36 pt-4">
        
        {/* Dynamic Voice Wave */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <ActiveVoiceWave isListening={isListening} />
        </motion.div>
        
        {/* Translation Cards Container */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 flex-1">
          
          {/* Source Text Card (Light Glass) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className={`flex flex-col bg-white/60 backdrop-blur-2xl rounded-[40px] p-8 md:p-12 border ${isListening ? 'border-[#4BE3D3]/60 shadow-[0_0_50px_rgba(75,227,211,0.2)]' : 'border-[#231917]/5 shadow-xl'} transition-all duration-500 h-full min-h-[40vh]`}
          >
             <div className="font-mono text-sm uppercase tracking-widest text-[#231917]/40 mb-8 flex items-center gap-3">
               <span className={`w-2.5 h-2.5 rounded-full ${isListening ? 'bg-red-500 animate-pulse' : 'bg-[#231917]/20'}`}></span>
               Listening (English)
             </div>
             <div className="text-3xl md:text-5xl font-medium tracking-tighter text-[#231917] leading-[1.15] flex-1">
               {transcript || <span className="opacity-20">Tap the microphone to start speaking...</span>}
             </div>
             {isListening && (
               <div className="mt-8">
                 <motion.div className="h-1 bg-gradient-to-r from-[#4BE3D3] to-transparent rounded-full" animate={{ width: ["0%", "100%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
               </div>
             )}
          </motion.div>
          
          {/* Target Text Card (Dark Premium) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col bg-[#231917] rounded-[40px] p-8 md:p-12 border border-[#231917] shadow-2xl h-full min-h-[40vh] relative overflow-hidden"
          >
             {/* Subtle internal glow for dark card */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#A8FFDB]/5 blur-[80px] rounded-full pointer-events-none"></div>

             <div className="font-mono text-sm uppercase tracking-widest text-[#A8FFDB]/60 mb-8 flex items-center gap-3 relative z-10">
               <Sparkles size={16} className="text-[#A8FFDB]" />
               Translation (French)
             </div>
             <div className="text-3xl md:text-5xl font-medium tracking-tighter text-white leading-[1.15] flex-1 relative z-10">
               {translation || <span className="opacity-20 text-white">La traduction apparaîtra ici...</span>}
             </div>
          </motion.div>
          
        </div>

      </main>

      {/* Floating Action Button for Recording */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
        <button 
          onClick={() => setIsListening(!isListening)}
          className={`group flex items-center justify-center w-24 h-24 rounded-full shadow-2xl transition-all duration-400 ${
            isListening 
              ? "bg-[#231917] hover:bg-black scale-95 shadow-[0_0_30px_rgba(35,25,23,0.3)]" 
              : "bg-gradient-to-br from-[#4BE3D3] to-[#87EBC4] hover:scale-105 hover:shadow-[0_0_40px_rgba(75,227,211,0.5)]"
          }`}
        >
          {isListening ? (
             <Square className="text-[#A8FFDB] transition-transform duration-300 group-hover:scale-90" size={32} fill="currentColor" />
          ) : (
             <Mic className="text-[#231917] transition-transform duration-300 group-hover:scale-110" size={36} />
          )}
        </button>
        {/* Pulsing ring when listening */}
        {isListening && (
          <motion.div 
            className="absolute inset-0 border-2 border-[#231917]/20 rounded-full pointer-events-none"
            animate={{ scale: [1, 1.6], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </div>

    </div>
  );
}