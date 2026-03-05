import { Youtube, Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">MrLeast</h3>
            <p className="text-slate-500">Make the world a better place.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Youtube size={24} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={24} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={24} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={24} /></a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <div className="flex flex-col md:flex-row gap-4">
            <p>&copy; 2024 MrLeast. All rights reserved.</p>
            <p>Released under the MIT License.</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
