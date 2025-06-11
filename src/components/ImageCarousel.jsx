// import { useEffect, useState } from 'react';

// const images = [
//   '/image/card-1.png',
//   '/image/card-2.png',
//   '/image/card-3.png',
// ];

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full max-w-lg mx-auto mt-10">
//       {images.map((img, index) => (
//         <img
//           key={index}
//           src={img}
//           alt={`Card ${index}`}
//           className={`absolute transition-opacity duration-1000 ease-in-out w-full h-auto rounded-xl shadow-xl ${
//             index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
//           }`}
//         />
//       ))}
//     </div>
//   );
// };

// // export default ImageCarousel;
//   import React, { useState, useEffect } from 'react';
// import card1 from '../../public/image/card-1.png';
// import card2 from '../../public/image/card-2.png';
// import card3 from '../../public/image/card-3.png';

// const images = [card1, card2, card3];

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative flex justify-center items-center py-12 bg-[#0e0f29]">
//       <img
//         src={images[currentIndex]}
//         alt="carousel"
//         className="w-[500px] transition-opacity duration-1000 ease-in-out shadow-2xl rounded-xl"
//       />
//     </div>
//   );
// };

// export default ImageCarousel;



import React, { useState, useEffect } from 'react';
// import card1 from '../assets/images/card-1.png';
// import card2 from '../assets/images/card-2.png';
// import card3 from '../assets/images/card-3.png';
import card1 from '../../public/image/card-1.png';
import card2 from '../../public/image/card-2.png';
import card3 from '../../public/image/card-3.png';


const images = [card1, card2, card3];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0e0f29] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-4">
          <p className="text-indigo-400 text-sm font-medium tracking-widest relative after:absolute after:left-0 after:bottom-[-4px] after:w-10 after:h-0.5 after:bg-indigo-500">
            Build for you
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            What we ‘ve <br /> Built for you
          </h2>
          <p className="text-gray-300 text-lg">
            Harnessing the power of artificial intelligence to <br />
            revolutionise industries and enhance human experiences.
          </p>
          <button className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition rounded-full text-white font-semibold">
            Explore More
          </button>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={images[currentIndex]}
            alt="carousel"
            className="w-[350px] h-auto transition-opacity duration-1000 ease-in-out drop-shadow-2xl rounded-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default ImageCarousel;
