// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <h1 className='text-red-500'>Hello Vite + React!</h1>
//     </>
//   )
// }

// export default App
// // src/App.jsx
// import React from 'react';
// import Hero from './components/Hero';
// import Services from './components/Services';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div className="font-sans text-gray-900 bg-white">
//       <Hero />
//       <Services />
//       <About />
//       <Portfolio />
//       <Contact />
//       <Footer />
//     </div>
   
//   );
// }

// export default App;






// // src/App.js
// import React from 'react';
// import Navbar from './components/Navbar';
// // Import other components you'll build later

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       {/* Placeholder for content below the navbar */}
//       <div className="h-screen bg-gray-900 text-white flex items-center justify-center">
//         <h1 className="text-4xl">Scroll Down to see Navbar change!</h1>
//       </div>
//       <div className="h-screen bg-gray-700 text-white flex items-center justify-center">
//         <h1 className="text-4xl">More Content</h1>
//       </div>
//       {/* ... other sections will go here ... */}
//     </div>
//   );
// }

// export default App;







// src/App.js
import React from 'react';
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import FeaturesSection from './components/FeaturesSection';
import ImageCarousel from './components/ImageCarousel';
import BenefitsSection from './components/BenefitsSection';
import HowToUse from './components/HowToUse';
//import Services from './components/Services';

// Import other components you'll build later

function App() {
  return (
    <div className="App">
      <Navbar />
           <Hero />

      <FeaturesSection />
       <ImageCarousel />
       <BenefitsSection />
           <HowToUse />
            {/* <Services /> */}

      {/* Placeholder for content below the navbar */}
      <div className="h-screen bg-gray-900 text-white flex items-center justify-center animate-fade-in-up">
        <h1 className="text-4xl">Scroll Down to see Navbar change!</h1>
      </div>
      <div className="h-screen bg-gray-700 text-white flex items-center justify-center animate-bounce-slow">
        <h1 className="text-4xl">More Content</h1>
      </div>
      {/* ... other sections will go here ... */}
    </div>
  );
}

export default App;
