import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaHandshake, FaRocket, FaTrophy } from "react-icons/fa";

const Journey = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const yearVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const hoverEffect = {
        y: -3,
        transition: { type: "spring", stiffness: 300, damping: 10 }
    };

    const milestones = [
        {
            year: "1990",
            icon: <FaHandshake className="text-emerald-500" size={20} />,
            title: "Strategic Partnership",
            events: ["Partnered with Oracle® Software Corporation"]
        },
        {
            year: "1995",
            icon: <FaRocket className="text-blue-500" size={20} />,
            title: "Market Expansion",
            events: [
                "Brought Enterprise Asset Management Software to Pakistan through MRO Software",
                "MRO Software acquired by IBM in 2005"
            ]
        },
        {
            year: "2001",
            icon: <FaHandshake className="text-purple-500" size={20} />,
            title: "Technology Alliances",
            events: [
                "Started long-standing relationship with Cisco",
                "Became Microsoft Certified Partner",
                "Began interaction with Red Hat Linux"
            ]
        },
        {
            year: "2002",
            icon: <FaAward className="text-amber-500" size={20} />,
            title: "Service Recognition",
            events: ["Became Acer Authorized service provider"]
        },
        {
            year: "2003",
            icon: <FaTrophy className="text-cyan-500" size={20} />,
            title: "Industry Recognition",
            events: [
                "Introduced SonicWALL in Pakistan",
                "Won ITCN Saudi Exhibition Award"
            ]
        },
        {
            year: "2006",
            icon: <FaHandshake className="text-indigo-500" size={20} />,
            title: "Enterprise Partnership",
            events: [
                "Enterprise level Partnered with HP",
                "Won ITCN Biggest IT & Telecom Show participation Award"
            ]
        },
        {
            year: "2007",
            icon: <FaAward className="text-emerald-500" size={20} />,
            title: "Channel Partnership",
            events: ["Became Acer channel Partner"]
        },
        {
            year: "2008",
            icon: <FaTrophy className="text-blue-500" size={20} />,
            title: "Excellence Award",
            events: ["Won Connect 3rd ICT Exhibition & Conference Award"]
        },
        {
            year: "2009",
            icon: <FaAward className="text-purple-500" size={20} />,
            title: "Partner of the Year",
            events: [
                "Technology mid market partner of the year By Oracle",
                "Database options partner of the year By Oracle"
            ]
        },
        {
            year: "2010",
            icon: <FaTrophy className="text-amber-500" size={20} />,
            title: "Platinum Achievement",
            events: ["Became first Platinum Partner in Asia Pacific region with Oracle"]
        },
        {
            year: "2011",
            icon: <FaAward className="text-cyan-500" size={20} />,
            title: "Growth Recognition",
            events: [
                "Application growth and technology G8 By Oracle",
                "ESSN Gold partner with HP",
                "PSG premier business partner with HP",
                "Oracle Partner of the year Var technology"
            ]
        },
        {
            year: "2012",
            icon: <FaTrophy className="text-indigo-500" size={20} />,
            title: "Industry Awards",
            events: [
                "Won Hyderabad ICT Exhibition & Job Fair Award",
                "ESSN Silver Partner with HP"
            ]
        },
        {
            year: "2013",
            icon: <FaAward className="text-emerald-500" size={20} />,
            title: "Excellence Recognized",
            events: [
                "Channel Partners Cricket tournament by HP",
                "Won Excellence award by PSO"
            ]
        },
        {
            year: "2015",
            icon: <FaTrophy className="text-blue-500" size={20} />,
            title: "Quality Achievement",
            events: ["Won EZY Excellence Award"]
        },
        {
            year: "2016-17",
            icon: <FaAward className="text-purple-500" size={20} />,
            title: "Service Excellence",
            events: ["Won Excellence Award by Abbott"]
        },
        {
            year: "2017",
            icon: <FaTrophy className="text-amber-500" size={20} />,
            title: "Partner Appreciation",
            events: ["Won EZY Partner appreciation Award"]
        },
        {
            year: "2018",
            icon: <FaAward className="text-cyan-500" size={20} />,
            title: "Annual Recognition",
            events: ["Partner of the year Award By Oracle"]
        },
        {
            year: "2019",
            icon: <FaRocket className="text-indigo-500" size={20} />,
            title: "Technical Milestone",
            events: ["Successful Technical upgrade of Oracle EBS in State Bank of Pakistan"]
        },
        {
            year: "2021",
            icon: <FaRocket className="text-emerald-500" size={20} />,
            title: "Large-scale Implementation",
            events: [
                "Largest Campus Management System Implementation in Allama Iqbal Open University",
                "EBS Universal Services Fund Go live"
            ]
        },
        {
            year: "2022",
            icon: <FaRocket className="text-blue-500" size={20} />,
            title: "Government Project",
            events: ["WASA Lahore Go live"]
        },
        {
            year: "2023",
            icon: <FaRocket className="text-purple-500" size={20} />,
            title: "Banking Upgrade",
            events: ["HBL Technical Upgrade"]
        }
    ];

    return (
        <div className="relative overflow-hidden">
            {/* Main content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-emerald-500/10 text-emerald-400 mb-3 md:mb-4">
                        Our History
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                            Company Journey
                        </span>
                    </h1>
                    <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Three decades of innovation, partnerships, and industry leadership
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Vertical line - hidden on mobile */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-800 via-gray-600 to-gray-800 transform -translate-x-1/2"></div>

                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center mb-10 md:mb-16"
                            variants={cardVariants}
                            whileHover={hoverEffect}
                        >
                            {/* Year marker - centered on mobile */}
                            <motion.div
                                className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg z-10"
                                variants={yearVariants}
                            >
                                <div className="text-center">
                                    <div className="text-white/80">{milestone.icon}</div>
                                    <div className="text-white font-medium text-xs md:text-sm mt-1">
                                        {milestone.year}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Content card - full width on mobile */}
                            <motion.div
                                className="w-full mt-4 md:mt-0 md:absolute md:w-5/12 px-0 md:px-4"
                                style={{
                                    left: index % 2 === 0 ? '55%' : 'auto',
                                    right: index % 2 === 0 ? 'auto' : '55%'
                                }}
                                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 shadow-lg overflow-hidden">
                                    <div className="p-4 md:p-6">
                                        <div className="flex items-center mb-2 md:mb-4">
                                            <div className="mr-2 md:mr-3 text-emerald-400">
                                                {milestone.icon}
                                            </div>
                                            <h3 className="text-lg md:text-xl font-semibold text-white">
                                                {milestone.title}
                                            </h3>
                                        </div>
                                        <ul className="space-y-2 md:space-y-3">
                                            {milestone.events.map((event, i) => (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-start text-sm md:text-base text-gray-300"
                                                    initial={{ opacity: 0, y: 5 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400 mt-2 mr-2 md:mr-3 flex-shrink-0"></span>
                                                    {event}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer CTA */}
                <motion.div
                    className="text-center mt-16 md:mt-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">
                        Ready to be part of our future journey?
                    </h3>
                    <button className="px-5 py-2 md:px-6 md:py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:shadow-emerald-500/20 text-sm md:text-base">
                        Contact Us
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Journey;