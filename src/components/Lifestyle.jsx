import * as LucideIcons from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { profile } from '../data/profile';

export default function Lifestyle() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section" style={{
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
            Lifestyle
          </p>
          <h2>What Makes Me, Me</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
          gap: 'var(--space-md)',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {profile.lifestyle.map((item, i) => {
            const Icon = LucideIcons[item.icon] || LucideIcons.Circle;
            return (
              <div
                key={i}
                className="glass-card animate-on-scroll"
                style={{
                  padding: 'var(--space-md)',
                  textAlign: 'center',
                  cursor: 'default',
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: 'var(--radius-md)',
                  background: i % 3 === 0
                    ? 'linear-gradient(135deg, var(--color-blush-light), rgba(244,194,194,0.3))'
                    : i % 3 === 1
                    ? 'linear-gradient(135deg, var(--color-purple-faint), rgba(123,107,141,0.2))'
                    : 'linear-gradient(135deg, #E8F4F8, rgba(126,200,227,0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-sm)',
                  transition: 'transform var(--transition-normal)',
                }}>
                  <Icon size={22} style={{
                    color: i % 3 === 0
                      ? 'var(--color-blush-dark)'
                      : i % 3 === 1
                      ? 'var(--color-purple)'
                      : '#4FA8C9',
                  }} />
                </div>
                <p style={{
                  fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)',
                  fontWeight: 500,
                  color: 'var(--color-charcoal)',
                }}>
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
