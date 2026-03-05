import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold italic tracking-tighter">
          MR<span className="text-blue-500">LEAST</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-bold hover:text-blue-400 transition-colors uppercase tracking-widest">Videos</a>
          <a href="#" className="text-sm font-bold hover:text-blue-400 transition-colors uppercase tracking-widest">Leastables</a>
          <a href="#" className="text-sm font-bold hover:text-blue-400 transition-colors uppercase tracking-widest">Philanthropy</a>
          <a href="#" className="text-sm font-bold hover:text-blue-400 transition-colors uppercase tracking-widest">Shop</a>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-red-600 hover:bg-red-500 text-white rounded-full font-bold uppercase text-sm tracking-wider transition-colors"
          >
            Subscribe
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-4 md:hidden flex flex-col gap-4 shadow-xl"
          >
            <a href="#" className="text-lg font-bold hover:text-blue-400">Videos</a>
            <a href="#" className="text-lg font-bold hover:text-blue-400">Leastables</a>
            <a href="#" className="text-lg font-bold hover:text-blue-400">Philanthropy</a>
            <a href="#" className="text-lg font-bold hover:text-blue-400">Shop</a>
            <button className="w-full py-3 bg-red-600 text-white rounded-xl font-bold uppercase">
              Subscribe
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
