'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const certificates = [
  {
    title: "Union Certification",
    image: "/cer1.jpg",
    year: "2023",
  },
  {
    title: "Accredited Diploma",
    image: "/cer2.jpg",
    year: "2023",
  },
  {
    title: "Professional Membership",
    image: "/cer3.jpg",
    year: "2023",
  },
];

export default function Certificates() {
  return (
    <section className="py-20 bg-[#E8ECF2]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-semibold uppercase tracking-wider">
            The Trifecta of Hypnotherapy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Certifications
          </h2>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              {/* Title Above */}
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                {cert.title}
              </h3>

              {/* Certificate Card */}
              <div className="group relative w-full aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Certificate Image */}
                <div className="relative w-full h-full p-4">
                  <div className="relative w-full h-full border-4 border-gray-100 rounded">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-indigo-600/20 rounded-tl"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-indigo-600/20 rounded-tr"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-indigo-600/20 rounded-bl"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-indigo-600/20 rounded-br"></div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/5 transition-colors duration-300">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white/90 backdrop-blur-sm text-indigo-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors duration-300">
                      View Certificate
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 