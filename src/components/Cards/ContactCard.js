import React from 'react';

const ContactCard = ({ name, role, email, phone, img, delay }) => (
  <div className={`group bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center text-center w-full max-w-[340px] min-h-[440px] justify-between transition-all duration-500 hover:border-[#39ff14]/60 hover:shadow-[0_0_40px_rgba(57,255,20,0.2)] relative overflow-hidden fade-in-up ${delay}`}>
    <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-transparent via-[#39ff14]/40 to-transparent group-hover:via-[#39ff14] transition-all duration-500"></div>
    
    <div className="flex flex-col items-center w-full">
      <div className="w-full aspect-[16/10] rounded-lg mb-6 overflow-hidden border border-[#39ff14]/20 transition-transform duration-500 group-hover:scale-[1.03] group-hover:border-[#39ff14]/50">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" 
        />
      </div>
      
      <h3 className="font-orbitron text-lg font-bold text-white uppercase tracking-widest mb-2 leading-tight min-h-[3rem] flex items-center">{name}</h3>
      <div className="h-[1px] w-12 bg-[#00ffd5]/40 mb-4"></div>
      <p className="text-[#00ffd5] text-[11px] uppercase tracking-[0.2em] mb-6 font-bold">{role}</p>
    </div>

    <div className="flex flex-col gap-3 w-full border-t border-white/5 pt-6">
      <a href={`mailto:${email}`} className="text-gray-400 hover:text-[#39ff14] text-[11px] transition-colors truncate tracking-wider italic">{email}</a>
      <a href={`tel:${phone}`} className="text-gray-500 hover:text-white text-xs font-mono transition-colors tracking-tighter">{phone}</a>
    </div>
  </div>
);

export default ContactCard;