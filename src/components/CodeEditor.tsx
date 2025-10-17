import { useState, useRef, useEffect } from 'react';
import { Code2, FileText } from 'lucide-react';
import type { TabItem, ViewMode } from '@/types/portfolio';
import { Tab } from './ui/Tab';
import { Switch } from './ui/switch';
import { ScrollArea } from './ui/scroll-area';
import { highlightCode, parseMarkdown } from '@/lib/syntax-highlighter';

interface CodeEditorProps {
  tabs: TabItem[];
  activeTabId: string | null;
  onTabChange: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
  onFileOpen: (fileId: string) => void;
}

export function CodeEditor({ tabs, activeTabId, onTabChange, onTabClose, onFileOpen }: CodeEditorProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement;

      // Traverse up to find an anchor tag (in case user clicks on nested elements like <strong>)
      while (target && target !== contentRef.current) {
        if (target.tagName === 'A') {
          const href = target.getAttribute('href');
          if (href && href.startsWith('file://')) {
            e.preventDefault();
            const fileId = href.replace('file://', '');
            console.log('Opening file with ID:', fileId);
            onFileOpen(fileId);
            return;
          }
        }
        target = target.parentElement as HTMLElement;
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('click', handleClick);
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener('click', handleClick);
      }
    };
  }, [onFileOpen]);
  const [viewModes, setViewModes] = useState<Record<string, ViewMode>>({});

  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  const toggleViewMode = () => {
    if (!activeTab) return;

    setViewModes((prev) => ({
      ...prev,
      [activeTab.id]: prev[activeTab.id] === 'raw' ? 'code' : 'raw',
    }));
  };

  const getViewMode = (tabId: string): ViewMode => {
    return viewModes[tabId] || 'raw';
  };

  const renderContent = () => {
    if (!activeTab) {
      return (
        <div className="flex items-center justify-center h-full" style={{ color: 'var(--tn-comment)' }}>
          <div className="text-center">
            <FileText className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--tn-comment)' }} />
            <p className="text-lg">No file selected</p>
            <p className="text-sm mt-2">Select a file from the explorer to view its contents</p>
          </div>
        </div>
      );
    }

    const viewMode = getViewMode(activeTab.id);
    const lines = activeTab.content.split('\n');

    if (viewMode === 'raw') {
      if (activeTab.previewComponent) {
        const PreviewComponent = activeTab.previewComponent;
        return (
          <div className="p-6" style={{ color: 'var(--tn-fg)', cursor: 'default' }}>
            <PreviewComponent />
          </div>
        );
      }

      if (activeTab.previewHtml) {
        return (
          <div
            className="p-6 prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: activeTab.previewHtml }}
            style={{ color: 'var(--tn-fg)', cursor: 'default' }}
          />
        );
      }

      if (activeTab.language === 'markdown') {
        return (
          <div
            className="p-6 prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(activeTab.content) }}
            style={{ color: 'var(--tn-fg)', cursor: 'default' }}
          />
        );
      }

      return (
        <div className="p-6" style={{ color: 'var(--tn-fg)', cursor: 'default' }}>
          <pre className="whitespace-pre-wrap font-mono text-sm">{activeTab.content}</pre>
        </div>
      );
    }

    return (
      <div className="flex absolute inset-0" style={{ cursor: 'text' }}>
        <div
          className="flex-shrink-0 py-4 text-center select-none"
          style={{
            backgroundColor: 'var(--tn-bg-dark)',
            color: 'var(--tn-comment)',
            borderRight: '1px solid var(--tn-border)',
            width: '3rem',
          }}
        >
          {lines.map((_, index) => (
            <div key={index} className="text-xs leading-6 font-mono px-2">
              {index + 1}
            </div>
          ))}
        </div>

        <div className="flex-1 py-4 px-4 overflow-x-auto">
          <pre className="text-sm font-mono">
            {lines.map((line, index) => (
              <div key={index} className="leading-6">
                <code
                  dangerouslySetInnerHTML={{
                    __html: highlightCode(line, activeTab.language) || '&nbsp;',
                  }}
                />
              </div>
            ))}
          </pre>
        </div>
      </div>
    );
  };

  const currentViewMode = activeTab ? getViewMode(activeTab.id) : 'code';

  return (
    <div className="h-full flex flex-col overflow-hidden" style={{ backgroundColor: 'var(--tn-bg)' }}>
      <div
        className="flex items-center justify-between border-b flex-shrink-0"
        style={{ borderColor: 'var(--tn-border)', backgroundColor: 'var(--tn-bg-highlight)' }}
      >
        <div className="flex items-center overflow-x-auto flex-1">
          {tabs.length === 0 ? (
            <div className="px-4 py-2 text-sm" style={{ color: 'var(--tn-comment)' }}>
              No files open
            </div>
          ) : (
            tabs.map((tab) => (
              <Tab
                key={tab.id}
                id={tab.id}
                name={tab.name}
                isActive={tab.id === activeTabId}
                onSelect={() => onTabChange(tab.id)}
                onClose={() => onTabClose(tab.id)}
                canClose={tabs.length > 1}
              />
            ))
          )}
        </div>

        {activeTab && (
          <div className="flex items-center gap-3 px-4 border-l" style={{ borderColor: 'var(--tn-border)' }}>
            <div className="flex items-center gap-2 cursor-pointer" onClick={toggleViewMode}>
              <FileText
                className="h-4 w-4"
                style={{ color: currentViewMode === 'raw' ? 'var(--tn-green)' : 'var(--tn-comment)' }}
              />
              <span className="text-xs font-medium" style={{ color: currentViewMode === 'raw' ? 'var(--tn-green)' : 'var(--tn-comment)' }}>
                Preview
              </span>
            </div>
            <Switch
              checked={currentViewMode === 'code'}
              onCheckedChange={toggleViewMode}
              className="data-[state=checked]:bg-[var(--tn-blue)] data-[state=unchecked]:bg-[var(--tn-green)]"
            />
            <div className="flex items-center gap-2 cursor-pointer" onClick={toggleViewMode}>
              <span className="text-xs font-medium" style={{ color: currentViewMode === 'code' ? 'var(--tn-blue)' : 'var(--tn-comment)' }}>
                Source
              </span>
              <Code2
                className="h-4 w-4"
                style={{ color: currentViewMode === 'code' ? 'var(--tn-blue)' : 'var(--tn-comment)' }}
              />
            </div>
          </div>
        )}
      </div>

      <ScrollArea className="flex-1 min-h-0">
        <div ref={contentRef} className="min-h-full">{renderContent()}</div>
      </ScrollArea>
    </div>
  );
}
