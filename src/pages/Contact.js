import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SidebarNav from '../components/Nav/SidebarNav.js';
import SocialSidebar from '../components/Nav/SocialSidebar.js';
import Footer from '../components/Nav/Footer.js';
import ContactCard from '../components/Cards/ContactCard.js';
import '../App.css';

const CONTACT_DATA = [
  { id: 1, section: 'coordinators', name: "Name 1", role: "Co-ordinator", email: "amit@college.edu", phone: "+91 99999 11111", img: "https://via.placeholder.com/150/1a1a1a/39ff14?text=AS" },
  { id: 2, section: 'coordinators', name: "Name 2", role: "Co-ordinator", email: "priya@college.edu", phone: "+91 99999 22222", img: "https://via.placeholder.com/150/1a1a1a/39ff14?text=PS" },
  { id: 3, section: 'event-heads', name: "Name 3", role: "Events Head", email: "abc@gmail.com", phone: "+91 88888 77777", img: "https://via.placeholder.com/150/1a1a1a/39ff14?text=RD" },
  { id: 4, section: 'event-heads', name: "Name 4", role: "Events Head", email: "def@gmail.com", phone: "+91 88888 66666", img: "https://via.placeholder.com/150/1a1a1a/39ff14?text=SK" },
  { id: 5, section: 'event-heads', name: "Name 5", role: "Events Head", email: "ghi@gmail.com", phone: "+91 00000 00000", img: "https://via.placeholder.com/150/1a1a1a/39ff14?text=EH" },
  { id: 6, section: 'event-heads', name: "Name 6", role: "Events Head", email: "jkl@gmail.com", phone: "+91 00000 00000", img: "https://via.placeholder.com/150/1a1a1a/39ff14?text=EH" },
  { id: 7, section: 'event-heads', name: "Name 7", role: "Events Head", email: "mno@gmail.com", phone: "+91 88888 77777", img: "https://via.placeholder.com/150/1a1a1a/39ff14?text=RD" },
  { id: 8, section: 'event-heads', name: "Name 8", role: "Events Head", email: "pqr@gmail.com", phone: "+91 88888 66666", img: "https://via.placeholder.com/150/1a1a1a/39ff14?text=SK" },
  { id: 9, section: 'event-heads', name: "Name 9", role: "Events Head", email: "stu@gmail.com", phone: "+91 00000 00000", img: "https://via.placeholder.com/150/1a1a1a/39ff14?text=EH" },
  { id: 10, section: 'event-heads', name: "Name 10", role: "Events Head", email: "vw@gmail.com", phone: "+91 00000 00000", img: "https://via.placeholder.com/150/1a1a1a/39ff14?text=EH" },
  { id: 11, section: 'event-heads', name: "Name 11", role: "Events Head", email: "xyz@gmail.com", phone: "+91 88888 77777", img: "https://via.placeholder.com/150/1a1a1a/39ff14?text=RD" },
  { id: 12, section: 'event-heads', name: "Name 12", role: "Events Head", email: "name@gmail.com", phone: "+91 88888 66666", img: "https://via.placeholder.com/150/1a1a1a/39ff14?text=SK" },
  { id: 13, section: 'committee-heads', name: "Name 13", role: "Tech Head", email: "mane13@gmail.com", phone: "+91 77777 55555", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=Tech" },
  { id: 14, section: 'committee-heads', name: "Name 14", role: "Creative Head", email: "name14@gmail.com", phone: "+91 77777 44444", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=Creative" },
  { id: 15, section: 'committee-heads', name: "Name 15", role: "Committee Head", email: "name15@gmail.com", phone: "+91 00000 00000", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=CH" },
  { id: 16, section: 'committee-heads', name: "Name 16", role: "Committee Head", email: "name16@gmail.com", phone: "+91 00000 00000", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=CH" },
  { id: 17, section: 'committee-heads', name: "Name 17", role: "Tech Head", email: "name17@gmail.com", phone: "+91 77777 55555", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=Tech" },
  { id: 18, section: 'committee-heads', name: "Name 18", role: "Creative Head", email: "name18@gmail.com", phone: "+91 77777 44444", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=Creative" },
  { id: 19, section: 'committee-heads', name: "Name 19", role: "Committee Head", email: "name19@gmail.com", phone: "+91 00000 00000", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=CH" },
  { id: 20, section: 'committee-heads', name: "Name 20", role: "Committee Head", email: "name20@gmail.com", phone: "+91 00000 00000", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=CH" },
  { id: 21, section: 'committee-heads', name: "Name 21", role: "Tech Head", email: "name21@gmail.com", phone: "+91 77777 55555", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=Tech" },
  { id: 22, section: 'committee-heads', name: "Name 22", role: "Creative Head", email: "name22@gmail.com", phone: "+91 77777 44444", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=Creative" },
  { id: 23, section: 'committee-heads', name: "Name 23", role: "Committee Head", email: "name23@gmail.com", phone: "+91 00000 00000", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=CH" },
  { id: 24, section: 'committee-heads', name: "Name 24", role: "Committee Head", email: "name24@gmail.com", phone: "+91 00000 00000", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=CH" },
  { id: 25, section: 'committee-heads', name: "Name 25", role: "Tech Head", email: "name25@gmail.com", phone: "+91 77777 55555", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=Tech" },
  { id: 26, section: 'committee-heads', name: "Name 26", role: "Creative Head", email: "name26@gmail.com", phone: "+91 77777 44444", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=Creative" },
  { id: 27, section: 'committee-heads', name: "Name 27", role: "Committee Head", email: "name27@gmail.com", phone: "+91 00000 00000", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=CH" },
  { id: 28, section: 'committee-heads', name: "Name 28", role: "Committee Head", email: "name28@gmail.com", phone: "+91 00000 00000", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=CH" },
  { id: 29, section: 'committee-heads', name: "Name 29", role: "Tech Head", email: "name29@gmail.com", phone: "+91 77777 55555", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=Tech" },
  { id: 30, section: 'committee-heads', name: "Name 30", role: "Creative Head", email: "name30@gmail.com", phone: "+91 77777 44444", img: "https://via.placeholder.com/150/1a1a1a/00ffd5?text=Creative" },
];

const Contact = () => {
  const [activeNav, setActiveNav] = useState('contact');
  const [filter, setFilter] = useState('all');

  const sections = useMemo(() => {
    return {
      coordinators: CONTACT_DATA.filter(p => p.section === 'coordinators' && (filter === 'all' || filter === 'coordinators')),
      eventHeads: CONTACT_DATA.filter(p => p.section === 'event-heads' && (filter === 'all' || filter === 'event-heads')),
      committeeHeads: CONTACT_DATA.filter(p => p.section === 'committee-heads' && (filter === 'all' || filter === 'committee-heads')),
    };
  }, [filter]);

  return (
    <div className="text-white h-screen w-full relative bg-[#030f0a] overflow-hidden flex flex-col">
      <div className="fixed top-4 left-4 md:top-6 md:left-6 z-[200] font-orbitron text-xl md:text-3xl font-bold text-white transition-colors duration-300">TV</div>

      <SidebarNav activeNav={activeNav} setActiveNav={setActiveNav} />
      <SocialSidebar />
      <Footer activeNav={activeNav} setActiveNav={setActiveNav} />

      <div className="flex-1 w-full h-full overflow-y-auto scroll-smooth flex flex-col relative no-scrollbar">
        <div className="sticky top-0 z-[150] w-full pt-4 px-2">
            <header className="py-4 md:py-6 flex justify-center items-center w-full">
                <Link to="/events">
                    <h1 className="font-orbitron tracking-[0.2em] md:tracking-[0.3em] text-[12px] md:text-lg font-black uppercase pb-2 text-gray-300 hover:text-[#39ff14] relative transition-all duration-300 cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-[#39ff14] after:to-[#00ffd5] after:transition-all after:duration-500 hover:drop-shadow-[0_0_15px_rgba(57,255,20,0.6)]">
                        Competitions
                    </h1>
                </Link>
            </header>

            <div className="relative flex flex-col items-center gap-4 md:gap-6 mb-4 w-full px-2">
                <div className="bg-black/60 backdrop-blur-2xl border border-white/20 p-1 md:p-1.5 rounded-full flex items-center shadow-2xl relative z-10 max-w-full overflow-x-auto no-scrollbar scroll-smooth">
                    {['all', 'coordinators', 'event-heads', 'committee-heads'].map((type) => (
                        <button 
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`px-3 md:px-8 py-2 md:py-2.5 rounded-full font-orbitron text-[9px] md:text-xs font-bold uppercase tracking-tighter md:tracking-widest transition-all duration-500 whitespace-nowrap ${
                                filter === type 
                                ? 'bg-gradient-to-r from-[#39ff14] to-[#00ffd5] text-[#030f0a] shadow-[0_0_20px_rgba(57,255,20,0.5)]' 
                                : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {type.replace('-', ' ')}
                        </button>
                    ))}
                </div>
            </div>
        </div>

        <div className="fixed inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80" 
            alt="BG" 
            className="w-full h-full object-cover opacity-80" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#030f0a_95%)]"></div>
          {/* Added the grid overlay from Events.js */}
          <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'linear-gradient(#39ff14 1px, transparent 1px), linear-gradient(90deg, #39ff14 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        </div>

        {/* Updated main and grid structure to match Events.js exactly */}
        <main className="flex-grow flex flex-col items-center pt-8 pb-32 relative z-10 px-4">
          <div className="w-full max-w-4xl mx-auto space-y-24">
            
            {sections.coordinators.length > 0 && (
              <section className="w-full">
                <h2 className="font-orbitron text-base md:text-2xl font-bold uppercase tracking-[0.4em] text-[#39ff14] mb-12 text-center drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">Co-ordinators</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 items-stretch justify-items-center">
                  {sections.coordinators.map((person, index) => (
                    <div key={person.id} className="w-full max-w-[320px] h-full transition-transform duration-500 hover:scale-[1.02]">
                        <ContactCard {...person} delay={`delay-${(index % 3) + 1}`} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {sections.eventHeads.length > 0 && (
              <section className="w-full">
                <h2 className="font-orbitron text-base md:text-2xl font-bold uppercase tracking-[0.4em] text-[#00ffd5] mb-12 text-center drop-shadow-[0_0_10px_rgba(0,255,213,0.5)]">Event Heads</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 items-stretch justify-items-center">
                  {sections.eventHeads.map((person, index) => (
                    <div key={person.id} className="w-full max-w-[320px] h-full transition-transform duration-500 hover:scale-[1.02]">
                        <ContactCard {...person} delay={`delay-${(index % 3) + 1}`} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {sections.committeeHeads.length > 0 && (
              <section className="w-full">
                <h2 className="font-orbitron text-base md:text-2xl font-bold uppercase tracking-[0.4em] text-white mb-12 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Committee Heads</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 items-stretch justify-items-center">
                  {sections.committeeHeads.map((person, index) => (
                    <div key={person.id} className="w-full max-w-[320px] h-full transition-transform duration-500 hover:scale-[1.02]">
                        <ContactCard {...person} delay={`delay-${(index % 3) + 1}`} />
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;