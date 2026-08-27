// resources/js/components/DirectionSelector.jsx
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { Plane, Globe, Truck, ChevronRight } from 'lucide-react';

const directions = [
    {
        title: 'Moving Abroad — "Japa"',
        icon: <Plane size={28} className="text-brand-green-deep" strokeWidth={1.8} />,
        subtitle: 'Study, Work, PR, Family',
        description:
            'Relocating from Nigeria to the UK, Canada, US, Australia, the Gulf or Europe for work, study, PR or family.',
        chips: ['Pre-departure planning', 'Proof-of-funds guidance', 'Accommodation abroad', 'Trusted visa partners'],
        href: '/moving-abroad',
        linkText: 'Plan my move abroad',
    },
    {
        title: 'Moving to Nigeria',
        icon: <Globe size={28} className="text-brand-green-deep" strokeWidth={1.8} />,
        subtitle: 'Expats, Returnees, Corporate',
        description:
            'For expats, corporate postings, diaspora returnees and NGO staff arriving in Nigeria — settled in smoothly, without the guesswork.',
        chips: ['Housing & schools', 'Cultural orientation', 'Safety & security', 'NIN · bank · ID setup'],
        href: '/moving-to-nigeria',
        linkText: 'Help me settle in Nigeria',
    },
    {
        title: 'Moving Within Nigeria',
        icon: <Truck size={28} className="text-brand-green-deep" strokeWidth={1.8} />,
        subtitle: 'City to City Relocation',
        description:
            'Relocating between cities — Lagos, Abuja, Port Harcourt, Ibadan — or moving your home or office across town, done right.',
        chips: ['Home & office moves', 'New-city orientation', 'Housing search', 'Utility & school setup'],
        href: '/moving-within-nigeria',
        linkText: 'Move me within Nigeria',
    },
];

export default function DirectionSelector() {
    return (
        <section id="directions" className="bg-brand-cream py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto mb-12 max-w-3xl text-center"
                >
                    <h2 className="font-serif text-4xl font-bold text-brand-ink md:text-5xl">
                        Where are you moving?
                    </h2>
                    <p className="mt-4 text-lg text-brand-muted">
                        Choose the direction that matches your relocation journey and let Setudown guide every step with care and clarity.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid gap-6 md:grid-cols-3">
                    {directions.map((direction, index) => (
                        <motion.div
                            key={direction.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-lg transition-shadow hover:shadow-xl border border-brand-cream-light"
                        >
                            {/* Top accent line */}
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-green to-brand-gold" />

                            <div className="flex items-start gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-cream-light text-brand-green-deep">
                                    {direction.icon}
                                </div>
                                <div>
                                    <h3 className="font-serif text-2xl font-semibold text-brand-ink">
                                        {direction.title}
                                    </h3>
                                    <p className="text-sm font-medium text-brand-green">
                                        {direction.subtitle}
                                    </p>
                                </div>
                            </div>

                            <p className="mt-4 text-brand-text/80 leading-relaxed">
                                {direction.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {direction.chips.map((chip) => (
                                    <span
                                        key={chip}
                                        className="rounded-full bg-brand-cream-light px-3 py-1 text-xs font-medium text-brand-muted"
                                    >
                                        {chip}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 flex justify-end">
                                <Link
                                    href={direction.href}
                                    className="inline-flex items-center gap-1.5 font-semibold text-brand-green-deep transition-colors hover:text-brand-green group/link"
                                >
                                    {direction.linkText}
                                    <ChevronRight
                                        size={18}
                                        className="transition-transform duration-200 group-hover/link:translate-x-1"
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Corporate Band */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 overflow-hidden rounded-2xl bg-brand-ink shadow-xl relative"
                >
                    {/* Gold left border */}
                    <div className="absolute left-0 top-0 h-full w-1.5 bg-brand-gold" />

                    <div className="flex flex-wrap items-center justify-between gap-6 p-8 md:p-10">
                        <div className="flex-1">
                            <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                                Across all three · For organisations
                            </p>
                            <h3 className="mt-1 font-serif text-2xl font-bold text-white md:text-3xl">
                                Corporate &amp; Team Relocation
                            </h3>
                            <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
                                For HR teams, NGOs and multinationals moving staff in any direction — bulk relocation, corporate housing,
                                a dedicated liaison and full employee &amp; family support.
                            </p>
                        </div>
                        <Link
                            href="/corporate"
                            className="inline-flex shrink-0 items-center rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-6 py-3 font-semibold text-brand-ink transition-all hover:shadow-lg hover:shadow-brand-gold/20"
                        >
                            Talk to our corporate team
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}