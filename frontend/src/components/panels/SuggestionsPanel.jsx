import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/button';
import { RefreshIcon } from '../ui/Icon';

export default function SuggestionsPanel({ batches, onSuggestionClick, onReload, countdown, isRecording }) {
  
  // PERFORMANCE FIX: Removed heavy CSS shadow glows. 
  // Moved to a clean, professional "Enterprise SaaS" badge style.
  const getTagStyle = (type) => {
    switch(type) {
      case 'ANSWER': 
        return 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10';
      case 'FACT-CHECK': 
        return 'text-amber-300 border-amber-500/30 bg-amber-500/10';
      case 'QUESTION TO ASK': 
        return 'text-sky-300 border-sky-500/30 bg-sky-500/10';
      case 'TALKING POINT': 
        return 'text-indigo-300 border-indigo-500/30 bg-indigo-500/10';
      default: 
        return 'text-slate-300 border-slate-400/30 bg-slate-400/10';
    }
  };

  // Calculate percentage (0 to 1 scale for Framer Motion scaleX)
  const progressScale = isRecording ? (countdown / 30) : 0;

  return (
    <div className="relative flex flex-col h-full min-h-0 w-full rounded-2xl overflow-hidden bg-transparent">
      
      {/* --- Header --- */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-slate-700/50 bg-[#131B2C]/90 backdrop-blur-md shrink-0 z-10">
        <h2 className="text-xs font-bold text-slate-300 tracking-widest uppercase flex items-center gap-2">
          <span className="w-1.5 h-3 rounded-full bg-indigo-500"></span>
          2. Live Suggestions
        </h2>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-800/80 px-2 py-1 rounded-md border border-slate-700/50">
          {batches.length} Batches
        </span>
      </div>

      {/* --- Controls & Progress Section --- */}
      <div className="relative p-4 border-b border-slate-700/50 bg-slate-800/20 flex justify-between items-center shrink-0 z-10 overflow-hidden">
        <Button 
          variant="secondary" 
          onClick={onReload}
          className="relative z-10 bg-slate-800 hover:bg-slate-700 border border-slate-600 shadow-sm transition-all text-xs py-1.5 text-slate-200"
        >
          <RefreshIcon className="opacity-70" /> Reload
        </Button>
        
        <div className="flex flex-col items-end gap-1 relative z-10">
          <span className="text-[10px] text-slate-400 font-mono tracking-wider">
            {isRecording ? `AUTO-REFRESH IN ${countdown}S` : 'PAUSED'}
          </span>
        </div>

        {/* PERFORMANCE FIX: Animated scaleX instead of width. GPU accelerated. */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-slate-700/30 w-full">
          <motion.div 
            className="h-full bg-indigo-500 origin-left"
            animate={{ scaleX: progressScale }}
            transition={{ duration: 1, ease: "linear" }}
            style={{ willChange: "transform" }}
          />
        </div>
      </div>

      {/* --- Suggestions Feed --- */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 z-0 
        [&::-webkit-scrollbar]:w-1.5 
        [&::-webkit-scrollbar-track]:bg-transparent 
        [&::-webkit-scrollbar-thumb]:bg-slate-700 
        [&::-webkit-scrollbar-thumb]:rounded-full 
        hover:[&::-webkit-scrollbar-thumb]:bg-slate-600"
      >
        
        {/* Info Banner */}
        <div className="relative bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 text-sm text-slate-400 leading-relaxed">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500/50 rounded-l-xl"></div>
          While recording, every <strong className="text-slate-200 font-medium">30 seconds</strong> we gather recent context and generate 3 fresh suggestions.
        </div>

        {/* Batches List */}
        <AnimatePresence mode="popLayout">
          {batches.map((batch, index) => (
            <motion.div 
              key={batch.id} 
              layout
              // PERFORMANCE FIX: Removed 'filter: blur(4px)'. It causes massive scroll lag on lists.
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ 
                opacity: index > 0 ? 0.6 : 1, // Older batches fade out slightly to draw focus to new ones
                y: 0, 
                scale: 1 
              }}
              whileHover={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              className="space-y-4"
            >
              {/* Batch Divider */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent"></div>
                <span className="text-[9px] text-slate-500 font-bold tracking-widest uppercase bg-[#131B2C] px-3 py-1 rounded-full border border-slate-700/50">
                  Batch {batch.batchNum} <span className="opacity-50 mx-1">·</span> {batch.time}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent"></div>
              </div>

              {/* Suggestion Cards inside the batch */}
              <div className="space-y-3">
                {batch.suggestions.map((sug, sugIndex) => (
                  <motion.button 
                    key={sug.id} 
                    onClick={() => onSuggestionClick(sug)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: sugIndex * 0.05 }} // Snappier stagger
                    whileHover={{ scale: 1.01, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full text-left bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-800/80 rounded-xl p-4 transition-all duration-200 group cursor-pointer overflow-hidden shadow-sm"
                  >                 

                    {/* Professional subtle highlight instead of heavy gradient */}
                    <div className="absolute inset-0 bg-slate-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

                    <span className={`inline-block px-2.5 py-1 rounded-md text-[9px] font-bold tracking-widest uppercase border mb-3 ${getTagStyle(sug.type)}`}>
                      {sug.type}
                    </span>
                    <p className="text-sm text-slate-300 font-normal leading-relaxed tracking-wide group-hover:text-slate-100 transition-colors duration-200 relative z-10">
                      {sug.text}
                    </p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}