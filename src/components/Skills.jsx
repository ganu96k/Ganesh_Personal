import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { profile } from '../data/profile';

export default function Skills() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section" style={{
      background: 'linear-gradient(180deg, var(--color-cream) 0%, var(--color-purple-faint) 50%, var(--color-cream) 100%)',
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
            Skills
          </p>
          <h2>Technical Toolkit</h2>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 'var(--space-sm)',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          {profile.skills.map((skill, i) => (
            <div
              key={i}
              className="animate-on-scroll"
              style={{
                padding: '0.6rem 1.3rem',
                borderRadius: 'var(--radius-xl)',
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--color-border)',
                fontSize: 'clamp(0.82rem, 1.2vw, 0.92rem)',
                fontWeight: 500,
                color: 'var(--color-charcoal)',
                cursor: 'default',
                transition: 'all var(--transition-normal)',
                animationDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(123,107,141,0.2)';
                e.currentTarget.style.borderColor = 'var(--color-purple-light)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(123,107,141,0.1), rgba(244,194,194,0.15))';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.background = '';
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
