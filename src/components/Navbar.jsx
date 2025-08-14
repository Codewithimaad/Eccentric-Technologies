import React, { useState, useEffect } from "react";
import logo from '../assets/Logo.png'

// Unicode icons since react-icons isn't available
const MenuIcon = () => <span className="text-2xl">☰</span>;
const CloseIcon = () => <span className="text-2xl">✕</span>;
const ChevronDown = ({ isRotated }) => (
    <span
        className={`inline-block transition-transform duration-300 ${isRotated ? 'rotate-180' : ''}`}
    >
        ▼
    </span>
);
const TwitterIcon = () => <span className="text-xl">🐦</span>;
const LinkedinIcon = () => <span className="text-xl">💼</span>;
const MailIcon = () => <span className="text-xl">✉️</span>;

const ModernNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [scrolled, setScrolled] = useState(false);

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
                { name: "COMPANY PROFILE", href: "/-company-profile" },
                { name: "TECHNOLOGIES", href: "/technologies" },
            ]
        },
        { name: "ABOUT", href: "/about" },
        { name: "CONTACT", href: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSubmenu = (index) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    return (
        <>
            {/* Main Navbar */}
            <nav
                className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                    ? 'top-4 left-4 right-4 w-auto'
                    : 'top-0 left-0 right-0'
                    }`}
            >
                <div
                    className={`mx-auto transition-all duration-500 ${scrolled
                        ? 'max-w-6xl bg-gray-900/80 backdrop-blur-2xl border border-gray-700/50 rounded-3xl shadow-2xl shadow-cyan-500/10'
                        : 'max-w-8xl bg-gray-900/60 backdrop-blur-xl border-b border-gray-700/30'
                        }`}
                >
                    <div className="flex items-center justify-between h-20 px-6 lg:px-8">
                        {/* Logo with enhanced styling */}
                        <div className="flex-shrink-0 group cursor-pointer">
                            <a href="/" className="flex items-center space-x-3">
                                {/* Logo image container */}
                                <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                                    <img
                                        src={logo}  // <-- Replace this with your actual logo path
                                        alt="Eccentric Technologies Logo"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <span className="text-white font-black text-xl bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text">
                                        ECCENTRIC
                                    </span>
                                    <div className="text-xs text-cyan-400 font-medium tracking-widest">
                                        TECHNOLOGIES
                                    </div>
                                </div>
                            </a>
                        </div>


                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item, index) => (
                                <div key={index} className="relative">
                                    {item.submenu ? (
                                        <div className="relative group">
                                            <button
                                                onClick={() => toggleSubmenu(index)}
                                                className="flex items-center space-x-2 px-6 py-3 rounded-2xl text-sm font-bold text-gray-300 hover:text-white hover:bg-gray-800/40 transition-all duration-300 group"
                                            >
                                                <span className="tracking-wide">{item.name}</span>
                                                <ChevronDown isRotated={openSubmenu === index} />
                                            </button>

                                            {/* Enhanced Dropdown */}
                                            {openSubmenu === index && (
                                                <div className="absolute top-full left-0 mt-2 w-72 bg-gray-900/95 backdrop-blur-2xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden animate-dropdown">
                                                    <div className="p-2">
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <a
                                                                key={subIndex}
                                                                href={subItem.href}
                                                                className="block px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200 group"
                                                            >
                                                                <div className="flex items-center space-x-3">
                                                                    <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                                                    <span>{subItem.name}</span>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="px-6 py-3 rounded-2xl text-sm font-bold text-gray-300 hover:text-white hover:bg-gray-800/40 transition-all duration-300 tracking-wide relative group"
                                        >
                                            {item.name}
                                            <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                        </a>
                                    )}
                                </div>
                            ))}


                        </div>

                        {/* Enhanced Mobile menu button */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-3 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-800/80 transition-all duration-300 hover:scale-110"
                            >
                                {isOpen ? <CloseIcon /> : <MenuIcon />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Modern Mobile Navigation */}
            {isOpen && (
                <>
                    {/* Enhanced Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden animate-fade-in"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Floating Mobile Menu */}
                    <div className="fixed top-24 right-4 w-80 max-w-[calc(100vw-2rem)] bg-gray-900/95 backdrop-blur-2xl border border-gray-700/50 rounded-3xl shadow-2xl shadow-black/50 z-50 lg:hidden overflow-hidden animate-slide-in">
                        {/* Header */}
                        <div className="p-6 border-b border-gray-700/50">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">E</span>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-sm">ECCENTRIC</div>
                                        <div className="text-xs text-cyan-400">TECHNOLOGIES</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-xl bg-gray-800/50 text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <CloseIcon />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Items */}
                        <div className="p-4 max-h-96 overflow-y-auto">
                            {navItems.map((item, index) => (
                                <div key={index} className="mb-2">
                                    {item.submenu ? (
                                        <div>
                                            <button
                                                onClick={() => toggleSubmenu(index)}
                                                className="w-full flex justify-between items-center p-4 rounded-2xl text-left font-bold text-gray-200 hover:text-white hover:bg-gray-800/50 transition-all duration-300 group"
                                            >
                                                <span>{item.name}</span>
                                                <ChevronDown isRotated={openSubmenu === index} />
                                            </button>

                                            {openSubmenu === index && (
                                                <div className="mt-2 ml-4 space-y-1 animate-slide-down">
                                                    {item.submenu.map((subItem, subIndex) => (
                                                        <a
                                                            key={subIndex}
                                                            href={subItem.href}
                                                            className="block p-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/30 transition-all duration-200 border-l-2 border-gray-700 hover:border-cyan-400"
                                                        >
                                                            {subItem.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="block p-4 rounded-2xl font-bold text-gray-200 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-gray-700/50">

                            <div className="flex justify-center space-x-4">
                                <a href="#" className="p-3 rounded-xl bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800/80 transition-all duration-200">
                                    <TwitterIcon />
                                </a>
                                <a href="#" className="p-3 rounded-xl bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800/80 transition-all duration-200">
                                    <LinkedinIcon />
                                </a>
                                <a href="#" className="p-3 rounded-xl bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800/80 transition-all duration-200">
                                    <MailIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(100%) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0) scale(1);
                    }
                }

                @keyframes dropdownSlide {
                    from {
                        opacity: 0;
                        transform: translateY(-10px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        max-height: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        max-height: 400px;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fadeIn 0.3s ease-out forwards;
                }

                .animate-slide-in {
                    animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                .animate-dropdown {
                    animation: dropdownSlide 0.3s ease-out forwards;
                }

                .animate-slide-down {
                    animation: slideDown 0.3s ease-out forwards;
                }

                /* Custom scrollbar for mobile menu */
                .overflow-y-auto::-webkit-scrollbar {
                    width: 4px;
                }

                .overflow-y-auto::-webkit-scrollbar-track {
                    background: rgba(55, 65, 81, 0.3);
                    border-radius: 10px;
                }

                .overflow-y-auto::-webkit-scrollbar-thumb {
                    background: rgba(6, 182, 212, 0.5);
                    border-radius: 10px;
                }

                .overflow-y-auto::-webkit-scrollbar-thumb:hover {
                    background: rgba(6, 182, 212, 0.8);
                }
            `}</style>
        </>
    );
};

export default ModernNavbar;