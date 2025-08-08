import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiGlobe, FiTrendingUp, FiAward, FiShield, FiServer, FiBook, FiZap } from 'react-icons/fi';

const Clients = () => {
    const clients = [
        {
            name: "FAB Frequency Allocator Board",
            industry: "Telecommunications",
            partnership: "Since 2018",
            logo: "FAB",
            testimonial: "Ora-Tech's spectrum management solutions revolutionized our operations.",
            icon: <FiServer className="text-blue-400" />
        },
        {
            name: "FIA Federal Investigation Agency",
            industry: "Government Security",
            partnership: "Since 2017",
            logo: "FIA",
            testimonial: "Advanced cybersecurity solutions for our critical infrastructure.",
            icon: <FiShield className="text-emerald-400" />
        },
        {
            name: "Quaid-e-Azam University",
            industry: "Education",
            partnership: "Since 2019",
            logo: "QAU",
            testimonial: "Transformed our campus with cutting-edge educational technology.",
            icon: <FiBook className="text-purple-400" />
        },
        {
            name: "CTPA Central Power Purchasing Agency",
            industry: "Energy",
            partnership: "Since 2016",
            logo: "CTPA",
            testimonial: "Reliable energy management systems for national grid operations.",
            icon: <FiZap className="text-yellow-400" />
        },
        {
            name: "Ufone",
            industry: "Telecommunications",
            partnership: "Since 2015",
            logo: "UF",
            testimonial: "Scalable solutions that grew with our subscriber base.",
            icon: <FiGlobe className="text-cyan-400" />
        },

    ];



    return (
        <div className="min-h-screen text-gray-300 px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.03)_0%,transparent_70%)]"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            </div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                        Our Esteemed Clients
                    </span>
                </h1>
                <p className="text-lg text-gray-400">
                    Trusted by leading organizations across multiple industries
                </p>
            </motion.div>



            {/* Client Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {clients.map((client, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -40 : 40 // Slide left for even, right for odd
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                        whileHover={{
                            y: -6,
                            scale: 1.03,
                            boxShadow: "0 15px 40px -10px rgba(16, 185, 129, 0.25)"
                        }}
                        className="bg-gray-900/40 backdrop-blur-md rounded-3xl border border-gray-700/30 
                 overflow-hidden shadow-lg hover:shadow-emerald-500/20 
                 transition-all duration-300"
                    >
                        <div className="p-6">
                            {/* Top Section */}
                            <div className="flex items-start mb-6">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 
                          flex items-center justify-center text-2xl font-bold text-white mr-4 shadow-inner">
                                    {client.logo}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{client.name}</h3>
                                    <div className="flex items-center mt-1">
                                        <div className="mr-2 text-emerald-400">{client.icon}</div>
                                        <div className="text-sm text-emerald-400">{client.industry}</div>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">
                                        Partner {client.partnership}
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Section */}
                            <div className="relative">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-blue-500 rounded-full"></div>
                                <p className="text-gray-400 pl-4 italic">"{client.testimonial}"</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>


            {/* CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-20 text-center"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Become Our Next Success Story</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                    Join our growing list of satisfied clients and experience the Ora-Tech difference.
                </p>
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-emerald-500/20 transition-all"
                >
                    Contact Our Team
                </motion.button>
            </motion.div>
        </div>
    );
};

// Add to your global CSS
const globalStyles = `
  .bg-grid-pattern {
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 40px 40px;
  }
`;

export default Clients;