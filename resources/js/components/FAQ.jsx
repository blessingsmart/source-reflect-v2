// resources/js/components/FAQ.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0); // first open by default

    const faqs = [
        {
            question: 'Is Setudown only for foreigners moving to Nigeria?',
            answer:
                'Not at all — and this is the big change. We help in three directions: Nigerians moving abroad ("japa"), people moving to Nigeria, and anyone moving between cities within Nigeria. Whichever applies to you, we\'ve got you.',
        },
        {
            question: 'Do you handle moves abroad and visa applications?',
            answer:
                'We handle the full relocation and settlement side — planning, proof-of-funds preparation, accommodation abroad and pre-departure support. We don\'t file visas directly, but we guide you and connect you with trusted immigration experts in our partner network.',
        },
        {
            question: 'Can you help with local moves within Nigeria?',
            answer:
                'Yes. Home and office moves between Lagos, Abuja, Port Harcourt, Ibadan and beyond — packing, logistics, a new-city orientation and getting your home set up and move-in ready.',
        },
        {
            question: 'How much does it cost, and can I pay in Naira?',
            answer:
                'Packages start from around ₦400k / $250 and are shown in both Naira and Dollars. You can pay in Naira. Not sure what you need? Book a free discovery call and we\'ll build a plan around your budget.',
        },
        {
            question: 'Where are you based?',
            answer:
                'We\'re a modern, digital-first relocation service based in Lagos and serving clients globally. Most of the process happens over WhatsApp, calls and video — wherever you are in the world.',
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-brand-cream-light py-20">
            <div className="mx-auto max-w-4xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green">
                        Good questions
                    </span>
                    <h2 className="mt-2 font-serif text-4xl font-bold text-brand-ink md:text-5xl">
                        Still got questions? We've heard them all.
                    </h2>
                </motion.div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className={`overflow-hidden rounded-xl border transition-all ${
                                    isOpen
                                        ? 'border-brand-green/40 shadow-md shadow-brand-green/5'
                                        : 'border-brand-cream-light hover:border-brand-green/20'
                                }`}
                            >
                                <button
                                    className="flex w-full items-center justify-between gap-4 bg-white p-5 text-left transition-colors hover:bg-brand-cream/50"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="font-semibold text-brand-ink text-base md:text-lg">
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-lg font-bold leading-none transition-all ${
                                            isOpen
                                                ? 'border-brand-green bg-brand-green text-white rotate-45'
                                                : 'border-brand-green/60 text-brand-green'
                                        }`}
                                    >
                                        +
                                    </span>
                                </button>

                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="bg-white px-5 pb-6"
                                    >
                                        <p className="text-brand-muted text-sm md:text-base leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-14 text-center"
                >
                    <a
                        href="https://wa.me/2348165608778"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-8 py-3.5 font-semibold text-brand-ink transition-all hover:shadow-lg hover:shadow-brand-gold/30"
                    >
                        Ask Us a Question
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
