import React from "react";
import { motion, useInView } from "framer-motion";


const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "Their technology transformed our operations completely.",
            author: "Sarah Johnson, CTO",
            role: "Enterprise Client"
        },
        {
            quote: "The most reliable partner we've worked with in years.",
            author: "Michael Chen, Director",
            role: "Global Solutions"
        }
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Client Testimonials
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Hear from organizations we've partnered with.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-8 rounded-xl border border-white/10"
                        >
                            <div className="text-lg text-white mb-6">"{testimonial.quote}"</div>
                            <div>
                                <div className="font-semibold text-white">{testimonial.author}</div>
                                <div className="text-gray-400 text-sm">{testimonial.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;