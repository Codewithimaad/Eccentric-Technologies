import React, { useEffect, useRef, useState } from "react";
import { FiUsers, FiInfo, FiMap, FiHeart, FiBriefcase, FiAward, FiGlobe } from "react-icons/fi";

const About = () => {
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
        { icon: <FiUsers className="text-emerald-400/20" size={40} />, position: "top-1/4 left-1/4", animationDelay: "0s" },
        { icon: <FiInfo className="text-blue-400/20" size={50} />, position: "bottom-1/3 right-1/4", animationDelay: "3s" },
        { icon: <FiMap className="text-purple-400/20" size={45} />, position: "top-1/3 right-1/5", animationDelay: "6s" },
        { icon: <FiHeart className="text-cyan-400/20" size={60} />, position: "bottom-1/4 left-1/5", animationDelay: "9s" },
    ];

    const historyMilestones = [
        {
            year: "2017",
            title: "Company Founded",
            description: "Eccentric Technologies started with a passion for technology outcomes.",
            icon: <FiBriefcase className="text-emerald-400" size={24} />
        },
        {
            year: "2018",
            title: "Strategic Partnership",
            description: "Partnered with NCS, a leading database services company in the UK.",
            icon: <FiGlobe className="text-blue-400" size={24} />
        },
        {
            year: "2019",
            title: "Enterprise Expansion",
            description: "Expanded our team with experts from IBM, Apple, Oracle, and Microsoft.",
            icon: <FiUsers className="text-purple-400" size={24} />
        },
        {
            year: "Present",
            title: "Industry Recognition",
            description: "Trusted by clients like Burberry, Daily Mail, Wimbledon Tennis, and more.",
            icon: <FiAward className="text-amber-400" size={24} />
        }
    ];

    return (
        <div
            ref={ref}
            className={`min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 text-gray-200 overflow-hidden transition-opacity duration-1000 ${isInView ? "opacity-100" : "opacity-0 translate-y-10"
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
                    <span className="text-emerald-400/80 font-mono tracking-widest text-sm uppercase">About Eccentric Systems</span>
                    <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-emerald-400/70 ml-4"></div>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white/90 mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400/90 via-blue-400/90 to-purple-500/90">
                        Who We Are
                    </span>
                </h1>

                <p className="max-w-3xl mx-auto text-xl text-gray-400/80 font-light">
                    At Eccentric Systems, we harness technology and innovation to deliver transformative solutions that empower businesses worldwide.
                </p>
            </header>

            {/* Company History Section */}
            <section className="max-w-6xl mx-auto mb-20">
                <div className="bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-700/30 p-8">
                    <h2 className="text-3xl font-bold text-white/90 mb-8 flex items-center">
                        <FiMap className="mr-3 text-purple-400/80" size={28} />
                        Our History
                    </h2>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-400/20 via-blue-400/20 to-purple-400/20"></div>

                        <div className="space-y-8">
                            {historyMilestones.map((milestone, index) => (
                                <div key={index} className="relative pl-16 group">
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center z-10">
                                        {milestone.icon}
                                    </div>

                                    <div className={`p-6 rounded-xl border border-gray-700/30 bg-gradient-to-br ${index % 2 === 0 ? 'from-gray-800/30 to-gray-900/30' : 'from-gray-900/30 to-gray-800/30'} backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-400/30`}>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                            <span className="text-2xl font-bold text-emerald-400/90">{milestone.year}</span>
                                            <h3 className="text-xl font-semibold text-white/90">{milestone.title}</h3>
                                        </div>
                                        <p className="mt-3 text-gray-400/80 leading-relaxed">{milestone.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-gray-700/30 backdrop-blur-sm">
                        <p className="text-gray-400/80 leading-relaxed">
                            Eccentric Technologies started out supporting traditional database technologies, and while that's still an important part of what we do, we continue to evolve in supporting modern and leading edge database technologies, including Cloud, Migration and Administration tools. With over 15 years' experience in complex database projects, we work on various technical platforms including Oracle, MySQL and Microsoft SQL Servers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                <section className="bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-700/30 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-white/90 mb-4 flex items-center">
                        <FiUsers className="mr-3 text-emerald-400/80" size={28} />
                        Our Mission
                    </h2>
                    <p className="text-gray-400/80 leading-relaxed">
                        We aim to provide innovative, reliable, and scalable tech solutions that drive success and growth for our clients across industries.
                    </p>
                </section>

                <section className="bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-700/30 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-white/90 mb-4 flex items-center">
                        <FiInfo className="mr-3 text-blue-400/80" size={28} />
                        Our Values
                    </h2>
                    <ul className="list-disc list-inside text-gray-400/80 space-y-2">
                        <li>Innovation at the core</li>
                        <li>Customer-centric approach</li>
                        <li>Integrity and transparency</li>
                        <li>Collaborative teamwork</li>
                        <li>Continuous learning and improvement</li>
                    </ul>
                </section>

                <section className="bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-700/30 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-white/90 mb-4 flex items-center">
                        <FiBriefcase className="mr-3 text-purple-400/80" size={28} />
                        Our Expertise
                    </h2>
                    <p className="text-gray-400/80 leading-relaxed">
                        Our team brings experience from leading organizations like IBM, Apple, Oracle, and Microsoft, understanding that technology must serve business goals.
                    </p>
                </section>

                <section className="bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-700/30 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-white/90 mb-4 flex items-center">
                        <FiHeart className="mr-3 text-cyan-400/80" size={28} />
                        Why Choose Us
                    </h2>
                    <p className="text-gray-400/80 leading-relaxed">
                        Clients such as Burberry, Daily Mail, Wimbledon Tennis, Capita and Conde Nast continue to benefit from our unique approach to database solutions.
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

export default About;