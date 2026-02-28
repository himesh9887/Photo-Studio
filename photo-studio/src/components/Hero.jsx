import { motion } from 'framer-motion';
import { Camera, Heart, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedButton from '../components/AnimatedButton';
import ServiceCard from '../components/ServiceCard';
import GalleryCard from '../components/GalleryCard';
import TestimonialCard from '../components/TestimonialCard';
import ScrollReveal from '../components/ScrollReveal';

const services = [
  {
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Timeless elegance captured in every frame. Your love story deserves nothing less than perfection.',
  },
  {
    icon: Users,
    title: 'Engagement Sessions',
    description: 'Celebrate your commitment with intimate portraits that reflect your unique connection.',
  },
  {
    icon: Sparkles,
    title: 'Luxury Events',
    description: 'From galas to private celebrations, we document sophistication in every detail.',
  },
  {
    icon: Camera,
    title: 'Editorial Shoots',
    description: 'High-fashion photography that blends artistry with your personal style.',
  },
];

const galleryPreview = [
  { id: 1, image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', title: 'Eternal Love', category: 'Wedding' },
  { id: 2, image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800', title: 'Golden Hour', category: 'Engagement' },
  { id: 3, image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800', title: 'Royal Affair', category: 'Luxury' },
  { id: 4, image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800', title: 'Pure Elegance', category: 'Wedding' },
];

const testimonials = [
  {
    name: 'Sarah & Michael',
    role: 'Wedding Clients',
    content: 'Lumière captured our wedding day with such artistry and emotion. Every image tells a story.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
  },
  {
    name: 'Emma Thompson',
    role: 'Editorial Client',
    content: 'The attention to detail and creative vision exceeded all expectations. Truly world-class.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
  },
  {
    name: 'James & Olivia',
    role: 'Engagement Session',
    content: 'They made us feel so comfortable and the results were absolutely stunning. Highly recommend!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920"
            alt="Hero Background"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'linear' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-accent uppercase tracking-[0.3em] text-sm mb-6"
          >
            Premium Wedding Photography
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight"
          >
            Capturing Moments<br />
            <span className="text-accent italic">Of Eternity</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
            Where artistry meets emotion. We create timeless visual narratives for life's most precious celebrations.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/gallery">
              <AnimatedButton>View Portfolio</AnimatedButton>
            </Link>
            <Link to="/booking">
              <AnimatedButton variant="secondary">Book Consultation</AnimatedButton>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent uppercase tracking-widest text-sm mb-4">Our Services</p>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Crafted With Passion</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Every love story is unique. We offer bespoke photography services tailored to your vision.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <p className="text-accent uppercase tracking-widest text-sm mb-4">Portfolio</p>
                <h2 className="text-4xl md:text-5xl font-serif text-white">Recent Work</h2>
              </div>
              <Link to="/gallery" className="mt-4 md:mt-0">
                <AnimatedButton variant="outline">View All Work</AnimatedButton>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPreview.map((item, index) => (
              <GalleryCard key={item.id} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent uppercase tracking-widest text-sm mb-4">Testimonials</p>
              <h2 className="text-4xl md:text-5xl font-serif text-white">Client Stories</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920" 
            alt="CTA Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
              Ready To Create<br />
              <span className="text-accent">Something Beautiful?</span>
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss your vision and create timeless memories together. 
              Limited dates available for 2024.
            </p>
            <Link to="/booking">
              <AnimatedButton>Start Your Journey</AnimatedButton>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}