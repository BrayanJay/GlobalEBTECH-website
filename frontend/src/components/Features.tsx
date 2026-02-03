'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  'Multilingual support in 15+ languages',
  'Advanced call routing technology',
  'Real-time reporting and analytics',
  'Custom scripting and workflows',
  'CRM integration capabilities',
  'Secure and compliant operations',
  'Dedicated account management',
  'Scalable solutions for growing businesses',
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-gray-50 to-teal-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-purple-600 rounded-3xl blur-2xl opacity-20" />

            <Image
              src="/features.jpg"
              alt="Professional team"
              width={1080}
              height={500}
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover relative z-10 ring-1 ring-gray-200"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 font-semibold">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                CallPro Solutions
              </span>
              ?
            </h2>

            <p className="text-lg text-gray-600">
              We combine cutting-edge technology with experienced professionals
              to deliver exceptional customer service experiences that drive
              results.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
