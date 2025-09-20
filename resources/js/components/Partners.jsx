// resources/js/components/Partners.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Fallback partners data
const fallbackPartners = [
    {
        id: 1,
        name: 'Global Housing',
        logo_url: '/images/partner1.png',
        placeholder: '🏢',
    },
    {
        id: 2,
        name: 'SecureMove',
        logo_url: '/images/partner2.png',
        placeholder: '📦',
    },
    {
        id: 3,
        name: 'RelocateEasy',
        logo_url: '/images/partner3.png',
        placeholder: '✈️',
    },
    {
        id: 4,
        name: 'HomeFinders',
        logo_url: '/images/partner4.png',
        placeholder: '🔍',
    },
    {
        id: 5,
        name: 'SafeTransition',
        logo_url: '/images/partner5.png',
        placeholder: '🛡️',
    },
];

export default function Partners() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        // Try to fetch from API, but use fallback if it fails
        fetch('/api/partners')
            .then((res) => {
                if (res.ok) return res.json();
                throw new Error('API not available');
            })
            .then((data) => setPartners(data))
            .catch(() => setPartners(fallbackPartners));
    }, []);

    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Trusted Partners</h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-600">
                        We collaborate with industry leaders to provide you with the best relocation experience
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
                >
                    {partners.map((p, index) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                            className="flex h-20 w-40 items-center justify-center rounded-lg bg-white p-4 shadow-sm grayscale transition-all hover:grayscale-0"
                        >
                            {p.logo_url && !p.logo_url.includes('placeholder') ? (
                                <img src={p.logo_url} alt={p.name} className="h-10 object-contain" />
                            ) : (
                                <div className="text-3xl">{p.placeholder}</div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
