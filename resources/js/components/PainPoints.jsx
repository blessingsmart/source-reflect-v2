// resources/js/components/PainPoints.jsx
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { Check, ChevronRight } from 'lucide-react';

export default function PainPoints() {
    const advantages = [
        {
            text: 'One coordinator across every step — no chasing five different people.',
        },
        {
            text: 'A vetted partner network for visas & immigration — we guide, and connect you to trusted experts.',
        },
        {
            text: 'Local insight you can\'t Google — safe areas, real prices, and how not to get scammed.',
        },
        {
            text: 'Priced in Naira and US Dollars — built for locals and international clients alike.',
        },
    ];

    return (
        <section className="relative overflow-hidden bg-brand-ink py-20 text-white md:py-28">
            {/* Decorative glow */}
            <div className="absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-brand-gold/10 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-[560px] w-[560px] rounded-full bg-brand-green/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left column */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-gold">
                                The one-stop advantage
                            </span>
                            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
                                One trusted partner for the <em className="not-italic text-brand-gold-bright">whole</em> journey.
                            </h2>
                            <p className="mt-4 text-lg text-white/80">
                                Most people relocating juggle a visa agent, a mover, a landlord and a "where will I sleep when I land?"
                                problem — all separately, all strangers. Setudown brings it under one roof.
                            </p>
                        </motion.div>

                        {/* Advantages list */}
                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-8 space-y-4"
                        >
                            {advantages.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * (index + 1) }}
                                    className="flex gap-4 text-base text-white/90"
                                >
                                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/90">
                                        <Check size={14} strokeWidth={3} className="text-white" />
                                    </span>
                                    {item.text}
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Optional CTA link (can be removed if you prefer) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-10"
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 font-semibold text-brand-gold transition-colors hover:text-brand-gold-bright"
                            >
                                Start your stress‑free move
                                <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right column – Quote panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex items-center"
                    >
                        <div className="w-full rounded-2xl border border-brand-gold/25 bg-white/5 p-8 backdrop-blur-sm md:p-10">
                            <div className="font-serif text-6xl leading-none text-brand-gold">“</div>
                            <blockquote className="mt-2 font-serif text-2xl font-medium italic leading-relaxed text-white md:text-3xl">
                                You can Google everything and still get everything wrong. We help you get it right the first time.
                            </blockquote>
                            <div className="mt-6">
                                <p className="font-semibold text-brand-gold-bright">The Setudown promise</p>
                                <p className="text-sm text-white/60">Relocation &amp; settlement concierge</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}