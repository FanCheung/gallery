import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Sidebars } from '@/components/Sidebar';

const sections = [
  { name: 'Historical Value', href: '/trading', id: 'historical-value' },
  { name: 'Storage & Shipment', href: '/trading', id: 'logistics' },
  { name: 'Artwork Club', href: '/trading', id: 'club' },
  { name: 'How to Buy', href: '/trading', id: 'how-to-buy' },
  { name: 'How to Sell', href: '/trading', id: 'how-to-sell' },
];

export default function Trading() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Artwork Trading Services | Artisanal Gallery</title>
        <meta name="description" content="Professional artwork trading services including historical value assessment, white-glove logistics, and exclusive collector club access." />
      </Helmet>
      <div className="flex flex-col pt-12 lg:flex-row">
      <Sidebars items={sections} title="Trading" />
      
      <main className="flex-1 lg:pl-12 pb-12 space-y-24">
        {/* Historical Value */}
        <section id="historical-value" className="scroll-mt-24 space-y-8">
          <div className="border-b pb-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Historical Value</h2>
          </div>
          <div className="space-y-6 text-muted-foreground font-light leading-relaxed max-w-3xl">
            <p>
              Understanding the historical trajectory of an artwork is essential for long-term value preservation. 
              Our research department provides exhaustive provenance reports and market analysis for every piece in our collection.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="border p-6 space-y-2">
                <h3 className="text-sm font-bold">Provenance Verification</h3>
                <p className="text-xs">Rigorous tracing of ownership history to ensure authenticity and legal title.</p>
              </div>
              <div className="border p-6 space-y-2">
                <h3 className="text-sm font-bold">Market Benchmarking</h3>
                <p className="text-xs">Comparative analysis against global auction results and private sales data.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Storage & Shipment */}
        <section id="logistics" className="scroll-mt-24 space-y-8">
          <div className="border-b pb-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Storage & Shipment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>
                We offer white-glove logistics services, ensuring that your acquisitions are handled with the utmost care. 
                From climate-controlled storage to international white-glove delivery, we manage every detail.
              </p>
              <ul className="space-y-2 text-xs uppercase tracking-widest font-bold text-primary">
                <li>• Climate-Controlled Vaults</li>
                <li>• Custom Crating & Packing</li>
                <li>• Fully Insured Transit</li>
                <li>• Professional Installation</li>
              </ul>
            </div>
            <div className="aspect-square border bg-muted/10 flex items-center justify-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-30">Logistics Excellence</span>
            </div>
          </div>
        </section>

        {/* Artwork Club */}
        <section id="club" className="scroll-mt-24 space-y-8">
          <div className="border-b pb-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Artwork Club</h2>
          </div>
          <div className="bg-primary text-primary-foreground p-12 space-y-6">
            <h3 className="text-xl font-bold tracking-tight">An Exclusive Circle of Collectors</h3>
            <p className="font-light opacity-80 max-w-2xl">
              Membership in the Artisanal Club provides early access to new acquisitions, private viewings, 
              and invitations to exclusive art fair events worldwide.
            </p>
            <button className="border border-primary-foreground/30 px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-primary-foreground hover:text-primary transition-colors">
              Request Membership
            </button>
          </div>
        </section>

        {/* How to Buy & Sell */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section id="how-to-buy" className="scroll-mt-24 space-y-6">
            <h2 className="text-2xl font-bold uppercase tracking-tighter border-b pb-2">How to Buy</h2>
            <ol className="space-y-4 text-sm text-muted-foreground font-light">
              <li className="flex space-x-4">
                <span className="font-bold text-primary">01.</span>
                <span>Browse our curated collection online or visit our private viewing room.</span>
              </li>
              <li className="flex space-x-4">
                <span className="font-bold text-primary">02.</span>
                <span>Consult with an advisor to receive detailed reports and pricing.</span>
              </li>
              <li className="flex space-x-4">
                <span className="font-bold text-primary">03.</span>
                <span>Finalize acquisition through secure payment and logistics planning.</span>
              </li>
            </ol>
          </section>

          <section id="how-to-sell" className="scroll-mt-24 space-y-6">
            <h2 className="text-2xl font-bold uppercase tracking-tighter border-b pb-2">How to Sell</h2>
            <ol className="space-y-4 text-sm text-muted-foreground font-light">
              <li className="flex space-x-4">
                <span className="font-bold text-primary">01.</span>
                <span>Submit your artwork details and high-resolution imagery for review.</span>
              </li>
              <li className="flex space-x-4">
                <span className="font-bold text-primary">02.</span>
                <span>Our experts perform a preliminary valuation and market assessment.</span>
              </li>
              <li className="flex space-x-4">
                <span className="font-bold text-primary">03.</span>
                <span>Consign your work for private sale or featured exhibition.</span>
              </li>
            </ol>
          </section>
        </div>
      </main>
      </div>
    </div>
  );
}
