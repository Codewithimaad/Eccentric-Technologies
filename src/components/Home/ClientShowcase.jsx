import React from "react";
import { motion } from "framer-motion";

const clients = [
    { name: "Client 1", logo: "https://via.placeholder.com/100x40?text=Client+1" },
    { name: "Client 2", logo: "https://via.placeholder.com/100x40?text=Client+2" },
    { name: "Client 3", logo: "https://via.placeholder.com/100x40?text=Client+3" },
    { name: "Client 4", logo: "https://via.placeholder.com/100x40?text=Client+4" },
    { name: "Client 5", logo: "https://via.placeholder.com/100x40?text=Client+5" },
    { name: "Client 6", logo: "https://via.placeholder.com/100x40?text=Client+6" },
];

const ClientsShowcase = () => {
    return (
        <section className="py-20 border-t border-b border-gray-800 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-center text-xs sm:text-sm font-semibold tracking-widest text-gray-400 uppercase mb-16">
                    Trusted by Industry Leaders
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center">
                    {clients.map(({ name, logo }, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(16, 185, 129, 0.4)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="flex justify-center items-center bg-gray-700/20 rounded-lg border border-gray-700/40 p-4 cursor-pointer"
                            aria-label={`Logo of ${name}`}
                            title={name}
                        >
                            <img src={logo} alt={name} className="max-h-10 object-contain" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsShowcase;
