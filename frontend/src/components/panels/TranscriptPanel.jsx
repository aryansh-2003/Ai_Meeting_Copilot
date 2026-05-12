import React, { useEffect, useRef } from 'react';
import { MicIcon, StopIcon } from '../ui/Icon';
import IconButton from '../ui/IconButton';
import { motion, AnimatePresence } from 'framer-motion';


export default function TranscriptPanel({ isRecording, onToggleRecording, transcripts }) {
  const endRef = useRef(null);

  return (
    // Removed hardcoded opaque backgrounds, letting the parent's glassmorphism shine through
    // Added a subtle inner gradient and overlay for depth
    <div className="relative flex flex-col h-full min-h-0 w-full rounded-2xl overflow-hidden bg-transparent">
      
      {/* --- Header --- */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-[#4ade80]/20 bg-transparent shrink-0 z-10">
        <h2 className="text-sm font-bold text-slate-200 tracking-wide flex items-center gap-2">
          1. Mic & Transcript
        </h2>
        
        {/* Animated Status Badge */}
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${isRecording ? 'text-[#4ade80]' : 'text-slate-500'}`}>
            {isRecording ? 'Recording Live' : 'Idle'}
          </span>
          {isRecording && (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
            </span>
          )}
        </div>
      </div>
      
      {/* --- Controls Section --- */}
      <div className="relative p-4 border-b border-[#4ade80]/10 bg-transparent flex items-center gap-4 shrink-0 overflow-hidden z-10">
        {/* Subtle animated glow behind the mic when recording */}
        <AnimatePresence>
          {isRecording && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute left-4 w-12 h-12 bg-[#4ade80]/20 rounded-full blur-xl pointer-events-none"
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
          <span className="text-sm font-medium text-slate-200">
            {isRecording ? 'Listening actively' : 'Microphone paused'}
          </span>
          <span className="text-[11px] text-slate-400">
            {isRecording ? 'Transcribing audio stream...' : 'Click to start capture'}
          </span>
        </div>
      </div>

      {/* --- Transcript Feed --- */}
      {/* Custom styled scrollbar for a premium feel */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 z-0 
        [&::-webkit-scrollbar]:w-1.5 
        [&::-webkit-scrollbar-track]:bg-transparent 
        [&::-webkit-scrollbar-thumb]:bg-slate-700 
        [&::-webkit-scrollbar-thumb]:rounded-full 
        hover:[&::-webkit-scrollbar-thumb]:bg-slate-600"
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
              {/* Timeline Column (Hidden for pure text feel, or subtle) */}
              <div className="flex flex-col items-center pt-1 gap-1 w-12 shrink-0 opacity-50">
                <span className="text-[10px] font-mono text-slate-500 whitespace-nowrap">
                  {t.time.replace(/ AM| PM/g, '')}
                </span>
              </div>

              {/* Message Raw Text */}
              <div className="relative w-full">
                <p className="text-[15px] text-slate-300 leading-relaxed font-light">
                  <span className="text-[#4ade80] font-medium mr-2">SPEAKER 1:</span>
                  {t.text}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        <div ref={endRef} />
      </div>

    </div>
  );
}