import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ARTWORKS } from '@/data';
import { Button } from '@/components/ui/button';
import heroArtwork from '@/assets/img/joan miro maravilla.png';

export default function Home() {
  const featuredArtworks = ARTWORKS.slice(0, 3);

  return (
    <div className="space-y-24 pb-24">
      <Helmet>
        <title>Artisanal Gallery | Premier Artwork Trading & Curation</title>
        <meta name="description" content="Artisanal Gallery is a premier destination for high-value artwork trading, connecting discerning collectors with timeless masterpieces and contemporary art." />
        <meta property="og:title" content="Artisanal Gallery | Premier Artwork Trading" />
        <meta property="og:description" content="Discover and trade high-value artworks at Artisanal Gallery." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid-12 h-full">
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center space-y-8 z-10">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] uppercase">
                The Art of <br />
                <span className="text-muted-foreground">Curation.</span>
              </h1>
            </div>
            <p className="max-w-md text-lg text-muted-foreground font-light leading-relaxed">
              Artisanal Gallery is a premier destination for high-value artwork trading, 
              connecting discerning collectors with timeless masterpieces.
            </p>
            <div className="flex space-x-4">
              <Button asChild className="px-8 py-6 text-xs uppercase tracking-widest">
                <Link to="/artworks?section=all">Explore Collection</Link>
              </Button>
              <Button variant="outline" asChild className="px-8 py-6 text-xs uppercase tracking-widest">
                <Link to="/trading">Trading Services</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block col-span-5 relative h-full">
            <div className="absolute inset-0 py-24">
              <img
                src={heroArtwork}
                alt="Joan Miró — Las Maravillas"
                className="w-full h-full object-cover border shadow-md"
              />
              <div className="absolute bottom-32 -left-12 bg-background p-6 border shadow-sm max-w-[200px]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Featured Artist</p>
                <p className="text-sm font-bold">Joan Miró</p>
                <Link
                  to="/artist/miro"
                  className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary mt-2 inline-block"
                >
                  View profile →
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="container mx-auto h-full grid-12">
            {[...Array(13)].map((_, i) => (
              <div key={i} className="h-full border-r last:border-r-0" />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12 border-b pb-6">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Featured Works</h2>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mt-2">Curated selection of the month</p>
          </div>
          <Link to="/artworks?section=all" className="text-xs font-bold uppercase tracking-widest hover:text-primary/70 transition-colors">
            View All Collection →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredArtworks.map((artwork) => (
            <div key={artwork.id} className="group">
              <Link to={`/artwork/${artwork.id}`} className="block space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden border">
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
                  <p className="text-xs text-muted-foreground">{artwork.year}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-24 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
            Begin Your Collection Journey
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-light">
            Whether you are looking for your first piece or expanding a world-class collection, 
            our advisors are here to guide you through every step of the process.
          </p>
          <Button asChild variant="outline" className="px-12 py-6 text-xs uppercase tracking-widest border-primary">
            <Link to="/about#contact">Contact an Advisor</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
