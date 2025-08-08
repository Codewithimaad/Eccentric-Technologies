import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiGlobe, FiCpu, FiTrendingUp } from "react-icons/fi";
import { FaAtom, FaNetworkWired } from "react-icons/fa";

const CompanyInsight = () => {
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

    const visionItems = [
        "Enhancing business operations via quantum process alignment",
        "Assuring each service exceeds objectives through AI-driven analytics",
        "Establishing next-gen digital business operations",
        "Focusing on exponential market success criteria",
        "Delivering revolutionary solutions"
    ];

    const floatingShapes = [
        { icon: <FaAtom className="text-emerald-400/20" size={40} />, position: "top-1/4 left-1/4" },
        { icon: <FaNetworkWired className="text-blue-400/20" size={50} />, position: "bottom-1/3 right-1/4" },
        { icon: <FiTrendingUp className="text-purple-400/20" size={45} />, position: "top-1/3 right-1/5" },
        { icon: <FiCpu className="text-cyan-400/20" size={60} />, position: "bottom-1/4 left-1/5" }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen  text-gray-200 px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 overflow-hidden"
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

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.03)_0%,transparent_70%)]"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                <motion.div
                    className="absolute top-1/2 left-1/2 w-1/2 h-1/2 rounded-full bg-emerald-500/3 blur-3xl"
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
                        <span className="text-emerald-400/80 font-mono tracking-widest text-sm">ORATECH SYSTEMS</span>
                        <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-emerald-400/70 ml-4"></div>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white/90 mb-8"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400/90 via-blue-400/90 to-purple-500/90">
                            COMPANY INSIGHTS
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="max-w-3xl mx-auto text-xl text-gray-400/80 font-light mb-12"
                    >
                        Redefining business technology through eccentric, boundary-pushing solutions.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="h-1 w-32 mx-auto bg-gradient-to-r from-emerald-500/70 to-blue-500/70 rounded-full"
                    />
                </motion.header>

                {/* Content Sections */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid gap-20"
                >
                    {/* Ora-Tech Identity */}
                    <motion.section
                        variants={itemVariants}
                        className="relative group"
                    >
                        <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
                        <div className="relative bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-700/30 p-10 lg:p-12 shadow-xl overflow-hidden">
                            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl -z-10"></div>
                            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl -z-10"></div>

                            <motion.div
                                className="flex flex-col lg:flex-row gap-12 items-start"
                                whileHover={{ scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="flex-shrink-0">
                                    <motion.div
                                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/80 to-blue-500/80 flex items-center justify-center text-white/90 shadow-lg"
                                        whileHover={{ rotate: 15, scale: 1.1 }}
                                        transition={{ type: "spring" }}
                                    >
                                        <FiGlobe size={28} />
                                    </motion.div>
                                </div>
                                <div>
                                    <motion.h2
                                        className="text-3xl sm:text-4xl font-bold text-white/90 mb-6"
                                        whileInView={{ x: [-20, 0] }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300/90 to-blue-300/90">
                                            The Eccentric Technologies
                                        </span>
                                    </motion.h2>
                                    <motion.p
                                        className="text-lg text-gray-400/80 leading-relaxed mb-8"
                                        whileInView={{ opacity: [0.5, 1] }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once: true }}
                                    >
                                        Founded by radical thinkers and technical visionaries, Ora-Tech fuses bleeding-edge technology with unconventional business strategies.
                                    </motion.p>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                        {["Quantum Computing", "AI Synergy", "Blockchain Mesh", "Neural Networks", "Cyber-Physical", "Bio-Tech"].map((tech, index) => (
                                            <motion.div
                                                key={index}
                                                className="px-4 py-3 bg-gray-800/20 rounded-lg border border-gray-700/20 backdrop-blur-sm"
                                                whileHover={{
                                                    y: -4,
                                                    backgroundColor: "rgba(16, 185, 129, 0.08)",
                                                    borderColor: "rgba(16, 185, 129, 0.2)"
                                                }}
                                                transition={{ duration: 0.3 }}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                            >
                                                <span className="text-emerald-400/80 font-medium">{tech}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Services Matrix */}
                    <motion.section
                        variants={itemVariants}
                        className="relative group"
                    >
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
                        <div className="relative bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-700/30 p-10 lg:p-12 shadow-xl overflow-hidden">
                            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl -z-10"></div>
                            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl -z-10"></div>

                            <div className="mb-16">
                                <motion.h2
                                    className="text-3xl sm:text-4xl font-bold text-white/90 mb-4"
                                    whileInView={{ x: [-20, 0] }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300/90 to-cyan-300/90">
                                        Disruptive Service Matrix
                                    </span>
                                </motion.h2>
                                <motion.p
                                    className="text-lg text-gray-400/80 max-w-3xl"
                                    whileInView={{ opacity: [0.5, 1] }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    Our multidimensional service portfolio breaks conventional IT consulting paradigms.
                                </motion.p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "Quantum Strategy",
                                        desc: "Reimagine business models through quantum computing paradigms",
                                        icon: <FaAtom className="text-purple-400/80" size={24} />
                                    },
                                    {
                                        title: "Neuro-Digital",
                                        desc: "Brain-computer interface enabled enterprise solutions",
                                        icon: <FiCpu className="text-cyan-400/80" size={24} />
                                    },
                                    {
                                        title: "Exponential AI",
                                        desc: "Self-evolving neural networks for autonomous operations",
                                        icon: <FiTrendingUp className="text-emerald-400/80" size={24} />
                                    },
                                    {
                                        title: "Holographic ERP",
                                        desc: "3D visualized enterprise resource planning systems",
                                        icon: <FiGlobe className="text-blue-400/80" size={24} />
                                    },
                                    {
                                        title: "Blockchain Mesh",
                                        desc: "Decentralized trust networks for secure transactions",
                                        icon: <FaNetworkWired className="text-amber-400/80" size={24} />
                                    },
                                    {
                                        title: "Bio-Tech Fusion",
                                        desc: "Organic-digital hybrid computing architectures",
                                        icon: <FiCheckCircle className="text-pink-400/80" size={24} />
                                    }
                                ].map((service, index) => (
                                    <motion.div
                                        key={index}
                                        className="p-6 bg-gray-800/20 rounded-xl border border-gray-700/20 backdrop-blur-sm hover:border-emerald-400/20 transition-all duration-300 h-full"
                                        whileHover={{
                                            y: -8,
                                            scale: 1.02,
                                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)"
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex items-center mb-4">
                                            <motion.div
                                                className="p-2 rounded-lg bg-gradient-to-br from-gray-800/30 to-gray-900/30 mr-4"
                                                whileHover={{ rotate: 10 }}
                                            >
                                                {service.icon}
                                            </motion.div>
                                            <h3 className="text-xl font-bold text-white/90">{service.title}</h3>
                                        </div>
                                        <p className="text-gray-400/80">{service.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* Vision & Mission Sections */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Vision Section */}
                        <motion.section variants={itemVariants} className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-br from-emerald-500/15 to-blue-500/15 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
                            <div className="relative bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-700/30 p-10 shadow-xl h-full">
                                <motion.h2
                                    className="text-3xl font-bold text-white/90 mb-8"
                                    whileInView={{ x: [-20, 0] }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300/90 to-blue-300/90">
                                        Radical Vision
                                    </span>
                                </motion.h2>

                                <motion.blockquote
                                    className="italic text-2xl text-emerald-300/80 mb-8 leading-relaxed pl-8 relative"
                                    whileInView={{ opacity: [0.5, 1] }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-500/70 to-blue-500/70 rounded-full"></div>
                                    "To dissolve the boundaries between technology and imagination."
                                </motion.blockquote>

                                <ul className="space-y-6">
                                    {visionItems.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 + 0.5 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="flex-shrink-0 mt-1 mr-4">
                                                <motion.div
                                                    className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center"
                                                    whileHover={{ scale: 1.2 }}
                                                >
                                                    <FiCheckCircle className="text-emerald-400/80" size={16} />
                                                </motion.div>
                                            </div>
                                            <span className="text-gray-400/80">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.section>

                        {/* Mission Section */}
                        <motion.section variants={itemVariants} className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/15 to-cyan-500/15 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
                            <div className="relative bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-700/30 p-10 shadow-xl h-full">
                                <motion.h2
                                    className="text-3xl font-bold text-white/90 mb-8"
                                    whileInView={{ x: [-20, 0] }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300/90 to-cyan-300/90">
                                        Mission Manifesto
                                    </span>
                                </motion.h2>

                                <motion.p
                                    className="text-gray-400/80 leading-relaxed text-lg mb-8"
                                    whileInView={{ opacity: [0.5, 1] }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    We architect digital ecosystems where technology transcends tools.
                                </motion.p>

                                <div className="space-y-6">
                                    {[
                                        "Quantum-inspired decision matrices",
                                        "Neural organizational structures",
                                        "Autonomous operational frameworks",
                                        "Bio-digital convergence platforms",
                                        "Exponential growth algorithms"
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="p-4 bg-gray-800/20 rounded-lg border border-gray-700/20 backdrop-blur-sm"
                                            whileHover={{
                                                scale: 1.02,
                                                borderColor: "rgba(139, 92, 246, 0.2)",
                                                backgroundColor: "rgba(17, 24, 39, 0.3)"
                                            }}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="flex items-center">
                                                <motion.div
                                                    className="w-3 h-3 rounded-full bg-purple-400/70 mr-3"
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        opacity: [0.6, 1, 0.6]
                                                    }}
                                                    transition={{
                                                        duration: 2 + index * 0.5,
                                                        repeat: Infinity
                                                    }}
                                                />
                                                <span className="text-gray-300/80">{item}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>
                    </div>
                </motion.div>


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

export default CompanyInsight;