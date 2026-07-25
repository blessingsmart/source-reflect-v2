import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

const articles = [
    {
        title: 'Relocation checklists for every move',
        excerpt: 'Practical planning steps for moving abroad, moving to Nigeria, or moving within the country.',
        href: '/blog',
    },
    {
        title: 'How to settle in faster, wherever you go',
        excerpt: 'Local orientation, housing setup and community support that reduce stress from day one.',
        href: '/blog',
    },
    {
        title: 'Managing employee moves with confidence',
        excerpt: 'Corporate relocation support for domestic transfers, inbound arrivals and outbound assignments.',
        href: '/blog',
    },
];

export default function BlogPreview() {
    return (
        <section id="blog-preview" className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">Relocation insights for every move.</h2>
                    <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
                        Guides, relocation tips, destination advice and expert insights to help you move with confidence.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-lg"
                        >
                            <h3 className="text-2xl font-semibold text-gray-900">{article.title}</h3>
                            <p className="mt-4 text-gray-700">{article.excerpt}</p>
                            <div className="mt-8">
                                <Link
                                    href={article.href}
                                    className="inline-flex items-center font-semibold text-green-600 transition hover:text-green-700"
                                >
                                    Read more
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
