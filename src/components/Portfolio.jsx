

// src/components/Portfolio.jsx
import React from 'react';

const projects = [
  '/images/work1.jpg',
  '/images/work2.jpg',
  '/images/work3.jpg',
];

const Portfolio = () => {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Project ${i + 1}`}
              className="rounded-2xl shadow-md hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
