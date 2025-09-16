import React, { useEffect, useState } from "react";

export default function Partners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("/api/partners")
      .then((res) => res.json())
      .then((data) => setPartners(data));
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Partners</h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {partners.map((p) => (
            <img key={p.id} src={p.logo_url} alt={p.name} className="h-12 object-contain grayscale hover:grayscale-0 transition" />
          ))}
        </div>
      </div>
    </section>
  );
}
