import React, { useContext, useState } from 'react';
import Button from '../components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { SettingsIcon } from '../components/ui/Icon';
import userContext from '../context/userContext';
import {exportConversationDataJson,exportConversationDataTxt} from '../../service/downloadService';


const DownloadIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

function Navbar({ isRecording, transcripts = [], suggestionBatches = [],chatMessages = [] }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false); // Added state for the new dropdown
  const [apiKey, setApiKey] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const { groqKey, setGroqKey } = useContext(userContext);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Submitted API Key:", apiKey);
    
    try {
      const response = await fetch('https://api.groq.com/openai/v1/models', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

        if(data?.data.length > 0){
              setStatus('success');
              setGroqKey(apiKey);
              setTimeout(() => {
                setIsSettingsOpen(false);
              }, 1000);
        }else{
          setStatus('error');
        }

    }catch (error) {
        console.error("Validation error:", error);
        setStatus('error');
    }
  };


  const handleDownload = (format) => {
    console.log(`Downloading history as: ${format}`);
    if(format === "json"){
        exportConversationDataJson({suggestionBatches:suggestionBatches,transcripts:transcripts,chatMessages:chatMessages})
    }else{
        exportConversationDataTxt({suggestionBatches:suggestionBatches,transcripts:transcripts,chatMessages:chatMessages})
    }
    setIsDownloadOpen(false);
  };

  return (
    <div className="relative z-50">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-6 mt-4 mb-2 px-6 py-4 flex justify-between items-center rounded-2xl bg-white/[0.02] border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-2xl shrink-0"
      >
     
        <div className="flex items-center gap-4">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-10 h-10 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl flex items-center justify-center font-black text-white text-lg shadow-lg">
              T
            </div>
          </div>
          <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 tracking-tight">
            TwinMind Copilot
          </h1>
        </div>

     
        <div className="flex gap-4 items-center">
          <AnimatePresence>
            {isRecording && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold shadow-[0_0_15px_rgba(239,68,68,0.2)]"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                </span>
                Live Processing
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative">
            {groqKey ? 
                     <Button
              onClick={() => {
                setIsDownloadOpen(!isDownloadOpen);
                setIsSettingsOpen(false); // Auto-close settings if opened
              }}
              variant="secondary"
              className={`transition-all shadow-sm backdrop-blur-md flex items-center gap-2 ${
                isDownloadOpen 
                  ? 'bg-white/10 border-white/20 text-white' 
                  : 'bg-white/5 hover:bg-white/10 border-white/10 text-gray-300'
              }`}
            >
              <motion.div animate={{ y: isDownloadOpen ? 2 : 0 }} transition={{ duration: 0.3 }}>
                <DownloadIcon className="w-4 h-4 opacity-80" />
              </motion.div>
              Download History
            </Button> :" "
            }
      

            <AnimatePresence>
              {isDownloadOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute right-0 top-full mt-5 w-56 bg-[#0a0f1c]/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden z-50"
                >
                  <div className="p-4 border-b border-white/5">
                    <h2 className="text-sm font-bold text-gray-200 tracking-wide flex items-center gap-2">
                      <DownloadIcon className="w-4 h-4 text-cyan-400" />
                      Export Options
                    </h2>
                  </div>
                  <div className="p-2 flex flex-col gap-1">
                    <button 
                      onClick={() => handleDownload('json')}
                      className="text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors flex items-center gap-3 w-full"
                    >
                      <span className="font-bold text-[10px] bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded-full uppercase tracking-wider">JSON</span>
                      Download as JSON
                    </button>
                    <button 
                      onClick={() => handleDownload('txt')}
                      className="text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors flex items-center gap-3 w-full"
                    >
                      <span className="font-bold text-[10px] bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full uppercase tracking-wider">TXT</span>
                      Download as TXT
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Button
            onClick={() => {
              setIsSettingsOpen(!isSettingsOpen);
              setIsDownloadOpen(false); 
            }}
            variant="secondary"
            className={`transition-all shadow-sm backdrop-blur-md flex items-center gap-2 ${
              isSettingsOpen 
                ? 'bg-white/10 border-white/20 text-white' 
                : 'bg-white/5 hover:bg-white/10 border-white/10 text-gray-300'
            }`}
          >
            <motion.div animate={{ rotate: isSettingsOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
              <SettingsIcon className="w-4 h-4 opacity-80" />
            </motion.div>
            Settings
          </Button>
        </div>
      </motion.header>


      <AnimatePresence>
        {isSettingsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute right-6 top-full mt-2 w-96 bg-[#0a0f1c]/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden z-50"
          >
            <div className="p-5 border-b border-white/5">
              <h2 className="text-sm font-bold text-gray-200 tracking-wide flex items-center gap-2">
                <SettingsIcon className="w-4 h-4 text-cyan-400" />
                Configuration
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  Groq API Key
                </label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => {
                    setApiKey(e.target.value);
                    setStatus('idle'); // Reset status on type
                  }}
                  placeholder="gsk_..."
                  className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors
                    ${status === 'error' ? 'border-red-500/50 focus:border-red-500/80 focus:ring-1 focus:ring-red-500/50' 
                    : status === 'success' ? 'border-green-500/50 focus:border-green-500/80 focus:ring-1 focus:ring-green-500/50' 
                    : 'border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50'}`}
                />
              </div>

           
              <AnimatePresence mode="wait">
                {status === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    className="text-xs font-medium text-red-400 m-0"
                  >
                    Illegal API key. Enter a valid key.
                  </motion.p>
                )}
                {status === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    className="text-xs font-medium text-green-400 m-0"
                  >
                    Successfully connected!
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                type="submit"
                className="mt-2 w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-2.5 rounded-xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2"
              >
                Save Key
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;