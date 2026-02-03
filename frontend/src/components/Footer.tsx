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
        <div className="grid md:grid-cols-4 gap-8 mb-8">

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

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4 font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                'Inbound Support',
                'Outbound Calling',
                'Help Desk',
                'Lead Generation',
              ].map((service) => (
                <li key={service}>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="hover:text-white transition-all inline-block cursor-pointer"
                  >
                    {service}
                  </motion.span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <motion.span whileHover={{ x: 5 }} className="hover:text-white cursor-pointer">
                  About Us
                </motion.span>
              </li>
              <li>
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => handleNavigation('/contact')}
                  className="hover:text-white transition-all text-left"
                >
                  Contact
                </motion.button>
              </li>
              <li>
                <motion.span whileHover={{ x: 5 }} className="hover:text-white cursor-pointer">
                  Blog
                </motion.span>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="hover:text-white transition-all inline-block"
                  >
                    Privacy Policy
                  </motion.span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4 font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                1-800-CALLPRO
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@callprosolutions.com
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
          <p>&copy; 2026 CallPro Solutions. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
