// resources/js/components/ContactForm.jsx
import { motion } from 'framer-motion';

export default function ContactForm() {
    return (
        <section id="contact" className="relative overflow-hidden bg-brand-ink py-20 text-white">
            {/* Decorative glow */}
            <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-brand-gold/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-gold">
                        Let's talk about your move
                    </span>
                    <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">
                        Ready to <em className="not-italic text-brand-gold-bright">settle down</em> — wherever you're going?
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                        Book a free 30‑minute discovery call. We'll walk you through what to expect, how much it costs, and how to get started. No obligation.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="https://wa.me/2348165608778"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-8 py-3.5 font-semibold text-brand-ink transition-all hover:shadow-lg hover:shadow-brand-gold/30"
                        >
                            Chat on WhatsApp
                        </a>
                        <a
                            href="tel:+2348165608778"
                            className="inline-flex items-center rounded-full border border-white/30 px-8 py-3.5 font-semibold text-white transition-all hover:bg-white hover:text-brand-ink"
                        >
                            Call +234 816 560 8778
                        </a>
                    </div>

                    <p className="mt-6 text-sm text-white/50">
                        No obligation · 30‑minute consultation · Personalised advice for your direction
                    </p>
                </motion.div>
            </div>
        </section>
    );
}