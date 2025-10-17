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

const FileIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 2C2 1.44772 2.44772 1 3 1H7.58579C7.851 1 8.10536 1.10536 8.29289 1.29289L11.7071 4.70711C11.8946 4.89464 12 5.149 12 5.41421V12C12 12.5523 11.5523 13 11 13H3C2.44772 13 2 12.5523 2 12V2Z"
      fill="currentColor"
      opacity="0.7"
    />
    <path
      d="M8 1V4C8 4.55228 8.44772 5 9 5H12"
      fill="currentColor"
      opacity="0.4"
    />
  </svg>
);

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
      <FileIcon />
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
