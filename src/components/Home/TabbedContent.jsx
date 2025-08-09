import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

const tabs = [
    {
        label: "Solutions",
        title: "Comprehensive Solutions",
        description: "Our integrated platform combines technology with industry expertise.",
        items: ["AI Analytics", "Cloud Infrastructure", "Process Automation"],
    },
    {
        label: "Technology",
        title: "Advanced Technology",
        description: "Cutting-edge technologies powering your digital transformation.",
    },
    {
        label: "Implementation",
        title: "Seamless Implementation",
        description: "Professional deployment with minimal business disruption.",
    },
];

const videos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/ysz5S6PUM-U",
    "https://www.youtube.com/embed/oHg5SJYRHA0",
    "https://www.youtube.com/embed/aqz-KE-bpKQ",
];

const TabbedContent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [videoUrl, setVideoUrl] = useState("");

    useEffect(() => {
        const randomVideo = videos[Math.floor(Math.random() * videos.length)];
        setVideoUrl(randomVideo);
    }, []);

    return (
        <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Tabs */}
                    <div className="lg:w-1/2">
                        <nav className="flex space-x-6 border-b border-white/20 mb-10">
                            {tabs.map(({ label }, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTab(idx)}
                                    className={`pb-3 text-sm font-semibold tracking-wide transition-colors duration-300 ${activeTab === idx
                                        ? "border-b-4 border-emerald-400 text-white"
                                        : "border-b-4 border-transparent text-gray-400 hover:text-gray-200"
                                        }`}
                                    aria-current={activeTab === idx ? "page" : undefined}
                                >
                                    {label}
                                </button>
                            ))}
                        </nav>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="text-gray-300"
                            >
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    {tabs[activeTab].title}
                                </h3>
                                <p className="text-gray-400 mb-6">{tabs[activeTab].description}</p>

                                {tabs[activeTab].items && (
                                    <ul className="space-y-4">
                                        {tabs[activeTab].items.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center text-gray-300 space-x-3"
                                            >
                                                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                                                    <FiChevronRight className="w-4 h-4" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Video Iframe */}
                    <div className="lg:w-1/2 flex items-center justify-center">
                        <div className="relative w-full max-w-xl aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-lg">
                            {videoUrl && (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={videoUrl}
                                    title="Random Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TabbedContent;
