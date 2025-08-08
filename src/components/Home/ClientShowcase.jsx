import React from "react";
import { motion, useInView } from "framer-motion";


const ClientsShowcase = () => {
    const clients = ["Client 1", "Client 2", "Client 3", "Client 4", "Client 5", "Client 6"];

    return (
        <section className="py-16 border-t border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-center text-sm font-semibold tracking-wider text-gray-400 mb-12">
                    TRUSTED BY INDUSTRY LEADERS
                </h2>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            className="flex justify-center"
                        >
                            <div className="h-12 w-full bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                                <span className="text-white/80 font-medium">{client}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsShowcase;