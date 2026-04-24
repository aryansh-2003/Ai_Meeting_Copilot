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
    <div className="relative flex flex-col h-full min-h-0 w-full rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent">
      
      {/* --- Header --- */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-white/[0.05] bg-black/20 backdrop-blur-md shrink-0 z-10">
        <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase flex items-center gap-2">
          <span className="w-1 h-3 rounded-full bg-cyan-500/80 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
          3. Chat Details
        </h2>
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md border border-white/[0.05]">
          Session-Only
        </span>
      </div>

      {/* --- Chat Feed --- */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 z-0
        [&::-webkit-scrollbar]:w-1.5 
        [&::-webkit-scrollbar-track]:bg-transparent 
        [&::-webkit-scrollbar-thumb]:bg-white/10 
        [&::-webkit-scrollbar-thumb]:rounded-full 
        hover:[&::-webkit-scrollbar-thumb]:bg-white/20"
      >
        
        {/* Info Banner */}
        <div className="relative bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 text-sm text-gray-400 leading-relaxed shadow-inner">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/50 to-blue-500/50 rounded-l-xl"></div>
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
                      <div className="w-5 h-5 rounded flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                        <span className="text-[10px] font-bold text-white">AI</span>
                      </div>
                    )}
                    <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">
                      {msg.role}
                    </span>
                  </div>

                  <div 
                    className={`relative p-4 max-w-[90%] text-sm leading-relaxed shadow-md backdrop-blur-sm transition-all duration-300
                      ${isUser 
                        ? 'bg-white/[0.05] border border-white/[0.1] text-gray-200 rounded-2xl rounded-tr-sm hover:bg-white/[0.08]' 
                        : 'bg-cyan-900/[0.15] border border-cyan-500/[0.2] text-gray-100 rounded-2xl rounded-tl-sm hover:border-cyan-500/40'
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
      <div className="relative p-4 border-t border-white/[0.05] bg-black/40 backdrop-blur-xl shrink-0 z-10">
        <form onSubmit={handleSubmit} className="flex gap-3 relative">
          {/* Animated Glow Behind Input */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none rounded-full" />
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 bg-white/[0.03] border border-white/[0.1] rounded-xl px-5 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-cyan-500/50 shadow-inner transition-all relative z-10"
          />
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} className="relative z-10">
            <Button 
              type="submit" 
              variant="primary" 
              className={`h-full px-6 py-3 rounded-xl font-medium tracking-wide transition-all shadow-lg
                ${!input.trim() 
                  ? 'bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] border-none'
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