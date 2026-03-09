'use client';

import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones, Globe, Facebook, Instagram, } from 'lucide-react';
import { motion } from 'motion/react';
import { ContactForm } from './ContactForm';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    info: '+94 770 677 157',
    subInfo: 'During business hours',
    gradient: 'from-teal-500 to-cyan-600',
    link: 'tel:+94770677157',
  },
  {
    icon: Mail,
    title: 'Email Us',
    info: 'info@globalebtech.com',
    subInfo: 'We respond within 24 hours',
    gradient: 'from-blue-500 to-pink-500',
    link: 'mailto:hr@globalebtech.com',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    info: 'Chat with our team',
    subInfo: 'Instant assistance',
    gradient: 'from-green-500 to-emerald-500',
    link: '#',
  },
];

const offices = [
  {
    city: 'Dehiwala (Head Office)',
    address: '85C, 1/2, Galle Road, Dehiwala',
    cityState: '10350, Western Province, Sri Lanka',
    phone: '+94 770 677 157',
    email: 'info@globalebtech.com',
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-800 via-cyan-700 to-teal-800 py-20 lg:py-32 overflow-hidden">
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
              We're Here to Help
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">Get In Touch With Us</h1>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">
              Have questions about our services? Our team is ready to support your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-gray-900 font-semibold mb-4">How Can We Help?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose your preferred way to reach us</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-gray-50 to-teal-50 p-6 rounded-2xl border-2 border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all text-center group"
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
      <section id='contact-form' className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl text-gray-900 mb-6">Send Us a Message</h3>
              <ContactForm />
            </motion.div>

            {/* Business Hours & Quick Info */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
              <div className="bg-gradient-to-br from-teal-800 to-cyan-700 text-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8" />
                  <h3 className="text-2xl font-semibold">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-teal-100">Monday - Friday:</span>
                    <span className="font-semibold">11:00 AM to 08:00 PM</span>
                  </div>
                </div>
                <p className="text-sm text-teal-100 mt-6 italic">
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
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <Mail className="w-5 h-5 text-teal-800" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Emails</h4>
                      <p className="text-sm text-gray-600">Response within 24 hours</p>
                    </div>
                  </div>
                  {/* <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <MessageSquare className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Live Chat</h4>
                      <p className="text-sm text-gray-600">Average response time: 2 minutes</p>
                    </div>
                  </div> */}
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
            <h2 className="text-3xl sm:text-4xl text-gray-900 font-semibold mb-4">Our Location</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at any time during the business hours mentioned above.
            </p>
          </motion.div>

          <div>
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex flex-col lg:flex-row gap-6 lg:gap-10 bg-gradient-to-br from-gray-50 to-teal-50 p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all"
              >
                  <div className="lg:w-1/3">
                    <div className="bg-gradient-to-br from-teal-500 to-cyan-700 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
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
                  </div>
                  <div className="lg:w-2/3">
                      <div className="relative w-full h-64 lg:h-96 rounded-xl overflow-hidden">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d294.42877971285714!2d79.86591631900968!3d6.849099922291273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b00267ff08f%3A0x1ce50f065b96bd9e!2sGLOBAL%20EBTECH!5e0!3m2!1sen!2slk!4v1770102766867!5m2!1sen!2slk" 
                          className="absolute inset-0 w-full h-full"
                          style={{border:0}} 
                          allowFullScreen 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 font-semibold mb-4">Connect With Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow us on social media to stay updated with our latest news and services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.a
              href="https://www.facebook.com/share/1Gc7W4o6P1/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <Facebook className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl text-gray-900 mb-2 font-semibold">Facebook</h3>
              <p className="text-sm text-gray-600">Follow our page</p>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/global_ebtech?igsh=aWx3ZW9qOTV6MnNx"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-pink-500 hover:shadow-xl transition-all text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <Instagram className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl text-gray-900 mb-2 font-semibold">Instagram</h3>
              <p className="text-sm text-gray-600">Check our updates</p>
            </motion.a>

            <motion.a
              href="https://wa.me/94770677157"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-green-500 to-green-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <MessageSquare className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl text-gray-900 mb-2 font-semibold">WhatsApp</h3>
              <p className="text-sm text-gray-600">Chat with us directly</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-800 via-cyan-700 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-teal-100 mb-8">
              Let's discuss how our call center solutions can help your business grow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:00000"
                className="bg-white text-teal-800 px-16 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:hr@globalebtech.com"
                className="border-2 border-white text-white px-16 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
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
