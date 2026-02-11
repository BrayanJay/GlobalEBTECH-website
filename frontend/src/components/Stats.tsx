'use client';

import { motion } from 'motion/react';

const stats = [
  { value: '12+', label: 'Years Experienced Crew' },
  { value: '100+', label: 'Projects Completed' },
  { value: '95%', label: 'Customer Satisfaction' },
  { value: '24/7', label: 'Support Available' },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-teal-800 via-cyan-700 to-teal-800">
      
      {/* Animated background blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="mb-2 text-4xl sm:text-5xl font-bold text-white"
              >
                {stat.value}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                className="text-teal-100"
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
