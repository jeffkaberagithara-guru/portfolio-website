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

  const others = [
    { name: "REST APIs", icon: FiFeather, color: "text-green-400" },
    { name: "GitHub", icon: FiCode, color: "text-gray-300" },
    { name: "Responsive Design", icon: FiLayout, color: "text-blue-400" },
    { name: "UI/UX Principles", icon: FiFeather, color: "text-purple-400" },
    { name: "Agile Methodology", icon: FiCode, color: "text-orange-400" },
    { name: "Problem Solving", icon: FiCode, color: "text-cyan-400" }
  ];

  const marqueeSkills = [
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Express", icon: SiExpress, color: "text-gray-300" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
    { name: "Python", icon: SiPython, color: "text-blue-400" },
    { name: "Figma", icon: SiFigma, color: "text-purple-400" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    { name: "FastAPI", icon: SiFastapi, color: "text-green-400" },
    { name: "Render", icon: SiRender, color: "text-blue-300" }
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
    <section id="skills" className="py-24 px-4">
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
            <span className="text-orange-400 text-sm font-medium">What I Work With</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-black text-white mb-5"
            variants={fadeUp(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            Technical <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">Skills</span>
          </motion.h2>

          <motion.p
            className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto"
            variants={fadeUp(0.35)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Tech Logo Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-80px" }}
          className="marquee-mask mb-20 overflow-hidden"
          aria-hidden="true"
        >
          <div className="marquee-track flex gap-4 w-max">
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 px-6 py-3 bg-black/40 border border-orange-500/15 rounded-2xl whitespace-nowrap"
              >
                <skill.icon className={`text-2xl ${skill.color}`} />
                <span className="text-gray-300 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={fadeUp()}
              className="group"
            >
              <div className="bg-black/60 rounded-2xl p-8 border border-orange-500/15 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3.5 rounded-2xl bg-linear-to-r ${category.color} shadow-lg shadow-orange-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <category.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.08 }}
                      viewport={{ once: true, margin: "-40px" }}
                      className="group/skill"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`text-2xl ${skill.color} group-hover/skill:scale-110 transition-transform duration-300`}>
                          <skill.icon />
                        </div>
                        <span className="text-gray-300 font-medium flex-1">{skill.name}</span>
                        <span className="text-orange-400 text-sm font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full ml-9 bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-linear-to-r from-orange-500 to-orange-600"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-40px" }}
                        />
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
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">Other</span> Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {others.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-5 bg-black/40 rounded-2xl border border-orange-500/10 hover:border-orange-400/30 transition-all duration-300 group"
                whileHover={{ scale: 1.06, y: -6 }}
                whileTap={{ scale: 0.96 }}
              >
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/15 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className={`text-2xl ${skill.color}`} />
                </div>
                <span className="text-gray-400 text-sm text-center leading-snug">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
