import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Sidebars } from '@/components/Sidebar';
import { EXHIBITIONS } from '@/data';

const sections = [
  { name: 'Upcoming', href: '/exhibitions', id: 'upcoming' },
  { name: 'Past', href: '/exhibitions', id: 'past' },
];

export default function Exhibitions() {
  const upcoming = EXHIBITIONS.filter((e) => e.kind === 'upcoming');
  const past = EXHIBITIONS.filter((e) => e.kind === 'past');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Art Exhibitions & Fairs | Artisanal Gallery</title>
        <meta name="description" content="Stay updated with upcoming art fairs and gallery exhibitions. Explore our history of international showcases." />
      </Helmet>
      <div className="flex flex-col pt-12 lg:flex-row">
        <Sidebars items={sections} title="Exhibitions" />

        <main className="flex-1 space-y-24 pb-12 lg:pl-12">
        {/* Upcoming */}
        <section id="upcoming" className="scroll-mt-24 space-y-8">
          <div className="border-b pb-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Upcoming Exhibitions</h2>
          </div>
          <div className="space-y-12">
            {upcoming.map((ex) => (
              <div key={ex.id} className="group">
                <div className="aspect-[21/9] overflow-hidden border mb-6 bg-muted">
                  <img
                    src={ex.image}
                    alt={ex.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col space-y-4 md:flex-row md:items-end md:justify-between md:space-y-0">
                  <div className="max-w-3xl space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {ex.period}
                    </p>
                    <h3 className="text-2xl font-bold tracking-tight">{ex.title}</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{ex.location}</p>
                    <p className="pt-2 text-sm leading-relaxed text-muted-foreground">{ex.story}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-6 shrink-0">
                    <Link
                      to={`/exhibitions/${ex.id}`}
                      className="text-[10px] font-bold uppercase tracking-widest border-b border-primary pb-1 transition-colors hover:border-muted-foreground hover:text-muted-foreground"
                    >
                      View more
                    </Link>
                    <button
                      type="button"
                      className="text-[10px] font-bold uppercase tracking-widest border-b border-primary pb-1 transition-colors hover:border-muted-foreground hover:text-muted-foreground"
                    >
                      Request invitation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past */}
        <section id="past" className="scroll-mt-24 space-y-8">
          <div className="border-b pb-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Past Exhibitions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {past.map((ex) => (
              <div
                key={ex.id}
                className="group border-l-2 border-muted py-2 pl-6 transition-colors hover:border-primary"
              >
                <div className="mb-4 aspect-[2/1] w-full max-w-sm overflow-hidden border opacity-90 transition-opacity group-hover:opacity-100">
                  <img src={ex.image} alt={ex.title} className="h-full w-full object-cover" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {ex.period}
                </p>
                <h4 className="text-xl font-bold tracking-tight">{ex.title}</h4>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{ex.location}</p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{ex.story}</p>
                <Link
                  to={`/exhibitions/${ex.id}`}
                  className="mt-4 inline-block text-[10px] font-bold uppercase tracking-widest border-b border-primary pb-1 transition-colors hover:border-muted-foreground hover:text-muted-foreground"
                >
                  View more
                </Link>
              </div>
            ))}
          </div>
        </section>
        </main>
      </div>
    </div>
  );
}
