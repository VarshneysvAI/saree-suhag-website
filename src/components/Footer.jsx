import React from 'react';
import { Camera, Share2, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 mt-auto relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-50/50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          
          {/* Brand & Ethos Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-3xl font-serif text-zinc-900 tracking-tight">SSRJ</h2>
            </Link>
            <p className="text-zinc-500 font-light leading-relaxed max-w-md mb-8">
              Since 1977, we have woven tradition into modern elegance. 
              Saree Suhag & Rajgharana Garments is India's premier destination for bespoke ethnic luxury.
            </p>
            <div className="inline-flex items-center space-x-2 bg-zinc-50 border border-zinc-100 rounded-full px-4 py-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-zinc-600 uppercase">Trusted by 10,000+ customers globally</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-zinc-900 uppercase mb-6">Connect</h3>
            <ul className="space-y-4">
              <li><Link to="/collections" className="text-zinc-500 hover:text-zinc-900 transition-colors duration-300">Curated Collections</Link></li>
              <li><Link to="/blog" className="text-zinc-500 hover:text-zinc-900 transition-colors duration-300">Journal & Archives</Link></li>
              <li><Link to="/contact" className="text-zinc-500 hover:text-zinc-900 transition-colors duration-300">Private Appointments</Link></li>
              <li><a href="https://wa.me/" className="text-zinc-500 hover:text-zinc-900 transition-colors duration-300">WhatsApp Concierge</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-zinc-900 uppercase mb-6">Visit Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group cursor-pointer">
                <MapPin className="text-zinc-400 mt-1 flex-shrink-0 group-hover:text-zinc-900 transition-colors" size={18} />
                <span className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-900 transition-colors">
                  123 Royal Heritage Street,<br />
                  Chandni Chowk, New Delhi,<br />
                  India 110006<br />
                  <span className="block mt-2 text-xs font-medium uppercase tracking-wider text-zinc-400">Open Daily 10 AM - 8 PM</span>
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <Phone className="text-zinc-400 flex-shrink-0 group-hover:text-zinc-900 transition-colors" size={18} />
                <span className="text-zinc-500 text-sm group-hover:text-zinc-900 transition-colors">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <Mail className="text-zinc-400 flex-shrink-0 group-hover:text-zinc-900 transition-colors" size={18} />
                <span className="text-zinc-500 text-sm group-hover:text-zinc-900 transition-colors">concierge@ssrj.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-zinc-400 tracking-wider">
            &copy; {new Date().getFullYear()} SAREE SUHAG & RAJGHARANA GARMENTS. ALL RIGHTS RESERVED.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 hover:-translate-y-1">
              <Camera size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 hover:-translate-y-1">
              <Share2 size={18} />
            </a>
            <a href="https://wa.me/" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 hover:-translate-y-1">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
