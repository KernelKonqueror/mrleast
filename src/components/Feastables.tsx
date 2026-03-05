import { motion } from 'motion/react';

export default function Feastables() {
  return (
    <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Splash */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform origin-top" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-400 font-bold tracking-wider uppercase mb-2 block">Leastables</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              SNACK <br />
              <span className="text-blue-500">BETTER</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Devour the best tasting chocolate on earth. Made with simple ingredients and grass-fed milk.
            </p>
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-colors">
              Shop Leastables
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://picsum.photos/seed/feastables/600/600" 
                alt="Leastables Chocolate" 
                className="w-full max-w-md mx-auto drop-shadow-2xl transform hover:-translate-y-4 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full transform scale-75" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
