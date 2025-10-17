import { useState, useCallback } from 'react';
import type { FileNode, TabItem } from '@/types/portfolio';

export function useFileSystem(fileTree: FileNode) {
  const [tabs, setTabs] = useState<TabItem[]>([]);
  const [activeTabId, setActiveTabId] = useState<string | null>(null);
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);

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

  const openFile = useCallback((node: FileNode) => {
    if (node.type !== 'file' || !node.content) return;

    setTabs((prevTabs) => {
      const existingTab = prevTabs.find((tab) => tab.id === node.id);

      if (existingTab) {
        setActiveTabId(existingTab.id);
        setSelectedFileId(node.id);
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
  }, []);

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
