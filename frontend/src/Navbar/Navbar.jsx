import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import userContext from '../context/userContext';

function Navbar({ isRecording, transcripts = [], suggestionBatches = [], chatMessages = [] }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [status, setStatus] = useState('idle');
  const { groqKey, setGroqKey } = useContext(userContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.groq.com/openai/v1/models', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (data?.data.length > 0) {
        setStatus('success');
        setGroqKey(apiKey);
        setTimeout(() => setIsSettingsOpen(false), 1000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };



  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 py-8 font-inter pointer-events-none">
      <div className="max-w-[1600px] mx-auto pointer-events-auto">
        <header className="w-full flex justify-between items-center px-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <h1 className="font-medium text-4xl text-[#231917] tracking-tight">
              Aaco
            </h1>
          </div>

          {/* Actions */}
          <div className="flex gap-8 items-center">
            {isRecording && (
              <span className="font-mono text-sm text-red-500 tracking-wide flex items-center gap-2">
                 <span className="animate-pulse w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span> Live
              </span>
            )}
            

            <div className="relative">
              <button
                onClick={() => {
                  setIsSettingsOpen(!isSettingsOpen);
                }}
                className="font-mono text-[15px] text-[#231917] hover:text-[#FF6840] tracking-wide transition-colors"
              >
                Settings
              </button>
              <AnimatePresence>
                {isSettingsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 top-full mt-4 w-80 bg-white border border-[#231917]/10 rounded-3xl shadow-2xl overflow-hidden z-50"
                  >
                    <div className="p-6 border-b border-[#231917]/5">
                      <h2 className="text-lg font-bold text-[#231917] tracking-tight font-inter">Configuration</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-mono text-[#231917]/50 uppercase tracking-widest">
                          Groq API Key
                        </label>
                        <input
                          type="password"
                          value={apiKey}
                          onChange={(e) => {
                            setApiKey(e.target.value);
                            setStatus('idle');
                          }}
                          placeholder="gsk_..."
                          className={`w-full bg-[#231917]/5 border rounded-xl px-4 py-3 text-sm text-[#231917] placeholder-[#231917]/30 focus:outline-none transition-colors font-mono
                            ${status === 'error' ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                            : status === 'success' ? 'border-green-500 focus:ring-1 focus:ring-green-500' 
                            : 'border-transparent focus:border-[#231917]/20 focus:ring-1 focus:ring-[#231917]/20'}`}
                        />
                      </div>

                      <AnimatePresence mode="wait">
                        {status === 'error' && (
                          <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-xs font-medium text-red-500 m-0 font-inter">
                            Invalid key. Please check again.
                          </motion.p>
                        )}
                        {status === 'success' && (
                          <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-xs font-medium text-green-500 m-0 font-inter">
                            Connected successfully.
                          </motion.p>
                        )}
                      </AnimatePresence>

                      <button
                        type="submit"
                        className="mt-2 w-full bg-[#231917] hover:bg-black text-[#A8FFDB] font-mono text-sm tracking-wide py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                      >
                        Save Configuration
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;