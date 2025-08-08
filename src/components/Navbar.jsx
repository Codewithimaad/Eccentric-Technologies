
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const navItems = [
        { name: "HOME", href: "/" },
        { name: "SERVICES", href: "/services" },
        { name: "OUR JOURNEY", href: "/journey" },
        {
            name: "MORE",
            href: "#",
            submenu: [
                { name: "COMPANY INSIGHT", href: "/company-insight" },
                { name: "CLIENTS", href: "/clients" },
                { name: "PARTNERS", href: "/partners" },
                { name: "COMPANY POLICY", href: "/policy" },
                { name: "COMPANY PROFILE", href: "/profile" },

            ]
        },
        { name: "ABOUT", href: "/about" },
        { name: "CONTACT", href: "/contact" },

    ];

    const toggleSubmenu = (index) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    return (
        <motion.nav
            className="fixed w-full z-50 backdrop-blur-lg border-b border-white/10"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 md:h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <a href="/" className="text-white font-bold text-xl flex items-center">
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                                ECCENTRIC TECHNOLGIES
                            </span>
                        </a>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative">
                                {item.submenu ? (
                                    <div className="relative group">
                                        <button
                                            onClick={() => toggleSubmenu(index)}
                                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                                        >
                                            {item.name}
                                            <motion.span
                                                animate={{ rotate: openSubmenu === index ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="ml-1"
                                            >
                                                <FiChevronDown size={16} />
                                            </motion.span>
                                        </button>

                                        <AnimatePresence>
                                            {openSubmenu === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 border border-white/10"
                                                >
                                                    <div className="py-1">
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <a
                                                                key={subIndex}
                                                                href={subItem.href}
                                                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                                                            >
                                                                {subItem.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <a
                                        href={item.href}
                                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </div>
                        ))}

                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                            whileTap={{ scale: 0.9 }}
                        >
                            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Modern Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Enhanced Backdrop with Blur */}
                        <motion.div
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Sleek Sidebar */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                duration: 0.35,
                                ease: [0.16, 1, 0.3, 1] // Custom bezier curve for smooth motion
                            }}
                            className="fixed top-0 right-0 h-screen w-full max-w-md bg-black z-50 shadow-2xl border-l border-gray-800 overflow-y-auto"
                        >
                            {/* Modern Close Button */}
                            <div className="flex justify-end p-4">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full hover:bg-gray-800 transition-all duration-200"
                                    aria-label="Close menu"
                                >
                                    <FiX size={24} className="text-gray-400 hover:text-white" />
                                </button>
                            </div>

                            <div className="px-6 pb-8 space-y-1">
                                {/* Navigation Items with Improved Spacing */}
                                {navItems.map((item, index) => (
                                    <div key={index} className="border-b border-gray-800/50 last:border-0">
                                        {item.submenu ? (
                                            <div>
                                                <motion.button
                                                    onClick={() => toggleSubmenu(index)}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="w-full flex justify-between items-center text-left py-4 rounded-lg px-3 text-lg font-medium text-gray-200 hover:text-white hover:bg-gray-800/30 transition-colors duration-200"
                                                >
                                                    <span>{item.name}</span>
                                                    <motion.span
                                                        animate={{ rotate: openSubmenu === index ? 180 : 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="text-gray-400"
                                                    >
                                                        <FiChevronDown size={18} />
                                                    </motion.span>
                                                </motion.button>

                                                <AnimatePresence>
                                                    {openSubmenu === index && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{
                                                                height: "auto",
                                                                opacity: 1,
                                                                transition: {
                                                                    height: { duration: 0.3, ease: "easeInOut" },
                                                                    opacity: { duration: 0.2, delay: 0.1 }
                                                                }
                                                            }}
                                                            exit={{
                                                                height: 0,
                                                                opacity: 0,
                                                                transition: {
                                                                    height: { duration: 0.2 },
                                                                    opacity: { duration: 0.1 }
                                                                }
                                                            }}
                                                            className="overflow-hidden pl-2"
                                                        >
                                                            {item.submenu.map((subItem, subIndex) => (
                                                                <motion.a
                                                                    key={subIndex}
                                                                    href={subItem.href}
                                                                    initial={{ x: 10, opacity: 0 }}
                                                                    animate={{
                                                                        x: 0,
                                                                        opacity: 1,
                                                                        transition: { delay: 0.1 + subIndex * 0.05 }
                                                                    }}
                                                                    exit={{ opacity: 0 }}
                                                                    className="block py-3 px-6 rounded-lg text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800/20 transition-colors duration-150 ml-2 border-l border-gray-800/50"
                                                                >
                                                                    {subItem.name}
                                                                </motion.a>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <motion.a
                                                href={item.href}
                                                whileTap={{ scale: 0.98 }}
                                                className="block py-4 px-3 rounded-lg text-lg font-medium text-gray-200 hover:text-white hover:bg-gray-800/30 transition-colors duration-200"
                                            >
                                                {item.name}
                                            </motion.a>
                                        )}
                                    </div>
                                ))}

                                {/* Prominent CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: 0.2 }
                                    }}
                                    className="pt-6"
                                >
                                </motion.div>

                                {/* Optional Social/Contact Links */}
                                <motion.div
                                    className="flex justify-center space-x-4 pt-8"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { delay: 0.3 } }}
                                >
                                    <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors">
                                        <FiTwitter size={20} />
                                    </a>
                                    <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors">
                                        <FiLinkedin size={20} />
                                    </a>
                                    <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors">
                                        <FiMail size={20} />
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
