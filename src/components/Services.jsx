

// src/components/Services.jsx
import React from 'react';

const services = [
  { title: 'Web Design', desc: 'Creative UI/UX for modern businesses' },
  { title: 'Development', desc: 'Fast and scalable website development' },
  { title: 'Branding', desc: 'Build a memorable identity for your business' },
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-8 shadow-md rounded-2xl">
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
