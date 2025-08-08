import React from "react";
import { motion, useInView } from "framer-motion";


const HeroSection = () => {
    return (
        <section className="relative  text-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>

            <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:px-8 relative z-10">
                <div className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white">
                            Innovating Digital Excellence
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.2 } }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
                    >
                        We deliver enterprise-grade solutions that transform businesses through technology.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-all"
                        >
                            Explore Solutions
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all"
                        >
                            Contact Us
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;