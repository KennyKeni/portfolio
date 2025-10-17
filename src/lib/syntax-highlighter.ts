import { marked } from 'marked';

export interface HighlightToken {
  type: 'keyword' | 'string' | 'comment' | 'number' | 'function' | 'operator' | 'text';
  content: string;
}

const patterns = {
  typescript: {
    keyword: /\b(const|let|var|function|return|if|else|for|while|class|interface|type|export|import|from|async|await|new|this|extends|implements|public|private|protected|static|readonly)\b/g,
    string: /(["'`])(?:(?=(\\?))\2.)*?\1/g,
    comment: /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
    number: /\b(\d+\.?\d*)\b/g,
    function: /\b([a-zA-Z_]\w*)\s*(?=\()/g,
  },
  json: {
    string: /"(?:[^"\\]|\\.)*"/g,
    number: /\b-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/g,
    keyword: /\b(true|false|null)\b/g,
  },
  markdown: {
    // Simple markdown highlighting
    keyword: /^#{1,6}\s.+$/gm, // Headers
    string: /`[^`]+`/g, // Inline code
    comment: /\[.+?\]\(.+?\)/g, // Links
  },
};

export function highlightCode(code: string, language: string): string {
  if (!code) return '';

  const lang = language.toLowerCase();
  const langPatterns = patterns[lang as keyof typeof patterns];

  if (!langPatterns) {
    return escapeHtml(code);
  }

  const tokens: Array<{ start: number; end: number; type: string; content: string }> = [];

  Object.entries(langPatterns).forEach(([type, pattern]) => {
    const regex = new RegExp(pattern.source, pattern.flags);
    let match;

    while ((match = regex.exec(code)) !== null) {
      tokens.push({
        start: match.index,
        end: match.index + match[0].length,
        type,
        content: match[0],
      });
    }
  });

  tokens.sort((a, b) => a.start - b.start);

  const mergedTokens: typeof tokens = [];
  tokens.forEach((token) => {
    if (mergedTokens.length === 0) {
      mergedTokens.push(token);
      return;
    }

    const last = mergedTokens[mergedTokens.length - 1];
    if (token.start < last.end) {
      return;
    }

    mergedTokens.push(token);
  });

  let result = '';
  let lastIndex = 0;

  mergedTokens.forEach((token) => {
    if (token.start > lastIndex) {
      result += escapeHtml(code.slice(lastIndex, token.start));
    }

    const colorMap: Record<string, string> = {
      keyword: 'var(--tn-purple)',
      string: 'var(--tn-green)',
      comment: 'var(--tn-comment)',
      number: 'var(--tn-orange)',
      function: 'var(--tn-blue)',
    };

    const color = colorMap[token.type] || 'var(--tn-fg)';
    result += `<span style="color: ${color}">${escapeHtml(token.content)}</span>`;
    lastIndex = token.end;
  });

  if (lastIndex < code.length) {
    result += escapeHtml(code.slice(lastIndex));
  }

  return result;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export function parseMarkdown(markdown: string): string {
  const rawHtml = marked.parse(markdown, { async: false }) as string;

  return rawHtml
    .replace(/<h1>/g, '<h1 style="color: var(--tn-purple); font-size: 2rem; font-weight: 700; margin-bottom: 1rem;">')
    .replace(/<h2>/g, '<h2 style="color: var(--tn-blue); font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">')
    .replace(/<h3>/g, '<h3 style="color: var(--tn-cyan); font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem;">')
    .replace(/<strong>/g, '<strong style="color: var(--tn-yellow); font-weight: 600;">')
    .replace(/<em>/g, '<em style="color: var(--tn-cyan);">')
    .replace(/<code>/g, '<code style="background-color: var(--tn-bg-highlight); color: var(--tn-green); padding: 0.125rem 0.375rem; border-radius: 0.25rem; font-family: monospace;">')
    .replace(/<a href="/g, '<a style="color: var(--tn-blue); text-decoration: underline;" target="_blank" rel="noopener noreferrer" href="')
    .replace(/<li>/g, '<li style="margin-left: 1.5rem; color: var(--tn-fg);">')
    .replace(/<p>/g, '<p style="margin-bottom: 1rem; color: var(--tn-fg);">')
    .replace(/<ul>/g, '<ul style="margin-bottom: 1rem;">')
    .replace(/<ol>/g, '<ol style="margin-bottom: 1rem; margin-left: 1.5rem;">');
}
