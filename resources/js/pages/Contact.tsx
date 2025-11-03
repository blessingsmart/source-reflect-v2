import GuestLayout from '@/layouts/guest-layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.15 } },
};

export default function Contact() {
    type FormData = {
        name: string;
        email: string;
        phone: string;
        service: string;
        message: string;
    };

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const name = e.target.name as keyof FormData;
        const value = e.target.value;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You would typically send this data to your backend
    };

    return (
        <GuestLayout>
            <Head title="Contact Us" />

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
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto max-w-3xl text-xl text-blue-100"
                    >
                        Have questions about our services? We're here to help and guide you through your relocation journey.
                    </motion.p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeIn}
                        className="mx-auto mb-16 max-w-3xl text-center"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">Let's Start a Conversation</h2>
                        <p className="text-xl text-gray-600">Reach out to us for a free consultation. We'll respond within 24 hours.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        {/* Contact Form */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="rounded-2xl bg-gray-50 p-8 shadow-lg"
                        >
                            <h3 className="mb-6 text-2xl font-semibold text-gray-900">Send us a message</h3>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-950"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-950"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="phone" className="mb-2 block font-medium text-gray-700">
                                        Phone Number (Optional)
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-950"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="service" className="mb-2 block font-medium text-gray-700">
                                        Service Needed
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-transparent focus:ring-2 focus:ring-blue-950"
                                        required
                                    >
                                        <option value="">Select a service</option>
                                        <option value="relocation">Relocation Assistance</option>
                                        <option value="housing">Accommodation & Housing</option>
                                        <option value="logistics">Logistics & Setup</option>
                                        <option value="advisory">Advisory & Consultation</option>
                                        <option value="corporate">Corporate/Expatriate Packages</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="mb-2 block font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-950"
                                        required
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full rounded-lg bg-blue-950 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerChildren} className="space-y-8">
                            <div>
                                <h3 className="mb-6 text-2xl font-semibold text-gray-900">Contact Information</h3>
                                <p className="mb-8 text-gray-600">
                                    As a modern relocation service, we operate digitally to serve clients globally. While we don't have a physical
                                    office yet, we're always available through these channels.
                                </p>
                            </div>

                            {/* Contact Methods */}
                            <motion.div variants={fadeIn} className="flex items-start rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                    <svg className="h-6 w-6 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="mb-1 font-semibold text-gray-900">Email Us</h4>
                                    <p className="text-gray-600">inquiries@setudown.com</p>
                                    <p className="mt-1 text-sm text-gray-500">We'll respond within 24 hours</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeIn} className="flex items-start rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                    <svg className="h-6 w-6 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="mb-1 font-semibold text-gray-900">Call Us</h4>
                                    <p className="text-gray-600">+234 816 560 8778</p>
                                    <p className="mt-1 text-sm text-gray-500">Mon-Fri from 8am to 6pm</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeIn} className="flex items-start rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                    <svg className="h-6 w-6 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="mb-1 font-semibold text-gray-900">Live Chat</h4>
                                    <p className="text-gray-600">Available on our website</p>
                                    <p className="mt-1 text-sm text-gray-500">Get instant answers to your questions</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeIn} className="flex items-start rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                    <svg className="h-6 w-6 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="mb-1 font-semibold text-gray-900">Response Time</h4>
                                    <p className="text-gray-600">Within 24 hours</p>
                                    <p className="mt-1 text-sm text-gray-500">For emails and contact form submissions</p>
                                </div>
                            </motion.div>

                            {/* Virtual Meeting */}
                            <motion.div variants={fadeIn} className="rounded-xl bg-gradient-to-r from-blue-950 to-blue-700 p-6 text-white">
                                <h4 className="mb-3 text-xl font-semibold">Prefer a Virtual Meeting?</h4>
                                <p className="mb-4">Schedule a video consultation at your convenience</p>
                                <motion.a
                                    href="https://calendly.com/inquiries-setudown/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="rounded-lg bg-white px-6 py-2 font-semibold text-blue-950"
                                >
                                    Schedule a Call
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeIn}
                        className="mx-auto mb-16 max-w-3xl text-center"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">Quick answers to common questions about our services</p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerChildren}
                        className="grid grid-cols-1 gap-8 md:grid-cols-2"
                    >
                        {[
                            {
                                question: 'How long does the relocation process usually take?',
                                answer: 'The timeline varies based on destination and services needed. Domestic moves typically take 2-4 weeks, while international relocations can take 4-8 weeks from planning to completion.',
                            },
                            {
                                question: 'Do you handle international moves?',
                                answer: 'Yes, we specialize in both domestic and international relocations. Our global network allows us to provide seamless moving experiences to numerous countries worldwide.',
                            },
                            {
                                question: 'Can you help with visa applications?',
                                answer: "While we don't process visas directly, we provide guidance on requirements and connect you with trusted immigration experts who can assist with the application process.",
                            },
                            {
                                question: 'What areas do you serve?',
                                answer: 'We provide relocation services globally. Our digital-first approach allows us to assist clients regardless of their current location or destination.',
                            },
                        ].map((faq, index) => (
                            <motion.div key={index} variants={fadeIn} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                                <h4 className="mb-3 font-semibold text-gray-900">{faq.question}</h4>
                                <p className="text-gray-600">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="mt-12 text-center"
                    >
                        <p className="mb-6 text-gray-600">Have a different question?</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-lg bg-blue-950 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </GuestLayout>
    );
}
