import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { profile } from '../data/profile';

export default function Career() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="career" className="section" style={{
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
            Career
          </p>
          <h2>Professional Journey</h2>
          <p>A timeline of growth, learning, and meaningful contributions.</p>
        </div>

        {/* Timeline */}
        <div style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 'clamp(14px, 3vw, 20px)',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, var(--color-blush), var(--color-purple), var(--color-blush))',
            borderRadius: '1px',
          }} />

          {profile.career.map((job, i) => (
            <div
              key={i}
              className="animate-on-scroll"
              style={{
                position: 'relative',
                paddingLeft: 'clamp(40px, 8vw, 56px)',
                paddingBottom: i < profile.career.length - 1 ? 'var(--space-lg)' : 0,
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: 'clamp(8px, 2.2vw, 14px)',
                top: '6px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: i === 0
                  ? 'linear-gradient(135deg, var(--color-blush), var(--color-purple))'
                  : 'var(--color-white)',
                border: i === 0 ? 'none' : '2px solid var(--color-purple-light)',
                boxShadow: i === 0 ? '0 0 12px rgba(123,107,141,0.3)' : 'var(--shadow-sm)',
              }} />

              <div className="glass-card" style={{
                padding: 'var(--space-md)',
              }}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                  marginBottom: 'var(--space-sm)',
                }}>
                  <h3 style={{
                    fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
                    margin: 0,
                  }}>
                    {job.role}
                  </h3>
                  {i === 0 && (
                    <span style={{
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-xl)',
                      background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                      color: 'white',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      Current
                    </span>
                  )}
                </div>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--space-sm)',
                  marginBottom: 'var(--space-sm)',
                  color: 'var(--color-gray)',
                  fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Briefcase size={13} /> {job.company}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <MapPin size={13} /> {job.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar size={13} /> {job.period}
                  </span>
                </div>

                <p style={{
                  color: 'var(--color-charcoal-light)',
                  fontSize: 'clamp(0.88rem, 1.3vw, 0.95rem)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-sm)',
                }}>
                  {job.description}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                }}>
                  {Array.isArray(job.technologies) && job.technologies.map((tech, j) => (
                    <span key={j} style={{
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--color-purple-faint)',
                      color: 'var(--color-purple-dark)',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}>
                      {tech}
                    </span>
                  ))}

                  {Array.isArray(job.responsibilities) && job.responsibilities.map((r, j) => (
                    <span key={`r-${j}`} style={{
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(237,232,242,0.6)',
                      color: 'var(--color-charcoal-light)',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}>
                      {r}
                    </span>
                  ))}

                  {Array.isArray(job.projects) && job.projects.map((p, j) => (
                    <span key={`p-${j}`} style={{
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(244,226,226,0.6)',
                      color: 'var(--color-charcoal-light)',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
