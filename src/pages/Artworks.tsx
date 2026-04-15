import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ARTWORKS } from '@/data';
import { Sidebar, MobileSidebar } from '@/components/Sidebar';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const sections = [
  { name: 'Masterpieces', href: '/artworks', id: 'masterpieces' },
  { name: 'Contemporary', href: '/artworks', id: 'contemporary' },
  { name: 'On Fair', href: '/artworks', id: 'on-fair' },
  { name: 'Artist Search', href: '/artworks', id: 'artist-search' },
];

export default function Artworks() {
  const [searchParams] = useSearchParams();
  const sectionId = searchParams.get('section') || 'masterpieces';
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredArtworks = ARTWORKS.filter((art) => {
    if (sectionId === 'artist-search') {
      return art.artist.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return art.category.toLowerCase().replace(' ', '-') === sectionId;
  });

  const sectionTitle = sections.find(s => s.id === sectionId)?.name || 'Collection';

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
      <Helmet>
        <title>{`${sectionTitle} | Artisanal Gallery Collection`}</title>
        <meta name="description" content={`Explore our ${sectionTitle.toLowerCase()} collection. Artisanal Gallery features a curated selection of masterpieces and contemporary artworks.`} />
      </Helmet>
      <Sidebar items={sections} title="Artworks" />
      <MobileSidebar items={sections} title="Artworks" />
      
      <main className="flex-1 lg:pl-12 py-12">
        <div className="space-y-12">
          {/* Banner */}
          <section className="bg-muted/20 p-12 border border-dashed border-muted-foreground/30">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
              {sectionTitle}
            </h1>
            <p className="max-w-2xl text-muted-foreground font-light leading-relaxed">
              {sectionId === 'masterpieces' && "Timeless works of historical significance and unparalleled craftsmanship."}
              {sectionId === 'contemporary' && "Bold expressions from the most influential artists of our generation."}
              {sectionId === 'on-fair' && "Exclusive pieces currently featured at international art fairs."}
              {sectionId === 'artist-search' && "Find works by your favorite artists in our extensive catalog."}
            </p>
          </section>

          {sectionId === 'artist-search' && (
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by artist name..."
                className="pl-10 uppercase text-[10px] tracking-widest"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredArtworks.map((artwork) => (
                <motion.div
                  key={artwork.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <Link to={`/artwork/${artwork.id}`} className="block space-y-4">
                    <div className="relative aspect-[4/5] overflow-hidden border">
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      {artwork.isHot && (
                        <span className="absolute top-4 right-4 bg-accent-burgundy text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                          Hot
                        </span>
                      )}
                      {artwork.isNew && (
                        <span className="absolute top-4 right-4 bg-accent-burgundy text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                          New
                        </span>
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{artwork.artist}</p>
                      <h3 className="text-lg font-bold group-hover:text-primary/70 transition-colors">{artwork.title}</h3>
                      <p className="text-xs text-muted-foreground">{artwork.priceRange}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredArtworks.length === 0 && (
            <div className="py-24 text-center border border-dashed">
              <p className="text-muted-foreground uppercase tracking-widest text-xs">No artworks found in this section.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
