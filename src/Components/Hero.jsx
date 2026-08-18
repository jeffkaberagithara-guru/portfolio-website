import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiDownload, FiAward, FiLayers } from "react-icons/fi";
import Typewriter from './Typewriter';

function Hero() {
    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const socials = [
        { icon: FaGithub, href: "https://github.com/jeffkaberagithara-guru", label: "GitHub", color: "hover:text-orange-400" },
        { icon: FaLinkedin, href: "https://linkedin.com/in/kabera-githara-21067839b", label: "LinkedIn", color: "hover:text-orange-500" },
        { icon: FaTwitter, href: "https://twitter.com/JeffKaberaDev", label: "Twitter", color: "hover:text-orange-300" },
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
        <section id="home" className="relative min-h-screen flex flex-col overflow-hidden w-full pt-20 md:pt-24">
            {/* Decorative Background */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(249,115,22,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.6) 1px, transparent 1px)",
                        backgroundSize: "54px 54px"
                    }}
                />
                {/* Ambient Glow Orbs (cheap radial gradients, no blur filter) */}
                <motion.div
                    className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(234,88,12,0.28) 0%, rgba(234,88,12,0) 65%)"
                    }}
                    animate={{ opacity: [0.5, 0.9, 0.5] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-48 -left-40 w-[540px] h-[540px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(249,115,22,0.20) 0%, rgba(249,115,22,0) 65%)"
                    }}
                    animate={{ opacity: [0.4, 0.75, 0.4] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Centered Content */}
            <div className="relative flex-1 flex items-center w-full">
                <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                        {/* Welcome Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2.5 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-5"
                            variants={fadeUp(0.1)}
                            initial="hidden"
                            animate="visible"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500" />
                            </span>
                            <span className="text-orange-400 text-sm font-medium">Available for freelance work</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] mb-3"
                            variants={fadeUp(0.2)}
                            initial="hidden"
                            animate="visible"
                        >
                            Full-Stack{" "}
                            <Typewriter words={["Developer", "UI/UX Designer", "Software Engineer", "Problem Solver"]} />
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            className="text-xl md:text-2xl text-gray-300 mb-2 font-medium"
                            variants={fadeUp(0.3)}
                            initial="hidden"
                            animate="visible"
                        >
                            Transforming ideas into{" "}
                            <span className="text-orange-400 font-semibold">digital experiences</span>{" "}
                            that captivate and convert
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            className="text-base md:text-lg text-gray-400 mb-5 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                            variants={fadeUp(0.4)}
                            initial="hidden"
                            animate="visible"
                        >
                            Creating beautiful, functional digital experiences with clean code and innovative design solutions.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 mb-5 justify-center lg:justify-start"
                            variants={fadeUp(0.5)}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.button
                                onClick={() => scrollToSection('#projects')}
                                className="group inline-flex items-center justify-center gap-2.5 bg-linear-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 text-base md:text-lg"
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                View My Work
                                <FiArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
                            </motion.button>

                            <motion.a
                                href="/Jeff%20Kabera%20Githara%20Resume.pdf"
                                download="Jeff Kabera Githara Resume.pdf"
                                className="group inline-flex items-center justify-center gap-2.5 border border-orange-500/40 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500/10 hover:border-orange-400 transition-all duration-300 text-base md:text-lg w-full sm:w-auto"
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <FiDownload className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                                Download CV
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-4"
                            variants={fadeUp(0.6)}
                            initial="hidden"
                            animate="visible"
                        >
                            <span className="text-gray-300 text-base font-medium tracking-wide whitespace-nowrap">
                                Follow me:
                            </span>
                            <div className="flex items-center gap-3">
                                {socials.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className={`p-3 rounded-xl bg-black/40 border border-orange-500/25 text-gray-300 ${social.color} transition-all duration-300`}
                                        whileHover={{ scale: 1.15, y: -3 }}
                                        whileTap={{ scale: 0.92 }}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                    >
                                        <social.icon className="text-xl" />
                                    </motion.a>
                                ))}
                            </div>
                            <div className="h-px w-16 lg:w-24 bg-linear-to-r from-orange-500/50 to-transparent hidden md:block" aria-hidden="true" />
                        </motion.div>
                    </div>

                    {/* Profile Image */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 60, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="relative w-full max-w-[240px] sm:max-w-[300px]">
                            {/* Glow behind image */}
                            <div
                                className="absolute -inset-6 rounded-[2.5rem]"
                                style={{
                                    background:
                                        "radial-gradient(circle at 30% 20%, rgba(249,115,22,0.35) 0%, rgba(234,88,12,0.12) 45%, rgba(0,0,0,0) 72%)"
                                }}
                                aria-hidden="true"
                            />

                            {/* Frame */}
                            <div className="relative rounded-[2rem] p-2 bg-black/60 border border-orange-500/30 shadow-2xl shadow-black/50">
                                <div className="relative rounded-[1.6rem] overflow-hidden aspect-[4/5]">
                                    <img
                                        src="/4.webp"
                                        alt="Jeff Kabera - Full Stack Developer"
                                        className="w-full h-full object-cover"
                                        loading="eager"
                                        fetchPriority="high"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
                                    {/* Name plate */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-white font-bold text-xl leading-tight">Jeff Kabera</p>
                                        <p className="text-orange-300 text-sm font-medium tracking-wide">Full-Stack Developer</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge - Experience */}
                            <motion.div
                                className="absolute left-1 sm:-left-6 top-8 flex items-center gap-2.5 px-4 py-3 bg-black/85 border border-orange-500/30 rounded-xl shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="p-2.5 rounded-lg bg-linear-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30">
                                    <FiAward className="text-lg" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-base leading-none">2+ Years</p>
                                    <p className="text-gray-400 text-xs mt-1">Experience</p>
                                </div>
                            </motion.div>

                            {/* Floating Badge - Projects */}
                            <motion.div
                                className="absolute right-1 sm:-right-6 bottom-16 flex items-center gap-2.5 px-4 py-3 bg-black/85 border border-orange-500/30 rounded-xl shadow-xl"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="p-2.5 rounded-lg bg-linear-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30">
                                    <FiLayers className="text-lg" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-base leading-none">50+ Projects</p>
                                    <p className="text-gray-400 text-xs mt-1">Delivered</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Hero;
