'use client';

import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[16/10]"
        >
          <Image
            src="/hero.jpg"
            alt="Call center professional"
            fill
            priority
            className="object-cover rounded-3xl shadow-2xl ring-1 ring-gray-200"
          />
        </motion.div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center rounded-3xl">
          <div className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-800 to-cyan-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm shadow-lg"
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                Trusted by 500+ Companies
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold lg:font-bold text-gray-900 leading-tight"
              >
                Empowering Businesses with{' '}
                <span className="bg-gradient-to-r from-teal-800 to-cyan-700 bg-clip-text text-transparent">
                  Digital Innovation
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed font-normal lg:font-medium max-w-lg"
              >
                We combine technology, creativity, and expertise to deliver digital and customer engagement solutions that help your business grow.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:000000"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-800 to-cyan-700 text-white text-xs sm:text-sm md:text-base font-medium px-6 sm:px-10 md:px-14 py-2.5 sm:py-3 md:py-4 rounded-xl hover:shadow-2xl transition-all group cursor-pointer"
                >
                  Call Now
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
