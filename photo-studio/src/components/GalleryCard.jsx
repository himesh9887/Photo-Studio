import { motion } from 'framer-motion';
import { useState } from 'react';
import { ZoomIn } from 'lucide-react';

export default function GalleryCard({ image, title, category, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-sm cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <span className="text-accent text-xs uppercase tracking-widest mb-2 block">
            {category}
          </span>
          <h3 className="text-white font-serif text-xl">{title}</h3>
        </motion.div>
        
        <motion.div
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ZoomIn size={20} className="text-accent" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}