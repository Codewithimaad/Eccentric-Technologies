import React, { useRef } from "react";
import { FiCheckCircle, FiDatabase, FiServer, FiCloud, FiLayers, FiShield, FiBarChart2 } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const DatabaseServices = () => {
    const ref = useRef();
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const services = [
        {
            title: "Oracle Managed Services",
            icon: <FiDatabase className="text-red-500" size={28} />,
            features: [
                "24×7 monitoring, problem resolution, root-cause analysis",
                "Proactive health checks",
                "Continuous operational improvements",
                "Configuration management",
                "Performance tuning & disaster recovery"
            ],
            offerings: [
                {
                    title: "Oracle Database",
                    description: "Support for any version or component, including standard deployments and advanced features."
                },
                {
                    title: "Oracle Engineered Systems",
                    description: "Optimization for performance, data volumes, and private cloud integration."
                },
                {
                    title: "Oracle Fusion Middleware",
                    description: "Smooth integration of complex application systems and realtime data."
                },
                {
                    title: "Oracle Cloud",
                    description: "Migration to Oracle SaaS, PaaS, and IaaS offerings."
                }
            ],
            color: "from-blue-900/20 to-cyan-900/20"
        },
        {
            title: "MySQL Services",
            icon: <FiServer className="text-orange-500" size={28} />,
            features: [
                "Database design & configuration",
                "Performance tuning and optimization",
                "Upgrades and migrations",
                "High availability solutions",
                "Backup and disaster recovery"
            ],
            highlights: [
                "Support for Community and Enterprise Editions",
                "Certified MySQL experts",
                "Horizontal scaling solutions",
                "Routine task automation"
            ],
            color: "from-blue-900/20 to-cyan-900/20"
        },
        {
            title: "Microsoft SQL Server",
            icon: <FiBarChart2 className="text-blue-500" size={28} />,
            features: [
                "Installation, configuration and setup (all versions)",
                "High availability/Disaster recovery",
                "Cloud migration services",
                "Business Intelligence (SSAS, SSRS)",
                "Advanced troubleshooting"
            ],
            specialties: [
                "On-premises, private cloud and Azure solutions",
                "Data modeling and database design",
                "ETL development with SSIS",
                "Performance tuning and capacity planning"
            ],
            color: "from-blue-900/20 to-cyan-900/20"
        },
        {
            title: "PostgreSQL Services",
            icon: <FiLayers className="text-indigo-500" size={28} />,
            features: [
                "24x7 Management & Remote DBA",
                "Consulting & Development",
                "Cloud & On-premises solutions",
                "Large distributed data systems",
                "Operational efficiency improvements"
            ],
            approach: "We work alongside your team to introduce and maintain Postgres solutions effectively.",
            color: "from-blue-900/20 to-cyan-900/20"
        },
        {
            title: "MongoDB Services",
            icon: <FiCloud className="text-green-500" size={28} />,
            features: [
                "24x7 management & remote DBA",
                "Consulting & development",
                "Cloud & on-premises deployment",
                "Full lifecycle management",
                "Integrated cloud and data expertise"
            ],
            valueProp: "We provide comprehensive solutions for every phase of your MongoDB application lifecycle.",
            color: "from-blue-900/20 to-cyan-900/20"
        },
        {
            title: "Cassandra Services",
            icon: <FiShield className="text-purple-500" size={28} />,
            features: [
                "Consulting and implementation",
                "24/7 support services",
                "Cluster design & performance tuning",
                "Multi-data center DR implementation",
                "Security configuration"
            ],
            expertise: [
                "Apache Cassandra and DataStax Enterprise",
                "Cloud platform recommendations",
                "Advanced troubleshooting",
                "Continuous improvements"
            ],
            color: "from-blue-900/20 to-cyan-900/20"
        }
    ];

    return (
        <section ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-emerald-500/10 blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl animate-pulse-slow animation-delay-2000"></div>
                <div className="absolute top-1/3 right-1/5 w-36 h-36 rounded-full bg-purple-500/10 blur-3xl animate-pulse-slow animation-delay-4000"></div>
            </div>

            {/* Header Section */}
            <motion.header
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mb-24 text-center max-w-7xl mx-auto"
            >
                <motion.div variants={itemVariants} className="flex justify-center items-center mb-8">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-emerald-400/70 mr-4"></div>
                    <span className="text-emerald-400/80 font-mono tracking-widest text-sm">
                        DATABASE SERVICES
                    </span>
                    <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-emerald-400/70 ml-4"></div>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white/90 mb-8"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400/90 via-blue-400/90 to-purple-500/90">
                        Expert Database Solutions
                    </span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="max-w-3xl mx-auto text-xl text-gray-400/80 font-light mb-12"
                >
                    Comprehensive database management services tailored to your technology stack and business requirements.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="h-1 w-32 mx-auto bg-gradient-to-r from-emerald-500/70 to-blue-500/70 rounded-full"
                />
            </motion.header>

            {/* Services Grid - Full width cards */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-7xl mx-auto space-y-8"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`rounded-2xl p-8 border border-white/10 bg-gradient-to-br ${service.color} backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:border-cyan-500/30`}
                    >
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/3">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm mr-4 border border-white/10">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                                </div>

                                <ul className="space-y-3">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <FiCheckCircle className="text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="md:w-2/3">
                                {service.offerings && (
                                    <div className="mb-8">
                                        <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">Offerings</h4>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {service.offerings.map((offering, i) => (
                                                <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
                                                    <h5 className="font-medium text-white">{offering.title}</h5>
                                                    <p className="text-sm text-gray-400 mt-1">{offering.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {service.highlights && (
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">Highlights</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {service.highlights.map((highlight, i) => (
                                                <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white backdrop-blur-sm border border-white/10">
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {service.specialties && (
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">Specialties</h4>
                                        <ul className="space-y-2">
                                            {service.specialties.map((specialty, i) => (
                                                <li key={i} className="flex items-start">
                                                    <FiCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" size={14} />
                                                    <span className="text-sm text-gray-300">{specialty}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {service.approach && (
                                    <div className="flex items-start p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                                        <FiCheckCircle className="text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                                        <p className="text-gray-300">{service.approach}</p>
                                    </div>
                                )}

                                {service.valueProp && (
                                    <div className="flex items-start p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                                        <FiCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                                        <p className="text-gray-300">{service.valueProp}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
                variants={itemVariants}
                className="mt-24 max-w-7xl mx-auto from-blue-900/20 to-cyan-900/20rounded-2xl p-8 border border-white/10 backdrop-blur-sm overflow-hidden"
            >
                <div className="md:flex md:items-center md:justify-between">
                    <div className="md:w-2/3 mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to optimize your database infrastructure?</h2>
                        <p className="mt-4 text-blue-100 max-w-2xl">
                            Our certified experts are available 24/7 to ensure your databases are reliable, scalable, and efficient.
                        </p>
                    </div>
                    <div>
                        <Link to='/contact' className="px-8 text-base lg:text-lg py-3 bg-white text-blue-700 font-medium rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
                            Contact Our Database Team
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default DatabaseServices;