import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

export interface SidebarItem {
  name: string;
  href: string;
  id?: string;
}

interface SidebarProps {
  items: SidebarItem[];
  title?: string;
}

const isSidebarItemActive = (
  item: SidebarItem,
  pathname: string,
  search: string,
  hash: string,
  items: SidebarItem[],
  spyId: string | null,
) => {
  if (item.href.includes('?')) return `${pathname}${search}` === item.href;
  if (item.id) {
    if (pathname !== item.href) return false;
    if (spyId !== null) return item.id === spyId;
    if (hash === `#${item.id}`) return true;
    const noHash = hash === '' || hash === '#';
    if (!noHash) return false;
    const firstAnchored = items.find((i) => i.href === pathname && i.id);
    return firstAnchored?.id === item.id;
  }
  return pathname === item.href;
};

const anchorItemsKey = (items: SidebarItem[]) =>
  items.map((i) => `${i.href}\0${i.id ?? ''}`).join('\n');

/** Last section whose top has crossed the header line — matches visible anchor while scrolling. */
function useSectionSpy(items: SidebarItem[], pathname: string, hash: string) {
  const itemsRef = React.useRef(items);
  itemsRef.current = items;

  const anchorItems = React.useMemo(
    () =>
      items.filter(
        (i): i is SidebarItem & { id: string } =>
          Boolean(i.id) && !i.href.includes('?'),
      ),
    [anchorItemsKey(items)],
  );

  const computeActiveId = React.useCallback(() => {
    if (anchorItems.length === 0) return null;
    if (pathname !== anchorItems[0].href) return null;
    const headerOffset = 64; /* 4rem = --site-header-height, aligned with sticky sidebar top */
    let currentId = anchorItems[0].id;
    for (const item of anchorItems) {
      const el = document.getElementById(item.id);
      if (!el) continue;
      const { top } = el.getBoundingClientRect();
      if (top <= headerOffset) currentId = item.id;
    }
    return currentId;
  }, [anchorItems, pathname]);

  const [spyId, setSpyId] = React.useState<string | null>(null);
  const pendingTargetRef = React.useRef<string | null>(null);
  const pendingClearTimeoutRef = React.useRef<ReturnType<typeof setTimeout>>(undefined);

  const flushSpy = React.useCallback(() => {
    const computed = computeActiveId();
    const p = pendingTargetRef.current;
    if (p != null && computed === p) pendingTargetRef.current = null;
    setSpyId(pendingTargetRef.current ?? computed);
  }, [computeActiveId]);

  const armAnchorNav = React.useCallback(
    (id: string) => {
      pendingTargetRef.current = id;
      flushSpy();
      if (pendingClearTimeoutRef.current) clearTimeout(pendingClearTimeoutRef.current);
      pendingClearTimeoutRef.current = setTimeout(() => {
        pendingClearTimeoutRef.current = undefined;
        pendingTargetRef.current = null;
        flushSpy();
      }, 1200);
    },
    [flushSpy],
  );

  React.useLayoutEffect(() => {
    if (anchorItems.length === 0 || pathname !== anchorItems[0].href) {
      pendingTargetRef.current = null;
      if (pendingClearTimeoutRef.current) clearTimeout(pendingClearTimeoutRef.current);
      setSpyId(null);
      return;
    }

    let moRaf = 0;
    const scheduleFromMutation = () => {
      if (moRaf) cancelAnimationFrame(moRaf);
      moRaf = requestAnimationFrame(() => {
        moRaf = 0;
        flushSpy();
      });
    };

    flushSpy();
    window.addEventListener('scroll', flushSpy, { passive: true });
    window.addEventListener('resize', flushSpy);

    const main = document.querySelector('main');
    const mo =
      main && typeof MutationObserver !== 'undefined'
        ? new MutationObserver(scheduleFromMutation)
        : null;
    if (main && mo) {
      mo.observe(main, { childList: true, subtree: true });
    }

    return () => {
      window.removeEventListener('scroll', flushSpy);
      window.removeEventListener('resize', flushSpy);
      if (moRaf) cancelAnimationFrame(moRaf);
      mo?.disconnect();
    };
  }, [anchorItems, pathname, hash, flushSpy]);

  React.useEffect(() => {
    const raw = hash.replace(/^#/, '');
    if (!raw) return;
    const list = itemsRef.current.filter(
      (i): i is SidebarItem & { id: string } =>
        Boolean(i.id) && !i.href.includes('?'),
    );
    if (list.length === 0 || pathname !== list[0].href) return;
    if (!list.some((i) => i.id === raw)) return;
    armAnchorNav(raw);
  }, [hash, pathname, armAnchorNav]);

  return { spyId, armAnchorNav };
}

function DesktopSidebarNav({
  items,
  title,
  spyId,
  armAnchorNav,
}: SidebarProps & { spyId: string | null; armAnchorNav: (id: string) => void }) {
  const location = useLocation();

  return (
    <div className="hidden lg:block w-64 flex-shrink-0 lg:sticky lg:top-[var(--site-header-height)] lg:z-10 lg:self-start">
      <ScrollArea className="max-h-[calc(100vh-var(--site-header-height))] pb-8 pr-6">
        {title && (
          <h2 className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-6 px-4">
            {title}
          </h2>
        )}
        <nav className="space-y-1">
          {items.map((item) => {
            const to = item.id ? `${item.href}#${item.id}` : item.href;
            const isActive = isSidebarItemActive(
              item,
              location.pathname,
              location.search,
              location.hash,
              items,
              spyId,
            );
            return (
              <Link
                key={item.name}
                to={to}
                onClick={item.id ? () => armAnchorNav(item.id) : undefined}
                className="flex items-center rounded-sm px-4 py-2 text-sm font-medium capitalize tracking-wide transition-colors hover:bg-muted/50"
              >
                <span
                  className={cn(
                    'inline-block border-l-2 pl-[7px] leading-none',
                    isActive ? 'border-primary text-primary' : 'border-transparent text-muted-foreground',
                  )}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );
}

function MobileSidebarNav({
  items,
  spyId,
  armAnchorNav,
}: SidebarProps & { spyId: string | null; armAnchorNav: (id: string) => void }) {
  const location = useLocation();

  return (
    <div className="lg:hidden w-full py-2 overflow-x-auto no-scrollbar">
      <div className="flex px-4 space-x-4 min-w-max">
        {items.map((item) => {
          const to = item.id ? `${item.href}#${item.id}` : item.href;
          const isActive = isSidebarItemActive(
            item,
            location.pathname,
            location.search,
            location.hash,
            items,
            spyId,
          );
          return (
            <Link
              key={item.name}
              to={to}
              onClick={item.id ? () => armAnchorNav(item.id) : undefined}
              className="inline-flex items-center rounded-sm px-3 py-2 text-xs font-semibold capitalize tracking-wide transition-colors whitespace-nowrap hover:bg-muted/50"
            >
              <span
                className={cn(
                  'inline-block border-l-2 pl-[7px] leading-none',
                  isActive ? 'border-primary text-primary' : 'border-transparent text-muted-foreground',
                )}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/** Desktop + mobile section nav with a single scroll-spy (one listener set). */
export function Sidebars({ items, title }: SidebarProps) {
  const location = useLocation();
  const { spyId, armAnchorNav } = useSectionSpy(items, location.pathname, location.hash);

  return (
    <>
      <DesktopSidebarNav items={items} title={title} spyId={spyId} armAnchorNav={armAnchorNav} />
      <MobileSidebarNav items={items} spyId={spyId} armAnchorNav={armAnchorNav} />
    </>
  );
}
