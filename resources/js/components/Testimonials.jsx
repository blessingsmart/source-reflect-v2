// resources/js/components/Testimonials.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Fallback testimonials data
const fallbackTestimonials = [
    {
        id: 1,
        name: 'Robert Johnson',
        role: 'Relocated to Berlin',
        message: 'Setudown made our move from the Ibadan to Lagos completely seamless. Their attention to detail was impressive.',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAj1ZyVhinZkuUe_ddZzSUAbm9saIe4jIYyQ&s',
    },
    {
        id: 2,
        name: 'Sophia Williams',
        role: 'Corporate Relocation',
        message: "The corporate package was perfect for our team's move. Everything was handled professionally and efficiently.",
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAj1ZyVhinZkuUe_ddZzSUAbm9saIe4jIYyQ&s',
    },
    {
        id: 3,
        name: 'James Chen',
        role: 'Family Relocation',
        message: 'Finding schools and the right neighborhood was our biggest concern. Setudown exceeded our expectations.',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAj1ZyVhinZkuUe_ddZzSUAbm9saIe4jIYyQ&s',
    },
];

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Try to fetch from API, but use fallback if it fails
        fetch('/api/testimonials')
            .then((res) => {
                if (res.ok) return res.json();
                throw new Error('API not available');
            })
            .then((data) => setTestimonials(data))
            .catch(() => setTestimonials(fallbackTestimonials));
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="testimonials" className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">What Our Clients Say</h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-600">Hear from people who have experienced our relocation services firsthand</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 gap-8 md:grid-cols-3"
                >
                    {testimonials.map((t) => (
                        <motion.div key={t.id} variants={itemVariants} className="rounded-xl bg-gray-50 p-8 shadow-lg transition-all hover:shadow-xl">
                            <div className="mb-6 flex items-center">
                                <img src={t.avatar} alt={t.name} className="mr-4 h-14 w-14 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                                    <p className="text-sm text-gray-600">{t.role}</p>
                                </div>
                            </div>
                            <p className="mb-6 text-gray-700 italic">"{t.message}"</p>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
