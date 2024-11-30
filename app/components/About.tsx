'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Professional Experience",
    description: "Over 15 years of experience in therapeutic counseling",
    icon: "🎓"
  },
  {
    title: "Personalized Approach",
    description: "Tailored therapy sessions to meet your unique needs",
    icon: "🌟"
  },
  {
    title: "Safe Environment",
    description: "A comfortable and confidential space for healing",
    icon: "🏡"
  },
  {
    title: "Continuous Support",
    description: "Ongoing guidance throughout your wellness journey",
    icon: "💝"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-visible">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative mx-4 my-8">
              {/* Name Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 left-8 bg-white rounded-full py-3 px-6 shadow-xl z-20"
                style={{ transform: 'translateY(-20%)' }}
              >
                <h3 className="text-xl font-semibold text-gray-900">Leanne Horvitz</h3>
              </motion.div>

              {/* Certification Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -top-4 -right-4 bg-white/95 rounded-full p-4 shadow-lg z-20"
              >
                <div className="bg-indigo-50 rounded-full p-2">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </motion.div>

              {/* Image */}
              <div className="relative h-[600px] rounded-3xl overflow-hidden">
                <Image
                  src="/leanne.jpg"
                  alt="Professional Therapist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Role Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 left-8 z-20"
                style={{ transform: 'translateY(25%)' }}
              >
                <div className="bg-indigo-600 rounded-full py-2.5 px-6 shadow-xl flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <p className="text-white font-medium">Clinical Psychologist</p>
                </div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-4 z-20"
                style={{ transform: 'translateY(30%)' }}
              >
                <div className="bg-white rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-indigo-600">15+</span>
                    <p className="text-gray-600 text-sm whitespace-nowrap">Years Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-10"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-indigo-600 font-semibold uppercase tracking-wider"
            >
              About Me
            </motion.span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              Dedicated to Your Mental
              <span className="text-indigo-600"> Well-being</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              As a licensed therapist with over 15 years of experience, I&apos;m
              passionate about helping individuals find their path to emotional
              wellness. My approach combines traditional therapeutic methods
              with modern techniques, creating a unique experience tailored to
              your personal journey.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="flex items-start space-x-4"
                >
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-10"
            >
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300 flex items-center space-x-2">
                <span>Schedule a Consultation</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 