import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Art of the Banarasi Saree: A 2026 Perspective",
      excerpt: "Exploring the delicate balance between centuries of weaving tradition and the modern minimalistic aesthetic of the contemporary Indian bride.",
      date: "October 12, 2026",
      readTime: "4 min read",
      category: "Heritage",
      imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200", 
      content: `
        The Banarasi saree is not merely a garment; it is an architectural marvel of silk and zari. In 2026, we see a renaissance in how these heirlooms are perceived. Gone are the days of overwhelming, heavy drapes that restricted movement. The modern approach focuses on breathability, subtle gold accents, and the profound depth of the fabric's dye.

        At SSRJ, our weavers in Varanasi have spent the last decade perfecting a technique that retains the visual weight of classic brocade while significantly reducing the actual weight of the fabric. This allows the modern bride to move with grace, free from the confines of an overly structured ensemble.

        To appreciate a Banarasi is to appreciate time. A single saree can take anywhere from 15 days to six months to complete. As we look towards the future of ethnic fashion, sustainability and slow fashion are at the forefront—and nothing embodies slow fashion quite like the rhythmic clacking of a handloom.
      `
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header — CSS animation, no framer-motion */}
        <div className="mb-20 text-center md:text-left border-b border-zinc-200 pb-12 w-full">
          <div className="animate-[fadeSlideUp_0.8s_ease-out_both]">
            <span className="text-zinc-400 tracking-[0.2em] uppercase text-xs font-bold mb-4 block">
              SSRJ Journal
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-zinc-900 mb-6 tracking-tight">
              Notes on Elegance.
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed max-w-2xl">
              Editorial insights into the world of luxury handlooms, bridal couture, and the preservation of Indian heritage weaving.
            </p>
          </div>
        </div>

        {/* Blog Feed — Retain whileInView for scroll-reveal */}
        <div className="space-y-32">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center group"
            >
              {/* Image Side */}
              <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-zinc-100 order-2 lg:order-1 mt-8 lg:mt-0">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-[0.22,1,0.36,1]"
                />
                <div className="absolute top-6 left-6">
                   <span className="backdrop-blur-md bg-white/90 border border-white/50 text-zinc-900 text-xs tracking-widest uppercase font-bold px-4 py-2 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Text Side */}
              <div className="order-1 lg:order-2 flex flex-col justify-center">
                {/* Meta info */}
                <div className="flex items-center space-x-6 text-sm text-zinc-500 font-medium tracking-wide mb-8 border-b border-zinc-100 pb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-zinc-600" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-zinc-600" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-8 leading-[1.1] group-hover:text-zinc-600 transition-colors duration-300">
                  {post.title}
                </h2>
                
                <div className="prose prose-zinc prose-lg max-w-none text-zinc-600 leading-relaxed space-y-6 font-light">
                  {post.content.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph.trim()}</p>
                  ))}
                </div>

                {/* Call to action */}
                <div className="mt-12">
                  <Link to="/blog" className="inline-flex items-center space-x-2 text-zinc-900 font-bold tracking-wider uppercase text-sm border-b-2 border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors duration-300">
                    <span>Share Article</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
