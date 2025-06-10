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
// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;