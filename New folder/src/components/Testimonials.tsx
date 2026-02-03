import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Tech Innovations Inc.',
    content: 'CallPro Solutions transformed our customer service. Their team is professional, responsive, and truly cares about our customers.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    company: 'Global Retail Group',
    content: 'Outstanding service! The 24/7 support has been a game-changer for our international customer base.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    company: 'Healthcare Partners',
    content: 'We\'ve seen a 40% increase in customer satisfaction since partnering with CallPro. Highly recommended!',
    rating: 5,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses that trust us with their customer communications
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl relative hover:shadow-2xl transition-all"
            >
              <Quote className="w-10 h-10 text-blue-600 opacity-20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-700 mb-6 relative z-10">{testimonial.content}</p>
              <div>
                <div className="text-gray-900 font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}