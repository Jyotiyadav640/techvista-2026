import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarNav from '../components/Nav/SidebarNav.js'; 
import SocialSidebar from '../components/Nav/SocialSidebar.js'; 
import Footer from '../components/Nav/Footer.js'; // Added Footer import
import StatCard from '../components/Cards/StatCard.js'; 
import '../App.css';

const VideoCard = ({ videoSrc, year, delay }) => (
  <div className={`bg-black/20 backdrop-blur-xl border border-white/5 rounded-lg p-6 flex flex-col items-center text-center w-full max-w-md transition-all duration-300 hover:border-[#39ff14] hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] fade-in-up ${delay}`}>
    <div className="w-full h-64 md:h-80 rounded-md mb-4 p-1 overflow-hidden bg-gradient-to-br from-[#39ff14] to-[#00ffd5]">
      <div className="relative w-full h-full rounded-md overflow-hidden group bg-black">
        <video src={videoSrc} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" muted loop autoPlay />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
           <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
             <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
           </div>
        </div>
      </div>
    </div>
    <p className="font-orbitron text-xs md:text-sm text-[#39ff14] uppercase tracking-widest mt-2 drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">
      Techvista {year}
    </p>
  </div>
);

const About = () => {
  const [activeNav, setActiveNav] = useState('about');

  return (
    <div className="text-white h-screen w-full relative bg-[#030f0a] overflow-hidden flex flex-col font-roboto selection:bg-[#39ff14] selection:text-black">
      <div className="fixed top-4 left-4 md:top-6 md:left-6 z-[200] font-orbitron text-xl md:text-3xl font-bold text-white transition-colors duration-300">TV</div>

      <SidebarNav activeNav={activeNav} setActiveNav={setActiveNav} />
      <SocialSidebar />
      <Footer activeNav={activeNav} setActiveNav={setActiveNav} /> {/* */}

      <div className="flex-1 w-full h-full overflow-y-auto scroll-smooth flex flex-col relative no-scrollbar">
        <div className="sticky top-0 z-[150] w-full pt-4 px-2">
            <header className="py-4 md:py-6 flex justify-center items-center w-full">
                <Link to="/events" className="group">
                    <h1 className="font-orbitron tracking-[0.2em] md:tracking-[0.3em] text-[12px] md:text-lg font-black uppercase pb-2 text-white/40 group-hover:text-[#39ff14] transition-all duration-300">
                        Competitions
                    </h1>
                </Link>
            </header>
        </div>

        <div className="fixed inset-0 z-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80" alt="BG" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        </div>

        <main className="flex-grow flex flex-col items-center pt-8 pb-32 md:pb-20 relative z-10 px-4 md:px-24">
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold uppercase tracking-[0.2em] text-[#39ff14] mb-12 text-center drop-shadow-[0_0_15px_rgba(57,255,20,0.6)]">About TechVista</h2>
            
            <div className="w-full bg-black/10 backdrop-blur-2xl border border-white/5 p-8 md:p-12 rounded-2xl text-center mb-16 shadow-[0_0_40px_rgba(0,0,0,0.4)] fade-in-up">
                <p className="text-sm md:text-xl text-gray-200 leading-relaxed font-light mb-8">
                     <strong>TechVista</strong> provides student with a unique opportunity to enhance their technical expertise, foster innovation, and develop teamwork skills. Beyond being a mere tech festival, it serves as a dynamic platform for students to exhibit their technical prowess, creativity, and leadership abilities. Featuring a diverse array of events designed to challenge and inspire, <strong> Techvista </strong> empowers participants to broaden their horizons, expand their knowledge, and refine their skills.
                   </p>            
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-24 px-4">
                <StatCard icon={<CalendarIcon />} value="2 Days" label="Of Tech Fun" delay="delay-1" />
                <StatCard icon={<LocationIcon />} value="8 Venues" label="Across Vidyalankar College" delay="delay-2" />
                <StatCard icon={<AttendeesIcon />} value="1k+" label="Expected Attendees" delay="delay-3" />
                <StatCard icon={<FlashIcon />} value="10" label="Tech Events" delay="delay-4" />
            </div>

            <h2 className="font-orbitron text-2xl md:text-4xl font-bold uppercase tracking-[0.2em] text-[#00ffd5] mb-12 text-center drop-shadow-[0_0_12px_rgba(0,255,213,0.5)]">Glimpses</h2>
            <div className="w-full flex flex-wrap justify-center gap-12 mb-16">
                <VideoCard videoSrc="video2025.mp4" year="2025" delay="delay-1" />
                <VideoCard videoSrc="video2024.mp4" year="2024" delay="delay-2" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const CalendarIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>;
const LocationIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
const AttendeesIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>;
const FlashIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>;

export default About;