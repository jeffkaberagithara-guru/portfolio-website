import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing modern web development practices with smooth animations and optimized performance.",
      image: "/11.webp",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "Frontend Focus",
      github: "https://github.com/jeffkaberagithara-guru",
      live: "https://kabera-portfolio.onrender.com",
      featured: true
    },
    {
      title: "ResQ Auto Roadside Assistance Platform",
      description: "A digital roadside assistance solution connecting drivers with immediate help. Features real-service request dispatch, service provider management, GPS integration, and emergency assistance coordination for breakdowns, towing, and vehicle recovery.",
      image: "/Logo.webp",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Map API"],
      category: "Emergency Services",
      github: "https://github.com/jeffkaberagithara-guru",
      live: "https://resq-auto.onrender.com",
      featured: true
    },
    {
      title: "Artex Solutions Construction Management Platform",
      description: "A specialized construction industry platform offering project management, client collaboration tools, and service showcases. Features include project portfolio display, service breakdowns, contractor management, and client communication systems tailored for construction workflows.",
      image: "/Construction.avif",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      category: "Business Solutions",
      github: "https://github.com/jeffkaberagithara-guru",
      live: "https://artex-solutions.onrender.com",
      featured: true
    },
    {
      title: "e-phone E-commerce Platform",
      description: "A modern e-commerce website specializing in premium smartphones, featuring product listings, competitive pricing, and services like phone repairs and trade-ins.",
      image: "/Phones.webp",
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS"],
      category: "Full Stack",
      github: "https://github.com/jeffkaberagithara-guru",
      live: "https://ephone-website.onrender.com",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/Weather.webp",
      technologies: ["Vue.js", "Chart.js", "Weather API", "Geolocation"],
      category: "UI/UX Design",
      github: "https://github.com/jeffkaberagithara-guru",
      live: "https://your-weather-app.netlify.app",
      featured: false
    }
  ];

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
    }
  });

  return (
    <section id="projects" className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6"
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            <span className="text-orange-400 text-sm font-medium">Featured Work</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-black text-white mb-5"
            variants={fadeUp(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            Recent <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">Projects</span>
          </motion.h2>

          <motion.p
            className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto"
            variants={fadeUp(0.35)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            Here are some of my recent projects that showcase my full-stack capabilities
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isSpotlight = index === 0;

            return (
              <motion.div
                key={index}
                variants={fadeUp(index * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className={`group ${isSpotlight ? 'lg:col-span-2' : ''}`}
              >
                <div
                  className={`bg-black/60 rounded-2xl overflow-hidden border border-orange-500/15 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 h-full ${
                    isSpotlight ? 'lg:grid lg:grid-cols-2 lg:items-stretch' : 'flex flex-col'
                  }`}
                >
                  {/* Project Image */}
                  <div
                    className={`relative overflow-hidden bg-linear-to-r from-orange-500/15 to-orange-700/15 ${
                      isSpotlight ? 'h-64 sm:h-80 md:h-96 lg:h-full min-h-[280px]' : 'h-52 sm:h-60 md:h-64'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" aria-hidden="true" />

                    {/* Hover overlay with quick actions */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-linear-to-r from-orange-600 to-orange-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm md:text-base translate-y-3 group-hover:translate-y-0 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500/30"
                      >
                        <FiExternalLink className="text-base" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-300 border border-gray-600 bg-black/40 px-5 py-2.5 rounded-xl font-semibold text-sm md:text-base translate-y-3 group-hover:translate-y-0 transition-transform duration-300 hover:bg-white/10 hover:text-white hover:border-gray-400"
                      >
                        <FiGithub className="text-base" />
                        Code
                      </a>
                    </div>

                    {/* Badges */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="px-3 py-1.5 bg-black/60 text-orange-300 rounded-full text-xs md:text-sm border border-orange-500/30 font-medium">
                        {project.category}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/25 text-amber-300 rounded-full text-xs md:text-sm border border-amber-500/30 font-medium">
                          <FiStar className="text-xs" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className={`p-6 md:p-7 flex flex-col ${isSpotlight ? 'lg:justify-center' : 'flex-1'}`}>
                    <h3 className={`text-xl font-bold text-white mb-3 ${isSpotlight ? 'md:text-3xl' : 'md:text-2xl'}`}>{project.title}</h3>
                    <p className={`text-sm text-gray-400 mb-5 flex-1 leading-relaxed ${isSpotlight ? 'md:text-base' : 'md:text-base'}`}>{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs md:text-sm text-gray-300 hover:bg-orange-500/20 hover:text-white transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4 mt-auto">
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-white bg-linear-to-r from-orange-600 to-orange-700 px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 flex-1 text-sm md:text-base"
                        whileHover={{ scale: 1.03, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FiExternalLink className="text-sm md:text-base" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-gray-400 border border-gray-700 px-5 py-2.5 rounded-xl font-semibold hover:bg-white/10 hover:text-white hover:border-gray-500 transition-all duration-300 flex-1 text-sm md:text-base"
                        whileHover={{ scale: 1.03, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FiGithub className="text-sm md:text-base" />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
