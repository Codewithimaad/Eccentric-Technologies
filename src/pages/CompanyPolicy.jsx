import React, { useEffect, useRef, useState } from "react";
import { FiShield, FiClipboard, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";

const CompanyPolicy = () => {
    const ref = useRef();
    const [isInView, setIsInView] = useState(false);

    // Fade-in on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const floatingShapes = [
        { icon: <FiShield className="text-emerald-400/20" size={40} />, position: "top-1/4 left-1/4", animationDelay: "0s" },
        { icon: <FiClipboard className="text-blue-400/20" size={50} />, position: "bottom-1/3 right-1/4", animationDelay: "3s" },
        { icon: <FiCheckCircle className="text-purple-400/20" size={45} />, position: "top-1/3 right-1/5", animationDelay: "6s" },
        { icon: <FiAlertTriangle className="text-cyan-400/20" size={60} />, position: "bottom-1/4 left-1/5", animationDelay: "9s" },
    ];

    return (
        <div
            ref={ref}
            className={`min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 text-gray-200 overflow-hidden transition-opacity duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
        >
            {/* Background floating shapes */}
            <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
                {floatingShapes.map(({ icon, position, animationDelay }, i) => (
                    <div
                        key={i}
                        className={`absolute ${position} opacity-50 animate-floatingShape`}
                        style={{ animationDelay }}
                    >
                        {icon}
                    </div>
                ))}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 rounded-full blur-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 animate-pulseSlow -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Header */}
            <header className="text-center mb-20 max-w-4xl mx-auto">
                <div className="flex justify-center items-center mb-8">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-emerald-400/70 mr-4"></div>
                    <span className="text-emerald-400/80 font-mono tracking-widest text-sm uppercase">Company Policy</span>
                    <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-emerald-400/70 ml-4"></div>
                </div>

                <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold text-white/90 mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400/90 via-blue-400/90 to-purple-500/90">
                        Our Policies & Commitments
                    </span>
                </h1>

                <p className="max-w-3xl mx-auto text-xl text-gray-400/80 font-light">
                    We adhere to the highest standards of ethics, compliance, and responsibility in all our business practices.
                </p>
            </header>

            {/* Policy Sections */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                <section className="bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-700/30 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-white/90 mb-4 flex items-center">
                        <FiShield className="mr-3 text-emerald-400/80" size={28} />
                        Data Privacy
                    </h2>
                    <p className="text-gray-400/80 leading-relaxed">
                        We protect your personal data with utmost care and comply fully with all applicable data privacy laws.
                    </p>
                </section>

                <section className="bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-700/30 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-white/90 mb-4 flex items-center">
                        <FiClipboard className="mr-3 text-blue-400/80" size={28} />
                        Code of Conduct
                    </h2>
                    <p className="text-gray-400/80 leading-relaxed">
                        We maintain a culture of integrity and respect, expecting the same from all partners, employees, and stakeholders.
                    </p>
                </section>

                <section className="bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-700/30 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-white/90 mb-4 flex items-center">
                        <FiCheckCircle className="mr-3 text-purple-400/80" size={28} />
                        Quality Assurance
                    </h2>
                    <p className="text-gray-400/80 leading-relaxed">
                        Our products and services undergo rigorous testing to ensure they meet the highest quality standards.
                    </p>
                </section>

                <section className="bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-700/30 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-white/90 mb-4 flex items-center">
                        <FiAlertTriangle className="mr-3 text-cyan-400/80" size={28} />
                        Security Policy
                    </h2>
                    <p className="text-gray-400/80 leading-relaxed">
                        We implement state-of-the-art security measures to safeguard our infrastructure and your data.
                    </p>
                </section>
            </div>

            {/* Global Styles */}
            <style>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, rgba(55, 65, 81, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(55, 65, 81, 0.2) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        @keyframes floatingShape {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -30px) rotate(10deg); }
        }
        .animate-floatingShape {
          animation: floatingShape 12s ease-in-out infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.5; }
        }
        .animate-pulseSlow {
          animation: pulseSlow 15s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default CompanyPolicy;
