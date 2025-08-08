import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiGlobe, FiCpu, FiTrendingUp } from "react-icons/fi";
import { FaAtom, FaNetworkWired } from "react-icons/fa";

const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const floatingShapes = [
        { icon: <FaAtom className="text-emerald-400/20" size={40} />, position: "top-1/4 left-1/4" },
        { icon: <FaNetworkWired className="text-blue-400/20" size={50} />, position: "bottom-1/3 right-1/4" },
        { icon: <FiTrendingUp className="text-purple-400/20" size={45} />, position: "top-1/3 right-1/5" },
        { icon: <FiCpu className="text-cyan-400/20" size={60} />, position: "bottom-1/4 left-1/5" }
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
                "Developer tools"
            ],
            description: "A comprehensive cloud computing platform offering infrastructure services with high performance and security."
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
                "Industry-specific solutions"
            ],
            description: "Complete suite of business applications designed to transform your enterprise operations."
        },
        {
            title: "Oracle Fusion Middleware",
            icon: <FaNetworkWired className="text-cyan-400/80" size={24} />,
            services: [
                "Business Intelligence",
                "ETL Services",
                "Data Warehousing",
                "Data Analytics",
                "Integration Solutions"
            ],
            description: "Digital solutions for developing and running agile, intelligent applications across environments."
        },
        {
            title: "BlockChain Solutions",
            icon: <FaAtom className="text-emerald-400/80" size={24} />,
            services: [
                "Smart contract development",
                "Decentralized applications",
                "Blockchain integration",
                "Oracle services",
                "Security solutions"
            ],
            description: "Innovative blockchain services connecting smart contracts with real-world data."
        },
        {
            title: "Hardware & Software",
            icon: <FiCpu className="text-amber-400/80" size={24} />,
            services: [
                "Oracle Database solutions",
                "Linux systems",
                "On-Premises Applications",
                "Servers and Storage",
                "Exadata systems"
            ],
            description: "Comprehensive hardware and software solutions tailored to enterprise needs."
        },
        {
            title: "Enterprise Integration",
            icon: <FiCheckCircle className="text-pink-400/80" size={24} />,
            services: [
                "Consultancy Services",
                "Solution Design & Implementation",
                "Technical Support",
                "Outsourcing Services",
                "Project Management"
            ],
            description: "Framework for enterprise-wide integration across complex organizations."
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen text-gray-200 px-2 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 overflow-hidden"
            ref={ref}
        >
            {/* Transparent Background Elements */}
            <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
                {floatingShapes.map((shape, index) => (
                    <motion.div
                        key={index}
                        className={`absolute ${shape.position} opacity-50`}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 20, 0],
                            rotate: [0, 10, 0]
                        }}
                        transition={{
                            duration: 12 + index * 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {shape.icon}
                    </motion.div>
                ))}

                <div className="absolute inset-0 "></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                <motion.div
                    className="absolute top-1/2 left-1/2 w-1/2 h-1/2 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 15, repeat: Infinity }}
                />
            </div>

            {/* Main Container */}
            <div className="max-w-7xl mx-auto relative">
                {/* Header Section */}
                <motion.header
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mb-24 text-center"
                >
                    <motion.div variants={itemVariants} className="flex justify-center items-center mb-8">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-emerald-400/70 mr-4"></div>
                        <span className="text-emerald-400/80 font-mono tracking-widest text-sm">ECCENTRIC SYSTEMS</span>
                        <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-emerald-400/70 ml-4"></div>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white/90 mb-8"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400/90 via-blue-400/90 to-purple-500/90">
                            OUR SERVICES
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="max-w-3xl mx-auto text-xl text-gray-400/80 font-light mb-12"
                    >
                        Cutting-edge technology solutions designed to transform your enterprise and propel you into the future.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="h-1 w-32 mx-auto bg-gradient-to-r from-emerald-500/70 to-blue-500/70 rounded-full"
                    />
                </motion.header>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {serviceCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative group"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-br from-emerald-500/15 to-blue-500/15 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
                            <div className="relative bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-700/30 p-8 h-full flex flex-col">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 rounded-lg bg-gradient-to-br from-gray-800/30 to-gray-900/30 mr-4">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white/90">{category.title}</h3>
                                </div>

                                <p className="text-gray-400/80 mb-6 flex-grow">{category.description}</p>

                                <div className="space-y-3">
                                    {category.services.map((service, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex items-center"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 + 0.3 }}
                                            viewport={{ once: true }}
                                        >
                                            <FiArrowRight className="text-emerald-400/80 mr-3 flex-shrink-0" />
                                            <span className="text-gray-300/80">{service}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Featured Solutions Section */}
                <motion.section
                    variants={itemVariants}
                    className="relative group mt-20"
                >
                    <div className="absolute -inset-2 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
                    <div className="relative backdrop-blur-md rounded-2xl border border-gray-700/30 p-6 lg:p-12 overflow-hidden">
                        <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl -z-10"></div>
                        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl -z-10"></div>

                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold text-white/90 mb-8"
                            whileInView={{ x: [-20, 0] }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300/90 to-cyan-300/90">
                                Featured Solutions
                            </span>
                        </motion.h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "AI & Machine Learning",
                                    description: "Eccentric offers AI-based products for multiple industries including healthcare, automotive, retail, and customer service solutions.",
                                    icon: <FiCpu className="text-emerald-400/80" size={24} />
                                },
                                {
                                    title: "Data Lakehouse",
                                    description: "Modern architecture combining data warehouses with open source technologies to analyze all types of data including invoices, forms, text, audio, and video.",
                                    icon: <FiGlobe className="text-blue-400/80" size={24} />
                                },
                                {
                                    title: "DevOps as a Service",
                                    description: "Reduce costs and speed up development cycles with our experienced team of DevOps experts and cutting-edge tools.",
                                    icon: <FaNetworkWired className="text-purple-400/80" size={24} />
                                },
                                {
                                    title: "Security Solutions",
                                    description: "Protect your most valuable data with our security-first approach, building trust through decades of experience securing data and applications.",
                                    icon: <FiCheckCircle className="text-cyan-400/80" size={24} />
                                }
                            ].map((solution, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 bg-gray-800/20 rounded-xl border border-gray-700/20 backdrop-blur-sm hover:border-emerald-400/20 transition-all duration-300"
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)"
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800/30 to-gray-900/30 mr-4">
                                            {solution.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white/90">{solution.title}</h3>
                                    </div>
                                    <p className="text-gray-400/80">{solution.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>


            </div>

            {/* Global Styles */}
            <style jsx global>{`
                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(to right, rgba(55, 65, 81, 0.2) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(55, 65, 81, 0.2) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}</style>
        </motion.div>
    );
};

export default Services;