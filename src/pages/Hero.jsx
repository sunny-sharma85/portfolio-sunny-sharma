import React from 'react';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-white text-gray-900 min-h-[90vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200 overflow-hidden">
      
      {/* Light Ambient Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto text-center z-10 space-y-6">
        
        {/* Badge / Tag */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs sm:text-sm font-semibold shadow-sm"
          data-aos="fade-down"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
          Available for Full-Stack Opportunities
        </div>

        {/* Main Heading */}
        <h1 
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Hi, I'm <span className="text-cyan-600">Devender Sharma</span>
        </h1>

        {/* Subtitle / Role */}
        <p 
          className="text-xl sm:text-2xl font-medium text-gray-700"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Full-Stack MERN Developer
        </p>

        {/* Short Description */}
        <p 
          className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          I build scalable, modern, and high-performance web applications using MongoDB, Express.js, React, and Node.js. Turning complex ideas into clean, user-centric interfaces.
        </p>

        {/* Call to Action Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          
          {/* View Projects Button */}
          <Link
            to="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm transition-all shadow-lg hover:shadow-cyan-600/30"
          >
            View Projects <FaArrowRight size={14} />
          </Link>

          {/* Download Resume Button */}
          <a
            href="/devender_sharma_cv.pdf"
            download="Devender_Sharma_CV.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-sm transition-all border border-gray-300 shadow-sm"
          >
            <FaDownload size={14} /> Download CV
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;