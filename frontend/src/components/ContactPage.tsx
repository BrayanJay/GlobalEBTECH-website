'use client';

import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Headphones, Globe } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    info: '1-800-CALLPRO (225-5776)',
    subInfo: 'Available 24/7',
    gradient: 'from-blue-500 to-indigo-500',
    link: 'tel:1-800-CALLPRO',
  },
  {
    icon: Mail,
    title: 'Email Us',
    info: 'info@callprosolutions.com',
    subInfo: 'We respond within 24 hours',
    gradient: 'from-purple-500 to-pink-500',
    link: 'mailto:info@callprosolutions.com',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    info: 'Chat with our team',
    subInfo: 'Mon-Fri: 9am-6pm EST',
    gradient: 'from-green-500 to-emerald-500',
    link: '#',
  },
  {
    icon: Headphones,
    title: 'Support',
    info: 'support@callprosolutions.com',
    subInfo: 'Technical assistance',
    gradient: 'from-orange-500 to-red-500',
    link: 'mailto:support@callprosolutions.com',
  },
];

const offices = [
  {
    city: 'New York (Headquarters)',
    address: '123 Business Park Drive, Suite 500',
    cityState: 'New York, NY 10001',
    phone: '+1 (212) 555-0100',
    email: 'newyork@callprosolutions.com',
  },
  {
    city: 'Los Angeles',
    address: '456 Tech Boulevard, Floor 12',
    cityState: 'Los Angeles, CA 90028',
    phone: '+1 (310) 555-0200',
    email: 'losangeles@callprosolutions.com',
  },
  {
    city: 'Chicago',
    address: '789 Commerce Street, Suite 300',
    cityState: 'Chicago, IL 60601',
    phone: '+1 (312) 555-0300',
    email: 'chicago@callprosolutions.com',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-20 lg:py-32 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center text-white space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <Globe className="w-4 h-4" />
              We're Here to Help 24/7
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">Get In Touch With Us</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Have questions about our services? We'd love to hear from you. Our team is ready to help you find the perfect solution for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">How Can We Help?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose your preferred way to reach us</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br ${method.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl text-gray-900 mb-2 font-semibold">{method.title}</h3>
                <p className="text-gray-700 font-medium mb-1">{method.info}</p>
                <p className="text-sm text-gray-500">{method.subInfo}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id='contact-form' className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
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
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-700 mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      placeholder="+1 (555) 000-0000"
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
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm text-gray-700 mb-2 font-medium">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="inbound">Inbound Support</option>
                    <option value="outbound">Outbound Calling</option>
                    <option value="helpdesk">Help Desk Services</option>
                    <option value="lead">Lead Generation</option>
                    <option value="qa">Quality Assurance</option>
                    <option value="24-7">24/7 Support</option>
                  </select>
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
                    rows={5}
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

            {/* Business Hours & Quick Info */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8" />
                  <h3 className="text-2xl font-semibold">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-blue-100">Monday - Friday:</span>
                    <span className="font-semibold">24/7 Available</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-blue-100">Saturday:</span>
                    <span className="font-semibold">24/7 Available</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Sunday:</span>
                    <span className="font-semibold">24/7 Available</span>
                  </div>
                </div>
                <p className="text-sm text-blue-100 mt-6 italic">
                  We're always here to help! Our team works around the clock to support your business.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl text-gray-900 mb-6">Quick Response Guarantee</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone Calls</h4>
                      <p className="text-sm text-gray-600">Immediate response during business hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Emails</h4>
                      <p className="text-sm text-gray-600">Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <MessageSquare className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Live Chat</h4>
                      <p className="text-sm text-gray-600">Average response time: 2 minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">Our Locations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our offices across the country
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3 font-semibold">{office.city}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{office.address}</p>
                  <p>{office.cityState}</p>
                  <p className="flex items-center gap-2 pt-2">
                    <Phone className="w-4 h-4" />
                    {office.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {office.email}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our call center solutions can help your business grow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:1-800-CALLPRO"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: 1-800-CALLPRO
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:info@callprosolutions.com"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
