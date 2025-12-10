import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiDownload } from "react-icons/fi";

function Hero() {
    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 py-8 sm:py-12 md:py-16 bg-linear-to-br from-black via-gray-900 to-orange-900 overflow-x-hidden w-full">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                
                {/* Text Content */}
                <motion.div 
                    className="text-center lg:text-left px-4 md:px-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Welcome Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4 md:mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-500 rounded-full animate-pulse"></div>
                        <span className="text-orange-400 text-xs md:text-sm font-medium">Welcome to my digital space</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1 
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Full-Stack{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                            Developer
                        </span>{" "}
                        &{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-300 to-orange-500">
                            UI/UX Designer
                        </span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.h2 
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 md:mb-4 font-semibold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Transforming ideas into{" "}
                        <span className="text-orange-400">digital experiences</span>{" "}
                        that captivate and convert
                    </motion.h2>

                    {/* Description */}
                    <motion.p 
                        className="text-sm md:text-base lg:text-lg text-gray-400 mb-4 md:mb-6 max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        Creating beautiful, functional digital experiences with clean code and innovative design solutions.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <motion.button 
                            onClick={() => scrollToSection('#projects')}
                            className="group bg-linear-to-r from-orange-600 to-orange-700 text-white px-4 md:px-6 lg:px-8 py-2.5 md:py-3 rounded-full cursor-pointer font-semibold flex items-center gap-2 justify-center hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-100 text-sm md:text-base"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-100" />
                        </motion.button>

                        <a href="/Resume.pdf" download="Resume.pdf" target="_blank" rel="noopener noreferrer">
                            <motion.button 
                                className="group border border-orange-500/30 text-white px-4 md:px-6 lg:px-8 py-2.5 md:py-3 rounded-full cursor-pointer font-semibold flex items-center gap-2 justify-center hover:bg-orange-500/10 hover:border-orange-400 transition-all duration-100 text-sm md:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiDownload className="group-hover:scale-110 transition-transform duration-100" />
                                Download CV
                            </motion.button>
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div 
                        className="flex justify-center lg:justify-start gap-3 md:gap-4 mt-4 md:mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                    >
                        <span className="text-gray-500 text-xs md:text-sm font-medium self-center">Follow me:</span>
                        {[
                            { icon: FaGithub, href: "https://github.com/jeffkaberagithara-guru", color: "hover:text-orange-400", label: "GitHub" },
                            { icon: FaLinkedin, href: "https://linkedin.com/in/kabera-githara-21067839b", color: "hover:text-orange-500", label: "LinkedIn" },
                            { icon: FaTwitter, href: "https://twitter.com/JeffKaberaDev", color: "hover:text-orange-300", label: "Twitter" },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-500 text-lg md:text-xl ${social.color} transition-colors duration-100 relative group`}
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={social.label}
                            >
                                <social.icon />
                                {/* Tooltip */}
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-100 whitespace-nowrap">
                                    {social.label}
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Profile Image Section */}
                <div className="flex flex-col items-center lg:items-end">
                    {/* Profile Image Container */}
                    <motion.div 
                        className="relative mb-4 md:mb-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative">
                            {/* Main Image Container */}
                            <div className="relative z-10 w-64 h-80 sm:w-72 sm:h-90 md:w-80 md:h-100 lg:w-96 lg:h-120 rounded-2xl overflow-hidden border-4 border-orange-500/20 shadow-2xl shadow-orange-500/20">
                                <img 
                                    src="/4.JPG" 
                                    alt="Jeff Kabera - Full Stack Developer" 
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-100"
                                />
                            </div>
                            
                            {/* Floating Elements */}
                            <motion.div 
                                className="absolute -top-3 -left-3 w-12 h-12 md:w-16 md:h-16 bg-orange-500/20 rounded-full blur-lg"
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
                                className="absolute -bottom-3 -right-3 w-10 h-10 md:w-14 md:h-14 bg-orange-400/30 rounded-full blur-md"
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

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                className="absolute bottom-4 left-1/2 lg:left-[50%] transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center text-gray-400 hover:text-orange-300 transition-colors duration-100 cursor-pointer group"
                    onClick={() => scrollToSection('#about')}
                >
                    <span className="text-xs mb-1 font-medium group-hover:scale-105 transition-transform duration-100">
                        Scroll
                    </span>
                    <div className="w-4 h-6 border border-orange-500/40 rounded-full flex justify-center group-hover:border-orange-400 transition-colors duration-100 relative">
                        <motion.div
                            animate={{ y: [0, 4, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-1.5 bg-orange-500 rounded-full mt-1 group-hover:bg-orange-400 transition-colors duration-100"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Hero;