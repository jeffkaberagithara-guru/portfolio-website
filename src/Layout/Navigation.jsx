import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState(null);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
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
          ? 'bg-black/95 backdrop-blur-xl border-b border-orange-500/30 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Animated Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#home')}
          >
            <motion.div 
              className="relative"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/30 transition-all duration-100">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              {/* Pulsing Glow Effect */}
              <motion.div 
                className="absolute inset-0 bg-linear-to-br from-orange-400 to-orange-500 rounded-xl blur-md opacity-0 group-hover:opacity-40"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            <div className="flex flex-col">
              <motion.span 
                className="text-2xl font-black bg-linear-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent group-hover:from-orange-300 group-hover:to-orange-400 transition-all duration-100"
                whileHover={{ x: 2 }}
              >
                Kabera
              </motion.span>
              <motion.span 
                className="text-xs text-orange-400/80 font-medium tracking-widest group-hover:text-orange-300 transition-colors duration-100"
                whileHover={{ scale: 1.1 }}
              >
                DEV
              </motion.span>
            </div>
          </motion.div>

          {/* Desktop Menu with Elegant Animations */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                onHoverStart={() => setActiveHover(item.name)}
                onHoverEnd={() => setActiveHover(null)}
                className="text-gray-300 hover:text-white relative py-2 cursor-pointer group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <motion.span 
                  className="relative z-10 text-base font-semibold tracking-wide group-hover:text-orange-300 transition-colors duration-100"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                </motion.span>
                
                {/* Animated Underline with Glow */}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-orange-400 to-orange-500 rounded-full shadow-lg shadow-orange-500/30"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                
                {/* Floating Particles */}
                <motion.div
                  className="absolute -top-1 -right-1 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100"
                  whileHover={{ 
                    scale: [0, 1.5, 1],
                    y: [0, -3, 0],
                    transition: { duration: 0.6 }
                  }}
                />
                
                {/* Background Glow Effect */}
                <motion.div 
                  className="absolute inset-0 bg-orange-500/10 rounded-lg scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

            {/* Animated Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white p-3 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 cursor-pointer group relative overflow-hidden top-6 right-6 z-50"
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
                <FiX size={22} />
              </motion.div> : 
              <motion.div
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FiMenu size={22} />
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
            className="py-4 space-y-3 border-t border-orange-500/30 bg-black/90 backdrop-blur-xl rounded-b-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left text-gray-300 hover:text-white py-3 px-6 rounded-xl hover:bg-orange-500/10 transition-all duration-100 flex items-center cursor-pointer group relative overflow-hidden"
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
                  className="relative z-10 w-5 h-5 opacity-0 group-hover:opacity-100"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-2 h-2 border-r-2 border-t-2 border-orange-400 rotate-45 transform"
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
                
                {/* Active Line Indicator */}
                <motion.div
                  className="absolute left-0 top-1/2 w-1 h-6 bg-linear-to-b from-orange-400 to-orange-500 rounded-r-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100"
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