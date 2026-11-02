import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={18} className="text-gray-900 group-hover:text-white transition-colors" />,
      url: 'https://github.com/sunny-sharma85',
      hoverBg: 'hover:bg-gray-900 hover:border-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={18} className="text-[#0A66C2]" />,
      url: 'https://www.linkedin.com/in/devender-sharma-484a36288/',
      hoverBg: 'hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram size={18} className="text-[#E4405F]" />,
      url: 'https://www.instagram.com/isunnyy.x/',
      hoverBg: 'hover:bg-[#E4405F]/10 hover:border-[#E4405F]'
    },
    
  ];

  return (
    <footer className="bg-slate-100 text-slate-600 py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Branding / Copyright */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-extrabold text-slate-900 tracking-wider">
            Devender<span className="text-cyan-600">.dev</span>
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            © {currentYear} Devender Sharma. All Right Reserved
          </p>
        </div>

        {/* Right Side: Social Link Tags with Brand Colors */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`p-2.5 rounded-xl bg-white border border-slate-200 transition-all duration-200 shadow-sm group ${social.hoverBg}`}
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