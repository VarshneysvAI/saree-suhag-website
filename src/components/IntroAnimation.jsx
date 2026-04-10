import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if the user has already visited in this session.
    const hasVisited = sessionStorage.getItem('ssrj_visited');
    
    if (hasVisited) {
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 0);
      return;
    }

    sessionStorage.setItem('ssrj_visited', 'true');

    // Simulate futuristic loading progress
    const duration = 2500;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const progressTimer = setInterval(() => {
      currentStep++;
      const easeOutQuart = 1 - Math.pow(1 - currentStep / steps, 4);
      setProgress(Math.min(Math.round(easeOutQuart * 100), 100));
      
      if (currentStep >= steps) {
        clearInterval(progressTimer);
      }
    }, intervalTime);

    // Fade out and unmount sequence
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, duration + 800);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 overflow-hidden"
      >
        {/* Subtle Ambient Light */}
        <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 2, ease: "easeOut" }}
               className="w-[60vw] h-[60vw] max-w-3xl max-h-3xl bg-white/5 rounded-full blur-[100px]"
            />
        </div>

        {/* Central UI */}
        <div className="relative z-10 w-full max-w-sm px-8 flex flex-col items-center mt-20">
          
          {/* Logo / Brandmark */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-12"
          >
            <h1 className="text-4xl tracking-[0.4em] font-serif text-white uppercase text-center font-light drop-shadow-md">SSRJ</h1>
          </motion.div>

          {/* Futuristic Loading Bar */}
          <div className="w-full relative mt-8">
            <div className="flex justify-between items-end mb-3 px-1">
              <motion.span 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase"
              >
                System Boot
              </motion.span>
              <motion.span 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="text-[10px] font-mono tracking-wider text-zinc-300"
              >
                {progress}%
              </motion.span>
            </div>
            
            <div className="h-px bg-zinc-800 w-full relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-white shadow-[0_0_10px_#ffffff]"
                style={{ width: `${progress}%` }}
                layout
              />
            </div>
          </div>

          {/* Scanning Text Effect */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="mt-6 text-center h-4"
          >
             <p className="text-[9px] font-mono tracking-widest text-zinc-600 uppercase">
               {progress < 30 ? 'Initializing Matrix...' : progress < 70 ? 'Loading Assets...' : 'Resolving Interface...'}
             </p>
          </motion.div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroAnimation;
