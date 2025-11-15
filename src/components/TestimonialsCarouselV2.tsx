"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

// Sample Testimonial Data
const testimonials = [
    { 
        name: "Sarah K.", 
        review: "The quality is unmatched! Everything I bought was exactly as pictured and arrived quickly. TrendyWear is my new favorite shop!", 
        rating: 5,
        city: "New York, NY"
    },
    { 
        name: "Mark L.", 
        review: "The Slim Fit Jeans are perfect. Great fit and very comfortable. I appreciate the detailed sizing guide and fast delivery.", 
        rating: 5,
        city: "Los Angeles, CA"
    },
    { 
        name: "Jessica R.", 
        review: "I love the unique styles! The customer support helped me with an exchange quickly and professionally. Highly recommend this brand!", 
        rating: 4,
        city: "Miami, FL"
    },
];

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.4, delay: 0.2 }
    },
};

const testimonialVariants = {
    enter: { opacity: 0, x: 100, scale: 0.95 },
    center: { 
        opacity: 1, 
        x: 0, 
        scale: 1,
        transition: { duration: 0.5 }
    },
    exit: { opacity: 0, x: -100, scale: 0.95 },
};

const RatingStars = ({ rating }: { rating: number }) => (
    <div className="flex space-x-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={`w-5 h-5 transition-colors duration-300 ${
                    i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
            />
        ))}
    </div>
);

const TestimonialsCarouselV2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                (prevIndex + 1) % testimonials.length
            );
        }, 6000); // Change testimonial every 6 seconds

        return () => clearInterval(interval);
    }, []);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="py-12 sm:py-20 max-w-4xl mx-auto px-4">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">
                    What our customers say
                </h3>
                <div className="relative bg-white/90 backdrop-blur rounded-2xl border border-pink-100 shadow-xl p-8 overflow-hidden dark:bg-gray-900/70">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            variants={testimonialVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35 }}
                            className="text-center"
                        >
                            <RatingStars rating={currentTestimonial.rating} />
                            
                            <p className="text-lg sm:text-xl text-gray-700 italic mb-4 dark:text-foreground">
                                &ldquo;{currentTestimonial.review}&rdquo;
                            </p>
                            
                            <div className="text-sm sm:text-base text-gray-600">
                                <span className="font-semibold text-gray-900">{currentTestimonial.name}</span>
                                <span className="block text-xs font-normal text-gray-500 mt-0.5 dark:text-muted-foreground">
                                    {currentTestimonial.city}
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Go to testimonial ${i + 1}`}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2.5 w-2.5 rounded-full transition-all ${
                                    i === currentIndex ? "bg-pink-600 scale-110" : "bg-pink-300 hover:bg-pink-400"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default TestimonialsCarouselV2;
