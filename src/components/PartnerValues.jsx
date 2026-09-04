import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { profile } from '../data/profile';

export default function PartnerValues() {
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
            Partner
          </p>
          <h2>What I Value in a Partner</h2>
          <p>More than a checklist — these are the qualities that truly matter to me.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'var(--space-md)',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {profile.partnerValues.map((item, i) => (
            <div
              key={i}
              className="glass-card animate-on-scroll"
              style={{
                padding: 'var(--space-lg)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                fontSize: 'clamp(3rem, 5vw, 4rem)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                color: i % 2 === 0 ? 'rgba(244,194,194,0.15)' : 'rgba(123,107,141,0.1)',
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              <h3 style={{
                fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)',
                margin: '0 0 var(--space-sm)',
                position: 'relative',
              }}>
                {item.title}
              </h3>

              <p style={{
                fontSize: 'clamp(0.88rem, 1.2vw, 0.95rem)',
                color: 'var(--color-charcoal-light)',
                lineHeight: 1.7,
                position: 'relative',
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
