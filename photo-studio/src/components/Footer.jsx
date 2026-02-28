import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-secondary pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold text-accent mb-4">LUMIÈRE</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Capturing life's most precious moments with elegance and artistry. 
              Premium wedding photography for discerning couples.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#d4af37' }}
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Gallery', 'Packages', 'About', 'Contact', 'Book Now'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-text-secondary hover:text-accent transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-text-secondary">
                <MapPin size={18} className="text-accent" />
                <span>123 Luxury Avenue, Beverly Hills, CA</span>
              </li>
              <li className="flex items-center space-x-3 text-text-secondary">
                <Phone size={18} className="text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-text-secondary">
                <Mail size={18} className="text-accent" />
                <span>hello@lumiere-studio.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-text-secondary text-sm">
            © 2024 Lumière Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}   