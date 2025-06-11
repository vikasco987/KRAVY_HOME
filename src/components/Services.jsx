

// // src/components/Services.jsx
// import React from 'react';

// const services = [
//   { title: 'Web Design', desc: 'Creative UI/UX for modern businesses' },
//   { title: 'Development', desc: 'Fast and scalable website development' },
//   { title: 'Branding', desc: 'Build a memorable identity for your business' },
// ];

// const Services = () => {
//   return (
//     <section className="py-20 px-4 bg-gray-100">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-10">Our Services</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service, i) => (
//             <div key={i} className="bg-white p-8 shadow-md rounded-2xl">
//               <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
//               <p className="text-gray-600">{service.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;












// import React from 'react';

// const services = [
//   {
//     title: "UI/UX Design",
//     description: "Modern, user-focused UI/UX designs that delight and convert.",
//     icon: "🖌️"
//   },
//   {
//     title: "Web Development",
//     description: "We build responsive, fast, and SEO-friendly websites.",
//     icon: "💻"
//   },
//   {
//     title: "Branding",
//     description: "We help businesses build strong brand identities.",
//     icon: "🎯"
//   },
//   {
//     title: "SEO Optimization",
//     description: "Improve your site's visibility on search engines.",
//     icon: "📈"
//   },
//   {
//     title: "E-Commerce",
//     description: "Build online stores with smooth customer experiences.",
//     icon: "🛒"
//   },
//   {
//     title: "App Development",
//     description: "Cross-platform mobile apps with stunning design.",
//     icon: "📱"
//   }
// ];

// const Services = () => {
//   return (
//     <section id="services" className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4">Our Services</h2>
//           <p className="text-gray-600 text-lg">What we do best for our clients</p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="p-6 rounded-xl border hover:shadow-lg transition text-center"
//             >
//               <div className="text-5xl mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;



import React from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={40} />,
    title: 'Web Development',
    description: 'We create fast, responsive websites using modern technologies.',
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: 'App Development',
    description: 'Build mobile apps that perform well and look amazing.',
  },
  {
    icon: <FaPaintBrush size={40} />,
    title: 'UI/UX Design',
    description: 'Beautiful and user-friendly interfaces to grow your brand.',
  },
];

const Services = () => {
  return (
    <section className="bg-[#0f172a] text-white py-20" id="services">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          We help businesses grow with custom websites, mobile apps, and design solutions.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-8 rounded-xl hover:shadow-xl transition hover:scale-105 duration-300"
            >
              <div className="mb-4 text-blue-500">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
