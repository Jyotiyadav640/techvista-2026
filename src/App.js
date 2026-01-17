import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Preloader from './components/Common/Preloader.js';
import Home from './pages/Home';
import Events from './pages/Events';
import Contact from './pages/Contact';
import About from './pages/About';
import Sponsor from './pages/Sponsor';

/* Legacy Individual Registration Pages Commented Out
import SeedBanker from './pages/RegisterPages/SeedBanker.js';
... etc ...
*/

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) return <Preloader onFinish={() => setLoading(false)} />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      {/* This dynamic route captures dropdown changes and direct registration links */}
      <Route path="/register/:eventId" element={<Events />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/sponsor" element={<Sponsor />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
