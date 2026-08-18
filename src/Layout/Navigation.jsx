import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);

        const scrollPosition = window.scrollY + 120;
        let current = 'home';
        for (const item of navItems) {
          const section = document.querySelector(item.href);
          if (section && section.offsetTop <= scrollPosition) {
            current = item.name.toLowerCase();
          }
        }
        setActiveSection(current);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-100 ${
        isScrolled 
          ? 'bg-black shadow-2xl shadow-black/60' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Animated Logo */}
          <motion.div
            className="flex items-center cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#home')}
          >
            <motion.div 
              className="relative flex items-center"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Soft ambient glow behind the transparent logo */}
              <motion.div
                className="absolute inset-0 bg-orange-500/15 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-100"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <img
                src="/Logo6-light.png"
                alt="Kabera logo"
                className="relative h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_14px_rgba(249,115,22,0.55)] group-hover:drop-shadow-[0_0_26px_rgba(249,115,22,0.85)] transition-all duration-100"
              />
            </motion.div>
          </motion.div>

          {/* Desktop Menu with Elegant Animations */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 cursor-pointer group rounded-full ${activeSection === item.name.toLowerCase() ? 'text-orange-400' : 'text-gray-300'}`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                {/* Pill Background */}
                <div
                  className={`absolute inset-0 rounded-full border transition-all duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? 'bg-orange-500/15 border-orange-500/40'
                      : 'bg-transparent border-transparent group-hover:bg-orange-500/10 group-hover:border-orange-500/30'
                  }`}
                  aria-hidden="true"
                />

                {/* Label */}
                <span
                  className={`relative z-10 text-base font-semibold tracking-wide transition-all duration-300 group-hover:text-orange-300 group-hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.7)] ${
                    activeSection === item.name.toLowerCase() ? 'text-orange-400' : ''
                  }`}
                >
                  {item.name}
                </span>

                {/* Sliding Underline */}
                <div
                  className={`absolute bottom-0.5 left-4 right-4 h-[3px] origin-left rounded-full bg-linear-to-r from-orange-400 to-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)] transition-transform duration-300 ease-out ${
                    activeSection === item.name.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                  aria-hidden="true"
                />
              </motion.button>
            ))}
          </div>

          {/* Animated Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2 md:p-3 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 cursor-pointer group relative overflow-hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1, rotate: isMobileMenuOpen ? 0 : 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Button Glow Effect */}
            <motion.div 
              className="absolute inset-0 bg-orange-500/20 rounded-xl scale-0 group-hover:scale-100"
              transition={{ duration: 0.4 }}
            />
            {isMobileMenuOpen ? 
              <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FiX size={20} />
              </motion.div> : 
              <motion.div
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FiMenu size={20} />
              </motion.div>
            }
          </motion.button>
        </div>

        {/* Animated Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
          } transition-all duration-500 ease-out`}
        >
          <motion.div 
            className="py-3 md:py-4 space-y-2 md:space-y-3 border-t border-orange-500/30 bg-black/95 rounded-b-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`w-full text-left py-2.5 md:py-3 px-4 md:px-6 rounded-xl transition-all duration-100 flex items-center cursor-pointer group relative overflow-hidden ${activeSection === item.name.toLowerCase() ? 'bg-orange-500/15 text-orange-300' : 'text-gray-300 hover:bg-orange-500/10 hover:text-white'}`}
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Slide-in Background Effect */}
                <motion.div 
                  className="absolute inset-0 bg-linear-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 translate-x-full group-hover:translate-x-full"
                  transition={{ duration: 0.6 }}
                />
                
                <motion.span 
                  className="relative z-10 flex-1 text-base font-medium group-hover:text-orange-300 transition-colors duration-100"
                  whileHover={{ x: 4 }}
                >
                  {item.name}
                </motion.span>
                
                {/* Animated Arrow Indicator */}
                <motion.div
                  className={`relative z-10 w-4 h-4 md:w-5 md:h-5 ${activeSection === item.name.toLowerCase() ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 md:w-2 md:h-2 border-r-2 border-t-2 border-orange-400 rotate-45 transform"
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
                
                {/* Active Line Indicator */}
                <motion.div
                  className={`absolute left-0 top-1/2 w-1 h-4 md:h-6 bg-linear-to-b from-orange-400 to-orange-500 rounded-r-full transform -translate-y-1/2 ${activeSection === item.name.toLowerCase() ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  whileHover={{ scaleY: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;