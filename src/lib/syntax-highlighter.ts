import { marked } from 'marked';

/**
 * Parse markdown and apply Tokyo Night theme styling
 */
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
