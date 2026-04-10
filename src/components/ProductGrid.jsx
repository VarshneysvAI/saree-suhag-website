import React from 'react';
import { mockDatabase } from '../data/mockDatabase';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductGrid = () => {
  const WHATSAPP_NUMBER = "1234567890"; // Mock number

  const handleWhatsAppBuy = (itemName) => {
    const message = `Hello Saree Suhag, I am interested in purchasing the ${itemName}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-stone-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-rose-950 font-medium mb-6">Our Exclusive Collection</h2>
        <div className="w-24 h-1.5 bg-amber-600 mx-auto rounded-full"></div>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {mockDatabase.map((product) => (
          <motion.div 
            key={product.id} 
            variants={cardVariants}
            className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-rose-900/5 hover:shadow-2xl hover:shadow-rose-900/15 transition-all duration-300 group flex flex-col border border-stone-100"
          >
            {/* Image Container */}
            <div className="relative h-80 overflow-hidden bg-stone-100">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-rose-950 tracking-widest uppercase shadow-sm">
                {product.category}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-serif text-slate-900 mb-2 line-clamp-1 group-hover:text-amber-700 transition-colors">{product.name}</h3>
              <p className="text-stone-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                {product.description}
              </p>
              
              <div className="mt-auto">
                <div className="text-2xl font-serif font-medium text-rose-950 mb-5">
                  ₹{product.price.toLocaleString('en-IN')}
                </div>
                
                <button 
                  onClick={() => handleWhatsAppBuy(product.name)}
                  className="w-full flex items-center justify-center space-x-2 bg-stone-50 border border-stone-200 text-slate-900 px-4 py-3.5 rounded-xl hover:bg-gradient-to-r hover:from-amber-600 hover:to-amber-500 hover:border-transparent hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <MessageCircle size={20} />
                  <span className="font-semibold tracking-wide">Buy via WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductGrid;
