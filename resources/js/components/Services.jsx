import { motion } from 'framer-motion';
import {
    Home,
    Building2,
    Package,
    Plane,
    FileText,
    Users,
} from 'lucide-react';

const services = [
    {
        icon: <Home size={26} strokeWidth={1.8} />,
        title: 'Relocation assistance',
        description: 'End-to-end support for individuals and families relocating locally or internationally — from planning to arrival.',
        tag: 'All directions',
        tagColor: 'bg-brand-green/10 text-brand-green-deep',
    },
    {
        icon: <Building2 size={26} strokeWidth={1.8} />,
        title: 'Accommodation & housing',
        description: 'Securing safe, suitable, affordable housing — property search, neighbourhood analysis and lease negotiation.',
        tag: 'All directions',
        tagColor: 'bg-brand-green/10 text-brand-green-deep',
    },
    {
        icon: <Package size={26} strokeWidth={1.8} />,
        title: 'Logistics & setup',
        description: 'Moving your effects, connecting utilities, furniture and getting your new home fully move-in ready.',
        tag: 'Local & inbound',
        tagColor: 'bg-brand-gold/20 text-brand-gold-dark',
    },
    {
        icon: <Plane size={26} strokeWidth={1.8} />,
        title: 'Japa & abroad support',
        description: 'Pre-departure planning, proof-of-funds preparation, accommodation abroad and a trusted-partner network for visas.',
        tag: 'Moving abroad',
        tagColor: 'bg-blue-100 text-blue-700',
    },
    {
        icon: <FileText size={26} strokeWidth={1.8} />,
        title: 'Advisory & documentation',
        description: 'Guidance on cultural integration, admin and settlement — NIN, bank setup, IDs and local requirements.',
        tag: 'Inbound & abroad',
        tagColor: 'bg-purple-100 text-purple-700',
    },
    {
        icon: <Users size={26} strokeWidth={1.8} />,
        title: 'Corporate & expatriate',
        description: 'Custom solutions for businesses relocating staff across borders — group moves, family support and ongoing care.',
        tag: 'For organisations',
        tagColor: 'bg-orange-100 text-orange-700',
    },
];

export default function Services() {
    return (
        <section className="bg-brand-cream-light py-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green">
                        What we do
                    </span>
                    <h2 className="mt-2 font-serif text-4xl font-bold text-brand-ink md:text-5xl">
                        End-to-end relocation &amp; settlement
                    </h2>
                    <p className="mt-3 text-lg text-brand-muted">
                        The same white-glove service, whether you're leaving Nigeria, arriving in it, or moving across it.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cream-light text-brand-green-deep transition-colors group-hover:bg-brand-green group-hover:text-white">
                                {service.icon}
                            </div>
                            <h3 className="font-serif text-xl font-semibold text-brand-ink">
                                {service.title}
                            </h3>
                            <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                                {service.description}
                            </p>
                            <span className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-medium ${service.tagColor}`}>
                                {service.tag}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}