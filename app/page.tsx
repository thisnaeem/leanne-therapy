'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import TemplateShowcase from './components/TemplateShowcase';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Certificates />
      <Testimonials />
      <TemplateShowcase />
      <Footer />
    </main>
  );
}
