'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Phone, Mail, Linkedin, Twitter, Facebook, Clock, MapPin, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

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
              <Image 
                src="/global-ebtech-logo.svg" 
                alt="Global EBTECH Logo" 
                width={40} 
                height={40}
                className="w-10 h-10"
                />
                            
              <span className="text-xl font-bold bg-gradient-to-r from-teal-50 to-cyan-50 bg-clip-text text-transparent">
                GLOBAL EBTECH
              </span>
            </motion.div>

            <p className="text-gray-400 text-sm">
              Global EB Tech provides professional BPO, digital solutions, branding, event management, and technical consultancy services for businesses across Sri Lanka and worldwide.
            </p>

            <div className="flex gap-4">
              {[{ icon: Facebook, url: "https://www.facebook.com/share/1Gc7W4o6P1/?mibextid=wwXIfr" }, { icon: Instagram, url: "https://www.instagram.com/global_ebtech?igsh=aWx3ZW9qOTV6MnNx" }].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={item.url}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <item.icon className="w-5 h-5" />
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
                +94 770 677 157
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@globalebtech.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />85C, 1/2, Galle Road, Dehiwala, Sri Lanka
              </li>
              <li className="flex items-center gap-2 text-gray-200">
                <Clock className="w-4 h-4" />
                Business Hours: Mon – Fri | 11:00AM – 08:00PM
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
