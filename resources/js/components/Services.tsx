import React, { useEffect, useState } from "react";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/api/services") // Laravel API endpoint
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">Our Services</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <div className="text-blue-600 text-4xl mb-4">{service.icon || "📦"}</div>
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
