import React from 'react';

export default function Button({ children, onClick, variant = 'primary', disabled = false, className = '' }) {
  const baseStyle = "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors border";
  
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white border-transparent disabled:opacity-50 disabled:cursor-not-allowed",
    secondary: "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border-gray-700",
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}