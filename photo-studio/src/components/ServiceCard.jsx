import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group bg-secondary p-8 rounded-sm border border-white/5 hover:border-accent/30 transition-all duration-500"
    >
      <div className="mb-6">
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
          <Icon size={28} className="text-accent" />
        </div>
      </div>
      <h3 className="text-xl font-serif text-white mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed mb-4">
        {description}
      </p>
      <motion.div 
        className="flex items-center text-accent text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: -10 }}
        whileHover={{ x: 0 }}
      >
        <span>Learn More</span>
        <ArrowRight size={16} className="ml-2" />
      </motion.div>
    </motion.div>
  );
}