import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    subject: 'Bridal Saree & Lehenga Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { firstName, lastName, mobile, subject, message } = formData;
    
    // Construct the structured WhatsApp message
    const waMessage = `*New Inquiry for Saree Suhag*%0A%0A` +
      `*Name:* ${firstName} ${lastName}%0A` +
      `*Mobile:* ${mobile}%0A` +
      `*Type:* ${subject}%0A%0A` +
      `*Message:* ${message}`;
    
    const waUrl = `https://wa.me/917037404555?text=${waMessage}`;
    
    window.open(waUrl, '_blank');
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header — CSS animation */}
        <div className="text-center mb-20">
          <div className="animate-[fadeSlideUp_0.8s_ease-out_both]">
            <span className="text-zinc-500 tracking-[0.2em] uppercase text-xs font-bold mb-4 block">
              Private Appointments
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-zinc-900 mb-6">
              Connect with Saree Suhag
            </h1>
            <p className="text-lg text-zinc-600 font-light max-w-2xl mx-auto">
              Our concierge team is at your disposal to arrange bespoke viewings, styling consultations, or to answer any inquiries regarding our collections.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Form */}
          <div className="bg-white p-10 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100 animate-[fadeSlideUp_0.8s_ease-out_0.2s_both]">
            <h2 className="text-2xl font-serif text-zinc-900 mb-8">Send an Inquiry</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-xl focus:ring-zinc-900 focus:border-zinc-900 block p-4 outline-none transition-colors" 
                    placeholder="e.g. Ananya" 
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-xl focus:ring-zinc-900 focus:border-zinc-900 block p-4 outline-none transition-colors" 
                    placeholder="e.g. Sharma" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="mobile" className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Mobile Number</label>
                <input 
                  type="tel" 
                  id="mobile" 
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-xl focus:ring-zinc-900 focus:border-zinc-900 block p-4 outline-none transition-colors" 
                  placeholder="+91 86500 00000" 
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Subject</label>
                <select 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-xl focus:ring-zinc-900 focus:border-zinc-900 block p-4 outline-none transition-colors cursor-pointer appearance-none"
                >
                  <option>Bridal Saree & Lehenga Inquiry</option>
                  <option>Bespoke Groomswear Consultation</option>
                  <option>Handloom Archives Access</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-xl focus:ring-zinc-900 focus:border-zinc-900 block p-4 outline-none transition-colors resize-none" 
                  placeholder="How can we assist you?"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-zinc-900 text-white font-medium tracking-widest uppercase text-sm px-8 py-5 rounded-xl hover:bg-zinc-800 transition-colors duration-300 shadow-lg shadow-zinc-900/20">
                Submit Request via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Details & Map Area */}
          <div className="flex flex-col justify-between animate-[fadeSlideUp_0.8s_ease-out_0.4s_both]">
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
                      Saree Suhag & Rajgharana Garments,<br />
                      Rathi Chauraha, Main Market,<br />
                      Sikandra Rao, Hathras, U.P., India
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
                      Monday to Sunday: 10:00 AM - 9:00 PM
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
                      <a href="tel:+917037404555" className="hover:text-zinc-900 transition-colors">+91 70374 04555</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-zinc-900" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-widest text-zinc-900 uppercase mb-2">Email</h3>
                    <p className="text-zinc-500 font-light leading-relaxed">
                      <a href="mailto:Sareesuhag1982@gmail.com" className="hover:text-zinc-900 transition-colors">Sareesuhag1982@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Google Maps Embed */}
            <div className="mt-12 w-full h-64 rounded-[2rem] overflow-hidden border border-zinc-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441.6229203534883!2d78.37917707406895!3d27.686909084675168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974ec23e3a240f1%3A0x19c530823dc320d6!2sSAREE%20SUHAG%20AND%20RAJ%20GHARANA%20GARMENTS!5e0!3m2!1sen!2sin!4v1775848180229!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Saree Suhag Store Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
