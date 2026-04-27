import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Sidebars } from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const sections = [
  { name: 'About Us', href: '/about', id: 'about-us' },
  { name: 'Partners', href: '/about', id: 'partners' },
  { name: 'Contact Us', href: '/about', id: 'contact' },
  { name: 'Advisors', href: '/about', id: 'advisors' },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>About Us | Artisanal Gallery | Our Mission & Team</title>
        <meta name="description" content="Learn about Artisanal Gallery's mission, our partners, and our team of expert advisors in the global art market." />
      </Helmet>
      <div className="flex flex-col pt-12 lg:flex-row">
      <Sidebars items={sections} title="About" />
      
      <main className="flex-1 lg:pl-12 pb-12 space-y-24">
        {/* About Us */}
        <section id="about-us" className="scroll-mt-24 space-y-8">
          <div className="border-b pb-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">About Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>
                Founded in 2010, Artisanal Gallery has established itself as a leading authority in the global art market. 
                Our mission is to bridge the gap between historical significance and contemporary innovation.
              </p>
              <p>
                We believe that art is not just an asset, but a legacy. Our curated collection reflects a commitment to 
                quality, provenance, and the enduring power of human creativity.
              </p>
            </div>
            <div className="aspect-video border overflow-hidden">
              <img src="https://picsum.photos/seed/gallery/800/600" alt="Gallery Interior" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        {/* Partners */}
        <section id="partners" className="scroll-mt-24 space-y-8">
          <div className="border-b pb-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Partners</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 border flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Partner {i}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="scroll-mt-24 space-y-8">
          <div className="border-b pb-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Contact Us</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-muted-foreground font-light">
                For inquiries regarding specific artworks or our advisory services, please reach out to our team.
              </p>
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email</p>
                <p className="text-sm font-medium">inquiry@artisanalgallery.com</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Phone</p>
                <p className="text-sm font-medium">+1 (212) 555-0198</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Address</p>
                <p className="text-sm font-medium">745 Fifth Avenue, Suite 12, New York, NY 10151</p>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="FIRST NAME" className="uppercase text-[10px] tracking-widest" />
                <Input placeholder="LAST NAME" className="uppercase text-[10px] tracking-widest" />
              </div>
              <Input placeholder="EMAIL ADDRESS" className="uppercase text-[10px] tracking-widest" />
              <textarea 
                className="w-full min-h-[150px] border bg-transparent p-4 text-[10px] uppercase tracking-widest focus:outline-none focus:ring-1 focus:ring-ring" 
                placeholder="YOUR MESSAGE"
              />
              <Button className="w-full py-6 text-xs uppercase tracking-widest font-bold">Send Message</Button>
            </form>
          </div>
        </section>

        {/* Advisors */}
        <section id="advisors" className="scroll-mt-24 space-y-8">
          <div className="border-b pb-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Advisors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Julian Thorne', role: 'Head of Research' },
              { name: 'Sarah Montgomery', role: 'Senior Curator' },
              { name: 'Robert Vance', role: 'Market Strategist' },
            ].map((advisor) => (
              <div key={advisor.name} className="space-y-4">
                <div className="aspect-square bg-muted/20 border grayscale" />
                <div>
                  <h4 className="text-lg font-bold">{advisor.name}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{advisor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      </div>
    </div>
  );
}
