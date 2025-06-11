





// // src/components/Features.jsx
// import React from "react";

// const features = [
//   {
//     image: "/image/research.png",
//     title: "Intelligent Research Assistant",
//     desc: "Feed the AI your topic and keywords, and watch it gather relevant information from across the web.",
//   },
//   {
//     image: "/image/powered.png",
//     title: "AI-Powered Content Generation",
//     desc: "Overcome writer's block and get fresh ideas with a single click.",
//   },
//   {
//     image: "/image/dashboard.png",
//     title: "Real-time Fact-Checking",
//     desc: "Integrate with reliable fact-checking databases and plagiarism tools.",
//   },
// ];

// const Features = () => {
//   return (
//     <section id="features" className="bg-[#0f172a] text-white py-20">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <p className="text-sm uppercase text-blue-500 font-medium mb-3 tracking-wider">Features</p>
//         <h2 className="text-4xl md:text-5xl font-bold mb-3">Our Clients Love to Use</h2>
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h2>
//         <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
//           Free Up Your Time to Focus on What Matters Most
//         </p>

//         <div className="grid md:grid-cols-3 gap-10">
//           {features.map((item, index) => (
//             <div
//               key={index}
//               className="bg-[#1e293b] rounded-xl p-6 shadow-md hover:shadow-2xl transition duration-300"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-48 object-contain rounded-md mb-6"
//               />
//               <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
//               <p className="text-gray-400 text-sm">{item.desc}</p>
//             </div>
//           ))}
//         </div>

//         <p className="text-lg md:text-xl text-gray-300 font-medium mt-20 max-w-3xl mx-auto">
//           Stop writer's block and generate fresh content ideas with our AI assistant. Take your content to the next level!
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Features;





// src/components/Features.jsx
import React from "react";

const features = [
  {
    image: "/image/research.png",
    title: "Intelligent Research Assistant",
    desc: "Feed the AI your topic and keywords, and watch it gather relevant information from across the web.",
  },
  {
    image: "/image/powered.png",
    title: "AI-Powered Content Generation",
    desc: "Overcome writer's block and get fresh ideas with a single click.",
  },
];

const bottomFeature = {
  image: "/image/dashboard.png",
  title: "Real-time Fact-Checking and Plagiarism Detection",
  desc: "Integrate with reliable fact-checking databases and plagiarism tools.",
};

const Features = () => {
  return (
    <section id="features" className="bg-[#0f172a] text-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <p className="text-sm uppercase text-blue-500 font-medium mb-3 tracking-wider">
          Features
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          Our Client Love to use
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          Free Up Your Time to Focus on What Matters Most
        </p>

        Top 2 cards in a row
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-xl p-6 shadow-xl hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover rounded-md mb-6"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>


        {/* Center icon (optional) */}
        <div className="mb-10">
          <div className="w-16 h-16 mx-auto bg-[#1e293b] rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-blue-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>

        {/* Bottom full-width card */}
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-xl hover:shadow-2xl transition duration-300 max-w-4xl mx-auto">
          <img
            src={bottomFeature.image}
            alt={bottomFeature.title}
            className="w-full h-60 object-cover rounded-md mb-6"
          />
          <h3 className="text-xl font-semibold mb-2">{bottomFeature.title}</h3>
          <p className="text-gray-400 text-sm">{bottomFeature.desc}</p>
        </div>

        {/* Footer text and button */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <p className="text-lg text-gray-300 font-medium">
            Stop writer's block and generate fresh content ideas with our AI assistant.
            Take your content to the next level!
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition duration-300">
            Get A Demo
          </button>
        </div>
      </div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 bg-[url('/image/grid-bg.png')] bg-center bg-cover opacity-10" />
    </section>
  );
};

export default Features;








