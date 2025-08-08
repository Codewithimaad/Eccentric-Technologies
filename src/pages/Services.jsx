import React, { useEffect, useRef, useState } from "react";
import {
    FiArrowRight,
    FiCheckCircle,
    FiGlobe,
    FiCpu,
    FiTrendingUp,
} from "react-icons/fi";
import { FaAtom, FaNetworkWired } from "react-icons/fa";

const Services = () => {
    const ref = useRef();
    const [isInView, setIsInView] = useState(false);

    // Intersection Observer to trigger fade-in when in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const floatingShapes = [
        {
            icon: <FaAtom className="text-emerald-400/20" size={40} />,
            position: "top-1/4 left-1/4",
            animationDelay: "0s",
        },
        {
            icon: <FaNetworkWired className="text-blue-400/20" size={50} />,
            position: "bottom-1/3 right-1/4",
            animationDelay: "3s",
        },
        {
            icon: <FiTrendingUp className="text-purple-400/20" size={45} />,
            position: "top-1/3 right-1/5",
            animationDelay: "6s",
        },
        {
            icon: <FiCpu className="text-cyan-400/20" size={60} />,
            position: "bottom-1/4 left-1/5",
            animationDelay: "9s",
        },
    ];

    const serviceCategories = [
        {
            title: "Oracle Cloud Infrastructure",
            icon: <FiGlobe className="text-blue-400/80" size={24} />,
            services: [
                "Compute services",
                "Storage solutions",
                "Networking",
                "Databases",
                "AI/ML services",
                "Analytics",
                "Security",
                "Developer tools",
            ],
            description:
                "A comprehensive cloud computing platform offering infrastructure services with high performance and security.",
        },
        {
            title: "Oracle Cloud Applications",
            icon: <FiTrendingUp className="text-purple-400/80" size={24} />,
            services: [
                "ERP Solutions",
                "Supply Chain Management",
                "Customer Experience",
                "Human Capital Management",
                "Enterprise Performance Management",
                "Industry-specific solutions",
            ],
            description:
                "Complete suite of business applications designed to transform your enterprise operations.",
        },
        {
            title: "Oracle Fusion Middleware",
            icon: <FaNetworkWired className="text-cyan-400/80" size={24} />,
            services: [
                "Business Intelligence",
                "ETL Services",
                "Data Warehousing",
                "Data Analytics",
                "Integration Solutions",
            ],
            description:
                "Digital solutions for developing and running agile, intelligent applications across environments.",
        },
        {
            title: "Blockchain Solutions",
            icon: <FaAtom className="text-emerald-400/80" size={24} />,
            services: [
                "Smart contract development",
                "Decentralized applications",
                "Blockchain integration",
                "Oracle services",
                "Security solutions",
            ],
            description:
                "Innovative blockchain services connecting smart contracts with real-world data.",
        },
        {
            title: "Hardware & Software",
            icon: <FiCpu className="text-amber-400/80" size={24} />,
            services: [
                "Oracle Database solutions",
                "Linux systems",
                "On-Premises Applications",
                "Servers and Storage",
                "Exadata systems",
            ],
            description:
                "Comprehensive hardware and software solutions tailored to enterprise needs.",
        },
        {
            title: "Enterprise Integration",
            icon: <FiCheckCircle className="text-pink-400/80" size={24} />,
            services: [
                "Consultancy Services",
                "Solution Design & Implementation",
                "Technical Support",
                "Outsourcing Services",
                "Project Management",
            ],
            description:
                "Framework for enterprise-wide integration across complex organizations.",
        },
    ];

    const featuredSolutions = [
        {
            title: "AI & Machine Learning",
            description:
                "Eccentric offers AI-based products for multiple industries including healthcare, automotive, retail, and customer service solutions.",
            icon: <FiCpu className="text-emerald-400/80" size={24} />,
        },
        {
            title: "Data Lakehouse",
            description:
                "Modern architecture combining data warehouses with open source technologies to analyze all types of data including invoices, forms, text, audio, and video.",
            icon: <FiGlobe className="text-blue-400/80" size={24} />,
        },
        {
            title: "DevOps as a Service",
            description:
                "Reduce costs and speed up development cycles with our experienced team of DevOps experts and cutting-edge tools.",
            icon: <FaNetworkWired className="text-purple-400/80" size={24} />,
        },
        {
            title: "Security Solutions",
            description:
                "Protect your most valuable data with our security-first approach, building trust through decades of experience securing data and applications.",
            icon: <FiCheckCircle className="text-cyan-400/80" size={24} />,
        },
    ];

    return (
        <section
            ref={ref}
            className={`min-h-screen text-gray-200 px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 overflow-hidden transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
        >
            {/* Background floating shapes */}
            <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
                {floatingShapes.map(({ icon, position, animationDelay }, index) => (
                    <div
                        key={index}
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
            <header className="mb-24 text-center max-w-4xl mx-auto">
                <div className="flex justify-center items-center mb-8">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-emerald-400/70 mr-4"></div>
                    <span className="text-emerald-400/80 font-mono tracking-widest text-sm">
                        ECCENTRIC SYSTEMS
                    </span>
                    <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-emerald-400/70 ml-4"></div>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white/90 mb-8">
                    <span className="bg-clip-text text-transparent bg-purple-600/90">
                        OUR SERVICES
                    </span>
                </h1>

                <p className="text-xl text-gray-400/80 font-light">
                    Cutting-edge technology solutions designed to transform your enterprise and propel you into the future.
                </p>

                <div className="h-1 w-32 mx-auto mt-12 bg-gradient-to-r from-emerald-500/70 to-blue-500/70 rounded-full"></div>
            </header>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {serviceCategories.map((category, index) => (
                    <article
                        key={index}
                        className="relative group transition-all duration-500 rounded-3xl"
                    >
                        <div className="absolute -inset-2 bg-gradient-to-br from-emerald-500/15 to-blue-500/15 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                        <div className="relative bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-700/30 p-8 h-full flex flex-col">
                            <div className="flex items-center mb-6">
                                <div className="p-3 rounded-lg bg-gradient-to-br from-gray-800/30 to-gray-900/30 mr-4">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white/90">{category.title}</h3>
                            </div>

                            <p className="text-gray-400/80 mb-6 flex-grow">{category.description}</p>

                            <ul className="space-y-3">
                                {category.services.map((service, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <FiArrowRight className="text-emerald-400/80 mr-3 flex-shrink-0" />
                                        <span className="text-gray-300/80">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>

            {/* Featured Solutions */}
            <section className="relative group mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="absolute -inset-2 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 bg-gradient-to-br from-blue-700/20 to-purple-700/20"></div>
                <div className="relative backdrop-blur-md rounded-2xl border border-gray-700/30 p-6 lg:p-12 overflow-hidden">
                    <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl -z-10"></div>
                    <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl -z-10"></div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-white/90 mb-8 bg-clip-text bg-gradient-to-r from-purple-300/90 to-cyan-300/90">
                        Featured Solutions
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredSolutions.map((solution, index) => (
                            <article
                                key={index}
                                className="p-6 bg-gray-800/20 rounded-xl border border-gray-700/20 backdrop-blur-sm hover:border-emerald-400/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-lg"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800/30 to-gray-900/30 mr-4">
                                        {solution.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white/90">{solution.title}</h3>
                                </div>
                                <p className="text-gray-400/80">{solution.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

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
        </section>
    );
};

export default Services;
