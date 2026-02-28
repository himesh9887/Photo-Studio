import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ name, role, content, rating, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-secondary p-8 rounded-sm border border-white/5 relative"
    >
      <Quote className="absolute top-6 right-6 text-accent/20" size={40} />
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? 'text-accent fill-accent' : 'text-text-secondary'} 
          />
        ))}
      </div>
      
      <p className="text-text-secondary leading-relaxed mb-6 italic">
        "{content}"
      </p>
      
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-accent/20 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-white font-serif">{name}</h4>
          <p className="text-accent text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}