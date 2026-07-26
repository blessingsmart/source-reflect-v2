// resources/js/components/HowItWorks.jsx
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

export default function HowItWorks() {
    const steps = [
        {
            number: '01',
            title: 'Tell us about your move',
            description: "A short intake call. Where are you going, who's coming, and what's your timeline?",
        },
        {
            number: '02',
            title: 'Choose your plan',
            description: 'We recommend a package — or build one from scratch around your exact needs.',
        },
        {
            number: '03',
            title: 'We handle everything',
            description: 'Housing, logistics, documents, setup and trusted partners — coordinated for you.',
        },
        {
            number: '04',
            title: 'You settle down',
            description: 'Live, work and thrive in your new home — without the chaos, scams or regret.',
        },
    ];

    return (
        <section id="how-it-works" className="bg-brand-cream-light py-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green">
                        The Setudown Way
                    </span>
                    <h2 className="mt-2 font-serif text-4xl font-bold text-brand-ink md:text-5xl">
                        Here's how we get you settled
                    </h2>
                    <p className="mt-3 text-lg text-brand-muted">
                        One calm, guided process — whichever direction you're heading.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group rounded-2xl bg-white p-7 text-center shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-green text-2xl font-bold text-white shadow-lg shadow-brand-green/30 transition-colors group-hover:bg-brand-green-deep">
                                {step.number}
                            </div>
                            <h3 className="mb-3 font-serif text-xl font-semibold text-brand-ink">
                                {step.title}
                            </h3>
                            <p className="text-brand-muted text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-14 text-center"
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-8 py-3.5 font-semibold text-brand-ink transition-all hover:shadow-lg hover:shadow-brand-gold/30"
                    >
                        Start My Move
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}