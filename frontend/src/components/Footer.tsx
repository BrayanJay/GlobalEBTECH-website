'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-cyan-900 to-teal-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-y-8 gap-x-32 mb-8">

          {/* Brand */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleNavigation('/')}
            >
              <div className="bg-gradient-to-br from-cyan-600 to-teal-600 rounded-xl p-2 shadow-lg">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xl font-semibold">CallPro Solutions</span>
            </motion.div>

            <p className="text-gray-400 text-sm">
              Professional call center solutions for businesses of all sizes.
            </p>

            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg mb-4 font-semibold">Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { label: 'About', path: '/#' },
                { label: 'Services', path: '/#services' },
                { label: 'Features', path: '/#features' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <motion.a
                    href={item.path}
                    whileHover={{ x: 5 }}
                    className="hover:text-white transition-all inline-block cursor-pointer"
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4 font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                00000
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hr@globalebtech.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400"
        >
          <p>&copy; 2026 Global EB Tech. All rights reserved.</p>
          <p className="mt-2">
            Powered by:{' '}
            <a 
              href="https://digizone.lk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors"
            >
              DigiZone.lk
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
