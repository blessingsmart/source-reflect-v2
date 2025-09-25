// resources/js/components/ContactForm.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        currentLocation: '',
        arrivalDate: '',
        movingWith: '',
        services: [],
        comments: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                services: checked ? [...prev.services, value] : prev.services.filter((service) => service !== value),
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission
    };

    return (
        <section id="contact" className="bg-blue-50 py-20">
            <div className="mx-auto max-w-4xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-blue-900">Let's Talk About Your Move.</h2>
                    <p className="text-xl text-blue-900">We'll walk you through what to expect, how much it costs, and how to get started.</p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="rounded-xl bg-white p-8 shadow-lg"
                >
                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <label className="mb-2 block font-medium text-blue-900">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-blue-300 px-4 py-3 text-blue-900 focus:border-transparent focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="mb-2 block font-medium text-blue-900">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-blue-300 px-4 py-3 text-blue-900 focus:border-transparent focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="mb-2 block font-medium text-blue-900">Phone Number (WhatsApp)</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-blue-300 px-4 py-3 text-blue-900 focus:border-transparent focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="mb-2 block font-medium text-blue-900">Current Location</label>
                            <input
                                type="text"
                                name="currentLocation"
                                value={formData.currentLocation}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-blue-300 px-4 py-3 text-blue-900 focus:border-transparent focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="mb-2 block font-medium text-blue-900">Expected Arrival Date</label>
                            <input
                                type="date"
                                name="arrivalDate"
                                value={formData.arrivalDate}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-blue-300 px-4 py-3 text-blue-900 focus:border-transparent focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <label className="mb-2 block font-medium text-blue-900">Moving Alone or with Family?</label>
                            <select
                                name="movingWith"
                                value={formData.movingWith}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-blue-300 px-4 py-3 text-blue-900 focus:border-transparent focus:ring-2 focus:ring-green-500"
                            >
                                <option value="">Select...</option>
                                <option value="alone">Alone</option>
                                <option value="with-family">With Family</option>
                                <option value="with-partner">With Partner</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="mb-3 block font-medium text-blue-900">What Services Do You Need?</label>
                        <div className="grid gap-3 md:grid-cols-2">
                            {['Housing', 'School Search', 'Cultural Orientation', 'Logistics', 'Admin Support', 'Safety Briefing'].map((service) => (
                                <label key={service} className="flex items-center text-blue-900">
                                    <input
                                        type="checkbox"
                                        name="services"
                                        value={service}
                                        checked={formData.services.includes(service)}
                                        onChange={handleChange}
                                        className="mr-2 text-green-500"
                                    />
                                    {service}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="mb-2 block font-medium text-blue-900">Additional Comments</label>
                        <textarea
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            rows="4"
                            className="w-full rounded-lg border border-blue-900 px-4 py-3 text-blue-900 focus:border-transparent focus:ring-2 focus:ring-green-500"
                        ></textarea>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="mt-6 w-full rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-900"
                    >
                        Book My Free Call
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}
