import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaAtom } from "react-icons/fa";

const Footer = () => {
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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const hoverEffect = {
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 }
    };

    const tapEffect = {
        scale: 0.95,
        transition: { duration: 0.2 }
    };

    return (
        <motion.footer
            className="relative bg-gradient-to-br from-gray-900/70 to-gray-800/70 border-t border-white/5 backdrop-blur-xl"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* Floating background elements */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
                    animate={{
                        y: [0, -40, 0],
                        x: [0, 20, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-indigo-500/5 blur-3xl"
                    animate={{
                        y: [0, 30, 0],
                        x: [0, -15, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3
                    }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-emerald-500/5 blur-2xl"
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo and description */}
                    <motion.div
                        className="md:col-span-2"
                        variants={itemVariants}
                    >
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={tapEffect}
                            className="flex items-center mb-6"
                        >
                            <FaAtom className="text-emerald-400/80 mr-3 text-2xl" />
                            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                                Eccentric
                            </span>
                        </motion.div>
                        <motion.p
                            className="text-gray-400/80 leading-relaxed text-lg"
                            whileInView={{ opacity: [0.5, 1] }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                        >
                            Revolutionizing education through quantum-inspired learning frameworks and neuro-digital transformation.
                        </motion.p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <motion.h3
                            className="text-xl font-semibold text-white/90 mb-6 flex items-center"
                            whileInView={{ x: [-10, 0] }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="w-3 h-3 rounded-full bg-emerald-400/80 mr-3"></span>
                            Quick Links
                        </motion.h3>
                        <ul className="space-y-4">
                            {['Home', 'Programs', 'About', 'Contact'].map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring" }}
                                >
                                    <motion.a
                                        href="#"
                                        className="text-gray-400/80 hover:text-white transition-colors duration-300 flex items-center group"
                                        whileHover={{ color: "#ffffff" }}
                                    >
                                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        {item}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Programs */}
                    <motion.div variants={itemVariants}>
                        <motion.h3
                            className="text-xl font-semibold text-white/90 mb-6 flex items-center"
                            whileInView={{ x: [-10, 0] }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <span className="w-3 h-3 rounded-full bg-blue-400/80 mr-3"></span>
                            Programs
                        </motion.h3>
                        <ul className="space-y-4">
                            {['Quantum Foundations', 'Neuro-Digital Learning', 'AI Engineering', 'Blockchain Systems'].map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring" }}
                                >
                                    <motion.a
                                        href="#"
                                        className="text-gray-400/80 hover:text-white transition-colors duration-300 flex items-center group"
                                        whileHover={{ color: "#ffffff" }}
                                    >
                                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-blue-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        {item}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        variants={itemVariants}
                    >
                        <motion.h3
                            className="text-xl font-semibold text-white/90 mb-6 flex items-center"
                            whileInView={{ x: [-10, 0] }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <span className="w-3 h-3 rounded-full bg-purple-400/80 mr-3"></span>
                            Connect
                        </motion.h3>
                        <ul className="space-y-4">
                            <motion.li
                                whileHover={hoverEffect}
                                whileTap={tapEffect}
                                className="flex items-start group"
                            >
                                <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800/30 to-gray-900/30 mr-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                                    <FiMail className="text-emerald-400/80 group-hover:text-emerald-300 transition-colors duration-300" />
                                </div>
                                <span className="text-gray-400/80 group-hover:text-white transition-colors duration-300">contact@eccentric.edu</span>
                            </motion.li>
                            <motion.li
                                whileHover={hoverEffect}
                                whileTap={tapEffect}
                                className="flex items-start group"
                            >
                                <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800/30 to-gray-900/30 mr-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                                    <FiPhone className="text-blue-400/80 group-hover:text-blue-300 transition-colors duration-300" />
                                </div>
                                <span className="text-gray-400/80 group-hover:text-white transition-colors duration-300">+1 (555) 123-4567</span>
                            </motion.li>
                            <motion.li
                                whileHover={hoverEffect}
                                whileTap={tapEffect}
                                className="flex items-start group"
                            >
                                <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800/30 to-gray-900/30 mr-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                                    <FiMapPin className="text-purple-400/80 group-hover:text-purple-300 transition-colors duration-300" />
                                </div>
                                <span className="text-gray-400/80 group-hover:text-white transition-colors duration-300">123 Tech Park, Innovation City</span>
                            </motion.li>
                        </ul>
                    </motion.div>
                </div>

                {/* Social Links */}
                <motion.div
                    className="mt-20 flex flex-wrap justify-center gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {[
                        { icon: <FiTwitter />, color: "from-blue-400 to-sky-500" },
                        { icon: <FiLinkedin />, color: "from-blue-500 to-indigo-600" },
                        { icon: <FiGithub />, color: "from-gray-400 to-gray-600" }
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href="#"
                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.color} bg-opacity-10 backdrop-blur-lg border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300`}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "rgba(255,255,255,0.1)",
                                borderColor: "rgba(255,255,255,0.2)"
                            }}
                            whileTap={tapEffect}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Copyright */}
                <motion.div
                    className="mt-20 pt-8 border-t border-white/10 text-center text-gray-400/80 text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    © {new Date().getFullYear()} Eccentric Technologies. All rights reserved.
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;