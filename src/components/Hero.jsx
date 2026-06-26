import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="relative w-full pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-zinc-900 overflow-hidden flex flex-col items-center">
      
      {/* Background Ambience & Palatial Textures */}
      <div className="absolute inset-0 bg-zinc-900 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(24,24,27,0.9)_0%,_rgba(9,9,11,1)_70%)]"></div>
        {/* Symmetric Architectural Patterns */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)' }}></div>
      </div>
      
      {/* Ornamental Palace Details */}
      <div className="absolute top-0 left-0 w-80 h-80 text-white/[0.04] pointer-events-none p-12 opacity-40">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-current">
          <path d="M0 0 L200 0 L200 10 L10 10 L10 200 L0 200 Z" />
          <path d="M40 40 L40 100 L50 100 L50 50 L100 50 L100 40 Z" />
        </svg>
      </div>

      {/* SVG ClipPath Definition - Architectural Arch */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="archwayPortal" clipPathUnits="objectBoundingBox">
            <path d="M0,1 
                     L0,0.4 
                     C0,0.15, 0.2,0.05, 0.45,0.02 
                     Q0.5,0 0.55,0.02 
                     C0.8,0.05, 1,0.15, 1,0.4 
                     L1,1 
                     Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Majestic 'Palace Arch' Video Portal - Taller aspect ratio on mobile */}
      <div className="relative w-full max-w-[95vw] lg:max-w-7xl aspect-[3/4] md:aspect-video lg:aspect-[2.5/1] z-10 mx-auto group">
        
        {/* Architectural Border / Frame */}
        <div className="absolute inset-[-4px] bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 opacity-40"
             style={{ clipPath: 'url(#archwayPortal)' }}></div>
        <div className="absolute inset-[0px] bg-zinc-900"
             style={{ clipPath: 'url(#archwayPortal)' }}>
          
          {/* Inner Glow Border - Click through allowed */}
          <div className="absolute inset-0 border-[0.5px] border-white/20 z-20 pointer-events-none"
               style={{ clipPath: 'url(#archwayPortal)' }}></div>

          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            disablePictureInPicture
            preload="auto"
            className="w-full h-full object-cover scale-[1.3] object-[45%_55%] opacity-100 transition-opacity duration-1000"
          >
            <source src="/assets/promo-video.webm" type="video/webm" />
            <source src="/assets/promo-video.mp4" type="video/mp4" />
          </video>

          {/* Palace Ambience Layers - Click through allowed */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.7)_100%)] pointer-events-none"></div>
          
          {/* Content Over Video */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pb-8 px-4 text-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.3, delayChildren: 0.8 }
                  }
                }}
              >
                <motion.span 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } } }}
                  className="text-zinc-400 tracking-[0.5em] uppercase text-[9px] md:text-xs font-bold mb-4 md:mb-6 block drop-shadow-lg"
                >
                  Since 1977 — A Saree Legacy
                </motion.span>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-white tracking-tight leading-[0.95] mb-8 drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]">
                  <motion.span 
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } } }}
                    className="block font-light"
                  >
                    The Future of
                  </motion.span>
                  <motion.div 
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } } }}
                    className="block italic mt-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 h-[1.2em]"
                  >
                    <TypeAnimation
                      sequence={[
                        'Ethnic Elegance',
                        2000,
                        'Handloom Heritage',
                        2000,
                        'Bespoke Bridal',
                        2000,
                        'Royal Silks',
                        2000
                      ]}
                      wrapper="span"
                      speed={50}
                      deletionSpeed={60}
                      repeat={Infinity}
                      className="inline-block"
                    />
                  </motion.div>
                </h1>
              </motion.div>
              
              <div className="animate-[fadeSlideUp_1.2s_ease-out_1.4s_both] flex flex-col sm:flex-row items-center gap-6 mt-6">
                 <a 
                    href="https://sareesuhag.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white text-zinc-900 px-8 py-3.5 rounded-sm hover:scale-[1.02] transition-all duration-500 ease-out shadow-2xl border border-zinc-200"
                  >
                    <span className="relative z-10 text-[10px] md:text-xs uppercase tracking-[0.25em] font-extrabold flex items-center gap-3">
                       Shop Now <ChevronRight size={14} />
                    </span>
                  </a>
                 <a 
                    href="https://wa.me/917037404555?text=Hello%20Saree%20Suhag%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20collections."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-zinc-900/60 backdrop-blur-3xl border border-white/20 text-white px-8 py-3.5 rounded-sm hover:bg-white hover:text-zinc-900 transition-all duration-500 ease-out shadow-2xl hover:scale-[1.02]"
                  >
                    <span className="relative z-10 text-[10px] md:text-xs uppercase tracking-[0.25em] font-extrabold flex items-center gap-3">
                       Join The Waitlist <ChevronRight size={14} />
                    </span>
                  </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
