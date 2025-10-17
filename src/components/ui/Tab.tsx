import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';

interface TabProps {
  id: string;
  name: string;
  isActive: boolean;
  onSelect: () => void;
  onClose: () => void;
  canClose?: boolean;
}

export function Tab({ name, isActive, onSelect, onClose, canClose = true }: TabProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 px-3 py-1.5 border-r border-[var(--tn-border)] cursor-pointer group relative',
        isActive
          ? 'bg-[var(--tn-bg)] text-[var(--tn-fg)]'
          : 'bg-[var(--tn-bg-highlight)] text-[var(--tn-fg-dark)] hover:text-[var(--tn-fg)]'
      )}
      onClick={onSelect}
    >
      {isActive && (
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ backgroundColor: 'var(--tn-blue)' }}
        />
      )}
      <span className="text-sm truncate max-w-[120px]">{name}</span>
      {canClose && (
        <Button
          variant="ghost"
          size="icon"
          className="h-4 w-4 p-0 hover:bg-[var(--tn-selection)] transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <X className="h-3 w-3" style={{ color: 'var(--tn-comment)' }} />
        </Button>
      )}
    </div>
  );
}
