import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { NEWS } from '@/data';

export default function News() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Helmet>
        <title>News & Insights | Artisanal Gallery | Art Market Updates</title>
        <meta name="description" content="Stay informed with the latest news, market insights, and gallery updates from Artisanal Gallery." />
      </Helmet>
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold uppercase tracking-tighter">News & Insights</h1>
          <p className="text-sm text-muted-foreground uppercase tracking-widest">The latest from the world of fine art</p>
        </div>

        <div className="space-y-24">
          {NEWS.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center group cursor-pointer"
            >
              <div className="md:col-span-7 aspect-video overflow-hidden border">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:col-span-5 space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{item.date}</p>
                <h2 className="text-2xl font-bold uppercase tracking-tight leading-tight group-hover:text-primary/70 transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {item.excerpt}
                </p>
                <button className="text-[10px] font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors">
                  Read Article
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="pt-24 border-t text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">End of feed</p>
        </div>
      </div>
    </div>
  );
}
