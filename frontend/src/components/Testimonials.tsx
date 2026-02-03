'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Tech Innovations Inc.',
    content:
      'CallPro Solutions transformed our customer service. Their team is professional, responsive, and truly cares about our customers.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    company: 'Global Retail Group',
    content:
      'Outstanding service! The 24/7 support has been a game-changer for our international customer base.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    company: 'Healthcare Partners',
    content:
      "We've seen a 40% increase in customer satisfaction since partnering with CallPro. Highly recommended!",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-semibold sm:text-4xl text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from businesses that trust
            us with their customer communications
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-50 hover:shadow-2xl transition-all"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-10 h-10 text-teal-600 opacity-20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={`${testimonial.name}-star-${i}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-teal-400 text-teal-400" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 relative z-10">
                {testimonial.content}
              </p>

              {/* Author */}
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
