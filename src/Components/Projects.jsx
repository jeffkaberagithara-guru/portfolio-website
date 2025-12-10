import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features user authentication, payment processing, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "Full Stack",
      github: "https://github.com/yourusername/ecommerce-platform",
      live: "https://your-ecommerce-demo.netlify.app",
      featured: true
    },
    {
      title: "Task Management SaaS",
      description: "A collaborative task management application with real-time updates, team workspaces, and advanced project tracking features.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Python", "PostgreSQL", "Socket.io", "Tailwind"],
      category: "Backend Focus",
      github: "https://github.com/yourusername/task-manager",
      live: "https://your-taskapp.vercel.app",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing modern web development practices with smooth animations and optimized performance.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "Frontend Focus",
      github: "https://github.com/yourusername/portfolio",
      live: "https://jeffkabera.dev",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Chart.js", "Weather API", "Geolocation"],
      category: "UI/UX Design",
      github: "https://github.com/yourusername/weather-app",
      live: "https://your-weather-app.netlify.app",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 px-4 bg-linear-to-br from-black via-gray-900 to-orange-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 px-4 md:px-0"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-400 text-sm font-medium">Featured Work</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 md:mb-6">
            Recent <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">Projects</span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my full-stack capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 px-4 md:px-0">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-100 hover:transform hover:-translate-y-2 h-full flex flex-col">
                {/* Project Image */}
                <div className="h-48 sm:h-56 md:h-64 bg-linear-to-r from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 md:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs md:text-sm border border-blue-500/30">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    {project.featured && (
                      <span className="px-2 md:px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs md:text-sm border border-yellow-500/30">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">{project.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4 flex-1">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 md:px-3 py-1 bg-white/10 rounded-full text-xs md:text-sm text-gray-300 hover:bg-white/20 transition-colors duration-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 md:gap-4 mt-auto">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 md:gap-2 text-white bg-linear-to-r from-blue-600 to-purple-600 px-3 md:px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-100 flex-1 justify-center text-sm md:text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink className="text-sm md:text-base" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 md:gap-2 text-gray-400 border border-gray-600 px-3 md:px-4 py-2 rounded-lg font-semibold hover:bg-white/10 transition-all duration-100 flex-1 justify-center text-sm md:text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub className="text-sm md:text-base" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;