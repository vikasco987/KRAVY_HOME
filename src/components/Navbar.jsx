// // src/components/Navbar.js
// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);

//     // Effect to handle scroll event for background change
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) { // Adjust scroll threshold as needed
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         // Clean up the event listener on component unmount
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav
//             className={`
//                 fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
//                 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}
//             `}
//         >
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
//                 {/* Logo */}
//                 <div className="flex-shrink-0">
//                     <a href="/" className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
//                         Nexux
//                     </a>
//                 </div>

//                 {/* Desktop Menu */}
//                 <div className="hidden md:flex space-x-8">
//                     <a href="#home" className={`text-lg font-medium hover:text-blue-600 transition-colors duration-200 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
//                         Home
//                     </a>
//                     <a href="#about" className={`text-lg font-medium hover:text-blue-600 transition-colors duration-200 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
//                         About
//                     </a>
//                     <a href="#services" className={`text-lg font-medium hover:text-blue-600 transition-colors duration-200 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
//                         Services
//                     </a>
//                     <a href="#portfolio" className={`text-lg font-medium hover:text-blue-600 transition-colors duration-200 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
//                         Portfolio
//                     </a>
//                     <a href="#testimonials" className={`text-lg font-medium hover:text-blue-600 transition-colors duration-200 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
//                         Testimonials
//                     </a>
//                     <a href="#contact" className={`text-lg font-medium hover:text-blue-600 transition-colors duration-200 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
//                         Contact
//                     </a>
//                 </div>

//                 {/* Mobile Menu Button (Hamburger) */}
//                 <div className="md:hidden flex items-center">
//                     <button onClick={toggleMenu} className={`focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
//                         <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu Content */}
//             <div
//                 className={`
//                     md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden
//                     ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}
//                 `}
//             >
//                 <div className="flex flex-col items-center space-y-4">
//                     <a onClick={toggleMenu} href="#home" className="block text-gray-800 text-lg font-medium hover:text-blue-600">Home</a>
//                     <a onClick={toggleMenu} href="#about" className="block text-gray-800 text-lg font-medium hover:text-blue-600">About</a>
//                     <a onClick={toggleMenu} href="#services" className="block text-gray-800 text-lg font-medium hover:text-blue-600">Services</a>
//                     <a onClick={toggleMenu} href="#portfolio" className="block text-gray-800 text-lg font-medium hover:text-blue-600">Portfolio</a>
//                     <a onClick={toggleMenu} href="#testimonials" className="block text-gray-800 text-lg font-medium hover:text-blue-600">Testimonials</a>
//                     <a onClick={toggleMenu} href="#contact" className="block text-gray-800 text-lg font-medium hover:text-blue-600">Contact</a>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;











// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Nexux</div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <ul className="hidden md:flex space-x-8 font-medium">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#portfolio" className="hover:text-blue-500">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
        {menuOpen && (
          <div className={`md:hidden bg-white text-black px-4 py-4 transition-all duration-300`}> 
            <ul className="flex flex-col space-y-4">
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Banner Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/image/banner.png')" }}

      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">We Build Beautiful Websites</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Creative digital solutions for growing brands. We combine design, development, and marketing to deliver amazing results.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};

export default Navbar;
