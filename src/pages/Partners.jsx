import React, { useEffect, useRef, useState } from "react";

const partners = [
    {
        name: "TechWave Solutions",
        logo: "🌀", // Replace with real logos or <img> tags
        website: "https://techwave.com",
        description: "Innovative cloud computing and AI-driven services partner."
    },
    {
        name: "GreenCore Analytics",
        logo: "🌿",
        website: "https://greencore.com",
        description: "Sustainable data analytics and environmental tech solutions."
    },
    {
        name: "CyberGuard Inc.",
        logo: "🛡️",
        website: "https://cyberguard.com",
        description: "Leading cybersecurity provider ensuring enterprise safety."
    },
    {
        name: "Quantum Nexus",
        logo: "⚛️",
        website: "https://quantumnexus.com",
        description: "Pioneers in quantum computing and next-gen hardware."
    },
    {
        name: "Nexa Networks",
        logo: "🌐",
        website: "https://nexa.net",
        description: "Global network infrastructure and IoT connectivity."
    },
    {
        name: "Pulse Interactive",
        logo: "🎯",
        website: "https://pulseinteractive.com",
        description: "Digital marketing and interactive user experience experts."
    }
];

const Partners = () => {
    const ref = useRef();
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 text-gray-200 transition-opacity duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
        >
            <header className="max-w-4xl mx-auto text-center mb-16">
                <div className="flex justify-center items-center mb-6">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400/70 to-transparent mr-4"></div>
                    <span className="uppercase tracking-widest text-emerald-400/80 font-mono text-sm">
                        Our Partners
                    </span>
                    <div className="w-16 h-0.5 bg-gradient-to-l from-emerald-400/70 to-transparent ml-4"></div>
                </div>
                <h1 className="text-5xl sm:text-6xl font-extrabold text-white/90 mb-4">
                    <span className="bg-gradient-to-r from-emerald-400 to-blue-400 text-transparent bg-clip-text">
                        Trusted & Valued
                    </span>{" "}
                    Partners
                </h1>
                <p className="max-w-3xl mx-auto text-gray-400/80 text-lg font-light">
                    We collaborate with industry leaders to bring innovative solutions and drive success.
                </p>
            </header>

            <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {partners.map((partner, i) => (
                    <a
                        key={i}
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block rounded-3xl bg-gray-900/40 backdrop-blur-md border border-gray-700/40 p-8 hover:shadow-xl hover:scale-[1.03] transition-transform duration-300"
                        aria-label={`Visit ${partner.name} website`}
                    >
                        <div className="flex items-center mb-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-emerald-600 to-blue-600 text-white text-4xl flex items-center justify-center font-bold mr-6">
                                {partner.logo}
                            </div>
                            <h3 className="text-2xl font-semibold text-white">{partner.name}</h3>
                        </div>
                        <p className="text-gray-400/80 leading-relaxed">{partner.description}</p>
                        <span className="mt-4 inline-block text-emerald-400 font-mono text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                            Visit Website &rarr;
                        </span>
                        {/* subtle bottom gradient bar */}
                        <div className="absolute bottom-0 left-0 w-full h-1 rounded-b-3xl bg-gradient-to-r from-emerald-400 to-blue-500 opacity-40 group-hover:opacity-70 transition-opacity"></div>
                    </a>
                ))}
            </div>

            {/* Global styles */}
            <style>{`
        /* Background grid pattern for subtle texture */
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, rgba(55, 65, 81, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(55, 65, 81, 0.2) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
        </div>
    );
};

export default Partners;
