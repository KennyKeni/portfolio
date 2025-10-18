import { useState, useCallback, useEffect } from 'react';
import type { FileNode, TabItem } from '@/types/portfolio';
import { isMobile } from '@/lib/breakpoints';

export function useFileSystem(fileTree: FileNode) {
  const [tabs, setTabs] = useState<TabItem[]>([]);
  const [activeTabId, setActiveTabId] = useState<string | null>(null);
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);
  const [isNavigatingFromHistory, setIsNavigatingFromHistory] = useState(false);

  const findFileByName = useCallback(
    (fileName: string, node: FileNode = fileTree): FileNode | null => {
      if (node.type === 'file' && node.name === fileName) {
        return node;
      }

      if (node.children) {
        for (const child of node.children) {
          const found = findFileByName(fileName, child);
          if (found) return found;
        }
      }

      return null;
    },
    [fileTree]
  );

  const findFileById = useCallback(
    (fileId: string, node: FileNode = fileTree): FileNode | null => {
      if (node.id === fileId) {
        return node;
      }

      if (node.children) {
        for (const child of node.children) {
          const found = findFileById(fileId, child);
          if (found) return found;
        }
      }

      return null;
    },
    [fileTree]
  );

  const openFile = useCallback((node: FileNode, skipHistoryUpdate = false) => {
    if (node.type !== 'file' || !node.content) return;

    setTabs((prevTabs) => {
      const existingTab = prevTabs.find((tab) => tab.id === node.id);

      if (existingTab) {
        setActiveTabId(existingTab.id);
        setSelectedFileId(node.id);

        // Update URL hash unless we're navigating from history
        // Also skip if the URL already matches (prevents duplicate history entries)
        const currentHash = `#file=${encodeURIComponent(node.name)}`;
        if (!skipHistoryUpdate && window.location.hash !== currentHash) {
          window.history.pushState(null, '', currentHash);
        }

        return prevTabs;
      }

      const newTab: TabItem = {
        id: node.id,
        name: node.name,
        content: node.content || '',
        language: node.language || 'text',
        viewMode: 'code',
        previewHtml: node.previewHtml,
        previewComponent: node.previewComponent,
      };

      setActiveTabId(newTab.id);
      setSelectedFileId(node.id);

      // Update URL hash unless we're navigating from history
      // Also skip if the URL already matches (prevents duplicate history entries)
      const currentHash = `#file=${encodeURIComponent(node.name)}`;
      if (!skipHistoryUpdate && window.location.hash !== currentHash) {
        window.history.pushState(null, '', currentHash);
      }

      // On mobile, replace all tabs with just the new tab
      if (isMobile()) {
        return [newTab];
      }

      return [...prevTabs, newTab];
    });
  }, []);

  const openFileByName = useCallback(
    (fileName: string) => {
      const file = findFileByName(fileName);
      if (file) {
        openFile(file);
      }
    },
    [findFileByName, openFile]
  );

  const openFileById = useCallback(
    (fileId: string) => {
      const file = findFileById(fileId);
      if (file) {
        openFile(file);
      }
    },
    [findFileById, openFile]
  );

  const closeTab = useCallback(
    (tabId: string) => {
      setTabs((prevTabs) => {
        const newTabs = prevTabs.filter((tab) => tab.id !== tabId);

        if (tabId === activeTabId) {
          if (newTabs.length > 0) {
            const currentIndex = prevTabs.findIndex((tab) => tab.id === tabId);
            const newActiveIndex = Math.max(0, currentIndex - 1);
            setActiveTabId(newTabs[newActiveIndex]?.id || null);
            setSelectedFileId(newTabs[newActiveIndex]?.id || null);
          } else {
            setActiveTabId(null);
            setSelectedFileId(null);
          }
        }

        return newTabs;
      });
    },
    [activeTabId]
  );

  const changeTab = useCallback((tabId: string) => {
    setActiveTabId(tabId);
    setSelectedFileId(tabId);

    // Update URL hash when changing tabs (only if different)
    const tab = tabs.find(t => t.id === tabId);
    if (tab) {
      const currentHash = `#file=${encodeURIComponent(tab.name)}`;
      if (window.location.hash !== currentHash) {
        window.history.pushState(null, '', currentHash);
      }
    }
  }, [tabs]);

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      const match = hash.match(/#file=(.+)/);

      if (match) {
        const fileName = decodeURIComponent(match[1]);
        setIsNavigatingFromHistory(true);

        // Find and open the file from the URL
        const file = findFileByName(fileName);
        if (file) {
          openFile(file, true);
        }

        setIsNavigatingFromHistory(false);
      }
    };

    // Handle initial load from URL
    const hash = window.location.hash;
    const match = hash.match(/#file=(.+)/);
    if (match) {
      const fileName = decodeURIComponent(match[1]);
      const file = findFileByName(fileName);
      if (file) {
        openFile(file, true);
      }
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [findFileByName, openFile]);

  return {
    tabs,
    activeTabId,
    selectedFileId,
    openFile,
    openFileByName,
    openFileById,
    closeTab,
    changeTab,
  };
}
