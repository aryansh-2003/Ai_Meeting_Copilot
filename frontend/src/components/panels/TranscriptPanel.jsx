import React, { useEffect, useRef } from 'react';
import { MicIcon, StopIcon } from '../ui/Icon';
import IconButton from '../ui/IconButton';
import { motion, AnimatePresence } from 'framer-motion';


export default function TranscriptPanel({ isRecording, onToggleRecording, transcripts }) {
  const endRef = useRef(null);

  return (
    // Removed hardcoded opaque backgrounds, letting the parent's glassmorphism shine through
    // Added a subtle inner gradient and overlay for depth
    <div className="relative flex flex-col h-full min-h-0 w-full rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent">
      
      {/* --- Header --- */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-white/[0.05] bg-black/20 backdrop-blur-md shrink-0 z-10">
        <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase flex items-center gap-2">
          <span className="w-1 h-3 rounded-full bg-blue-500/80 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
          1. Mic & Transcript
        </h2>
        
        {/* Animated Status Badge */}
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${isRecording ? 'text-red-400' : 'text-gray-500'}`}>
            {isRecording ? 'Recording Live' : 'Idle'}
          </span>
          {isRecording && (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
            </span>
          )}
        </div>
      </div>
      
      {/* --- Controls Section --- */}
      <div className="relative p-4 border-b border-white/[0.05] bg-white/[0.01] flex items-center gap-4 shrink-0 overflow-hidden z-10">
        {/* Subtle animated glow behind the mic when recording */}
        <AnimatePresence>
          {isRecording && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute left-4 w-12 h-12 bg-red-500/20 rounded-full blur-xl pointer-events-none"
            />
          )}
        </AnimatePresence>

        <IconButton 
          icon={isRecording ? <StopIcon /> : <MicIcon />}
          active={isRecording}
          onClick={onToggleRecording}
          className="relative z-10 shadow-lg"
        />
        
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-200">
            {isRecording ? 'Listening actively' : 'Microphone paused'}
          </span>
          <span className="text-[11px] text-gray-500">
            {isRecording ? 'Transcribing audio stream...' : 'Click to start capture'}
          </span>
        </div>
      </div>

      {/* --- Transcript Feed --- */}
      {/* Custom styled scrollbar for a premium feel */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 z-0 
        [&::-webkit-scrollbar]:w-1.5 
        [&::-webkit-scrollbar-track]:bg-transparent 
        [&::-webkit-scrollbar-thumb]:bg-white/10 
        [&::-webkit-scrollbar-thumb]:rounded-full 
        hover:[&::-webkit-scrollbar-thumb]:bg-white/20"
      >
        {/* AnimatePresence handles elements entering and leaving the DOM */}
        <AnimatePresence mode="popLayout">
          {[...transcripts].reverse().map((t) => (
            <motion.div 
              key={t.id} 
              layout // Smoothly pushes older items down
              initial={{ opacity: 0, y: -20, scale: 0.95, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              transition={{ 
                type: "spring", 
                stiffness: 250, 
                damping: 25, 
                mass: 0.5 
              }}
              className="flex gap-4 group"
            >
              {/* Timeline Column */}
              <div className="flex flex-col items-center pt-1 gap-1 w-16 shrink-0">
                <span className="text-[10px] font-mono text-gray-500/60 whitespace-nowrap group-hover:text-gray-400 transition-colors">
                  {t.time.replace(/ AM| PM/g, '')} {/* Cleans up time string slightly if desired */}
                </span>
              </div>

              {/* Message Bubble */}
              <div className="relative bg-white/[0.03] border border-white/[0.05] p-3.5 rounded-2xl rounded-tl-sm w-full shadow-sm group-hover:bg-white/[0.06] group-hover:border-white/[0.1] transition-all duration-300">
                <p className="text-sm text-gray-200 leading-relaxed font-light tracking-wide">
                  {t.text}
                </p>
                {/* Subtle glass reflection highlight */}
                <div className="absolute inset-0 rounded-2xl rounded-tl-sm pointer-events-none border border-white/[0.02] mix-blend-overlay"></div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        <div ref={endRef} />
      </div>

    </div>
  );
}