import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { EXHIBITIONS } from '@/data';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function ExhibitionDetail() {
  const { id } = useParams();
  const exhibition = EXHIBITIONS.find((e) => e.id === id);

  if (!exhibition) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold">Exhibition not found</h1>
        <Link
          to="/exhibitions"
          className="text-sm uppercase tracking-widest mt-4 inline-block underline"
        >
          Back to exhibitions
        </Link>
      </div>
    );
  }

  const isUpcoming = exhibition.kind === 'upcoming';
  const backHash = isUpcoming ? '#upcoming' : '#past';

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Helmet>
        <title>{`${exhibition.title} | Exhibitions | Artisanal Gallery`}</title>
        <meta
          name="description"
          content={`${exhibition.title} — ${exhibition.period}, ${exhibition.location}. ${exhibition.story.substring(0, 150)}…`}
        />
        <meta property="og:title" content={exhibition.title} />
        <meta property="og:image" content={exhibition.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Link
        to={`/exhibitions${backHash}`}
        className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors inline-block mb-8"
      >
        ← Exhibitions
      </Link>

      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="border bg-muted/10 p-4">
            {exhibition.image ? (
              <img
                src={exhibition.image}
                alt={exhibition.title}
                className="h-auto w-full border object-cover shadow-2xl"
              />
            ) : (
              <div className="flex aspect-[21/9] items-center justify-center border border-dashed text-sm text-muted-foreground">
                Image unavailable
              </div>
            )}
          </div>
        </div>

        <div className="space-y-8 lg:col-span-5 lg:pl-12">
          <div className="space-y-2">
            <p
              className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                isUpcoming ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {isUpcoming ? 'Upcoming' : 'Past exhibition'}
            </p>
            <h1 className="text-4xl font-bold uppercase leading-tight tracking-tighter md:text-5xl">
              {exhibition.title}
            </h1>
            <p className="text-sm text-muted-foreground uppercase tracking-widest">
              {exhibition.period}
              {exhibition.location ? ` · ${exhibition.location}` : ''}
            </p>
          </div>

          <Separator />

          <div className="space-y-4 text-muted-foreground">
            <p className="font-light leading-relaxed">{exhibition.story}</p>
          </div>

          {isUpcoming ? (
            <div className="space-y-4 pt-4">
              <Button className="w-full py-8 text-xs font-bold uppercase tracking-[0.2em]">
                Request invitation
              </Button>
              <p className="text-center text-[10px] uppercase tracking-widest text-muted-foreground">
                Limited guest list — we confirm by email.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
