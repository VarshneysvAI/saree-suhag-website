import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-zinc-900 overflow-hidden flex flex-col items-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-black z-0"></div>

      {/* Cinematic Landscape Video Container */}
      <div className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] z-10 mx-auto">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          disablePictureInPicture
          preload="auto"
          className="w-full h-full object-cover mix-blend-luminosity opacity-80"
        >
          <source src="/assets/promo-video.webm" type="video/webm" />
          <source src="/assets/promo-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
        
        {/* Floating Text Over Video — Pure CSS animations */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-20 px-4 text-center">
            <div className="animate-[fadeSlideUp_1.2s_ease-out_1s_both]">
              <span className="text-zinc-300 tracking-[0.4em] uppercase text-[10px] md:text-xs font-semibold mb-4 md:mb-6 block drop-shadow-md">
                A Legacy Reimagined
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8 drop-shadow-2xl">
                The Future of <br/>
                <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">Ethnic Elegance</span>
              </h1>
            </div>
            
            <div className="animate-[fadeSlideUp_1.2s_ease-out_1.4s_both]">
               <Link 
                  to="/contact" 
                  className="group inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-white hover:text-zinc-900 transition-all duration-500 ease-out shadow-xl hover:scale-[1.03] active:scale-100"
                >
                  <span className="text-xs md:text-sm uppercase tracking-widest font-semibold">Join the Waitlist</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
