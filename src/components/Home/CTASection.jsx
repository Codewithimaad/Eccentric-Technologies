import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const CTASection = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="bg-white/5 rounded-2xl p-8 md:p-12 text-white border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                    <div className="relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Transform Your Business?
                            </h2>
                            <p className="text-lg text-gray-300 mb-8">
                                Connect with our experts to discuss your needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <MotionLink
                                    to="/contact"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all"
                                >
                                    Get Started
                                </MotionLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
