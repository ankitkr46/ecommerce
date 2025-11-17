"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';

const FAQ_DATA = [
    {
        category: "Shipping & Delivery",
        questions: [
            { q: "How long does shipping take?", a: "Standard shipping takes 5-7 business days. Express shipping options are available at checkout and usually take 2-3 business days." },
            { q: "Do you ship internationally?", a: "Yes, we proudly offer worldwide shipping. Delivery times and costs vary depending on the destination country." },
            { q: "How can I track my order?", a: "Once your order ships, you will receive an email notification with a tracking number and a link to the carrier's website." },
        ],
    },
    {
        category: "Returns & Exchanges",
        questions: [
            { q: "What is your return policy?", a: "We accept returns within 30 days of purchase for a full refund, provided the items are unworn, unwashed, and have the original tags attached." },
            { q: "How do I process an exchange?", a: "To exchange an item for a different size or color, please contact our support team with your order number and the item details." },
        ],
    },
    {
        category: "Product & Sizing",
        questions: [
            { q: "Where can I find a size guide?", a: "Our detailed size guide is available on every Product Detail Page (PDP) just above the 'Add to Cart' button." },
            { q: "How do I care for my clothing?", a: "Care instructions are listed on the inner tag of each garment. We recommend washing cold and tumble drying low or hanging to dry." },
        ],
    },
];

const AnswerPanel = ({ answer }: { answer: string }) => (
    <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t border-gray-200"
    >
        <div className="p-4 bg-gray-50 text-gray-700">
            {answer}
        </div>
    </motion.div>
);

const FAQItem = (
  { question, answer }: { question: string; answer: string }
) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
                className="w-full flex justify-between items-center p-4 bg-white hover:bg-pink-50 transition"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium text-gray-800 text-left">
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-6 h-6 text-pink-500" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && <AnswerPanel answer={answer} />}
            </AnimatePresence>
        </div>
    );
};


const FAQPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = FAQ_DATA.map(section => ({
        ...section,
        questions: section.questions.filter(item => 
            item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
            item.a.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(section => section.questions.length > 0);


    return (
        <div className="min-h-screen bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
                    Frequently Asked Questions
                </h1>
                <p className="text-xl text-gray-600 mb-8 text-center">
                    Quick answers to your most common questions.
                </p>

                {/* Search Bar */}
                <div className="relative mb-12">
                    <input
                        type="text"
                        placeholder="Search for shipping, returns, or sizing..."
                        className="w-full p-4 pl-12 border-2 border-pink-200 rounded-xl shadow-lg focus:ring-pink-500 focus:border-pink-500 transition"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>

                {/* FAQ Sections */}
                {filteredData.map((section, index) => (
                    <div key={index} className="mb-10">
                        <motion.h2 
                            className="text-2xl font-bold text-pink-600 mb-6 border-b-2 border-pink-300 pb-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            {section.category}
                        </motion.h2>
                        <div className="space-y-4">
                            {section.questions.map((item, qIndex) => (
                                <FAQItem key={qIndex} question={item.q} answer={item.a} />
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default FAQPage;