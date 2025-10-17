import { Briefcase, Building2, Calendar, ChevronRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { Card } from '@/components/ui/card';

export function ExperiencePreview() {
  const { experience } = portfolioData;

  return (
    <div style={{ fontFamily: "'Fira Code', 'JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', monospace", lineHeight: '1.6', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ color: 'var(--tn-purple)', fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Briefcase size={28} />
        Work Experience
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {experience.map((exp, index) => (
          <Card key={index} className="p-7">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1', minWidth: '250px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <Building2 size={18} style={{ color: 'var(--tn-blue)' }} />
                  <h3 style={{ color: 'var(--tn-blue)', fontSize: '1.25rem', fontWeight: '600', margin: '0' }}>
                    {exp.company}
                  </h3>
                </div>
                <p style={{ color: 'var(--tn-fg)', fontSize: '1.1rem', fontWeight: '500', margin: '0' }}>
                  {exp.title}
                </p>
              </div>
              <div style={{ color: 'var(--tn-comment)', fontSize: '0.875rem', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Calendar size={14} />
                {exp.period}
              </div>
            </div>

            <p style={{ color: 'var(--tn-fg)', margin: '0 0 1.25rem 0', lineHeight: '1.7' }}>
              {exp.description}
            </p>

            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ color: 'var(--tn-purple)', fontSize: '0.875rem', fontWeight: '600', margin: '0 0 0.75rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Key Achievements
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                    <ChevronRight size={20} style={{ color: 'var(--tn-green)', marginTop: '0.1rem', flexShrink: '0' }} />
                    <p style={{ color: 'var(--tn-fg)', margin: '0', lineHeight: '1.6', fontSize: '0.9rem' }}>
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ color: 'var(--tn-purple)', fontSize: '0.875rem', fontWeight: '600', margin: '0 0 0.75rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Technologies
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: 'var(--tn-bg-highlight)',
                      color: 'var(--tn-green)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '0',
                      border: '1px solid var(--tn-border)',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      fontFamily: 'monospace',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
