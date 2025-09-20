import GuestLayout from '@/layouts/guest-layout';
import { Head, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function About() {
    const { component } = usePage();

    return (
        <GuestLayout>
            <Head title={component} />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 to-blue-950 py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute top-0 left-0 h-full w-full">
                    <div className="absolute top-0 left-0 h-72 w-72 -translate-x-1/2 -translate-y-1/4 transform rounded-full bg-white opacity-10 mix-blend-overlay"></div>
                    <div className="bg-accent absolute top-0 right-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 transform rounded-full opacity-10 mix-blend-overlay"></div>
                </div>

                <div className="relative mx-auto max-w-6xl px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 text-5xl font-bold text-white md:text-6xl"
                    >
                        About Setudown
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto max-w-3xl text-xl text-blue-100"
                    >
                        Your trusted partner in creating seamless transitions and new beginnings
                    </motion.p>
                </div>

                {/* Animated Scrolling Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
                >
                    <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="mt-2 h-3 w-1 rounded-full bg-white"
                        ></motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Intro Section */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeIn}
                        className="mx-auto mb-16 max-w-4xl text-center"
                    >
                        <h2 className="mb-6 text-4xl font-bold text-gray-900">Our Story</h2>
                        <p className="text-xl leading-relaxed text-gray-600">
                            Setudown Ltd is a trusted relocation and settlement solutions company committed to helping individuals, families, and
                            organizations transition smoothly into new environments. With a focus on comfort, efficiency, and reliability, we take
                            care of the details so you can focus on new beginnings.
                        </p>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerChildren}
                        className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4"
                    >
                        {[
                            { number: '20+', label: 'Families Relocated' },
                            { number: '1+', label: 'Years Experience' },
                            { number: '3+', label: 'Countries Served' },
                            { number: '98%', label: 'Client Satisfaction' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={scaleIn}
                                className="rounded-xl bg-gray-50 p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                                    className="mb-2 text-4xl font-bold text-blue-950"
                                >
                                    {stat.number}
                                </motion.div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Mission and Vision */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerChildren}
                        className="mb-20 grid gap-10 md:grid-cols-2"
                    >
                        <motion.div
                            variants={fadeIn}
                            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-10 shadow-lg transition-all hover:shadow-xl"
                        >
                            <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-blue-50"></div>
                            <div className="relative z-10">
                                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100">
                                    <svg className="h-8 w-8 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="mb-4 text-2xl font-semibold text-gray-800">Our Mission</h3>
                                <p className="text-gray-600">
                                    To simplify settlement and relocation processes by providing world-class logistics, advisory, and support services
                                    that meet international standards.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeIn}
                            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-10 shadow-lg transition-all hover:shadow-xl"
                        >
                            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-tr-full bg-green-50"></div>
                            <div className="relative z-10">
                                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-green-100">
                                    <svg className="text-accent h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 className="mb-4 text-2xl font-semibold text-gray-800">Our Vision</h3>
                                <p className="text-gray-600">
                                    To become the leading global brand in settlement services, recognized for trust, excellence, and innovation.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Core Values */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeIn}>
                        <h3 className="mb-6 text-center text-3xl font-bold text-gray-800">Our Core Values</h3>
                        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
                            These principles guide everything we do and form the foundation of our company culture
                        </p>

                        <motion.ul variants={staggerChildren} className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                            {[
                                { name: 'Integrity', icon: '🤝', desc: 'We do the right thing, even when no one is watching' },
                                { name: 'Customer-Centric', icon: '👥', desc: 'Our clients are at the heart of every decision' },
                                { name: 'Reliability', icon: '⏱️', desc: 'Consistently delivering on our promises' },
                                { name: 'Innovation', icon: '💡', desc: 'Continuously improving our services' },
                                { name: 'Empathy', icon: '❤️', desc: 'Understanding our clients unique needs' },
                            ].map((value, index) => (
                                <motion.li
                                    key={index}
                                    variants={scaleIn}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    className="group rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
                                >
                                    <div className="mb-4 text-4xl transition-transform group-hover:scale-110">{value.icon}</div>
                                    <h4 className="mb-2 font-semibold text-gray-800">{value.name}</h4>
                                    <p className="text-sm text-gray-600">{value.desc}</p>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </section>

            {/* Team Section (Optional) */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Leadership</h2>
                        <p className="mx-auto max-w-3xl text-xl text-gray-600">
                            Meet the dedicated professionals who make Setudown a trusted name in relocation services
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerChildren}
                        // className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                        className="flex justify-center"
                    >
                        {[
                            {
                                name: 'Samson Popoola',
                                role: 'CEO & Founder',
                                image: 'https://media.licdn.com/dms/image/v2/D4D03AQFagL0QFqbx0Q/profile-displayphoto-shrink_200_200/B4DZcwW26lHwAY-/0/1748862988918?e=2147483647&v=beta&t=99TWQU8dHBbSD0vZ2XUJgY8Vtpj2dJQH-PN7GCzsKv4',
                            },
                            // {
                            //     name: 'Michael Chen',
                            //     role: 'Operations Director',
                            //     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                            // },
                            // {
                            //     name: 'Elena Rodriguez',
                            //     role: 'Client Relations',
                            //     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                            // },
                        ].map((person, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
                            >
                                <div className="h-64 w-64 overflow-hidden">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold text-gray-800">{person.name}</h3>
                                    <p className="text-gray-600">{person.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-950 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-4xl px-6 text-center"
                >
                    <h2 className="mb-6 text-4xl font-bold text-white">Ready to Begin Your Journey?</h2>
                    <p className="mx-auto mb-10 max-w-3xl text-xl text-blue-100">
                        Let us handle the complexities of relocation so you can focus on what matters most - starting your new life.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-950 shadow-lg transition-all hover:shadow-xl"
                    >
                        Get Started Today
                    </motion.button>
                </motion.div>
            </section>
        </GuestLayout>
    );
}
