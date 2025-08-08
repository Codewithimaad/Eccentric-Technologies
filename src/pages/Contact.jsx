import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';

const Contact = () => {
    const locations = [

        {
            city: "Islamabad Office",
            address: "3rd Floor, Beverley Centre, Jinnah Avenue, F-6/1",
            postal: "Islamabad 44000-Pakistan",
            phone: "(+92-51) 111-672-253 (111-ORACLE)",
            tel: "(051) 2814481-89",
            fax: "(+92-51) 2814481"
        },

    ];

    return (
        <div className="min-h-screen text-gray-300 px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                        Contact Eccentric Technologies
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                    Reach out to our global offices or send us a message directly
                </p>
            </motion.div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
                {/* Location Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {locations.map((location, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 p-6 shadow-lg hover:shadow-emerald-500/10 transition-all"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mr-4">
                                    <FiMapPin size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-white">{location.city}</h3>
                            </div>

                            <div className="space-y-3">
                                <p className="text-gray-400">{location.address}</p>
                                <p className="text-gray-400">{location.postal}</p>

                                <div className="pt-3 border-t border-gray-700/30">
                                    <div className="flex items-center text-gray-400 mb-1">
                                        <FiPhone className="mr-2 text-blue-400" />
                                        <span>{location.phone}</span>
                                    </div>
                                    {location.tel && (
                                        <div className="flex items-center text-gray-400 mb-1">
                                            <FiPhone className="mr-2 text-blue-400" />
                                            <span>{location.tel}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center text-gray-400">
                                        <FiMail className="mr-2 text-blue-400" />
                                        <span>Fax: {location.fax}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 p-8 shadow-lg"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter Full name"
                                className="w-full px-4 py-3 bg-gray-700/30 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent text-white placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Enter Phone Number"
                                className="w-full px-4 py-3 bg-gray-700/30 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent text-white placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter email address"
                                className="w-full px-4 py-3 bg-gray-700/30 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent text-white placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Enter your message"
                                className="w-full px-4 py-3 bg-gray-700/30 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent text-white placeholder-gray-500"
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center justify-center"
                        >
                            <FiSend className="mr-2" />
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;