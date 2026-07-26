// resources/js/components/Packages.jsx
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Basic',
        priceUSD: '$250–$500',
        priceNGN: '≈ ₦400k – ₦800k',
        features: [
            'Airport pickup',
            'SIM card + local number',
            'Orientation guide',
        ],
        isPopular: false,
        ctaText: 'Get Started',
        ctaLink: '/contact',
    },
    {
        name: 'Standard',
        priceUSD: '$800–$1,500',
        priceNGN: '≈ ₦1.3m – ₦2.4m',
        features: [
            'Everything in Basic',
            'Short & long-term housing',
            'School search & placement',
            'Local tour + utility setup',
        ],
        isPopular: true,
        ctaText: 'Get Started',
        ctaLink: '/contact',
    },
    {
        name: 'Premium',
        priceUSD: '$2,000–$4,000',
        priceNGN: '≈ ₦3.2m – ₦6.4m',
        features: [
            'Everything in Standard',
            'Admin help (NIN, bank, ID)',
            'Dedicated relocation rep',
            'Custom safety briefing',
        ],
        isPopular: false,
        ctaText: 'Get Started',
        ctaLink: '/contact',
    },
    {
        name: 'Corporate',
        priceUSD: 'Custom',
        priceNGN: 'For HR teams, NGOs & multinationals',
        features: [
            'Bulk & group relocation',
            'Corporate housing',
            'Dedicated liaison',
            'Visa extension guidance',
        ],
        isPopular: false,
        ctaText: 'Request Pricing',
        ctaLink: '/contact',
    },
];

export default function Packages() {
    return (
        <section id="packages" className="bg-brand-cream py-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green">
                        Transparent packages
                    </span>
                    <h2 className="mt-2 font-serif text-4xl font-bold text-brand-ink md:text-5xl">
                        One price. Everything covered.
                    </h2>
                    <p className="mt-3 text-lg text-brand-muted">
                        Clear, all-in packages in Naira and Dollars — or build your own around exactly what you need.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col rounded-2xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl ${
                                plan.isPopular
                                    ? 'border-2 border-brand-green shadow-lg shadow-brand-green/20'
                                    : 'border border-brand-cream-light'
                            }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-4 py-1 text-xs font-bold uppercase text-brand-ink shadow-sm">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-green">
                                {plan.name}
                            </div>

                            <div className="font-serif text-3xl font-bold text-brand-ink">
                                {plan.priceUSD}
                            </div>
                            <div className="mt-0.5 text-sm text-brand-muted">
                                {plan.priceNGN}
                            </div>

                            <ul className="mt-6 flex-1 space-y-3">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-sm text-brand-text/80">
                                        <Check size={18} className="mt-0.5 shrink-0 text-brand-green" strokeWidth={2.5} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={plan.ctaLink}
                                className={`mt-8 w-full rounded-full py-3 text-center font-semibold transition-all ${
                                    plan.isPopular
                                        ? 'bg-gradient-to-r from-brand-gold-bright to-brand-gold text-brand-ink hover:shadow-lg hover:shadow-brand-gold/30'
                                        : 'border border-brand-green/40 text-brand-green-deep hover:bg-brand-green hover:text-white'
                                }`}
                            >
                                {plan.ctaText}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 text-center text-sm text-brand-muted"
                >
                    Naira figures are indicative and adjust with exchange rate. Not sure which fits?{' '}
                    <Link href="/contact" className="font-semibold text-brand-green-deep hover:underline">
                        Build your own package →
                    </Link>
                </motion.p>
            </div>
        </section>
    );
}