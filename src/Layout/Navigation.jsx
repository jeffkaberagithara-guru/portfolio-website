import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    navItems.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleMobileLink = (event, href) => {
    event.preventDefault();
    document.body.style.overflow = '';
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/70 backdrop-blur-xl border-b border-orange-500/10 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <motion.a
            href="#home"
            aria-label="Back to top — Jeff Kabera"
            className="flex items-center cursor-pointer shrink-0"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => handleMobileLink(e, '#home')}
          >
            <img
              src="/Logo6-light.png"
              alt="Kabera logo"
              className="h-11 md:h-14 w-auto object-contain drop-shadow-[0_0_14px_rgba(249,115,22,0.55)] transition-[filter] duration-300 hover:drop-shadow-[0_0_26px_rgba(249,115,22,0.85)]"
            />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`relative px-4 py-2 cursor-pointer group rounded-full ${
                    isActive ? 'text-orange-400' : 'text-gray-300 hover:text-gray-100'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 rounded-full border transition-all duration-300 ${
                      isActive
                        ? 'bg-orange-500/15 border-orange-500/40'
                        : 'bg-transparent border-transparent group-hover:bg-orange-500/10 group-hover:border-orange-500/30'
                    }`}
                  />
                  <span className="relative z-10 text-base font-semibold tracking-wide">
                    {item.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0.5 left-4 right-4 h-[3px] origin-left rounded-full bg-linear-to-r from-orange-400 to-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)] transition-transform duration-300 ease-out ${
                      isActive
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            className="md:hidden text-white p-2.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 cursor-pointer relative overflow-hidden transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isMobileMenuOpen ? 'close' : 'open'}
                className="flex items-center justify-center"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence initial={false}>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-3 pb-4 space-y-1.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.name.toLowerCase();
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleMobileLink(e, item.href)}
                      aria-current={isActive ? 'page' : undefined}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                      className={`relative w-full text-left py-3 pl-6 pr-4 rounded-xl transition-all duration-200 flex items-center gap-3 cursor-pointer ${
                        isActive
                          ? 'bg-orange-500/15 text-orange-300'
                          : 'text-gray-300 hover:bg-orange-500/10 hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full bg-linear-to-b from-orange-400 to-orange-500"
                        />
                      )}
                      <span className="flex-1 text-base font-medium">{item.name}</span>
                      <span
                        aria-hidden="true"
                        className={`w-1.5 h-1.5 border-r-2 border-t-2 border-orange-400 rotate-45 transition-opacity duration-200 ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;