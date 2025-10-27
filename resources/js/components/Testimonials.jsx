import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: 'Ada',
        role: 'Returned from UK',
        message: 'Setu Down made my Lagos move so smooth, I forgot I was moving countries.',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAj1ZyVhinZkuUe_ddZzSUAbm9saIe4jIYyQ&s',
    },
    {
        id: 2,
        name: 'John',
        role: 'Shell Nigeria expat',
        message: 'Everything from school tours to security orientation was handled. Worth every dollar.',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAj1ZyVhinZkuUe_ddZzSUAbm9saIe4jIYyQ&s',
    },
    {
        id: 3,
        name: 'Chiamaka',
        role: 'Diaspora returnee from Canada',
        message: 'The cultural orientation saved me from so many embarrassing moments. They thought me how to be Nigerian again!',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAj1ZyVhinZkuUe_ddZzSUAbm9saIe4jIYyQ&s',
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">They Landed with Luggage. We Handled the Rest.</h2>
                </motion.div>

                <div className="mb-12 grid gap-8 md:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
                        >
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
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700"
                        >
                            Read More Reviews
                        </motion.button>
                        <motion.a
                            href="https://wa.me/message/YL3HPLETTPM5O1?"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-lg border-2 border-green-600 px-8 py-3 font-semibold text-green-600 transition-colors hover:bg-green-600 hover:text-white"
                        >
                            Share Your Story
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
