"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

    return (
        <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
            <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
                <div>
                    <div className="relative h-80 w-full">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.author}
                                    initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotateY() }}
                                    animate={{
                                        opacity: active === index ? 1 : 0.7,
                                        scale: active === index ? 1 : 0.95,
                                        z: active === index ? 0 : -100,
                                        rotate: active === index ? 0 : randomRotateY(),
                                        zIndex: active === index ? 40 : testimonials.length + 2 - index,
                                        y: active === index ? [0, -80, 0] : 0,
                                    }}
                                    exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY() }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <img
                                        src={testimonial.image || "/default-avatar.png"}
                                        alt={testimonial.author}
                                        draggable={false}
                                        className="h-full w-full rounded-3xl object-cover object-center"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="flex flex-col justify-between py-4">
                    <motion.div
                        key={active}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <h3 className="text-2xl font-bold text-white">{testimonials[active].author}</h3>
                        <p className="text-sm text-gray-400">{testimonials[active].role}</p>
                        <motion.p className="mt-8 text-lg text-gray-300">
                            {testimonials[active].quote.split(" ").map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * i }}
                                    className="inline-block"
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.p>
                    </motion.div>

                    <div className="flex gap-4 pt-12 md:pt-0">
                        <button
                            onClick={handlePrev}
                            className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition"
                            aria-label="Previous testimonial"
                        >
                            <IconArrowLeft className="h-5 w-5 text-white" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition"
                            aria-label="Next testimonial"
                        >
                            <IconArrowRight className="h-5 w-5 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedTestimonials;
