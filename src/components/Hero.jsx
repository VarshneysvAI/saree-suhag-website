import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden bg-zinc-900">
      
      {/* Cinematic Video Background (Landscape Preserved) */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0 flex items-center justify-center bg-zinc-950">
        <div className="relative w-full h-full max-w-[2000px] aspect-video">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover opacity-60 mix-blend-luminosity"
          >
            <source src="/assets/promo-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900/90 mix-blend-multiply"></div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1 }}
        >
          <span className="text-zinc-300 tracking-[0.4em] uppercase text-xs font-semibold mb-6 block">
            A Legacy Reimagined
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-white leading-[1.1] mb-8 drop-shadow-2xl">
            The Future of <br/>
            <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Ethnic Elegance</span>
          </h1>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
        >
           <Link 
              to="/contact" 
              className="group inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white hover:text-zinc-900 transition-all duration-500 ease-out"
            >
              <span className="text-sm uppercase tracking-widest font-semibold">Join the Waitlist</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
        </motion.div>
      </div>

    </div>
  );
};

export default Hero;
