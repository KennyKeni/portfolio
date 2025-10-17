import { useEffect, useState } from 'react';
import { GripHorizontal, GripVertical, PanelLeftClose, PanelLeft } from 'lucide-react';
import { FileBar } from './FileBar';
import { CodeEditor } from './CodeEditor';
import { Terminal } from './Terminal';
import { Button } from './ui/button';
import { portfolioData, fileTree } from '@/data/portfolio';
import { useFileSystem } from '@/hooks/useFileSystem';
import { useResizable } from '@/hooks/useResizable';
import { useHorizontalResizable } from '@/hooks/useHorizontalResizable';
import { cn } from '@/lib/utils';
import { isMobile } from '@/lib/breakpoints';
import type { FileNode } from '@/types/portfolio';

export function IDELayout() {
  const { tabs, activeTabId, selectedFileId, openFile, openFileByName, openFileById, closeTab, changeTab } =
    useFileSystem(fileTree);
  const [isFileBarVisible, setIsFileBarVisible] = useState(true);
  const [isAutoClosing, setIsAutoClosing] = useState(false);
  const { height: terminalHeight, isResizing, handleMouseDown } = useResizable(300, 150, 600);
  const { width: sidebarWidth, isResizing: isSidebarResizing, handleMouseDown: handleSidebarMouseDown, resetWidth } = useHorizontalResizable(280, 150, 600);

  useEffect(() => {
    const readmeFile = fileTree.children?.find((child) => child.name === 'README.md');
    if (readmeFile) {
      openFile(readmeFile);
    }
  }, [openFile]);

  useEffect(() => {
    if (sidebarWidth <= 150 && isFileBarVisible) {
      setIsAutoClosing(true);
      setIsFileBarVisible(false);
      setTimeout(() => setIsAutoClosing(false), 300);
    }
  }, [sidebarWidth, isFileBarVisible]);

  const toggleFileBar = () => {
    if (!isFileBarVisible) {
      resetWidth();
    }
    setIsFileBarVisible(!isFileBarVisible);
  };

  const handleFileSelect = (node: FileNode) => {
    openFile(node);
    if (isMobile()) {
      setIsFileBarVisible(false);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <div className="flex-1 flex overflow-hidden relative">
        <div
          className={cn(
            'flex-shrink-0 md:relative absolute inset-y-0 left-0 z-50 overflow-hidden',
            'md:translate-x-0',
            isFileBarVisible ? 'translate-x-0' : '-translate-x-full'
          )}
          style={{
            width: isFileBarVisible ? `${sidebarWidth}px` : '0px',
            transition: (isSidebarResizing && !isAutoClosing) ? 'none' : 'all 300ms ease-in-out',
          }}
        >
          <div style={{ width: `${sidebarWidth}px`, height: '100%' }}>
            <FileBar fileTree={fileTree} selectedFileId={selectedFileId} onFileSelect={handleFileSelect} />
          </div>
        </div>

        <div
          className={cn(
            'relative group hidden md:block',
            isSidebarResizing && 'select-none',
            !isSidebarResizing && 'transition-opacity duration-300',
            !isFileBarVisible && 'opacity-0 pointer-events-none'
          )}
          onMouseDown={handleSidebarMouseDown}
          style={{
            cursor: 'ew-resize',
            backgroundColor: 'var(--tn-border)',
            width: '4px',
          }}
        >
          <div
            className="absolute inset-y-0 -left-1 -right-1 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ pointerEvents: 'none' }}
          >
            <GripVertical className="w-4 h-4" style={{ color: 'var(--tn-blue)' }} />
          </div>
        </div>

        {isFileBarVisible && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsFileBarVisible(false)}
          />
        )}

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex items-center gap-2 px-2 py-2 border-b" style={{ borderColor: 'var(--tn-border)', backgroundColor: 'var(--tn-bg-highlight)' }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFileBar}
              className="h-8 w-8"
              title={isFileBarVisible ? 'Hide sidebar' : 'Show sidebar'}
            >
              {isFileBarVisible ? (
                <PanelLeftClose className="h-4 w-4" style={{ color: 'var(--tn-fg)' }} />
              ) : (
                <PanelLeft className="h-4 w-4" style={{ color: 'var(--tn-fg)' }} />
              )}
            </Button>
            <span className="text-sm font-semibold" style={{ color: 'var(--tn-fg)' }}>Portfolio</span>
          </div>

          <div className="flex-1 overflow-hidden">
            <CodeEditor
              tabs={tabs}
              activeTabId={activeTabId}
              onTabChange={changeTab}
              onTabClose={closeTab}
              onFileOpen={openFileById}
            />
          </div>

          <div
            className={cn('relative group hidden md:block', isResizing && 'select-none')}
            onMouseDown={handleMouseDown}
            style={{
              cursor: 'ns-resize',
              backgroundColor: 'var(--tn-border)',
              height: '4px',
            }}
          >
            <div
              className="absolute inset-x-0 -top-1 -bottom-1 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ pointerEvents: 'none' }}
            >
              <GripHorizontal className="w-4 h-4" style={{ color: 'var(--tn-blue)' }} />
            </div>
          </div>

          <div className="flex-shrink-0 border-t hidden md:block" style={{ borderColor: 'var(--tn-border)', height: `${terminalHeight}px` }}>
            <Terminal portfolioData={portfolioData} onFileOpen={openFileByName} />
          </div>
        </div>
      </div>
    </div>
  );
}
