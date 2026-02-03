'use client';

import { Headphones, MessageSquare, Users, TrendingUp, Shield, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Headphones,
    title: 'Inbound Support',
    description:
      'Professional customer service representatives handling all your incoming calls with care and expertise.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MessageSquare,
    title: 'Outbound Calling',
    description:
      'Strategic outreach campaigns for sales, surveys, appointments, and customer follow-ups.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Help Desk Services',
    description:
      'Technical support and troubleshooting assistance for your customers around the clock.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    title: 'Lead Generation',
    description:
      'Qualify and nurture leads to help grow your business with targeted calling strategies.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'Regular monitoring and training to ensure the highest standards of customer service.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description:
      'Round-the-clock service to support your customers across all time zones.',
    gradient: 'from-teal-500 to-blue-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
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
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive call center solutions tailored to meet your business needs
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-2xl transition-all group overflow-hidden"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity" />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`bg-gradient-to-br ${service.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg`}
              >
                <service.icon className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-xl text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
