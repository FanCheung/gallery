import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Sidebar, MobileSidebar } from '@/components/Sidebar';

const sections = [
  { name: 'Upcoming', href: '/exhibitions', id: 'upcoming' },
  { name: 'Past', href: '/exhibitions', id: 'past' },
];

export default function Exhibitions() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
      <Helmet>
        <title>Art Exhibitions & Fairs | Artisanal Gallery</title>
        <meta name="description" content="Stay updated with upcoming art fairs and gallery exhibitions. Explore our history of international showcases." />
      </Helmet>
      <Sidebar items={sections} title="Exhibitions" />
      <MobileSidebar items={sections} title="Exhibitions" />
      
      <main className="flex-1 lg:pl-12 py-12 space-y-24">
        {/* Upcoming */}
        <section id="upcoming" className="scroll-mt-24 space-y-8">
          <div className="border-b pb-4">
            <h1 className="text-4xl font-bold uppercase tracking-tighter">Upcoming Exhibitions</h1>
          </div>
          <div className="space-y-12">
            {[
              { title: 'Art Basel 2026', date: 'June 15 - June 20, 2026', location: 'Basel, Switzerland', image: 'https://picsum.photos/seed/ex1/1200/600' },
              { title: 'Vance: The Retrospective', date: 'September 05 - October 30, 2026', location: 'New York Gallery', image: 'https://picsum.photos/seed/ex2/1200/600' },
            ].map((ex) => (
              <div key={ex.title} className="group cursor-pointer">
                <div className="aspect-[21/9] overflow-hidden border mb-6">
                  <img src={ex.image} alt={ex.title} className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-end space-y-4 md:space-y-0">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{ex.date}</p>
                    <h3 className="text-3xl font-bold uppercase tracking-tight">{ex.title}</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{ex.location}</p>
                  </div>
                  <button className="text-[10px] font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors">
                    Request Invitation
                  </button>
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
            {[
              { title: 'Minimalist Echoes', year: '2025', location: 'London' },
              { title: 'The Digital Frontier', year: '2025', location: 'Tokyo' },
              { title: 'Masters of Light', year: '2024', location: 'Paris' },
              { title: 'Urban Geometry', year: '2024', location: 'New York' },
            ].map((ex) => (
              <div key={ex.title} className="border-l-2 border-muted pl-6 py-2 hover:border-primary transition-colors cursor-pointer">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{ex.year}</p>
                <h4 className="text-xl font-bold uppercase tracking-tight">{ex.title}</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{ex.location}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
