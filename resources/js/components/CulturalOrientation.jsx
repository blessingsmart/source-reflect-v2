// resources/js/components/CulturalOrientation.jsx
import { motion } from 'framer-motion';

export default function CulturalOrientation() {
    const culturalAspects = [
        'How to navigate social customs',
        'How to talk to police or LASTMA',
        'How to greet elders (and when not to speak)',
        'Where not to go (especially after dark)',
        'How not to get scammed',
        'What NOT to do as a foreigner or returnee',
    ];

    const addons = [
        {
            title: "Cultural Do's & Don'ts session",
            description: '2-hour intensive cultural briefing',
        },
        {
            title: 'Insider shopping trip',
            description: 'Learn where locals really shop',
        },
        {
            title: 'Local street food tour',
            description: 'Safe and delicious food exploration',
        },
    ];

    return (
        <section id="cultural-orientation" className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">More Than Just Maps and Markets. We Help You Understand Nigeria.</h2>
                    <p className="mx-auto max-w-4xl text-xl text-gray-600">Nigeria isn't just a place. It's a culture.</p>
                </motion.div>

                <div className="mb-16 grid gap-12 lg:grid-cols-2">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h3 className="mb-6 text-2xl font-semibold text-gray-900">We help you understand:</h3>
                        <ul className="space-y-4">
                            {culturalAspects.map((aspect, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-3 text-xl text-green-500">•</span>
                                    <span className="text-lg text-gray-700">{aspect}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h3 className="mb-6 text-2xl font-semibold text-gray-900">Cultural Add-ons:</h3>
                        <div className="space-y-6">
                            {addons.map((addon, index) => (
                                <div key={index} className="rounded-lg border border-green-200 bg-green-50 p-6">
                                    <h4 className="mb-2 text-lg font-semibold text-green-800">{addon.title}</h4>
                                    <p className="text-green-700">{addon.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700"
                    >
                        Book Cultural Session
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
