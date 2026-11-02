import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gray-950 text-white min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Glowing Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900/90 border border-gray-800 text-cyan-400 text-xs sm:text-sm font-medium mb-6 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Available for Full-Stack / MERN Stack Roles
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Sunny Sharma</span>
        </h1>

        {/* Subtitle / Role */}
        <p className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">
          Full-Stack MERN Developer 🚀
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 mb-10 leading-relaxed">
          BCA graduate from Chandigarh, building scalable web applications with clean frontend design and robust backend architecture.
        </p>

        {/* Call to Action Buttons (Replaced <a> with <Link>) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/projects"
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-gray-950 font-bold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 text-center"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-gray-900 hover:bg-gray-800 text-white border border-gray-800 font-medium transition-all duration-200 text-center"
          >
            Contact Me
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Hero;