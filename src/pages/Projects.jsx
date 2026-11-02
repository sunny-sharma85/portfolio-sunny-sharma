import React from 'react';
import { FaLaptopCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projectsList = [
    {
      title: "Movie Search App",
      description: "Developed a responsive movie discovery web app allowing users to search titles, view detailed information, ratings, and posters dynamically using external movie database APIs.",
      techStack: ["React.js", "Tailwind CSS", "REST API"],
      liveLink: "https://movie-search-app-rust-mu.vercel.app/", 
      githubLink: "https://github.com/sunny-sharma85/Movie-Search-App" 
    },
    {
      title: "Note Management App",
      description: "Built a dynamic note-taking application implementing complete CRUD (Create, Read, Update, Delete) operations with clean component states and modern styling.",
      techStack: ["HTML5", "CSS3", "React.js", "CRUD"],
      liveLink: "https://notes-app-omega-puce.vercel.app/",
      githubLink: "https://github.com/sunny-sharma85/Notes-app"
    }
  ];

  return (
    <section id="projects" className="bg-gray-950 text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            A showcase of web applications built with modern frontend technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all shadow-xl group"
            >
              <div>
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                    <FaLaptopCode size={24} />
                  </div>
                </div>

                {/* Project Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2.5 py-1 bg-gray-950/80 border border-gray-800 text-cyan-400 text-xs font-mono rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link Tags / Buttons */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-800/80">
                {/* GitHub Link Tag */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-medium text-sm transition-all border border-gray-700"
                >
                  <FaGithub size={16} /> Code
                </a>

                {/* Live Demo Link Tag */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-gray-950 font-bold text-sm transition-all shadow-md hover:shadow-cyan-500/20"
                >
                  <FaExternalLinkAlt size={14} /> Live Demo
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;