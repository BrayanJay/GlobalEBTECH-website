// components/Contact.tsx
'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { ContactForm } from './ContactForm';
export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cyan-50 to-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to improve your operations, branding, or digital presence? Contact us today for a consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-all"
                >
                  <div className="bg-gradient-to-br from-teal-800 to-cyan-700 p-3 rounded-xl shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">Phone</div>
                    <div className="text-gray-600">+94 770 677 157</div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-all"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">Email</div>
                    <div className="text-gray-600">info@globalebtech.com</div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-all"
                >
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">Address</div>
                    <div className="text-gray-600">
                      85C, 1/2<br />
                      Galle Road<br />
                      Dehiwala, Sri Lanka
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-teal-800 to-cyan-700 text-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-xl mb-2">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">11.00 A.M – 08.00 P.M</span>
                </div>
              </div>
              <p className="text-sm text-teal-100 mt-4">
                We're always here to help!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}