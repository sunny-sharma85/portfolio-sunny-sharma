import React from 'react';
import { FaLaptopCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projectsList = [
    {
      title: "Movie Search App",
      description: "Developed a responsive movie discovery web app allowing users to search titles, view detailed information, ratings, and posters dynamically using external movie database APIs.",
      techStack: ["React.js", , "REST API"],
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
    <section id="projects" className="bg-slate-50 text-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Featured <span className="text-cyan-600">Projects</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A showcase of web applications built with modern frontend technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-400 hover:shadow-lg transition-all duration-200 group"
            >
              <div>
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-cyan-50 rounded-xl text-cyan-600 border border-cyan-100">
                    <FaLaptopCode size={24} />
                  </div>
                </div>

                {/* Project Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-cyan-700 text-xs font-mono font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link Tags / Buttons */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                {/* GitHub Link Tag */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all border border-slate-200"
                >
                  <FaGithub size={16} /> Code
                </a>

                {/* Live Demo Link Tag */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm transition-all shadow-sm hover:shadow-cyan-600/20"
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