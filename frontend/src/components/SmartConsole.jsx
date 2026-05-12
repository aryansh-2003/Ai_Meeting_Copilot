import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function SmartConsole({ onSend }) {
  const [role, setRole] = useState('fan');
  const [text, setText] = useState('');

  // Define the user data mapping for each role
  const userData = {
    fan: {
      name: 'Rahul Kohli',
      username: '@rahulk_88'
    },
    organizer: {
      name: 'Match Control',
      username: '@stadium_ops'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    // Get details based on current role
    const { name, username } = userData[role];

    // Pass message + role + user name + username to the parent component
    onSend(text, role, name, username);
    
    setText('');
  };

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 mt-6 shadow-2xl">
      <div className="flex justify-between items-center mb-3 px-2">
        <div className="flex gap-2">
          {['🏏', '🇮🇳', '🧢', '🏟️', '🛑', '🏃'].map(emoji => (
            <button 
              key={emoji} 
              type="button" 
              onClick={() => setText(prev => prev + emoji)} 
              className="hover:bg-slate-800 p-1 rounded transition-colors text-lg"
            >
              {emoji}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400">Posting as:</span>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
            style={{ color: role === 'organizer' ? '#f97316' : '#60a5fa' }}
          >
            <option value="fan" className="text-black">🏏 {userData.fan.name}</option>
            <option value="organizer" className="text-black">🛡️ {userData.organizer.name}</option>
          </select>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={role === 'fan' ? "Update other fans: 'Gate 2 is moving fast!'" : "Broadcast official advisory to all screens..."}
          className={`flex-1 bg-slate-950/50 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all ${
            role === 'organizer' 
              ? 'border-orange-500/50 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-orange-500/30' 
              : 'border-blue-500/30 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-blue-500/30'
          }`}
        />
        <button 
          type="submit"
          className={`rounded-xl px-6 py-3 flex items-center justify-center font-bold transition-all shadow-lg ${
            role === 'organizer' 
              ? 'bg-orange-600 hover:bg-orange-500 text-white shadow-orange-600/20' 
              : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20'
          }`}
        >
          <Send size={20} className="mr-2" /> Send
        </button>
      </form>
    </div>
  );
}