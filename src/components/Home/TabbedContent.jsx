import React, { useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { FiChevronRight, FiPlay } from "react-icons/fi";

const TabbedContent = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2">
                        <div className="flex space-x-4 border-b border-white/10 mb-8">
                            {['Solutions', 'Technology', 'Implementation'].map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`pb-4 px-1 font-medium text-sm border-b-2 ${activeTab === index ? 'border-white text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {activeTab === 0 && (
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Solutions</h3>
                                        <p className="text-gray-400 mb-6">
                                            Our integrated platform combines technology with industry expertise.
                                        </p>
                                        <ul className="space-y-3 mb-8">
                                            {['AI Analytics', 'Cloud Infrastructure', 'Process Automation'].map((item, i) => (
                                                <li key={i} className="flex items-center text-gray-300">
                                                    <div className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center mr-3">
                                                        <FiChevronRight className="w-3 h-3" />
                                                    </div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {activeTab === 1 && (
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-4">Advanced Technology</h3>
                                        <p className="text-gray-400 mb-6">
                                            Cutting-edge technologies powering your digital transformation.
                                        </p>
                                    </div>
                                )}
                                {activeTab === 2 && (
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-4">Seamless Implementation</h3>
                                        <p className="text-gray-400 mb-6">
                                            Professional deployment with minimal business disruption.
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="bg-white/5 rounded-xl aspect-video border border-white/10 flex items-center justify-center">
                            <button className="w-16 h-16 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-lg">
                                <FiPlay className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TabbedContent;