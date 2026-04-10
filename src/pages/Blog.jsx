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
      imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200", // Fallback image for demo
      content: `
        The Banarasi saree is not merely a garment; it is an architectural marvel of silk and zari. In 2026, we see a renaissance in how these heirlooms are perceived. Gone are the days of overwhelming, heavy drapes that restricted movement. The modern approach focuses on breathability, subtle gold accents, and the profound depth of the fabric's dye.

        At SSRJ, our weavers in Varanasi have spent the last decade perfecting a technique that retains the visual weight of classic brocade while significantly reducing the actual weight of the fabric. This allows the modern bride to move with grace, free from the confines of an overly structured ensemble.

        To appreciate a Banarasi is to appreciate time. A single saree can take anywhere from 15 days to six months to complete. As we look towards the future of ethnic fashion, sustainability and slow fashion are at the forefront—and nothing embodies slow fashion quite like the rhythmic clacking of a handloom.
      `
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-zinc-400 tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">
              SSRJ Journal
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-zinc-900 mb-6">
              Notes on Elegance.
            </h1>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              Editorial insights into the world of luxury handlooms, bridal couture, and the preservation of Indian heritage weaving.
            </p>
          </motion.div>
        </div>

        {/* Blog Feed */}
        <div className="space-y-24">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              {/* Article Image Image */}
              <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-10 shadow-lg bg-zinc-100">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-[0.22,1,0.36,1]"
                />
                <div className="absolute top-6 left-6">
                   <span className="backdrop-blur-md bg-white/70 border border-white/40 text-zinc-900 text-xs tracking-widest uppercase font-semibold px-4 py-2 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Meta info */}
              <div className="flex items-center space-x-6 text-sm text-zinc-500 font-medium tracking-wide mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-zinc-400" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-zinc-400" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Typographic Content */}
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-6 leading-tight group-hover:text-zinc-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <div className="prose prose-zinc prose-lg max-w-none font-light text-zinc-500 leading-relaxed space-y-6">
                  {post.content.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph.trim()}</p>
                  ))}
                </div>
              </div>

              {/* Call to action read more (Decorative for this single mock post) */}
              <div className="mt-10">
                <Link to="/blog" className="inline-flex items-center space-x-2 text-zinc-900 font-medium tracking-wider uppercase text-sm border-b border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors">
                  <span>Share Article</span>
                  <ChevronRight size={16} />
                </Link>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
