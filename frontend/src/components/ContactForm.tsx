'use client';

import { Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
// import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS Configuration
      // Uncomment and configure these values in your environment variables
      // const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      // const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      // const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

      // Send email using EmailJS
      // await emailjs.send(
      //   serviceId,
      //   templateId,
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     phone: formData.phone,
      //     company: formData.company,
      //     service: formData.service,
      //     message: formData.message,
      //     to_name: 'Global EB Tech Team',
      //   },
      //   publicKey
      // );

      // Temporary alert for demo (remove when EmailJS is configured)
      alert('Thank you for your interest! We will contact you shortly.');
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
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
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-800 transition-all"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-800 transition-all"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-800 transition-all"
            placeholder="0771234567"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-800 transition-all"
            placeholder="Your Company"
          />
        </div>
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
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-800 transition-all"
          placeholder="Tell us about your needs..."
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-teal-800 to-cyan-700 text-white px-6 py-4 rounded-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>

      {submitStatus === 'success' && (
        <p className="text-green-600 text-sm text-center">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600 text-sm text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
}
