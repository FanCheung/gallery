import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ARTWORKS } from '@/data';
import { Sidebars } from '@/components/Sidebar';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const sections = [
  { name: 'All works', href: '/artworks?section=all' },
  { name: 'Masterpieces', href: '/artworks?section=masterpieces' },
  { name: 'Contemporary', href: '/artworks?section=contemporary' },
  { name: 'On Fair', href: '/artworks?section=on-fair' },
  { name: 'Artist Search', href: '/artworks?section=artist-search' },
];

const sectionParam = (href: string) => {
  const q = href.split('?')[1];
  if (!q) return '';
  return new URLSearchParams(q).get('section') ?? '';
};

export default function Artworks() {
  const [searchParams] = useSearchParams();
  const sectionId = searchParams.get('section') || 'all';
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredArtworks = ARTWORKS.filter((art) => {
    if (sectionId === 'artist-search') {
      return art.artist.toLowerCase().includes(searchQuery.toLowerCase());
    }
    if (sectionId === 'all') return true;
    return art.category.toLowerCase().replace(' ', '-') === sectionId;
  });

  const sectionTitle = sections.find((s) => sectionParam(s.href) === sectionId)?.name ?? 'Collection';

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{`${sectionTitle} | Artisanal Gallery Collection`}</title>
        <meta name="description" content={`Explore our ${sectionTitle.toLowerCase()} collection. Artisanal Gallery features a curated selection of masterpieces and contemporary artworks.`} />
      </Helmet>
      <div className="flex flex-col pt-12 lg:flex-row">
      <Sidebars items={sections} title="Artworks" />
      
      <main className="flex-1 lg:pl-12 pb-12">
        <div className="space-y-12">
          {/* Section intro */}
          <section>
            <h2 className="text-3xl font-bold uppercase tracking-tighter">{sectionTitle}</h2>
            <p className="mt-2 max-w-2xl font-light leading-relaxed text-muted-foreground text-sm">
              {sectionId === 'all' && 'The full catalog of works currently in our collection.'}
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
            {filteredArtworks.map((artwork) => (
              <div key={artwork.id} className="group">
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
                    <h3 className="text-base font-bold group-hover:text-primary/70 transition-colors">{artwork.title}</h3>
                    <p className="text-xs text-muted-foreground">{artwork.priceRange}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {filteredArtworks.length === 0 && (
            <div className="py-24 text-center border border-dashed">
              <p className="text-muted-foreground uppercase tracking-widest text-xs">No artworks found in this section.</p>
            </div>
          )}
        </div>
      </main>
      </div>
    </div>
  );
}
