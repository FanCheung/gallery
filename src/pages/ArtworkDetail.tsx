import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ARTWORKS, ARTISTS } from '@/data';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

export default function ArtworkDetail() {
  const { id } = useParams();
  const artwork = ARTWORKS.find((a) => a.id === id);
  const artist = ARTISTS.find((a) => a.id === artwork?.artistId);

  if (!artwork) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold">Artwork not found</h1>
        <Link to="/artworks" className="text-sm uppercase tracking-widest mt-4 inline-block underline">Back to collection</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Helmet>
        <title>{`${artwork.title} | ${artwork.artist} | Artisanal Gallery`}</title>
        <meta name="description" content={`${artwork.title} by ${artwork.artist}. ${artwork.description.substring(0, 150)}...`} />
        <meta property="og:title" content={`${artwork.title} | ${artwork.artist}`} />
        <meta property="og:image" content={artwork.image} />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="grid-12 gap-y-12">
        {/* Left: Image */}
        <div className="col-span-12 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="border p-4 bg-muted/10"
          >
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-auto object-cover border shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Right: Info */}
        <div className="col-span-12 lg:col-span-5 lg:pl-12 space-y-8">
          <div className="space-y-2">
            <Link to={`/artist/${artwork.artistId}`} className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">
              {artwork.artist}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-tight">
              {artwork.title}
            </h1>
            <p className="text-sm text-muted-foreground uppercase tracking-widest">{artwork.year} • {artwork.category}</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-baseline border-b pb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Price Range</span>
              <span className="text-lg font-bold">{artwork.priceRange}</span>
            </div>
            <div className="flex justify-between items-baseline border-b pb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Price History</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Available on request</span>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground font-light leading-relaxed">
              {artwork.description}
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="story">
                <AccordionTrigger className="text-[10px] font-bold uppercase tracking-widest">The Story</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed font-light">
                  {artwork.story}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="certificate">
                <AccordionTrigger className="text-[10px] font-bold uppercase tracking-widest">Certificate of Authenticity</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed font-light">
                  This work is accompanied by a certificate of authenticity signed by the artist and the gallery director. 
                  Digital provenance is secured on the Artisanal Registry.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="pt-8 space-y-4">
            <Button className="w-full py-8 text-xs uppercase tracking-[0.2em] font-bold">
              Inquire About This Work
            </Button>
            <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
              Secure shipping and insurance included worldwide.
            </p>
          </div>

          {artist && (
            <div className="pt-12 border-t">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Artist Information</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img src={artist.image} alt={artist.name} className="w-16 h-16 object-cover border" referrerPolicy="no-referrer" />
                  <p className="text-lg font-bold">{artist.name}</p>
                </div>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  {artist.bio.split('. ')[0]}.
                </p>
                <Button variant="outline" asChild className="text-[10px] uppercase tracking-widest h-8 px-4">
                  <Link to={`/artist/${artist.id}`}>More About Artist</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
