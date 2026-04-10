import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the user has already visited in this session.
    const hasVisited = sessionStorage.getItem('ssrj_visited_v4');
    
    if (hasVisited) {
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 0);
      return;
    }

    sessionStorage.setItem('ssrj_visited_v4', 'true');

    // The entire animation sequence takes roughly 1 second.
    // Unmount sequence occurs after 1.5s to allow for clean exit animation.
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 1500);

    return () => {
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
       <motion.div
        key="intro-wrap"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950 pointer-events-none overflow-hidden"
      >
        {/* The Sliding Golden Curtain layer that moves Left to Right */}
        <motion.div
           initial={{ x: "0%" }}
           animate={{ x: "100%" }}
           transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
           className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 shadow-[[-30px_0_100px_rgba(0,0,0,0.8)]] z-20 flex items-center justify-center origin-right"
        >
            {/* Shimmer on the gold */}
            <div className="absolute top-0 bottom-0 left-[20%] w-[10%] bg-white/20 skew-x-[-20deg]"></div>
            
            <motion.div
               initial={{ opacity: 1, scale: 1 }}
               animate={{ opacity: 0, scale: 1.1 }}
               transition={{ duration: 0.5, delay: 0.5 }}
               className="relative z-30"
            >
               <h1 className="text-6xl md:text-8xl tracking-[0.3em] font-serif text-white uppercase font-light drop-shadow-lg">
                 SSRJ
               </h1>
            </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroAnimation;
