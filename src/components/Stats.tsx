import { motion } from 'motion/react';
import { Users, Video, DollarSign, Globe } from 'lucide-react';

const stats = [
  { label: 'Given Away', value: '$100M+', icon: DollarSign, color: 'text-green-400' },
  { label: 'Trees Planted', value: '20M+', icon: Globe, color: 'text-emerald-400' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-slate-900 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
            >
              <div className={`inline-flex p-3 rounded-xl bg-white/5 mb-4 ${stat.color}`}>
                <stat.icon size={32} />
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
