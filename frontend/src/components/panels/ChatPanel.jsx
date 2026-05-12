import React, { useState, useEffect, useRef } from 'react';
import Button from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatPanel({ messages, onSendMessage }) {
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  // Auto-scroll to the newest message smoothly
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // FIX 1: Pass an object with text and time to match what HomePage expects
    onSendMessage({ text: input, time: Date.now() });
    
    setInput('');
  };

  return (
    <div className="relative flex flex-col h-full min-h-0 w-full rounded-2xl overflow-hidden bg-transparent">
      
      {/* --- Header --- */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-[#4ade80]/20 bg-transparent shrink-0 z-10">
        <h2 className="text-sm font-bold text-slate-200 tracking-wide flex items-center gap-2">
          3. Chat Details
        </h2>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-800/80 px-2 py-1 rounded-md border border-slate-700/50">
          Session-Only
        </span>
      </div>

      {/* --- Chat Feed --- */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 z-0
        [&::-webkit-scrollbar]:w-1.5 
        [&::-webkit-scrollbar-track]:bg-transparent 
        [&::-webkit-scrollbar-thumb]:bg-slate-700 
        [&::-webkit-scrollbar-thumb]:rounded-full 
        hover:[&::-webkit-scrollbar-thumb]:bg-slate-600"
      >
        
        {/* Info Banner */}
        <div className="relative bg-[#1C2127]/60 border border-slate-700/50 rounded-xl p-4 text-sm text-slate-400 leading-relaxed shadow-sm">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4ade80]/50 rounded-l-xl"></div>
          Clicking a suggestion adds it to this chat and streams a detailed answer. You can also type directly below.
        </div>

        {/* Message List */}
        <div className="space-y-6 pb-2">
          <AnimatePresence initial={false}>
            {messages.map((msg) => {
              const isUser = msg.role === 'YOU';

              return (
                <motion.div 
                  key={msg.id}
                  layout // Smoothly pushes up when new messages arrive
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 250, damping: 25 }}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} group`}
                >
                  <div className="flex items-center gap-2 mb-1.5 px-1">
                    {!isUser && (
                      <div className="w-5 h-5 rounded flex items-center justify-center bg-[#252B33] border border-slate-700 shadow-sm">
                        <span className="text-[10px] font-bold text-white">AI</span>
                      </div>
                    )}
                    <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">
                      {msg.role}
                    </span>
                  </div>

                  <div 
                    className={`relative p-4 max-w-[90%] text-sm leading-relaxed shadow-md backdrop-blur-sm transition-all duration-300
                      ${isUser 
                        ? 'bg-[#2A3038] border border-slate-700/50 text-slate-200 rounded-2xl rounded-tr-sm hover:bg-[#313841]' 
                        : 'bg-[#1C2127] border border-[#5eead4]/20 text-slate-300 rounded-2xl rounded-tl-sm hover:border-[#5eead4]/40 shadow-[0_0_15px_rgba(94,234,212,0.05)]'
                      }`}
                  >
                    {/* Glass glare effect inside the bubble */}
                    <div className="absolute inset-0 rounded-inherit pointer-events-none border border-white/[0.02] mix-blend-overlay"></div>
                    
                    {/* FIX 2: Uncommented text rendering and made it crash-safe using (msg.text || '') */}
                    {(msg.text || '').split('\n').map((line, i, arr) => (
                      <React.Fragment key={i}>
                        {line}
                        {i !== arr.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          {/* Scroll Anchor */}
          <div ref={endRef} className="h-1" />
        </div>
      </div>

      {/* --- Input Area --- */}
      <div className="relative p-4 border-t border-[#4ade80]/20 bg-[#171C22]/80 backdrop-blur-xl shrink-0 z-10 rounded-b-2xl">
        <form onSubmit={handleSubmit} className="flex gap-3 relative">
          {/* Animated Glow Behind Input */}
          <div className="absolute inset-0 bg-[#4ade80]/5 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none rounded-full" />
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 bg-transparent border border-[#4ade80]/30 rounded-full px-5 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4ade80] focus:bg-[#4ade80]/5 shadow-sm transition-all relative z-10"
          />
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} className="relative z-10">
            <Button 
              type="submit" 
              variant="primary" 
              className={`h-full px-6 py-3 rounded-xl font-medium tracking-wide transition-all shadow-lg
                ${!input.trim() 
                  ? 'bg-transparent border border-slate-700/50 text-slate-500 cursor-not-allowed' 
                  : 'bg-transparent border border-[#4ade80]/50 hover:bg-[#4ade80]/10 text-[#4ade80]'
                }`}
              disabled={!input.trim()}
            >
              Send
            </Button>
          </motion.div>
        </form>
      </div>

    </div>
  );
}