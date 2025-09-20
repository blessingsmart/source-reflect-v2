import GuestLayout from '@/layouts/guest-layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.15 } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Services() {
    const services = [
        {
            title: 'Relocation Assistance',
            description:
                'End-to-end support for individuals and families relocating locally or internationally. We handle everything from planning to execution.',
            icon: '🚚',
            features: ['Pre-move planning', 'Destination research', 'School & area guidance', 'Settlement orientation'],
            gradient: 'from-blue-500 to-blue-700',
        },
        {
            title: 'Accommodation & Housing Solutions',
            description: 'Assistance in securing suitable and affordable housing options tailored to your specific needs and preferences.',
            icon: '🏠',
            features: ['Property search', 'Neighborhood analysis', 'Lease negotiation', 'Temporary housing'],
            gradient: 'from-green-500 to-green-700',
        },
        {
            title: 'Logistics & Setup',
            description: "From moving personal effects to setting up utilities and local services. We handle the details so you don't have to.",
            icon: '📦',
            features: ['Moving coordination', 'Utility connections', 'Furniture rental', 'Home setup'],
            gradient: 'from-purple-500 to-purple-700',
        },
        {
            title: 'Advisory & Consultation',
            description: 'Guidance on cultural integration, documentation, and settlement processes for a smooth transition.',
            icon: '💼',
            features: ['Documentation assistance', 'Cultural training', 'Legal requirements', 'Local customs'],
            gradient: 'from-orange-500 to-orange-700',
        },
        {
            title: 'Corporate/Expatriate Packages',
            description: 'Custom solutions for businesses relocating staff across borders with comprehensive support services.',
            icon: '👨‍💼',
            features: ['Group relocation', 'Visa processing', 'Family support', 'Ongoing assistance'],
            gradient: 'from-red-500 to-red-700',
        },
    ];

    return (
        <GuestLayout>
            <Head title="Our Services" />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-950 py-24">
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
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto max-w-3xl text-xl text-blue-100"
                    >
                        Comprehensive relocation and settlement solutions tailored to your unique needs
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeIn}
                        className="mx-auto mb-16 max-w-3xl text-center"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">Comprehensive Relocation Services</h2>
                        <p className="text-xl text-gray-600">
                            We offer end-to-end solutions to make your relocation journey seamless and stress-free
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerChildren} className="grid gap-10">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className={`flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white p-8 md:w-2/5">
                                    <div
                                        className={`inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 text-3xl text-white`}
                                    >
                                        {service.icon}
                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold text-gray-900">{service.title}</h3>
                                    <p className="mb-6 text-gray-600">{service.description}</p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="self-start rounded-lg bg-blue-950 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700"
                                    >
                                        Learn More
                                    </motion.button>
                                </div>

                                <div className="bg-gray-50 p-8 md:w-3/5">
                                    <h4 className="mb-4 text-lg font-semibold text-gray-800">What's Included:</h4>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-start"
                                            >
                                                <svg
                                                    className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span className="text-gray-700">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeIn}
                        className="mx-auto mb-16 max-w-3xl text-center"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Simple Process</h2>
                        <p className="text-xl text-gray-600">We've streamlined our approach to make your relocation as smooth as possible</p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerChildren}
                        className="grid grid-cols-1 gap-8 md:grid-cols-4"
                    >
                        {[
                            { step: '01', title: 'Consultation', desc: 'We discuss your needs and requirements' },
                            { step: '02', title: 'Planning', desc: 'We create a customized relocation plan' },
                            { step: '03', title: 'Execution', desc: 'We handle all the logistics and details' },
                            { step: '04', title: 'Settlement', desc: "We ensure you're comfortably settled in" },
                        ].map((item, index) => (
                            <motion.div key={index} variants={scaleIn} className="relative text-center">
                                {index < 3 && <div className="absolute top-12 left-3/4 hidden h-0.5 w-full bg-blue-950 opacity-30 md:block"></div>}
                                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-950 to-blue-700 text-2xl font-bold text-white">
                                    {item.step}
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeIn}
                        className="mx-auto mb-16 max-w-3xl text-center"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">What Our Clients Say</h2>
                        <p className="text-xl text-gray-600">Hear from people who have experienced our relocation services firsthand</p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerChildren}
                        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {[
                            {
                                name: 'Robert Johnson',
                                role: 'Relocated to Lagos',
                                content:
                                    'Setudown made our move from the ibadan to Lagos completely seamless. Their attention to detail was impressive.',
                                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAj1ZyVhinZkuUe_ddZzSUAbm9saIe4jIYyQ&s',
                            },
                            {
                                name: 'Sophia Williams',
                                role: 'Corporate Relocation',
                                content:
                                    "The corporate package was perfect for our team's move. Everything was handled professionally and efficiently.",
                                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAj1ZyVhinZkuUe_ddZzSUAbm9saIe4jIYyQ&s',
                            },
                            {
                                name: 'James Chen',
                                role: 'Family Relocation',
                                content: 'Finding schools and the right neighborhood was our biggest concern. Setudown exceeded our expectations.',
                                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAj1ZyVhinZkuUe_ddZzSUAbm9saIe4jIYyQ&s',
                            },
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={scaleIn}
                                className="rounded-2xl bg-gray-50 p-8 shadow-sm transition-all hover:shadow-md"
                            >
                                <div className="mb-6 flex items-center">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="mr-4 h-14 w-14 rounded-full object-cover" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                                <div className="mt-6 flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-950 to-blue-800 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-4xl px-6 text-center"
                >
                    <h2 className="mb-6 text-4xl font-bold text-white">Ready to Start Your Relocation Journey?</h2>
                    <p className="mx-auto mb-10 max-w-3xl text-xl text-blue-100">
                        Get in touch with us today for a free consultation and let us handle the details of your move.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-950 shadow-lg transition-all hover:shadow-xl"
                        >
                            Request a Consultation
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-lg border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-blue-950"
                        >
                            View Our Packages
                        </motion.button>
                    </div>
                </motion.div>
            </section>
        </GuestLayout>
    );
}
