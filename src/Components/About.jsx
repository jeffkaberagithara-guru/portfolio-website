import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout, FiAward, FiCalendar, FiUsers } from 'react-icons/fi';
import Counter from './Counter';

function About() {
    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const stats = [
        { value: 2, suffix: '+', label: 'Years Experience', icon: FiCalendar },
        { value: 50, suffix: '+', label: 'Projects Completed', icon: FiAward },
        { value: 100, suffix: '%', label: 'Client Satisfaction', icon: FiUsers }
    ];

    const skills = [
        { name: 'Frontend Development', level: 90 },
        { name: 'Backend Development', level: 85 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Problem Solving', level: 95 }
    ];

    const highlights = [
        { icon: FiCode, title: 'Clean Code', desc: 'Writing maintainable and scalable code following best practices' },
        { icon: FiLayout, title: 'User Focused', desc: 'Designing with the end-user in mind for optimal experience' },
        { icon: FiDatabase, title: 'Performance', desc: 'Building fast, efficient applications that scale seamlessly' }
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
        <section id="about" className="py-24 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-80px" }}
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
                        <span className="text-orange-400 text-sm font-medium">Get to know me</span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-black text-white mb-5"
                        variants={fadeUp(0.25)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        About <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">Me</span>
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4"
                        variants={fadeUp(0.35)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        Passionate developer crafting digital experiences that make a difference
                    </motion.p>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
                    {/* Left Column - Image & Stats */}
                    <motion.div
                        className="flex flex-col items-center lg:items-start"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        {/* Profile Image */}
                        <motion.div
                            className="relative w-full max-w-xs mx-auto lg:mx-0 mb-12"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Glow behind */}
                            <div
                                className="absolute -inset-5 rounded-[2.5rem]"
                                style={{
                                    background:
                                        "radial-gradient(circle at 35% 20%, rgba(249,115,22,0.28) 0%, rgba(234,88,12,0.10) 45%, rgba(0,0,0,0) 72%)"
                                }}
                                aria-hidden="true"
                            />

                            {/* Frame */}
                            <div className="relative rounded-[2rem] p-2 bg-black/60 border border-orange-500/30 shadow-2xl shadow-black/50">
                                <div className="relative rounded-[1.6rem] overflow-hidden aspect-[4/5]">
                                    <img
                                        src="/2.webp"
                                        alt="Jeff Kabera - Full Stack Developer"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" aria-hidden="true" />
                                </div>
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                className="absolute -right-4 sm:-right-8 -bottom-6 flex items-center gap-3 px-4 py-3 bg-black/85 border border-orange-500/30 rounded-2xl shadow-xl"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="p-2.5 rounded-xl bg-linear-to-br from-orange-500 to-orange-600 text-white">
                                    <FiCode className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-white font-bold leading-none">Base in</p>
                                    <p className="text-gray-400 text-xs mt-1">Nairobi, Kenya</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-3 gap-4 w-full max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true, margin: "-80px" }}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center p-5 bg-black/40 rounded-2xl border border-orange-500/15 hover:border-orange-500/40 transition-all duration-300"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <stat.icon className="text-orange-500 text-2xl mx-auto mb-3" />
                                    <div className="text-2xl font-bold text-white">
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-xs text-gray-400 mt-1 leading-snug">{stat.label}</div>
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
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        <motion.div variants={fadeUp(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                                Hello! I'm <span className="text-orange-400">Jeff Kabera</span>
                            </h3>

                            <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
                                A passionate <span className="text-orange-400 font-medium">Full-Stack Developer</span> and <span className="text-orange-400 font-medium">UI/UX Designer</span> based in Nairobi, Kenya.
                                I specialize in creating digital experiences that are not only visually stunning but also
                                highly functional and user-centered.
                            </p>

                            <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed">
                                With expertise spanning both frontend and backend technologies, I bridge the gap between
                                design and development. I believe in writing clean, efficient code and creating interfaces
                                that users love to interact with.
                            </p>
                        </motion.div>

                        {/* Skills Progress */}
                        <motion.div className="mb-12" variants={fadeUp(0.35)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
                            <h4 className="text-xl md:text-2xl font-bold text-white mb-6">My Expertise</h4>
                            <div className="space-y-5">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true, margin: "-80px" }}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-gray-300 font-medium text-sm md:text-base">{skill.name}</span>
                                            <span className="text-orange-400 text-sm font-bold">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                                            <motion.div
                                                className="h-full rounded-full bg-linear-to-r from-orange-500 to-orange-600"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1.1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                                                viewport={{ once: true, margin: "-80px" }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div variants={fadeUp(0.5)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
                            <motion.button
                                onClick={() => scrollToSection('#contact')}
                                className="group inline-flex items-center gap-3 bg-linear-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 text-sm md:text-base"
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <FiLayout className="group-hover:rotate-12 transition-transform duration-300" />
                                Let's Create Something Amazing
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Highlights */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-7 bg-black/40 rounded-2xl border border-orange-500/15 hover:border-orange-500/40 transition-all duration-300 group"
                            whileHover={{ scale: 1.04, y: -6 }}
                        >
                            <div className="p-3 w-fit mx-auto mb-5 rounded-2xl bg-linear-to-br from-orange-500/15 to-orange-600/15 border border-orange-500/25 group-hover:scale-110 group-hover:border-orange-400/50 transition-all duration-300">
                                <item.icon className="text-orange-500 text-2xl" />
                            </div>
                            <h4 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default About;
