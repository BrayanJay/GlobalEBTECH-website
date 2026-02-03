// components/Contact.tsx
'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your interest! We will contact you shortly.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to elevate your customer service? Contact us today for a free consultation
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
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">Phone</div>
                    <div className="text-gray-600">1-800-CALLPRO (225-5776)</div>
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
                    <div className="text-gray-600">info@callprosolutions.com</div>
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
                      123 Business Park Drive<br />
                      Suite 500<br />
                      New York, NY 10001
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
              className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-xl mb-2">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday:</span>
                  <span className="font-semibold">24/7</span>
                </div>
              </div>
              <p className="text-sm text-blue-100 mt-4">
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm text-gray-700 mb-2 font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  placeholder="Tell us about your needs..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}