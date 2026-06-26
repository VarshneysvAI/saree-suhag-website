import React from 'react';
import { MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';

const Collections = () => {
  const WHATSAPP_NUMBER = "917037404555";

  const handleWhatsAppBuy = () => {
    const message = "Hello Saree Suhag, I would like to request access to the private bridal catalog.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const featuredItems = [
    { id: 1, name: "Banarasi Silk Bridal Red", price: "₹12,500", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600", link: "https://sareesuhag.in/" },
    { id: 2, name: "Kanjivaram Gold Zari", price: "₹18,900", image: "https://images.unsplash.com/photo-1583391733958-6c507c5ac937?auto=format&fit=crop&q=80&w=600", link: "https://sareesuhag.in/" },
    { id: 3, name: "Handwoven Royal Blue", price: "₹15,000", image: "https://images.unsplash.com/photo-1583391265517-35bbd0cb6635?auto=format&fit=crop&q=80&w=600", link: "https://sareesuhag.in/" },
    { id: 4, name: "Bridal Lehenga Crimson", price: "₹45,000", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600", link: "https://sareesuhag.in/" },
    { id: 5, name: "Pastel Silk Saree", price: "₹11,200", image: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&q=80&w=600", link: "https://sareesuhag.in/" },
    { id: 6, name: "Classic Zari Work", price: "₹14,500", image: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?auto=format&fit=crop&q=80&w=600", link: "https://sareesuhag.in/" }
  ];

  return (
    <div className="relative min-h-[100svh] bg-zinc-50 flex flex-col items-center justify-start overflow-hidden pt-32 pb-24">
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto w-full">
        <span className="text-amber-700 tracking-[0.3em] uppercase text-xs font-semibold mb-4 block drop-shadow-sm">
          The Royal Archives
        </span>
        
        <h1 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-6 leading-tight">
          Saree Suhag Exclusive Collection
        </h1>
        
        <div className="w-16 h-[1px] bg-zinc-300 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {featuredItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-serif text-xl text-zinc-900">{item.name}</h3>
                <p className="text-amber-700 font-medium mt-2">{item.price}</p>
                <span className="inline-flex items-center mt-4 text-sm text-zinc-500 group-hover:text-amber-600 transition-colors">
                  View on Store <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-16 flex flex-col items-center justify-center space-y-6">
          <a href="https://sareesuhag.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-zinc-900 text-white px-8 py-4 rounded-full hover:bg-zinc-800 transition-all duration-300 shadow-xl hover:shadow-zinc-900/30">
            <span className="text-sm uppercase tracking-widest font-medium">Explore Full Collection</span>
            <ExternalLink size={18} />
          </a>
          
          <button 
            onClick={handleWhatsAppBuy}
            className="group inline-flex items-center justify-center space-x-3 text-zinc-600 hover:text-zinc-900 transition-all duration-300"
          >
            <MessageCircle size={18} />
            <span className="text-xs uppercase tracking-widest font-semibold">Request Private Catalog</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
