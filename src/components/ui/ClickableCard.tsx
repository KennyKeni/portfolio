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
        className={`p-6 transition-all duration-200 cursor-pointer ${className}`}
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.2s',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.borderColor = `var(--tn-${color})`;
          e.currentTarget.style.background = 'var(--tn-bg)';
          e.currentTarget.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = 'var(--tn-border)';
          e.currentTarget.style.background = 'var(--tn-bg-dark)';
          e.currentTarget.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
        }}
      >
        {children}
      </Card>
    </a>
  );
}
