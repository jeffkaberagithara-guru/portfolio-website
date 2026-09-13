import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiExternalLink, FiGithub, FiSearch, FiGlobe, FiServer,
  FiSmartphone, FiBookOpen, FiBriefcase, FiStar, FiCode, FiLock, FiFolder
} from 'react-icons/fi';
import { projects, PROJECT_CATEGORIES, projectCount } from '../data/projects';

const CATEGORY_ICONS = { client: FiBriefcase, webapps: FiGlobe, fullstack: FiServer, mobile: FiSmartphone, learning: FiBookOpen };

const GRADIENTS = [
  'from-orange-500/25 via-amber-600/15 to-orange-700/25',
  'from-cyan-500/20 via-teal-600/10 to-emerald-700/20',
  'from-purple-500/20 via-violet-600/10 to-indigo-700/20',
  'from-rose-500/20 via-pink-600/10 to-fuchsia-700/20',
  'from-blue-500/20 via-sky-600/10 to-cyan-700/20',
  'from-amber-500/25 via-orange-600/15 to-red-700/20'
];

function getGrad(name) { let h=0; for(let i=0;i<name.length;i++) h=name.charCodeAt(i)+((h<<5)-h); return GRADIENTS[Math.abs(h)%GRADIENTS.length]; }
function mono(t) { const w=t.replace(/[\u2014\u00b7|\u2013]/g,' ').split(/\s+/).filter(Boolean); return w.length>=2?(w[0][0]+w[1][0]).toUpperCase():t.slice(0,2).toUpperCase(); }

const CATEGORY_LABELS = { client:'Client Site', webapps:'Web App', fullstack:'Full-Stack', mobile:'Mobile', learning:'Learning' };

const fadeUp = (d=0) => ({ hidden:{opacity:0,y:28}, visible:{opacity:1,y:0,transition:{duration:0.7,delay:d,ease:[0.22,1,0.36,1]}} });

const Projects = () => {
  const [cat, setCat] = useState('all');
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    let r = cat === 'all' ? projects : projects.filter(p => p.category === cat);
    if (q) { const s = q.toLowerCase(); r = r.filter(p => p.title.toLowerCase().includes(s) || p.name.toLowerCase().includes(s) || p.description.toLowerCase().includes(s) || p.technologies.some(t => t.toLowerCase().includes(s))); }
    return [...r.filter(p => p.featured), ...r.filter(p => !p.featured)];
  }, [cat, q]);

  const counts = useMemo(() => { const c = { all: projects.length }; projects.forEach(p => { c[p.category] = (c[p.category]||0)+1; }); return c; }, []);

  return (
    <section id="projects" className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true,margin:'-80px'}} className="text-center mb-14">
          <motion.div className="inline-flex items-center gap-2.5 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6" variants={fadeUp(0.15)} initial="hidden" whileInView="visible" viewport={{once:true,margin:'-80px'}}>
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"/><span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"/></span>
            <span className="text-orange-400 text-sm font-medium">Featured Work</span>
          </motion.div>
          <motion.h2 className="text-4xl md:text-5xl font-black text-white mb-5" variants={fadeUp(0.25)} initial="hidden" whileInView="visible" viewport={{once:true,margin:'-80px'}}>
            Projects <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">&amp; Work</span>
          </motion.h2>
          <motion.p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto" variants={fadeUp(0.35)} initial="hidden" whileInView="visible" viewport={{once:true,margin:'-80px'}}>
            {projectCount} projects spanning client websites, SaaS tools, full-stack applications and learning experiments
          </motion.p>
        </motion.div>

        {/* Search + Filters */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.7,delay:0.15}} viewport={{once:true,margin:'-60px'}} className="mb-12 space-y-5">
          <div role="search" className="relative max-w-md mx-auto">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none"/>
            <input type="search" placeholder="Search projects or technologies..." value={q} onChange={e=>setQ(e.target.value)} aria-label="Search projects" className="w-full pl-12 pr-4 py-3 bg-black/50 border border-orange-500/20 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 text-sm md:text-base"/>
          </div>
          <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filter projects by category">
            {[{key:'all',label:'All',icon:FiFolder},...PROJECT_CATEGORIES.map(c=>({key:c.key,label:c.label,icon:CATEGORY_ICONS[c.key]}))].map(item=>(
              <button type="button" key={item.key} onClick={()=>setCat(item.key)} aria-pressed={cat===item.key} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer ${cat===item.key?'bg-orange-500/20 border-orange-500/50 text-orange-300 shadow-lg shadow-orange-500/10':'bg-black/40 border-gray-700 text-gray-400 hover:border-orange-500/30 hover:text-gray-200'}`}>
                <item.icon className="text-sm"/>
                {item.label}
                <span className="ml-0.5 text-xs opacity-70">{counts[item.key]||0}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mb-8 text-sm text-gray-500" aria-live="polite">Showing <span className="text-gray-300 font-semibold">{filtered.length}</span> of {projectCount} projects</div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => {
              const spotlight = idx===0 && project.featured;
              const grad = getGrad(project.name);
              const m = mono(project.title);
              const Icon = CATEGORY_ICONS[project.category];
              return (
                <motion.div layout key={project.name} initial={{opacity:0,y:24,scale:0.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:-16,scale:0.97}} transition={{duration:0.45,ease:[0.22,1,0.36,1]}} className={`group ${spotlight?'md:col-span-2':''}`}>
                  <div className={`bg-black/60 rounded-2xl overflow-hidden border border-orange-500/15 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 h-full ${spotlight?'md:grid md:grid-cols-2 md:items-stretch':'flex flex-col'}`}>
                    {/* Cover */}
                    <div className={`relative overflow-hidden bg-linear-to-br ${grad} ${spotlight?'h-64 sm:h-80 md:h-full min-h-[280px]':'h-52 sm:h-60 md:h-64'}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/10 font-black select-none pointer-events-none leading-none" aria-hidden="true" style={{fontSize:spotlight?'clamp(8rem,18vw,14rem)':'clamp(6rem,14vw,10rem)'}}>{m}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/60 text-orange-300 rounded-full text-xs md:text-sm border border-orange-500/30 font-medium backdrop-blur-sm">
                          {Icon && <Icon className="text-xs"/>}
                          {CATEGORY_LABELS[project.category]||project.category}
                        </span>
                      </div>
                      {project.featured && <div className="absolute top-4 right-4 z-10"><span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/25 text-amber-300 rounded-full text-xs md:text-sm border border-amber-500/30 font-medium backdrop-blur-sm"><FiStar className="text-xs"/>Featured</span></div>}
                      <div className="absolute inset-0 bg-black/70 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity duration-300 flex items-center justify-center gap-4">
                        {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-linear-to-r from-orange-600 to-orange-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm translate-y-3 group-hover:translate-y-0 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500/30"><FiExternalLink className="text-base"/>Live Demo</a>}
                        <a href={project.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-300 border border-gray-600 bg-black/40 px-5 py-2.5 rounded-xl font-semibold text-sm translate-y-3 group-hover:translate-y-0 transition-transform duration-300 hover:bg-white/10 hover:text-white hover:border-gray-400"><FiGithub className="text-base"/>Code</a>
                      </div>
                    </div>
                    {/* Content */}
                    <div className={`p-6 md:p-7 flex flex-col ${spotlight?'md:justify-center':'flex-1'}`}>
                      <h3 className={`text-xl font-bold text-white mb-3 ${spotlight?'md:text-3xl':'md:text-2xl'}`}>{project.title}</h3>
                      <p className="text-sm text-gray-400 mb-5 flex-1 leading-relaxed line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies.slice(0,5).map(t=><span key={t} className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs text-gray-300 hover:bg-orange-500/20 hover:text-white transition-colors duration-300">{t}</span>)}
                        {project.technologies.length>5 && <span className="px-3 py-1 bg-black/40 border border-gray-700 rounded-full text-xs text-gray-500">+{project.technologies.length-5} more</span>}
                      </div>
                      <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-orange-500/10">
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-500 font-mono">{project.name}</span>
                          <span className="text-gray-700">|</span>
                          <span className="text-xs text-gray-500">{project.year}</span>
                          {project.isPrivate && <span className="inline-flex items-center gap-1 text-xs text-amber-500/70"><FiLock className="text-[10px]"/>Private</span>}
                          {project.live && <span className="inline-flex items-center gap-1 text-xs text-emerald-400/70"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>Live</span>}
                        </div>
                        <div className="flex gap-2">
                          {project.live && <motion.a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white bg-orange-600/80 hover:bg-orange-600 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300" whileHover={{scale:1.05}} whileTap={{scale:0.95}}><FiExternalLink className="text-xs"/>Live</motion.a>}
                          <motion.a href={project.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-400 border border-gray-700 hover:bg-white/10 hover:text-white hover:border-gray-500 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300" whileHover={{scale:1.05}} whileTap={{scale:0.95}}><FiCode className="text-xs"/>Code</motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        <AnimatePresence>{filtered.length===0 && <motion.div key="empty" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0}} className="text-center py-20"><div className="p-4 bg-orange-500/10 rounded-full w-fit mx-auto mb-6"><FiSearch className="text-3xl text-orange-400"/></div><h3 className="text-xl font-bold text-white mb-2">No projects found</h3><p className="text-gray-400">Try adjusting your search or selecting a different category.</p></motion.div>}</AnimatePresence>

        {/* View on GitHub */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.7,delay:0.3}} viewport={{once:true,margin:'-40px'}} className="text-center mt-16">
          <motion.a href="https://github.com/jeffkaberagithara-guru?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-black/40 hover:bg-orange-500/10 border border-orange-500/20 hover:border-orange-500/40 text-gray-300 hover:text-orange-300 px-8 py-4 rounded-full font-semibold transition-all duration-300" whileHover={{scale:1.04,y:-2}} whileTap={{scale:0.97}}>
            <FiGithub className="text-lg"/>
            View all {projectCount} repositories on GitHub
            <FiExternalLink className="text-sm opacity-60"/>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;