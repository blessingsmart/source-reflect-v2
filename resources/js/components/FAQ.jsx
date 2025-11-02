// resources/js/components/FAQ.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'Is this only for foreigners?',
            answer: 'No. We serve Nigerians returning home, foreign nationals, and companies relocating staff.',
        },
        {
            question: 'Can you help with short stays?',
            answer: "Yes. Whether you're staying 1 month or forever, we can help.",
        },
        {
            question: 'What cities do you cover?',
            answer: 'Lagos, Abuja, Port Harcourt. Others on request.',
        },
        {
            question: 'Do you take commission from vendors?',
            answer: 'Only vetted, contracted vendors. Our loyalty is to YOU.',
        },
        {
            question: 'What if I already found accommodation?',
            answer: 'Great! We can support with the rest: setup, staffing, school, and cultural onboarding.',
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-white py-20">
            <div className="mx-auto max-w-4xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">Still Got Questions? We've Heard Them All.</h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-lg border border-gray-200"
                        >
                            <button className="flex w-full items-center justify-between p-6 text-left" onClick={() => toggleFAQ(index)}>
                                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                                <svg
                                    className={`h-5 w-5 text-green-600 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="px-6 pb-6"
                                >
                                    <p className="text-gray-600">{faq.answer}</p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <motion.a
                        href="http://wa.me/2348165608778"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700"
                    >
                        Ask Us a Question
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
