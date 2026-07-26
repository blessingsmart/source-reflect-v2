// resources/js/components/Testimonials.jsx
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: 'Tunde A.',
        role: 'Relocated to Canada',
        message: '"I was drowning in proof-of-funds and \'where will I stay in Toronto\' stress. Setudown lined up everything — I landed and just started my life."',
        rating: 5,
        badge: 'Moved abroad',
        badgeColor: 'bg-blue-100 text-blue-700',
        initials: 'TA',
    },
    {
        id: 2,
        name: 'John M.',
        role: 'Shell Nigeria expat',
        message: '"Everything from school tours to security orientation was handled. As an expat arriving in Lagos, it was worth every dollar."',
        rating: 5,
        badge: 'Moved to Nigeria',
        badgeColor: 'bg-brand-green/10 text-brand-green-deep',
        initials: 'JM',
    },
    {
        id: 3,
        name: 'Chiamaka O.',
        role: 'Family move · Ibadan → Lagos',
        message: '"We relocated the whole family from Ibadan to Lagos in two weeks — new home, schools sorted, no drama. I\'ll never move any other way."',
        rating: 5,
        badge: 'Moved locally',
        badgeColor: 'bg-brand-gold/20 text-yellow-800',
        initials: 'CO',
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="bg-brand-cream-light py-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green">
                        Real journeys
                    </span>
                    <h2 className="mt-2 font-serif text-4xl font-bold text-brand-ink md:text-5xl">
                        They moved. We handled the rest.
                    </h2>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Badge */}
                            <span className={`absolute right-6 top-6 rounded-full px-3 py-1 text-xs font-medium ${t.badgeColor}`}>
                                {t.badge}
                            </span>

                            {/* Stars */}
                            <div className="mb-4 flex gap-0.5 text-brand-gold">
                                {[...Array(t.rating)].map((_, i) => (
                                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Message */}
                            <p className="mb-6 text-sm leading-relaxed text-brand-text/80">
                                {t.message}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-green-deep font-serif font-bold text-white">
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="font-semibold text-brand-ink">{t.name}</p>
                                    <p className="text-xs text-brand-muted">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-14 text-center"
                >
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <a
                            href="https://wa.me/2348165608778"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-8 py-3 font-semibold text-brand-ink transition-all hover:shadow-lg hover:shadow-brand-gold/30"
                        >
                            Read More Reviews
                        </a>
                        <a
                            href="https://wa.me/2348165608778"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-brand-green/40 px-8 py-3 font-semibold text-brand-green-deep transition-all hover:bg-brand-green hover:text-white"
                        >
                            Share Your Story
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}