'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavbarProps {
  currentSection: string;
}

export default function Navbar({ currentSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    checkMobile();
    handleScroll();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' }
  ];

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center px-4 py-8"
      animate={{
        y: scrolled ? 0 : 32,
        opacity: scrolled ? 0.95 : 1,
        scale: scrolled ? 0.95 : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className={`glass px-8 py-4 rounded-full flex justify-between items-center transition-all duration-300 ${
        scrolled ? 'bg-black/30 backdrop-blur-lg' : 'bg-black/20 backdrop-blur-md'
      }`}>
        <ul className="hidden md:flex gap-12 text-sm">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className={`transition-colors ${
                  currentSection === item.href.slice(1) 
                    ? 'text-gradient font-medium' 
                    : 'hover:text-white/80'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 glass rounded-2xl overflow-hidden backdrop-blur-lg"
          >
            <ul className="py-4">
              {menuItems.map((item) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={item.href}
                    className={`block px-6 py-3 transition-colors ${
                      currentSection === item.href.slice(1)
                        ? 'text-gradient font-medium' 
                        : 'hover:text-white/80'
                    }`}
                    onClick={handleClick}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 