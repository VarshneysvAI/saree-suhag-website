import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <ScrollToTop />
      <IntroAnimation onComplete={() => setShowContent(true)} />
      
      <div 
        className={`min-h-screen bg-gradient-to-b from-white to-zinc-50/50 font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}
      >
        <Navbar />
        
        <main className="min-h-[80vh] flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
