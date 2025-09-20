// resources/js/components/Hero.jsx
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative flex h-screen items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-blue-950 opacity-70"></div>
            </div>

            {/* Animated elements */}
            <div className="absolute top-0 left-0 h-full w-full">
                <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-white opacity-10 mix-blend-overlay"></div>
                <div className="absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full bg-green-500 opacity-10 mix-blend-overlay"></div>
            </div>

            {/* Content */}
            <div className="z-10 container mx-auto px-4 text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
                >
                    Helping You Settle with Ease, Anywhere You Go
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mx-auto mb-10 max-w-3xl text-xl md:text-2xl"
                >
                    Seamless relocation, logistics, and support services designed to make your settling down journey stress-free, efficient, and
                    reliable.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col justify-center gap-4 sm:flex-row"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-white transition-all duration-300 hover:bg-green-600"
                    >
                        Get Started Today
                        <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-white transition-all duration-300 hover:bg-white hover:text-blue-900"
                    >
                        Request a Consultation
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 transform"
            >
                <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="mt-2 h-3 w-1 rounded-full bg-white"
                    ></motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
