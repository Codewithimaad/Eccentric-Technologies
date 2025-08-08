import React from "react";
import { motion, useInView } from "framer-motion";


const StatsSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {[
                        { number: "250+", label: "Enterprise Clients" },
                        { number: "98%", label: "Client Retention" },
                        { number: "40+", label: "Countries Served" },
                        { number: "24/7", label: "Global Support" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8"
                        >
                            <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                            <div className="text-gray-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection