// resources/js/components/HowItWorks.jsx
import { motion } from 'framer-motion';

export default function HowItWorks() {
    const steps = [
        {
            number: '01',
            title: 'Tell us about your move',
            description: "Fill our short intake form. Are you moving alone? With kids? What's your timeline?",
        },
        {
            number: '02',
            title: 'Choose your plan',
            description: "We'll recommend a package—or build one from scratch.",
        },
        {
            number: '03',
            title: 'We handle everything',
            description: 'From airport pickup to property keys to getting Wi-Fi and groceries in your kitchen.',
        },
        {
            number: '04',
            title: 'You Settle Down',
            description: 'Live, work, thrive in Nigeria. Without chaos.',
        },
    ];

    return (
        <section id="how-it-works" className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">Here's How We Get You Settled.</h2>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                                {step.number}
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
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
                        Start My Move
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
