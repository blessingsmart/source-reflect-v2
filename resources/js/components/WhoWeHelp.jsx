import { motion } from 'framer-motion';
import { Globe, Users, Building, Plane } from 'lucide-react';

export default function WhoWeHelp() {
    const audienceTypes = [
        {
            title: 'Individuals & Professionals',
            description: 'Moving abroad, coming home, or relocating within Nigeria? We support your personal journey.',
            icon: <Globe size={28} color="var(--green-deep)" strokeWidth={1.6} />,
            features: ['Personalised move plans', 'Housing search', 'Local support services'],
        },
        {
            title: 'Families',
            description: 'Relocation support for parents, children and partners who need structure and peace of mind.',
            icon: <Users size={28} color="var(--green-deep)" strokeWidth={1.6} />,
            features: ['School search', 'Family-friendly neighbourhoods', 'Household setup'],
        },
        {
            title: 'HR & Mobility Teams',
            description: 'Corporate moves made easier for domestic transfers, inbound arrivals and outbound assignments.',
            icon: <Building size={28} color="var(--green-deep)" strokeWidth={1.6} />,
            features: ['Domestic moves', 'Inbound employee support', 'Outbound relocation strategy'],
        },
        {
            title: 'Returnees & Expats',
            description: 'Experienced support for people arriving from abroad or returning to Nigeria after time away.',
            icon: <Plane size={28} color="var(--green-deep)" strokeWidth={1.6} />,
            features: ['Cultural reintegration', 'Safety orientation', 'Community introductions'],
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
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">Trusted by people and teams for every relocation direction.</h2>
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
