import { motion } from 'framer-motion';

export default function WhoWeHelp() {
    const audienceTypes = [
        {
            title: 'Diaspora Returnees',
            description: 'You were raised abroad. Nigeria looks familiar but feels foreign.',
            icon: '🌍',
            features: ['Cultural reintegration', 'Family settlement', 'Business setup guidance'],
        },
        {
            title: 'Expats',
            description: 'First time in West Africa? We help you thrive, not just survive.',
            icon: '👨‍💼',
            features: ['Complete orientation', 'Safety protocols', 'Social integration'],
        },
        {
            title: 'HR Teams',
            description: 'Managing employee relocation? We remove the friction.',
            icon: '🏢',
            features: ['Bulk relocation', 'Corporate housing', 'Employee support'],
        },
        {
            title: 'NGO/Missionary Staff',
            description: 'Budget-friendly solutions. Total safety. Real support.',
            icon: '✝️',
            features: ['Security briefing', 'Community integration', 'Logistical support'],
        },
    ];

    return (
        <section id="who-we-help" className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">Not Everyone Needs Help. But If You're New, You Do.</h2>
                </motion.div>

                <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {audienceTypes.map((audience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
                        >
                            <div className="mb-4 text-4xl">{audience.icon}</div>
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">{audience.title}</h3>
                            <p className="mb-4 text-gray-600">{audience.description}</p>
                            <ul className="space-y-2">
                                {audience.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-600">
                                        <span className="mr-2 text-green-500">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-xl border border-green-200 bg-green-50 p-8 text-center"
                >
                    <p className="mb-4 text-xl text-gray-800 italic">
                        "You can Google everything and still get everything wrong. We help you get it right the first time."
                    </p>
                    <motion.a
                        href="http://wa.me/2348165608778"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700"
                    >
                        Get It Right The First Time
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
