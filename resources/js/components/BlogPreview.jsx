// resources/js/components/BlogPreview.jsx
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

const articles = [
    {
        title: 'How to Japa from Nigeria in 2026: the complete guide',
        excerpt: 'Every step from decision to departure — routes, documents, timelines and what to sort before you fly.',
        tag: 'Moving abroad',
        tagColor: 'bg-blue-100 text-blue-700',
        href: '/blog/how-to-japa-from-nigeria',
    },
    {
        title: 'What it really costs to relocate to Canada from Nigeria',
        excerpt: 'A clear, current breakdown of visas, proof of funds, flights and settling-in — no surprises.',
        tag: 'Cost guide',
        tagColor: 'bg-brand-gold/20 text-yellow-800',
        href: '/blog/cost-to-relocate-to-canada',
    },
    {
        title: 'Moving back to Nigeria from the UK: what you need to know',
        excerpt: 'For returnees — housing, schools, admin and reintegrating without the culture shock.',
        tag: 'Moving to Nigeria',
        tagColor: 'bg-brand-green/10 text-brand-green-deep',
        href: '/blog/moving-back-to-nigeria-from-uk',
    },
];

export default function BlogPreview() {
    return (
        <section id="blog-preview" className="bg-brand-cream py-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green">
                        Insights &amp; guides
                    </span>
                    <h2 className="mt-2 font-serif text-4xl font-bold text-brand-ink md:text-5xl">
                        Relocation know-how, whichever way you're going
                    </h2>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                            <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${article.tagColor}`}>
                                {article.tag}
                            </span>
                            <h3 className="mt-4 font-serif text-xl font-semibold text-brand-ink group-hover:text-brand-green-deep transition-colors">
                                {article.title}
                            </h3>
                            <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                                {article.excerpt}
                            </p>
                            <div className="mt-6">
                                <Link
                                    href={article.href}
                                    className="inline-flex items-center font-medium text-brand-green-deep transition-colors hover:text-brand-green"
                                >
                                    Read more
                                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-14 text-center"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center rounded-full border border-brand-green/40 px-8 py-3 font-semibold text-brand-green-deep transition-all hover:bg-brand-green hover:text-white"
                    >
                        Read the blog
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}