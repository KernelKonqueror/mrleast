import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-32 md:pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-tight">
            I WANT TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
              CHANGE THE WORLD
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-lg">
            Creating the best content on the planet while making the world a better place. Join the movement.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold text-lg flex items-center gap-2 transition-colors"
            >
              Shop Merch <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl shadow-blue-500/20 rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://picsum.photos/seed/mrbeast/800/1000" 
              alt="MrLeast" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div>
                <p className="text-blue-400 font-bold mb-1">Timmy Donaldson</p>
                <p className="text-white text-2xl font-display font-bold">MrLeast</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-30" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30" />
        </motion.div>
      </div>
    </section>
  );
}
