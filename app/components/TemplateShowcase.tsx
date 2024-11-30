'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const templates = [
  {
    title: "Therapy Session Notes",
    description: "Professional template for session documentation",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop",
    features: ["Customizable", "Progress Tracking", "Goals Section"],
    etsyLink: "#"
  },
  {
    title: "Client Intake Forms",
    description: "Comprehensive intake forms with modern design",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
    features: ["Medical History", "Consent Forms", "Insurance"],
    etsyLink: "#"
  },
  {
    title: "Treatment Planning Bundle",
    description: "Complete set of treatment planning templates",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?q=80&w=2070&auto=format&fit=crop",
    features: ["Goal Setting", "Progress Notes", "Timeline"],
    etsyLink: "#"
  }
];

export default function TemplateShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-semibold uppercase tracking-wider">
            Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Professional Canva Templates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Streamline your practice with our professionally designed templates.
            Perfect for modern therapists.
          </p>
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-white shadow-lg rounded-full px-4 py-1">
                    <span className="text-lg font-bold text-indigo-600">{template.price}</span>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ul className="space-y-1">
                      {template.features.map((feature, i) => (
                        <li key={i} className="text-white flex items-center text-sm">
                          <svg className="w-4 h-4 mr-2 text-indigo-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {template.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {template.description}
                  </p>
                  <a
                    href={template.etsyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    <span>View on Etsy</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300"
          >
            <span>Browse All Templates</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-gray-600 mt-4">
            New templates added monthly. Follow my shop for updates!
          </p>
        </motion.div>
      </div>
    </section>
  );
} 