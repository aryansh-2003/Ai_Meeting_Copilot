import React, { useState } from 'react';
import { ArrowLeft, Dices, Rocket, Check, AtSign, DoorOpen, User } from 'lucide-react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
    navigate(`/setAvatar/${data.username}/${data.name}`);
    // Socket & User Service Logic kept intact as requested
  };

  return (
    <div className="min-h-screen bg-[#87CEEB] font-sans text-[#1e3a8a] relative overflow-hidden selection:bg-[#FFD166]">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700;900&display=swap');
        
        .font-dora {
          font-family: 'Fredoka', sans-serif;
        }

        .comic-border {
          border: 4px solid #1e3a8a;
        }
        
        .comic-shadow {
          box-shadow: 6px 6px 0px 0px #1e3a8a;
        }
        
        .comic-shadow-sm {
          box-shadow: 4px 4px 0px 0px #1e3a8a;
        }

        .comic-shadow-btn {
          box-shadow: 4px 4px 0px 0px #ff47a3;
        }

        .bg-polka-login {
          background-image: radial-gradient(#ffffff40 2px, transparent 2px);
          background-size: 30px 30px;
        }

        @keyframes float-gadget {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(20deg); }
        }
        .animate-float-gadget {
          animation: float-gadget 4s ease-in-out infinite;
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        @keyframes peek {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-peek {
          animation: peek 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-polka-login pointer-events-none z-0"></div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-20 right-10 text-6xl opacity-80 animate-float-gadget z-0 drop-shadow-md hidden md:block">🥞</div>
      <div className="absolute bottom-32 right-1/4 text-6xl opacity-80 -rotate-12 animate-pulse z-0 drop-shadow-md hidden md:block">🚁</div>
      <div className="absolute top-1/3 left-10 text-5xl opacity-80 rotate-45 z-0 drop-shadow-md hidden md:block">⏱️</div>
      
      {/* Cloud Decor */}
      <div className="absolute top-10 -left-10 text-white/60 scale-150 z-0 hidden sm:block">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5 19c-2.5 0-4.5-2-4.5-4.5 0-.2.02-.4.06-.6-.4-.1-.8-.2-1.26-.2-2.3 0-4.2 1.7-4.5 3.9-.1 0-.2.1-.3.1-1.7 0-3-1.3-3-3s1.3-3 3-3c.4 0 .8.1 1.1.2 1-1.8 2.9-3.1 5.1-3.1 2.8 0 5.2 2.1 5.8 4.8.4-.2.8-.3 1.2-.3 2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5z"/>
        </svg>
      </div>

      {/* === LEFT SIDE: NOBITA === */}
      <div className="absolute bottom-0 -left-10 lg:left-0 xl:left-10 z-10 animate-float-slow hidden md:block pointer-events-none">
        <img 
          src="https://media2.giphy.com/media/zd8AKztiu3ggnrwnhg/source.gif" 
          alt="Nobita" 
          className="w-[220px] lg:w-[280px] xl:w-[340px] drop-shadow-[8px_8px_0_rgba(30,58,138,0.3)]"
        />
      </div>

      {/* === RIGHT SIDE: SHIZUKA === */}
      <div className="absolute bottom-0 -right-4 lg:right-0 xl:right-10 z-10 animate-float-slow hidden md:block pointer-events-none" style={{ animationDelay: '1s' }}>
        <img 
          src="https://pngfre.com/wp-content/uploads/nobita-nobi-19.png" 
          alt="Shizuka" 
          className="w-[200px] lg:w-[260px] xl:w-[320px] drop-shadow-[8px_8px_0_rgba(30,58,138,0.3)]"
        />
      </div>
      
      <div className="relative z-30 max-w-md mx-auto px-6 py-8 flex flex-col min-h-screen font-dora">
        
        {/* Progress Bar (Gadget Style) */}
        <div className="flex gap-3 mb-6 mt-4 relative z-30">
          <div className="h-4 flex-1 bg-[#FF69B4] rounded-full comic-border comic-shadow-sm"></div>
          <div className="h-4 flex-1 bg-[#00AEEF] rounded-full comic-border comic-shadow-sm"></div>
          <div className="h-4 flex-1 border-4 border-dashed border-white rounded-full bg-white/30"></div>
        </div>

        {/* Form Container (Increased mt to push the box further down) */}
        <div className="relative bg-white rounded-[2rem] comic-border comic-shadow p-6 pt-16 mt-28 mb-8 flex-1 max-h-[700px] z-30">
          
          {/* DORAEMON PNG (Shifted down: changed from -top-32 to -top-20 and resized slightly) */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[180px] h-[180px] md:w-[200px] md:h-[200px] flex justify-center items-end animate-peek z-10 pointer-events-none">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png" 
              alt="Doraemon" 
              className="w-full h-auto drop-shadow-[0_-10px_15px_rgba(30,58,138,0.2)]"
            />
          </div>

          <div className="relative mb-6 z-20">
            <button 
              onClick={() => navigate(-1)}
              className="absolute -left-10 -top-12 md:-left-12 p-3 bg-[#FFD166] text-[#1e3a8a] rounded-full comic-border comic-shadow-sm hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
            >
              <ArrowLeft className="w-6 h-6" strokeWidth={3} />
            </button>
            
            <div className="text-center pt-2">
              <h1 className="text-4xl font-black tracking-tight leading-none text-[#1e3a8a]">
                Time Patrol <br />
                <span className="text-[#FF69B4] inline-block mt-2 bg-[#FFD166] px-3 py-1 rounded-xl comic-border rotate-2">ID Card!</span> 
              </h1>
            </div>
          </div>

          <div className="relative mb-8 z-20">
              <div className="absolute -top-3 right-0 bg-[#34D399] text-[#1e3a8a] comic-border px-3 py-1 rounded-full text-xs font-black shadow-[2px_2px_0px_0px_#1e3a8a] rotate-12 z-20">
                  Top Secret!
              </div>
              <div className="bg-[#E0F2FE] p-4 rounded-2xl comic-border relative flex items-center justify-between">
                  <p className="text-[#1e3a8a] font-bold text-sm leading-tight pr-4">
                      Gian is watching. Make it good so he doesn't steal it for his concert. 🎤
                  </p>
              </div>
          </div>

          <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-5 z-20 relative">

            {/* Name Input */}
            <div>
              <label className="text-sm font-black text-[#1e3a8a] ml-2 mb-1 block uppercase tracking-wider">Real Name</label>
              <div className="bg-white rounded-2xl comic-border comic-shadow-sm flex items-center p-1 focus-within:bg-[#f8fafc] transition-colors">
                <div className="pl-4 text-[#00AEEF]">
                  <User size={22} strokeWidth={3} />
                </div>
                <input 
                  type="text" 
                  className="w-full bg-transparent p-3 text-xl font-bold text-[#1e3a8a] outline-none placeholder:text-gray-300"
                  placeholder="e.g. Nobita Nobi"
                  {...register("name", { required: true })}
                />
              </div>
              {errors.name && <span className="text-red-500 font-bold text-sm ml-2 mt-1 flex items-center gap-1">⚠️ Required to enter!</span>}
            </div>

            {/* Username Input */}
            <div>
               <label className="text-sm font-black text-[#1e3a8a] ml-2 mb-1 block uppercase tracking-wider">Gadget Alias</label>
               <div className="bg-white rounded-2xl comic-border comic-shadow-sm flex items-center p-1 focus-within:bg-[#f8fafc] transition-colors">
                <div className="pl-4 text-[#FF69B4]">
                    <AtSign size={22} strokeWidth={3} />
                </div>
                <input 
                  type="text"
                  className="w-full bg-transparent p-3 text-xl font-black text-[#1e3a8a] outline-none placeholder:text-gray-300"
                  placeholder="nobita_007"
                  {...register("username", { required: true })}
                />
              </div>
              {errors.username && <span className="text-red-500 font-bold text-sm ml-2 mt-1 flex items-center gap-1">⚠️ Alias is required!</span>}
            </div>

            {/* Badges / Extras */}
            <div className="flex gap-3 items-center mt-2">
                <div className="flex-1 bg-[#FFD166] rounded-2xl comic-border comic-shadow-sm py-2.5 px-4 flex items-center gap-2">
                    <div className="bg-[#1e3a8a] rounded-full p-1">
                        <Check className="text-white w-4 h-4" strokeWidth={4} />
                    </div>
                    <span className="font-black text-[15px] text-[#1e3a8a]">Costs 0 Dorayaki!</span>
                </div>
                <button 
                  type="button"
                  className="bg-[#34D399] p-3 rounded-2xl comic-border comic-shadow-sm active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all group"
                  title="Randomize (Visual Only)"
                >
                    <Dices className="text-[#1e3a8a] w-7 h-7 group-hover:rotate-180 transition-transform duration-500" />
                </button>
            </div>

            {/* Submit Button & Footer */}
            <div className="mt-8">
                <div className="relative">
                    <button 
                      type="submit"
                      className="w-full bg-[#FF69B4] text-white text-2xl font-black py-4 rounded-2xl comic-border comic-shadow-btn hover:bg-[#ff47a3] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_#ff47a3] active:translate-y-[6px] active:translate-x-[6px] active:shadow-none transition-all flex items-center justify-center gap-3 group"
                    >
                        LET'S GOOO! 
                        <DoorOpen className="w-8 h-8 group-hover:-rotate-12 transition-transform" strokeWidth={3} />
                    </button>
                </div>
                
                <p className="text-center text-xs font-bold text-gray-400 mt-5">
                    By clicking the big button, you agree to not misuse the <span className="text-[#00AEEF] underline decoration-2 cursor-pointer hover:text-[#1e3a8a]">Time Machine</span>.
                </p>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}