import React from 'react';

const EventCard = ({ img, title, desc, delay, registerPath, date, location, onRegister }) => (
  <div className={`bg-black/50 backdrop-blur-xl border border-gray-700/50 rounded-lg p-6 flex flex-col items-center text-center w-full h-full transition-all duration-300 hover:border-[#39ff14] hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] fade-in-up ${delay}`}>
    
    {/* Image container */}
    <div className="w-full h-48 rounded-md mb-6 overflow-hidden border border-white/5 shrink-0">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
      />
    </div>

    {/* Title */}
    <h3 className="font-orbitron text-lg md:text-xl font-bold text-white uppercase tracking-wider mb-3 min-h-[3rem] flex items-center justify-center">
      {title}
    </h3>

    {/* Description */}
    <p className="text-sm text-gray-300 mb-6 flex-grow leading-relaxed">
      {desc}
    </p>

    {/* Metadata Section */}
    <div className="w-full flex flex-col gap-3 mb-6 text-left border-t border-white/10 pt-5 mt-auto">
      <div className="flex items-center gap-3 text-gray-400">
        <svg className="w-5 h-5 text-[#39ff14] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-[12px] font-semibold uppercase tracking-tight">{date || "7 January 2026"}</span>
      </div>
      <div className="flex items-center gap-3 text-gray-400">
        <svg className="w-5 h-5 text-[#39ff14] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-[12px] font-semibold uppercase tracking-widest">{location || "ICT LAB"}</span>
      </div>
    </div>

    {/* Modified: Replaced <Link> with <button> 
        to trigger the onRegister callback passed from Events.js
    */}
    <button 
      onClick={onRegister}
      className="font-orbitron text-sm font-bold uppercase text-[#030f0a] py-3 px-7 rounded-md sign-in-btn w-full text-center shadow-[0_4px_15px_rgba(57,255,20,0.3)] transition-transform active:scale-95 cursor-pointer"
    >
      Register Now
    </button>
  </div>
);

export default EventCard;