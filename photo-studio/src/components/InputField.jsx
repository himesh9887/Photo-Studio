import { motion } from 'framer-motion';
import { useState } from 'react';

export default function InputField({ label, type = 'text', name, required = false, textarea = false }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const InputComponent = textarea ? 'textarea' : 'input';
  
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.label
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          isFocused || value 
            ? '-top-2 text-xs text-accent bg-background px-2' 
            : 'top-4 text-text-secondary'
        }`}
      >
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </motion.label>
      
      <InputComponent
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full bg-secondary border-2 rounded-sm px-4 text-white placeholder-transparent focus:outline-none transition-all duration-300 ${
          isFocused ? 'border-accent gold-glow' : 'border-white/10'
        } ${textarea ? 'pt-6 pb-4 min-h-[150px] resize-none' : 'py-4'}`}
      />
    </motion.div>
  );
}