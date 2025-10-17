import type { Project } from '@/types/portfolio';
import { Card } from '@/components/ui/card';
import { FolderOpen, Github, ExternalLink, ChevronRight } from 'lucide-react';

interface ProjectPreviewProps {
  project: Project;
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <div style={{ fontFamily: "'Fira Code', 'JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', monospace", lineHeight: '1.6', maxWidth: '900px', margin: '0 auto' }}>
      <Card className="p-8">
        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: '1.5rem', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <FolderOpen size={24} style={{ color: 'var(--tn-blue)' }} />
              <h1 style={{ color: 'var(--tn-blue)', fontSize: '1.75rem', fontWeight: '700', margin: '0' }}>
                {project.name}
              </h1>
            </div>
            <p style={{ color: 'var(--tn-fg)', margin: '0', lineHeight: '1.7', fontSize: '1rem' }}>
              {project.description}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexShrink: '0' }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.5rem',
                  height: '2.5rem',
                  background: 'var(--tn-bg-highlight)',
                  border: '1px solid var(--tn-border)',
                  borderRadius: '0',
                  color: 'var(--tn-fg)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'var(--tn-green)';
                  e.currentTarget.style.background = 'var(--tn-bg)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--tn-border)';
                  e.currentTarget.style.background = 'var(--tn-bg-highlight)';
                }}
              >
                <Github size={20} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.5rem',
                  height: '2.5rem',
                  background: 'var(--tn-bg-highlight)',
                  border: '1px solid var(--tn-border)',
                  borderRadius: '0',
                  color: 'var(--tn-fg)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'var(--tn-blue)';
                  e.currentTarget.style.background = 'var(--tn-bg)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--tn-border)';
                  e.currentTarget.style.background = 'var(--tn-bg-highlight)';
                }}
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ color: 'var(--tn-purple)', fontSize: '1rem', fontWeight: '600', margin: '0 0 0.75rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Tech Stack
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  background: 'var(--tn-bg-highlight)',
                  color: 'var(--tn-green)',
                  padding: '0.375rem 0.875rem',
                  borderRadius: '0',
                  border: '1px solid var(--tn-border)',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  fontFamily: 'monospace',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ color: 'var(--tn-purple)', fontSize: '1rem', fontWeight: '600', margin: '0 0 0.75rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Key Highlights
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {project.highlights.map((highlight, index) => (
              <div key={index} style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                <ChevronRight size={20} style={{ color: 'var(--tn-green)', marginTop: '0.1rem', flexShrink: '0' }} />
                <p style={{ color: 'var(--tn-fg)', margin: '0', lineHeight: '1.6' }}>
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
