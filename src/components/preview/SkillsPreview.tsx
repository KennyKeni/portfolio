import { Code2, ChevronRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function SkillsPreview() {
  const { skills } = portfolioData;

  return (
    <div style={{ fontFamily: "'Fira Code', 'JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', monospace", lineHeight: '1.6' }}>
      <h1 style={{ color: 'var(--tn-purple)', fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Code2 size={32} />
        Technical Skills
      </h1>
      {skills.map((skill) => (
        <div key={skill.category} style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--tn-blue)', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ChevronRight size={20} /> {skill.category}
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skill.items.map((item) => (
              <span
                key={item}
                style={{
                  background: 'var(--tn-bg-highlight)',
                  color: 'var(--tn-green)',
                  padding: '0.375rem 0.75rem',
                  borderRadius: '0',
                  border: '1px solid var(--tn-border)',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
