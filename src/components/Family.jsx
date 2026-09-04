import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { profile } from '../data/profile';

const relationColors = {
  'Father': { bg: 'linear-gradient(135deg, var(--color-purple), var(--color-purple-dark))', light: 'var(--color-purple-faint)' },
  'Mother': { bg: 'linear-gradient(135deg, var(--color-blush), var(--color-blush-dark))', light: 'var(--color-blush-light)' },
  'Sister': { bg: 'linear-gradient(135deg, #7EC8E3, #4FA8C9)', light: '#E8F4F8' },
  'Grandfather': { bg: 'linear-gradient(135deg, var(--color-gold), #B8924E)', light: '#FDF5E8' },
};

export default function Family() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="family" className="section" style={{
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
            Family
          </p>
          <h2>My Roots</h2>
          <p>A family built on love, respect, and togetherness.</p>
        </div>

        {/* Family Members */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'var(--space-md)',
          maxWidth: '1000px',
          margin: '0 auto var(--space-xl)',
        }}>
          {profile.family.map((member, i) => {
            const colors = relationColors[member.relation] || relationColors['Father'];
            return (
              <div
                key={i}
                className="glass-card animate-on-scroll"
                style={{
                  padding: 'var(--space-lg)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: colors.bg,
                }} />

                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: colors.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-sm)',
                  color: 'var(--color-white)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                }}>
                  {member.name[0]}
                </div>

                <p style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-purple)',
                  marginBottom: '0.2rem',
                }}>
                  {member.relation}
                </p>

                <h3 style={{
                  fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)',
                  margin: '0 0 0.3rem',
                }}>
                  {member.name}
                </h3>

                <p style={{
                  fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)',
                  color: 'var(--color-gray)',
                  marginBottom: 'var(--space-sm)',
                }}>
                  {member.profession} · {member.location}
                </p>

                <p style={{
                  fontSize: 'clamp(0.82rem, 1.1vw, 0.9rem)',
                  color: 'var(--color-charcoal-light)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}>
                  {member.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Family Values */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 className="animate-on-scroll" style={{
            textAlign: 'center',
            fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
            marginBottom: 'var(--space-lg)',
          }}>
            What We Believe In
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
            gap: 'var(--space-sm)',
          }}>
            {profile.familyValues.map((value, i) => (
              <div
                key={i}
                className="animate-on-scroll"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-sm)',
                  padding: 'var(--space-md)',
                  borderRadius: 'var(--radius-md)',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.5)' : 'rgba(244,194,194,0.08)',
                }}
              >
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: i % 2 === 0 ? 'var(--color-purple)' : 'var(--color-blush-dark)',
                  flexShrink: 0,
                  marginTop: '7px',
                }} />
                <p style={{
                  fontSize: 'clamp(0.88rem, 1.2vw, 0.95rem)',
                  color: 'var(--color-charcoal-light)',
                  lineHeight: 1.7,
                }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
