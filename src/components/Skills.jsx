import React from 'react';
import { 
  FaJs, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt 
} from 'react-icons/fa';
import { SiExpress, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-600" />, },
    { name: "React.js", icon: <FaReact className="text-cyan-600" />,  },
    { name: "Node.js", icon: <FaNodeJs className="text-emerald-600" />, },
    { name: "Express.js", icon: <SiExpress className="text-slate-700" />,  },
    { name: "MongoDB", icon: <FaDatabase className="text-emerald-600" />,  },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />,  },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-700" />, }
  ];

  return (
    <section id="skills" className="bg-slate-50 text-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading with Animation */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Technical <span className="text-cyan-600">Skills</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Technologies and tools I work with to build modern MERN stack applications.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-400 transition-all flex flex-col items-center text-center space-y-3 group"
              data-aos="fade-up"
              data-aos-delay={index * 80} 
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-200">
                {skill.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                  {skill.name}
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;