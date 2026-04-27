import React from 'react';
import { Camera, Share2, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 mt-auto relative z-10 text-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-50/50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Ethos Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-serif text-zinc-900 tracking-tight">Saree Suhag</h2>
            </Link>
            <p className="text-zinc-500 font-light leading-relaxed max-w-sm mb-6 text-xs">
              Since 1977, we have woven tradition into modern elegance. 
              Saree Suhag & Rajgharana Garments is India's premier destination for bespoke ethnic luxury.
            </p>
            <div className="inline-flex items-center space-x-2 bg-zinc-50 border border-zinc-100 rounded-full px-3 py-1.5">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-wide text-zinc-600 uppercase">Trusted by 10,000+ customers in India</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-zinc-900 uppercase mb-4">Connect</h3>
            <ul className="space-y-3 text-xs">
              <li><Link to="/collections" className="text-zinc-500 hover:text-zinc-900 transition-colors duration-300">Curated Collections</Link></li>
              <li><Link to="/blog" className="text-zinc-500 hover:text-zinc-900 transition-colors duration-300">Journal & Archives</Link></li>
              <li><Link to="/contact" className="text-zinc-500 hover:text-zinc-900 transition-colors duration-300">Private Appointments</Link></li>
              <li><a href="https://wa.me/917037404555" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors duration-300">WhatsApp Concierge</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-zinc-900 uppercase mb-4">Visit Us</h3>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3 group cursor-pointer border-b border-zinc-50 pb-2">
                <MapPin className="text-zinc-400 mt-0.5 flex-shrink-0 group-hover:text-zinc-900 transition-colors" size={14} />
                <a href="https://maps.app.goo.gl/E7wRrHHueRPq1uL29" target="_blank" rel="noopener noreferrer" className="text-zinc-500 leading-relaxed group-hover:text-zinc-900 transition-colors">
                  Rathi Chauraha, Main Market,<br /> Sikandra Rao, Hathras, U.P.
                </a>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer border-b border-zinc-50 pb-2">
                <Phone className="text-zinc-400 flex-shrink-0 group-hover:text-zinc-900 transition-colors" size={14} />
                <a href="tel:+917037404555" className="text-zinc-500 group-hover:text-zinc-900 transition-colors">+91 70374 04555</a>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <Mail className="text-zinc-400 flex-shrink-0 group-hover:text-zinc-900 transition-colors" size={14} />
                <a href="mailto:Sareesuhag1982@gmail.com" className="text-zinc-500 group-hover:text-zinc-900 transition-colors">Sareesuhag1982@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] sm:text-xs font-medium text-zinc-400 tracking-wider">
            &copy; {new Date().getFullYear()} Saree Suhag. ALL RIGHTS RESERVED.
          </p>
          
          {/* Social Links — Real URLs */}
          <div className="flex space-x-3">
            <a href="https://www.instagram.com/sareesuhag_srao?igsh=MTN5MnEwNTlwazZ2YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="Instagram">
              <Camera size={14} />
            </a>
            <a href="https://www.facebook.com/share/1bnKHtKB6o/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="Facebook">
              <Share2 size={14} />
            </a>
            <a href="https://wa.me/917037404555" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="WhatsApp">
              <MessageCircle size={14} />
            </a>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="mt-8 pt-4 border-t border-zinc-50 text-center">
           <p className="text-[10px] font-light text-zinc-400 tracking-widest uppercase mb-1">
             Developed with excellence by
           </p>
           <p className="text-xs font-serif text-zinc-900 italic tracking-wider">
             Shourya Varshney
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
