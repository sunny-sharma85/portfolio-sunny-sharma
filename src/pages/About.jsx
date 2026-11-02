import React from 'react';
import { 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt 
} from 'react-icons/fa';
import { SiExpress, SiTailwindcss } from 'react-icons/si';

const About = () => {
  // Skills array with their respective react-icons components
  const skills = [
    { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-600" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-emerald-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-slate-700" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-emerald-600" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-600" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-700" /> }
  ];

  return (
    <section id="about" className="bg-slate-50 text-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            About <span className="text-cyan-600">Me</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A quick glimpse into who I am and what I do.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          
          {/* Left Side: Bio */}
          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              Hi again! I'm <span className="text-cyan-600 font-semibold">Devender Sharma</span>, a passionate BCA graduate 
            </p>
            <p>
              Right now, I am fully focused on leveling up my skills as a <span className="text-slate-900 font-semibold">MERN Stack Developer</span>. I love building web apps from scratch—turning ideas into clean, functional, and responsive user interfaces with powerful backend support.
            </p>
            <p>
              When I'm not writing code or debugging, you'll find me exploring new tech trends and building full-stack projects to strengthen my portfolio.
            </p>
          </div>

          {/* Right Side: Skills Grid with Icons */}
          <div>
            <h3 className="text-lg font-bold text-cyan-600 mb-4">My Tech Stack</h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-medium rounded-lg shadow-xs hover:border-cyan-400 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;