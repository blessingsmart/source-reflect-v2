// resources/js/components/Packages.jsx
import { motion } from 'framer-motion';

const services = [
    {
        name: 'Moving Abroad',
        description: 'Planning an overseas relocation? We support study, work, family and long-term moves with clarity and care.',
        features: ['Pre-departure planning', 'Overseas housing guidance', 'School and community support', 'Arrival orientation'],
        colorClass: 'border-green-200',
    },
    {
        name: 'Moving to Nigeria',
        description: 'Settling in Nigeria with confidence: housing, admin, safety and local integration for expats and returnees.',
        features: ['Housing & neighbourhood search', 'Admin support & local setup', 'Cultural orientation', 'Security briefing'],
        colorClass: 'border-blue-200',
    },
    {
        name: 'Moving Within Nigeria',
        description: 'City-to-city relocation for individuals, families and businesses with trusted logistics and local support.',
        features: ['Move planning & tracking', 'Safe transport coordination', 'New city orientation', 'Household setup'],
        colorClass: 'border-purple-200',
    },
];

export default function Packages() {
    return (
        <section id="packages" className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">Relocation services for every direction.</h2>
                    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
                        Choose the support that matches your move—abroad, to Nigeria, or within the country.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-3xl border-2 p-8 transition-all hover:shadow-xl ${service.colorClass} bg-white`}
                        >
                            <h3 className="mb-4 text-3xl font-semibold text-gray-900">{service.name}</h3>
                            <p className="mb-6 text-gray-600">{service.description}</p>
                            <ul className="mb-8 space-y-3 text-gray-700">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="mt-1 text-green-600">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="http://wa.me/2348165608778" target="_blank" rel="noopener noreferrer">
                                <button className="w-full rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700">
                                    Talk to an Expert
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
                    className="mt-16 rounded-3xl border border-green-100 bg-green-50 p-10 text-center shadow-xl"
                >
                    <h3 className="text-2xl font-semibold text-gray-900">Corporate relocation for domestic, inbound and outbound teams.</h3>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-700">
                        From single employee transfers to bulk assignment support, we partner with HR teams to deliver smooth, compliant and
                        people-first moves.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <a
                            className="rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
                            href="http://wa.me/2348165608778"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Build My Own Package
                        </a>
                        <a
                            className="rounded-lg border-2 border-green-600 px-8 py-3 font-semibold text-green-600 transition hover:bg-green-600 hover:text-white"
                            href="http://wa.me/2348165608778"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Compare Our Support Options
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
