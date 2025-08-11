import React from "react";

const Partners = () => {
    const customers = [
        {
            name: "Associated Newspapers Ltd. (ANL)",
            website: "http://assocnews.co.uk",
            description:
                "One of UK's largest publishers of national newspapers and consumer websites, including the Daily Mail, Metro, The Mail on Sunday, etc. Responsibilities include managing and maintaining a 6 Node RAC Cluster containing standby and DR sites.",
        },
        {
            name: "The Daily Mail Online",
            website: "http://dailymail.co.uk",
            description:
                "The RAC based online version of ANL newspapers comprising 13 databases.",
        },
        {
            name: "Wimbledon (AELTC)",
            website: "http://www.wimbledon.com",
            description:
                "The All England Lawn Tennis and Croquet Club is a private club founded on 23 July 1868. Wimbledon is considered the world's premier lawn tennis tournament.",
        },
        {
            name: "WOWCHER",
            website: "http://www.wowcher.co.uk",
            description:
                'A "deal a day" site that uses the power of group buying or bulk buying to get unbeatable deals on the best stuff to do, see, visit, eat and buy in a variety of cities in the UK.',
        },
        {
            name: "Local World UK",
            website: "http://localworld.co.uk",
            description:
                "An extensive network of local community sites rapidly growing across the UK, reaching over 100 areas in the South-West, London, and South East of England. A fast growing community/socializing database like Facebook.",
        },
        {
            name: "Other Customers",
            description:
                "Burberry, National Magazines, WWF UK, Diabetes UK, BEAMTV, Prepay.",
        },
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                    Prominent UK Customers
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {customers.map(({ name, website, description }, i) => (
                    <div
                        key={i}
                        className="relative group overflow-hidden rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative p-8 h-full">
                            <h3 className="text-2xl font-bold mb-4 text-white">
                                {website ? (
                                    <a
                                        href={website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-emerald-300 transition-colors duration-300 flex items-center"
                                    >
                                        {name}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                ) : (
                                    name
                                )}
                            </h3>
                            <p className="text-gray-300/90 leading-relaxed">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;