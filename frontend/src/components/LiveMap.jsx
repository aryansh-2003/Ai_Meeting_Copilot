import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle, Clock, Send, MapPin, Sparkles, Activity, ShieldAlert, User, Shield, MessageSquare } from 'lucide-react';


export default function LiveMap ({ gates, isAnalyzing }){
  const getStatusColors = (status) => {
    switch (status) {
      case 'red': return 'bg-red-500/10 border-red-500/50 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]';
      case 'yellow': return 'bg-yellow-500/10 border-yellow-500/50 text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.4)]';
      case 'green': return 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]';
      default: return 'bg-gray-800 border-gray-700 text-gray-400';
    }
  };

  return (
    <div className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 mb-6 relative overflow-hidden">
      {/* AI Scanning Animation Layer */}
      {isAnalyzing && (
        <motion.div 
          initial={{ top: '-100%' }}
          animate={{ top: '200%' }}
          transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
          className="absolute left-0 right-0 h-32 bg-gradient-to-b from-blue-500/0 via-blue-500/10 to-blue-500/0 z-0 pointer-events-none"
        />
      )}

      <div className="flex justify-between items-center mb-6 relative z-10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Activity className="text-blue-400" /> Live AI Stadium Map
        </h2>
        <span className={`flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border transition-colors ${
          isAnalyzing ? 'bg-blue-500/20 text-blue-400 border-blue-500/50 animate-pulse' : 'bg-slate-800 text-slate-400 border-slate-700'
        }`}>
          <Sparkles size={14} /> {isAnalyzing ? "Gemini Processing Live Feed..." : "Gemini Monitoring Active"}
        </span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
        {gates.map((gate) => (
          <motion.div
            key={gate.id}
            layout
            className={`relative flex flex-col items-center p-4 rounded-xl border ${getStatusColors(gate.status)} transition-colors duration-500`}
          >
            <MapPin size={28} className="mb-2" />
            <h3 className="font-bold text-md text-center text-white leading-tight">{gate.name}</h3>
            <p className="text-sm font-semibold mt-1">{gate.label}</p>
            <div className="mt-3 flex items-center gap-1 bg-black/40 px-3 py-1 rounded-full text-xs">
              <Clock size={12} /> {gate.wait}
            </div>
            
            {gate.status === 'red' && (
              <span className="absolute -top-2 -right-2 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};