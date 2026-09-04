import { Award, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { profile } from '../data/profile';

export default function Certificates() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section" style={{
      background: 'linear-gradient(180deg, var(--color-cream) 0%, var(--color-white) 100%)',
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
            Certifications
          </p>
          <h2>Professional Credentials</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'var(--space-md)',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {profile.certifications.map((cert, i) => (
            <div
              key={i}
              className="glass-card animate-on-scroll"
              style={{
                padding: 'var(--space-lg)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-sm)',
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, var(--color-gold), #B8924E)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Award size={22} style={{ color: 'var(--color-white)' }} />
              </div>

              <h3 style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
                margin: 0,
                lineHeight: 1.4,
              }}>
                {cert.name}
              </h3>

              <p style={{
                fontSize: 'clamp(0.82rem, 1.1vw, 0.88rem)',
                color: 'var(--color-gray)',
              }}>
                {cert.issuer} · {cert.year}
              </p>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    marginTop: 'auto',
                    paddingTop: 'var(--space-sm)',
                    fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)',
                    fontWeight: 500,
                    color: 'var(--color-purple)',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--color-purple-dark)'}
                  onMouseLeave={e => e.target.style.color = 'var(--color-purple)'}
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
