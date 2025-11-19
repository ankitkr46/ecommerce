"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";

// Import Framer Motion components
import { motion } from "framer-motion";

// Import the new ImageCarousel component
import ImageCarousel from "@/components/ImageCarousel";
import TestimonialsCarouselV2 from "@/components/TestimonialsCarouselV2"; // NEW IMPORT

// --- Framer Motion Variants ---

// Container for staggered products
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

// Item animation for product cards
const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

// Hero text animation (split letters for a cool effect)
const heroTextVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Value Proposition Icons animation
const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
};


// --- Component Implementation ---

const ValueProposition = () => (
    <motion.section
        className="py-10 max-w-6xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
    >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
                { title: "Worldwide Shipping", icon: "✈️" },
                { title: "Money-Back Guarantee", icon: "🛡️" },
                { title: "24/7 Premium Support", icon: "💬" },
            ].map((prop, index) => (
                <motion.div key={index} className="p-6 bg-white rounded-xl shadow-lg border border-pink-100" variants={iconVariants}>
                    <div className="text-4xl mb-3">{prop.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{prop.title}</h3>
                    <p className="text-gray-500">Shop with confidence, globally.</p>
                </motion.div>
            ))}
        </div>
    </motion.section>
);


export default function Home() {
    // Function to render the animated hero text
    const renderHeroTitle = (text: string) =>
        text.split(" ").map((word, index) => (
            <motion.span
                key={index}
                className="inline-block mr-3" // Add space between words
                variants={wordVariants}
            >
                {word}
            </motion.span>
        ));

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black">
           {/* Hero Section (refactored to left-aligned two-column layout) */}
<section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 mb-12 border-b-4 border-pink-200 bg-white/90 shadow-2xl rounded-bl-[50px] rounded-br-[50px]">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Column: Text Content */}
        <div className="flex-1 order-2 md:order-1">
            <motion.h1
                className="text-4xl sm:text-6xl font-extrabold text-foreground mb-6 leading-tight text-left drop-shadow-2xl"
                initial="hidden"
                animate="visible"
                variants={heroTextVariants}
            >
                <span className="block text-lg sm:text-2xl font-light text-pink-500 mb-3">
                    {"Fashion Reimagined"}
                </span>
                {renderHeroTitle("Welcome to")}
                <span className="text-pink-500 block">
                    {renderHeroTitle("TrendyWear")}
                </span>
            </motion.h1>
            <motion.p
                className="text-base sm:text-xl text-muted-foreground mb-8 font-medium max-w-xl text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
            >
                Discover the latest fashion in clothing for men and women. <strong>Style starts here.</strong>
            </motion.p>
            <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.6, type: "spring", stiffness: 210 }}
            >
                <Button className="px-10 py-4 text-lg font-bold shadow-xl bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-all duration-300 hover:shadow-pink-500/50">
                    Explore Collections
                </Button>
            </motion.div>
        </div>
        {/* Right Column: Image - CLEAN CUTOUT STYLE */}
        <motion.div
            // Increased max-w-md to max-w-lg to give the cutout more presence
            className="flex-1 w-full max-w-lg order-1 md:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
        >
            {/* REMOVED: rounded-3xl, overflow-hidden, shadow-2xl, ring-2, bg-gradient */}
            <div className="relative aspect-[4/5] w-full"> 
                <Image
                    // Set the SRC based on your public path
                    src="/Gemini_Generated_Image_84bqiw84bqiw84bq.png"
                    alt="Happy family shopping cutout"
                    fill
                    priority
                    // Kept object-cover to ensure the image fills the aspect ratio container
                    // Removed scale-105 for a standard fit
                    className="object-cover object-center"
                />
                {/* REMOVED: The pink overlay div */}
            </div>
        </motion.div>
    </div>
</section>
            {/* Value Proposition */}
            <ValueProposition />
            
            {/* New: Automatic Image Carousel Section */}
            <ImageCarousel />
            <TestimonialsCarouselV2 />
            {/* Featured Products Section */}
            <motion.section 
                className="py-12 sm:py-20 px-2 sm:px-4 max-w-6xl mx-auto"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={container}
            >
                <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-foreground text-center tracking-tight border-b pb-2 border-pink-100">
                    🔥 This Week's Top Picks
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Example product cards - now wrapped with motion.div */}
                    {[
                        { title: "Classic T-Shirt", desc: "Comfortable cotton t-shirt for everyday wear.", price: "$19.99", img: "/file.svg", alt: "T-shirt" },
                        { title: "Slim Fit Jeans", desc: "Stylish jeans with a modern fit.", price: "$39.99", img: "/globe.svg", alt: "Jeans" },
                        { title: "Denim Jacket", desc: "Classic denim jacket for all seasons.", price: "$49.99", img: "/window.svg", alt: "Jacket" },
                    ].map((product, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="rounded-2xl shadow-xl border border-border hover:shadow-2xl transition bg-card">
                                <CardHeader>
                                    <CardTitle className="text-xl font-extrabold text-gray-900 group-hover:text-pink-600 transition-colors">
                                        {product.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm text-gray-500">
                                        {product.desc}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="relative p-6">
                                    <div className="relative h-48 w-full bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                                        <Image
                                            src={product.img}
                                            alt={product.alt}
                                            fill
                                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter className="flex items-center justify-between pt-0 px-6 pb-6">
                                    <span className="font-extrabold text-pink-600 text-2xl">
                                        {product.price}
                                    </span>
                                    <Button
                                        variant="outline"
                                        className="rounded-full px-6 py-2 font-medium text-pink-600 border-pink-600 hover:bg-pink-50 hover:border-pink-500 transition-all"
                                    >
                                        View Product
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </main>
    );
}