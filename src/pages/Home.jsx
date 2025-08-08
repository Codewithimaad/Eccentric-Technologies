import React from "react";
import ClientsShowcase from "../components/Home/ClientShowcase";
import CTASection from "../components/Home/CTASection";
import Featured from "../components/Home/Featured";
import HeroSection from "../components/Home/HeroSection";
import StatsSection from "../components/Home/StatsSection";
import TabbedContent from "../components/Home/TabbedContent";

const Home = () => {
    return (
        <div className=" text-white">
            <HeroSection />
            <ClientsShowcase />
            <Featured />
            <TabbedContent />
            <StatsSection />
            <TabbedContent />
            <CTASection />
        </div>
    );
};


export default Home;