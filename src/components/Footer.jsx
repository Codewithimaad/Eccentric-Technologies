import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from "react-icons/fi";
import { FaAtom } from "react-icons/fa";

const Footer = () => {
    // Animation variants
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

    // Data for reusable components
    const quickLinks = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' }
    ];

    const contactInfo = [
        {
            icon: <FiMail />,
            color: "emerald",
            content: "ayubkhan499@gmail.com",
            href: "mailto:ayubkhan499@gmail.com"
        },
        {
            icon: <FiPhone />,
            color: "blue",
            content: "+92-3459533699",
            href: "tel:+923459533699"
        },
        {
            icon: <FiMapPin />,
            color: "purple",
            content: "Street no 15, House no 443, Shahzad Town Islamabad",
            href: "https://www.google.com/maps/place/Street+no+15,+House+no+443,+Shahzad+Town+Islamabad"
        }
    ];

    const socialLinks = [
        {
            icon: <FiLinkedin />,
            colorClass: "from-blue-500 to-indigo-600",
            href: "https://www.linkedin.com/company/eccentric-technologies-pvt-ltd/"
        }
    ];

    return (
        <motion.footer
            className="relative bg-gradient-to-br from-gray-900/70 to-gray-800/70 border-t border-white/5 backdrop-blur-xl"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* Background elements */}
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
                    {/* Brand information */}
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

                    {/* Navigation links */}
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
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={`link-${index}`}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: 'spring' }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-gray-400/80 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact information */}
                    <motion.div variants={itemVariants}>
                        <motion.h3
                            className="text-xl font-semibold text-white/90 mb-6 flex items-center"
                            whileInView={{ x: [-10, 0] }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="w-3 h-3 rounded-full bg-blue-400/80 mr-3"></span>
                            Contact Us
                        </motion.h3>
                        <ul className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <motion.li
                                    key={`contact-${index}`}
                                    whileHover={hoverEffect}
                                    whileTap={tapEffect}
                                    className="flex items-start group"
                                >
                                    <div className={`p-2 rounded-lg bg-gradient-to-br from-gray-800/30 to-gray-900/30 mr-4 group-hover:bg-${item.color}-500/20 transition-colors duration-300`}>
                                        {React.cloneElement(item.icon, {
                                            className: `text-${item.color}-400/80 group-hover:text-${item.color}-300 transition-colors duration-300`
                                        })}
                                    </div>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400/80 group-hover:text-white transition-colors duration-300"
                                    >
                                        {item.content}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Social media links */}
                <motion.div
                    className="mt-20 flex flex-wrap justify-center items-center gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={`social-${index}`}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.colorClass} bg-opacity-10 backdrop-blur-lg border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300`}
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

                {/* Copyright notice */}
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