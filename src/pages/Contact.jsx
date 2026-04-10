import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-zinc-500 tracking-[0.2em] uppercase text-xs font-bold mb-4 block">
              Private Appointments
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-zinc-900 mb-6">
              Connect with SSRJ
            </h1>
            <p className="text-lg text-zinc-600 font-light max-w-2xl mx-auto">
              Our concierge team is at your disposal to arrange bespoke viewings, styling consultations, or to answer any inquiries regarding our collections.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100"
          >
            <h2 className="text-2xl font-serif text-zinc-900 mb-8">Send an Inquiry</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-xl focus:ring-zinc-900 focus:border-zinc-900 block p-4 outline-none transition-colors" placeholder="e.g. Ananya" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-xl focus:ring-zinc-900 focus:border-zinc-900 block p-4 outline-none transition-colors" placeholder="e.g. Sharma" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" id="email" className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-xl focus:ring-zinc-900 focus:border-zinc-900 block p-4 outline-none transition-colors" placeholder="ananya@example.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Subject</label>
                <select id="subject" className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-xl focus:ring-zinc-900 focus:border-zinc-900 block p-4 outline-none transition-colors cursor-pointer appearance-none">
                  <option>Bridal Consultation</option>
                  <option>Private Catalog Access</option>
                  <option>Groom Styling appointment</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Your Message</label>
                <textarea id="message" rows="4" className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-xl focus:ring-zinc-900 focus:border-zinc-900 block p-4 outline-none transition-colors resize-none" placeholder="How can we assist you?"></textarea>
              </div>

              <button type="submit" className="w-full bg-zinc-900 text-white font-medium tracking-widest uppercase text-sm px-8 py-5 rounded-xl hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/20">
                Submit Request
              </button>
            </form>
          </motion.div>

          {/* Contact Details & Map Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-serif text-zinc-900 mb-8">The Flagship Store</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-zinc-900" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-widest text-zinc-900 uppercase mb-2">Location</h3>
                    <p className="text-zinc-500 font-light leading-relaxed">
                      123 Royal Heritage Street,<br />
                      Chandni Chowk, near Old Fort,<br />
                      New Delhi, 110006, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-zinc-900" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-widest text-zinc-900 uppercase mb-2">Boutique Hours</h3>
                    <p className="text-zinc-500 font-light leading-relaxed">
                      Monday – Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: By Private Appointment Only
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-zinc-900" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-widest text-zinc-900 uppercase mb-2">Direct Line</h3>
                    <p className="text-zinc-500 font-light leading-relaxed">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Map Placeholder */}
            <div className="mt-12 group relative w-full h-64 bg-zinc-200 rounded-[2rem] overflow-hidden border border-zinc-200">
               <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                  alt="Delhi Map Detail"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-60 transition-opacity duration-500" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="backdrop-blur-md bg-white/80 px-6 py-3 rounded-full shadow-lg border border-white flex items-center space-x-2 cursor-pointer hover:shadow-xl transition-all">
                     <MapPin size={16} className="text-zinc-900" />
                     <span className="text-xs uppercase font-semibold tracking-widest text-zinc-900">Get Directions</span>
                   </div>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
