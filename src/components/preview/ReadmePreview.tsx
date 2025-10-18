import { FileText, Terminal, Code2, RefreshCw, Folder, User, Rocket, Cpu, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ClickableCard } from '@/components/ui/ClickableCard';

export function ReadmePreview() {
  return (
    <div style={{ fontFamily: "'Fira Code', 'JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', monospace", lineHeight: '1.6', maxWidth: '900px', margin: '0 auto' }}>
      <Card className="p-10 mb-8 text-center">
        <h1 style={{ color: 'var(--tn-purple)', fontSize: '2.5rem', fontWeight: '700', margin: '0 0 1rem 0' }}>
          Welcome to My Portfolio
        </h1>
        <p style={{ color: 'var(--tn-fg)', fontSize: '1.125rem', margin: '0', lineHeight: '1.7' }}>
          Hi! My name is Kenny, a 4th year at Georgia Tech pursuing a concurrent B.S./M.S. in Computer Science with a 4.0 GPA. I'm passionate about building scalable systems and machine learning applications.
        </p>
      </Card>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--tn-blue)', fontSize: '1.5rem', fontWeight: '600', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Folder size={24} /> Explore Portfolio
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', gridAutoRows: '1fr' }}>
          <ClickableCard href="file://about" color="purple">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <User size={32} style={{ color: 'var(--tn-purple)' }} />
              <h3 style={{ color: 'var(--tn-purple)', fontSize: '1.125rem', fontWeight: '600', margin: '0' }}>
                about.md
              </h3>
            </div>
            <p style={{ color: 'var(--tn-comment)', fontSize: '0.875rem', margin: '0' }}>
              Learn more about me
            </p>
          </ClickableCard>

          <ClickableCard href="file://projects-index" color="blue">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Rocket size={32} style={{ color: 'var(--tn-blue)' }} />
              <h3 style={{ color: 'var(--tn-blue)', fontSize: '1.125rem', fontWeight: '600', margin: '0' }}>
                projects/
              </h3>
            </div>
            <p style={{ color: 'var(--tn-comment)', fontSize: '0.875rem', margin: '0' }}>
              View my projects
            </p>
          </ClickableCard>

          <ClickableCard href="file://skills" color="green">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Cpu size={32} style={{ color: 'var(--tn-green)' }} />
              <h3 style={{ color: 'var(--tn-green)', fontSize: '1.125rem', fontWeight: '600', margin: '0' }}>
                skills.ts
              </h3>
            </div>
            <p style={{ color: 'var(--tn-comment)', fontSize: '0.875rem', margin: '0' }}>
              Check out my technical skills
            </p>
          </ClickableCard>

          <ClickableCard href="file://experience" color="orange">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Briefcase size={32} style={{ color: 'var(--tn-orange)' }} />
              <h3 style={{ color: 'var(--tn-orange)', fontSize: '1.125rem', fontWeight: '600', margin: '0' }}>
                experience.json
              </h3>
            </div>
            <p style={{ color: 'var(--tn-comment)', fontSize: '0.875rem', margin: '0' }}>
              See my work history
            </p>
          </ClickableCard>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--tn-blue)', fontSize: '1.5rem', fontWeight: '600', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Terminal size={24} /> Terminal Commands
        </h2>
        <Card className="p-6">
          <div style={{ color: 'var(--tn-green)', fontSize: '0.875rem', marginBottom: '1rem' }}>$ help</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', fontFamily: 'monospace', fontSize: '0.875rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: 'var(--tn-blue)' }}>help</span>
              <span style={{ color: 'var(--tn-comment)' }}>Show available commands</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: 'var(--tn-blue)' }}>about</span>
              <span style={{ color: 'var(--tn-comment)' }}>Display about info</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: 'var(--tn-blue)' }}>projects</span>
              <span style={{ color: 'var(--tn-comment)' }}>List all projects</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: 'var(--tn-blue)' }}>skills</span>
              <span style={{ color: 'var(--tn-comment)' }}>Show skills</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: 'var(--tn-blue)' }}>experience</span>
              <span style={{ color: 'var(--tn-comment)' }}>View work experience</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: 'var(--tn-blue)' }}>clear</span>
              <span style={{ color: 'var(--tn-comment)' }}>Clear terminal</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: 'var(--tn-blue)' }}>ls</span>
              <span style={{ color: 'var(--tn-comment)' }}>List files</span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 style={{ color: 'var(--tn-blue)', fontSize: '1.25rem', fontWeight: '600', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <RefreshCw size={20} /> Toggle Views
        </h2>
        <p style={{ color: 'var(--tn-fg)', margin: '0 0 1rem 0', lineHeight: '1.7' }}>
          Use the <strong style={{ color: 'var(--tn-purple)' }}>Preview/Source</strong> toggle in the editor to switch between:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div>
            <div style={{ color: 'var(--tn-blue)', fontWeight: '600', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Code2 size={18} /> Source View
            </div>
            <div style={{ color: 'var(--tn-comment)', fontSize: '0.875rem' }}>Syntax-highlighted source code</div>
          </div>
          <div>
            <div style={{ color: 'var(--tn-green)', fontWeight: '600', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={18} /> Preview View
            </div>
            <div style={{ color: 'var(--tn-comment)', fontSize: '0.875rem' }}>Rendered/formatted content</div>
          </div>
        </div>
      </Card>

      <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--tn-border)', textAlign: 'center', color: 'var(--tn-comment)', fontSize: '0.875rem' }}>
        <div style={{ marginBottom: '0.5rem' }}>Built with</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ background: 'var(--tn-bg-highlight)', color: 'var(--tn-blue)', padding: '0.25rem 0.75rem', borderRadius: '0', border: '1px solid var(--tn-border)' }}>React</span>
          <span style={{ background: 'var(--tn-bg-highlight)', color: 'var(--tn-blue)', padding: '0.25rem 0.75rem', borderRadius: '0', border: '1px solid var(--tn-border)' }}>TypeScript</span>
          <span style={{ background: 'var(--tn-bg-highlight)', color: 'var(--tn-blue)', padding: '0.25rem 0.75rem', borderRadius: '0', border: '1px solid var(--tn-border)' }}>Tailwind CSS</span>
          <span style={{ background: 'var(--tn-bg-highlight)', color: 'var(--tn-purple)', padding: '0.25rem 0.75rem', borderRadius: '0', border: '1px solid var(--tn-border)' }}>Tokyo Night</span>
        </div>
      </div>
    </div>
  );
}
