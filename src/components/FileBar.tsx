import { useState } from 'react';
import type { FileNode } from '@/types/portfolio';
import { FileTreeItem } from './ui/FileTreeItem';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';

interface FileBarProps {
  fileTree: FileNode;
  selectedFileId: string | null;
  onFileSelect: (node: FileNode) => void;
}

export function FileBar({ fileTree, selectedFileId, onFileSelect }: FileBarProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(['root', 'projects-folder'])
  );

  const toggleFolder = (nodeId: string) => {
    setExpandedFolders((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  };

  const renderFileTree = (node: FileNode, level: number = 0): React.JSX.Element | null => {
    const isExpanded = expandedFolders.has(node.id);
    const isSelected = node.id === selectedFileId;

    return (
      <FileTreeItem
        key={node.id}
        node={node}
        level={level}
        isExpanded={isExpanded}
        isSelected={isSelected}
        onToggle={toggleFolder}
        onSelect={onFileSelect}
      />
    );
  };

  return (
    <div
      className="h-full flex flex-col border-r"
      style={{
        backgroundColor: 'var(--tn-bg-dark)',
        borderColor: 'var(--tn-border)',
      }}
    >
      <div className="px-4 py-3 flex items-center">
        <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--tn-comment)' }}>
          Explorer
        </h2>
      </div>

      <Separator className="bg-[var(--tn-border)]" />

      <ScrollArea className="flex-1">
        <div className="py-2">
          {fileTree.children?.map((child) => renderFileTree(child, 0))}
        </div>
      </ScrollArea>
    </div>
  );
}
