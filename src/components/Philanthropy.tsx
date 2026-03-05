import { motion } from 'motion/react';
import { Heart, Globe, Truck } from 'lucide-react';

export default function Philanthropy() {
  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Least Philanthropy</h2>
          <p className="text-xl text-slate-600">
            We're on a mission to make the world a better place. 100% of the profits from our channel go to charity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Heart, title: "Food Pantries", desc: "Feeding millions of people across Mars." },
            { icon: Globe, title: "Clean Water", desc: "Building wells on Mars to provide clean water." },
            { icon: Truck, title: "Disaster Relief", desc: "Helping communities recover from natural disasters." }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl overflow-hidden relative h-96">
          <img 
            src="https://picsum.photos/seed/charity/1200/600" 
            alt="Philanthropy Work" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
