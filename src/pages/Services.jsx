import React, { useRef } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { motion, useInView } from "framer-motion";

const Services = () => {
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

    const databaseServices = [
        {
            title: "Database Consulting",
            description:
                "Optimize and modernize your mission-critical data estate for flexibility, agility, security, and cost savings in the cloud, on-prem, or hybrid. We help migrate to the cloud or upgrade existing warehouses using proven methodologies that reduce risk, improve performance, and convert data into value.",
            icon: <FiCheckCircle className="text-emerald-500" size={28} />,
        },
        {
            title: "Database Managed Services",
            description:
                "24×7 management and optimization support for mission-critical databases. Eccentric ensures high availability, top performance, and cost efficiency for the world's largest brands.",
            icon: <FiCheckCircle className="text-blue-500" size={28} />,
        },
        {
            title: "Database Migrations",
            description:
                "No matter where your databases are or where you want them, we plan, implement, and support migrations to cloud, on-prem, or hybrid systems using proven strategies.",
            icon: <FiCheckCircle className="text-purple-500" size={28} />,
        },
        {
            title: "Remote DBA Services",
            description:
                "Comprehensive, 24×7 remote DBA support. Whether you need full-time help or just to fill a skill gap, our elite administrators are ready to solve your database challenges.",
            icon: <FiCheckCircle className="text-cyan-500" size={28} />,
        },
        {
            title: "Database Troubleshooting",
            description:
                "15+ years of documented, searchable solutions for quick and effective resolution of database issues in specialized technology areas.",
            icon: <FiCheckCircle className="text-amber-500" size={28} />,
        },
        {
            title: "DBA on Stand-by Service",
            description:
                "Flexible, cost-effective DBA teams on standby as your ultimate IT backup plan — ready to deploy when needed, and minimal cost when not.",
            icon: <FiCheckCircle className="text-pink-500" size={28} />,
        },
    ];

    const extraServices = [
        {
            title: "Rapid Response",
            description:
                "24×7 monitoring, corrective actions, root cause analysis, and disaster recovery. Average uptime: 99.8%.",
        },
        {
            title: "Health Checks",
            description:
                "Proactive optimization, configuration management, performance tuning, and disaster recovery testing.",
        },
        {
            title: "Human Oversight",
            description:
                "Proactive consultation on infrastructure, performance, and efficiency tailored to your business needs.",
        },
        {
            title: "Long Term Approach",
            description:
                "Over 10 years of trusted partnerships, understanding your business deeply and benchmarking performance using real data.",
        },
    ];

    return (
        <section
            ref={ref}
            className="text-gray-200 py-12 px-4 sm:px-6 lg:px-8"
        >
            {/* Header Section */}
            <motion.header
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mb-24 text-center"
            >
                <motion.div variants={itemVariants} className="flex justify-center items-center mb-8">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-emerald-400/70 mr-4"></div>
                    <span className="text-emerald-400/80 font-mono tracking-widest text-sm">
                        ECCENTRIC TECHNOLOGIES
                    </span>
                    <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-emerald-400/70 ml-4"></div>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white/90 mb-8"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400/90 via-blue-400/90 to-purple-500/90">
                        SERVICES
                    </span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="max-w-3xl mx-auto text-xl text-gray-400/80 font-light mb-12"
                >
                    Redefining business technology through eccentric, boundary-pushing solutions.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="h-1 w-32 mx-auto bg-gradient-to-r from-emerald-500/70 to-blue-500/70 rounded-full"
                />
            </motion.header>

            {/* Main Services */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {databaseServices.map((service, index) => (
                    <div
                        key={index}
                        className="rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >

                        <div className="flex items-center mb-4">
                            <div className="mr-3">{service.icon}</div>
                            <h3 className="text-lg font-semibold text-white">
                                {service.title}
                            </h3>
                        </div>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                ))}
            </div>

            {/* Extra Info */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-6xl mx-auto">
                {extraServices.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >

                        <h4 className="text-lg font-semibold text-white mb-2">
                            {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
