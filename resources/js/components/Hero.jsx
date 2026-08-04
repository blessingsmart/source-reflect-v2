import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const Hero = () => {
    return (
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}
            >
                {/* Darker overlay matching brand-ink */}
                <div className="absolute inset-0 bg-brand-ink/80"></div>
            </div>

            {/* Content */}
            <div className="z-10 container mx-auto px-4 text-center text-white">
                <div className="mx-auto mb-4 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-brand-gold-bright inline-block" aria-hidden></span>
                    <span>Relocation &amp; settlement, any direction</span>
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl leading-tight"
                >
                    Wherever you're moving, we'll help you <em className="not-italic text-brand-gold-bright">settle down.</em>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mx-auto mb-6 max-w-3xl text-lg md:text-xl text-white/90"
                >
                    Relocation and settlement support for individuals, families and organisations — moving abroad, moving to Nigeria, or moving across it. We handle the details, so you can start your new life without the stress.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col justify-center gap-4 sm:flex-row"
                >
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-6 py-3 text-brand-ink font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/30"
                        >
                            Book Your Free Discovery Call
                        </motion.button>
                    </Link>
                    <Link href="#how-it-works">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-white transition-all duration-300 hover:bg-white hover:text-brand-ink hover:border-white"
                        >
                            See How It Works
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Trust stats row */}
                <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8 flex flex-col items-center gap-3 text-sm text-white/80 sm:flex-row sm:justify-center"
                    aria-label="Trust statistics"
                >
                    <li className="inline-flex items-baseline gap-2">
                        <span className="font-serif text-2xl font-bold text-brand-gold-bright">3+</span>
                        <span>countries served</span>
                    </li>
                    <li className="hidden sm:inline-block text-white/30">·</li>
                    <li className="inline-flex items-baseline gap-2">
                        <span className="font-serif text-2xl font-bold text-brand-gold-bright">98%</span>
                        <span>client satisfaction</span>
                    </li>
                    <li className="hidden sm:inline-block text-white/30">·</li>
                    <li className="inline-flex items-baseline gap-2">
                        <span>Verified vendors</span>
                    </li>
                    <li className="hidden sm:inline-block text-white/30">·</li>
                    <li className="inline-flex items-baseline gap-2">
                        <span>24/7 support</span>
                    </li>
                </motion.ul>
            </div>
        </section>
    );
};

export default Hero;