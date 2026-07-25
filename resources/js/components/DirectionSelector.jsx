import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const directions = [
    {
        title: 'Moving Abroad',
        icon: '✈',
        subtitle: 'Study, Work, Family, Permanent Residence',
        description: 'Planning to relocate from Nigeria? We help you prepare, relocate and settle with confidence.',
        href: '/moving-abroad',
    },
    {
        title: 'Moving to Nigeria',
        icon: '🛬',
        subtitle: 'Expats, Returnees, International Professionals',
        description: 'Everything you need to settle comfortably in Nigeria.',
        href: '/moving-to-nigeria',
    },
    {
        title: 'Moving Within Nigeria',
        icon: '🚚',
        subtitle: 'City to City Relocation',
        description: 'Helping individuals, families and businesses relocate anywhere in Nigeria.',
        href: '/moving-within-nigeria',
    },
];

export default function DirectionSelector() {
    return (
        <section id="directions" className="bg-green-50 py-20">
            <div className="mx-auto max-w-7xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto mb-12 max-w-3xl"
                >
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">Where are you moving?</h2>
                    <p className="text-xl leading-relaxed text-gray-700">
                        Choose the direction that matches your relocation journey and let Setudown guide every step with care and clarity.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                    {directions.map((direction, index) => (
                        <motion.div
                            key={direction.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-3xl border border-green-200 bg-white p-7 shadow-xl"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
                                    {direction.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900">{direction.title}</h3>
                                    <p className="text-sm text-green-700">{direction.subtitle}</p>
                                </div>
                            </div>
                            <p className="mt-5 text-gray-700">{direction.description}</p>
                            <div className="mt-8 text-right">
                                <Link
                                    href={direction.href}
                                    className="inline-flex items-center rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
