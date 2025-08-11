import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="relative text-white overflow-hidden ">


            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-28 md:py-36 relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                        Innovating Digital Excellence
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 font-light tracking-wide"
                >
                    We deliver enterprise-grade solutions that transform businesses through cutting-edge technology.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
                >
                    <Link to='/services'
                        className="px-10 py-4 bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/40 rounded-lg text-white font-semibold transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore Services
                    </Link>


                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
