"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type CarouselImage = { src: string; alt: string };

// Default images that exist in /public as a safe fallback
const defaultImages: CarouselImage[] = [
    { src: "/cheerful-happy-woman-enjoying-shopping-260nw-1417347668.webp", alt: "Happy customer shopping" },
    { src: "/file.svg", alt: "Classic T-Shirt" },
    { src: "/globe.svg", alt: "Slim Fit Jeans" },
    { src: "/window.svg", alt: "Denim Jacket" },
    { src: "/next.svg", alt: "Next.js graphic" },
    { src: "/vercel.svg", alt: "Vercel graphic" },
];

// Curated remote Unsplash images (fashion themed)
export const curatedFashionImages: CarouselImage[] = [
    {
        src: "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?auto=format&fit=crop&w=800&q=80",
        alt: "Streetwear model in sunlight",
    },
    {
        src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
        alt: "Minimalist female fashion outfit",
    },
    {
        src: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=800&q=80",
        alt: "Casual denim style",
    },
    {
        src: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
        alt: "Urban fashion jacket",
    },
    {
        src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
        alt: "Fitness lifestyle apparel",
    },
];

interface ImageCarouselProps {
    images?: CarouselImage[];
    intervalMs?: number; // autoplay interval
    disableAutoplay?: boolean;
}

const ImageCarousel = ({ images, intervalMs = 3000, disableAutoplay = false }: ImageCarouselProps) => {
    const list = images && images.length > 0 ? images : curatedFashionImages.length ? curatedFashionImages : defaultImages;
    const [currentIndex, setCurrentIndex] = useState(0);
    const preloadedRef = useRef<Record<number, boolean>>({});

    useEffect(() => {
        if (disableAutoplay || list.length <= 1) return; // skip autoplay when disabled or not needed
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
        }, intervalMs);
        return () => clearInterval(interval);
    }, [list.length, intervalMs, disableAutoplay]);

    // Preload next image for smoother transitions
    useEffect(() => {
        if (typeof window === "undefined") return; // SSR guard
        const nextIndex = (currentIndex + 1) % list.length;
        if (!preloadedRef.current[nextIndex]) {
            const preloadImg = new (window.Image as any)();
            preloadImg.src = list[nextIndex].src;
            preloadedRef.current[nextIndex] = true;
        }
    }, [currentIndex, list]);

    // Variants for the sliding animation
    const slideVariants = {
        enter: { opacity: 0, x: 200 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -200 },
    };

    const safeIndex = currentIndex % list.length;

    return (
        <section className="py-10 max-w-6xl mx-auto px-4 overflow-hidden">
            <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800 text-center tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                🔥 <span className="text-pink-600">Trending Now</span>
            </motion.h2>
            <motion.p
                className="text-md sm:text-xl text-gray-600 mb-10 text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Shop the looks everyone's loving this season!
            </motion.p>

            <motion.div
                className="relative h-64 sm:h-80 w-full bg-gradient-to-r from-pink-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-black rounded-3xl shadow-xl overflow-hidden flex items-center justify-center p-4 border border-border"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
                {list.length === 0 ? (
                    <div className="text-gray-500">No images to display</div>
                ) : (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={safeIndex}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 },
                            }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="relative w-full h-full max-w-sm sm:max-w-md lg:max-w-xl mx-auto select-none">
                                <Image
                                    src={list[safeIndex].src}
                                    alt={list[safeIndex].alt}
                                    fill
                                    className="object-contain rounded-2xl drop-shadow-lg"
                                    priority={safeIndex === 0}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )}

                {/* Dots navigation */}
                {list.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {list.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Go to slide ${i + 1}`}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2.5 w-2.5 rounded-full transition-all ${
                                    i === safeIndex ? "bg-pink-600 scale-110" : "bg-pink-300 hover:bg-pink-400"
                                }`}
                            />
                        ))}
                    </div>
                )}

                {/* Prev/Next controls */}
                {list.length > 1 && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
                        <button
                            type="button"
                            onClick={() => setCurrentIndex((p) => (p === 0 ? list.length - 1 : p - 1))}
                            className="pointer-events-auto bg-white/70 hover:bg-white text-gray-800 rounded-full px-3 py-1 shadow border border-gray-200"
                            aria-label="Previous slide"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={() => setCurrentIndex((p) => (p === list.length - 1 ? 0 : p + 1))}
                            className="pointer-events-auto bg-white/70 hover:bg-white text-gray-800 rounded-full px-3 py-1 shadow border border-gray-200"
                            aria-label="Next slide"
                        >
                            ›
                        </button>
                    </div>
                )}
            </motion.div>
        </section>
    );
};

export default ImageCarousel;