import React, { useState, useEffect } from "react";

const tabs = [
  {
    title: "Fast Sign-up",
    subtitle: "You can join our platform faster with Social Account and email signup. No hassle!",
    image: "/image/use-1.png",
  },
  {
    title: "Easy to Generate",
    subtitle: "Our UI is simple, you can easily catch up and generate content quickly.",
    image: "/image/use-2.png",
  },
  {
    title: "Instant Output",
    subtitle: "See the result instantly after your prompt. No delay. Immediate feedback.",
    image: "/image/use-3.png",
  },
];

const HowToUse = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#05001a] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-blue-400 mb-2 tracking-wide">How to Use</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Easy to Use</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          We dive deep into understanding your values and target audience to develop a cohesive brand strategy.
        </p>

        {/* Image Section */}
        <div className="relative flex justify-center mb-12">
          <div className="relative w-full md:w-[700px] h-[380px] bg-[#0a002f] rounded-3xl overflow-hidden transition-all duration-500 shadow-lg">
            <img
              src={tabs[activeIndex].image}
              alt={tabs[activeIndex].title}
              className="w-full h-full object-contain transition-opacity duration-700"
            />
          </div>
        </div>

        {/* Timeline Bar */}
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="h-1 bg-gray-700 rounded-full relative">
            <div
              className="absolute h-1 bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${((activeIndex + 1) / tabs.length) * 100}%` }}
            />
          </div>

          {/* Timeline Dots */}
          <div className="flex justify-between mt-2">
            {tabs.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-5 h-5 rounded-full z-10 transition-all duration-300 border-2 ${
                  activeIndex === index
                    ? "bg-blue-500 border-blue-400"
                    : "bg-gray-700 border-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Active Text Below Line */}
        <div className="mt-8 transition-all duration-500">
          <h3 className="text-white text-2xl font-semibold mb-2">{tabs[activeIndex].title}</h3>
          <p className="text-gray-400 text-md max-w-xl mx-auto">{tabs[activeIndex].subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
