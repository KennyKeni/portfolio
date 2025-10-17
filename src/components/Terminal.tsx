import { useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { Separator } from './ui/separator';
import { useTerminal } from '@/hooks/useTerminal';
import type { PortfolioData } from '@/types/portfolio';

interface TerminalProps {
  portfolioData: PortfolioData;
  onFileOpen?: (fileName: string) => void;
}

export function Terminal({ portfolioData, onFileOpen }: TerminalProps) {
  const { lines, input, setInput, handleSubmit, handleKeyDown, focusInput, inputRef } = useTerminal({
    portfolioData,
    onFileOpen,
  });

  const scrollViewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollViewportRef.current) {
      scrollViewportRef.current.scrollTop = scrollViewportRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div
      className="h-full flex flex-col border-t"
      style={{
        backgroundColor: 'var(--tn-terminal)',
        borderColor: 'var(--tn-border)',
      }}
    >
      <div className="px-4 py-2 flex items-center gap-2" style={{ backgroundColor: 'var(--tn-bg-highlight)' }}>
        <TerminalIcon className="w-4 h-4" style={{ color: 'var(--tn-green)' }} />
        <span className="text-sm font-semibold" style={{ color: 'var(--tn-fg)' }}>
          Terminal
        </span>
      </div>

      <Separator className="bg-[var(--tn-border)]" />

      <div className="flex-1 relative overflow-hidden">
        <div
          ref={scrollViewportRef}
          className="absolute inset-0 overflow-y-auto p-4 font-mono text-sm cursor-text"
          onClick={focusInput}
          style={{ color: 'var(--tn-fg)' }}
        >
          {lines.map((line, index) => (
            <div
              key={index}
              className="leading-6"
              style={{
                color:
                  line.type === 'input'
                    ? 'var(--tn-cyan)'
                    : line.type === 'error'
                    ? 'var(--tn-red)'
                    : 'var(--tn-fg)',
              }}
            >
              {line.content}
            </div>
          ))}

          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span style={{ color: 'var(--tn-green)' }}>$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none border-none"
              style={{ color: 'var(--tn-cyan)' }}
              spellCheck={false}
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
