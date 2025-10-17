import { ChevronRight, ChevronDown, File, Folder, FolderOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FileNode } from '@/types/portfolio';

interface FileTreeItemProps {
  node: FileNode;
  level: number;
  isExpanded: boolean;
  isSelected: boolean;
  onToggle: (nodeId: string) => void;
  onSelect: (node: FileNode) => void;
}

const getFileIcon = (node: FileNode, isExpanded: boolean) => {
  if (node.type === 'folder') {
    return isExpanded ? (
      <FolderOpen className="w-4 h-4" style={{ color: 'var(--tn-blue)' }} />
    ) : (
      <Folder className="w-4 h-4" style={{ color: 'var(--tn-blue)' }} />
    );
  }

  const iconColorMap: Record<string, string> = {
    '.md': 'var(--tn-cyan)',
    '.ts': 'var(--tn-blue)',
    '.tsx': 'var(--tn-blue)',
    '.json': 'var(--tn-yellow)',
    '.js': 'var(--tn-yellow)',
  };

  const iconColor = node.extension ? (iconColorMap[node.extension] || 'var(--tn-fg)') : 'var(--tn-fg)';

  return <File className="w-4 h-4" style={{ color: iconColor }} />;
};

export function FileTreeItem({
  node,
  level,
  isExpanded,
  isSelected,
  onToggle,
  onSelect,
}: FileTreeItemProps) {
  const handleClick = () => {
    if (node.type === 'folder') {
      onToggle(node.id);
    } else {
      onSelect(node);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={cn(
          'w-full flex items-center gap-1.5 px-2 py-1 text-sm hover:bg-[var(--tn-selection)] transition-colors text-left cursor-pointer',
          isSelected && 'bg-[var(--tn-selection)]'
        )}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
      >
        {node.type === 'folder' && (
          <span className="flex-shrink-0">
            {isExpanded ? (
              <ChevronDown className="w-3 h-3" style={{ color: 'var(--tn-comment)' }} />
            ) : (
              <ChevronRight className="w-3 h-3" style={{ color: 'var(--tn-comment)' }} />
            )}
          </span>
        )}
        {node.type === 'file' && <span className="w-3" />}
        <span className="flex-shrink-0">{getFileIcon(node, isExpanded)}</span>
        <span className="truncate" style={{ color: 'var(--tn-fg)' }}>
          {node.name}
        </span>
      </button>

      {node.type === 'folder' && isExpanded && node.children && (
        <div>
          {node.children.map((child) => (
            <FileTreeItem
              key={child.id}
              node={child}
              level={level + 1}
              isExpanded={isExpanded}
              isSelected={isSelected}
              onToggle={onToggle}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}
