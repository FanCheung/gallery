import { cn } from '@/lib/utils';

type PageHeadingProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export function PageHeading({ title, subtitle, className }: PageHeadingProps) {
  return (
    <div className={cn('text-center space-y-4', className)}>
      <h1 className="text-5xl font-bold uppercase tracking-tighter">{title}</h1>
      <p className="text-sm text-muted-foreground uppercase tracking-widest">{subtitle}</p>
    </div>
  );
}
