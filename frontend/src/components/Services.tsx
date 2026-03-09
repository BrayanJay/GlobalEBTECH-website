'use client';

import { Headphones, Laptop, Megaphone, CalendarClock, Workflow, Users  } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Headphones,
    title: 'BPO & Call Center Operations',
    description:
      'Professional inbound and outbound call handling, recovery call units, helpdesks, and full customer service outsourcing designed to improve customer engagement and operational efficiency.',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Laptop,
    title: 'Digital Solutions Development',
    description:
      'Website development, mobile applications, system portals, and custom digital platforms built to streamline your business processes and enhance your digital presence.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Megaphone,
    title: 'Advertising & Creative Design',
    description:
      'Digital banners, posters, logos, social media creatives, and complete branding materials crafted to communicate your brand professionally and attractively.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: CalendarClock,
    title: 'Event Organization & Activation',
    description:
      'End-to-end event management, promotional activations, campaign materials, banners, stalls, and complete on-ground branding execution.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Users,
    title: 'Leads Generation',
    description:
      'Targeted lead generation campaigns, CRM setup, and digital marketing strategies designed to attract and convert potential customers effectively.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Workflow,
    title: 'Business Process Automation',
    description:
      'Workflow automation, digital form conversions, approval systems, CRM/lead management setup, and operational digitization to reduce manual work and increase productivity.',
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
    <section id="services" className="py-8 bg-white">
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
            Comprehensive business solutions designed to strengthen your operations, elevate your brand, and accelerate your digital presence.
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
