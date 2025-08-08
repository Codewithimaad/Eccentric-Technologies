import React from "react";
import { motion, useInView } from "framer-motion";
import { FiBarChart2, FiGlobe, FiUsers, FiShield } from "react-icons/fi";


const Featured = () => {
    const features = [
        {
            icon: <FiBarChart2 className="w-6 h-6" />,
            title: "Data Analytics",
            description: "Advanced analytics for data-driven decision making."
        },
        {
            icon: <FiUsers className="w-6 h-6" />,
            title: "Client Solutions",
            description: "Tailored solutions for your business needs."
        },
        {
            icon: <FiGlobe className="w-6 h-6" />,
            title: "Global Reach",
            description: "Solutions that scale across borders."
        },
        {
            icon: <FiShield className="w-6 h-6" />,
            title: "Enterprise Security",
            description: "Protecting your most valuable assets."
        }
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Enterprise Solutions
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Comprehensive services designed for modern business challenges.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all"
                        >
                            <div className="w-12 h-12 rounded-lg bg-white/10 text-white flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;