import { useState, useCallback, useRef, useEffect } from 'react';
import type { PortfolioData } from '@/types/portfolio';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
}

interface UseTerminalProps {
  portfolioData: PortfolioData;
  onFileOpen?: (fileName: string) => void;
}

export function useTerminal({ portfolioData, onFileOpen }: UseTerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to Portfolio Terminal v1.0.0' },
    { type: 'output', content: 'Type "help" for available commands.' },
    { type: 'output', content: '' },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const addLine = useCallback((type: TerminalLine['type'], content: string) => {
    setLines((prev) => [...prev, { type, content }]);
  }, []);

  const executeCommand = useCallback(
    (command: string) => {
      const trimmed = command.trim();
      if (!trimmed) return;

      addLine('input', `$ ${trimmed}`);

      const [cmd, ...args] = trimmed.split(' ');

      switch (cmd.toLowerCase()) {
        case 'help':
          addLine('output', '');
          addLine('output', 'Available commands:');
          addLine('output', '  help         - Show this help message');
          addLine('output', '  about        - Display about information');
          addLine('output', '  projects     - List all projects');
          addLine('output', '  skills       - Show technical skills');
          addLine('output', '  experience   - View work experience');
          addLine('output', '  contact      - Show contact information');
          addLine('output', '  ls           - List files');
          addLine('output', '  cat [file]   - Display file contents');
          addLine('output', '  clear        - Clear terminal');
          addLine('output', '  whoami       - Guess who?');
          addLine('output', '');
          break;

        case 'about':
          addLine('output', '');
          addLine('output', `Name: ${portfolioData.about.name}`);
          addLine('output', `Title: ${portfolioData.about.title}`);
          addLine('output', `Location: ${portfolioData.about.location}`);
          addLine('output', '');
          addLine('output', portfolioData.about.bio);
          addLine('output', '');
          break;

        case 'projects':
          addLine('output', '');
          addLine('output', `Found ${portfolioData.projects.length} projects:`);
          addLine('output', '');
          portfolioData.projects.forEach((project, index) => {
            addLine('output', `${index + 1}. ${project.name}`);
            addLine('output', `   ${project.description}`);
            addLine('output', `   Tech: ${project.technologies.join(', ')}`);
            addLine('output', '');
          });
          break;

        case 'skills':
          addLine('output', '');
          portfolioData.skills.forEach((skill) => {
            addLine('output', `${skill.category}:`);
            addLine('output', `  ${skill.items.join(', ')}`);
            addLine('output', '');
          });
          break;

        case 'experience':
          addLine('output', '');
          portfolioData.experience.forEach((exp, index) => {
            addLine('output', `${index + 1}. ${exp.title} @ ${exp.company}`);
            addLine('output', `   Period: ${exp.period}`);
            addLine('output', `   ${exp.description}`);
            addLine('output', '');
          });
          break;

        case 'contact':
          addLine('output', '');
          addLine('output', 'Contact Information:');
          addLine('output', `  Email: ${portfolioData.about.email}`);
          addLine('output', `  GitHub: https://github.com/${portfolioData.about.github}`);
          if (portfolioData.about.linkedin) {
            addLine('output', `  LinkedIn: https://linkedin.com/in/${portfolioData.about.linkedin}`);
          }
          if (portfolioData.about.website) {
            addLine('output', `  Website: ${portfolioData.about.website}`);
          }
          addLine('output', '');
          break;

        case 'ls':
          addLine('output', '');
          addLine('output', 'about.md');
          addLine('output', 'projects/');
          addLine('output', 'skills.ts');
          addLine('output', 'experience.json');
          addLine('output', 'README.md');
          addLine('output', '');
          break;

        case 'cat':
          if (args.length === 0) {
            addLine('error', 'cat: missing file operand');
            addLine('output', 'Usage: cat [file]');
          } else {
            const fileName = args[0];
            if (onFileOpen) {
              onFileOpen(fileName);
              addLine('output', `Opening ${fileName}...`);
            } else {
              addLine('error', `cat: ${fileName}: No such file`);
            }
          }
          addLine('output', '');
          break;

        case 'clear':
          setLines([]);
          return;

        case 'whoami':
          addLine('output', '');
          addLine('output', portfolioData.about.name);
          addLine('output', `A ${portfolioData.about.title.toLowerCase()} who loves building cool stuff.`);
          addLine('output', '');
          break;

        case 'echo':
          addLine('output', args.join(' '));
          addLine('output', '');
          break;

        case 'pwd':
          addLine('output', '/home/portfolio');
          addLine('output', '');
          break;

        default:
          addLine('error', `Command not found: ${cmd}`);
          addLine('output', 'Type "help" for available commands.');
          addLine('output', '');
      }
    },
    [addLine, portfolioData, onFileOpen]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!input.trim()) return;

      executeCommand(input);
      setHistory((prev) => [...prev, input]);
      setHistoryIndex(-1);
      setInput('');
    },
    [input, executeCommand]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (history.length === 0) return;

        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex === -1) return;

        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    },
    [history, historyIndex]
  );

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return {
    lines,
    input,
    setInput,
    handleSubmit,
    handleKeyDown,
    focusInput,
    inputRef,
  };
}
