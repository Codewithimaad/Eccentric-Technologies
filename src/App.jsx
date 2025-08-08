import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FiBarChart2, FiUsers, FiGlobe, FiShield, FiCpu, FiTrendingUp } from 'react-icons/fi';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CompanyInsight from './pages/CompanyInsight';
import Services from './pages/Services';
import Footer from './components/Footer';
import Journey from './pages/Journey';
import Contact from './pages/Contact';
import Clients from './pages/Clients';
import About from './pages/About';
import CompanyPolicy from './pages/CompanyPolicy';
import Partners from './pages/Partners';

const App = () => {
  const floatingShapes = [
    { icon: <FiBarChart2 className="text-blue-400/30" size={50} />, position: "top-[15%] left-[15%]", anim: "animate-float-slow" },
    { icon: <FiUsers className="text-emerald-400/30" size={60} />, position: "bottom-[25%] right-[20%]", anim: "animate-float-medium" },
    { icon: <FiGlobe className="text-purple-400/25" size={55} />, position: "top-[30%] right-[10%]", anim: "animate-float-slow" },
    { icon: <FiShield className="text-cyan-400/30" size={65} />, position: "bottom-[20%] left-[10%]", anim: "animate-float-medium" },
    { icon: <FiCpu className="text-indigo-400/25" size={45} />, position: "top-[25%] left-[80%]", anim: "animate-float-slow" },
    { icon: <FiTrendingUp className="text-teal-400/25" size={50} />, position: "bottom-[15%] right-[80%]", anim: "animate-float-medium" },
  ];

  return (
    <Router>
      <div className="overflow-x-hidden text-stone-300 antialiased font-prata">
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-slate-950/100 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              {floatingShapes.map((shape, index) => (
                <div
                  key={index}
                  className={`absolute ${shape.position} ${shape.anim} opacity-30 hover:opacity-50 transition-opacity duration-300`}
                >
                  {shape.icon}
                </div>
              ))}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]"></div>
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

              {/* Gradient blobs */}
              <div className="absolute top-1/3 left-1/4 w-1/3 h-1/3 rounded-full bg-blue-500/5 blur-3xl animate-blob"></div>
              <div className="absolute bottom-1/4 right-1/3 w-1/4 h-1/4 rounded-full bg-emerald-500/5 blur-3xl animate-blob" style={{ animationDelay: '10s' }}></div>
              <div className="absolute top-2/3 right-1/4 w-1/5 h-1/5 rounded-full bg-purple-500/5 blur-3xl animate-blob" style={{ animationDelay: '5s' }}></div>
            </div>
          </div>
        </div>

        <Navbar />

        <div className="pt-20 md:pt-24 px-4 sm:px-10 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company-insight" element={<CompanyInsight />} />
            <Route path="/services" element={<Services />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/about" element={<About />} />
            <Route path="/policy" element={<CompanyPolicy />} />
            <Route path="/partners" element={<Partners />} />

          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
