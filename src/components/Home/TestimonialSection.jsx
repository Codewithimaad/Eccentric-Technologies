import React from "react";
import AnimatedTestimonials from "../AnimatedTestimonials";
import Manager from '../../assets/manager.jpg'

const TestimonialsSection = () => {
    const testimonials = [
        {
            author: "Sarah Johnson, CTO",
            role: "Enterprise Client",
            quote: "Their technology transformed our operations completely.",
            image: Manager, // add your testimonial images
        },
        {
            author: "Michael Chen, Director",
            role: "Global Solutions",
            quote: "The most reliable partner we've worked with in years.",
            image: Manager,
        },
        {
            author: "Michael Chen, Director",
            role: "Global Solutions",
            quote: "The most reliable partner we've worked with in years.",
            image: Manager,
        },
        {
            author: "Michael Chen, Director",
            role: "Global Solutions",
            quote: "The most reliable partner we've worked with in years.",
            image: Manager,
        },
    ];

    return (
        <section className="py-20">
            <div className="max-w-8xl mx-auto px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Client Testimonials
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
                    Hear from organizations we've partnered with.
                </p>

                <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            </div>
        </section>
    );
};

export default TestimonialsSection;
