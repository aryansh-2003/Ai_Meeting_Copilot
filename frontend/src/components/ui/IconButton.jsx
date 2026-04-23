import React from 'react';

export default function IconButton({ icon, onClick, active = false, className = '' }) {
  return (
    <button 
      onClick={onClick}
      className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ${
        active 
          ? 'bg-red-500 hover:bg-red-600 text-white' 
          : 'bg-blue-500 hover:bg-blue-600 text-white'
      } ${className}`}
    >
      {icon}
    </button>
  );
}