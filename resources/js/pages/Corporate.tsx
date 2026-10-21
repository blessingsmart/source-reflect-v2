import GuestLayout from '@/layouts/guest-layout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Building2, Users, Briefcase, Shield, Globe, Clock, ArrowRight, Check, ChevronRight, Phone } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.15 } },
};

export default function Corporate() {
    const features = [
        {
            icon: <Users size={24} />,
            title: 'Bulk & group relocation',
            desc: 'We handle multiple employee moves simultaneously – domestic, inbound, or outbound – with a single point of coordination.',
        },
        {
            icon: <Building2 size={24} />,
            title: 'Corporate housing',
            desc: 'We secure quality accommodation for your staff – short-term serviced apartments or long-term family homes, fully vetted.',
        },
        {
            icon: <Briefcase size={24} />,
            title: 'Dedicated liaison',
            desc: 'Your dedicated account manager coordinates every aspect – from visa guidance to settling‑in, with regular updates.',
        },
        {
            icon: <Shield size={24} />,
            title: 'Employee & family support',
            desc: 'We support not just your employee, but their family – school search, cultural orientation, and integration assistance.',
        },
        {
            icon: <Globe size={24} />,
            title: 'Global mobility expertise',
            desc: 'We understand cross‑border relocations – tax implications, compliance, and local regulations in every destination.',
        },
        {
            icon: <Clock size={24} />,
            title: 'Flexible & scalable solutions',
            desc: 'From one‑off moves to ongoing talent mobility programs – we scale to match your team\'s growth.',
        },
    ];

    const steps = [
        'Connect with our corporate team – share your relocation needs and staff profile.',
        'We design a tailored program – timeline, budget, and a dedicated liaison.',
        'We handle every move – from pre‑departure to settling‑in for your employees.',
        'Your staff arrive, settle in, and stay productive – while you focus on your business.',
    ];

    const faqs = [
        {
            q: 'How does corporate pricing work?',
            a: 'We offer custom pricing based on volume, destinations, and service scope. Contact our corporate team for a no‑obligation quote.',
        },
        {
            q: 'Can you handle moves for NGOs and nonprofits?',
            a: 'Absolutely. We work with NGOs, international organisations, and nonprofits – we understand their specific needs and budget considerations.',
        },
        {
            q: 'What happens if an employee needs urgent support?',
            a: 'Your dedicated liaison is on standby 24/7. We handle emergencies – from last‑minute accommodation changes to security advice.',
        },
        {
            q: 'Do you offer a single point of contact for all moves?',
            a: 'Yes. Your account manager coordinates everything across all three directions – providing a seamless experience for your HR team.',
        },
    ];

    return (
        <GuestLayout>
            <Head title="Corporate Relocation Services – For HR & Teams | Setudown" />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-brand-ink py-24 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/10 via-brand-ink to-brand-ink" />
                <div className="relative mx-auto max-w-6xl px-6 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-gold"
                    >
                        For Organisations
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-4 font-serif text-5xl font-bold md:text-6xl"
                    >
                        Corporate Relocation – <span className="text-brand-gold-bright">Move Your People, Protect Your Business</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto mt-4 max-w-3xl text-lg text-white/80"
                    >
                        For HR teams, NGOs, multinationals, and organisations moving staff in any direction – we deliver seamless, compliant, people‑first relocation solutions.
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
                            Talk to Our Corporate Team
                        </Link>
                        <a
                            href="#how-it-works"
                            className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-brand-ink"
                        >
                            See Our Process
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
                            Corporate solutions
                        </span>
                        <h2 className="mt-2 font-serif text-4xl font-bold text-brand-ink md:text-5xl">
                            Comprehensive relocation for your workforce
                        </h2>
                        <p className="mt-3 text-lg text-brand-muted">
                            We handle the complexity so your employees can focus on their work – and your HR team can focus on strategy.
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

            {/* How It Works (corporate-specific) */}
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
                            Our process
                        </span>
                        <h2 className="mt-2 font-serif text-4xl font-bold text-brand-ink md:text-5xl">
                            How we deliver corporate relocation
                        </h2>
                        <p className="mt-3 text-lg text-brand-muted">
                            A proven, efficient process that ensures your employees and their families settle in smoothly.
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
                            Start Your Corporate Program
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Setudown for Corporate */}
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
                                Your trusted partner for <span className="text-brand-gold-bright">global mobility</span>
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex gap-3">
                                    <Check size={20} className="mt-0.5 shrink-0 text-brand-green" strokeWidth={2.5} />
                                    <span className="text-brand-text/80">We handle all three directions – outbound, inbound, and domestic – so you have one partner for every move.</span>
                                </li>
                                <li className="flex gap-3">
                                    <Check size={20} className="mt-0.5 shrink-0 text-brand-green" strokeWidth={2.5} />
                                    <span className="text-brand-text/80">We offer a dedicated account manager – a single point of contact for your HR team.</span>
                                </li>
                                <li className="flex gap-3">
                                    <Check size={20} className="mt-0.5 shrink-0 text-brand-green" strokeWidth={2.5} />
                                    <span className="text-brand-text/80">We vet every vendor – housing, schools, movers, immigration partners – to protect your people.</span>
                                </li>
                                <li className="flex gap-3">
                                    <Check size={20} className="mt-0.5 shrink-0 text-brand-green" strokeWidth={2.5} />
                                    <span className="text-brand-text/80">We provide 24/7 support – your employees can reach us anytime, anywhere.</span>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1 text-brand-green-deep font-semibold hover:text-brand-green transition"
                                >
                                    Let's design your program
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
                                We handle the details so your people can settle in and start contributing – from day one.
                            </blockquote>
                            <div className="mt-4">
                                <p className="font-semibold text-brand-gold-bright">The Setudown corporate promise</p>
                                <p className="text-sm text-brand-muted">People‑first relocation solutions</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ for Corporate */}
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
                            Corporate relocation – FAQ
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
                            Talk to our corporate team
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
                        Ready to <span className="text-brand-gold-bright">move your people</span> without the headaches?
                    </h2>
                    <p className="mt-3 text-white/80">
                        Book a free consultation with our corporate team. We'll design a tailored relocation program for your organisation.
                    </p>
                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-8 py-3 font-semibold text-brand-ink transition hover:shadow-lg hover:shadow-brand-gold/30"
                        >
                            Book Free Consultation
                        </Link>
                        <a
                            href="tel:+2348165608778"
                            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-brand-ink"
                        >
                            <Phone size={18} />
                            Call +234 816 560 8778
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-white/40">No obligation · Custom quotes · We respond within 24 hours</p>
                </div>
            </section>
        </GuestLayout>
    );
}