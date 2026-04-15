import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarItem {
  name: string;
  href: string;
  id?: string;
}

interface SidebarProps {
  items: SidebarItem[];
  title?: string;
}

export function Sidebar({ items, title }: SidebarProps) {
  const location = useLocation();
  
  return (
    <div className="hidden lg:block w-64 flex-shrink-0 min-h-[calc(100vh-4rem)]">
      <ScrollArea className="h-full py-8 pr-6">
        {title && (
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6 px-4">
            {title}
          </h2>
        )}
        <nav className="space-y-1">
          {items.map((item) => {
            const isActive = location.pathname === item.href || (item.id && location.hash === `#${item.id}`);
            return (
              <Link
                key={item.name}
                to={item.id ? `${item.href}#${item.id}` : item.href}
                className={cn(
                  "flex items-center px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50 uppercase tracking-[0.2em]",
                  isActive
                    ? "text-primary border-l-2 border-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );
}

export function MobileSidebar({ items, title }: SidebarProps) {
  const location = useLocation();
  
  return (
    <div className="lg:hidden w-full py-2 overflow-x-auto no-scrollbar">
      <div className="flex px-4 space-x-4 min-w-max">
        {items.map((item) => {
          const isActive = location.pathname === item.href || (item.id && location.hash === `#${item.id}`);
          return (
            <Link
              key={item.name}
              to={item.id ? `${item.href}#${item.id}` : item.href}
              className={cn(
                "px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors whitespace-nowrap",
                isActive
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
