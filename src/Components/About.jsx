import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout, FiAward, FiMapPin, FiCalendar } from 'react-icons/fi';

function About() {
    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const stats = [
        { number: '2+', label: 'Years Experience', icon: FiCalendar },
        { number: '50+', label: 'Projects Completed', icon: FiAward },
        { number: '100%', label: 'Client Satisfaction', icon: FiCode }
    ];

    const skills = [
        { name: 'Frontend Development', level: 90 },
        { name: 'Backend Development', level: 85 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Problem Solving', level: 95 }
    ];

    return (
        <section id="about" className="py-20 px-4 bg-linear-to-br from-black via-gray-900 to-orange-900">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                        <span className="text-orange-400 text-sm font-medium">Get to know me</span>
                    </motion.div>
                    
                    <motion.h1 
                        className="text-5xl md:text-6xl font-black text-white mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        About <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">Me</span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Passionate developer crafting digital experiences that make a difference
                    </motion.p>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image & Stats */}
                    <motion.div
                        className="flex flex-col items-center lg:items-start"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Profile Image */}
                        <motion.div 
                            className="relative mb-8"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative">
                                <div className="relative z-10 w-80 h-105 rounded-2xl overflow-hidden border-4 border-orange-500/20 shadow-2xl shadow-orange-500/20">
                                    <img 
                                        src="/2.JPG" 
                                        alt="Jeff Kabera - Full Stack Developer" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                
                                {/* Floating Elements */}
                                <motion.div 
                                    className="absolute -top-4 -left-4 w-20 h-20 bg-orange-500/20 rounded-full blur-xl"
                                    animate={{ 
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{ 
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                
                                <motion.div 
                                    className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-400/30 rounded-full blur-lg"
                                    animate={{ 
                                        scale: [1.2, 1, 1.2],
                                        opacity: [0.4, 0.7, 0.4]
                                    }}
                                    transition={{ 
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div 
                            className="grid grid-cols-3 gap-6 w-full max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center p-4 bg-black/30 rounded-2xl border border-orange-500/10 hover:border-orange-500/30 transition-all duration-100"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <stat.icon className="text-orange-500 text-2xl mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Introduction */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Hello! I'm <span className="text-orange-400">Jeff Kabera</span>
                            </h2>
                            
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                A passionate <span className="text-orange-400 font-medium">Full-Stack Developer</span> and <span className="text-orange-400 font-medium">UI/UX Designer</span> based in Nairobi, Kenya. 
                                I specialize in creating digital experiences that are not only visually stunning but also 
                                highly functional and user-centered.
                            </p>
                            
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                With expertise spanning both frontend and backend technologies, I bridge the gap between 
                                design and development. I believe in writing clean, efficient code and creating interfaces 
                                that users love to interact with.
                            </p>
                        </motion.div>

                        {/* Skills Progress */}
                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">My Expertise</h3>
                            <div className="space-y-4">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center justify-between"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="text-gray-300 font-medium flex-1 text-left">{skill.name}</span>
                                        <div className="w-24 bg-gray-700 rounded-full h-2 ml-4">
                                            <motion.div
                                                className="h-2 rounded-full bg-linear-to-r from-orange-500 to-orange-600"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                        <span className="text-orange-400 text-sm font-bold w-8 ml-2">{skill.level}%</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <motion.button 
                                onClick={() => scrollToSection('#contact')}
                                className="group bg-linear-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-full cursor-pointer font-semibold flex items-center gap-3 justify-center hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-100 mx-auto lg:mx-0"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiLayout className="group-hover:scale-110 transition-transform duration-100" />
                                Let's Create Something Amazing
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    {[
                        { icon: FiCode, title: 'Clean Code', desc: 'Writing maintainable and scalable code following best practices' },
                        { icon: FiLayout, title: 'User Focused', desc: 'Designing with the end-user in mind for optimal experience' },
                        { icon: FiDatabase, title: 'Performance', desc: 'Building fast, efficient applications that scale seamlessly' }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6 bg-black/30 rounded-2xl border border-orange-500/10 hover:border-orange-500/30 transition-all duration-100 group"
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <item.icon className="text-orange-500 text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-100" />
                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default About;