
// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-xl"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-xl"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-xl"
          ></textarea>
          <button type="submit" className="px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;