// import React from 'react';

// const Hero = () => {
//   return (
//     <h1 className='text-5xl font-bold text-center py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white'>
//         Hello World!
//     </h1>
//   );
// };

// export default Hero;






// // src/components/HeroSection.js
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Import the down arrow icon

// // Import your hero background image
// import heroBg from '../assets/images/hero-bg.jpg'; // Adjust path if your image is elsewhere

// const HeroSection = () => {
//     return (
//         <section
//             id="home" // Add an ID for Navbar linking
//             className="relative h-screen bg-cover bg-center flex items-center justify-center text-center p-4"
//             style={{ backgroundImage: `url(${heroBg})` }}
//         >
//             {/* Overlay for text readability */}
//             <div className="absolute inset-0 bg-black opacity-60"></div>

//             {/* Content */}
//             <div className="relative z-10 text-white max-w-4xl mx-auto">
//                 <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in-up">
//                     We Create Beautiful & Engaging <br className="hidden sm:inline" />Digital Experiences
//                 </h1>
//                 <p className="text-lg sm:text-xl mb-8 opacity-0 animate-fade-in delay-500">
//                     Your vision, our expertise. We turn ideas into stunning realities.
//                 </p>

//                 {/* CTA Buttons */}
//                 <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-1000">
//                         Our Services
//                     </button>
//                     <button className="bg-transparent border-2 border-white hover:border-blue-600 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-1200">
//                         Get Started
//                     </button>
//                 </div>
//             </div>

//             {/* Scroll Down Indicator */}
//             <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white animate-bounce-slow">
//                 <a href="#about" className="flex flex-col items-center">
//                     <FontAwesomeIcon icon={faChevronDown} size="2x" className="mb-2" />
//                     <span className="text-sm uppercase tracking-wider">Scroll Down</span>
//                 </a>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;









import React from "react";
import bannerImage from "/image/banner.png"; // Make sure this image exists in your public/image folder

// const Hero = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-white"
//       style={{
//         backgroundImage: `url(${bannerImage})`,
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

//       <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
//         <p className="text-sm text-blue-400 mb-2 uppercase tracking-widest">AI Driven</p>
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
//           Transform Your Business <br /> with AI-Powered Solutions
//         </h1>
//         <p className="text-lg md:text-xl text-gray-300 mb-8">
//           Our AI platform automates repetitive tasks
//         </p>

//         <div className="flex justify-center">
//           <input
//             type="email"
//             placeholder="Your Email Address"
//             className="px-4 py-2 rounded-l-full bg-white text-black w-64 md:w-96 focus:outline-none"
//           />
//           <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-full">
//             Submit
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('/image/banner.png')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-sm text-blue-400 mb-2 uppercase tracking-widest">AI Driven</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Transform Your Business <br /> with AI-Powered Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Our AI platform automates repetitive tasks
        </p>

        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Your Email Address"
            className="px-4 py-2 rounded-l-full bg-white text-black w-64 md:w-96 focus:outline-none"
          />
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-full">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;