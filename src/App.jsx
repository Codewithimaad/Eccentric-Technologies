import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiBarChart2, FiUsers, FiGlobe, FiShield, FiCpu, FiTrendingUp, FiLayers } from 'react-icons/fi';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CompanyInsight from './pages/CompanyInsight';
import Services from './pages/Services';
import Footer from './components/Footer';
import Journey from './pages/Journey';
import Contact from './pages/Contact';
import Clients from './pages/Clients';

const App = () => {
  // Enhanced floating shapes configuration
  const floatingShapes = [
    {
      icon: <FiBarChart2 className="text-blue-400/30" size={50} />,
      position: "top-[15%] left-[15%]",
      animation: { y: [0, -40, 0], x: [0, 20, 0], rotate: [0, 8, 0] },
      duration: 18
    },
    {
      icon: <FiUsers className="text-emerald-400/30" size={60} />,
      position: "bottom-[25%] right-[20%]",
      animation: { y: [0, 30, 0], x: [0, -15, 0], rotate: [0, -5, 0] },
      duration: 22
    },
    {
      icon: <FiGlobe className="text-purple-400/25" size={55} />,
      position: "top-[30%] right-[10%]",
      animation: { y: [0, -25, 0], x: [0, 25, 0], rotate: [0, 10, 0] },
      duration: 20
    },
    {
      icon: <FiShield className="text-cyan-400/30" size={65} />,
      position: "bottom-[20%] left-[10%]",
      animation: { y: [0, 35, 0], x: [0, -20, 0], rotate: [0, -8, 0] },
      duration: 25
    },
    {
      icon: <FiCpu className="text-indigo-400/25" size={45} />,
      position: "top-[25%] left-[80%]",
      animation: { y: [0, -30, 0], x: [0, -10, 0], rotate: [0, 5, 0] },
      duration: 17
    },
    {
      icon: <FiTrendingUp className="text-teal-400/25" size={50} />,
      position: "bottom-[15%] right-[80%]",
      animation: { y: [0, 25, 0], x: [0, 15, 0], rotate: [0, -3, 0] },
      duration: 19
    }
  ];

  return (
    <Router>
      <div className='overflow-x-hidden text-stone-300 antialiased font-prata'>
        {/* Enhanced Background with improved floating elements */}
        <div className='fixed inset-0 -z-10'>
          <div className="relative h-full w-full bg-slate-950 overflow-hidden">
            {/* Transparent Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Floating elements with clearer visibility */}
              {floatingShapes.map((shape, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${shape.position} opacity-30 hover:opacity-50 transition-opacity duration-300`}
                  animate={shape.animation}
                  transition={{
                    duration: shape.duration,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {shape.icon}
                </motion.div>
              ))}

              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]"></div>

              {/* More visible grid pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

              {/* Multiple animated gradient blobs */}
              <motion.div
                className="absolute top-1/3 left-1/4 w-1/3 h-1/3 rounded-full bg-blue-500/5 blur-3xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 25, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/3 w-1/4 h-1/4 rounded-full bg-emerald-500/5 blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 30, repeat: Infinity, delay: 10 }}
              />
              <motion.div
                className="absolute top-2/3 right-1/4 w-1/5 h-1/5 rounded-full bg-purple-500/5 blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 20, repeat: Infinity, delay: 5 }}
              />
            </div>
          </div>
        </div>

        <Navbar />

        {/* Main Layout */}
        <div className='pt-20 md:pt-24 px-4 sm:px-10 relative z-10'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company-insight" element={<CompanyInsight />} />
            <Route path="/services" element={<Services />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/clients" element={<Clients />} />

          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

// Enhanced global styles
const globalStyles = `
  .bg-grid-pattern {
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
  }
`;

export default App;