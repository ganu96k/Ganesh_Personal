import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { profile } from '../data/profile';

export default function About() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="about" className="section" style={{
      background: 'linear-gradient(180deg, var(--color-cream) 0%, var(--color-white) 50%, var(--color-cream) 100%)',
    }}>
      <div className="container" ref={sectionRef}>
        <div className="section-header animate-on-scroll">
          <p style={{
            fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)',
            color: 'var(--color-purple)',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 'var(--space-xs)',
          }}>
            About Me
          </p>
          <h2>More than just a job title.</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-lg)',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {/* Main intro */}
          <div className="glass-card animate-on-scroll" style={{
            padding: 'var(--space-lg)',
            lineHeight: 1.9,
          }}>
            <p style={{ marginBottom: 'var(--space-md)', fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)' }}>
              {profile.about.intro}
            </p>
            <p style={{ marginBottom: 'var(--space-md)', fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)' }}>
              {profile.about.personality}
            </p>
            <p style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)' }}>
              {profile.about.aspirations}
            </p>
          </div>

          {/* Values Tags */}
          <div className="animate-on-scroll delay-1" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'var(--space-sm)',
          }}>
            {profile.about.values.map((value, i) => (
              <span key={i} style={{
                padding: '0.55rem 1.2rem',
                borderRadius: 'var(--radius-xl)',
                background: i % 2 === 0
                  ? 'linear-gradient(135deg, var(--color-blush-light), rgba(244,194,194,0.3))'
                  : 'linear-gradient(135deg, var(--color-purple-faint), rgba(123,107,141,0.15))',
                fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)',
                fontWeight: 600,
                color: i % 2 === 0 ? 'var(--color-blush-dark)' : 'var(--color-purple-dark)',
                border: i % 2 === 0
                  ? '1px solid rgba(244,194,194,0.4)'
                  : '1px solid rgba(123,107,141,0.25)',
                transition: 'all var(--transition-normal)',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'translateY(-2px) scale(1.05)';
                e.target.style.boxShadow = i % 2 === 0 ? 'var(--shadow-blush)' : 'var(--shadow-glow)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = '';
                e.target.style.boxShadow = '';
              }}
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
