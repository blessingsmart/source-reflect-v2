// resources/js/components/WhyChooseUs.jsx
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
    const pillars = [
        {
            title: 'Trust & Reliability',
            desc: 'We ensure secure, transparent, and dependable services with proven track record.',
            icon: '🤝',
        },
        {
            title: 'Global Reach',
            desc: 'Support available for both local and international relocations across 30+ countries.',
            icon: '🌎',
        },
        {
            title: 'Personalized Solutions',
            desc: 'Tailored packages to fit your unique relocation needs and preferences.',
            icon: '🎯',
        },
    ];

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
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">Why Choose Us</h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-600">
                        Discover what makes Setudown the preferred choice for relocation services
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 gap-8 md:grid-cols-3"
                >
                    {pillars.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="group rounded-xl bg-white p-8 text-center shadow-lg transition-all hover:shadow-xl"
                        >
                            <div className="mb-4 text-4xl transition-transform group-hover:scale-110">{item.icon}</div>
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
                >
                    {[
                        { number: '20+', label: 'Families Relocated' },
                        { number: '98%', label: 'Success Rate' },
                        { number: '5+', label: 'Countries' },
                        { number: '1+', label: 'Years Experience' },
                    ].map((stat, index) => (
                        <div key={index} className="rounded-xl bg-white p-6 text-center shadow-sm">
                            <div className="mb-2 text-3xl font-bold text-blue-950">{stat.number}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
