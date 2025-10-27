import { motion } from 'framer-motion';

export default function PainPoints() {
    return (
        <section className="bg-gradient-to-br from-gray-50 to-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="mb-8 text-5xl leading-tight font-bold text-gray-900">Moving to Nigeria is overwhelming.</h2>

                    {/* Pain Points Grid */}
                    <div className="mx-auto grid max-w-6xl gap-8 text-left md:grid-cols-3">
                        <motion.div
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
                        >
                            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-red-100 opacity-20"></div>
                            <div className="relative z-10">
                                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600">
                                    <span className="text-2xl">🏠</span>
                                </div>
                                <h3 className="mb-4 text-2xl leading-relaxed font-bold text-green-600">You don't know where to live.</h3>
                                <p className="text-gray-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    Safe neighborhoods, commute times, family-friendly areas...
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
                        >
                            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-orange-100 opacity-20"></div>
                            <div className="relative z-10">
                                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-900">
                                    <span className="text-2xl">🤝</span>
                                </div>
                                <h3 className="mb-4 text-2xl leading-relaxed font-bold text-blue-900">You don't know who to trust.</h3>
                                <p className="text-gray-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    Real estate agents, service providers, local contacts...
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
                        >
                            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-purple-100 opacity-20"></div>
                            <div className="relative z-10">
                                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600">
                                    <span className="text-2xl">❓</span>
                                </div>
                                <h3 className="mb-4 text-2xl leading-relaxed font-bold text-green-600">You don't know what you don't know.</h3>
                                <p className="text-gray-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    Cultural norms, safety tips, local customs, hidden costs...
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Solution Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center"
                >
                    <div className="relative mb-12">
                        <motion.h3
                            initial={{ scale: 0.9 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className="mb-6 text-6xl leading-tight font-bold text-green-600"
                        >
                            Setu Down does.
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mx-auto max-w-4xl text-2xl leading-relaxed text-gray-700"
                        >
                            We've helped families, professionals, and returnees transition smoothly—without drama, without scams, without regret.
                        </motion.p>
                    </div>

                    {/* Trust Builders */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3"
                    >
                        {[
                            { icon: '✅', title: 'Verified vendors', desc: 'Pre-screened and trusted partners' },
                            { icon: '🕒', title: '24/7 relocation support', desc: 'Always available when you need us' },
                            { icon: '🎯', title: 'Personalized plans', desc: 'Tailored to your budget and needs' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="group rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="mb-4 text-4xl">{item.icon}</div>
                                <h4 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h4>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-16">
                        <a href="https://calendly.com/bublessingsmart/30min" target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 20px 40px rgba(5, 150, 105, 0.3)',
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="hover:shadow-3xl rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-12 py-4 font-bold text-white shadow-2xl transition-all duration-300"
                            >
                                <span className="flex items-center justify-center gap-3">
                                    Let's Talk — Book Free Discovery Call
                                    <svg
                                        className="h-5 w-5 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </span>
                            </motion.button>
                        </a>
                        <p className="mt-4 text-sm text-gray-500">No obligation • 30-minute consultation • Get personalized advice</p>
                    </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-10 h-32 w-32 rounded-full bg-green-200 opacity-20 blur-xl"></div>
                <div className="absolute right-10 bottom-1/4 h-40 w-40 rounded-full bg-blue-200 opacity-20 blur-xl"></div>
            </div>
        </section>
    );
}
