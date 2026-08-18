import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/jeffkaberagithara-guru", label: "GitHub", color: "hover:text-orange-400 hover:border-orange-500/50" },
        { icon: FaLinkedin, href: "https://linkedin.com/in/kabera-githara-21067839b", label: "LinkedIn", color: "hover:text-orange-500 hover:border-orange-500/50" },
        { icon: FaTwitter, href: "https://twitter.com/JeffKaberaDev", label: "Twitter", color: "hover:text-orange-300 hover:border-orange-500/50" },
    ];

    return (
        <footer className="bg-black border-t border-orange-500/20">
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
                    {/* Logo & Copyright */}
                    <motion.div
                        className="text-center md:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                            <img
                                src="/Logo6-light.png"
                                alt="Kabera logo"
                                className="h-12 md:h-14 w-auto object-contain drop-shadow-[0_0_14px_rgba(249,115,22,0.5)]"
                            />
                            <div className="text-left">
                                <p className="text-lg font-bold bg-linear-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent leading-tight">
                                    Jeff Kabera
                                </p>
                                <p className="text-xs text-gray-500 tracking-widest">FULL-STACK DEVELOPER</p>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Jeff Kabera. All rights reserved.
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="flex justify-center md:justify-end items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <span className="hidden sm:block text-gray-500 text-sm mr-2">Follow me:</span>
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3.5 bg-black/40 rounded-xl border border-orange-500/15 text-gray-500 transition-all duration-300 ${social.color}`}
                                whileHover={{ scale: 1.12, y: -3 }}
                                whileTap={{ scale: 0.92 }}
                                aria-label={social.label}
                            >
                                <social.icon className="text-lg" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="h-px bg-linear-to-r from-transparent via-orange-500/25 to-transparent mb-10" aria-hidden="true" />

                {/* Back to Top Button */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        onClick={scrollToTop}
                        className="group bg-linear-to-r from-orange-500/10 to-orange-600/10 hover:from-orange-500/25 hover:to-orange-600/25 border border-orange-500/30 hover:border-orange-400 text-gray-400 hover:text-orange-300 px-7 py-3.5 rounded-full font-semibold flex items-center gap-3 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-sm group-hover:-translate-y-px transition-transform duration-300">
                            Back to Top
                        </span>
                        <motion.div
                            className="relative"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FiArrowUp className="text-lg group-hover:text-orange-400 transition-colors duration-300" />
                            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    </motion.button>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;
