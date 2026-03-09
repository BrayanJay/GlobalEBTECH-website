'use client';

import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setHidden(currentScrollY > lastScrollY && currentScrollY > 80);
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string, hash?: string) => {
    setIsMenuOpen(false);
    
    if (hash) {
      if (pathname === path) {
        // Already on the page, just scroll
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to page with hash
        router.push(`${path}${hash}`);
      }
    } else {
      router.push(path);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Image 
                src="/global-ebtech-logo.svg" 
                alt="Global EBTECH Logo" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
              
              <span className="text-xl font-bold bg-gradient-to-r from-teal-800 to-cyan-700 bg-clip-text text-transparent">
                GLOBAL EBTECH
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick('/', '#services')}
              className="text-gray-700 hover:text-teal-800 transition-colors relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-800 transition-all group-hover:w-full"></span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick('/', '#features')}
              className="text-gray-700 hover:text-teal-800 transition-colors relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-800 transition-all group-hover:w-full"></span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick('/', '#testimonials')}
              className="text-gray-700 hover:text-teal-800 transition-colors relative group"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-800 transition-all group-hover:w-full"></span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick('/contact')}
              className={`transition-colors relative group ${
                pathname === '/contact' ? 'text-teal-800' : 'text-gray-700 hover:text-teal-800'
              }`}
            >
              Contact
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-teal-800 transition-all ${
                pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('/contact', '#contact-form')}
              className="bg-gradient-to-r from-teal-800 to-cyan-700 text-white font-semibold px-8 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Call Now
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-cyan-700" />
            ) : (
              <Menu className="w-6 h-6 text-cyan-700" />
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
                  onClick={() => handleNavClick('/', '#services')}
                  className="text-gray-700 hover:text-teal-800 transition-colors text-left"
                >
                  Services
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick('/', '#features')}
                  className="text-gray-700 hover:text-teal-800 transition-colors text-left"
                >
                  Features
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick('/', '#testimonials')}
                  className="text-gray-700 hover:text-teal-800 transition-colors text-left"
                >
                  Testimonials
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick('/contact')}
                  className="text-gray-700 hover:text-teal-800 transition-colors text-left"
                >
                  Contact
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick('/contact', '#contact-form')}
                  className="bg-gradient-to-r from-teal-800 to-cyan-700 text-white px-6 py-2 rounded-lg text-center shadow-lg"
                >
                  Call Now
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}