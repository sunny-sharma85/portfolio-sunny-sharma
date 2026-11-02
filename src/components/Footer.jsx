import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={18} />,
      url: 'https://github.com/sunny-sharma85'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={18} />,
      url: 'https://www.linkedin.com/in/devender-sharma-484a36288/' 
    },
    {
      name: 'Instagram',
      icon: <FaInstagram size={18} />,
      url: 'https://www.instagram.com/isunnyy.x/' 
    },
    
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Branding / Copyright */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold text-white tracking-wider">
            Devender<span className="text-cyan-400">.dev</span>
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            © {currentYear} Devender Sharma. Built with React & Tailwind CSS.
          </p>
        </div>

        {/* Right Side: Social Link Tags with Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-gray-800/60 transition-all duration-200 shadow-sm"
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;