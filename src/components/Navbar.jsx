import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Projects', to: '/projects' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="bg-gray-950/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-gray-800/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand Name */}
          <Link to="/" className="flex-shrink-0 font-bold text-xl tracking-wider text-cyan-400">
            Sunny<span className="text-white">.dev</span>
          </Link>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="hover:text-cyan-400 transition-colors duration-200 text-sm font-medium text-gray-300"
              >
                {link.name}
              </Link>
            ))}

            {/* Resume Button using Link */}
          <a
  href="/devender_sharma_cv.pdf"
  download="Devender_Sharma_CV.pdf"
  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-gray-950 font-bold text-sm transition-all duration-200 shadow-md cursor-pointer"
>
  Resume
</a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none p-1 rounded-lg bg-gray-900 border border-gray-800"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-md border-b border-gray-800 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-900 hover:text-cyan-400 text-gray-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Resume Link Button */}
          <a
  href="/Devender Sharma Resume.pdf"
  download="Devender_Sharma_CV.pdf"
  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-gray-950 font-bold text-sm transition-all duration-200 shadow-md cursor-pointer"
>
  Resume
</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;