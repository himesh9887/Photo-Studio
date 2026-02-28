import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

export default function PackageCard({ title, price, features, featured = false, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className={`relative p-8 rounded-sm transition-all duration-500 ${
        featured 
          ? 'bg-secondary border-2 border-accent gold-glow scale-105 z-10' 
          : 'bg-secondary/50 border border-white/10 hover:border-white/20'
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-background px-4 py-1 text-xs uppercase tracking-widest font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif text-white mb-2">{title}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-accent text-lg">$</span>
          <span className="text-5xl font-serif text-white mx-1">{price}</span>
        </div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, idx) => (
          <motion.li 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + idx * 0.05 }}
            className="flex items-center space-x-3 text-text-secondary"
          >
            <Check size={18} className="text-accent flex-shrink-0" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
      
      <AnimatedButton 
        variant={featured ? 'primary' : 'secondary'} 
        className="w-full"
      >
        Select Package
      </AnimatedButton>
    </motion.div>
  );
}