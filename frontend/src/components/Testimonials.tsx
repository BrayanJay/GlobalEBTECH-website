'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'John Adams',
    company: '',
    content:
      'Global EB Tech managed our outbound call operations with great professionalism. Their team improved our customer response rate within weeks.',
    rating: 4,
  },
  {
    name: 'Jeewanraj',
    company: '',
    content:
      'They designed our website, social media creatives, and digital banners with excellent quality. Very easy team to work with.',
    rating: 5,
  },
  {
    name: 'Sindujan',
    company: '',
    content:
      "From event branding to stall setup and promotional materials, everything was handled perfectly and on time.",
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
            Global EB Tech
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
              <Quote className="absolute top-4 right-4 w-10 h-10 text-teal-800 opacity-20" />

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
