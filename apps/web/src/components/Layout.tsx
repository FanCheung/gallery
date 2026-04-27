import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logoUrl from '@/assets/img/logo.png';

const mainNav = [
  { name: 'Home', href: '/' },
  { name: 'Artworks', href: '/artworks?section=all' },
  { name: 'Trading', href: '/trading' },
  { name: 'Exhibitions', href: '/exhibitions' },
  { name: 'News', href: '/news' },
  { name: 'About', href: '/about' },
];

const mainNavPath = (href: string) => href.split('?')[0] ?? href;

const isMainNavActive = (href: string, pathname: string) => {
  const path = mainNavPath(href);
  if (pathname === path) return true;
  if (path === '/artworks' && /^\/artwork(\/|$)/.test(pathname)) return true;
  if (path === '/exhibitions' && /^\/exhibitions(\/|$)/.test(pathname)) return true;
  return false;
};

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" aria-label="Chizhi — Home">
              <img
                src={logoUrl}
                alt="Chizhi"
                className="h-7 w-auto max-w-[min(10rem,55vw)] object-contain object-left md:h-8"
              />
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {mainNav.map((item) => {
              const active =
                item.href === '/' ? location.pathname === '/' : isMainNavActive(item.href, location.pathname);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="inline-flex items-center rounded-sm py-1.5 pr-3 text-sm font-medium uppercase tracking-wide transition-colors hover:bg-muted/50"
                >
                  <span
                    className={cn(
                      'inline-block border-l-2 pl-[7px] leading-none',
                      active ? 'border-primary text-primary' : 'border-transparent text-muted-foreground',
                    )}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
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
                  {mainNav.map((item) => {
                    const active =
                      item.href === '/' ? location.pathname === '/' : isMainNavActive(item.href, location.pathname);
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-sm px-2 py-2 text-lg font-medium uppercase tracking-wide transition-colors hover:bg-muted/50"
                      >
                        <span
                          className={cn(
                            'inline-block border-l-2 pl-[7px] leading-none',
                            active ? 'border-primary text-primary' : 'border-transparent text-muted-foreground',
                          )}
                        >
                          {item.name}
                        </span>
                      </Link>
                    );
                  })}
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
            <h3 className="text-base font-bold tracking-tight">Artisanal Gallery</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curating the world's most exceptional masterpieces and contemporary artworks for the discerning collector.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wide">Artworks</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/artworks?section=masterpieces" className="hover:text-primary transition-colors">Masterpieces</Link></li>
              <li><Link to="/artworks?section=contemporary" className="hover:text-primary transition-colors">Contemporary</Link></li>
              <li><Link to="/artworks?section=on-fair" className="hover:text-primary transition-colors">On Fair</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wide">Trading</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/trading#historical-value" className="hover:text-primary transition-colors">Historical Value</Link></li>
              <li><Link to="/trading#club" className="hover:text-primary transition-colors">Artwork Club</Link></li>
              <li><Link to="/trading#how-to-buy" className="hover:text-primary transition-colors">How to Buy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wide">Contact</h4>
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
