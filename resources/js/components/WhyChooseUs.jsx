import React from "react";

export default function WhyChooseUs() {
  const pillars = [
    { title: "Trust & Reliability", desc: "We ensure secure, transparent, and dependable services." },
    { title: "Global Reach", desc: "Support available for both local and international relocations." },
    { title: "Personalized Solutions", desc: "Tailored packages to fit your unique relocation needs." },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
