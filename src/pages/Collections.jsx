import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Collections = () => {
  const WHATSAPP_NUMBER = "1234567890";

  const handleWhatsAppBuy = () => {
    const message = "Hello SSRJ Concierge, I would like to request access to the Private Catalog.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative min-h-[100svh] bg-zinc-900 flex items-center justify-center overflow-hidden">
      {/* Background Image Loading with Lazy & Fallback */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/collection-teaser.jpg" 
          alt="Collection Teaser"
          loading="lazy"
          className="w-full h-full object-cover opacity-30 object-[center_top] scale-105"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1583391733958-6c507c5ac937?auto=format&fit=crop&q=80&w=2000' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-zinc-900/20 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto w-full pt-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
           className="relative overflow-hidden backdrop-blur-2xl bg-zinc-900/40 border border-zinc-700/50 p-12 md:p-20 rounded-3xl shadow-2xl group"
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:animate-[shimmer_2s_infinite]"></div>

          <span className="relative z-10 text-zinc-400 tracking-[0.3em] uppercase text-xs font-semibold mb-6 block drop-shadow-md">
            The Private Reserves
          </span>
          
          <h1 className="relative z-10 text-4xl md:text-6xl font-serif text-white mb-8 leading-tight drop-shadow-lg">
            SSRJ Exclusive Collection.<br />
            <span className="italic font-light text-zinc-400 text-3xl md:text-5xl">Unveiling Soon.</span>
          </h1>
          
          <div className="w-16 h-[1px] bg-zinc-700 mx-auto mb-10"></div>
          
          <p className="text-zinc-300 font-light mb-12 text-lg max-w-lg mx-auto leading-relaxed">
            Due to our commitment to craftsmanship, our seasonal archives are accessible by private appointment or digital concierge only.
          </p>

          <button 
            onClick={handleWhatsAppBuy}
            className="group inline-flex items-center justify-center space-x-3 bg-white text-zinc-900 px-8 py-4 rounded-full hover:bg-zinc-200 transition-all duration-500 ease-out shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:-translate-y-1"
          >
            <MessageCircle size={18} className="text-zinc-900" />
            <span className="text-xs uppercase tracking-widest font-semibold">Request Private Catalog</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Collections;
