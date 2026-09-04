import { GraduationCap, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { profile } from '../data/profile';

export default function Education() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="education" className="section" style={{
      background: 'var(--color-cream)',
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
            Education
          </p>
          <h2>Academic Foundation</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: 'var(--space-md)',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {profile.education.map((edu, i) => (
            <div
              key={i}
              className="glass-card animate-on-scroll"
              style={{
                padding: 'var(--space-lg)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative corner */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '80px',
                height: '80px',
                background: i === 0
                  ? 'linear-gradient(135deg, transparent 50%, rgba(123,107,141,0.08) 50%)'
                  : 'linear-gradient(135deg, transparent 50%, rgba(244,194,194,0.12) 50%)',
                borderRadius: '0 var(--radius-lg) 0 0',
              }} />

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                marginBottom: 'var(--space-md)',
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  background: i === 0
                    ? 'linear-gradient(135deg, var(--color-purple), var(--color-purple-dark))'
                    : 'linear-gradient(135deg, var(--color-blush), var(--color-blush-dark))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <GraduationCap size={20} style={{ color: 'var(--color-white)' }} />
                </div>
                <div>
                  <h3 style={{
                    fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    {edu.degree}
                  </h3>
                </div>
              </div>

              <p style={{
                fontSize: 'clamp(0.88rem, 1.2vw, 0.95rem)',
                color: 'var(--color-charcoal-light)',
                marginBottom: '0.3rem',
                fontWeight: 500,
              }}>
                {edu.institution}
              </p>

              <p style={{
                fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)',
                color: 'var(--color-gray)',
                marginBottom: 'var(--space-sm)',
              }}>
                {edu.university || edu.board}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                flexWrap: 'wrap',
              }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.25rem 0.7rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--color-purple-faint)',
                  color: 'var(--color-purple-dark)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                }}>
                  <Calendar size={12} /> {edu.year}
                </span>
                <span style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-charcoal-light)',
                  fontWeight: 500,
                }}>
                  {edu.details}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
