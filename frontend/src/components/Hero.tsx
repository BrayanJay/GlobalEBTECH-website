'use client';

import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-30"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/hero.jpg"
              alt="Call center professional"
              width={1080}
              height={1000}
              priority
              className="rounded-3xl shadow-2xl w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen object-cover justify-center relative -z-10 ring-1 ring-gray-200"
            />
          </motion.div>
        <div className="absolute inset-0 flex w-full sm:w-4/5 md:w-3/5 lg:w-1/2 px-8 py-8 md:px-12 lg:px-16">

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-800 to-cyan-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm shadow-lg"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Trusted by 500+ Companies
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold lg:font-bold text-gray-900 leading-tight"
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
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-normal lg:font-medium max-w-lg"
            >
              At Global EB Tech, we combine technology, creativity, and operational expertise to deliver digital, physical, and customer engagement solutions that help your business grow locally and globally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:000000"
                  className="bg-gradient-to-r from-teal-800 to-cyan-700 text-white text-sm sm:text-base font-medium px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group cursor-pointer">
                  Call Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
