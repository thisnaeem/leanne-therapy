'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Recovery Journey",
    text: "Working with Leanne has been transformative. Her peaceful environment and professional guidance helped me find clarity and inner strength I never knew I had.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Anxiety Management",
    text: "The personalized approach and genuine care I received made all the difference. I&apos;ve gained valuable tools for managing anxiety and stress in my daily life.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Personal Growth",
    text: "A safe space where I felt heard and understood. The techniques I learned have had a lasting positive impact on my relationships and self-awareness.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop",
    rating: 5
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-semibold uppercase tracking-wider">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-8">
            Transformative Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read about the journeys of those who have found their path to wellness and personal growth through our therapeutic guidance.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                  style={{ backgroundImage: `url(${testimonials[activeIndex].image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-indigo-900/20" />
              </div>
              
              {/* Quote Mark */}
              <div className="absolute -top-8 -left-8 text-8xl text-indigo-600 font-serif opacity-50">
                &ldquo;
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              key={`content-${activeIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white rounded-2xl p-8 shadow-xl"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg mb-6 italic">
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-indigo-600">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex gap-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-indigo-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "15+", label: "Years Experience" },
            { number: "98%", label: "Success Rate" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-4xl font-bold text-indigo-600 mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 