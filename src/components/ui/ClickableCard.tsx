import type { ReactNode } from 'react';
import { Card } from './card';

interface ClickableCardProps {
  href: string;
  color: string;
  children: ReactNode;
  className?: string;
}

export function ClickableCard({ href, color, children, className = '' }: ClickableCardProps) {
  return (
    <a
      href={href}
      style={{
        display: 'block',
        textDecoration: 'none',
        height: '100%',
      }}
    >
      <Card
        className={`p-6 transition-all duration-200 hover:border-[var(--tn-${color})] hover:bg-[var(--tn-bg)] hover:shadow-lg cursor-pointer ${className}`}
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Card>
    </a>
  );
}
