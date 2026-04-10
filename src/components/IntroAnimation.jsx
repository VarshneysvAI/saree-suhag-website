import React, { useState, useEffect, useRef } from 'react';

const IntroAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState('idle'); // idle | hold | slide | done
  const calledComplete = useRef(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('ssrj-visited');
    
    if (hasVisited) {
      setPhase('done');
      if (!calledComplete.current) {
        calledComplete.current = true;
        onComplete();
      }
      return;
    }

    sessionStorage.setItem('ssrj-visited', 'true');

    // Phase 1: Hold the curtain visible for 400ms
    setPhase('hold');
    const slideTimer = setTimeout(() => {
      // Phase 2: Slide it off-screen over 600ms
      setPhase('slide');
    }, 400);

    const doneTimer = setTimeout(() => {
      setPhase('done');
      if (!calledComplete.current) {
        calledComplete.current = true;
        onComplete();
      }
    }, 1100); // 400ms hold + 600ms slide + 100ms buffer

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Dark backdrop that fades */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: '#09090b',
          opacity: phase === 'slide' ? 0 : 1,
          transition: 'opacity 0.6s cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      />

      {/* Golden Cloth Curtain */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #b45309 0%, #eab308 35%, #f59e0b 50%, #d97706 75%, #92400e 100%)',
          transform: phase === 'slide' ? 'translateX(100%)' : 'translateX(0%)',
          transition: 'transform 0.6s cubic-bezier(0.76, 0, 0.24, 1)',
          borderTopLeftRadius: phase === 'slide' ? '50%' : '0%',
          borderBottomLeftRadius: phase === 'slide' ? '50%' : '0%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '-30px 0 80px rgba(0,0,0,0.6)',
        }}
      >
        {/* Shimmer streak on the gold */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '25%',
            width: '8%',
            background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.25), transparent)',
            transform: 'skewX(-20deg)',
          }}
        />

        {/* SSRJ Logo Text */}
        <h1
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            letterSpacing: '0.3em',
            fontFamily: 'serif',
            color: 'white',
            textTransform: 'uppercase',
            fontWeight: 300,
            textShadow: '0 4px 20px rgba(0,0,0,0.4)',
            opacity: phase === 'slide' ? 0 : 1,
            transition: 'opacity 0.3s ease',
            position: 'relative',
            zIndex: 10,
          }}
        >
          SSRJ
        </h1>
      </div>
    </div>
  );
};

export default IntroAnimation;
