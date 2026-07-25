// resources/js/components/Hero.jsx
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
                <div className="absolute inset-0 bg-green-950 opacity-70"></div>
            </div>

            {/* Content */}
            <div className="z-10 container mx-auto px-4 text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
                >
                    Wherever you're moving, we'll help you settle down.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mx-auto mb-10 max-w-3xl text-xl md:text-2xl"
                >
                    Relocation and settlement support for individuals, families and organisations moving abroad, moving to Nigeria, or relocating within Nigeria.
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
                            className="group flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-white transition-all duration-300 hover:bg-green-700"
                        >
                            Start Your Relocation
                        </motion.button>
                    </Link>
                    <Link href="#packages">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-white transition-all duration-300 hover:bg-white hover:text-green-900"
                        >
                            Explore Services
                        </motion.button>
                    </Link>
                </motion.div>
            </div>


        </section>
    );
};

export default Hero;
