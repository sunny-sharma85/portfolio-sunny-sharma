import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
  
    { name: 'Projects', to: '/projects' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="bg-slate-50/90 backdrop-blur-md text-slate-800 sticky top-0 z-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 font-extrabold text-xl tracking-wider text-slate-900">
            Devender<span className="text-cyan-600">.dev</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="hover:text-cyan-600 transition-colors duration-200 text-sm font-semibold text-slate-600"
              >
                {link.name}
              </Link>
            ))}

          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-cyan-600 focus:outline-none"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-50 border-b border-slate-200 px-4 pt-2 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-cyan-600 text-base font-medium py-1"
            >
              {link.name}
            </Link>
          ))}
        
        </div>
      )}
    </nav>
  );
};

export default Navbar;