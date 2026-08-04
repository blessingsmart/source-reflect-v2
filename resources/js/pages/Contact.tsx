// resources/js/pages/Contact.jsx
import GuestLayout from '@/layouts/guest-layout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, MessageCircle, ChevronRight } from 'lucide-react';

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

    
    const [result, setResult] = useState<{ success?: boolean; message?: string } | null>(null);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const name = e.target.name as keyof FormData;
        const value = e.target.value;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.delete('access_key');
    formData.append('access_key', '36eaa255-4d24-40aa-822a-fc0c5f2d16c4');

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (response.ok && data.success) {
            setResult({ success: true, message: '✅ Success! We\'ll get back to you within 24 hours.' });
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        } else {
            // Show the error message from web3forms
            const errorMsg = data.message || 'Something went wrong. Please try again.';
            setResult({ success: false, message: `❌ ${errorMsg}` });
        }
    } catch (error) {
        setResult({ success: false, message: '❌ Network error. Please check your connection.' });
    } finally {
        setSubmitting(false);
    }
};

    return (
        <GuestLayout>
            <Head title="Contact Us | Setudown" />

            {/* Hero Section – Dark ink with gold accent */}
            <section className="relative overflow-hidden bg-brand-ink py-24 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/10 via-brand-ink to-brand-ink" />
                <div className="relative mx-auto max-w-6xl px-6 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-gold"
                    >
                        Get in touch
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-4 font-serif text-5xl font-bold md:text-6xl"
                    >
                        Let's talk about your move
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto mt-4 max-w-3xl text-lg text-white/80"
                    >
                        Have questions about our services? We're here to help and guide you through your relocation journey.
                    </motion.p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-brand-cream py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
                        {/* Contact Form – 3 columns */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="lg:col-span-3"
                        >
                            <div className="rounded-2xl bg-white p-8 shadow-lg">
                                <h3 className="font-serif text-2xl font-semibold text-brand-ink">Send us a message</h3>
                                <p className="mt-1 text-sm text-brand-muted">We'll respond within 24 hours</p>

                                <form onSubmit={handleSubmit} className="mt-6 space-y-5">

                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-brand-text">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="mt-1 w-full rounded-lg border border-brand-cream-light bg-brand-cream-light/50 px-4 py-3 text-brand-ink placeholder:text-brand-muted/60 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                                            placeholder="Your full name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-brand-text">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="mt-1 w-full rounded-lg border border-brand-cream-light bg-brand-cream-light/50 px-4 py-3 text-brand-ink placeholder:text-brand-muted/60 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                                            placeholder="you@gmail.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-brand-text">
                                            Phone Number (WhatsApp)
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="mt-1 w-full rounded-lg border border-brand-cream-light bg-brand-cream-light/50 px-4 py-3 text-brand-ink placeholder:text-brand-muted/60 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                                            placeholder="+234 800 000 0000"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-brand-text">
                                            Service Needed <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="mt-1 w-full rounded-lg border border-brand-cream-light bg-brand-cream-light/50 px-4 py-3 text-brand-ink focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
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

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-brand-text">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="mt-1 w-full rounded-lg border border-brand-cream-light bg-brand-cream-light/50 px-4 py-3 text-brand-ink placeholder:text-brand-muted/60 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                                            placeholder="Tell us about your move..."
                                            required
                                        />
                                    </div>

                                    {/* Submit button with loading state */}
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={submitting}
                                        className={`w-full rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-6 py-3 font-semibold text-brand-ink shadow-sm transition-all hover:shadow-lg hover:shadow-brand-gold/30 ${
                                            submitting ? 'opacity-70 cursor-not-allowed' : ''
                                        }`}
                                    >
                                        {submitting ? 'Sending...' : 'Send Message'}
                                    </motion.button>

                                    {/* Submission result message */}
                                    {result && (
                                        <div
                                            className={`mt-4 rounded-lg p-3 text-sm ${
                                                result.success
                                                    ? 'bg-green-100 text-green-800 border border-green-300'
                                                    : 'bg-red-100 text-red-800 border border-red-300'
                                            }`}
                                        >
                                            {result.message}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Information – 2 columns */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerChildren}
                            className="lg:col-span-2 space-y-6"
                        >
                            <div>
                                <h3 className="font-serif text-2xl font-semibold text-brand-ink">Contact Information</h3>
                                <p className="mt-1 text-sm text-brand-muted">
                                    We're a digital-first relocation service, ready to assist you wherever you are.
                                </p>
                            </div>

                            {/* Contact cards */}
                            <motion.div variants={fadeIn} className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-cream-light text-brand-green">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-ink">Email</h4>
                                    <a href="mailto:inquiries@setudown.com" className="text-brand-muted hover:text-brand-green transition">
                                        inquiries@setudown.com
                                    </a>
                                    <p className="text-xs text-brand-muted/70">We respond within 24 hours</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeIn} className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-cream-light text-brand-green">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-ink">Call or WhatsApp</h4>
                                    <a href="tel:+2348165608778" className="text-brand-muted hover:text-brand-green transition">
                                        +234 816 560 8778
                                    </a>
                                    <p className="text-xs text-brand-muted/70">Mon–Fri, 8am – 6pm (WAT)</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeIn} className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-cream-light text-brand-green">
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-ink">Live Chat</h4>
                                    <a
                                        href="https://wa.me/2348165608778"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-brand-muted hover:text-brand-green transition"
                                    >
                                        Chat on WhatsApp
                                    </a>
                                    <p className="text-xs text-brand-muted/70">Instant replies</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeIn} className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-cream-light text-brand-green">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-ink">Response Time</h4>
                                    <p className="text-brand-muted">Within 24 hours for all inquiries</p>
                                </div>
                            </motion.div>

                            {/* Quick CTA to book a call */}
                            <motion.div
                                variants={fadeIn}
                                className="rounded-xl bg-gradient-to-r from-brand-ink to-brand-ink/90 p-6 text-white"
                            >
                                <h4 className="font-serif text-xl font-semibold">Prefer a virtual meeting?</h4>
                                <p className="mt-1 text-white/80 text-sm">
                                    Schedule a free 30‑minute discovery call at your convenience.
                                </p>
                                <a
                                    href="https://calendly.com/inquiries-setudown/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-5 py-2.5 font-semibold text-brand-ink transition hover:shadow-lg hover:shadow-brand-gold/30"
                                >
                                    Book a Call
                                    <ChevronRight size={16} />
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Optional quick FAQ strip – very short, just to answer common questions */}
            <section className="bg-brand-cream-light py-16 border-t border-brand-cream-light">
                <div className="mx-auto max-w-6xl px-6 text-center">
                    <h3 className="font-serif text-2xl font-semibold text-brand-ink">Quick answers</h3>
                    <p className="mt-1 text-brand-muted">Here are a few common questions we get</p>
                    <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
                        {[
                            {
                                q: 'How long does a relocation take?',
                                a: 'Domestic: 2–4 weeks. International: 4–8 weeks from planning to completion.',
                            },
                            {
                                q: 'Do you handle international moves?',
                                a: 'Yes, we specialise in both domestic and international relocations.',
                            },
                            {
                                q: 'Can you help with visa applications?',
                                a: 'We guide you and connect you with trusted immigration experts.',
                            },
                            {
                                q: 'What areas do you serve?',
                                a: 'Globally. Our digital-first approach allows us to assist clients anywhere.',
                            },
                        ].map((faq, idx) => (
                            <div key={idx} className="rounded-xl bg-white p-5 shadow-sm">
                                <h4 className="font-semibold text-brand-ink">{faq.q}</h4>
                                <p className="mt-1 text-sm text-brand-muted">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <Link
                            href="/faq"
                            className="inline-flex items-center gap-1.5 text-brand-green-deep font-medium hover:text-brand-green transition"
                        >
                            View all FAQs
                            <ChevronRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}