// resources/js/components/Packages.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Packages() {
    const [selectedPackage, setSelectedPackage] = useState(null);

    const packages = [
        {
            name: 'BASIC',
            price: '$250 – $500',
            features: ['Airport pickup', 'SIM card + local number', 'Orientation guide'],
            color: 'green',
        },
        {
            name: 'STANDARD',
            price: '$800 – $1,500',
            features: ['All BASIC features', 'Short & long-term accommodation', 'School search & placement', 'Local tour', 'Utility setup'],
            color: 'blue',
        },
        {
            name: 'PREMIUM',
            price: '$2,000 – $4,000',
            features: [
                'All STANDARD features',
                'Admin help (NIN, bank setup, ID)',
                'Dedicated rep',
                'Custom safety briefing',
                'Domestic staff placement',
            ],
            color: 'purple',
        },
        {
            name: 'CORPORATE',
            price: 'Custom Pricing',
            description: 'For HR teams, NGOs, and multinationals',
            features: ['Bulk relocation', 'Visa extension guidance', 'Dedicated corporate liaison'],
            color: 'orange',
        },
    ];

    return (
        <section id="packages" className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">One Price. Everything Covered.</h2>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-xl border-2 p-6 transition-all hover:shadow-lg ${
                                pkg.color === 'green'
                                    ? 'border-green-200'
                                    : pkg.color === 'blue'
                                      ? 'border-blue-200'
                                      : pkg.color === 'purple'
                                        ? 'border-purple-200'
                                        : 'border-orange-200'
                            }`}
                        >
                            <h3 className="mb-2 text-2xl font-bold text-gray-900">{pkg.name}</h3>
                            <div className="mb-4 text-3xl font-bold text-green-600">{pkg.price}</div>
                            {pkg.description && <p className="mb-4 text-gray-600">{pkg.description}</p>}

                            <ul className="mb-6 space-y-3">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="mr-2 text-green-500">✓</span>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="http://wa.me/2348165608778" target="_blank" rel="noopener noreferrer">
                                <button className="w-full rounded-lg bg-green-600 py-2 text-white transition-colors hover:bg-green-700">
                                    Get Started
                                </button>
                            </a>
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
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <button className="rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700">
                            Compare All Packages
                        </button>
                        <a
                            className="rounded-lg border-2 border-green-600 px-8 py-3 font-semibold text-green-600 transition-colors hover:bg-green-600 hover:text-white"
                            href="http://wa.me/2348165608778"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Build My Own Package
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
