import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const mainNav = [
  { name: 'Home', href: '/' },
  { name: 'Artworks', href: '/artworks' },
  { name: 'Trading', href: '/trading' },
  { name: 'Exhibitions', href: '/exhibitions' },
  { name: 'News', href: '/news' },
  { name: 'About', href: '/about' },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tighter uppercase">Artisanal Gallery</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {mainNav.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary/70 uppercase tracking-widest",
                  location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href))
                    ? "text-primary border-b border-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {mainNav.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary/70 uppercase tracking-widest",
                        location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href))
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-tighter">Artisanal Gallery</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curating the world's most exceptional masterpieces and contemporary artworks for the discerning collector.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Artworks</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/artworks?section=masterpieces" className="hover:text-primary transition-colors">Masterpieces</Link></li>
              <li><Link to="/artworks?section=contemporary" className="hover:text-primary transition-colors">Contemporary</Link></li>
              <li><Link to="/artworks?section=on-fair" className="hover:text-primary transition-colors">On Fair</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Trading</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/trading#historical-value" className="hover:text-primary transition-colors">Historical Value</Link></li>
              <li><Link to="/trading#club" className="hover:text-primary transition-colors">Artwork Club</Link></li>
              <li><Link to="/trading#how-to-buy" className="hover:text-primary transition-colors">How to Buy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@artisanalgallery.com</li>
              <li>+1 (555) 0123 4567</li>
              <li>123 Gallery Row, New York, NY</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            © 2026 Artisanal Gallery. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Privacy Policy</Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
