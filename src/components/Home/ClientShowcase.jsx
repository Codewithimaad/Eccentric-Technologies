import React, { useState, useEffect } from "react";

const MongoDBLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1" x="0px" y="0px" viewBox="0 0 250 250"
        enable-background="new 0 0 250 250" xml:space="preserve">
        <g id="mongodb-leaf">
            <path id="mongodb-leaf-stem" fill="#A6A385" d="m132.118576,245.311905l-6.359024,-2.172424c0,0 0.776367,-32.416153 -10.856194,-34.742371c-7.755051,-8.99585 1.240746,-381.551559 29.158333,-1.240768c0,0 -9.615448,4.807755 -11.322021,13.02858c-1.861847,8.065567 -0.621094,25.126984 -0.621094,25.126984l0,0l0,0z" />
            <path id="mongodb-leaf-right" fill="#499D4A" d="m133.219955,217.975906c0,0 62.153046,-34.939911 43.96405,-116.754906c-12.562012,-55.3708 -42.188004,-73.5177 -45.444,-80.497801c-3.567001,-4.963 -6.980003,-13.64824 -6.980003,-13.64824l2.326996,154.015036c0,0.156006 -6.245499,51.043503 6.008507,56.782501" />
            <path id="mongodb-leaf-left" fill="#58AA50" d="m122.50312,215.996826c0,0 -52.269646,-35.674057 -49.167053,-98.489357c2.945869,-62.816769 39.86071,-93.681702 46.994659,-99.265772c4.6539,-4.962999 4.809174,-6.824864 5.119713,-11.787839c3.256439,6.980127 2.63678,104.384009 3.101166,115.86132c1.396027,44.204063 -2.481499,85.306969 -6.048485,93.681648l0,0l0,0z" />
        </g>
    </svg>
);

const clients = [
    {
        name: "Oracle Database",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
        color: "from-red-500 to-orange-600"
    },
    {
        name: "Microsoft SQL Server",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
        color: "from-blue-500 to-cyan-600"
    },
    {
        name: "PostgreSQL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        color: "from-blue-600 to-indigo-700"
    },
    {
        name: "MySQL",
        logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
        color: "from-orange-500 to-yellow-600"
    },
    {
        name: "Data Warehousing",
        logo: "https://cdn-icons-png.flaticon.com/512/3305/3305677.png",
        color: "from-purple-500 to-pink-600"
    },
    {
        name: "MongoDB",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
        color: "from-green-500 to-emerald-600"
    },
    {
        name: "Cassandra",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Cassandra_logo.svg",
        color: "from-cyan-500 to-blue-600"
    },
    {
        name: "Hadoop",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Hadoop_logo_new.svg",
        color: "from-yellow-500 to-orange-600"
    }
];


const FloatingIcon = ({ client, index, mousePosition }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const floatAnimation = () => {
            const time = Date.now() * 0.001;
            const newX = Math.sin(time + index * 0.5) * 20;
            const newY = Math.cos(time * 0.7 + index * 0.3) * 15;
            const newRotation = Math.sin(time * 0.3 + index) * 10;

            setPosition({ x: newX, y: newY });
            setRotation(newRotation);
        };

        const interval = setInterval(floatAnimation, 50);
        return () => clearInterval(interval);
    }, [index]);

    const calculateParallax = () => {
        if (!mousePosition) return { x: 0, y: 0 };
        const parallaxStrength = 0.02;
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
        >
            {/* Glowing background */}
            <div className={`absolute inset-0 bg-gradient-to-r ${client.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 scale-150`} />

            {/* Main container */}
            <div className="relative bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 shadow-2xl group-hover:shadow-cyan-500/25 group-hover:border-cyan-400/50 transition-all duration-300 hover:scale-110">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse" />
                </div>

                {/* Icon container */}
                <div className="relative z-10 flex justify-center items-center h-16 w-16">
                    <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-20 max-w-20 object-contain filter group-hover:brightness-110 transition-all duration-300"
                        onError={(e) => {
                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='%23374151' viewBox='0 0 24 24'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5z'/%3E%3Cpath d='M2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E";
                        }}
                    />
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="bg-gray-800/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg shadow-lg border border-gray-600/50">
                        {client.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                            <div className="border-4 border-transparent border-t-gray-800/90" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ModernClientsShowcase = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

                {/* Floating orbs */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-2 mb-8">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Technologies We Master</span>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    </div>

                    <h2 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                        Cutting-Edge
                        <br />
                        <span className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text">
                            Database Solutions
                        </span>
                    </h2>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Powering enterprise applications with the most advanced database technologies and data management solutions
                    </p>
                </div>

                {/* Floating icons grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-16 items-center justify-items-center">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <FloatingIcon
                                client={client}
                                index={index}
                                mousePosition={mousePosition}
                            />
                        </div>
                    ))}
                </div>

                {/* Stats section */}
                <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { number: "99.9%", label: "Uptime Guarantee", icon: "🚀" },
                        { number: "10M+", label: "Queries per Second", icon: "⚡" },
                        { number: "24/7", label: "Expert Support", icon: "🛡️" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center group cursor-pointer">
                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 group-hover:border-cyan-400/50 group-hover:bg-gray-800/50 transition-all duration-300">
                                <div className="text-4xl mb-4">{stat.icon}</div>
                                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-400 font-medium">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default ModernClientsShowcase;