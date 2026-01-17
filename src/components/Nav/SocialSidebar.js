import React from 'react';

const InstaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>;
const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
const YoutubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>;

const SocialItem = ({ href, icon, label }) => (
  <a href={href} className="social-item-line flex flex-col items-center gap-1 py-2 text-white text-xs uppercase tracking-wider font-medium transition-all duration-300 relative cursor-pointer hover:text-[#00ffd5] hover:translate-x-1">
    <div className="w-7 h-7 stroke-[1.5] transition-all duration-300 drop-shadow-[0_0_5px_rgba(0,255,213,0.3)] hover:drop-shadow-[0_0_12px_rgba(0,255,213,0.9)] hover:scale-110">{icon}</div>
    <span>{label}</span>
  </a>
);

const SocialSidebar = () => (
  <aside className="flex fixed top-1/2 -translate-y-1/2 right-0 w-16 md:w-24 z-[110] flex-col items-stretch justify-center gap-2 right-sidebar bg-transparent">
    <SocialItem href="#" label="Insta" icon={<InstaIcon />} />
    <SocialItem href="#" label="LinkedIn" icon={<LinkedInIcon />} />
    <SocialItem href="#" label="YouTube" icon={<YoutubeIcon />} />
  </aside>
);

export default SocialSidebar;