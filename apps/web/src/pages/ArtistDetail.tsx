import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ARTWORKS, ARTISTS } from '@/data';

export default function ArtistDetail() {
  const { id } = useParams();
  const artist = ARTISTS.find((a) => a.id === id);
  const artistWorks = ARTWORKS.filter((a) => a.artistId === id);

  if (!artist) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold">Artist not found</h1>
        <Link to="/artworks?section=all" className="text-sm uppercase tracking-widest mt-4 inline-block underline">Back to collection</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Helmet>
        <title>{`${artist.name} | Artist Profile | Artisanal Gallery`}</title>
        <meta name="description" content={`Learn more about ${artist.name}. ${artist.bio.substring(0, 150)}... Explore their artworks at Artisanal Gallery.`} />
        <meta property="og:title" content={`${artist.name} | Artist Profile`} />
        <meta property="og:image" content={artist.image} />
      </Helmet>
      <div className="grid-12 gap-y-12">
        {/* Artist Bio Section */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="aspect-square overflow-hidden border">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold uppercase tracking-tighter">{artist.name}</h1>
            <p className="text-muted-foreground font-light leading-relaxed">
              {artist.bio}
            </p>
          </div>
        </div>

        {/* Artist Works Section */}
        <div className="col-span-12 lg:col-span-8 lg:pl-12">
          <div className="border-b pb-4 mb-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Artworks by {artist.name}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artistWorks.map((artwork) => (
              <div key={artwork.id} className="group">
                <Link to={`/artwork/${artwork.id}`} className="block space-y-4">
                  <div className="relative aspect-[4/5] overflow-hidden border">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold group-hover:text-primary/70 transition-colors">{artwork.title}</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{artwork.year} • {artwork.priceRange}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {artistWorks.length === 0 && (
            <p className="text-muted-foreground uppercase tracking-widest text-xs py-12 border border-dashed text-center">
              No works currently available for this artist.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
