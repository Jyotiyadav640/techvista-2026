import React, { useState, useEffect } from 'react';
import SidebarNav from '../../components/Nav/SidebarNav';
import SocialSidebar from '../../components/Nav/SocialSidebar';
import Footer from '../../components/Nav/Footer';
import RegistrationForm from '../../components/Forms/RegistrationForm';
import '../../App.css';

const EVENTS = {
  seedBanker: {
    name: "Data Viz Master",
    venue: "IT LAB 2",
    date: "27TH FEB (DAY 1)",
    type: "DATA VISUALIZATION",
    bgImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&q=80",
    fee: "100",
    description: "Become a DataViz Master. Transform complex datasets into clear, actionable insights.",
    details: ["• Tools: Power BI / Tableau / Excel", "• Format: Solo Challenge"],
    fields: [
      { id: 'fullName', label: 'Analyst Name', placeholder: 'Enter your full name', required: true },
      { id: 'email', label: 'Email ID', placeholder: 'Enter your email', type: 'email', required: true },
      { id: 'phone', label: 'WhatsApp Number', placeholder: 'Enter your WhatsApp number', type: 'tel', required: true },
      { id: 'college', label: 'College Name', placeholder: 'Enter your institute name', required: true },
      { id: 'toolPreference', label: 'Primary Tool',type:'select', options:['Power BI', 'Tableau', 'Excel'], required: true },
      { id: 'paymentScreenshot', label: 'Payment Screenshot', type: 'file', required: true },
      { id: 'transactionId', label: 'Transaction ID', placeholder: 'Enter Transaction ID', required: true }
    ]
  },
  ecoWeb: {
    name: "Web-O-War",
    venue: "X-103",
    date: "27TH FEB (DAY 1)",
    type: "SOLO CHALLENGE",
    bgImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&q=80",
    fee: "100",
    description: "Evaluates technical accuracy, creativity, and problem-solving through web development.",
    details: ["• All work must be original", "• Strictly No communication"],
    fields: [
      { id: 'fullName', label: 'Participant Name', placeholder: 'Enter your full name', required: true },
      { id: 'email', label: 'Email ID', placeholder: 'Enter your email', type: 'email', required: true },
      { id: 'phone', label: 'WhatsApp Number', placeholder: 'Enter your WhatsApp number', type: 'tel', required: true },
      { id: 'college', label: 'College Name', placeholder: 'Enter your institute name', required: true },
      { id: 'paymentScreenshot', label: 'Payment Screenshot', type: 'file', required: true },
      { id: 'transactionId', label: 'Transaction ID', placeholder: 'Enter Transaction ID', required: true }
    ]
  },
  debugDevil: {
    name: "Debug Error",
    venue: "SERVER ROOM A",
    date: "28TH FEB (DAY 2)",
    type: "CRITICAL DEBUGGING",
    bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80",
    fee: "100",
    description: "Hacker THE DEVIL has breached the system. Save VSIT infrastructure.",
    details: ["• Objective: Save VSIT infrastructure", "• Toolset: AI-Assisted Debugging"],
    fields: [
      { id: 'fullName', label: 'Defender Name', placeholder: 'Enter your full name', required: true },
      { id: 'email', label: 'Email', placeholder: 'Enter your email', type: 'email', required: true },
      { id: 'phone', label: 'WhatsApp Number', type: 'tel', placeholder: 'Enter your WhatsApp number', required: true },
      { id: 'college', label: 'Institute Name', placeholder: 'Enter your institute name', required: true },
      { id: 'expertise', label: 'Primary Language', type: 'select', options: ['C++', 'HTML', 'JavaScript'], required: true },
      { id: 'paymentScreenshot', label: 'Security Clearance (Payment)', type: 'file', required: true },
      { id: 'transactionId', label: 'Transaction ID', placeholder: 'Enter Transaction ID', required: true }
    ]
  },
  botYantra: {
    name: "E-Yantra Robotics",
    venue: "Y-101",
    date: "27TH FEB (DAY 1)",
    type: "SOLO SIMULATION",
    bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80",
    fee: "100",
    description: "A simulation-based robotics event focusing on coding and logic building.",
    details: ["• Format: Solo Virtual Simulation", "• Language: Python / C++ / ROS"],
    fields: [
      { id: 'fullName', label: 'Participant Name', placeholder: 'Enter your full name', required: true },
      { id: 'email', label: 'Email ID', placeholder: 'Enter your email', type: 'email', required: true },
      { id: 'phone', label: 'WhatsApp Number', type: 'tel', placeholder: 'Enter your WhatsApp number', required: true },
      { id: 'college', label: 'College Name', placeholder: 'Enter your institute name', required: true },
      { id: 'codingLang', label: 'Preferred Language', type:'select', options:['C','C++','Python','Java','JavaScript'], required: true },
      { id: 'paymentScreenshot', label: 'Payment Screenshot', type: 'file', required: true },
      { id: 'transactionId', label: 'Transaction ID', placeholder: 'Enter Transaction ID', required: true }
    ]
  },
  codeCrack: {
    name: "Code Crossword",
    venue: "SEMINAR HALL 1",
    date: "27TH FEB (DAY 1)",
    type: "LOGIC CHALLENGE",
    bgImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1920&q=80",
    fee: "50",
    description: "Challenge your syntax knowledge and logic speed.",
    details: ["• Format: Solo Participation", "• Speed & Accuracy Scoring"],
    fields: [
      { id: 'fullName', label: 'Participant Name', placeholder: 'Enter your full name', required: true },
      { id: 'email', label: 'Email ID', placeholder: 'Enter your email', type: 'email', required: true },
      { id: 'phone', label: 'WhatsApp Number', type: 'tel', placeholder: 'Enter your WhatsApp number', required: true },
      { id: 'college', label: 'College Name', placeholder: 'Enter your institute name', required: true },
      { id: 'expertise', label: 'Primary Language', type: 'select', options:['C++', 'Java', 'Python'], required: true },
      { id: 'paymentScreenshot', label: 'Payment Screenshot', type: 'file', required: true },
      { id: 'transactionId', label: 'Transaction ID', placeholder: 'Enter Transaction ID', required: true }
    ]
  },
  adForge: {
    name: "Ad-O-Mania",
    venue: "Y-101",
    date: "28TH FEB (DAY 2)",
    type: "TEAM CHALLENGE",
    bgImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&q=80",
    fee: "200",
    description: "Bring fictional products to life using marketing strategies.",
    details: ["• Team Size: 1-3 Members", "• Pitches before judges"],
    isTeamEvent: true,
    fields: [
      { id: 'teamName', label: 'Team Name', placeholder: 'Enter your team name', required: true },
      { id: 'memberCount', label: 'Number of Players', type: 'select', options: ['1', '2', '3'], required: true},
      { id: 'college', label: 'College Name', placeholder: 'Enter your institute name', required: true},
      { id: 'paymentScreenshot', label: 'Payment Screenshot', type: 'file', required: true },
      { id: 'transactionId', label: 'Transaction ID', placeholder: 'Enter Transaction ID', required: true }
    ]
  },
  codeHunt: {
    name: "Code Crack Arena",
    venue: "LAB COMPLEX",
    date: "27TH FEB (DAY 1)",
    type: "COMPETITIVE CODING",
    bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80",
    fee: "100",
    description: "Enter the coding arena—solve fast, decode clues.",
    details: ["• Time Limit: 120 Minutes", "• Languages: C++, Java, Python"],
    fields: [
      { id: 'fullName', label: 'Full Name', required: true },
      { id: 'email', label: 'College Email', type: 'email', required: true },
      { id: 'phone', label: 'WhatsApp Number', type: 'tel', required: true },
      { id: 'college', label: 'College Name', required: true },
      { id: 'paymentScreenshot', label: 'Payment Screenshot', type: 'file', required: true },
      { id: 'transactionId', label: 'Transaction ID', required: true }
    ]
  },
  reelistic: {
    name: "Reelistic",
    venue: "CAMPUS-WIDE",
    date: "28TH FEB (DAY 2)",
    type: "CREATIVE CHALLENGE",
    bgImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1920&q=80",
    fee: "0",
    description: "Capture Tech-Vista 2026 in a 60–90 second Instagram reel.",
    details: ["• Duration: 60–90 Seconds", "• Creativity is key"],
    fields: [
      { id: 'fullName', label: 'Participant Name',placeholder: 'Enter your full name',required: true },
      { id: 'email', label: 'Email ID', type: 'email',placeholder: 'Enter your email',required: true },
      { id: 'phone', label: 'Phone Number', type: 'tel',placeholder: '+91 XXXXX XXXXX',required: true },
      { id: 'instagramHandle', label: 'Instagram Handle',placeholder: 'Enter your Instagram handle',required: true },
      { id: 'college', label: 'College Name',placeholder: 'Enter your institute name',required: true },
      { id: 'paymentScreenshot', label: 'Payment Screenshot', type: 'file', required: true },
      { id: 'transactionId', label: 'Transaction ID', placeholder: 'Enter Transaction ID', required: true }
    ]
  },
  gaming: {
    name: "BGMI",
    venue: "GAMING ZONE",
    date: "27-28 FEB",
    type: "TOURNAMENT",
    bgImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80",
    fee: "250",
    description: "Battle it out in the virtual world.",
    details: ["• Knockout rounds", "• Final at Main Stage"],
    isSpecial: true,
    formText: "E-Sports Form...",
    btnText: "Enter Arena"
  },
  fifa: {
    name: "FIFA",
    venue: "CAMPUS-WIDE",
    date: "27TH FEB",
    type: "RACE",
    bgImage: "https://images.unsplash.com/photo-1514467958574-23bceb9628ca?w=1920&q=80",
    fee: "100",
    description: "Solve cryptic clues across campus.",
    details: ["• Team size: up to 4", "• First to finish wins"],
    isSpecial: true,
    formText: "Treasure Hunt Form...",
    btnText: "Start Hunt"
  }
};

const EventMasterTerminal = ({ initialEvent, onEventChange }) => {
  const [selectedEvent, setSelectedEvent] = useState(initialEvent || 'seedBanker');
  const [activeNav, setActiveNav] = useState('events');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [memberCount, setMemberCount] = useState(1);

  const BANK_INFO = {
    accountNumber: "912345678901",
    ifscCode: "PYTM0123456",
    holderName: "Tech-Vista 2026 Admin"
  };

  useEffect(() => {
    if (initialEvent) {
        setSelectedEvent(initialEvent);
        setIsDropdownOpen(false);
        setMemberCount(1);
    }
  }, [initialEvent]);

  const currentEvent = EVENTS[selectedEvent];

  const getProcessedFields = () => {
    if (!currentEvent.fields) return [];
    if (!currentEvent.isTeamEvent) return currentEvent.fields;

    const fieldsCopy = [...currentEvent.fields];
    const paymentPart = fieldsCopy.slice(-2);
    const metaPart = fieldsCopy.slice(0, -2);

    const dynamicMembers = [];
    for (let i = 1; i <= memberCount; i++) {
      const role = i === 1 ? "Leader" : `Member ${i}`;
      dynamicMembers.push(
        { id: `name_${i}`, label: `${role} Name`, placeholder: `Enter ${role.toLowerCase()} name`, required: true },
        { id: `email_${i}`, label: `${role} Email`, placeholder: `Enter ${role.toLowerCase()} email`, type: 'email', required: true },
        { id: `phone_${i}`, label: `${role} Phone`, placeholder: `Enter ${role.toLowerCase()} phone`, type: 'tel', required: true }
      );
    }

    return [...metaPart, ...dynamicMembers, ...paymentPart];
  };

  const handleFieldUpdate = (id, value) => {
    if (id === 'memberCount') {
      setMemberCount(parseInt(value) || 1);
    }
  };
const handleMasterSubmit = async (formData) => {
  try {
    let base64Image = "";
    let imageType = "";
    let imageName = "";

    const file = formData.paymentScreenshot;

    // 🔴 FILE REQUIRED CHECK (YAHI DALNA HAI)
    if (!file) {
      alert("❌ Please upload payment screenshot");
      return; // ⛔ yahin stop ho jayega
    }

    // ✅ Base64 conversion
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(",")[1]);
        reader.onerror = reject;
      });

    base64Image = await toBase64(file);
    imageType = file.type;
    imageName = file.name;

    // ⬇️ payload + fetch yahin neeche rahega (unchanged)


    // 🔥 UNIVERSAL PAYLOAD
    const payload = {
  eventName: currentEvent.name,

  name:
    formData.fullName ||
    formData.teamName ||
    "",

  email:
    formData.email ||
    formData.collegeEmail ||
    "",

  phone:
    formData.phone ||
    "",

  college:
    formData.college ||
    "",

  primary:
    formData.toolPreference ||
    formData.expertise ||
    formData.codingLang ||
    "",

  preferred:
    formData.experience ||
    "",

  players:
    formData.memberCount ||
    "1",

  transactionId:
    formData.transactionId ||
    "",

  image: base64Image,
  imageType,
  imageName
};


    const response = await fetch("https://script.google.com/macros/s/AKfycbzYdu-Lz9v9MqzZose_FFcYqVIcQyGXTZ0APXNEd_QGfkc-xn35UkxrNFNUPVSaggG0/exec", {
  method: "POST",
  body: JSON.stringify(payload),
});
    const text = await response.text();
    console.log("SCRIPT RESPONSE:", text);

    const result = JSON.parse(text);

    if (result.status === "success") {
      alert("✅ Registration Successful");
    } else {
      alert("❌ Backend Error: " + result.message);
    }

  } catch (error) {
    console.error("FINAL ERROR:", error);
    alert("❌ Something went wrong (check console)");
  }
};

  const handleSelect = (key) => {
    setSelectedEvent(key);
    setIsDropdownOpen(false);
    setMemberCount(1);
    if(onEventChange) onEventChange(key);
  };

  return (
    <div className="text-white h-screen w-full relative bg-[#030f0a] overflow-hidden flex flex-col">
      <SidebarNav activeNav={activeNav} setActiveNav={setActiveNav} />
      <SocialSidebar />
      <Footer activeNav={activeNav} setActiveNav={setActiveNav} />

      <div className="flex-1 w-full h-full overflow-y-auto flex flex-col relative pl-16 md:pl-24 pr-16 md:pr-24 no-scrollbar">

        <div className="fixed inset-0 z-0 pointer-events-none transition-all duration-1000 ease-in-out">
          <img
            key={currentEvent.bgImage}
            src={currentEvent.bgImage}
            alt="BG"
            className="w-full h-full object-cover opacity-40 transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
        </div>

        <div className="z-[100] mt-10 flex flex-col items-center relative w-full max-w-[320px] mx-auto">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="group relative w-full bg-black/60 backdrop-blur-2xl border border-[#39ff14]/30 p-4 rounded-md flex items-center justify-between transition-all hover:border-[#39ff14]"
          >
            <div className="flex flex-col items-start text-left">
              <span className="text-[7px] text-[#00ffd5] font-orbitron uppercase tracking-widest opacity-50 mb-1">Status: Active</span>
              <span className="text-[#39ff14] font-orbitron text-[11px] uppercase tracking-wider">{currentEvent.name}</span>
            </div>
            <div className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
              <svg className="w-4 h-4 text-[#39ff14]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-full mt-2 bg-[#030f0a]/95 backdrop-blur-3xl border border-white/10 rounded-md overflow-hidden z-[110]">
              <div className="max-h-[300px] overflow-y-auto py-1 no-scrollbar">
                {Object.keys(EVENTS).map((key) => (
                  <button
                    key={key}
                    onClick={() => handleSelect(key)}
                    className={`w-full text-left px-5 py-3 font-orbitron text-[10px] uppercase tracking-widest transition-all
                      ${selectedEvent === key ? 'bg-[#39ff14]/10 text-[#39ff14]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                  >
                    {EVENTS[key].name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <main className="z-10 py-10 flex flex-col items-center">
            <div className="max-w-3xl w-full mb-10 text-center">
              <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-[#39ff14] uppercase tracking-widest drop-shadow-[0_0_15px_rgba(57,255,20,0.6)]">
                {currentEvent.name}
              </h1>
              <div className="flex justify-center flex-wrap gap-4 mt-4 font-orbitron text-[10px] text-[#00ffd5] opacity-80 uppercase tracking-widest">
                <span>VENUE: {currentEvent.venue}</span>
                <span className="opacity-30">|</span>
                <span>DATE: {currentEvent.date}</span>
                <span className="opacity-30">|</span>
                <span>TYPE: {currentEvent.type}</span>
              </div>

              <div className="mt-8 bg-black/30 backdrop-blur-md border border-white/5 p-6 rounded-lg text-left fade-in-up">
                <p className="text-gray-300 font-light leading-relaxed mb-6">
                  {currentEvent.description}
                </p>
                <div className={`grid grid-cols-1 ${parseInt(currentEvent.fee) > 0 ? 'md:grid-cols-2' : ''} gap-x-6 gap-y-4 border-t border-white/10 pt-6`}>
                  <div className="space-y-2 text-[9px] uppercase tracking-widest text-[#39ff14]/70">
                    {currentEvent.details.map((detail, index) => (
                      <p key={index}>{detail}</p>
                    ))}
                    <p>• Scoring: Speed + Accuracy</p>
                    <p>• Entry Fee: {parseInt(currentEvent.fee) > 0 ? `₹${currentEvent.fee}/-` : 'FREE'}</p>
                  </div>

                  {/* Dynamic Bank Details Hiding */}
                  {parseInt(currentEvent.fee) > 0 && (
                    <div className="bg-[#39ff14]/5 p-3 rounded border border-[#39ff14]/20">
                      <p className="text-[#39ff14] text-[10px] font-orbitron mb-2 tracking-widest">BANK TRANSFER DETAILS</p>
                      <p className="text-white text-[11px] font-mono">A/C: {BANK_INFO.accountNumber}</p>
                      <p className="text-white text-[11px] font-mono">IFSC: {BANK_INFO.ifscCode}</p>
                      <p className="text-gray-400 text-[8px] mt-1 uppercase italic">Holder: {BANK_INFO.holderName}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full">
              {currentEvent.isSpecial ? (
                <div className="w-full max-w-2xl mx-auto bg-black/40 backdrop-blur-xl p-10 rounded-xl border border-white/10 text-center mb-20">
                    <p className="text-gray-300 font-orbitron text-xs tracking-widest mb-8">{currentEvent.formText}</p>
                    <button className="w-full font-orbitron text-xs font-bold uppercase text-[#030f0a] py-4 rounded-sm bg-[#39ff14]">
                      {currentEvent.btnText}
                    </button>
                </div>
              ) : (
                <RegistrationForm
                  key={selectedEvent}
                  title={`${currentEvent.name} Interface`}
                  fields={getProcessedFields()}
                  onFieldUpdate={handleFieldUpdate}
                  onSubmit={handleMasterSubmit}
                />
              )}
            </div>
        </main>
      </div>
    </div>
  );
};

export default EventMasterTerminal;
