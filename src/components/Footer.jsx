import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Brand Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-3 text-cyan-400">Sunny Sharma</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Full-Stack MERN Developer building robust and scalable web applications from Chandigarh.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-md font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Me</Link></li>
              <li><Link to="/projects" className="hover:text-cyan-400 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Social / Connect */}
          <div>
            <h4 className="text-white text-md font-semibold mb-3">Let's Connect</h4>
            <div className="flex space-x-4 text-sm">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
              <a href="mailto:yourmail@example.com" className="hover:text-cyan-400 transition-colors">Email</a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-900/80 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Sunny Sharma. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;