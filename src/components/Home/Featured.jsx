import React from "react";
import { motion } from "framer-motion";
import { FiBarChart2, FiGlobe, FiUsers, FiShield } from "react-icons/fi";

const features = [
    {
        icon: <FiBarChart2 className="w-7 h-7 text-emerald-400" />,
        title: "Data Analytics",
        description: "Advanced analytics for data-driven decision making.",
    },
    {
        icon: <FiUsers className="w-7 h-7 text-emerald-400" />,
        title: "Client Solutions",
        description: "Tailored solutions for your business needs.",
    },
    {
        icon: <FiGlobe className="w-7 h-7 text-emerald-400" />,
        title: "Global Reach",
        description: "Solutions that scale across borders.",
    },
    {
        icon: <FiShield className="w-7 h-7 text-emerald-400" />,
        title: "Enterprise Security",
        description: "Protecting your most valuable assets.",
    },
];

const Featured = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-extrabold text-white mb-4">
                        Enterprise Solutions
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Comprehensive services designed for modern business challenges.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/30 transition-all cursor-pointer"
                        >
                            <div className="w-14 h-14 rounded-xl bg-emerald-700/20 text-emerald-400 flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;
