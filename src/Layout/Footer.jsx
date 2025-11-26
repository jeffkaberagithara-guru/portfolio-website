import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
        { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
        { icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
        { icon: FaInstagram, href: "https://instagram.com/yourusername", label: "Instagram" },
        { icon: FaFacebook, href: "https://facebook.com/yourusername", label: "Facebook" }
    ];

    return (
        <footer className="bg-black border-t border-orange-500/20">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
                    {/* Logo & Copyright */}
                    <motion.div 
                        className="text-center md:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                            <div className="w-6 h-6 bg-linear-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">K</span>
                            </div>
                            <span className="text-xl font-bold bg-linear-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                                Kabera
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Jeff Kabera. All rights reserved.
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div 
                        className="flex justify-center md:justify-end gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-orange-400 transition-colors duration-100 text-xl"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={social.label}
                            >
                                <social.icon />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Enhanced Back to Top Button */}
                <motion.div 
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        onClick={scrollToTop}
                        className="group bg-linear-to-r from-orange-500/10 to-orange-600/10 hover:from-orange-500/20 hover:to-orange-600/20 border border-orange-500/30 hover:border-orange-400 text-gray-400 hover:text-orange-300 px-6 py-3 rounded-full font-semibold flex items-center gap-3 transition-all duration-100 backdrop-blur-sm"
                        whileHover={{ 
                            scale: 1.05,
                            y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-sm group-hover:translate-y-px transition-transform duration-100">
                            Back to Top
                        </span>
                        <motion.div
                            className="relative"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <FiArrowUp className="text-lg group-hover:text-orange-400 transition-colors duration-100" />
                            {/* Subtle glow effect */}
                            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
                        </motion.div>
                    </motion.button>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;