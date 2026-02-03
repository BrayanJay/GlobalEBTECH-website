import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: 'home' | 'contact';
  setCurrentPage: (page: 'home' | 'contact') => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'contact', hash?: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    if (hash && page === 'home') {
      setTimeout(() => {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-2 shadow-lg">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              CallPro Solutions
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick('home', '#services')}
              className="text-gray-700 hover:text-blue-600 transition-colors relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick('home', '#features')}
              className="text-gray-700 hover:text-blue-600 transition-colors relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick('home', '#testimonials')}
              className="text-gray-700 hover:text-blue-600 transition-colors relative group"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('contact')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-4 border-t">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick('home', '#services')}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  Services
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick('home', '#features')}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  Features
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick('home', '#testimonials')}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  Testimonials
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick('contact')}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  Contact
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick('contact')}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg text-center shadow-lg"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}