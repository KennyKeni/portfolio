import { MapPin, Mail, Github, Linkedin, Globe, Code, Rocket } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { Card } from '@/components/ui/card';

export function AboutPreview() {
  const { about } = portfolioData;

  return (
    <div style={{ fontFamily: "'Fira Code', 'JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', monospace", lineHeight: '1.6', maxWidth: '900px', margin: '0 auto' }}>
      <Card className="p-10 mb-6">
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ color: 'var(--tn-green)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>$ cat about.txt</div>
          <h1 style={{ color: 'var(--tn-purple)', fontSize: '2.5rem', fontWeight: '700', margin: '0 0 0.5rem 0' }}>
            {about.name}
          </h1>
          <p style={{ color: 'var(--tn-blue)', fontSize: '1.25rem', fontWeight: '500', margin: '0 0 1.5rem 0' }}>
            {about.title}
          </p>
          <p style={{ color: 'var(--tn-fg)', margin: '0', lineHeight: '1.7' }}>
            {about.bio}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--tn-border)' }}>
          <div>
            <div style={{ color: 'var(--tn-comment)', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Location</div>
            <div style={{ color: 'var(--tn-fg)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={16} />
              {about.location}
            </div>
          </div>
          <div>
            <div style={{ color: 'var(--tn-comment)', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Email</div>
            <a href={`mailto:${about.email}`} style={{ color: 'var(--tn-blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} />
              {about.email}
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <a
            href={`https://github.com/${about.github}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.625rem 1.25rem',
              background: 'var(--tn-bg-highlight)',
              border: '1px solid var(--tn-border)',
              borderRadius: '0',
              color: 'var(--tn-fg)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'border-color 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--tn-blue)'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--tn-border)'}
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={`https://linkedin.com/in/${about.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.625rem 1.25rem',
              background: 'var(--tn-bg-highlight)',
              border: '1px solid var(--tn-border)',
              borderRadius: '0',
              color: 'var(--tn-fg)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'border-color 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--tn-blue)'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--tn-border)'}
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={about.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.625rem 1.25rem',
              background: 'var(--tn-bg-highlight)',
              border: '1px solid var(--tn-border)',
              borderRadius: '0',
              color: 'var(--tn-fg)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'border-color 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--tn-blue)'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--tn-border)'}
          >
            <Globe size={16} />
            Website
          </a>
        </div>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        <Card className="p-7">
          <h3 style={{ color: 'var(--tn-purple)', fontSize: '1.25rem', fontWeight: '600', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Code size={20} />
            What I Do
          </h3>
          <p style={{ color: 'var(--tn-fg)', margin: '0', lineHeight: '1.7' }}>
            I specialize in building modern, scalable web applications using cutting-edge technologies. My approach combines clean code principles with pragmatic problem-solving to deliver high-quality software that makes a difference.
          </p>
        </Card>

        <Card className="p-7">
          <h3 style={{ color: 'var(--tn-blue)', fontSize: '1.25rem', fontWeight: '600', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Rocket size={20} />
            Currently
          </h3>
          <ul style={{ color: 'var(--tn-fg)', margin: '0', paddingLeft: '1.25rem', lineHeight: '1.8' }}>
            <li>Building distributed systems at scale</li>
            <li>Exploring AI/ML integration in web applications</li>
            <li>Contributing to open-source projects</li>
            <li>Mentoring aspiring developers</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
