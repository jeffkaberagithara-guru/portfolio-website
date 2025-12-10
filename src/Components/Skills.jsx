import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiLayout,
  FiFeather 
} from 'react-icons/fi';

import { 
  SiHtml5, 
  SiCss3, 
  SiTypescript, 
  SiJavascript, 
  SiPython,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiPostman,
  SiFastapi,
  SiRender
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FiCode,
      color: "from-orange-400 to-orange-500",
      skills: [
        { name: "HTML5", icon: SiHtml5, level: 95, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss3, level: 90, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, level: 88, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, level: 85, color: "text-blue-600" },
        { name: "React", icon: SiReact, level: 92, color: "text-cyan-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, color: "text-teal-400" },
        { name: "Bootstrap", icon: SiBootstrap, level: 85, color: "text-purple-500" }
      ]
    },
    {
      title: "Backend Development",
      icon: FiServer,
      color: "from-orange-500 to-orange-600",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: 88, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, level: 85, color: "text-gray-300" },
        { name: "Python", icon: SiPython, level: 82, color: "text-blue-400" },
        { name: "FastAPI", icon: SiFastapi, level: 80, color: "text-green-400" },
        { name: "MongoDB", icon: SiMongodb, level: 85, color: "text-green-600" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: FiDatabase,
      color: "from-orange-600 to-orange-700",
      skills: [
        { name: "Figma", icon: SiFigma, level: 88, color: "text-purple-400" },
        { name: "Postman", icon: SiPostman, level: 90, color: "text-orange-500" },
        { name: "Render", icon: SiRender, level: 85, color: "text-blue-300" },
        { name: "Git", icon: FiCode, level: 87, color: "text-orange-400" },
        { name: "VS Code", icon: FiCode, level: 95, color: "text-blue-400" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 px-4 bg-linear-to-br from-black via-gray-900 to-orange-900">
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
            <span className="text-orange-400 text-sm font-medium">My Expertise</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 md:mb-6">
            Technical <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">Skills</span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-orange-500/20 hover:border-orange-400/30 transition-all duration-100 hover:transform hover:-translate-y-2 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className={`p-2.5 md:p-3 rounded-2xl bg-linear-to-r ${category.color} group-hover:scale-110 transition-transform duration-100`}>
                    <category.icon className="text-xl md:text-2xl text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4 md:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex items-center justify-between group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-2 md:gap-3 flex-1">
                        <div className={`text-xl md:text-2xl ${skill.color} group-hover:scale-110 transition-transform duration-100`}>
                          <skill.icon />
                        </div>
                        <span className="text-gray-300 font-medium text-sm md:text-base">{skill.name}</span>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-16 md:w-20 bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="h-2 rounded-full bg-linear-to-r from-orange-500 to-orange-600"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <span className="text-orange-400 text-xs md:text-sm font-bold w-6 md:w-8">
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 px-4 md:px-0"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-6 md:mb-8">Other Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: "REST APIs", icon: FiFeather, color: "text-green-400" },
              { name: "GitHub", icon: FiCode, color: "text-gray-300" },
              { name: "Responsive Design", icon: FiLayout, color: "text-blue-400" },
              { name: "UI/UX Principles", icon: FiFeather, color: "text-purple-400" },
              { name: "Agile Methodology", icon: FiCode, color: "text-orange-400" },
              { name: "Problem Solving", icon: FiCode, color: "text-cyan-400" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-3 md:p-4 bg-black/30 rounded-xl border border-orange-500/10 hover:border-orange-400/20 transition-all duration-100 group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <skill.icon className={`text-2xl md:text-3xl mb-1 md:mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-100`} />
                <span className="text-gray-400 text-xs md:text-sm text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;