import React, { useState, useRef, useMemo } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom'; // Added for the header link

// Component Imports
import SidebarNav from '../components/Nav/SidebarNav';
import SocialSidebar from '../components/Nav/SocialSidebar';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Nav/Footer.js'; // Added Footer import

const Sponsor = () => {
    const [activeNav, setActiveNav] = useState('sponsor');
    const containerRef = useRef(null);

    // Parallax Mouse Tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouseX.set(clientX - window.innerWidth / 2);
        mouseY.set(clientY - window.innerHeight / 2);
    };

    // Smoothed parallax offsets
    const bgX = useTransform(mouseX, [-500, 500], [40, -40]);
    const bgY = useTransform(mouseY, [-500, 500], [40, -40]);

    // Sponsor Assets
    const currentImages = useMemo(() => ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"], []);
    const pastImages = useMemo(() => ["past1.jpg", "past2.jpg", "past3.jpg", "past4.jpg", "past5.jpg"], []);

    const { scrollYProgress } = useScroll({
        container: containerRef,
        offset: ["start start", "end end"]
    });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div
            onMouseMove={handleMouseMove}
            className="text-white h-screen w-full relative bg-[#000503] flex flex-col font-sans overflow-hidden selection:bg-emerald-500/30"
        >
            {/* Added: TV Logo from About.js */}
            <div className="fixed top-4 left-4 md:top-6 md:left-6 z-[200] font-orbitron text-xl md:text-3xl font-bold text-white transition-colors duration-300">TV</div>

            {/* Cyber-Glow Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-emerald-500 z-[200] origin-left shadow-[0_0_20px_#10b981]"
                style={{ scaleX }}
            />

            <SidebarNav activeNav={activeNav} setActiveNav={setActiveNav} />
            <SocialSidebar />

            {/* Added: Sticky Footer Component from About.js */}
            <Footer activeNav={activeNav} setActiveNav={setActiveNav} />

            {/* Ambient Background Image & Layers */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    style={{
                        x: bgX,
                        y: bgY,
                        backgroundImage:<video
  src="/PixVerse_V5.5_Image_Text_360P_i_want_that_leav.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover"
>
</video>,
                    }}
                    className="absolute inset-[-10%] bg-cover bg-center bg-no-repeat opacity-[0.15] grayscale brightness-[0.5]"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000503_95%)]" />
                <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-[-15%] opacity-[0.12]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:80px_80px]" />
                </motion.div>
                <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />
                <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />
            </div>

            {/* Main Content Area */}
            <div ref={containerRef} className="flex-1 w-full h-full overflow-y-auto relative z-10 no-scrollbar snap-y snap-proximity">

                {/* Added: Sticky Header Link from About.js */}
                <div className="sticky top-0 z-[150] w-full pt-4 px-2">
                    <header className="py-4 md:py-6 flex justify-center items-center w-full">
                        <Link to="/events" className="group">
                            <h1 className="font-orbitron tracking-[0.2em] md:tracking-[0.3em] text-[12px] md:text-lg font-black uppercase pb-2 text-white/40 group-hover:text-emerald-500 transition-all duration-300">
                                Competitions
                            </h1>
                        </Link>
                    </header>
                </div>

                <div className="w-full max-w-7xl mx-auto px-6 py-32 flex flex-col items-center">

                    {/* Hero Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="text-center mb-40 mt-12 snap-start"
                    >
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-10"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                            <span className="text-emerald-500 font-mono text-[10px] tracking-[0.4em] uppercase">Status: Core Online</span>
                        </motion.div>

                        <h1 className="text-8xl md:text-[11rem] font-black tracking-tighter mb-6 leading-[0.85] text-white uppercase italic">
                            TechVista<br/>
                            <span className="text-emerald-500/40 not-italic font-light">Partners</span>
                        </h1>
                        <p className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-base uppercase tracking-[0.5em] font-light leading-relaxed">
                            Syncing with global industry leaders to synthesize future innovations.
                        </p>
                    </motion.header>

                    {/* Featured Carousel Feed */}
                    <div className="w-full mb-64 relative group">
                        <div className="absolute -top-12 left-0 font-mono text-[10px] text-emerald-500/40 flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-emerald-500/30" />
                            PRIMARY_PARTNER_STREAM_v2.6
                        </div>
                        <Carousel images={currentImages} />
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-64">
                        {[
                            { title: "Network Value", value: "₹5L+", label: "Total Prize Pool", sub: "Rewards Active" },
                            { title: "Traffic Density", value: "5000+", label: "Daily Footfall", sub: "Verified Users" },
                            { title: "Data Ingest", value: "200+", label: "Project Entries", sub: "Global Uploads" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="relative p-12 rounded-[2.5rem] bg-black/40 border border-white/5 backdrop-blur-3xl overflow-hidden group transition-all hover:border-emerald-500/30"
                            >
                                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-bl-[2.5rem] flex items-center justify-center border-b border-l border-emerald-500/10">
                                    <span className="text-emerald-500/20 font-mono text-xs">0{i+1}</span>
                                </div>

                                <h3 className="text-emerald-400 font-mono text-[10px] uppercase tracking-[0.6em] mb-12">{stat.title}</h3>
                                <div className="text-7xl font-black mb-4 tracking-tighter text-white">
                                    {stat.value}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-zinc-200 text-xs uppercase tracking-widest font-bold">{stat.label}</span>
                                    <span className="text-zinc-600 text-[10px] uppercase tracking-wider">{stat.sub}</span>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500/0 group-hover:bg-emerald-500/40 group-hover:animate-pulse" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Legacy Header Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="w-full flex flex-col items-center mb-16 text-center"
                    >
                         <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white/20 uppercase italic">Legacy Archive</h2>
                         <div className="h-[1px] w-64 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mt-4" />
                    </motion.div>

                    {/* Legacy Archive Carousel */}
                    <div className="w-full mb-48 group">
                         <div className="grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-[1.01]">
                            <Carousel images={pastImages} />
                         </div>
                    </div>

                    {/* Internal Page Footer (Terminal Style) */}
                    <footer className="w-full pb-20 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="flex flex-col gap-2 font-mono">
                            <span className="text-emerald-500 text-[10px] tracking-[0.4em]">SYSTEM_VERSION // 2026.01</span>
                            <span className="text-zinc-600 text-[9px] uppercase tracking-widest leading-none">All Transmission Rights Reserved &copy; 2026</span>
                        </div>
                        <div className="flex items-center gap-10">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] uppercase tracking-[0.3em] transition-all"
                            >
                                Initiate_Interface
                            </motion.button>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Sponsor;
