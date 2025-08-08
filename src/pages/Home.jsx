import React from "react";
import ClientsShowcase from "../components/Home/ClientShowcase";
import CTASection from "../components/Home/CTASection";
import Featured from "../components/Home/Featured";
import HeroSection from "../components/Home/HeroSection";
import StatsSection from "../components/Home/StatsSection";
import TabbedContent from "../components/Home/TabbedContent";
import TestimonialsSection from "../components/Home/TestimonialSection";

const Home = () => {
    return (
        <div className=" text-white">
            <HeroSection />
            <ClientsShowcase />
            <Featured />
            <TestimonialsSection />
            <TabbedContent />
            <StatsSection />
            <CTASection />
        </div>
    );
};


export default Home;