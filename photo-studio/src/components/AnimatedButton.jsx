import { motion } from 'framer-motion';

export default function AnimatedButton({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = "px-8 py-4 font-serif text-sm uppercase tracking-widest transition-all duration-300 relative overflow-hidden";
  
  const variants = {
    primary: "bg-accent text-background hover:bg-accent-hover gold-glow-hover",
    secondary: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-background",
    outline: "bg-transparent border border-white/30 text-white hover:border-accent hover:text-accent",
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      <motion.span
        className="relative z-10"
        initial={{ y: 0 }}
        whileHover={{ y: -2 }}
      >
        {children}
      </motion.span>
      <motion.div
        className="absolute inset-0 bg-white/10"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  );
}