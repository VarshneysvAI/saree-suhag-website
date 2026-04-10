import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isHome = location.pathname === '/';
  const useDarkText = scrolled || !isHome;

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-[0.22,1,0.36,1] ${
        scrolled ? 'bg-white/70 backdrop-blur-lg shadow-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center transition-all duration-300">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center z-50 group space-x-3">
             <img 
               src="/assets/logo.png" 
               alt="Saree Suhag & Rajgharana Garments" 
               className={`h-16 md:h-20 w-auto object-contain drop-shadow-md transition-all duration-300 ${useDarkText ? '' : 'brightness-[5] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]'}`}
             />
             <span className={`text-xl md:text-2xl font-serif tracking-tight font-medium group-hover:opacity-80 transition-colors duration-300 ${useDarkText ? 'text-zinc-900' : 'text-zinc-50 drop-shadow-lg'}`}>
               SSRJ
             </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {[
              { path: '/', label: 'Home' },
              { path: '/collections', label: 'Collections' },
              { path: '/blog', label: 'Journal' }
            ].map((link) => (
              <NavLink 
                key={link.path}
                to={link.path} 
                className={({ isActive }) => 
                  `text-sm tracking-wide transition-colors duration-300 relative group ${
                    isActive 
                      ? (useDarkText ? 'text-zinc-900 font-medium' : 'text-zinc-50 font-medium drop-shadow-md') 
                      : (useDarkText ? 'text-zinc-500 hover:text-zinc-900' : 'text-zinc-300 hover:text-white drop-shadow-md')
                  }`
                }
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${useDarkText ? 'bg-zinc-900' : 'bg-white'}`}></span>
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center">
             <Link 
              to="/contact"
              className={`flex items-center space-x-2 backdrop-blur-md border px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-100 ${
                useDarkText 
                  ? 'bg-zinc-900/5 border-zinc-900/10 text-zinc-900 hover:bg-zinc-900 hover:text-white shadow-sm'
                  : 'bg-white/10 border-white/20 text-white hover:bg-white hover:text-zinc-900 shadow-md'
              }`}
            >
              <MessageCircle size={16} />
              <span className="text-xs uppercase tracking-widest font-semibold">Inquire</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none p-2 w-10 h-10 flex items-center justify-center backdrop-blur-md rounded-full border transition-colors duration-300 ${
                useDarkText ? 'text-zinc-900 bg-white/50 border-zinc-100' : 'text-white bg-white/10 border-white/20'
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown — Pure CSS transition */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center pt-20 h-screen transition-all duration-500 ease-[0.22,1,0.36,1] ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-8 w-full px-6">
          {[
            { path: '/', label: 'Home' },
            { path: '/collections', label: 'Collections' },
            { path: '/blog', label: 'Journal' },
          ].map((link) => (
            <NavLink 
              key={link.path}
              to={link.path} 
              onClick={() => setIsOpen(false)} 
              className="text-4xl font-serif text-zinc-900 w-full block text-center hover:text-zinc-500 transition-colors duration-300"
            >
              {link.label}
            </NavLink>
          ))}
          
          <div className="mt-12">
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 bg-zinc-900 text-white px-8 py-4 rounded-full shadow-2xl hover:bg-zinc-800 transition-colors duration-300"
            >
              <MessageCircle size={20} />
              <span className="text-sm uppercase tracking-widest font-medium">Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
