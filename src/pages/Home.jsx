import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Camera } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full bg-zinc-50 relative pb-20">
      <Hero />
      
      {/* Collections Teaser (Velvet Rope) */}
      <section className="relative -mt-12 md:-mt-32 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-white/60 backdrop-blur-3xl border border-white/40 shadow-2xl p-12 md:p-20 text-center"
        >
          {/* Faint Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png')] pointer-events-none mix-blend-overlay"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-zinc-600 tracking-[0.2em] uppercase text-xs font-bold mb-4 block">
              The Royal Archives
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-950 mb-6 drop-shadow-sm">
              Masterpieces Take Time.
            </h2>
            <p className="text-zinc-700 font-medium mb-10 text-lg">
              Our artisans are currently finalizing the digital showcase of our premium bridal and unstitched collections. Perfection cannot be rushed.
            </p>
            
            <a 
              href="https://sareesuhag.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-zinc-900 text-white px-8 py-4 rounded-full hover:bg-zinc-800 transition-all transform hover:scale-[1.02] active:scale-100 duration-300"
            >
              <span className="text-sm uppercase tracking-widest font-medium">Shop Now</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-500/20">
            <i className="fab fa-instagram text-[32px] text-white leading-none"></i>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-zinc-900 mb-4">Follow Our Journey</h2>
          <p className="text-zinc-500 mb-8 max-w-lg">Behind the looms, draping sessions, bridal moments, and our latest curated collections.</p>
          
          <a
            href="https://www.instagram.com/sareesuhag.in?igsh=MTN5MnEwNTlwazZ2YQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-zinc-900 text-white px-8 py-4 rounded-full hover:bg-zinc-800 transition-all shadow-xl hover:shadow-zinc-900/20 transform hover:-translate-y-1 duration-300"
          >
            <span className="text-sm uppercase tracking-widest font-medium">Follow @sareesuhag.in</span>
          </a>
        </div>
      </section>
      
      <a
        href="https://sareesuhag.in"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-amber-600 text-white px-6 py-3 rounded-full shadow-2xl hover:bg-amber-700 transition-all duration-300 flex items-center space-x-2 animate-[bounce-slow_3s_ease-in-out_infinite]"
      >
        <ShoppingBag size={20} />
        <span className="font-medium">Shop Now</span>
      </a>
    </div>
  );
};

export default Home;
