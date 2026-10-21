import GuestLayout from '@/layouts/guest-layout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Plane, Home, FileCheck, Building2, Users, ShieldCheck, ArrowRight, Check, ChevronRight } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.15 } },
};

export default function MovingAbroad() {
    const features = [
        {
            icon: <Plane size={24} />,
            title: 'Pre-departure planning',
            desc: 'We help you map every step – from deciding your destination to the day you board the flight.',
        },
        {
            icon: <FileCheck size={24} />,
            title: 'Proof-of-funds & documentation',
            desc: 'Guidance on preparing financial statements, proof of funds, and all paperwork required for your visa application.',
        },
        {
            icon: <Building2 size={24} />,
            title: 'Accommodation abroad',
            desc: 'We find you a safe, comfortable place to live before you land – short or long-term, we vet and confirm.',
        },
        {
            icon: <ShieldCheck size={24} />,
            title: 'Trusted visa partner network',
            desc: 'We don\'t file visas ourselves, but we connect you with verified immigration experts and study agents.',
        },
        {
            icon: <Users size={24} />,
            title: 'Settling-in support',
            desc: 'Airport pickup, orientation, bank and SIM setup, and community introductions – so you land and start living.',
        },
    ];

    const steps = [
        'Book a free discovery call – tell us about your plans and timeline.',
        'We create a personalised relocation roadmap and recommend trusted visa partners.',
        'We coordinate your accommodation, documentation, and pre‑departure checklist.',
        'You arrive at your new home abroad – we handle the rest, so you can settle in stress‑free.',
    ];

    const faqs = [
        {
            q: 'Do you handle visa applications directly?',
            a: 'We don\'t file visas ourselves, but we provide expert guidance and connect you with a vetted network of immigration lawyers and study agents.',
        },
        {
            q: 'Which countries do you support for moving abroad?',
            a: 'We support relocations to the UK, Canada, US, Australia, Europe, the Gulf states, and more. If you have a destination in mind, we\'ll help you get there.',
        },
        {
            q: 'How much does it cost to move abroad with Setudown?',
            a: 'Packages start from around $250 for basic support, up to custom corporate or premium plans. We build a plan that fits your budget and needs.',
        },
        {
            q: 'How long does the whole process take?',
            a: 'Timelines vary by destination, but we recommend starting at least 3–6 months before your intended departure date. We\'ll work backwards from your target date to ensure everything is on track.',
        },
    ];

    return (
        <GuestLayout>
            <Head title="Moving Abroad – Japa Support | Setudown" />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-brand-ink py-24 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/10 via-brand-ink to-brand-ink" />
                <div className="relative mx-auto max-w-6xl px-6 text-center">
                    {/* <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-gold"
                    >
                        Direction 01
                    </motion.span> */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-4 font-serif text-5xl font-bold md:text-6xl"
                    >
                        Moving Abroad — Your <span className="text-brand-gold-bright">"Japa"</span> Journey Starts Here
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto mt-4 max-w-3xl text-lg text-white/80"
                    >
                        Relocating from Nigeria to the UK, Canada, US, Australia, the Gulf or Europe – for work, study, PR or family. We handle the details so you can focus on your future.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-6 py-3 font-semibold text-brand-ink transition hover:shadow-lg hover:shadow-brand-gold/30"
                        >
                            Start Your Move Abroad
                        </Link>
                        <a
                            href="#how-it-works"
                            className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-brand-ink"
                        >
                            See How We Help
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="bg-brand-cream py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mb-16 text-center"
                    >
                        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green">
                            Our support
                        </span>
                        <h2 className="mt-2 font-serif text-4xl font-bold text-brand-ink md:text-5xl">
                            Everything you need for a smooth move abroad
                        </h2>
                        <p className="mt-3 text-lg text-brand-muted">
                            We don't just help you get there – we help you thrive once you arrive.
                        </p>
                    </motion.div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cream-light text-brand-green-deep transition-colors group-hover:bg-brand-green group-hover:text-white">
                                    {feature.icon}
                                </div>
                                <h3 className="font-serif text-xl font-semibold text-brand-ink">{feature.title}</h3>
                                <p className="mt-2 text-sm text-brand-muted leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works (abroad-specific) */}
            <section id="how-it-works" className="bg-white py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mb-16 text-center"
                    >
                        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green">
                            Your roadmap
                        </span>
                        <h2 className="mt-2 font-serif text-4xl font-bold text-brand-ink md:text-5xl">
                            How we guide your move abroad
                        </h2>
                        <p className="mt-3 text-lg text-brand-muted">
                            A clear, step‑by‑step process that takes you from "thinking about it" to "I’ve arrived."
                        </p>
                    </motion.div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group rounded-2xl bg-brand-cream-light p-6 shadow-sm transition hover:shadow-md"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green text-white font-serif text-xl font-bold">
                                    {index + 1}
                                </div>
                                <p className="text-brand-text/80 text-sm leading-relaxed">{step}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-6 py-3 font-semibold text-brand-ink transition hover:shadow-lg hover:shadow-brand-gold/30"
                        >
                            Start Your Roadmap
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Setudown for Moving Abroad */}
            <section className="bg-brand-cream-light py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-gold">
                                Why choose us
                            </span>
                            <h2 className="mt-2 font-serif text-4xl font-bold text-brand-ink md:text-5xl">
                                Your one‑stop partner for <span className="text-brand-gold-bright">japa</span> success
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex gap-3">
                                    <Check size={20} className="mt-0.5 shrink-0 text-brand-green" strokeWidth={2.5} />
                                    <span className="text-brand-text/80">We coordinate all the moving parts – you don't juggle five different providers.</span>
                                </li>
                                <li className="flex gap-3">
                                    <Check size={20} className="mt-0.5 shrink-0 text-brand-green" strokeWidth={2.5} />
                                    <span className="text-brand-text/80">We connect you with trusted visa experts (not fly‑by‑night agents).</span>
                                </li>
                                <li className="flex gap-3">
                                    <Check size={20} className="mt-0.5 shrink-0 text-brand-green" strokeWidth={2.5} />
                                    <span className="text-brand-text/80">We secure your accommodation abroad – so you have a roof before you land.</span>
                                </li>
                                <li className="flex gap-3">
                                    <Check size={20} className="mt-0.5 shrink-0 text-brand-green" strokeWidth={2.5} />
                                    <span className="text-brand-text/80">We help you settle – from airport pickup to opening a bank account.</span>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1 text-brand-green-deep font-semibold hover:text-brand-green transition"
                                >
                                    Ready to start your japa journey?
                                    <ChevronRight size={18} />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-2xl border border-brand-gold/25 bg-white p-8 shadow-md"
                        >
                            <div className="font-serif text-5xl leading-none text-brand-gold">“</div>
                            <blockquote className="mt-2 font-serif text-xl italic leading-relaxed text-brand-ink">
                                You can Google everything and still get everything wrong. We help you get it right the first time – whether you're moving to Canada, the UK or anywhere else.
                            </blockquote>
                            <div className="mt-4">
                                <p className="font-semibold text-brand-gold-bright">The Setudown promise</p>
                                <p className="text-sm text-brand-muted">Relocation &amp; settlement concierge</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ for Moving Abroad */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-4xl px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mb-12 text-center"
                    >
                        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green">
                            Common questions
                        </span>
                        <h2 className="mt-2 font-serif text-4xl font-bold text-brand-ink">
                            Moving abroad – FAQ
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="rounded-xl border border-brand-cream-light bg-brand-cream/30 p-5"
                            >
                                <h4 className="font-semibold text-brand-ink">{faq.q}</h4>
                                <p className="mt-1 text-sm text-brand-muted">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full border border-brand-green/40 px-6 py-3 font-semibold text-brand-green-deep transition hover:bg-brand-green hover:text-white"
                        >
                            Still have questions? Ask us
                            <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Band */}
            <section className="relative overflow-hidden bg-brand-ink py-16 text-white">
                <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />
                <div className="relative mx-auto max-w-4xl px-6 text-center">
                    <h2 className="font-serif text-3xl font-bold md:text-4xl">
                        Ready to <span className="text-brand-gold-bright">japa</span> with confidence?
                    </h2>
                    <p className="mt-3 text-white/80">
                        Book a free 30‑minute consultation. We'll map out your move, discuss costs, and show you how we make it happen.
                    </p>
                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-8 py-3 font-semibold text-brand-ink transition hover:shadow-lg hover:shadow-brand-gold/30"
                        >
                            Book Free Discovery Call
                        </Link>
                        <a
                            href="https://wa.me/2348165608778"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-brand-ink"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-white/40">No obligation · Personalised advice · We respond within 24 hours</p>
                </div>
            </section>
        </GuestLayout>
    );
}