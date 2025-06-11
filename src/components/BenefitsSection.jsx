import React from 'react';

const benefitCards = [
  {
    title: 'Innovative Essential Platforms',
    desc: 'Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide.',
    image: '/image/benefit-2.png'
  },
  {
    title: 'Effortless Personalization',
    desc: 'AI tailors the user experience to each visitor. Imagine a website that remembers preferences, recommends relevant products.',
    image: '/image/benefit-3.png'
  },
  {
    title: 'Continual Improvement',
    desc: 'AI constantly learns from user interactions and website data. This ongoing process guarantees your website stays relevant, optimized.',
    image: '/image/benefit-4.png'
  },
  {
    title: 'Boost Efficiency & Productivity',
    desc: 'AI automates repetitive tasks like content updates, data analysis, and website optimization.',
    image: '/image/benefit-5.png'
  },
  {
    title: 'Actionable Insights',
    desc: 'AI analyzes user behavior and conversion data to help you understand your audience and optimize marketing.',
    image: '/image/benefit-2.png'
  }
];

const BenefitsSection = () => {
  return (
    <div className="bg-[#0e0f29] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-indigo-400 text-sm font-medium tracking-widest relative after:absolute after:left-1/2 after:-bottom-2 after:transform after:-translate-x-1/2 after:w-10 after:h-0.5 after:bg-indigo-500">
          Benefits
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">Your Benefits</h2>
        <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
          Harnessing the power of artificial intelligence to revolutionize industries and enhance human experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {benefitCards.map((card, index) => (
          <div key={index} className="bg-[#121433] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <img src={card.image} alt={card.title} className="w-full h-40 object-contain mb-4" />
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-400 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition rounded-full text-white font-semibold">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default BenefitsSection;
