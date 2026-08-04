// resources/js/pages/MovingToNigeria.jsx
import GuestLayout from '@/layouts/guest-layout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Globe, Home, School, Shield, Landmark, Users, ArrowRight, Check, ChevronRight, Building2 } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.15 } },
};

export default function MovingToNigeria() {
    const features = [
        {
            icon: <Home size={24} />,
            title: 'Housing & neighbourhood search',
            desc: 'We find you safe, suitable accommodation – from short-term serviced apartments to long-term family homes.',
        },
        {
            icon: <School size={24} />,
            title: 'School search & placement',
            desc: 'We help you find the right school for your children – international, local, or boarding – based on your preferences.',
        },
        {
            icon: <Shield size={24} />,
            title: 'Safety & security briefing',
            desc: 'We give you practical advice on staying safe, understanding local security dynamics, and avoiding common pitfalls.',
        },
        {
            icon: <Landmark size={24} />,
            title: 'Admin & documentation support',
            desc: 'We guide you through getting your NIN, opening a bank account, SIM registration, and other essential paperwork.',
        },
        {
            icon: <Globe size={24} />,
            title: 'Cultural orientation',
            desc: 'We help you understand Nigerian social norms, business etiquette, and daily life – so you integrate smoothly.',
        },
        {
            icon: <Building2 size={24} />,
            title: 'Corporate & expatriate support',
            desc: 'We coordinate with HR teams to handle bulk employee relocations, family arrivals, and ongoing support.',
        },
    ];

    const steps = [
        'Book a free discovery call – tell us about your move, your family, and your timeline.',
        'We create a personalised relocation plan – housing, schools, admin, cultural orientation.',
        'We coordinate everything – from airport pickup to housing tours to school visits.',
        'You arrive in Nigeria and start your new life – we ensure a smooth transition.',
    ];

    const faqs = [
        {
            q: 'Do I need to be a foreigner to use this service?',
            a: 'Not at all. We support everyone moving to Nigeria – expats, diaspora returnees, and even Nigerians moving back after years abroad.',
        },
        {
            q: 'Can you help with visa and work permit?',
            a: 'We provide guidance on requirements and connect you with trusted immigration lawyers who specialise in Nigerian visas and permits.',
        },
        {
            q: 'What cities do you cover?',
            a: 'We primarily cover Lagos, Abuja, and Port Harcourt. We can also assist in other cities on request.',
        },
        {
            q: 'How much does it cost to settle in Nigeria?',
            a: 'We provide transparent packages starting from $250 for basic support, and customised plans for families and corporate relocations.',
        },
    ];

    return (
        <GuestLayout>
            <Head title="Moving to Nigeria – Expat & Returnee Relocation | Setudown" />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-brand-ink py-24 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/10 via-brand-ink to-brand-ink" />
                <div className="relative mx-auto max-w-6xl px-6 text-center">
                    {/* <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-gold"
                    >
                        Direction 02
                    </motion.span> */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-4 font-serif text-5xl font-bold md:text-6xl"
                    >
                        Moving to Nigeria – <span className="text-brand-gold-bright">Settle In With Confidence</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto mt-4 max-w-3xl text-lg text-white/80"
                    >
                        For expats, corporate postings, diaspora returnees and NGO staff arriving in Nigeria – we handle the details so you can focus on settling in and thriving.
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
                            Plan Your Move to Nigeria
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
                            Everything you need to settle into Nigeria
                        </h2>
                        <p className="mt-3 text-lg text-brand-muted">
                            From housing to paperwork to cultural know‑how – we make your transition seamless.
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

            {/* How It Works (inbound-specific) */}
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
                            How we settle you into Nigeria
                        </h2>
                        <p className="mt-3 text-lg text-brand-muted">
                            A clear process that takes you from "where do I start?" to "I feel at home."
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
                            Start Your Nigerian Settlement
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Setudown for Moving to Nigeria */}
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
                                Your trusted partner for <span className="text-brand-gold-bright">settling into Nigeria</span>
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex gap-3">
                                    <Check size={20} className="mt-0.5 shrink-0 text-brand-green" strokeWidth={2.5} />
                                    <span className="text-brand-text/80">We have deep local knowledge – we know the safe areas, the schools, and the reliable vendors.</span>
                                </li>
                                <li className="flex gap-3">
                                    <Check size={20} className="mt-0.5 shrink-0 text-brand-green" strokeWidth={2.5} />
                                    <span className="text-brand-text/80">We vet every accommodation and service provider – no scams, no disappointments.</span>
                                </li>
                                <li className="flex gap-3">
                                    <Check size={20} className="mt-0.5 shrink-0 text-brand-green" strokeWidth={2.5} />
                                    <span className="text-brand-text/80">We guide you through the administrative maze – NIN, bank, SIM, all done without headaches.</span>
                                </li>
                                <li className="flex gap-3">
                                    <Check size={20} className="mt-0.5 shrink-0 text-brand-green" strokeWidth={2.5} />
                                    <span className="text-brand-text/80">We offer cultural orientation – so you avoid embarrassing mistakes and integrate with ease.</span>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1 text-brand-green-deep font-semibold hover:text-brand-green transition"
                                >
                                    Ready to settle into Nigeria?
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
                                You can Google everything and still get everything wrong. We help you get it right the first time – from finding a home to understanding the culture.
                            </blockquote>
                            <div className="mt-4">
                                <p className="font-semibold text-brand-gold-bright">The Setudown promise</p>
                                <p className="text-sm text-brand-muted">Relocation &amp; settlement concierge</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ for Moving to Nigeria */}
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
                            Moving to Nigeria – FAQ
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
                        Ready to <span className="text-brand-gold-bright">settle in Nigeria</span> without the stress?
                    </h2>
                    <p className="mt-3 text-white/80">
                        Book a free 30‑minute consultation. We'll walk you through your move, answer your questions, and show you how we make it happen.
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