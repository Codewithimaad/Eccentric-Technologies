import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Using Unicode icons since react-icons isn't available
const IconServer = () => <span className="text-2xl">🖥️</span>;
const IconShield = () => <span className="text-2xl">🛡️</span>;
const IconBook = () => <span className="text-2xl">📚</span>;
const IconZap = () => <span className="text-2xl">⚡</span>;
const IconGlobe = () => <span className="text-2xl">🌐</span>;

const FloatingClientCard = ({ client, index, mousePosition }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const floatAnimation = () => {
            const time = Date.now() * 0.0008;
            const newX = Math.sin(time + index * 1.2) * 25;
            const newY = Math.cos(time * 0.8 + index * 0.7) * 20;
            const newRotation = Math.sin(time * 0.4 + index) * 3;

            setPosition({ x: newX, y: newY });
            setRotation(newRotation);
        };

        const interval = setInterval(floatAnimation, 60);
        return () => clearInterval(interval);
    }, [index]);

    const calculateParallax = () => {
        if (!mousePosition) return { x: 0, y: 0 };
        const parallaxStrength = 0.015;
        return {
            x: (mousePosition.x - window.innerWidth / 2) * parallaxStrength,
            y: (mousePosition.y - window.innerHeight / 2) * parallaxStrength
        };
    };

    const parallax = calculateParallax();

    return (
        <div
            className="relative group cursor-pointer"
            style={{
                transform: `translate(${position.x + parallax.x}px, ${position.y + parallax.y}px) rotate(${rotation}deg)`,
                transition: 'transform 0.1s ease-out'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glowing aura */}
            <div className={`absolute inset-0 bg-gradient-to-r ${client.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700 scale-110`} />

            {/* Main card */}
            <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-500 hover:scale-105">

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                    {/* Header with icon */}
                    <div className="flex items-start mb-6">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${client.gradient} flex items-center justify-center shadow-xl group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:scale-110`}>
                            <client.icon />
                        </div>
                        <div className="ml-5 flex-1">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                                {client.name}
                            </h3>
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-3 py-1 mb-2">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                <span className="text-sm text-emerald-400 font-medium">{client.industry}</span>
                            </div>
                            <div className="text-xs text-gray-400 font-medium">
                                Partner {client.partnership}
                            </div>
                        </div>
                    </div>

                    {/* Partnership timeline */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full shadow-lg shadow-emerald-500/50" />
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-emerald-400/50 to-transparent" />
                        <span className="text-xs text-gray-500">
                            {new Date().getFullYear() - parseInt(client.partnership.split(' ')[1])} years
                        </span>
                    </div>

                    {/* Testimonial */}
                    <div className="relative">
                        <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-emerald-400 via-cyan-400 to-purple-500 rounded-full" />
                        <div className="pl-6">
                            <div className="text-3xl text-emerald-400/50 mb-2">"</div>
                            <p className="text-gray-300 italic leading-relaxed text-sm mb-3">
                                {client.testimonial}
                            </p>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-yellow-400 text-sm">★</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                </div>
            </div>
        </div>
    );
};

const ModernFloatingClients = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const clients = [
        {
            name: "FAB Frequency Allocator Board",
            industry: "Telecommunications",
            partnership: "Since 2018",
            testimonial: "Ora-Tech's spectrum management solutions revolutionized our operations.",
            icon: IconServer,
            gradient: "from-blue-500 to-cyan-600"
        },
        {
            name: "FIA Federal Investigation Agency",
            industry: "Government Security",
            partnership: "Since 2017",
            testimonial: "Advanced cybersecurity solutions for our critical infrastructure.",
            icon: IconShield,
            gradient: "from-red-500 to-orange-600"
        },
        {
            name: "Quaid-e-Azam University",
            industry: "Education",
            partnership: "Since 2019",
            testimonial: "Transformed our campus with cutting-edge educational technology.",
            icon: IconBook,
            gradient: "from-purple-500 to-pink-600"
        },
        {
            name: "CTPA Central Power Purchasing Agency",
            industry: "Energy",
            partnership: "Since 2016",
            testimonial: "Reliable energy management systems for national grid operations.",
            icon: IconZap,
            gradient: "from-yellow-500 to-orange-600"
        },
        {
            name: "Ufone",
            industry: "Telecommunications",
            partnership: "Since 2015",
            testimonial: "Scalable solutions that grew with our subscriber base.",
            icon: IconGlobe,
            gradient: "from-green-500 to-emerald-600"
        },
    ];

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="min-h-screen overflow-hidden  relative">
            {/* Animated background */}
            <div className="absolute inset-0">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

                {/* Floating orbs */}
                <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />

                {/* Radial gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full px-8 py-3 mb-8">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">Trusted Partners</span>
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-cyan-300">
                            Our Esteemed
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500">
                            Clients
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Trusted by leading organizations across multiple industries, delivering excellence since 2015
                    </p>
                </div>

                {/* Floating client cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                    {clients.map((client, index) => (
                        <FloatingClientCard
                            key={index}
                            client={client}
                            index={index}
                            mousePosition={mousePosition}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-32 text-center">
                    <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-12 shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
                                Become Our Next
                            </span>
                            <br />
                            <span className="text-white">Success Story</span>
                        </h2>

                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Join our growing list of satisfied clients and experience the Ora-Tech difference with cutting-edge solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to='/contact' className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10">Contact Our Team</span>
                            </Link>


                        </div>
                    </div>
                </div>

                {/* Stats section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { number: "50+", label: "Happy Clients", icon: "👥" },
                        { number: "15", label: "Years Experience", icon: "⭐" },
                        { number: "99.9%", label: "Uptime", icon: "📈" },
                        { number: "24/7", label: "Support", icon: "🛟" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 group-hover:border-emerald-400/50 group-hover:bg-gray-900/50 transition-all duration-300">
                                <div className="text-3xl mb-3">{stat.icon}</div>
                                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ModernFloatingClients;