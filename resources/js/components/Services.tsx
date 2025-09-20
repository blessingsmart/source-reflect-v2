// resources/js/components/Services.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

// Fallback services data if API is not ready
const fallbackServices = [
    {
        id: 1,
        title: 'Relocation Assistance',
        description: 'End-to-end support for individuals and families relocating locally or internationally.',
        icon: '🚚',
    },
    {
        id: 2,
        title: 'Accommodation & Housing',
        description: 'Assistance in securing suitable and affordable housing options tailored to client needs.',
        icon: '🏠',
    },
    {
        id: 3,
        title: 'Logistics & Setup',
        description: 'From moving personal effects to setting up utilities and local services.',
        icon: '📦',
    },
    {
        id: 4,
        title: 'Advisory & Consultation',
        description: 'Guidance on cultural integration, documentation, and settlement processes.',
        icon: '💼',
    },
];

type Service = {
    id: number;
    title: string;
    description: string;
    icon: string;
};

export default function Services() {
    // Use only fallback data; remove API fetch
    const [services] = useState<Service[]>(fallbackServices);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="services" className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Services</h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-600">Comprehensive relocation solutions tailored to your specific needs</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="group rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all hover:shadow-xl"
                        >
                            <div className="mb-4 text-4xl transition-transform group-hover:scale-110">{service.icon}</div>
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                            <div className="mt-4">
                                <button className="flex items-center text-sm font-medium text-blue-950 group-hover:underline">
                                    Learn more
                                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
