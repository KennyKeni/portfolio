import { Card } from '@/components/ui/card';
import { ClickableCard } from '@/components/ui/ClickableCard';
import { Rocket, Github, ExternalLink, FolderOpen } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function ProjectsIndexPreview() {
  return (
    <div style={{ fontFamily: "'Fira Code', 'JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', monospace", lineHeight: '1.6', maxWidth: '900px', margin: '0 auto' }}>
      <Card className="p-10 mb-8">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <FolderOpen size={32} style={{ color: 'var(--tn-blue)' }} />
          <h1 style={{ color: 'var(--tn-blue)', fontSize: '2rem', fontWeight: '700', margin: '0' }}>
            Projects
          </h1>
        </div>
        <p style={{ color: 'var(--tn-fg)', fontSize: '1.125rem', margin: '0', lineHeight: '1.7' }}>
          A collection of my notable projects showcasing expertise in full-stack development, machine learning, and distributed systems.
        </p>
      </Card>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {portfolioData.projects.map((project, index) => (
          <ClickableCard key={index} href={`file://project-${index}`} color="purple">
            <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ flex: '1' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Rocket size={24} style={{ color: 'var(--tn-purple)' }} />
                  <h3 style={{ color: 'var(--tn-purple)', fontSize: '1.5rem', fontWeight: '600', margin: '0' }}>
                    {project.name}
                  </h3>
                </div>
                <p style={{ color: 'var(--tn-fg)', fontSize: '1rem', margin: '0 0 1rem 0', lineHeight: '1.7' }}>
                  {project.description}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexShrink: '0' }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '2.25rem',
                      height: '2.25rem',
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
                    <Github size={18} />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '2.25rem',
                      height: '2.25rem',
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
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    background: 'var(--tn-bg-highlight)',
                    color: 'var(--tn-green)',
                    padding: '0.25rem 0.625rem',
                    borderRadius: '0',
                    border: '1px solid var(--tn-border)',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    fontFamily: 'monospace',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </ClickableCard>
        ))}
      </div>

      <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--tn-border)', textAlign: 'center', color: 'var(--tn-comment)', fontSize: '0.875rem' }}>
        <p style={{ margin: '0' }}>
          Click on any project to view detailed information, or use the links to visit GitHub repositories and live demos.
        </p>
      </div>
    </div>
  );
}
