import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full bg-zinc-50 relative pb-20">
      <Hero />
      
      {/* Collections Teaser (Velvet Rope) */}
      <section className="relative -mt-32 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-zinc-400 tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">
              The Velvet Rope
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-6">
              Curating the Royal Collection. Unveiling Soon.
            </h2>
            <p className="text-zinc-500 font-light mb-10 text-lg">
              An exclusive selection of handcrafted masterpieces reserved for the discerning few. 
            </p>
            
            <Link 
              to="/collections" 
              className="inline-flex items-center justify-center space-x-3 bg-zinc-900 text-white px-8 py-4 rounded-full hover:bg-zinc-800 transition-all transform hover:scale-[1.02] active:scale-100 duration-300"
            >
              <span className="text-sm uppercase tracking-widest font-medium">Request Access</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
