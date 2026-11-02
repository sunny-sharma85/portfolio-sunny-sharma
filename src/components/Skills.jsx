import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt 
} from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const techStack = [
    {
      name: "HTML5 & CSS3",
      category: "Frontend",
      desc: "Semantic markup, modern styling, flexbox & grid layouts.",
      icon: <div className="flex gap-2"><FaHtml5 className="text-orange-500 text-3xl" /><FaCss3Alt className="text-blue-500 text-3xl" /></div>,
      borderHover: "hover:border-orange-500",
    },
    {
      name: "JavaScript (ES6+)",
      category: "Language",
      desc: "Asynchronous programming, closures, DOM manipulation.",
      icon: <FaJs className="text-yellow-400 text-3xl" />,
      borderHover: "hover:border-yellow-400",
    },
    {
      name: "React.js",
      category: "Frontend Framework",
      desc: "Component-based architecture, hooks, state management.",
      icon: <FaReact className="text-cyan-400 text-3xl" />,
      borderHover: "hover:border-cyan-400",
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      desc: "Utility-first CSS framework for rapid, responsive design.",
      icon: <SiTailwindcss className="text-teal-400 text-3xl" />,
      borderHover: "hover:border-teal-400",
    },
    {
      name: "Node.js",
      category: "Backend",
      desc: "JavaScript runtime environment, event-driven architecture.",
      icon: <FaNodeJs className="text-green-500 text-3xl" />,
      borderHover: "hover:border-green-500",
    },
    {
      name: "Express.js",
      category: "Backend Framework",
      desc: "RESTful APIs, middleware handling, routing.",
      icon: <SiExpress className="text-gray-200 text-3xl" />,
      borderHover: "hover:border-gray-300",
    },
    {
      name: "MongoDB",
      category: "Database",
      desc: "NoSQL database, Mongoose ODM, schemas & aggregation.",
      icon: <SiMongodb className="text-emerald-500 text-3xl" />,
      borderHover: "hover:border-emerald-400",
    },
    {
      name: "Git & GitHub",
      category: "Version Control",
      desc: "Source code management, branching, and collaboration.",
      icon: <FaGitAlt className="text-red-500 text-3xl" />,
      borderHover: "hover:border-purple-400",
    },
  ];

  return (
    <section id="skills" className="relative bg-gray-950 text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-900 overflow-hidden">
      
      {/* Background Glowing Ambient Light for Depth */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            My <span className="text-cyan-400">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            The tools and technologies I use to build robust full-stack web apps.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`bg-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 ${tech.borderHover} transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between`}
            >
              <div>
                {/* Icon & Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-gray-950 rounded-xl border border-gray-800 shadow-inner flex items-center justify-center">
                    {tech.icon}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-gray-950 text-gray-300 rounded-full border border-gray-800">
                    {tech.category}
                  </span>
                </div>

                {/* Tech Name */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {tech.desc}
                </p>
              </div>

              {/* Bottom indicator line */}
              <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-500">
                <span>MERN Core</span>
                <span className="text-cyan-400 font-medium">Verified Skill</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;